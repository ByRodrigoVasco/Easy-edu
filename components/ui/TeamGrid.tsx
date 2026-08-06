"use client";

import { useState } from "react";
import PersonCard from "@/components/ui/PersonCard";
import PersonModal from "@/components/ui/PersonModal";
import Reveal from "@/components/ui/Reveal";
import type { Member } from "@/content/equipe";

type TeamGridProps = {
  members: Member[];
};

export default function TeamGrid({ members }: TeamGridProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected !== null ? members[selected] : null;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3">
        {members.map((member, i) => (
          <Reveal
            key={member.name}
            delayMs={i * 80}
            className="w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-0.5rem)] lg:w-[calc(20%-0.6rem)]"
          >
            <PersonCard
              name={member.name}
              role={member.role}
              course={member.course}
              photo={member.photo}
              photoPosition={member.photoPosition}
              linkedin={member.linkedin}
              onOpen={() => setSelected(i)}
            />
          </Reveal>
        ))}
      </div>

      {active && (
        <PersonModal key={active.name} {...active} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
