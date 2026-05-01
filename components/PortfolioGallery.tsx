"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Peca, PORTFOLIO, Tamanho } from "@/lib/portfolio";
import PieceLightbox from "./PieceLightbox";

const FILTROS: ("Todos" | Tamanho)[] = ["Todos", "14cm", "18cm", "25cm"];

export default function PortfolioGallery({
  initialItems,
}: {
  initialItems?: Peca[];
}) {
  const items = initialItems ?? PORTFOLIO;
  const [filtro, setFiltro] = useState<"Todos" | Tamanho>("Todos");
  const [ativa, setAtiva] = useState<Peca | null>(null);

  const visiveis = useMemo(
    () =>
      filtro === "Todos"
        ? items
        : items.filter((p) => p.tamanho === filtro),
    [filtro, items]
  );

  return (
    <>
      <div className="reveal flex flex-wrap gap-2 mb-10">
        {FILTROS.map((f) => {
          const active = f === filtro;
          return (
            <motion.button
              key={f}
              type="button"
              onClick={() => setFiltro(f)}
              whileTap={{ scale: 0.95 }}
              className={`relative rounded-full px-5 py-2.5 text-sm tracking-wide transition-colors border cursor-pointer ${
                active
                  ? "text-[var(--bg-deep-text)] border-[var(--bg-deep)]"
                  : "bg-transparent text-[var(--fg-soft)] border-[var(--border-strong)] hover:text-[var(--fg)]"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-[var(--bg-deep)]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{f}</span>
            </motion.button>
          );
        })}
      </div>

      <div className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {visiveis.map((peca) => (
          <motion.button
            key={peca.id}
            type="button"
            onClick={() => setAtiva(peca)}
            whileTap={{ scale: 0.97 }}
            className="reveal group cursor-pointer text-left overflow-hidden rounded-2xl bg-[var(--bg-alt)] border border-[var(--border)] hover:shadow-[var(--shadow-soft)] transition-shadow duration-300"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={peca.imagens[0]}
                alt={`Retrato de ${peca.nomePet}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="p-5 flex items-center justify-between">
              <p className="font-script text-2xl text-[var(--fg)] leading-none">
                {peca.nomePet}
              </p>
              <span className="text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                {peca.tamanho}
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {visiveis.length === 0 && (
        <p className="text-center text-[var(--fg-mute)] py-16">
          Sem peças nesse tamanho ainda. Confira os outros filtros.
        </p>
      )}

      <AnimatePresence>
        {ativa && <PieceLightbox peca={ativa} onClose={() => setAtiva(null)} />}
      </AnimatePresence>
    </>
  );
}
