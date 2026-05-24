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
  const message = `Olá! Quero encomendar um retrato de ${tamanho} (R$ ${preco}). Como faço?`;
  return (
    <div
      className={`lift-card relative flex flex-col rounded-2xl border p-7 sm:p-8 md:p-10 ${
        destaque
          ? "border-[var(--accent)] bg-[var(--bg)] shadow-[var(--shadow-soft)]"
          : "border-[var(--border-strong)] bg-[var(--bg-alt)]"
      }`}
    >
      {destaque && (
        <span className="absolute -top-3 left-7 sm:left-8 inline-flex items-center rounded-full bg-[var(--accent)] px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-[var(--brand-bone)]">
          Mais escolhido
        </span>
      )}

      <div className="font-script text-4xl sm:text-5xl md:text-6xl text-[var(--fg)] leading-none">
        {tamanho}
      </div>
      <p className="mt-2 text-sm text-[var(--fg-mute)]">{descricao}</p>

      <div className="mt-6 sm:mt-8 flex items-baseline gap-1">
        <span className="text-sm text-[var(--fg-mute)]">R$</span>
        <span className="text-4xl sm:text-5xl font-semibold tracking-tight">
          {preco}
        </span>
      </div>

      {detalhes && detalhes.length > 0 && (
        <ul className="mt-5 sm:mt-6 space-y-2 text-sm text-[var(--fg-soft)]">
          {detalhes.map((d) => (
            <li key={d} className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-[var(--accent)] shrink-0" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      )}

      <motion.a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.97 }}
        className="btn-solid mt-7 sm:mt-8 justify-center text-sm"
      >
        Encomendar {tamanho}
      </motion.a>
    </div>
  );
}
