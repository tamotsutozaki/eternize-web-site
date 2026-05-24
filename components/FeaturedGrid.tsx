"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Peca } from "@/lib/portfolio";
import PieceLightbox from "./PieceLightbox";

export default function FeaturedGrid({ items }: { items: Peca[] }) {
  const [ativa, setAtiva] = useState<Peca | null>(null);

  return (
    <>
      <div className="reveal mt-10 sm:mt-12 md:mt-14 grid gap-4 sm:gap-5 md:gap-6 grid-cols-2 lg:grid-cols-4">
        {items.map((peca) => (
          <motion.button
            key={peca.id}
            type="button"
            onClick={() => setAtiva(peca)}
            whileTap={{ scale: 0.97 }}
            className="lift-card group cursor-pointer block w-full text-left overflow-hidden rounded-xl sm:rounded-2xl bg-[var(--bg-alt)] border border-[var(--border)]"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={peca.imagens[0]}
                alt={`Retrato — ${peca.nomePet}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-ink)]/45 via-[var(--brand-ink)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute bottom-3 left-3 right-3 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--bg)]/95 backdrop-blur-sm text-[var(--fg)] text-[11px] font-medium tracking-[0.12em] uppercase py-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Ver detalhes
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <div className="p-3 sm:p-4 flex items-center justify-between gap-2">
              <span className="font-script text-lg sm:text-xl text-[var(--fg)] leading-none truncate transition-colors group-hover:text-[var(--accent)]">
                {peca.nomePet}
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)] shrink-0">
                {peca.tamanho}
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {ativa && <PieceLightbox peca={ativa} onClose={() => setAtiva(null)} />}
      </AnimatePresence>
    </>
  );
}
