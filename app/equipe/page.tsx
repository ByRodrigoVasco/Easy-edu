import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import TeamGrid from "@/components/ui/TeamGrid";
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
        <TeamGrid members={members} />
      </Section>
    </>
  );
}
