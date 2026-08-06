import Image from "next/image";
import Card from "@/components/ui/Card";
import LinkedInIcon from "@/components/ui/LinkedInIcon";

type PersonCardProps = {
  name: string;
  role: string;
  course: string;
  photo: string;
  photoPosition: string;
  linkedin: string;
  onOpen: () => void;
};

export default function PersonCard({
  name,
  role,
  course,
  photo,
  photoPosition,
  linkedin,
  onOpen,
}: PersonCardProps) {
  return (
    <Card tone="white" className="overflow-hidden !p-0">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand">
        <Image
          src={photo}
          alt={name}
          fill
          className="object-cover"
          style={{ objectPosition: photoPosition }}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
      </div>

      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-heading text-sm font-bold uppercase leading-tight tracking-tight">
              {name}
            </p>
            <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-blue-deep">
              {role}
            </p>
          </div>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${name}`}
            className="flex-none rounded-md p-1 text-[#0A66C2] transition-colors hover:bg-[#0A66C2]/10"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
        </div>

        <span className="mt-1.5 inline-block rounded-full bg-blue/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-blue-deep">
          {course}
        </span>

        <button
          type="button"
          onClick={onOpen}
          className="mt-2 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-blue transition-colors hover:text-blue-deep"
        >
          Ver mais
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-3.5 w-3.5"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </Card>
  );
}
