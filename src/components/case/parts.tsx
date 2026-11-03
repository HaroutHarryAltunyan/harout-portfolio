import Link from "next/link";
import type { Capability, Metric, Venture } from "@/content/types";
import { Reveal, StatusBadge, Chips } from "@/components/ui";

export function CaseHero({
  v,
  accent,
  gradient,
  media,
}: {
  v: Venture;
  accent: "cyan" | "ember";
  gradient: string;
  media: React.ReactNode;
}) {
  return (
    <section aria-label={`${v.name} overview`} className="gutter relative overflow-hidden pt-36 pb-20 md:pt-44">
      <div aria-hidden className="absolute inset-0" style={{ background: gradient }} />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div>
          <Link href="/#work" className="font-mono text-[11px] tracking-[0.16em] text-silver uppercase hover:text-white">← All work</Link>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className={`eyebrow ${accent === "cyan" ? "text-cyan" : "text-amber"}`}>{v.category}</span>
            <span className="eyebrow">{v.period}</span>
          </div>
          <h1 className="display mt-6 text-[clamp(44px,12vw,96px)] lg:text-[clamp(72px,7vw,120px)]">{v.name}</h1>
          {v.pronunciation && <p className="mt-2 font-mono text-sm text-silver">/{v.pronunciation}/</p>}
          <p className={`mt-6 font-display text-xl uppercase md:text-2xl ${accent === "cyan" ? "text-cyan" : "text-amber"}`}>{v.tagline}</p>
          <p className="mt-6 font-display text-lg">{v.role}</p>
          <div className="mt-6 grid max-w-xl gap-4 text-lg leading-relaxed text-silver">
            {v.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="text-white">{v.responsibilities}</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={v.site.href} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-6 py-3.5 font-mono text-[12px] tracking-[0.16em] text-obsidian uppercase">
              Visit {v.site.label} ↗
            </a>
            <a href="#architecture" className="rounded-full border border-white/25 px-6 py-3.5 font-mono text-[12px] tracking-[0.16em] uppercase hover:border-white">
              See the architecture
            </a>
          </div>
        </div>
        <div className="relative">{media}</div>
      </div>
    </section>
  );
}

export function MetricsStrip({ metrics, statusNote }: { metrics: Metric[]; statusNote: string }) {
  return (
    <section aria-label="Engineering metrics" className="gutter">
      <div className="container-x">
        <dl className="grid border-y border-line sm:grid-cols-3">
          {metrics.map((m, i) => (
            <div key={m.label} className={`flex flex-col-reverse gap-2 py-8 sm:px-6 ${i ? "border-t border-line sm:border-t-0 sm:border-l" : "sm:pl-0"}`}>
              <dt>
                <span className="block text-[15px]">{m.label}</span>
                <span className="mt-2 block font-mono text-[11px] leading-relaxed text-silver/80">
                  Source: {m.source}. Checked {m.checked}.
                </span>
              </dt>
              <dd className="display text-5xl tabular-nums md:text-6xl">{m.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-silver">
          <span className="mr-2 font-mono text-[11px] tracking-[0.14em] text-amber uppercase">Status</span>
          {statusNote}
        </p>
      </div>
    </section>
  );
}

export function FeatureHead({ n, cap, accent = "cyan" }: { n: number; cap: Capability; accent?: "cyan" | "ember" }) {
  return (
    <Reveal className="max-w-3xl">
      <div className="flex flex-wrap items-center gap-3">
        <span className={`font-mono text-[11px] tracking-[0.2em] uppercase ${accent === "cyan" ? "text-cyan" : "text-amber"}`}>
          Feature {String(n).padStart(2, "0")}
        </span>
        <StatusBadge status={cap.status} />
      </div>
      <h2 className="display mt-5 text-[clamp(26px,4.2vw,56px)] uppercase">{cap.title}</h2>
      <p className="mt-5 text-lg leading-relaxed text-silver">{cap.summary}</p>
    </Reveal>
  );
}

/** Horizontal flow on wide screens, vertical on phones. */
export function Pipeline({ steps, accent = "#00E5FF", branch }: { steps: string[]; accent?: string; branch?: { after: number; label: string } }) {
  return (
    <ol className="relative grid gap-3 md:flex md:items-stretch md:gap-0">
      {steps.map((s, i) => (
        <li key={s} className="relative flex items-center md:flex-1">
          <div className="glass relative w-full rounded-2xl px-4 py-4 md:min-h-[96px]">
            <span className="font-mono text-[10px] text-silver tabular-nums">{String(i + 1).padStart(2, "0")}</span>
            <p className="mt-1.5 font-display text-[13px] leading-snug tracking-wide uppercase">{s}</p>
            {branch && branch.after === i && (
              <p className="mt-2 rounded-lg border border-dashed border-amber/50 px-2 py-1 font-mono text-[10px] text-amber">↳ {branch.label}</p>
            )}
          </div>
          {i < steps.length - 1 && (
            <svg aria-hidden className="hidden w-8 shrink-0 md:block" viewBox="0 0 32 10">
              <line x1="0" y1="5" x2="32" y2="5" stroke={accent} strokeOpacity="0.7" className="flow" />
            </svg>
          )}
        </li>
      ))}
    </ol>
  );
}

export function PointList({ items }: { items: string[] }) {
  return <Chips items={items} className="mt-8" />;
}

export function CaseCTA({ v }: { v: Venture }) {
  return (
    <section className="gutter py-28 md:py-40" aria-label={`Explore ${v.name}`}>
      <div className="container-x text-center">
        <p className="eyebrow">Explore {v.name}</p>
        <h2 className="display mx-auto mt-6 max-w-4xl text-[clamp(36px,7vw,96px)] uppercase">See where it&apos;s going.</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={v.site.href} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-7 py-4 font-mono text-[12px] tracking-[0.16em] text-obsidian uppercase">
            Visit {v.site.label} ↗
          </a>
          <Link href={v.slug === "saecula" ? "/work/hyelynk/" : "/work/saecula/"} className="rounded-full border border-white/25 px-7 py-4 font-mono text-[12px] tracking-[0.16em] uppercase hover:border-white">
            Next: {v.slug === "saecula" ? "HyeLynk" : "SAECULA"} →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Stack({ items }: { items: string[] }) {
  return (
    <Reveal className="mt-10">
      <p className="eyebrow">Stack</p>
      <Chips items={items} className="mt-4" />
    </Reveal>
  );
}
