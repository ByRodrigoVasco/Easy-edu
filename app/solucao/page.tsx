import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import PillarIcon from "@/components/ui/PillarIcon";
import StepFlow from "@/components/ui/StepFlow";
import MarkerList from "@/components/ui/MarkerList";
import SignatureLine from "@/components/ui/SignatureLine";
import Reveal from "@/components/ui/Reveal";
import { hero, pillars, journey, differentiators } from "@/content/solucao";

export const metadata: Metadata = {
  title: "Solução",
};

export default function SolucaoPage() {
  return (
    <>
      <Section background="sand">
        <PageHero eyebrow={hero.eyebrow} title={hero.title} support={hero.support} />
      </Section>

      <Section background="white">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold uppercase leading-[0.95] tracking-[-0.03em] md:text-5xl">
            {pillars.heading}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.items.map((pillar, i) => (
            <Reveal key={pillar.title} delayMs={i * 80}>
              <Card tone="white" className="flex h-full min-h-56 flex-col">
                <div className="flex items-center justify-between">
                  <PillarIcon index={i} className="text-blue" />
                  <p className="font-heading text-3xl font-bold tracking-[-0.02em] text-blue">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                <p className="mt-4 font-heading text-xl font-bold uppercase tracking-tight">
                  {pillar.title}
                </p>
                <p className="mt-3 text-base leading-relaxed text-black/80">
                  {pillar.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section background="sand">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold uppercase leading-[0.95] tracking-[-0.03em] md:text-5xl">
            {journey.heading}
          </h2>
        </Reveal>
        <div className="mt-10">
          <StepFlow steps={journey.steps} />
        </div>
      </Section>

      <Section background="black" className="relative overflow-hidden">
        <SignatureLine
          tone="blue"
          className="absolute inset-x-0 top-0 opacity-40"
        />
        <Reveal>
          <h2 className="font-heading text-3xl font-bold uppercase leading-[0.95] tracking-[-0.03em] text-white md:text-5xl">
            {differentiators.heading}
          </h2>
          <MarkerList
            tone="dark"
            className="mt-8 max-w-2xl"
            items={differentiators.items}
          />
        </Reveal>
      </Section>
    </>
  );
}
