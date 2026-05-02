import Image from "next/image";

type Props = {
  width?: number;
  priority?: boolean;
  className?: string;
};

const RATIO = 1;

export default function BrandLogo({
  width = 140,
  priority,
  className = "",
}: Props) {
  return (
    <span
      className={`relative inline-block ${className}`}
      style={{ width, maxWidth: "100%", aspectRatio: `${RATIO}` }}
      aria-label="Eternize"
    >
      <Image
        src="/brand/eternize-cafe.png"
        alt=""
        fill
        priority={priority}
        sizes={`${width}px`}
        className="object-contain block dark:hidden"
      />
      <Image
        src="/brand/eternize-cappuccino.png"
        alt=""
        fill
        priority={priority}
        sizes={`${width}px`}
        className="object-contain hidden dark:block"
      />
    </span>
  );
}
