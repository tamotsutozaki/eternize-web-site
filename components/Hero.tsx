"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import BrandLogo from "./BrandLogo";
import { whatsappLink } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)]">
      <div className="mx-auto max-w-7xl px-5 md:px-10 pt-12 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[85vh]">
        <div className="lg:col-span-7">
          <BrandLogo width={360} priority className="max-w-full" />

          <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-[var(--fg-soft)]">
            Retratos pintados sobre madeira natural por uma veterinária
            que entende de bicho. Cada peça é única — feita a partir de uma
            foto sua, com o olhar de quem conhece cada pelo.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <motion.a
              href={whatsappLink("Olá! Quero encomendar o retrato do meu pet 🐾")}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--bg-deep)] text-[var(--bg-deep-text)] px-7 py-4 text-sm md:text-base font-medium tracking-wide hover:opacity-90 transition-opacity"
            >
              Encomendar pelo WhatsApp
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
            <a
              href="/portfolio"
              className="inline-flex items-center text-sm md:text-base tracking-wide text-[var(--fg)] underline-offset-8 hover:underline decoration-[var(--accent)]"
            >
              Ver portfólio
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative aspect-[4/5] w-full">
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-[var(--shadow-soft)] bg-[var(--bg-alt)]">
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
          <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-[var(--bg)] border border-[var(--border-strong)] shadow-[var(--shadow-card)] px-5 py-4 max-w-[220px]">
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
