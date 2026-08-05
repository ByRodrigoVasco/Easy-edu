type StatCardProps = {
  value: string;
  description: string;
};

export default function StatCard({ value, description }: StatCardProps) {
  return (
    <div className="rounded-xl border border-rule bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8">
      <p className="break-words font-heading text-3xl font-black leading-tight tracking-[-0.01em] text-black md:text-4xl">
        {value}
      </p>
      <p className="mt-4 text-base leading-relaxed text-black/80">
        {description}
      </p>
    </div>
  );
}
