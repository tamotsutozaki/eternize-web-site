"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TAMANHOS, Tamanho } from "@/lib/portfolio";
import PriceCard from "./PriceCard";

export default function PricingTabs() {
  const [active, setActive] = useState<Tamanho>("18cm");

  return (
    <div className="reveal mt-10 sm:mt-12">
      {/* Desktop — grid de 3 cards lado a lado */}
      <div className="hidden md:grid gap-6 md:grid-cols-3">
        {TAMANHOS.map((t) => (
          <PriceCard
            key={t.tamanho}
            tamanho={t.tamanho}
            preco={t.preco}
            descricao={t.descricao}
            detalhes={t.detalhes}
            destaque={t.tamanho === "18cm"}
          />
        ))}
      </div>

      {/* Mobile — tabs + 1 card visível */}
      <div className="md:hidden max-w-2xl mx-auto">
        <div
          role="tablist"
          aria-label="Tamanhos disponíveis"
          className="flex justify-center gap-1 mb-8 border-b border-[var(--border)]"
        >
          {TAMANHOS.map((t) => {
            const selected = t.tamanho === active;
            return (
              <motion.button
                key={t.tamanho}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`panel-${t.tamanho}`}
                id={`tab-${t.tamanho}`}
                onClick={() => setActive(t.tamanho)}
                whileTap={{ scale: 0.96 }}
                className={`relative px-5 py-3 text-sm tracking-wide cursor-pointer transition-colors ${
                  selected
                    ? "text-[var(--fg)] font-medium"
                    : "text-[var(--fg-mute)] hover:text-[var(--fg-soft)]"
                }`}
              >
                {t.tamanho}
                {selected && (
                  <motion.span
                    layoutId="pricing-underline"
                    className="absolute left-3 right-3 -bottom-px h-0.5 bg-[var(--accent)] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    aria-hidden
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {TAMANHOS.filter((t) => t.tamanho === active).map((t) => (
            <motion.div
              key={t.tamanho}
              role="tabpanel"
              id={`panel-${t.tamanho}`}
              aria-labelledby={`tab-${t.tamanho}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <PriceCard
                tamanho={t.tamanho}
                preco={t.preco}
                descricao={t.descricao}
                detalhes={t.detalhes}
                destaque={t.tamanho === "18cm"}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
