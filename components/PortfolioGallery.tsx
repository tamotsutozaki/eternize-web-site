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
      <div
        role="tablist"
        aria-label="Filtrar por tamanho"
        className="reveal flex flex-wrap gap-2 mb-8 md:mb-10"
      >
        {FILTROS.map((f) => {
          const active = f === filtro;
          return (
            <motion.button
              key={f}
              role="tab"
              aria-selected={active}
              type="button"
              onClick={() => setFiltro(f)}
              whileTap={{ scale: 0.95 }}
              className={`relative rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm tracking-wide transition-colors border cursor-pointer ${
                active
                  ? "text-[var(--bg-deep-text)] border-[var(--bg-deep)]"
                  : "bg-transparent text-[var(--fg-soft)] border-[var(--border-strong)] hover:text-[var(--fg)] hover:border-[var(--fg-mute)]"
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

      <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-2 lg:grid-cols-3">
        {visiveis.map((peca) => (
          <motion.button
            key={peca.id}
            type="button"
            onClick={() => setAtiva(peca)}
            whileTap={{ scale: 0.97 }}
            className="reveal lift-card group cursor-pointer text-left overflow-hidden rounded-xl sm:rounded-2xl bg-[var(--bg-alt)] border border-[var(--border)]"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={peca.imagens[0]}
                alt={`Retrato de ${peca.nomePet}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-ink)]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-4 sm:p-5 flex items-center justify-between gap-2">
              <p className="font-script text-xl sm:text-2xl text-[var(--fg)] leading-none truncate">
                {peca.nomePet}
              </p>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-[var(--accent)] shrink-0">
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
