"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { lifecycle } from "@/content/expertise";
import { Reveal, Section, SectionHead } from "@/components/ui";

const T = { fill: "#fff", fontSize: 11, fontFamily: "var(--font-plex)" } as const;
const M = { fill: "#AAB3C5", fontSize: 10, fontFamily: "var(--font-mono)" } as const;

function Box({ x, y, w = 110, h = 34, label, tone = "#00E5FF" }: { x: number; y: number; w?: number; h?: number; label: string; tone?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={9} fill="#0A1430" stroke={tone} strokeOpacity={0.55} />
      <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" {...T}>{label}</text>
    </g>
  );
}

/** Sanitized, illustrative artifacts. No real endpoints, data or credentials. */
function Artifact({ step }: { step: string }) {
  switch (step) {
    case "Discover":
      return (
        <svg viewBox="0 0 420 220" className="w-full">
          {["Who is it for?", "What hurts today?", "What does success look like?"].map((q, i) => (
            <g key={q}>
              <rect x={20} y={20 + i * 64} width={380} height={46} rx={12} fill="#0A1430" stroke="#AAB3C5" strokeOpacity={0.25} />
              <text x={40} y={48 + i * 64} {...T}>{q}</text>
              <circle cx={378} cy={43 + i * 64} r={5} fill={["#00E5FF", "#653BFF", "#FF681E"][i]} />
            </g>
          ))}
        </svg>
      );
    case "Architect":
      return (
        <svg viewBox="0 0 420 220" className="w-full">
          <Box x={20} y={30} label="Mobile" />
          <Box x={20} y={95} label="Web" />
          <Box x={20} y={160} label="Admin" />
          <Box x={160} y={95} label="API layer" tone="#653BFF" />
          <Box x={300} y={40} label="Services" tone="#FF681E" />
          <Box x={300} y={150} label="Database" tone="#FF681E" />
          {[[130, 47], [130, 112], [130, 177]].map(([x, y], i) => (
            <path key={i} d={`M${x} ${y} C145 ${y},145 112,160 112`} stroke="#00E5FF" strokeOpacity={0.6} fill="none" className="flow" />
          ))}
          <path d="M270 112 C285 112,285 57,300 57" stroke="#653BFF" fill="none" className="flow" />
          <path d="M270 112 C285 112,285 167,300 167" stroke="#653BFF" fill="none" className="flow" />
        </svg>
      );
    case "Design":
      return (
        <svg viewBox="0 0 420 220" className="w-full">
          {[
            { x: 20, y: 30, t: "users", f: ["id", "email", "role"] },
            { x: 150, y: 90, t: "assessments", f: ["id", "user_id", "answers"] },
            { x: 290, y: 30, t: "recommendations", f: ["id", "assessment_id", "pack_id"] },
          ].map((e) => (
            <g key={e.t}>
              <rect x={e.x} y={e.y} width={115} height={100} rx={10} fill="#0A1430" stroke="#00E5FF" strokeOpacity={0.4} />
              <text x={e.x + 12} y={e.y + 22} {...T} fontWeight={600}>{e.t}</text>
              {e.f.map((f, i) => (
                <text key={f} x={e.x + 12} y={e.y + 46 + i * 18} {...M}>{f}</text>
              ))}
            </g>
          ))}
          <path d="M135 80 L150 140" stroke="#FFB347" fill="none" className="flow" />
          <path d="M265 140 L290 80" stroke="#FFB347" fill="none" className="flow" />
        </svg>
      );
    case "Develop":
      return (
        <svg viewBox="0 0 420 220" className="w-full">
          {["Client", "API layer", "Service", "DB"].map((l, i) => (
            <g key={l}>
              <text x={50 + i * 105} y={22} textAnchor="middle" {...M}>{l}</text>
              <line x1={50 + i * 105} y1={30} x2={50 + i * 105} y2={210} stroke="#AAB3C5" strokeOpacity={0.2} />
            </g>
          ))}
          {[
            [0, 1, 50, "POST /assessments"],
            [1, 2, 80, "validate + auth"],
            [2, 3, 110, "insert"],
            [3, 2, 140, "row"],
            [2, 1, 170, "score + recs"],
            [1, 0, 200, "201 Created"],
          ].map(([a, b, y, label], i) => {
            const x1 = 50 + (a as number) * 105, x2 = 50 + (b as number) * 105;
            return (
              <g key={i}>
                <line x1={x1} y1={y as number} x2={x2} y2={y as number} stroke={x2 > x1 ? "#00E5FF" : "#FF681E"} strokeOpacity={0.8} className="flow" />
                <text x={(x1 + x2) / 2} y={(y as number) - 5} textAnchor="middle" {...M}>{label as string}</text>
              </g>
            );
          })}
        </svg>
      );
    case "Test":
      return (
        <svg viewBox="0 0 420 220" className="w-full">
          <text x={20} y={26} {...M}>DEMO DATA · ILLUSTRATIVE</text>
          {[["Unit", 0.94], ["Integration", 0.86], ["End-to-end", 0.72], ["Architecture rules", 1]].map(([l, v], i) => (
            <g key={l as string}>
              <text x={20} y={62 + i * 42} {...T}>{l as string}</text>
              <rect x={170} y={50 + i * 42} width={220} height={14} rx={7} fill="#0A1430" />
              <rect x={170} y={50 + i * 42} width={220 * (v as number)} height={14} rx={7} fill={i === 3 ? "#34d399" : "#00E5FF"} fillOpacity={0.75} />
            </g>
          ))}
        </svg>
      );
    case "Deploy":
      return (
        <svg viewBox="0 0 420 220" className="w-full">
          {["Commit", "CI checks", "Build", "Preview", "Release gate", "Production"].map((l, i) => {
            const x = 20 + (i % 3) * 135, y = i < 3 ? 40 : 140;
            return (
              <g key={l}>
                <Box x={x} y={y} w={115} label={l} tone={i === 4 ? "#FFB347" : "#00E5FF"} />
                {i % 3 < 2 && <line x1={x + 115} y1={y + 17} x2={x + 135} y2={y + 17} stroke="#00E5FF" className="flow" />}
              </g>
            );
          })}
          <path d="M347 74 C347 110,77 104,77 140" stroke="#00E5FF" fill="none" strokeOpacity={0.6} className="flow" />
        </svg>
      );
    case "Observe":
      return (
        <svg viewBox="0 0 420 220" className="w-full">
          <text x={20} y={26} {...M}>DEMO DATA · REQUEST LATENCY</text>
          {[60, 100, 140, 180].map((y) => (
            <line key={y} x1={20} y1={y} x2={400} y2={y} stroke="#AAB3C5" strokeOpacity={0.1} />
          ))}
          <path d="M20 150 L60 140 L100 146 L140 120 L180 128 L220 96 L260 104 L300 80 L340 88 L380 70 L400 74 L400 200 L20 200 Z" fill="#00E5FF" fillOpacity={0.08} />
          <path d="M20 150 L60 140 L100 146 L140 120 L180 128 L220 96 L260 104 L300 80 L340 88 L380 70 L400 74" fill="none" stroke="#00E5FF" strokeWidth={2} />
          <circle cx={400} cy={74} r={4} fill="#00E5FF" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 420 220" className="w-full">
          <circle cx={210} cy={110} r={80} fill="none" stroke="#653BFF" strokeOpacity={0.5} className="flow" />
          {["Learn", "Plan", "Ship"].map((l, i) => {
            const a = (i / 3) * Math.PI * 2 - Math.PI / 2;
            return <Box key={l} x={210 + Math.cos(a) * 80 - 45} y={110 + Math.sin(a) * 80 - 15} w={90} h={30} label={l} tone="#653BFF" />;
          })}
        </svg>
      );
  }
}

