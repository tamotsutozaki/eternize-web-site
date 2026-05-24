"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export type Slide = {
  src: string;
  alt: string;
  caption?: string;
  meta?: string;
};

type Props = {
  slides: Slide[];
  autoplayMs?: number;
};

export default function HeroSlider({ slides, autoplayMs = 6000 }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    setIndex(((i % slides.length) + slides.length) % slides.length);
  }, [slides.length]);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused || autoplayMs <= 0 || slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, autoplayMs);
    return () => clearInterval(id);
  }, [paused, autoplayMs, slides.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const current = slides[index];

  return (
    <div
      className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="absolute inset-0 rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden shadow-[var(--shadow-soft)] bg-[var(--bg-alt)]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--brand-ink)]/55 via-[var(--brand-ink)]/15 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Caption sobre a imagem */}
        {current.caption && (
          <div className="absolute left-5 right-5 bottom-14 sm:bottom-16 text-[var(--brand-bone)] pointer-events-none">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[var(--brand-caramel)] font-medium">
              {current.meta}
            </p>
            <p className="mt-1.5 font-serif text-xl sm:text-2xl leading-tight">
              {current.caption}
            </p>
          </div>
        )}

        {/* Controles */}
        <button
          type="button"
          onClick={prev}
          aria-label="Imagem anterior"
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[var(--brand-bone)]/85 backdrop-blur-sm text-[var(--brand-walnut)] border border-[var(--brand-bone)] shadow-lg cursor-pointer transition-all duration-300 hover:bg-[var(--brand-walnut)] hover:text-[var(--brand-bone)] hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100 focus:opacity-100"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Próxima imagem"
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[var(--brand-bone)]/85 backdrop-blur-sm text-[var(--brand-walnut)] border border-[var(--brand-bone)] shadow-lg cursor-pointer transition-all duration-300 hover:bg-[var(--brand-walnut)] hover:text-[var(--brand-bone)] hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100 focus:opacity-100"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>

        {/* Indicadores — barras */}
        <div className="absolute left-5 right-5 bottom-5 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir para imagem ${i + 1}`}
              aria-current={i === index}
              className="group/dot relative h-1 flex-1 cursor-pointer overflow-hidden rounded-full bg-[var(--brand-bone)]/30 transition-colors hover:bg-[var(--brand-bone)]/50"
            >
              <motion.span
                className="absolute inset-y-0 left-0 bg-[var(--brand-bone)]"
                initial={false}
                animate={{ width: i === index ? "100%" : i < index ? "100%" : "0%" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Contador */}
      <div className="absolute -bottom-4 right-4 sm:-bottom-5 sm:right-6 hidden sm:block rounded-full bg-[var(--bg)] border border-[var(--border-strong)] shadow-[var(--shadow-card)] px-4 py-2">
        <p className="font-serif text-sm text-[var(--fg)] leading-none">
          <span className="text-[var(--accent)] font-semibold">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-[var(--fg-mute)]"> / {String(slides.length).padStart(2, "0")}</span>
        </p>
      </div>
    </div>
  );
}
