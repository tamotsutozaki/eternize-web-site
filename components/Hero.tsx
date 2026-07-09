"use client";
import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/config";
import HeroSlider, { Slide } from "./HeroSlider";
import { thumb } from "@/lib/portfolio";

const HERO_SLIDES: Slide[] = [
  {
    src: "/images/portfolio/aurora-full.jpg",
    alt: "Retrato memorial da Aurora pintado à mão sobre madeira pinus",
    meta: "Peça memorial",
    caption: "Aurora — 25 cm · auréola",
  },
  {
    src: "/images/portfolio/shory-full.jpg",
    alt: "Retrato do Shory com motivo floral sobre madeira pinus",
    meta: "Composição decorativa",
    caption: "Shory — 18 cm · motivo floral",
  },
  {
    src: "/images/portfolio/odin-full.jpg",
    alt: "Retrato do Odin sobre fundo verde",
    meta: "Coleção 2026",
    caption: "Odin — 14 cm · fundo verde",
  },
  {
    src: "/images/portfolio/odin-suporte.jpg",
    alt: "Retrato do Odin exposto em suporte acrílico sobre mesa",
    meta: "Exibição em suporte",
    caption: "Odin — em suporte acrílico",
  },
  {
    src: "/images/portfolio/magoo-tunico-full.jpg",
    alt: "Dupla composição do Tunico e Magoo sobre fundo rosa",
    meta: "Composição múltipla",
    caption: "Tunico e Magoo — 18 cm",
  },
  {
    src: "/images/portfolio/magoo-tunico-suporte.jpg",
    alt: "Retrato do Tunico e Magoo exposto em suporte acrílico sobre mesa",
    meta: "Exibição em suporte",
    caption: "Tunico e Magoo — em suporte acrílico",
  },
];

// O hero usa as miniaturas WebP (o .jpg full fica reservado pro lightbox do
// portfólio). Miniatura = ~2x menos pixels pra decodificar no autoplay.
const HERO_SLIDES_THUMBS: Slide[] = HERO_SLIDES.map((s) => ({
  ...s,
  src: thumb(s.src),
}));

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 pt-8 sm:pt-14 md:pt-20 pb-14 sm:pb-20 md:pb-28 grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center md:min-h-[85vh]">
        <div className="lg:col-span-7 reveal">
          <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.32em] text-[var(--accent)] font-semibold">
            Estúdio de retratos · Indaiatuba/SP
          </span>

          <h1 className="mt-4 sm:mt-6 font-serif text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.06] sm:leading-[1.02] text-[var(--fg)] tracking-tight">
            <span className="block">Retratos de pet</span>
            <span className="block">sobre madeira,</span>
            <span className="block italic text-[var(--accent)]">pintados à mão.</span>
          </h1>

          <p className="mt-5 sm:mt-8 max-w-xl text-[15px] sm:text-lg leading-relaxed text-[var(--fg-soft)]">
            Peças únicas, produzidas sob encomenda em estúdio próprio.
            Pintura em tinta acrílica artística sobre fatia natural de pinus,
            com acabamento envernizado para preservação a longo prazo.
          </p>

          <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
            <motion.a
              href={whatsappLink("Olá! Gostaria de solicitar um orçamento para um retrato.")}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              className="btn-solid w-full sm:w-auto"
            >
              Solicitar orçamento
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
            <a href="/portfolio" className="btn-ghost w-full sm:w-auto">
              Ver portfólio
            </a>
          </div>

          <div className="mt-10 sm:mt-14 grid grid-cols-2 gap-x-8 gap-y-6 sm:flex sm:flex-wrap sm:gap-x-10 max-w-md sm:max-w-none border-t border-[var(--border)] pt-6 sm:pt-8">
            <div className="stat-cell">
              <p className="stat-num font-serif text-2xl sm:text-4xl text-[var(--fg)] leading-none transition-colors">7–15</p>
              <p className="mt-1.5 sm:mt-2 text-[9px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.18em] text-[var(--fg-mute)] uppercase">Dias úteis</p>
            </div>
            <div className="stat-cell">
              <p className="stat-num font-serif text-2xl sm:text-4xl text-[var(--fg)] leading-none transition-colors">3</p>
              <p className="mt-1.5 sm:mt-2 text-[9px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.18em] text-[var(--fg-mute)] uppercase">Dimensões</p>
            </div>
            <div className="stat-cell">
              <p className="stat-num font-serif text-2xl sm:text-4xl text-[var(--fg)] leading-none transition-colors">100%</p>
              <p className="mt-1.5 sm:mt-2 text-[9px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.18em] text-[var(--fg-mute)] uppercase">Sob encomenda</p>
            </div>
            <div className="stat-cell">
              <p className="stat-num font-serif text-2xl sm:text-4xl text-[var(--fg)] leading-none transition-colors">1–5</p>
              <p className="mt-1.5 sm:mt-2 text-[9px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.18em] text-[var(--fg-mute)] uppercase">Pets por bolacha</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 reveal w-full">
          <HeroSlider slides={HERO_SLIDES_THUMBS} />
        </div>
      </div>
    </section>
  );
}
