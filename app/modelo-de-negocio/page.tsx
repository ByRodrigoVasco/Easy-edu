import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import MarkerList from "@/components/ui/MarkerList";
import StatCard from "@/components/ui/StatCard";
import SignatureLine from "@/components/ui/SignatureLine";
import Reveal from "@/components/ui/Reveal";
import { hero, phases, subscription, potentialMarket } from "@/content/modelo";

export const metadata: Metadata = {
  title: "Modelo de Negócio",
};

export default function ModeloDeNegocioPage() {
  return (
    <>
      <Section background="sand">
        <PageHero eyebrow={hero.eyebrow} title={hero.title} />
      </Section>

      <Section background="white">
        <div className="grid gap-4 md:grid-cols-2">
          {phases.map((phase, i) => (
            <Reveal key={phase.title} delayMs={i * 80}>
              <Card tone="white" className="flex h-full min-h-56 flex-col">
                <p className="font-heading text-3xl font-black tracking-[-0.02em] text-blue">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 font-heading text-2xl font-black uppercase tracking-tight">
                  {phase.title}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-blue-deep">
                  {phase.label}
                </p>
                <p className="mt-3 text-base leading-relaxed text-black/80">
                  {phase.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section background="sand">
        <Reveal>
          <h2 className="font-heading text-3xl font-black uppercase leading-[0.95] tracking-[-0.03em] md:text-5xl">
            {subscription.heading}
          </h2>
          <MarkerList className="mt-8 max-w-2xl" items={subscription.items} />
        </Reveal>
      </Section>

      <Section background="black" className="relative overflow-hidden">
        <SignatureLine
          tone="blue"
          className="absolute inset-x-0 top-0 opacity-40"
        />
        <Reveal>
          <h2 className="font-heading text-3xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-white md:text-5xl">
            {potentialMarket.heading}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {potentialMarket.stats.map((stat, i) => (
            <Reveal key={stat.value} delayMs={i * 80}>
              <StatCard value={stat.value} description={stat.description} />
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-white/50">{potentialMarket.sourceNote}</p>
      </Section>
    </>
  );
}
