"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const KEY = "ha-intro-seen";
const DURATION = 5200;

/**
 * First-visit intro: particles gather into a network around a central light, then the name resolves.
 * Plays once per browser, never for reduced motion, skips on any key, click or the Skip button.
 * It sits above the page instead of blocking it, so content loads underneath.
 */
export function Intro() {
  const [show, setShow] = useState(false);
  const [stage, setStage] = useState(0);
  const canvas = useRef<HTMLCanvasElement>(null);
  const skipBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let seen = false;
    try {
      seen = localStorage.getItem(KEY) === "1";
    } catch {}
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.classList.remove("intro-pending");
    if (seen || reduce) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading browser-only state once on mount
    setShow(true);
    try {
      localStorage.setItem(KEY, "1");
    } catch {}
  }, []);

  useEffect(() => {
    if (!show) return;
    skipBtn.current?.focus({ preventScroll: true });
    const timers = [
      setTimeout(() => setStage(1), 1500),
      setTimeout(() => setStage(2), 2700),
      setTimeout(() => setStage(3), 3700),
      setTimeout(() => setShow(false), DURATION),
    ];
    const onKey = () => setShow(false);
    window.addEventListener("keydown", onKey);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("keydown", onKey);
    };
  }, [show]);

  useEffect(() => {
    if (!show || !canvas.current) return;
    const c = canvas.current;
    const g = c.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;
    const resize = () => {
      w = c.clientWidth;
      h = c.clientHeight;
      c.width = w * dpr;
      c.height = h * dpr;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);
    const N = w < 700 ? 90 : 170;
    const pts = Array.from({ length: N }, (_, i) => {
      const a = (i / N) * Math.PI * 2 * 7.3;
      const rr = Math.sqrt(i / N);
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        tx: Math.cos(a) * rr * Math.min(w, h) * 0.36 * 1.35,
        ty: Math.sin(a) * rr * Math.min(w, h) * 0.36 * 0.85,
        born: Math.random() * 900,
      };
    });
    const start = performance.now();
    let raf = 0;
    const draw = (now: number) => {
      const t = now - start;
      const k = Math.min(1, Math.max(0, (t - 400) / 2200));
      const ease = 1 - Math.pow(1 - k, 3);
      const zoom = 1 + Math.max(0, (t - 2600) / 2600) * 0.35;
      const cx = w / 2, cy = h / 2;
      g.clearRect(0, 0, w, h);
      // central light
      const glow = Math.min(1, Math.max(0, (t - 1200) / 1200));
      const rg = g.createRadialGradient(cx, cy, 0, cx, cy, Math.min(w, h) * 0.4 * zoom);
      rg.addColorStop(0, `rgba(160,240,255,${0.5 * glow})`);
      rg.addColorStop(0.3, `rgba(0,123,255,${0.18 * glow})`);
      rg.addColorStop(1, "rgba(0,0,0,0)");
      g.fillStyle = rg;
      g.fillRect(0, 0, w, h);
      const P = pts.map((p) => ({
        x: p.x + (cx + p.tx * zoom - p.x) * ease,
        y: p.y + (cy + p.ty * zoom - p.y) * ease,
        a: Math.min(1, Math.max(0, (t - p.born) / 600)),
      }));
      g.lineWidth = 0.6;
      for (let i = 0; i < P.length; i++) {
        for (let j = i + 1; j < P.length; j++) {
          const dx = P[i].x - P[j].x, dy = P[i].y - P[j].y;
          const d = dx * dx + dy * dy;
          if (d < 4200 * zoom) {
            g.strokeStyle = `rgba(70,120,255,${(1 - d / (4200 * zoom)) * 0.35 * ease})`;
            g.beginPath();
            g.moveTo(P[i].x, P[i].y);
            g.lineTo(P[j].x, P[j].y);
            g.stroke();
          }
        }
      }
      P.forEach((p, i) => {
        g.fillStyle = i % 9 === 0 ? `rgba(255,104,30,${p.a})` : i % 3 === 0 ? `rgba(101,59,255,${p.a})` : `rgba(0,229,255,${p.a})`;
        g.beginPath();
        g.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        g.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[150] bg-obsidian"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.2, 0.7, 0.1, 1] } }}
          onClick={() => setShow(false)}
          role="dialog"
          aria-label="Introduction"
        >
          <canvas ref={canvas} className="absolute inset-0 size-full" aria-hidden />
          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
            <motion.p
              className="display text-[clamp(34px,8vw,96px)]"
              initial={{ opacity: 0, letterSpacing: "0.3em" }}
              animate={stage >= 1 ? { opacity: 1, letterSpacing: "-0.02em" } : {}}
              transition={{ duration: 1.4, ease: [0.2, 0.7, 0.1, 1] }}
            >
              HAROUT ALTUNYAN
            </motion.p>
            <motion.p
              className="mt-5 font-mono text-[11px] tracking-[0.32em] text-silver uppercase md:text-xs"
              initial={{ opacity: 0 }}
              animate={stage >= 2 ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              Founder / AI Architect / Engineer
            </motion.p>
            <motion.p
              className="mt-10 font-display text-sm tracking-[0.2em] text-cyan md:text-base"
              initial={{ opacity: 0, y: 8 }}
              animate={stage >= 3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              BUILDING INTELLIGENCE INTO EVERYTHING.
            </motion.p>
          </div>
          <button
            ref={skipBtn}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShow(false);
            }}
            className="absolute right-5 rounded-full border border-line px-4 py-2 font-mono text-[11px] tracking-[0.2em] text-silver uppercase hover:text-white md:right-8"
            style={{ bottom: "max(24px, env(safe-area-inset-bottom, 0px))" }}
          >
            Skip intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
