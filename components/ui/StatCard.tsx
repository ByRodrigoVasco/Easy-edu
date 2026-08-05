type StatCardProps = {
  value: string;
  description: string;
};

export default function StatCard({ value, description }: StatCardProps) {
  return (
    <div className="rounded-xl border border-rule bg-white p-6 md:p-8">
      <p className="font-heading text-5xl font-black leading-none tracking-[-0.02em] text-black md:text-6xl">
        {value}
      </p>
      <p className="mt-4 text-base leading-relaxed text-black/80">
        {description}
      </p>
    </div>
  );
}
