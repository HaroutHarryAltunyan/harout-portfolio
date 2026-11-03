import type { Metadata } from "next";
import { hyelynk as v } from "@/content/ventures";
import { ArchDiagram } from "@/components/ArchDiagram";
import { CaseCTA, CaseHero, FeatureHead, MetricsStrip, Pipeline, PointList, Stack } from "@/components/case/parts";
import { CommerceMock, CrossPlatform, GlobeHero, SocialMock } from "@/components/case/hyelynk";
import { Reveal, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "HyeLynk case study",
  description:
    "How Harout Altunyan designed HyeLynk, a social and community commerce platform for the Armenian diaspora: microservices, moderation, real-time messaging and community rewards.",
  alternates: { canonical: "work/hyelynk/" },
  openGraph: { title: "HyeLynk · Community platform", url: "work/hyelynk/" },
};

const cap = (id: string) => v.capabilities.find((c) => c.id === id)!;

export default function HyeLynkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "HyeLynk platform case study",
    about: { "@type": "Organization", name: "HyeLynk", url: v.site.href },
    author: { "@type": "Person", name: "Harout Altunyan" },
  };
  return (
    <div className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CaseHero
        v={v}
        accent="ember"
        gradient="radial-gradient(55% 60% at 85% 40%, rgb(255 104 30 / 0.22), transparent 70%), radial-gradient(45% 50% at 0% 10%, rgb(217 0 18 / 0.16), transparent 70%), radial-gradient(50% 50% at 50% 110%, rgb(0 51 160 / 0.32), transparent 70%)"
        media={<GlobeHero />}
      />
      <MetricsStrip metrics={v.metrics} statusNote={v.statusNote} />

      <Section label="Social networking">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <FeatureHead n={1} cap={cap("social")} accent="ember" />
            <PointList items={cap("social").points!} />
          </div>
          <Reveal><SocialMock /></Reveal>
        </div>
      </Section>

      <Section label="Social commerce">
        <FeatureHead n={2} cap={cap("commerce")} accent="ember" />
        <Reveal className="mt-14"><CommerceMock /></Reveal>
      </Section>

      <Section label="Recommendation intelligence">
        <FeatureHead n={3} cap={cap("recs")} accent="ember" />
        <Reveal className="mt-14">
          <Pipeline steps={["Content signals", "User interests", "Engagement events", "Gorse processing", "Feed ranking", "Personalized delivery"]} accent="#FF681E" />
        </Reveal>
      </Section>

      <Section label="AI content moderation">
        <FeatureHead n={4} cap={cap("moderation")} accent="ember" />
        <Reveal className="mt-14">
          <Pipeline steps={["Content submission", "Image + text analysis", "Safety classification", "Moderation decision", "Publication"]} accent="#FF681E" branch={{ after: 3, label: "Human review when required" }} />
        </Reveal>
      </Section>

      <Section id="architecture" label="Real-time architecture">
        <FeatureHead n={5} cap={cap("realtime")} accent="ember" />
        <Reveal className="mt-14"><ArchDiagram arch={v.architecture} accent="#FF681E" /></Reveal>
        <Stack items={v.stack} />
      </Section>

      <Section label="HyeCoin and personal AI agents">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <FeatureHead n={6} cap={cap("hyecoin")} accent="ember" />
            <PointList items={cap("hyecoin").points!} />
            <p className="mt-6 text-sm leading-relaxed text-silver">No token is publicly traded, no financial return is offered, and the rewards system is not live.</p>
          </div>
          <div>
            <FeatureHead n={7} cap={cap("agents")} accent="ember" />
            <PointList items={cap("agents").points!} />
          </div>
        </div>
      </Section>

      <Section label="Cross-platform ecosystem">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-[11px] tracking-[0.2em] text-amber uppercase">Feature 08</p>
          <h2 className="display mt-5 text-[clamp(30px,5vw,64px)] uppercase">Cross-platform ecosystem</h2>
          <p className="mt-5 text-lg leading-relaxed text-silver">One account across web, iOS, Android, the storefront and the admin dashboard, with secure authentication and synced state.</p>
        </Reveal>
        <Reveal className="mt-14"><CrossPlatform /></Reveal>
      </Section>

      <CaseCTA v={v} />
    </div>
  );
}
