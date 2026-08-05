import Card from "@/components/ui/Card";

type PersonCardProps = {
  name: string;
  role: string;
  responsibility: string;
  background: string;
};

export default function PersonCard({
  name,
  role,
  responsibility,
  background,
}: PersonCardProps) {
  return (
    <Card tone="white" className="h-full">
      <p className="font-heading text-xl font-black uppercase tracking-tight">
        {name}
      </p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-blue-deep">
        {role}
      </p>
      <p className="mt-4 text-base leading-relaxed text-black/80">
        {responsibility}
      </p>
      <p className="mt-3 text-base leading-relaxed text-black/70">
        {background}
      </p>
    </Card>
  );
}
