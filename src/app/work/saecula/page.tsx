import type { Metadata } from "next";
import { saecula as v } from "@/content/ventures";
import { creative } from "@/content/expertise";
import { ArchDiagram } from "@/components/ArchDiagram";
import { CaseCTA, CaseHero, FeatureHead, MetricsStrip, Pipeline, PointList, Stack } from "@/components/case/parts";
import { AgentMap, BiomarkerDashboard, TwinExplorer, WearableEcosystem } from "@/components/case/saecula";
import { Chips, Reveal, Section } from "@/components/ui";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: "SAECULA case study",
  description:
    "How Harout Altunyan, Co-Founder & CTO, is architecting SAECULA: an AI health intelligence platform with multi-agent AI, digital twins, biomarkers, telehealth and personalized supplements.",
  alternates: { canonical: "work/saecula/" },
  openGraph: { title: "SAECULA · AI health intelligence", url: "work/saecula/" },
};

const cap = (id: string) => v.capabilities.find((c) => c.id === id)!;

export default function SaeculaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "SAECULA platform case study",
    about: { "@type": "Organization", name: "SAECULA", legalName: "Health Aevum AI Inc.", url: v.site.href },
    author: { "@type": "Person", name: "Harout Altunyan" },
  };
  return (
    <div className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CaseHero
        v={v}
        accent="cyan"
        gradient="radial-gradient(60% 60% at 85% 30%, rgb(101 59 255 / 0.32), transparent 70%), radial-gradient(50% 50% at 10% 80%, rgb(0 229 255 / 0.14), transparent 70%), radial-gradient(40% 40% at 60% 100%, rgb(0 123 255 / 0.25), transparent 70%)"
        media={
          <div className="relative mx-auto flex max-w-lg items-end justify-center gap-4">
            <img src={img("saecula-app-home.webp")} alt="SAECULA app home screen: health score 78, sleep, activity, recovery, HRV, AI coach and today's plan" width={560} height={995} fetchPriority="high" className="w-[60%] drop-shadow-[0_40px_80px_rgb(0_0_0/0.7)]" />
            <img src={img("campaign-device.webp")} alt="SAECULA campaign poster with the supplement box, phone and watch" width={900} height={1125} className="mb-10 w-[40%] rounded-2xl ring-1 ring-white/10" />
          </div>
        }
      />
      <MetricsStrip metrics={v.metrics} statusNote={v.statusNote} />

      <Section label="Digital twin">
        <FeatureHead n={1} cap={cap("twin")} />
        <div className="mt-14"><TwinExplorer /></div>
      </Section>

      <Section label="Health AI Operating System">
        <FeatureHead n={2} cap={cap("haios")} />
        <div className="mt-14"><AgentMap /></div>
      </Section>

      <Section label="Biomarker intelligence">
        <FeatureHead n={3} cap={cap("biomarkers")} />
        <Reveal className="mt-14"><BiomarkerDashboard /></Reveal>
      </Section>

      <Section label="Wearable integration">
        <FeatureHead n={4} cap={cap("wearables")} />
        <Reveal className="mt-14"><WearableEcosystem /></Reveal>
      </Section>

      <Section label="Telehealth">
        <FeatureHead n={5} cap={cap("telehealth")} />
        <Reveal className="mt-14">
          <Pipeline steps={["Appointment scheduling", "Consent", "Video consultation", "Clinician workflow", "Patient portal"]} branch={{ after: 1, label: "Consent version recorded" }} />
          <p className="mt-6 text-sm text-silver">Privacy controls and secure handling of health information apply at every step. The whole flow is gated behind launch flags until legal, vendor and state approvals are in place.</p>
        </Reveal>
      </Section>

      <Section label="Supplement intelligence">
        <FeatureHead n={6} cap={cap("supplements")} />
        <Reveal className="mt-14">
          <Pipeline steps={["Assessment inputs", "Health signals", "Ingredient mapping", "Health domains", "Personalized pack", "Subscription"]} accent="#653BFF" />
        </Reveal>
        <Reveal className="mt-12">
          <ul className="snap-row -mx-5 flex gap-4 overflow-x-auto px-5 pb-4" aria-label="Supplement pack concepts (scroll horizontally)">
            {creative.packs.map((p) => (
              <li key={p.file} className="w-[60vw] max-w-[240px] shrink-0">
                <img src={img(p.file)} alt={`SAECULA ${p.name} packaging concept`} width={640} height={640} loading="lazy" className="aspect-square w-full rounded-2xl object-cover ring-1 ring-white/10" />
                <p className="mt-3 font-mono text-[11px] tracking-wider text-silver uppercase">{p.name}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-2xl text-sm text-silver">{creative.packsNote}</p>
        </Reveal>
      </Section>

      <Section id="architecture" label="Platform architecture">
        <FeatureHead n={7} cap={cap("platform")} />
        <Reveal className="mt-14"><ArchDiagram arch={v.architecture} accent="#00E5FF" /></Reveal>
        <PointList items={cap("platform").points!} />
        <Stack items={v.stack} />
      </Section>

      <Section label="Brand evolution">
        <Reveal>
          <p className="eyebrow">Brand evolution</p>
          <h2 className="display mt-5 text-[clamp(30px,5vw,64px)] uppercase">Healix → AEVUM → SAECULA</h2>
          <p className="mt-5 max-w-2xl text-lg text-silver">Three names in fourteen months as the product grew from a wellness app into a health intelligence platform. Health Aevum AI Inc. remains the legal entity.</p>
        </Reveal>
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {creative.brand.map((b, i) => (
            <Reveal as="li" key={b.name} delay={i * 0.08} className="overflow-hidden rounded-[24px] border border-line">
              <div className="aspect-square bg-midnight">
                <img src={img(b.img)} alt={`${b.name} brand identity`} width={640} height={640} loading="lazy" className="size-full object-contain" />
              </div>
              <div className="p-5">
                <p className="font-mono text-[11px] text-silver">{b.period}</p>
                <h3 className="mt-1 font-display text-xl">{b.name}</h3>
                <p className="mt-2 text-sm text-silver">{b.note}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <Chips items={["Naming", "Wordmarks", "Visual system", "Color palette", "Packaging", "Campaigns"]} className="mt-10" />
      </Section>

      <CaseCTA v={v} />
    </div>
  );
}
