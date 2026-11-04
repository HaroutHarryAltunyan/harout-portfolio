"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { saecula, hyelynk, hedgeFund } from "@/content/ventures";
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

        {/* Altunyan AI Hedge Fund */}
        <Reveal as="article" className="group relative overflow-hidden rounded-[32px] border border-line bg-[#06100d]">
          <div aria-hidden className="absolute inset-0 opacity-80" style={{ background: "radial-gradient(55% 70% at 85% 35%, rgb(52 211 153 / 0.22), transparent 70%), radial-gradient(45% 60% at 5% 95%, rgb(0 123 255 / 0.22), transparent 70%)" }} />
          <div className="relative grid gap-10 p-7 md:p-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow text-[#34d399]">03 · Quantitative research</span>
                <span className="eyebrow">{hedgeFund.period}</span>
              </div>
              <h3 className="display mt-6 text-[clamp(36px,8vw,80px)] lg:text-[clamp(52px,5vw,80px)]">Altunyan AI<br />Hedge Fund</h3>
              <p className="mt-2 font-mono text-xs text-silver">{hedgeFund.category}</p>
              <p className="mt-6 font-display text-lg text-[#34d399] uppercase md:text-xl">{hedgeFund.tagline}</p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-silver">{hedgeFund.overview[0]}</p>
              <dl className="mt-8 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
                {hedgeFund.metrics.map((m) => (
                  <div key={m.label} title={m.source} className="flex flex-col-reverse">
                    <dt className="mt-1 text-xs leading-snug text-silver">{m.label}</dt>
                    <dd className="font-display text-2xl tabular-nums md:text-3xl">{m.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 max-w-xl text-sm text-silver">{hedgeFund.statusNote}</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={hedgeFund.site.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-mono text-[12px] tracking-[0.16em] text-obsidian uppercase">
                  Visit {hedgeFund.site.label} <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
            <div aria-hidden className="relative mx-auto w-full max-w-md">
              {/* Static motif: research proposes, risk and a human gate, paper broker fills. */}
              <svg viewBox="0 0 320 240" className="w-full">
                {[40, 80, 120, 160, 200].map((y) => (
                  <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="#AAB3C5" strokeOpacity=".08" />
                ))}
                <path d="M0 170 L30 160 L55 168 L80 140 L105 150 L130 118 L150 126 L175 96 L200 108 L225 80 L250 88 L275 60 L300 70 L320 52" fill="none" stroke="#34d399" strokeWidth="2" className="flow" />
                <path d="M0 170 L30 160 L55 168 L80 140 L105 150 L130 118 L150 126 L175 96 L200 108 L225 80 L250 88 L275 60 L300 70 L320 52 L320 240 L0 240 Z" fill="url(#hfFill)" />
                <defs>
                  <linearGradient id="hfFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#34d399" stopOpacity=".22" />
                    <stop offset="1" stopColor="#34d399" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[
                  { x: 20, label: "RESEARCH" },
                  { x: 100, label: "RISK" },
                  { x: 180, label: "HUMAN" },
                  { x: 260, label: "PAPER" },
                ].map((s, i) => (
                  <g key={s.label}>
                    <rect x={s.x} y="200" width="52" height="26" rx="6" fill="#06100d" stroke={i === 1 || i === 2 ? "#34d399" : "#AAB3C5"} strokeOpacity={i === 1 || i === 2 ? 0.9 : 0.35} />
                    <text x={s.x + 26} y="217" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#AAB3C5" letterSpacing="1">{s.label}</text>
                    {i < 3 && <path d={`M${s.x + 54} 213 H${s.x + 78}`} stroke="#AAB3C5" strokeOpacity=".4" markerEnd="url(#hfArrow)" />}
                  </g>
                ))}
                <defs>
                  <marker id="hfArrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M0 0 L6 3 L0 6 Z" fill="#AAB3C5" fillOpacity=".6" />
                  </marker>
                </defs>
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
