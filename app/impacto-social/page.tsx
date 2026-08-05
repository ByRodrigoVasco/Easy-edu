import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { hero, barrier, reach } from "@/content/impacto";

export const metadata: Metadata = {
  title: "Impacto Social",
};

export default function ImpactoSocialPage() {
  return (
    <>
      <Section background="sand">
        <PageHero eyebrow={hero.eyebrow} title={hero.title} support={hero.support} />
      </Section>

      <Section background="white">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold uppercase leading-[0.95] tracking-[-0.03em] md:text-5xl">
            {barrier.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/80">
            {barrier.body}
          </p>
        </Reveal>
      </Section>

      <Section background="blue">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold uppercase leading-[0.95] tracking-[-0.03em] text-white md:text-5xl">
            {reach.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            {reach.body}
          </p>
        </Reveal>
      </Section>
    </>
  );
}