export function Lifecycle() {
  const [i, setI] = useState(0);
  const s = lifecycle[i];
  return (
    <Section id="lifecycle" label="Engineering experience">
      <SectionHead
        eyebrow="Engineering experience"
        title="From product vision to production systems"
        lede="I work through the whole lifecycle: product strategy, frontend, backend, infrastructure, AI integration and release engineering."
      />
      <Reveal className="mt-14">
        <ol className="snap-row -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:grid lg:grid-cols-8 lg:px-0">
          {lifecycle.map((st, k) => (
            <li key={st.step} className="shrink-0">
              <button
                type="button"
                onClick={() => setI(k)}
                aria-pressed={k === i}
                className={`w-full rounded-2xl border px-4 py-4 text-left transition-all md:px-3 ${k === i ? "border-ember bg-ember/10" : "border-line hover:border-white/30"}`}
              >
                <span className="block font-mono text-[10px] text-silver tabular-nums">{String(k + 1).padStart(2, "0")}</span>
                <span className="mt-1 block font-display text-[12px] tracking-wide uppercase">{st.step}</span>
              </button>
            </li>
          ))}
        </ol>
      </Reveal>
      <div className="mt-8 grid gap-8 rounded-[28px] border border-line bg-midnight/60 p-7 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-center md:p-10">
        <AnimatePresence mode="wait">
          <motion.div key={s.step} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <p className="eyebrow text-ember">Step {i + 1} of {lifecycle.length}</p>
            <h3 className="display mt-3 text-4xl uppercase md:text-5xl">{s.step}</h3>
            <p className="mt-4 text-lg leading-relaxed text-silver">{s.body}</p>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.figure key={s.step} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
            <Artifact step={s.step} />
            <figcaption className="mt-3 font-mono text-[10.5px] text-silver/80">Illustrative artifact with sanitized demo content.</figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
    </Section>
  );
}
