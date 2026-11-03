"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { saecula, hyelynk } from "@/content/ventures";
import { otherWork } from "@/content/projects";
import { Chips, Reveal, Section, SectionHead } from "@/components/ui";
import { img } from "@/lib/asset";

export function Ventures() {
  return (
    <Section id="work" label="Selected ventures">
      <SectionHead eyebrow="Selected ventures" title="Companies & systems I'm building" />

      <div className="mt-20 grid gap-8">
        {/* SAECULA */}
        <Reveal as="article" className="group relative overflow-hidden rounded-[32px] border border-line bg-midnight">
          <div aria-hidden className="absolute inset-0 opacity-70" style={{ background: "radial-gradient(60% 80% at 80% 30%, rgb(101 59 255 / 0.35), transparent 70%), radial-gradient(50% 60% at 10% 90%, rgb(0 229 255 / 0.18), transparent 70%)" }} />
          <div className="relative grid gap-10 p-7 md:p-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow text-cyan">01 · Flagship</span>
                <span className="eyebrow">{saecula.period}</span>
              </div>
              <h3 className="display mt-6 text-[clamp(40px,10vw,96px)] lg:text-[clamp(64px,6vw,96px)]">SAECULA</h3>
              <p className="mt-2 font-mono text-xs text-silver">/{saecula.pronunciation}/ · {saecula.category}</p>
              <p className="mt-6 font-display text-lg text-cyan uppercase md:text-xl">{saecula.tagline}</p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-silver">{saecula.overview[0]}</p>
              <dl className="mt-8 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
                {saecula.metrics.map((m) => (
                  <div key={m.label} title={m.source} className="flex flex-col-reverse">
                    <dt className="mt-1 text-xs leading-snug text-silver">{m.label}</dt>
                    <dd className="font-display text-2xl tabular-nums md:text-3xl">{m.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/work/saecula/" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-mono text-[12px] tracking-[0.16em] text-obsidian uppercase">
                  Explore SAECULA <ArrowUpRight size={16} />
                </Link>
                <a href={saecula.site.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-mono text-[12px] tracking-[0.16em] uppercase hover:border-white">
                  Visit saecula.ai ↗
                </a>
              </div>
            </div>
            <div className="relative mx-auto flex w-full max-w-md items-end justify-center gap-4">
              <img src={img("saecula-app-home.webp")} alt="SAECULA mobile app home screen with a health score, sleep, activity, recovery and HRV, the AI coach and today's plan" width={560} height={995} loading="lazy" className="w-[58%] drop-shadow-[0_30px_60px_rgb(0_0_0/0.6)] transition-transform duration-700 group-hover:-translate-y-2" />
              <img src={img("pack-brain.webp")} alt="SAECULA Brain Pack packaging concept" width={640} height={640} loading="lazy" className="mb-6 w-[42%] rounded-2xl ring-1 ring-white/10 transition-transform duration-700 group-hover:translate-y-1" />
            </div>
          </div>
        </Reveal>

        {/* HyeLynk */}
        <Reveal as="article" className="group relative overflow-hidden rounded-[32px] border border-line bg-[#0b0a12]">
          <div aria-hidden className="absolute inset-0 opacity-80" style={{ background: "radial-gradient(55% 70% at 85% 40%, rgb(255 104 30 / 0.28), transparent 70%), radial-gradient(45% 60% at 5% 10%, rgb(217 0 18 / 0.2), transparent 70%), radial-gradient(40% 50% at 40% 110%, rgb(0 51 160 / 0.35), transparent 70%)" }} />
          <div className="relative grid gap-10 p-7 md:p-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow text-amber">02 · Community platform</span>
                <span className="eyebrow">{hyelynk.period}</span>
              </div>
              <h3 className="display mt-6 text-[clamp(40px,10vw,96px)] lg:text-[clamp(64px,6vw,96px)]">HyeLynk</h3>
              <p className="mt-2 font-mono text-xs text-silver">{hyelynk.category}</p>
              <p className="mt-6 font-display text-lg text-amber uppercase md:text-xl">{hyelynk.tagline}</p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-silver">{hyelynk.overview[0]}</p>
              <dl className="mt-8 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
                {hyelynk.metrics.map((m) => (
                  <div key={m.label} title={m.source} className="flex flex-col-reverse">
                    <dt className="mt-1 text-xs leading-snug text-silver">{m.label}</dt>
                    <dd className="font-display text-2xl tabular-nums md:text-3xl">{m.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/work/hyelynk/" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-mono text-[12px] tracking-[0.16em] text-obsidian uppercase">
                  Explore HyeLynk <ArrowUpRight size={16} />
                </Link>
                <a href={hyelynk.site.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-mono text-[12px] tracking-[0.16em] uppercase hover:border-white">
                  Visit hyelynk.ai ↗
                </a>
              </div>
            </div>
            <div aria-hidden className="relative mx-auto aspect-square w-full max-w-sm">
              {/* Static diaspora network motif; the interactive globe lives on the case-study page. */}
              <svg viewBox="0 0 300 300" className="size-full">
                <circle cx="150" cy="150" r="118" fill="none" stroke="#AAB3C5" strokeOpacity=".18" />
                <ellipse cx="150" cy="150" rx="118" ry="44" fill="none" stroke="#AAB3C5" strokeOpacity=".12" />
                <ellipse cx="150" cy="150" rx="44" ry="118" fill="none" stroke="#AAB3C5" strokeOpacity=".12" />
                {[
                  [70, 110], [228, 96], [240, 182], [96, 214], [182, 236], [60, 170], [200, 60],
                ].map(([x, y], i) => (
                  <g key={i}>
                    <path d={`M150 150 Q ${(150 + x) / 2} ${Math.min(150, y) - 40} ${x} ${y}`} fill="none" stroke={["#D90012", "#0033A0", "#F2A800"][i % 3]} strokeWidth="1.6" className="flow" />
                    <circle cx={x} cy={y} r="4" fill="#FFB347" />
                  </g>
                ))}
                <circle cx="150" cy="150" r="7" fill="#FF681E" />
                <circle cx="150" cy="150" r="16" fill="none" stroke="#FF681E" strokeOpacity=".5" />
              </svg>
            </div>
          </div>
        </Reveal>

        {/* Client work */}
        {otherWork.map((w) => (
          <Reveal as="article" key={w.name} className="grid gap-6 rounded-[28px] border border-line p-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-10">
            <div>
              <p className="eyebrow">{w.category}</p>
              <h3 className="mt-3 font-display text-2xl md:text-3xl">{w.name}</h3>
              <p className="mt-3 max-w-2xl text-silver">{w.description}</p>
              <Chips items={w.stack} className="mt-5" />
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={w.href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/25 px-5 py-3 font-mono text-[11px] tracking-[0.16em] uppercase hover:border-white">Live site ↗</a>
              <a href={w.repo} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/25 px-5 py-3 font-mono text-[11px] tracking-[0.16em] uppercase hover:border-white">Source ↗</a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
