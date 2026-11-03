"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { journey, experience } from "@/content/bio";
import { Reveal, Section, SectionHead } from "@/components/ui";

export function Journey() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <Section id="journey" label="Founder journey" className="overflow-hidden">
      <SectionHead eyebrow="Founder journey" title="From code to companies" />

      <ol ref={ref} className="relative mt-20 grid gap-14 pl-10 md:pl-0">
        <span aria-hidden className="absolute top-0 bottom-0 left-[7px] w-px bg-line md:left-1/2" />
        <motion.span
          aria-hidden
          className="absolute top-0 bottom-0 left-[7px] w-px origin-top bg-gradient-to-b from-cyan via-purple to-ember md:left-1/2"
          style={{ scaleY: reduce ? 1 : progress }}
        />
        {journey.map((j, i) => (
          <Reveal as="li" key={j.phase} className={`relative md:grid md:grid-cols-2 md:gap-16 ${i % 2 ? "" : ""}`}>
            <span aria-hidden className="absolute top-1.5 -left-10 grid size-[15px] place-items-center rounded-full border border-cyan bg-obsidian md:left-1/2 md:-translate-x-1/2">
              <span className="size-1.5 rounded-full bg-cyan" />
            </span>
            <div className={i % 2 ? "md:col-start-2" : "md:text-right"}>
              <p className="font-mono text-[11px] tracking-[0.2em] text-ember uppercase">
                Phase {String(i + 1).padStart(2, "0")} · {j.phase}
              </p>
              <h3 className="mt-3 font-display text-2xl md:text-3xl">{j.title}</h3>
              <p className="mt-1 font-mono text-xs text-silver">{j.period}</p>
              <p className={`mt-4 max-w-md leading-relaxed text-silver ${i % 2 ? "" : "md:ml-auto"}`}>{j.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <div className="mt-32">
        <Reveal>
          <p className="eyebrow">Experience</p>
          <h3 className="display mt-4 text-3xl uppercase md:text-5xl">Roles</h3>
        </Reveal>
        <div className="mt-10 grid border-t border-line">
          {experience.map((job) => (
            <Reveal as="article" key={job.title + job.org} className="grid gap-4 border-b border-line py-8 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10">
              <div className="flex items-baseline gap-3 md:block">
                <p className="font-mono text-sm tabular-nums">{job.period}</p>
                {job.current && <p className="font-mono text-[10px] tracking-[0.18em] text-cyan uppercase md:mt-2">Current</p>}
              </div>
              <div>
                <h4 className="font-display text-xl md:text-2xl">{job.title}</h4>
                <p className="mt-1 text-silver">
                  {job.org}
                  {job.href && (
                    <>
                      {" · "}
                      <a href={job.href} target="_blank" rel="noopener noreferrer" className="text-cyan underline decoration-cyan/40 underline-offset-4 hover:decoration-cyan">
                        {job.href.replace(/^https:\/\/(www\.)?/, "")}
                      </a>
                    </>
                  )}
                </p>
                <ul className="mt-4 grid max-w-3xl gap-2">
                  {job.points.map((p) => (
                    <li key={p} className="relative pl-5 text-[15.5px] leading-relaxed text-silver before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-2.5 before:bg-ember">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
