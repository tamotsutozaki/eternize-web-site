"use client";
import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/config";

type Props = {
  tamanho: string;
  preco: number;
  descricao: string;
  destaque?: boolean;
  detalhes?: string[];
};

export default function PriceCard({
  tamanho,
  preco,
  descricao,
  destaque,
  detalhes,
}: Props) {
  const message = `Olá! Gostaria de solicitar orçamento para um retrato de ${tamanho} (valor base R$ ${preco}).`;
  return (
    <div
      className={`lift-card relative flex flex-col rounded-2xl border p-7 sm:p-8 md:p-10 ${
        destaque
          ? "border-[var(--accent)] bg-[var(--bg)] shadow-[var(--shadow-soft)]"
          : "border-[var(--border-strong)] bg-[var(--bg-alt)]"
      }`}
    >
      {destaque && (
        <span className="absolute -top-3 left-7 sm:left-8 inline-flex items-center rounded-full bg-[var(--accent)] px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-[var(--brand-bone)] font-medium">
          Mais procurado
        </span>
      )}

      <div className="font-script text-4xl sm:text-5xl md:text-6xl text-[var(--fg)] leading-none">
        {tamanho}
      </div>
      <p className="mt-2 text-sm text-[var(--fg-mute)]">{descricao}</p>

      <div className="mt-6 sm:mt-8 flex items-baseline gap-1">
        <span className="text-sm text-[var(--fg-mute)]">a partir de R$</span>
      </div>
      <div className="flex items-baseline gap-1 mt-1">
        <span className="text-4xl sm:text-5xl font-semibold tracking-tight">
          {preco}
        </span>
      </div>

      {detalhes && detalhes.length > 0 && (
        <ul className="mt-5 sm:mt-6 space-y-2.5 text-sm text-[var(--fg-soft)]">
          {detalhes.map((d) => (
            <li key={d} className="flex items-start gap-2.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="mt-0.5 text-[var(--accent)] shrink-0" aria-hidden>
                <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="leading-relaxed">{d}</span>
            </li>
          ))}
        </ul>
      )}

      <motion.a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.97 }}
        className="btn-solid mt-7 sm:mt-8"
      >
        Solicitar {tamanho}
      </motion.a>
    </div>
  );
}
