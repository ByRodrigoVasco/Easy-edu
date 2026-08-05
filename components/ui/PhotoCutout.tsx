import Image from "next/image";

type Tone = "sand" | "white" | "black" | "blue";

const toneClasses: Record<Tone, string> = {
  sand: "bg-sand",
  white: "bg-white",
  black: "bg-black",
  blue: "bg-blue",
};

type PhotoCutoutProps = {
  src: string;
  alt: string;
  tone?: Tone;
  className?: string;
};

export default function PhotoCutout({
  src,
  alt,
  tone = "sand",
  className = "",
}: PhotoCutoutProps) {
  return (
    <div
      className={`relative min-h-96 overflow-hidden md:min-h-full ${toneClasses[tone]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain object-bottom px-6 pt-10 md:px-10 md:pt-14"
        sizes="(min-width: 768px) 50vw, 100vw"
      />
    </div>
  );
}
