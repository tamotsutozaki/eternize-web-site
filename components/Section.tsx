import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  variant?: "bone" | "cream" | "deep";
  id?: string;
  full?: boolean;
};

export default function Section({
  children,
  className = "",
  variant = "bone",
  id,
  full,
}: Props) {
  const bg =
    variant === "deep"
      ? "bg-[var(--bg-deep)] text-[var(--bg-deep-text)]"
      : variant === "cream"
      ? "bg-[var(--bg-alt)]"
      : "bg-[var(--bg)]";

  return (
    <section id={id} className={`${bg} ${className}`}>
      <div
        className={`${
          full ? "" : "mx-auto max-w-7xl px-4 sm:px-6 md:px-10"
        } py-16 sm:py-20 md:py-28`}
      >
        {children}
      </div>
    </section>
  );
}
