"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { TwinScene } from "@/components/three/lazy";
import { TWIN_DOMAINS, type TwinDomain } from "@/components/three/domains";
import { Reveal } from "@/components/ui";

const DOMAIN_NOTE: Record<TwinDomain, string> = {
  Cardiovascular: "Resting heart rate, blood pressure and lipid markers over time.",
  Metabolic: "Glucose regulation, HbA1c and body composition trends.",
  Musculoskeletal: "Strength, mobility and bone-health markers like vitamin D.",
  Recovery: "Sleep, HRV and stress load, shown as readiness.",
  Activity: "Steps, training volume and cardio fitness.",
  Nutrition: "Intake patterns and nutrient markers like ferritin.",
};

const LAYERS = ["Wearable data", "Biomarkers", "Laboratory results", "Nutrition", "Fitness", "AI intelligence", "Personalized recommendations"];

export function TwinExplorer() {
  const [domain, setDomain] = useState<TwinDomain | null>(null);
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
      <div className="relative lg:sticky lg:top-24">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-line bg-[radial-gradient(60%_50%_at_50%_45%,rgb(0_123_255/0.22),transparent_70%)]">
          <TwinScene domain={domain} className="absolute inset-0" />
          <p className="absolute top-4 left-4 rounded-full border border-amber/40 bg-obsidian/70 px-3 py-1.5 font-mono text-[10px] tracking-[0.14em] text-amber uppercase">
            Conceptual visualization
          </p>
          <p className="absolute bottom-4 left-4 font-mono text-[10.5px] text-silver">Drag to rotate</p>
        </div>
      </div>
      <div>
        <Reveal>
          <p className="eyebrow">Explore a domain</p>
          <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Health domains">
            <button type="button" aria-pressed={domain === null} onClick={() => setDomain(null)} className={`rounded-full border px-4 py-2.5 font-mono text-[11px] uppercase ${domain === null ? "border-cyan bg-cyan/10" : "border-line text-silver"}`}>
              Whole body
            </button>
            {TWIN_DOMAINS.map((d) => (
              <button key={d} type="button" aria-pressed={domain === d} onClick={() => setDomain(d)} className={`rounded-full border px-4 py-2.5 font-mono text-[11px] uppercase transition-colors ${domain === d ? "border-cyan bg-cyan/10 text-white" : "border-line text-silver hover:text-white"}`}>
                {d}
              </button>
            ))}
          </div>
          <div className="glass mt-6 min-h-[104px] rounded-2xl p-5" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.p key={domain ?? "all"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="leading-relaxed text-silver">
                <span className="font-display text-white">{domain ?? "Whole body"}. </span>
                {domain ? DOMAIN_NOTE[domain] : "Each domain gathers related signals so trends can be read together instead of one number at a time."}
              </motion.p>
            </AnimatePresence>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-silver/80">
            The platform explores computational models of personal health states from longitudinal wellness data. This view is illustrative. Modeled outputs are not clinically validated predictions.
          </p>
        </Reveal>

        <div className="mt-14">
          <p className="eyebrow">Data layers</p>
          <ol className="mt-5 grid gap-3">
            {LAYERS.map((l, i) => (
              <Reveal as="li" key={l} delay={i * 0.04} className="flex items-center gap-4 rounded-2xl border border-line px-5 py-4">
                <span className="font-mono text-[11px] text-silver tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-px flex-1 bg-gradient-to-r from-cyan/60 to-transparent" aria-hidden />
                <span className="font-display text-sm uppercase md:text-base">{l}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

const AGENTS = [
  { name: "Health intelligence", body: "Summarizes trends across domains into plain language." },
  { name: "Lab interpretation", body: "Explains biomarker results against reference ranges and history." },
  { name: "Nutrition planning", body: "Builds meal guidance from goals, intake and restrictions." },
  { name: "Fitness programming", body: "Adapts training plans to recovery and activity data." },
  { name: "Supplement safety", body: "Checks packs against interactions, contraindications and limits." },
  { name: "Clinical workflow support", body: "Prepares context for clinicians. Decisions stay with licensed professionals." },
  { name: "Personalized recommendations", body: "Turns signals into traceable, explainable suggestions." },
];

export function AgentMap() {
  const [i, setI] = useState(0);
  const R = 165;
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
      <ul className="grid gap-2 sm:hidden">
        {AGENTS.map((a, k) => (
          <li key={a.name}>
            <button type="button" onClick={() => setI(k)} aria-pressed={k === i} className={`w-full rounded-xl border px-4 py-3 text-left font-mono text-[11px] uppercase ${k === i ? "border-cyan bg-cyan/10" : "border-line text-silver"}`}>
              {a.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="relative mx-auto hidden aspect-square w-full max-w-[520px] sm:block">
        <svg viewBox="0 0 440 440" className="absolute inset-0 size-full" aria-hidden>
          <circle cx="220" cy="220" r="205" fill="none" stroke="#FFB347" strokeOpacity="0.35" strokeDasharray="3 6" />
          <text x="220" y="30" textAnchor="middle" fill="#FFB347" fontSize="10" fontFamily="var(--font-mono)" letterSpacing="2">SAFETY CONTROLS · HUMAN OVERSIGHT</text>
          <circle cx="220" cy="220" r="70" fill="#0A1430" stroke="#00E5FF" strokeOpacity="0.5" />
          <text x="220" y="214" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="var(--font-plex)">Orchestrator</text>
          <text x="220" y="232" textAnchor="middle" fill="#AAB3C5" fontSize="10" fontFamily="var(--font-mono)">health context</text>
          {AGENTS.map((a, k) => {
            const ang = (k / AGENTS.length) * Math.PI * 2 - Math.PI / 2;
            const x = 220 + Math.cos(ang) * R, y = 220 + Math.sin(ang) * R;
            return <line key={a.name} x1="220" y1="220" x2={x} y2={y} stroke={k === i ? "#00E5FF" : "#AAB3C5"} strokeOpacity={k === i ? 0.9 : 0.2} className={k === i ? "flow" : undefined} />;
          })}
        </svg>
        {AGENTS.map((a, k) => {
          const ang = (k / AGENTS.length) * Math.PI * 2 - Math.PI / 2;
          const x = 220 + Math.cos(ang) * R, y = 220 + Math.sin(ang) * R;
          return (
            <button
              key={a.name}
              type="button"
              onClick={() => setI(k)}
              onMouseEnter={() => setI(k)}
              aria-pressed={k === i}
              className={`absolute max-w-[7.5rem] -translate-x-1/2 -translate-y-1/2 rounded-xl border px-2.5 py-2 text-center font-mono text-[10px] leading-tight uppercase md:max-w-[9rem] md:text-[10.5px] ${k === i ? "border-cyan bg-cyan/15 text-white" : "border-line bg-obsidian/85 text-silver"}`}
              style={{ left: `${(x / 440) * 100}%`, top: `${(y / 440) * 100}%` }}
            >
              {a.name}
            </button>
          );
        })}
      </div>
      <div className="glass rounded-[28px] p-7" aria-live="polite">
        <p className="eyebrow text-cyan">Agent</p>
        <h3 className="mt-3 font-display text-2xl">{AGENTS[i].name}</h3>
        <p className="mt-3 leading-relaxed text-silver">{AGENTS[i].body}</p>
        <div className="hairline my-6" />
        <ul className="grid gap-2 text-sm text-silver">
          <li>Reads structured health context through typed contracts.</li>
          <li>Calls platform services only through permitted tools.</li>
          <li>Never diagnoses or replaces a licensed professional.</li>
        </ul>
      </div>
    </div>
  );
}

type Marker = { name: string; unit: string; lo?: number; hi?: number; values: number[]; domain: string };
const MARKERS: Marker[] = [
  { name: "HbA1c", unit: "%", lo: 4.0, hi: 5.6, values: [5.8, 5.7, 5.5, 5.4], domain: "Metabolic" },
  { name: "LDL-C", unit: "mg/dL", hi: 100, values: [132, 121, 108, 96], domain: "Cardiovascular" },
  { name: "hs-CRP", unit: "mg/L", hi: 1.0, values: [2.1, 1.6, 1.2, 0.9], domain: "Cardiovascular" },
  { name: "Vitamin D (25-OH)", unit: "ng/mL", lo: 30, hi: 100, values: [22, 28, 34, 41], domain: "Musculoskeletal" },
  { name: "Ferritin", unit: "ng/mL", lo: 30, hi: 300, values: [48, 52, 61, 58], domain: "Nutrition" },
  { name: "TSH", unit: "mIU/L", lo: 0.4, hi: 4.0, values: [2.2, 2.4, 2.1, 2.3], domain: "Metabolic" },
];

const inRange = (m: Marker, v: number) => (m.lo === undefined || v >= m.lo) && (m.hi === undefined || v <= m.hi);

function Spark({ m }: { m: Marker }) {
  const w = 120, h = 34;
  const all = [...m.values, ...(m.lo !== undefined ? [m.lo] : []), ...(m.hi !== undefined ? [m.hi] : [])];
  const min = Math.min(...all) * 0.95, max = Math.max(...all) * 1.05;
  const y = (v: number) => h - ((v - min) / (max - min)) * h;
  const x = (i: number) => (i / (m.values.length - 1)) * (w - 8) + 4;
  const bandTop = m.hi !== undefined ? y(m.hi) : 0;
  const bandBot = m.lo !== undefined ? y(m.lo) : h;
  const last = m.values.length - 1;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} aria-hidden>
      <rect x="0" y={bandTop} width={w} height={Math.max(0, bandBot - bandTop)} fill="#34d399" fillOpacity="0.08" />
      <polyline points={m.values.map((v, i) => `${x(i)},${y(v)}`).join(" ")} fill="none" stroke="#00E5FF" strokeWidth="1.6" />
      <circle cx={x(last)} cy={y(m.values[last])} r="3" fill={inRange(m, m.values[last]) ? "#34d399" : "#FFB347"} />
    </svg>
  );
}

const WORKFLOW = ["Ingest result", "Normalize units", "Compare to range", "Trend over draws", "Map to domain", "AI explanation", "Clinician review when out of range"];

export function BiomarkerDashboard() {
  const [sel, setSel] = useState(0);
  const m = MARKERS[sel];
  const latest = m.values[m.values.length - 1];
  return (
    <div className="rounded-[28px] border border-line bg-midnight/70 p-5 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[11px] tracking-[0.14em] text-amber uppercase">Synthetic demonstration data · not medical advice</p>
        <p className="font-mono text-[11px] text-silver">Provenance: demo panel, 4 draws</p>
      </div>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <caption className="sr-only">Synthetic biomarker panel with reference ranges and trends</caption>
          <thead>
            <tr className="border-b border-line font-mono text-[10.5px] tracking-[0.12em] text-silver uppercase">
              <th className="py-3 pr-4 font-normal">Biomarker</th>
              <th className="py-3 pr-4 font-normal">Latest</th>
              <th className="py-3 pr-4 font-normal">Reference</th>
              <th className="py-3 pr-4 font-normal">Trend</th>
              <th className="py-3 font-normal">Domain</th>
            </tr>
          </thead>
          <tbody>
            {MARKERS.map((mk, k) => {
              const v = mk.values[mk.values.length - 1];
              return (
                <tr key={mk.name} className={`cursor-pointer border-b border-line/60 transition-colors ${k === sel ? "bg-cyan/[0.07]" : "hover:bg-white/[0.03]"}`} onClick={() => setSel(k)}>
                  <td className="py-3 pr-4">
                    <button type="button" onClick={() => setSel(k)} aria-pressed={k === sel} className="text-left font-medium">{mk.name}</button>
                  </td>
                  <td className="py-3 pr-4 tabular-nums">
                    {v} <span className="text-silver">{mk.unit}</span>
                    <span className={`ml-2 rounded-full px-2 py-0.5 font-mono text-[10px] ${inRange(mk, v) ? "bg-emerald-400/10 text-emerald-300" : "bg-amber/10 text-amber"}`}>{inRange(mk, v) ? "In range" : "Out of range"}</span>
                  </td>
                  <td className="py-3 pr-4 text-silver tabular-nums">
                    {mk.lo !== undefined && mk.hi !== undefined ? `${mk.lo}–${mk.hi}` : mk.hi !== undefined ? `< ${mk.hi}` : `> ${mk.lo}`}
                  </td>
                  <td className="py-3 pr-4"><Spark m={mk} /></td>
                  <td className="py-3 text-silver">{mk.domain}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <p className="eyebrow">Selected</p>
          <p className="mt-2 font-display text-2xl">{m.name}</p>
          <p className="mt-1 text-silver tabular-nums">
            Draws: {m.values.join(" → ")} {m.unit}. Latest {latest} is {inRange(m, latest) ? "within" : "outside"} the illustrative range.
          </p>
        </div>
        <div>
          <p className="eyebrow">Interpretation workflow</p>
          <ol className="mt-3 flex flex-wrap gap-2">
            {WORKFLOW.map((w, k) => (
              <li key={w} className={`rounded-full border px-3 py-1.5 font-mono text-[11px] ${k === WORKFLOW.length - 1 ? (inRange(m, latest) ? "border-line text-silver/50 line-through" : "border-amber/50 text-amber") : "border-line text-silver"}`}>
                {w}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

const DEVICES = ["Apple Health", "Oura", "WHOOP", "Fitbit", "Garmin"];

export function WearableEcosystem() {
  return (
    <div className="relative mx-auto max-w-3xl">
      <svg viewBox="0 0 600 300" className="w-full" aria-hidden>
        {DEVICES.map((d, i) => {
          const x = 60 + i * 120;
          return <path key={d} d={`M${x} 60 C${x} 160, 300 140, 300 230`} fill="none" stroke="#AAB3C5" strokeOpacity="0.35" strokeDasharray="4 6" />;
        })}
        <circle cx="300" cy="240" r="34" fill="#0A1430" stroke="#00E5FF" strokeOpacity="0.6" />
        <text x="300" y="244" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="var(--font-plex)">SAECULA</text>
      </svg>
      <ul className="absolute inset-x-0 top-0 grid grid-cols-5 gap-1 text-center">
        {DEVICES.map((d) => (
          <li key={d}>
            <span className="inline-block rounded-xl border border-dashed border-silver/40 bg-obsidian px-1.5 py-2 font-mono text-[9.5px] leading-tight uppercase md:px-3 md:text-[11px]">{d}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
