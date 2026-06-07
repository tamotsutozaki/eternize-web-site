"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Peca } from "@/lib/portfolio";
import { whatsappLink } from "@/lib/config";

export default function PieceLightbox({
  peca,
  onClose,
}: {
  peca: Peca;
  onClose: () => void;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
  }, [peca.id]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const message = `Olá! Vi a peça "${peca.nomePet}" (${peca.tamanho}) no portfólio e gostaria de solicitar orçamento para uma composição similar.`;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="fixed inset-0 z-[80] bg-[var(--brand-ink)]/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8 }}
        transition={{ type: "spring", stiffness: 320, damping: 28, mass: 0.7 }}
        className="relative w-full max-w-4xl bg-[var(--bg)] rounded-2xl overflow-hidden shadow-2xl grid md:grid-cols-2 my-auto"
      >
        <motion.button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          whileTap={{ scale: 0.92 }}
          className="cursor-pointer absolute top-3 right-3 md:top-4 md:right-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--bg)] text-[var(--fg)] border border-[var(--border-strong)] shadow-[var(--shadow-card)] hover:bg-[var(--brand-walnut)] hover:text-[var(--brand-bone)] hover:border-[var(--brand-walnut)] transition-colors duration-200"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </motion.button>

        <div className="flex flex-col bg-[var(--bg-alt)]">
          <div className="relative aspect-square md:aspect-auto md:flex-1 md:min-h-[420px]">
            <Image
              src={peca.imagens[active]}
              alt={`Retrato — ${peca.nomePet}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {peca.imagens.length > 1 && (
            <div className="flex gap-2 p-3 sm:p-4">
              {peca.imagens.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Ver imagem ${i + 1}`}
                  aria-current={i === active}
                  className={`relative h-16 w-16 sm:h-[72px] sm:w-[72px] shrink-0 overflow-hidden rounded-lg border-2 cursor-pointer transition-colors ${
                    i === active
                      ? "border-[var(--accent)]"
                      : "border-transparent hover:border-[var(--border-strong)]"
                  }`}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="72px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="p-6 sm:p-8 md:p-10 flex flex-col">
          <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)] font-medium">
            Ficha técnica · {peca.tamanho}
            {peca.ano ? ` · ${peca.ano}` : ""}
          </span>
          <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl mt-2 leading-none">
            {peca.nomePet}
          </h3>
          {peca.descricao && (
            <p className="mt-5 sm:mt-6 text-[var(--fg-soft)] leading-relaxed">
              {peca.descricao}
            </p>
          )}
          {peca.multiplosPets && peca.multiplosPets > 1 && (
            <p className="mt-4 text-sm text-[var(--fg-mute)]">
              Composição múltipla — {peca.multiplosPets} animais sobre o mesmo suporte.
            </p>
          )}

          <dl className="mt-6 space-y-2.5 text-sm text-[var(--fg-mute)]">
            <div className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[var(--accent)]" /> Suporte: pinus natural lixado e tratado</div>
            <div className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[var(--accent)]" /> Pintura: tinta acrílica artística</div>
            <div className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[var(--accent)]" /> Acabamento: verniz protetor aerossol de base fosca</div>
            <div className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[var(--accent)]" /> Fixação: {peca.fixacao ?? "cordão de algodão natural"}</div>
          </dl>

          <div className="mt-auto pt-8">
            <motion.a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              className="btn-solid w-full"
            >
              Solicitar peça similar
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
