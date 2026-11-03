import { creative } from "@/content/expertise";
import { Reveal, Section, SectionHead } from "@/components/ui";
import { img } from "@/lib/asset";

export function Creative({ compact = false }: { compact?: boolean }) {
  return (
    <Section id="creative" label="Product and brand design">
      <SectionHead
        eyebrow="Product & brand design"
        title={creative.heading}
        tone="ember"
        lede="I direct the naming, identity, packaging and campaign content for the products I build."
      />

      {/* Brand evolution */}
      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {creative.brand.map((b, i) => (
          <Reveal key={b.name} delay={i * 0.08} as="article" className="group relative overflow-hidden rounded-[24px] border border-line">
            <div className="aspect-square overflow-hidden bg-midnight">
              <img src={img(b.img)} alt={`${b.name} brand identity`} width={640} height={640} loading="lazy" className="size-full object-contain transition-transform duration-700 group-hover:scale-[1.04]" />
            </div>
            <div className="p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-lg">{b.name}</h3>
                <span className="font-mono text-[11px] text-silver">{b.period}</span>
              </div>
              <p className="mt-2 text-[14.5px] leading-relaxed text-silver">{b.note}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Packaging */}
      <Reveal className="mt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h3 className="display text-2xl uppercase md:text-4xl">Packaging system</h3>
          <p className="max-w-md text-sm text-silver">{creative.packsNote}</p>
        </div>
        <ul className="snap-row -mx-5 mt-8 flex gap-4 overflow-x-auto px-5 pb-4" aria-label="SAECULA supplement pack concepts (scroll horizontally)">
          {creative.packs.slice(0, compact ? 4 : undefined).map((p) => (
            <li key={p.file} className="w-[62vw] max-w-[260px] shrink-0">
              <img src={img(p.file)} alt={`SAECULA ${p.name} packaging concept`} width={640} height={640} loading="lazy" className="aspect-square w-full rounded-2xl object-cover ring-1 ring-white/10" />
              <p className="mt-3 font-mono text-[11px] tracking-wider text-silver uppercase">{p.name}</p>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Campaign */}
      <Reveal className="mt-20">
        <h3 className="display text-2xl uppercase md:text-4xl">AI-assisted campaigns</h3>
        <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {creative.campaign.map((c) => (
            <li key={c.file} className="group">
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                <img src={img(c.file)} alt={`SAECULA campaign visual: ${c.title}`} width={900} height={1125} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
              </div>
              <p className="mt-3 text-sm">{c.title}</p>
              <p className="font-mono text-[10.5px] tracking-wider text-silver uppercase">{c.tag}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
