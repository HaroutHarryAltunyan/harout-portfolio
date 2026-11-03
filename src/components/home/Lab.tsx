"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { lab } from "@/content/expertise";
import { NeuralField } from "@/components/three/lazy";
import { Chips, Reveal, Section, SectionHead } from "@/components/ui";

export function Lab() {
  const [active, setActive] = useState(lab.modules[0].id);
  const m = lab.modules.find((x) => x.id === active)!;
  return (
    <Section id="lab" label="AI engineering laboratory" className="overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(50% 50% at 70% 50%, rgb(101 59 255 / 0.18), transparent 70%)" }} />
      <SectionHead eyebrow="AI engineering laboratory" title="Building systems that think" />

      <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Reveal>
          <div role="tablist" aria-label="AI modules" className="grid gap-2">
            {lab.modules.map((mod, i) => (
              <button
                key={mod.id}
                role="tab"
                id={`lab-tab-${mod.id}`}
                aria-selected={mod.id === active}
                aria-controls="lab-panel"
                onClick={() => setActive(mod.id)}
                className={`group flex items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all ${
                  mod.id === active ? "border-purple/60 bg-purple/10" : "border-line hover:border-white/30"
                }`}
              >
                <span className="flex items-center gap-4">
                  <span className="font-mono text-[11px] text-silver tabular-nums">M{i + 1}</span>
                  <span className="font-display text-base md:text-lg">{mod.title}</span>
                </span>
                <span aria-hidden className={`size-2 rounded-full transition-colors ${mod.id === active ? "bg-cyan shadow-[0_0_12px_#00E5FF]" : "bg-white/20"}`} />
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-line bg-midnight/70">
          <NeuralField density="lab" className="absolute inset-0" />
          <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgb(8 15 32 / 0), rgb(8 15 32 / 0.15) 35%, rgb(8 15 32 / 0.9) 85%)" }} />
          <div id="lab-panel" role="tabpanel" aria-labelledby={`lab-tab-${m.id}`} className="relative flex h-full min-h-[420px] flex-col justify-end p-7 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div key={m.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
                <p className="eyebrow text-cyan">Module</p>
                <h3 className="mt-3 font-display text-3xl md:text-4xl">{m.title}</h3>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-silver">{m.body}</p>
                <Chips items={m.items} className="mt-6" />
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
