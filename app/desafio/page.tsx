import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import MarkerList from "@/components/ui/MarkerList";
import SignatureLine from "@/components/ui/SignatureLine";
import Reveal from "@/components/ui/Reveal";
import { hero, pains, costGap, impacted, synthesis } from "@/content/desafio";

export const metadata: Metadata = {
  title: "Desafio",
};

export default function DesafioPage() {
  return (
    <>
      <Section background="sand">
        <PageHero eyebrow={hero.eyebrow} title={hero.title} />
      </Section>

      <Section background="white">
        <Reveal>
          <h2 className="font-heading text-3xl font-black uppercase leading-[0.95] tracking-[-0.03em] md:text-5xl">
            {pains.heading}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {pains.items.map((pain, i) => (
            <Reveal key={pain.number} delayMs={i * 80}>
              <Card tone="white" className="h-full">
                <p className="font-heading text-4xl font-black tracking-[-0.02em] text-blue">
                  {pain.number}
                </p>
                <p className="mt-4 font-heading text-lg font-black uppercase tracking-tight">
                  {pain.title}
                </p>
                <p className="mt-3 text-base leading-relaxed text-black/80">
                  {pain.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section background="black" className="relative overflow-hidden">
        <SignatureLine
          tone="blue"
          className="absolute inset-x-0 top-0 opacity-40"
        />
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-blue-soft">
            {costGap.heading}
          </p>
          <p className="mt-6 font-heading text-7xl font-black tracking-[-0.03em] text-white md:text-8xl">
            {costGap.value}
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-white/60">
            {costGap.unit}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {costGap.body}
          </p>
        </Reveal>
      </Section>

      <Section background="sand">
        <Reveal>
          <h2 className="font-heading text-3xl font-black uppercase leading-[0.95] tracking-[-0.03em] md:text-5xl">
            {impacted.heading}
          </h2>
          <MarkerList className="mt-8 max-w-2xl" items={impacted.items} />
        </Reveal>
      </Section>

      <Section background="blue">
        <Reveal>
          <p className="max-w-4xl font-heading text-3xl font-black uppercase leading-[1.05] tracking-[-0.02em] text-white md:text-5xl">
            {synthesis.question}
          </p>
        </Reveal>
      </Section>
    </>
  );
}
