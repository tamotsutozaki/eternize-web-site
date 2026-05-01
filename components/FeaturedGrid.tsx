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
      <div className="reveal mt-14 grid gap-5 md:gap-6 grid-cols-2 lg:grid-cols-4">
        {items.map((peca) => (
          <motion.button
            key={peca.id}
            type="button"
            onClick={() => setAtiva(peca)}
            whileTap={{ scale: 0.97 }}
            className="group cursor-pointer block w-full text-left overflow-hidden rounded-2xl bg-[var(--bg-alt)] border border-[var(--border)] hover:shadow-[var(--shadow-soft)] transition-shadow duration-300"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={peca.imagens[0]}
                alt={`Retrato de ${peca.nomePet}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <span className="font-script text-xl text-[var(--fg)] leading-none">
                {peca.nomePet}
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
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
