import type { ArchiveProject } from "@/content/types";
import { links } from "@/content/site";

export function ArchiveCard({ p, index, detailed = false }: { p: ArchiveProject; index: number; detailed?: boolean }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-line bg-white/[0.02] p-6 transition-colors hover:border-white/25">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] text-silver tabular-nums">{String(index + 1).padStart(2, "0")}</span>
        <span className="eyebrow text-[10px]">{p.category}</span>
      </div>
      <h3 className="mt-6 font-display text-xl">{p.name}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-silver">{p.description}</p>
      {detailed && (
        <dl className="mt-5 grid gap-4 text-[14.5px]">
          <div>
            <dt className="eyebrow text-[10px] text-ember">Challenge</dt>
            <dd className="mt-1.5 leading-relaxed text-silver">{p.challenge}</dd>
          </div>
          <div>
            <dt className="eyebrow text-[10px] text-cyan">What I learned</dt>
            <dd className="mt-1.5 leading-relaxed text-silver">{p.learning}</dd>
          </div>
        </dl>
      )}
      <ul className="mt-5 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <li key={s} className="rounded-full bg-white/[0.05] px-2.5 py-1 font-mono text-[11px] text-silver">{s}</li>
        ))}
      </ul>
      <div className="mt-auto pt-6">
        {p.repo.public ? (
          <a href={`${links.github}/${p.repo.name}`} target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] tracking-[0.14em] text-cyan uppercase hover:underline">
            View on GitHub ↗
          </a>
        ) : (
          <span className="font-mono text-[11px] tracking-[0.14em] text-silver/70 uppercase">Private repository</span>
        )}
      </div>
    </article>
  );
}
