"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { architecture } from "@/content/expertise";
import { Chips, Reveal, Section, SectionHead } from "@/components/ui";

export function ArchitectureExplorer() {
  const [active, setActive] = useState(architecture.categories[0].id);
  const cat = architecture.categories.find((c) => c.id === active)!;
  return (
    <Section id="architecture" label="Software architecture">
      <SectionHead eyebrow="Software architecture" title="The systems behind the experience" />

      <Reveal className="mt-14">
        <div role="tablist" aria-label="Architecture layers" className="snap-row -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0">
          {architecture.categories.map((c) => (
            <button
              key={c.id}
              role="tab"
              id={`arch-tab-${c.id}`}
              aria-selected={c.id === active}
              aria-controls="arch-panel"
              onClick={() => setActive(c.id)}
              className={`shrink-0 rounded-full border px-4 py-2.5 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors ${
                c.id === active ? "border-cyan bg-cyan/10 text-white" : "border-line text-silver hover:text-white"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div id="arch-panel" role="tabpanel" aria-labelledby={`arch-tab-${cat.id}`} className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
        <AnimatePresence mode="wait">
          <motion.div key={cat.id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 12 }} transition={{ duration: 0.35 }}>
            <h3 className="display text-4xl uppercase md:text-6xl">{cat.label}</h3>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-silver">{cat.body}</p>
            <Chips items={cat.tech} className="mt-6" />
          </motion.div>
        </AnimatePresence>

        {/* Isometric-style layer stack: each layer of the selected category, top to bottom. */}
        <div className="relative mx-auto w-full max-w-md" aria-label={`${cat.label} layers: ${cat.layers.join(", ")}`} role="img">
          <AnimatePresence mode="wait">
            <motion.ol key={cat.id} className="grid gap-3" initial="hidden" animate="show" exit="hidden" variants={{ show: { transition: { staggerChildren: 0.07 } } }}>
              {cat.layers.map((layer, i) => (
                <motion.li
                  key={layer}
                  variants={{ hidden: { opacity: 0, y: 16, rotateX: 30 }, show: { opacity: 1, y: 0, rotateX: 0 } }}
                  className="glass relative flex items-center justify-between rounded-2xl px-5 py-5"
                  style={{ transformPerspective: 800, marginLeft: `${i * 4}%`, marginRight: `${(cat.layers.length - 1 - i) * 4}%` }}
                >
                  <span className="font-display text-sm md:text-base">{layer}</span>
                  <span className="font-mono text-[10px] text-silver">L{i + 1}</span>
                  {i < cat.layers.length - 1 && <span aria-hidden className="absolute -bottom-3 left-1/2 h-3 w-px bg-cyan/60" />}
                </motion.li>
              ))}
            </motion.ol>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
