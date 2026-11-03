"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { getDotTexture, isSoftwareRenderer, useDeferredMount, useIsMobile, usePrefersReducedMotion, useVisible } from "./common";

/** Illustrative cities with well-known Armenian communities. Not user locations or activity. */
export const CITIES: { name: string; lat: number; lon: number }[] = [
  { name: "Yerevan", lat: 40.18, lon: 44.51 },
  { name: "Los Angeles", lat: 34.05, lon: -118.24 },
  { name: "Moscow", lat: 55.75, lon: 37.62 },
  { name: "Paris", lat: 48.86, lon: 2.35 },
  { name: "Marseille", lat: 43.3, lon: 5.37 },
  { name: "Beirut", lat: 33.89, lon: 35.5 },
  { name: "Buenos Aires", lat: -34.6, lon: -58.38 },
  { name: "Toronto", lat: 43.65, lon: -79.38 },
  { name: "Boston", lat: 42.36, lon: -71.06 },
  { name: "Sydney", lat: -33.87, lon: 151.21 },
  { name: "Tbilisi", lat: 41.72, lon: 44.79 },
  { name: "Tehran", lat: 35.69, lon: 51.39 },
];

const R = 2.4;
function toVec(lat: number, lon: number, r = R) {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lon + 180) * Math.PI) / 180;
  return new THREE.Vector3(-r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta));
}

function World({ reduce, dots, rotationRef }: { reduce: boolean; dots: number; rotationRef: React.MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const pulseGeom = useRef<THREE.BufferGeometry>(null);
  const t = useRef(0);

  const data = useMemo(() => {
    // Fibonacci sphere for an even dotted globe.
    const sphere = new Float32Array(dots * 3);
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < dots; i++) {
      const y = 1 - (i / (dots - 1)) * 2;
      const rad = Math.sqrt(1 - y * y);
      const th = golden * i;
      sphere.set([Math.cos(th) * rad * R, y * R, Math.sin(th) * rad * R], i * 3);
    }
    const cityPos = new Float32Array(CITIES.length * 3);
    CITIES.forEach((c, i) => {
      const v = toVec(c.lat, c.lon, R * 1.01);
      cityPos.set([v.x, v.y, v.z], i * 3);
    });
    const hub = toVec(CITIES[0].lat, CITIES[0].lon);
    const curves = CITIES.slice(1).map((c) => {
      const end = toVec(c.lat, c.lon);
      const mid = hub.clone().add(end).multiplyScalar(0.5);
      mid.setLength(R + hub.distanceTo(end) * 0.32);
      return new THREE.QuadraticBezierCurve3(hub, mid, end);
    });
    const arcColors = ["#D90012", "#0033A0", "#F2A800"]; // red, blue, apricot
    const arcs = curves.map(
      (cv, i) =>
        new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(cv.getPoints(48)),
          new THREE.LineBasicMaterial({ color: arcColors[i % 3], transparent: true, opacity: 0.75 }),
        ),
    );
    return { sphere, cityPos, curves, arcs, pulsePos: new Float32Array(curves.length * 3) };
  }, [dots]);

  useFrame((_, dt) => {
    if (!group.current) return;
    if (!reduce) rotationRef.current += dt * 0.08;
    group.current.rotation.y += (rotationRef.current - group.current.rotation.y) * 0.08;
    if (reduce || !pulseGeom.current) return;
    t.current += dt * 0.35;
    data.curves.forEach((cv, i) => {
      const p = cv.getPoint((t.current + i * 0.13) % 1);
      data.pulsePos.set([p.x, p.y, p.z], i * 3);
    });
    pulseGeom.current.attributes.position.needsUpdate = true;
  });

  const tex = useMemo(() => getDotTexture(), []);
  return (
    <group ref={group} rotation={[0.35, 3.6, 0]}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[data.sphere, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.055} map={tex} color="#5f82ff" transparent opacity={0.85} depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
      <mesh>
        <sphereGeometry args={[R * 0.985, 48, 48]} />
        <meshBasicMaterial color="#0a1230" />
      </mesh>
      {data.arcs.map((line, i) => (
        <primitive key={i} object={line} />
      ))}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[data.cityPos, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.16} map={tex} color="#FFB347" transparent depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
      <points>
        <bufferGeometry ref={pulseGeom}>
          <bufferAttribute attach="attributes-position" args={[data.pulsePos, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.14} map={tex} color="#ffffff" transparent depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
    </group>
  );
}

export default function Globe({ className = "" }: { className?: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const visible = useVisible(wrap);
  const mobile = useIsMobile();
  const reduce = usePrefersReducedMotion();
  const ready = useDeferredMount(visible);
  const [still, setStill] = useState(false);
  const rotation = useRef(3.6); // starts with Yerevan, the hub of every arc, facing the viewer
  const drag = useRef<{ x: number; start: number } | null>(null);
  return (
    <div
      ref={wrap}
      className={`touch-pan-y ${className}`}
      aria-hidden
      onPointerDown={(e) => (drag.current = { x: e.clientX, start: rotation.current })}
      onPointerMove={(e) => {
        if (drag.current) rotation.current = drag.current.start + (e.clientX - drag.current.x) * 0.01;
      }}
      onPointerUp={() => (drag.current = null)}
      onPointerLeave={() => (drag.current = null)}
    >
      {ready && (
      <Canvas
        onCreated={({ gl }) => setStill(isSoftwareRenderer(gl))}
        dpr={[1, mobile ? 1.5 : 2]}
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        frameloop={still ? "demand" : visible ? "always" : "never"}
      >
        <World reduce={reduce} dots={mobile ? 1400 : 2600} rotationRef={rotation} />
      </Canvas>
      )}
    </div>
  );
}
