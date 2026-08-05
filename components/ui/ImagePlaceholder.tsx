type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

export default function ImagePlaceholder({ label, className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`flex min-h-64 items-center justify-center border-2 border-dashed border-rule bg-sand p-6 text-center ${className}`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-black/50">
        {label}
      </p>
    </div>
  );
}
