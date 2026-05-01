import * as React from "react";

type Variant = "full" | "wordmark" | "mark";

type Props = {
  variant?: Variant;
  size?: number | string;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
};

export function EternizeLogo({
  variant = "full",
  size,
  className,
  style,
  ...rest
}: Props) {
  const widthStyle: React.CSSProperties = size
    ? { width: typeof size === "number" ? `${size}px` : size }
    : { width: "100%" };

  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={rest["aria-label"] ?? "Eternize"}
        style={{ ...widthStyle, ...style }}
        className={className}
      >
        <text
          x="128"
          y="208"
          textAnchor="middle"
          fill="currentColor"
          style={{
            fontFamily: "var(--font-dancing-script), 'Dancing Script', cursive",
            fontWeight: 700,
            fontSize: 240,
          }}
        >
          E
        </text>
      </svg>
    );
  }

  if (variant === "wordmark") {
    return (
      <svg
        viewBox="0 0 1024 360"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={rest["aria-label"] ?? "Eternize"}
        style={{ ...widthStyle, ...style }}
        className={className}
      >
        <text
          x="512"
          y="260"
          textAnchor="middle"
          fill="currentColor"
          style={{
            fontFamily: "var(--font-dancing-script), 'Dancing Script', cursive",
            fontWeight: 700,
            fontSize: 320,
            letterSpacing: "0.01em",
          }}
        >
          Eternize
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 1024 540"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={rest["aria-label"] ?? "Eternize — Memórias que ficam"}
      style={{ ...widthStyle, ...style }}
      className={className}
    >
      <g fill="currentColor">
        <text
          x="512"
          y="290"
          textAnchor="middle"
          style={{
            fontFamily: "var(--font-dancing-script), 'Dancing Script', cursive",
            fontWeight: 700,
            fontSize: 280,
            letterSpacing: "0.01em",
          }}
        >
          Eternize
        </text>
        <text
          x="512"
          y="380"
          textAnchor="middle"
          style={{
            fontFamily: "var(--font-caveat), 'Caveat', cursive",
            fontWeight: 500,
            fontSize: 48,
            letterSpacing: "0.4em",
            opacity: 0.85,
          }}
        >
          · · ·
        </text>
        <text
          x="512"
          y="468"
          textAnchor="middle"
          style={{
            fontFamily: "var(--font-caveat), 'Caveat', cursive",
            fontWeight: 500,
            fontStyle: "italic",
            fontSize: 60,
            opacity: 0.88,
          }}
        >
          Memórias que ficam
        </text>
      </g>
    </svg>
  );
}

export default EternizeLogo;
