"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion, PanInfo } from "framer-motion";

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

const SWIPE_THRESHOLD = 60;        // px
const VELOCITY_THRESHOLD = 400;    // px/s
const CLICK_DRAG_THRESHOLD = 8;    // px — abaixo disso considera click

export default function HeroSlider({ slides, autoplayMs = 6000 }: Props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);
  const isDraggingRef = useRef(false);

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

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const distance = info.offset.x;
    const velocity = info.velocity.x;

    if (distance < -SWIPE_THRESHOLD || velocity < -VELOCITY_THRESHOLD) {
      next();
    } else if (distance > SWIPE_THRESHOLD || velocity > VELOCITY_THRESHOLD) {
      prev();
    }

    // libera click logo apos drag terminar (com folga)
    setTimeout(() => { isDraggingRef.current = false; }, 50);
  };

  const handleDragStart = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (Math.abs(info.offset.x) > CLICK_DRAG_THRESHOLD) {
      isDraggingRef.current = true;
    }
  };

  const handleClick = () => {
    if (isDraggingRef.current) return;
    next();
  };

  const current = slides[index];

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 60 : dir < 0 ? -60 : 0,
      scale: 1.02,
    }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -60 : dir < 0 ? 60 : 0,
      scale: 0.99,
    }),
  };

  return (
    <div
      className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none group select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <motion.div
        className="absolute inset-0 rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden shadow-[var(--shadow-soft)] bg-[var(--bg-alt)] cursor-grab active:cursor-grabbing touch-pan-y"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.25}
        dragMomentum={false}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onClick={handleClick}
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
              opacity: { duration: 0.45 },
              x: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
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

        {/* Caption sobre imagem */}
        {current.caption && (
          <div className="absolute left-5 right-5 bottom-14 sm:bottom-16 text-[var(--brand-bone)] pointer-events-none z-10">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[var(--brand-caramel)] font-semibold">
              {current.meta}
            </p>
            <p className="mt-1.5 font-serif text-xl sm:text-2xl leading-tight">
              {current.caption}
            </p>
          </div>
        )}

        {/* Hint de drag — aparece no hover */}
        <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--brand-bone)]/85 backdrop-blur-sm text-[var(--brand-walnut)] text-[10px] uppercase tracking-[0.18em] font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M8 7l-4 5 4 5M16 7l4 5-4 5" />
          </svg>
          Arraste
        </div>

        {/* Indicadores em barras */}
        <div className="absolute left-5 right-5 bottom-5 flex items-center gap-2 z-10 pointer-events-auto">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => { e.stopPropagation(); goTo(i, i > index ? 1 : -1); }}
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
      </motion.div>

      {/* Contador */}
      <div className="absolute -bottom-4 right-4 sm:-bottom-5 sm:right-6 hidden sm:block rounded-full bg-[var(--bg)] border border-[var(--border-strong)] shadow-[var(--shadow-card)] px-4 py-2 z-10">
        <p className="font-serif text-sm text-[var(--fg)] leading-none">
          <span className="text-[var(--accent)] font-semibold">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-[var(--fg-mute)]"> / {String(slides.length).padStart(2, "0")}</span>
        </p>
      </div>
    </div>
  );
}
