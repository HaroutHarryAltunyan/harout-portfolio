"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { NeuralField } from "@/components/three/lazy";
import { person, links } from "@/content/site";
import { img } from "@/lib/asset";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.2]);
  const [role, setRole] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setRole((r) => (r + 1) % person.roles.length), 1800);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section ref={ref} id="top" aria-label="Introduction" className="gutter relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20">
      <div aria-hidden className="absolute inset-0">
        <NeuralField className="absolute inset-0" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(70% 60% at 30% 50%, transparent 30%, #050508 85%)" }} />
        <div className="absolute inset-y-0 right-0 w-1/3" style={{ background: "radial-gradient(60% 50% at 100% 60%, rgb(255 104 30 / 0.14), transparent 70%)" }} />
      </div>

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.55fr)]">
        <motion.div style={{ opacity: fade }}>
          <p className="eyebrow rise">{person.headline}</p>
          <h1 className="display mt-6 text-[clamp(44px,11.5vw,64px)] leading-[0.86] sm:text-[clamp(64px,10vw,96px)] lg:text-[clamp(72px,6.6vw,108px)]">
            <span className="rise rise-1 block">HAROUT</span>
            <span className="rise rise-2 text-gradient-cyan block">ALTUNYAN</span>
          </h1>

          <div className="mt-8 flex h-8 items-center gap-3 overflow-hidden font-display text-lg md:text-2xl">
            <span className="sr-only">{person.roles.join(" ")}</span>
            <span aria-hidden className="h-px w-10 bg-ember" />
            <motion.span
              key={role}
              aria-hidden
              initial={reduce ? false : { y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-amber"
            >
              {person.roles[role]}
            </motion.span>
          </div>

          <p className="mt-8 max-w-xl text-xl leading-snug text-white md:text-2xl">{person.statement}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-silver md:text-lg">{person.support}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="/#work" className="rounded-full bg-white px-6 py-3.5 font-mono text-[12px] tracking-[0.16em] text-obsidian uppercase transition-transform hover:scale-[1.03]">
              Explore my work
            </Link>
            <Link href="/#contact" className="rounded-full border border-white/25 px-6 py-3.5 font-mono text-[12px] tracking-[0.16em] uppercase transition-colors hover:border-white">
              Let&apos;s connect
            </Link>
            <span className="ml-1 flex gap-4 text-sm text-silver">
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub ↗</a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn ↗</a>
            </span>
          </div>
        </motion.div>

        <motion.figure style={{ y: portraitY }} className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
            <img
              src={img("portrait-hero.webp")}
              alt="Harout Altunyan at a desk with holographic health and DNA displays"
              width={960}
              height={1200}
              fetchPriority="high"
              className="size-full object-cover"
            />
            <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 55%, #050508 100%)" }} />
            <div aria-hidden className="absolute inset-0 rounded-[28px] ring-1 ring-white/10 ring-inset" />
          </div>
          <figcaption className="glass absolute -bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl px-4 py-3">
            <span>
              <span className="block font-display text-sm">Co-Founder &amp; CTO</span>
              <span className="block font-mono text-[11px] text-silver">SAECULA · Los Angeles</span>
            </span>
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-cyan" />
            </span>
          </figcaption>
        </motion.figure>
      </div>

      <div aria-hidden className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="font-mono text-[10px] tracking-[0.3em] text-silver uppercase">Scroll to explore</span>
        <span className="scroll-line relative h-12 w-px overflow-hidden bg-white/15" />
      </div>
    </section>
  );
}
