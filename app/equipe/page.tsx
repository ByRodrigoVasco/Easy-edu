import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import PersonCard from "@/components/ui/PersonCard";
import Reveal from "@/components/ui/Reveal";
import { hero, members } from "@/content/equipe";

export const metadata: Metadata = {
  title: "Equipe",
};

export default function EquipePage() {
  return (
    <>
      <Section background="sand">
        <PageHero eyebrow={hero.eyebrow} title={hero.title} />
      </Section>

      <Section background="white">
        <div className="flex flex-wrap justify-center gap-4">
          {members.map((member, i) => (
            <Reveal
              key={member.name}
              delayMs={i * 80}
              className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
            >
              <PersonCard {...member} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
