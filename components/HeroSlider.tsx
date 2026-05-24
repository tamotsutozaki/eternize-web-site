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
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number, dir: number = 0) => {
    const len = slides.length;
    const next = ((i % len) + len) % len;
    setDirection(dir);
    setIndex(next);
  }, [slides.length]);

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  useEffect(() => {
    if (paused || autoplayMs <= 0 || slides.length <= 1) return;
    const id = setInterval(() => {
      setDirection(1);
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

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 80 : dir < 0 ? -80 : 0,
    }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -80 : dir < 0 ? 80 : 0,
    }),
  };

  return (
    <div
      className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none select-none group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="absolute inset-0 rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden shadow-[var(--shadow-soft)] bg-[var(--bg-alt)]">
        {/* Camada de clique — imagem clicável avança */}
        <button
          type="button"
          onClick={next}
          aria-label="Próxima imagem"
          className="absolute inset-0 cursor-pointer block"
        >
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                opacity: { duration: 0.4 },
                x: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              }}
              className="absolute inset-0 pointer-events-none"
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
                draggable={false}
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--brand-ink)]/55 via-[var(--brand-ink)]/15 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </button>

        {/* Caption — fixo, fora do click target */}
        {current.caption && (
          <div className="absolute left-5 right-5 bottom-14 sm:bottom-16 text-[var(--brand-bone)] pointer-events-none z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={`caption-${index}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[var(--brand-caramel)] font-semibold">
                  {current.meta}
                </p>
                <p className="mt-1.5 font-serif text-xl sm:text-2xl leading-tight">
                  {current.caption}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Indicadores em barras — clicáveis */}
        <div className="absolute left-5 right-5 bottom-5 flex items-center gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => { e.stopPropagation(); goTo(i, i > index ? 1 : -1); }}
              aria-label={`Ir para imagem ${i + 1}`}
              aria-current={i === index}
              className="relative h-1 flex-1 cursor-pointer overflow-hidden rounded-full bg-[var(--brand-bone)]/30 transition-colors hover:bg-[var(--brand-bone)]/55"
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
    </div>
  );
}
