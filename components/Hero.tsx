"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 pt-10 sm:pt-14 md:pt-20 pb-14 md:pb-24 grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center min-h-[80vh] md:min-h-[85vh]">
        <div className="lg:col-span-7 reveal">
          <span className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-medium">
            Estúdio de retratos · Indaiatuba/SP
          </span>

          <h1 className="mt-5 font-script text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.98] text-[var(--fg)]">
            Retratos de pet<br/>
            sobre madeira<br/>
            <span className="text-[var(--accent)]">pintados à mão.</span>
          </h1>

          <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-[var(--fg-soft)]">
            Cada peça é produzida sob encomenda em estúdio próprio. Pintura
            em tinta acrílica sobre fatia natural de pinus, com acabamento
            envernizado para preservação a longo prazo.
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
              <p className="stat-num font-script text-3xl sm:text-4xl text-[var(--fg)] leading-none transition-colors">7–15</p>
              <p className="mt-2 text-[10px] sm:text-[11px] tracking-[0.18em] text-[var(--fg-mute)] uppercase">Dias úteis</p>
            </div>
            <div className="stat-cell">
              <p className="stat-num font-script text-3xl sm:text-4xl text-[var(--fg)] leading-none transition-colors">3</p>
              <p className="mt-2 text-[10px] sm:text-[11px] tracking-[0.18em] text-[var(--fg-mute)] uppercase">Dimensões</p>
            </div>
            <div className="stat-cell">
              <p className="stat-num font-script text-3xl sm:text-4xl text-[var(--fg)] leading-none transition-colors">100%</p>
              <p className="mt-2 text-[10px] sm:text-[11px] tracking-[0.18em] text-[var(--fg-mute)] uppercase">Sob encomenda</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none reveal">
          <div className="absolute inset-0 rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden shadow-[var(--shadow-soft)] bg-[var(--bg-alt)] zoom-on-hover">
            {/* MOCK — substituir por imagem real de peça finalizada */}
            <Image
              src="https://placedog.net/800/1000?id=11"
              alt="Retrato de pet pintado à mão sobre madeira natural"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 sm:-bottom-6 sm:-left-6 hidden sm:block rounded-2xl bg-[var(--bg)] border border-[var(--border-strong)] shadow-[var(--shadow-card)] px-5 py-4 max-w-[260px]">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent)] font-medium">
              Edição única
            </p>
            <p className="text-sm text-[var(--fg-soft)] mt-2 leading-relaxed">
              Cada peça é numerada e não se repete.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
