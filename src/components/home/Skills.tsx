"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { skills } from "@/content/expertise";
import { Chips, Reveal, Section, SectionHead } from "@/components/ui";

const TONES = ["#00E5FF", "#007BFF", "#653BFF", "#FF681E", "#FFB347", "#00E5FF", "#007BFF", "#653BFF", "#FF681E"];

export function Skills() {
  const [active, setActive] = useState(0);
  const s = skills[active];
  // Constellation positions on a 100x60 field.
  const pos = [
    [14, 18], [36, 10], [60, 16], [84, 12], [24, 42], [50, 36], [76, 40], [38, 56], [66, 56],
  ];
  return (
    <Section id="expertise" label="Technical skills">
      <SectionHead eyebrow="Expertise" title="The technologies I build with" lede="Grouped by how I use them, not rated by numbers." />
      <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <Reveal className="relative hidden aspect-[100/66] rounded-[28px] border border-line bg-midnight/50 md:block">
          <svg viewBox="0 0 100 66" className="absolute inset-0 size-full" aria-hidden preserveAspectRatio="none">
            {pos.map(([x, y], i) =>
              pos.slice(i + 1).map(([x2, y2], j) =>
                Math.hypot(x - x2, y - y2) < 30 ? (
                  <line key={`${i}-${j}`} x1={x} y1={y + 3} x2={x2} y2={y2 + 3} stroke="#AAB3C5" strokeWidth={0.15} strokeOpacity={i === active || i + j + 1 === active ? 0.8 : 0.25} />
                ) : null,
              ),
            )}
          </svg>
          {skills.map((sk, i) => (
            <button
              key={sk.cluster}
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              aria-pressed={i === active}
              className="absolute -translate-x-1/2 -translate-y-1/2 text-center"
              style={{ left: `${pos[i][0]}%`, top: `${((pos[i][1] + 3) / 66) * 100}%` }}
            >
              <span
                className="mx-auto block size-3 rounded-full transition-transform"
                style={{ background: TONES[i], boxShadow: i === active ? `0 0 24px ${TONES[i]}` : "none", transform: i === active ? "scale(1.6)" : "scale(1)" }}
              />
              <span className={`mt-2 block max-w-[9rem] font-mono text-[10.5px] leading-tight tracking-[0.12em] uppercase ${i === active ? "text-white" : "text-silver"}`}>{sk.cluster}</span>
            </button>
          ))}
        </Reveal>

        {/* Mobile: chip list in place of the constellation */}
        <div className="flex flex-wrap gap-2 md:hidden">
          {skills.map((sk, i) => (
            <button key={sk.cluster} type="button" onClick={() => setActive(i)} aria-pressed={i === active} className={`rounded-full border px-3.5 py-2 font-mono text-[11px] uppercase ${i === active ? "border-cyan bg-cyan/10" : "border-line text-silver"}`}>
              {sk.cluster}
            </button>
          ))}
        </div>

        <div className="glass rounded-[28px] p-7 md:p-9" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div key={s.cluster} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <span className="block h-1 w-10 rounded-full" style={{ background: TONES[active] }} />
              <h3 className="mt-5 font-display text-2xl md:text-3xl">{s.cluster}</h3>
              <p className="mt-3 leading-relaxed text-silver">{s.body}</p>
              <Chips items={s.items} className="mt-6" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
