import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import PersonaStack from "@/components/ui/PersonaStack";
import Reveal from "@/components/ui/Reveal";
import { hero, pains, impacted, synthesis } from "@/content/desafio";

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
          <h2 className="font-heading text-3xl font-bold uppercase leading-[0.95] tracking-[-0.03em] md:text-5xl">
            {pains.heading}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {pains.items.map((pain, i) => (
            <Reveal key={pain.number} delayMs={i * 80}>
              <Card tone="white" className="h-full">
                <p className="font-heading text-4xl font-bold tracking-[-0.02em] text-blue">
                  {pain.number}
                </p>
                <p className="mt-4 font-heading text-lg font-bold uppercase tracking-tight">
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

      <Section background="sand" fullBleed>
        <div className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold uppercase leading-[0.95] tracking-[-0.03em] md:text-5xl">
              {impacted.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/80">
              {impacted.support}
            </p>
          </Reveal>
        </div>
        <PersonaStack personas={impacted.personas} />
      </Section>

      <Section background="blue">
        <Reveal>
          <p className="max-w-4xl font-heading text-3xl font-bold uppercase leading-[1.05] tracking-[-0.02em] text-white md:text-5xl">
            {synthesis.question}
          </p>
        </Reveal>
      </Section>
    </>
  );
}
