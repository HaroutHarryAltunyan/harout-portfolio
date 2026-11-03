"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { getDotTexture, isSoftwareRenderer, useDeferredMount, rng, useIsMobile, usePrefersReducedMotion, useVisible } from "./common";

import type { TwinDomain } from "./domains";

type Part = { c: [number, number, number]; r: [number, number, number]; domain: TwinDomain; w: number };

// A stylized body built from ellipsoids. Each region maps to one illustrative health domain.
const PARTS: Part[] = [
  { c: [0, 3.05, 0], r: [0.42, 0.52, 0.45], domain: "Recovery", w: 0.07 }, // head: sleep & nervous system
  { c: [0, 2.45, 0], r: [0.17, 0.2, 0.17], domain: "Recovery", w: 0.015 }, // neck
  { c: [0, 1.65, 0], r: [0.78, 0.62, 0.38], domain: "Cardiovascular", w: 0.16 }, // chest
  { c: [0, 0.75, 0], r: [0.62, 0.42, 0.33], domain: "Metabolic", w: 0.1 }, // abdomen
  { c: [0, 0.35, 0.02], r: [0.42, 0.24, 0.28], domain: "Nutrition", w: 0.05 }, // gut
  { c: [0, 0.0, 0], r: [0.62, 0.3, 0.34], domain: "Metabolic", w: 0.06 }, // pelvis
  { c: [-1.0, 1.55, 0], r: [0.17, 0.62, 0.17], domain: "Musculoskeletal", w: 0.05 }, // upper arms
  { c: [1.0, 1.55, 0], r: [0.17, 0.62, 0.17], domain: "Musculoskeletal", w: 0.05 },
  { c: [-1.18, 0.4, 0.05], r: [0.14, 0.6, 0.14], domain: "Musculoskeletal", w: 0.04 }, // forearms
  { c: [1.18, 0.4, 0.05], r: [0.14, 0.6, 0.14], domain: "Musculoskeletal", w: 0.04 },
  { c: [-0.34, -1.05, 0], r: [0.24, 0.85, 0.24], domain: "Activity", w: 0.09 }, // thighs
  { c: [0.34, -1.05, 0], r: [0.24, 0.85, 0.24], domain: "Activity", w: 0.09 },
  { c: [-0.36, -2.65, 0], r: [0.18, 0.8, 0.18], domain: "Activity", w: 0.07 }, // shins
  { c: [0.36, -2.65, 0], r: [0.18, 0.8, 0.18], domain: "Activity", w: 0.07 },
];

const DIM = new THREE.Color("#1d3a7a");
const HI = new THREE.Color("#00E5FF");
const BASE = new THREE.Color("#4f7dff");

function Body({ count, domain, reduce, rotationRef }: { count: number; domain: TwinDomain | null; reduce: boolean; rotationRef: React.MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const colorAttr = useRef<THREE.BufferAttribute>(null);
  const data = useMemo(() => {
    const r = rng(42);
    const total = PARTS.reduce((s, p) => s + p.w, 0);
    const positions: number[] = [];
    const domains: TwinDomain[] = [];
    PARTS.forEach((p) => {
      const n = Math.round((p.w / total) * count);
      for (let i = 0; i < n; i++) {
        const u = r() * Math.PI * 2;
        const v = Math.acos(2 * r() - 1);
        const shell = 0.82 + r() * 0.18; // bias toward the surface for a clear silhouette
        positions.push(
          p.c[0] + Math.sin(v) * Math.cos(u) * p.r[0] * shell,
          p.c[1] + Math.cos(v) * p.r[1] * shell,
          p.c[2] + Math.sin(v) * Math.sin(u) * p.r[2] * shell,
        );
        domains.push(p.domain);
      }
    });
    return { positions: new Float32Array(positions), domains, colors: new Float32Array(positions.length) };
  }, [count]);

  useEffect(() => {
    data.domains.forEach((d, i) => {
      const c = domain === null ? BASE : d === domain ? HI : DIM;
      data.colors.set([c.r, c.g, c.b], i * 3);
    });
    if (colorAttr.current) colorAttr.current.needsUpdate = true;
  }, [domain, data]);

  useFrame((_, dt) => {
    if (!group.current) return;
    if (!reduce) rotationRef.current += dt * 0.25;
    group.current.rotation.y += (rotationRef.current - group.current.rotation.y) * 0.08;
  });

  const tex = useMemo(() => getDotTexture(), []);
  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[data.positions, 3]} />
          <bufferAttribute ref={colorAttr} attach="attributes-color" args={[data.colors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.075} map={tex} vertexColors transparent depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
    </group>
  );
}

export default function TwinScene({ domain, className = "" }: { domain: TwinDomain | null; className?: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const visible = useVisible(wrap);
  const mobile = useIsMobile();
  const reduce = usePrefersReducedMotion();
  const ready = useDeferredMount(visible);
  const [still, setStill] = useState(false);
  const rotation = useRef(0);
  const drag = useRef<{ x: number; start: number } | null>(null);

  return (
    <div
      ref={wrap}
      className={`touch-pan-y ${className}`}
      onPointerDown={(e) => (drag.current = { x: e.clientX, start: rotation.current })}
      onPointerMove={(e) => {
        if (drag.current) rotation.current = drag.current.start + (e.clientX - drag.current.x) * 0.012;
      }}
      onPointerUp={() => (drag.current = null)}
      onPointerLeave={() => (drag.current = null)}
      data-cursor
    >
      {ready && (
      <Canvas
        onCreated={({ gl }) => setStill(isSoftwareRenderer(gl))}
        dpr={[1, mobile ? 1.5 : 2]}
        camera={{ position: [0, 0.1, 9.5], fov: 45 }}
        gl={{ antialias: !mobile, alpha: true, powerPreference: "low-power" }}
        frameloop={still ? "demand" : visible ? "always" : "never"}
      >
        <Body count={mobile ? 2600 : 5200} domain={domain} reduce={reduce} rotationRef={rotation} />
      </Canvas>
      )}
      <div className="pointer-events-auto absolute bottom-3 right-3 flex gap-2">
        <button type="button" className="rounded-full border border-line bg-obsidian/70 px-3 py-1.5 font-mono text-[11px] text-silver hover:text-white" onClick={() => (rotation.current -= Math.PI / 4)} aria-label="Rotate model left">
          ⟲
        </button>
        <button type="button" className="rounded-full border border-line bg-obsidian/70 px-3 py-1.5 font-mono text-[11px] text-silver hover:text-white" onClick={() => (rotation.current += Math.PI / 4)} aria-label="Rotate model right">
          ⟳
        </button>
      </div>
    </div>
  );
}
