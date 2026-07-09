import Image from "next/image";

type Props = {
  width?: number;
  priority?: boolean;
  className?: string;
};

export default function BrandLogo({
  width = 140,
  priority,
  className = "",
}: Props) {
  return (
    <span
      className={`relative inline-block ${className}`}
      style={{ width, maxWidth: "100%", aspectRatio: "1" }}
      aria-label="Eternize"
    >
      <Image
        src="/brand/eternize-logo.webp"
        alt="Eternize"
        fill
        priority={priority}
        sizes={`${width}px`}
        className="object-contain"
      />
    </span>
  );
}
