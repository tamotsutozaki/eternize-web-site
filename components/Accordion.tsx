"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export type FaqItem = { q: string; a: string };
export type FaqCategoria = { titulo: string; items: FaqItem[] };

export default function FAQAccordion({ categorias }: { categorias: FaqCategoria[] }) {
  return (
    <div className="space-y-12 sm:space-y-16">
      {categorias.map((cat) => (
        <div key={cat.titulo} className="reveal">
          <h3 className="font-serif text-3xl md:text-4xl mb-5 sm:mb-6 text-[var(--accent)]">
            {cat.titulo}
          </h3>
          <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {cat.items.map((item, idx) => (
              <Item key={idx} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Item({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-4 sm:py-5">
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        whileTap={{ scale: 0.99 }}
        className="w-full cursor-pointer flex items-start justify-between gap-4 sm:gap-6 text-left"
      >
        <span className="text-[15px] sm:text-base md:text-lg text-[var(--fg)] font-medium leading-snug">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
          className={`mt-0.5 sm:mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] ${
            open ? "bg-[var(--accent)] text-[var(--brand-bone)] border-[var(--accent)]" : ""
          } transition-colors`}
          aria-hidden
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </motion.span>
      </motion.button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[var(--fg-soft)] leading-relaxed pr-6 sm:pr-10 text-sm sm:text-base">{item.a}</p>
        </div>
      </div>
    </div>
  );
}
