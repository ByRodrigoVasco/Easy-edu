type Tone = "black" | "blue" | "white";

const strokeClasses: Record<Tone, string> = {
  black: "stroke-black",
  blue: "stroke-blue",
  white: "stroke-white",
};

const fillClasses: Record<Tone, string> = {
  black: "fill-black",
  blue: "fill-blue",
  white: "fill-white",
};

type BadgeProps = {
  tone?: Tone;
  className?: string;
};

export default function Badge({ tone = "black", className = "" }: BadgeProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      aria-hidden="true"
      className={`h-16 w-16 md:h-20 md:w-20 ${className}`}
    >
      <circle
        cx="48"
        cy="48"
        r="44"
        fill="none"
        className={strokeClasses[tone]}
        strokeWidth="1.5"
        strokeDasharray="4 6"
      />
      <rect
        x="40"
        y="40"
        width="16"
        height="16"
        className={fillClasses[tone]}
        transform="rotate(45 48 48)"
      />
    </svg>
  );
}
