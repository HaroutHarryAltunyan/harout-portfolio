"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { about } from "@/content/bio";
import { Reveal, Section } from "@/components/ui";
import { img } from "@/lib/asset";

export function About() {
  const [active, setActive] = useState(about.disciplines[0].id);
  const current = about.disciplines.find((d) => d.id === active)!;
  const R = 150;
  const nodes = about.disciplines.map((d, i) => {
    const a = (i / about.disciplines.length) * Math.PI * 2 - Math.PI / 2;
    return { ...d, x: 200 + Math.cos(a) * R, y: 200 + Math.sin(a) * R };
  });

  return (
    <Section id="about" label="About Harout">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">About</p>
            <h2 className="display text-gradient-cyan mt-5 text-[clamp(34px,5.4vw,72px)] uppercase">{about.heading}</h2>
          </Reveal>
          <div className="mt-10 grid gap-6">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className={i === 0 ? "text-xl leading-relaxed text-white md:text-2xl" : "text-lg leading-relaxed text-silver"}>{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-10 flex items-center gap-4">
            <img src={img("portrait-square.webp")} alt="" width={720} height={720} loading="lazy" className="size-14 rounded-full object-cover ring-1 ring-white/20" />
            <div>
              <p className="font-display text-sm">Harout &ldquo;Harry&rdquo; Altunyan</p>
              <p className="font-mono text-[11px] text-silver">Los Angeles · English, Armenian</p>
            </div>
          </Reveal>
        </div>

        <Reveal className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            <svg viewBox="0 0 400 400" className="absolute inset-0 size-full" aria-hidden>
              <defs>
                <radialGradient id="core" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="90" fill="url(#core)" />
              {nodes.map((n, i) =>
                nodes.slice(i + 1).map((m) => (
                  <line key={`${n.id}-${m.id}`} x1={n.x} y1={n.y} x2={m.x} y2={m.y} stroke="#AAB3C5" strokeOpacity={n.id === active || m.id === active ? 0.35 : 0.07} />
                )),
              )}
              {nodes.map((n) => (
                <line key={n.id} x1="200" y1="200" x2={n.x} y2={n.y} stroke={n.id === active ? "#00E5FF" : "#AAB3C5"} strokeOpacity={n.id === active ? 0.9 : 0.2} className={n.id === active ? "flow" : undefined} />
              ))}
              <circle cx="200" cy="200" r="34" fill="#080F20" stroke="#00E5FF" strokeOpacity="0.6" />
              <text x="200" y="206" textAnchor="middle" fill="#fff" fontFamily="var(--font-unbounded)" fontSize="16" fontWeight="700">HA</text>
            </svg>
            {nodes.map((n) => (
              <button
                key={n.id}
                type="button"
                onClick={() => setActive(n.id)}
                onMouseEnter={() => setActive(n.id)}
                aria-pressed={n.id === active}
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-2 font-mono text-[10.5px] tracking-[0.12em] max-w-[8.5rem] text-center leading-tight uppercase transition-all md:max-w-none md:whitespace-nowrap md:px-4 md:text-[11px] ${
                  n.id === active ? "border-cyan bg-cyan/15 text-white shadow-[0_0_30px_-4px_rgb(0_229_255/0.6)]" : "border-line bg-obsidian/80 text-silver hover:text-white"
                }`}
                style={{ left: `${(n.x / 400) * 100}%`, top: `${(n.y / 400) * 100}%` }}
              >
                {n.label}
              </button>
            ))}
          </div>
          <div className="glass mt-8 min-h-[120px] rounded-3xl p-6" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div key={current.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
                <p className="font-display text-lg">{current.label}</p>
                <p className="mt-2 leading-relaxed text-silver">{current.body}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
