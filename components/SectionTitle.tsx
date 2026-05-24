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
        <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.24em] sm:tracking-[0.32em] text-[var(--accent)] mb-3 sm:mb-5 font-semibold">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-[1.875rem] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] sm:leading-[1.05] text-[var(--fg)] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 sm:mt-5 text-[15px] sm:text-lg text-[var(--fg-soft)] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
