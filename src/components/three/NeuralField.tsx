"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { getDotTexture, isSoftwareRenderer, useDeferredMount, rng, useIsMobile, usePrefersReducedMotion, useVisible } from "./common";

type Props = { density?: "hero" | "lab"; className?: string };

const BLUE = new THREE.Color("#007BFF");
const CYAN = new THREE.Color("#00E5FF");
const PURPLE = new THREE.Color("#653BFF");
const EMBER = new THREE.Color("#FF681E");

function Network({ count, pulses, reduce, shape }: { count: number; pulses: number; reduce: boolean; shape: "hero" | "lab" }) {
  const group = useRef<THREE.Group>(null);
  const pulseGeom = useRef<THREE.BufferGeometry>(null);

  const data = useMemo(() => {
    const r = rng(shape === "hero" ? 11 : 29);
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      // Points in a flattened ellipsoid with a denser core, like a stylized brain.
      const u = r() * Math.PI * 2;
      const v = Math.acos(2 * r() - 1);
      const rad = Math.pow(r(), 0.55);
      const sx = shape === "hero" ? 5.4 : 4;
      pts.push(
        new THREE.Vector3(
          Math.sin(v) * Math.cos(u) * rad * sx,
          Math.cos(v) * rad * 2.6,
          Math.sin(v) * Math.sin(u) * rad * 2.8,
        ),
      );
    }
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    pts.forEach((p, i) => {
      positions.set([p.x, p.y, p.z], i * 3);
      const edge = Math.abs(p.x) / 5.4;
      const c = edge > 0.82 && r() > 0.6 ? EMBER : r() > 0.55 ? BLUE : r() > 0.4 ? PURPLE : CYAN;
      colors.set([c.r, c.g, c.b], i * 3);
    });
    // Connect each node to its 3 nearest neighbours within range.
    const edges: [number, number][] = [];
    for (let i = 0; i < count; i++) {
      const near = pts
        .map((q, j) => ({ j, d: j === i ? Infinity : pts[i].distanceToSquared(q) }))
        .sort((a, b) => a.d - b.d)
        .slice(0, 3);
      near.forEach(({ j, d }) => {
        if (d < 2.4 && i < j) edges.push([i, j]);
      });
    }
    const linePos = new Float32Array(edges.length * 6);
    edges.forEach(([a, b], k) => {
      linePos.set([pts[a].x, pts[a].y, pts[a].z, pts[b].x, pts[b].y, pts[b].z], k * 6);
    });
    const pulseState = Array.from({ length: pulses }, () => ({ e: Math.floor(r() * edges.length), t: r(), s: 0.25 + r() * 0.6 }));
    return { pts, positions, colors, edges, linePos, pulseState, pulsePos: new Float32Array(pulses * 3) };
  }, [count, pulses, shape]);

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    if (!reduce) g.rotation.y += dt * 0.045;
    // Restrained parallax toward the pointer.
    const { camera, pointer } = state;
    camera.position.x += (pointer.x * 0.9 - camera.position.x) * 0.03;
    camera.position.y += (pointer.y * 0.5 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
    if (reduce || !pulseGeom.current || data.edges.length === 0) return;
    data.pulseState.forEach((p, i) => {
      p.t += dt * p.s;
      if (p.t > 1) {
        p.t = 0;
        p.e = Math.floor(Math.random() * data.edges.length);
      }
      const [a, b] = data.edges[p.e];
      const A = data.pts[a], B = data.pts[b];
      data.pulsePos[i * 3] = A.x + (B.x - A.x) * p.t;
      data.pulsePos[i * 3 + 1] = A.y + (B.y - A.y) * p.t;
      data.pulsePos[i * 3 + 2] = A.z + (B.z - A.z) * p.t;
    });
    pulseGeom.current.attributes.position.needsUpdate = true;
  });

  const tex = useMemo(() => getDotTexture(), []);

  return (
    <group ref={group} position={[shape === "hero" ? 2.6 : 0, 0, 0]}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[data.positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[data.colors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.11} map={tex} vertexColors transparent depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[data.linePos, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#3a6dff" transparent opacity={0.16} depthWrite={false} blending={THREE.AdditiveBlending} />
      </lineSegments>
      <points>
        <bufferGeometry ref={pulseGeom}>
          <bufferAttribute attach="attributes-position" args={[data.pulsePos, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.2} map={tex} color="#9ff6ff" transparent depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
      {/* Central light */}
      <mesh>
        <sphereGeometry args={[0.16, 24, 24]} />
        <meshBasicMaterial color="#bff7ff" transparent opacity={0.6} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
    </group>
  );
}

export default function NeuralField({ density = "hero", className = "" }: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const visible = useVisible(wrap);
  const mobile = useIsMobile();
  const reduce = usePrefersReducedMotion();
  const ready = useDeferredMount(visible);
  const [still, setStill] = useState(false);
  const count = density === "hero" ? (mobile ? 140 : 320) : mobile ? 110 : 220;
  return (
    <div ref={wrap} className={className} aria-hidden>
      {ready && (
      <Canvas
        onCreated={({ gl }) => setStill(isSoftwareRenderer(gl))}
        dpr={[1, mobile ? 1.5 : 2]}
        camera={{ position: [0, 0, density === "hero" ? 9 : 8], fov: 50 }}
        gl={{ antialias: !mobile, alpha: true, powerPreference: "low-power" }}
        frameloop={still ? "demand" : visible && !reduce ? "always" : "demand"}
      >
        <Network count={count} pulses={reduce ? 0 : mobile ? 24 : 60} reduce={reduce} shape={density} />
      </Canvas>
      )}
    </div>
  );
}
