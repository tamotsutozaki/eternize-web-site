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
        <span className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[var(--accent)] mb-3 sm:mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-script text-[2.5rem] leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl text-[var(--fg)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[var(--fg-soft)] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
