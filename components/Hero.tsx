"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 pt-10 sm:pt-14 md:pt-20 pb-14 md:pb-24 grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center min-h-[80vh] md:min-h-[85vh]">
        <div className="lg:col-span-7 reveal">
          <span className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
            Retratos pintados à mão
          </span>

          <h1 className="mt-5 font-script text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-[var(--fg)]">
            Memórias<br/>
            que ficam<br/>
            <span className="text-[var(--accent)]">na parede</span>
          </h1>

          <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-[var(--fg-soft)]">
            Retratos pintados sobre madeira natural por uma veterinária
            que entende de bicho. Cada peça é única — feita a partir de uma
            foto sua, com o olhar de quem conhece cada pelo.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
            <motion.a
              href={whatsappLink("Olá! Quero encomendar o retrato do meu pet 🐾")}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              className="btn-solid text-sm sm:text-base"
            >
              Encomendar pelo WhatsApp
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
            <a
              href="/portfolio"
              className="prose-link text-sm sm:text-base tracking-wide text-[var(--fg)]"
            >
              Ver portfólio
            </a>
          </div>

          <div className="mt-12 sm:mt-14 grid grid-cols-3 max-w-md gap-4 sm:gap-6">
            <div>
              <p className="font-script text-3xl sm:text-4xl text-[var(--accent)] leading-none">7-15</p>
              <p className="mt-2 text-[11px] sm:text-xs tracking-wide text-[var(--fg-mute)] uppercase">dias de pintura</p>
            </div>
            <div>
              <p className="font-script text-3xl sm:text-4xl text-[var(--accent)] leading-none">100%</p>
              <p className="mt-2 text-[11px] sm:text-xs tracking-wide text-[var(--fg-mute)] uppercase">feito à mão</p>
            </div>
            <div>
              <p className="font-script text-3xl sm:text-4xl text-[var(--accent)] leading-none">3</p>
              <p className="mt-2 text-[11px] sm:text-xs tracking-wide text-[var(--fg-mute)] uppercase">tamanhos</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none reveal">
          <div className="absolute inset-0 rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden shadow-[var(--shadow-soft)] bg-[var(--bg-alt)] zoom-on-hover">
            {/* MOCK — trocar por foto real da peça em destaque */}
            <Image
              src="https://placedog.net/800/1000?id=11"
              alt="Retrato de pet pintado à mão"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 sm:-bottom-6 sm:-left-6 hidden sm:block rounded-2xl bg-[var(--bg)] border border-[var(--border-strong)] shadow-[var(--shadow-card)] px-4 py-3 sm:px-5 sm:py-4 max-w-[240px]">
            <p className="font-script text-2xl text-[var(--accent)] leading-tight">
              feito à mão
            </p>
            <p className="text-xs text-[var(--fg-mute)] mt-1">
              cada peça leva 7-15 dias de pintura
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
