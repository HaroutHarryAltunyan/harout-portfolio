"use client";

import { useState } from "react";
import type { Venture } from "@/content/types";
import { STATUS_LABEL } from "@/content/types";

/**
 * Column-based system diagram drawn from venture content. Each group is a column;
 * edges are drawn as animated curves. Hovering or focusing a node highlights its connections.
 */
export function ArchDiagram({ arch, accent = "#00E5FF" }: { arch: Venture["architecture"]; accent?: string }) {
  const [focus, setFocus] = useState<string | null>(null);
  const colW = 210;
  const rowH = 74;
  const padX = 20;
  const padY = 50;
  const nodeW = 176;
  const nodeH = 46;

  const pos: Record<string, { x: number; y: number }> = {};
  const maxRows = Math.max(...arch.groups.map((g) => arch.nodes.filter((n) => n.group === g).length));
  arch.groups.forEach((g, gi) => {
    const nodes = arch.nodes.filter((n) => n.group === g);
    const offset = ((maxRows - nodes.length) * rowH) / 2;
    nodes.forEach((n, ni) => {
      pos[n.id] = { x: padX + gi * colW, y: padY + offset + ni * rowH };
    });
  });
  const W = padX * 2 + (arch.groups.length - 1) * colW + nodeW;
  const H = padY + maxRows * rowH + 10;

  const linked = (id: string) =>
    focus === null || id === focus || arch.edges.some(([a, b]) => (a === focus && b === id) || (b === focus && a === id));

  return (
    <div className="overflow-x-auto rounded-3xl border border-line bg-midnight/60 p-4 md:p-6" role="figure" aria-label="System architecture diagram">
      <svg viewBox={`0 0 ${W} ${H}`} className="min-w-[760px]" width="100%" role="img" aria-hidden="true">
        {arch.groups.map((g, gi) => (
          <text key={g} x={padX + gi * colW} y={22} fill="#AAB3C5" fontSize="11" fontFamily="var(--font-mono)" letterSpacing="2">
            {g.toUpperCase()}
          </text>
        ))}
        {arch.edges.map(([a, b]) => {
          const A = pos[a], B = pos[b];
          if (!A || !B) return null;
          const forward = A.x <= B.x;
          const x1 = forward ? A.x + nodeW : A.x;
          const x2 = forward ? B.x : B.x + nodeW;
          const y1 = A.y + nodeH / 2, y2 = B.y + nodeH / 2;
          const mx = (x1 + x2) / 2;
          const on = focus !== null && (a === focus || b === focus);
          const sameCol = A.x === B.x;
          const d = sameCol
            ? `M${A.x + nodeW} ${y1} C${A.x + nodeW + 40} ${y1}, ${B.x + nodeW + 40} ${y2}, ${B.x + nodeW} ${y2}`
            : `M${x1} ${y1} C${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
          return (
            <path
              key={`${a}-${b}`}
              d={d}
              fill="none"
              stroke={on ? accent : "#AAB3C5"}
              strokeOpacity={focus === null ? 0.35 : on ? 0.95 : 0.08}
              strokeWidth={on ? 1.8 : 1.2}
              className="flow"
            />
          );
        })}
        {arch.nodes.map((n) => {
          const p = pos[n.id];
          const dim = !linked(n.id);
          const planned = n.status === "planned";
          return (
            <g
              key={n.id}
              transform={`translate(${p.x} ${p.y})`}
              opacity={dim ? 0.25 : 1}
              style={{ transition: "opacity .3s" }}
              onMouseEnter={() => setFocus(n.id)}
              onMouseLeave={() => setFocus(null)}
              data-cursor
            >
              <rect
                width={nodeW}
                height={nodeH}
                rx="12"
                fill="#0A1430"
                stroke={focus === n.id ? accent : planned ? "#AAB3C5" : "rgba(170,179,197,.35)"}
                strokeDasharray={planned ? "4 4" : undefined}
              />
              <circle cx="16" cy={nodeH / 2} r="3.5" fill={planned ? "#AAB3C5" : n.status === "in-development" ? "#FFB347" : accent} />
              <text x="28" y={nodeH / 2 + 4} fill="#fff" fontSize="12.5" fontFamily="var(--font-plex)">
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] text-silver">
        <span className="flex items-center gap-2"><span className="size-2 rounded-full" style={{ background: accent }} /> Implemented</span>
        <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-amber" /> {STATUS_LABEL["in-development"]}</span>
        <span className="flex items-center gap-2"><span className="size-2 rounded-full border border-dashed border-silver" /> {STATUS_LABEL.planned}</span>
        <span className="text-silver/70">Hover a node to trace its connections.</span>
      </div>
      <ul className="sr-only">
        {arch.edges.map(([a, b]) => (
          <li key={`${a}-${b}`}>
            {arch.nodes.find((n) => n.id === a)?.label} connects to {arch.nodes.find((n) => n.id === b)?.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
