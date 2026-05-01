import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`reveal max-w-3xl ${alignCls} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-script text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-[var(--fg)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base md:text-lg text-[var(--fg-soft)] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
