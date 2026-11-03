"use client";

import { useEffect, useRef, useState } from "react";

/** Desktop-only cursor: a small dot plus a ring that grows over interactive elements. Off for touch and reduced motion. */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !reduce.matches);
    update();
    fine.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-cursor");
    let x = -100, y = -100, rx = -100, ry = -100, raf = 0;
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      const target = e.target as Element | null;
      const interactive = !!target?.closest("a, button, [role='button'], input, textarea, select, label, [data-cursor]");
      ring.current?.setAttribute("data-hover", interactive ? "1" : "0");
    };
    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[200]">
      <div ref={dot} className="absolute -left-1 -top-1 size-2 rounded-full bg-white mix-blend-difference" />
      <div
        ref={ring}
        className="absolute -left-5 -top-5 size-10 rounded-full border border-cyan/60 transition-[width,height,margin,border-color] duration-300 data-[hover='1']:-left-8 data-[hover='1']:-top-8 data-[hover='1']:size-16 data-[hover='1']:border-ember/80"
      />
    </div>
  );
}
