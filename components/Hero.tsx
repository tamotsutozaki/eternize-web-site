"use client";
import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/config";
import HeroSlider, { Slide } from "./HeroSlider";

// MOCK — substituir por fotografias reais de peças finalizadas
const HERO_SLIDES: Slide[] = [
  {
    src: "https://placedog.net/800/1000?id=11",
    alt: "Retrato de pet pintado à mão sobre madeira natural",
    meta: "Coleção 2026",
    caption: "Mel — 25 cm · madeira natural",
  },
  {
    src: "https://placedog.net/800/1000?id=14",
    alt: "Composição com gravata borboleta sobre fundo creme",
    meta: "Encomenda Dia dos Pais",
    caption: "Thor — 18 cm · fundo creme",
  },
  {
    src: "https://placedog.net/800/1000?id=17",
    alt: "Retrato com elementos florais sobre madeira",
    meta: "Composição decorativa",
    caption: "Nina — 18 cm · motivo floral",
  },
  {
    src: "https://placedog.net/800/1000?id=23",
    alt: "Dupla composição sobre fundo terracota",
    meta: "Composição múltipla",
    caption: "Bob & Maya — 25 cm",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 pt-10 sm:pt-14 md:pt-20 pb-16 md:pb-28 grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center min-h-[80vh] md:min-h-[85vh]">
        <div className="lg:col-span-7 reveal">
          <span className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.32em] text-[var(--accent)] font-semibold">
            Estúdio de retratos · Indaiatuba/SP
          </span>

          <h1 className="mt-5 sm:mt-6 font-serif text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-[var(--fg)] tracking-tight">
            Retratos de pet<br/>
            sobre madeira,<br/>
            <span className="italic text-[var(--accent)]">pintados à mão.</span>
          </h1>

          <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-[var(--fg-soft)]">
            Peças únicas, produzidas sob encomenda em estúdio próprio.
            Pintura em tinta acrílica artística sobre fatia natural de pinus,
            com acabamento envernizado para preservação a longo prazo.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <motion.a
              href={whatsappLink("Olá! Gostaria de solicitar um orçamento para um retrato.")}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              className="btn-solid"
            >
              Solicitar orçamento
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
            <a href="/portfolio" className="btn-ghost">
              Ver portfólio
            </a>
          </div>

          <div className="mt-12 sm:mt-14 grid grid-cols-3 max-w-md gap-4 sm:gap-6 border-t border-[var(--border)] pt-7 sm:pt-8">
            <div className="stat-cell">
              <p className="stat-num font-serif text-3xl sm:text-4xl text-[var(--fg)] leading-none transition-colors">7–15</p>
              <p className="mt-2 text-[10px] sm:text-[11px] tracking-[0.18em] text-[var(--fg-mute)] uppercase">Dias úteis</p>
            </div>
            <div className="stat-cell">
              <p className="stat-num font-serif text-3xl sm:text-4xl text-[var(--fg)] leading-none transition-colors">3</p>
              <p className="mt-2 text-[10px] sm:text-[11px] tracking-[0.18em] text-[var(--fg-mute)] uppercase">Dimensões</p>
            </div>
            <div className="stat-cell">
              <p className="stat-num font-serif text-3xl sm:text-4xl text-[var(--fg)] leading-none transition-colors">100%</p>
              <p className="mt-2 text-[10px] sm:text-[11px] tracking-[0.18em] text-[var(--fg-mute)] uppercase">Sob encomenda</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 reveal">
          <HeroSlider slides={HERO_SLIDES} />
        </div>
      </div>
    </section>
  );
}
