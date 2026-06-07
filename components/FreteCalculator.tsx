"use client";

import { useState } from "react";
import { TAMANHOS, Tamanho } from "@/lib/portfolio";
import { SITE_CONFIG } from "@/lib/config";

type Opcao = {
  id: number;
  transportadora: string;
  servico: string;
  preco: number;
  prazo: number | null;
};

const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const maskCep = (v: string) => {
  const d = v.replace(/\D/g, "").slice(0, 8);
  return d.length > 5 ? `${d.slice(0, 5)}-${d.slice(5)}` : d;
};

export default function FreteCalculator() {
  const [size, setSize] = useState<Tamanho>("18cm");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState<string | null>(null);
  const [opcoes, setOpcoes] = useState<Opcao[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const cepDigits = cep.replace(/\D/g, "");

  async function calcular(e: React.FormEvent) {
    e.preventDefault();
    setErro(null);
    setOpcoes(null);
    setCidade(null);

    if (cepDigits.length !== 8) {
      setErro("Digite um CEP válido (8 dígitos).");
      return;
    }

    setLoading(true);

    // Cidade via ViaCEP (best-effort, não bloqueia o cálculo).
    fetch(`https://viacep.com.br/ws/${cepDigits}/json/`)
      .then((r) => r.json())
      .then((d) => {
        if (d && !d.erro) setCidade(`${d.localidade} – ${d.uf}`);
      })
      .catch(() => {});

    try {
      const r = await fetch("/api/frete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cep: cepDigits, size }),
      });
      const data = await r.json();

      if (!r.ok) {
        setErro(data?.error || "Não foi possível calcular o frete.");
        return;
      }
      if (!data.opcoes?.length) {
        setErro("Nenhuma opção de entrega encontrada para esse CEP.");
        return;
      }
      setOpcoes(data.opcoes as Opcao[]);
    } catch {
      setErro("Erro ao calcular. Tente novamente em instantes.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="reveal mt-16 sm:mt-20">
      <span className="block text-center text-[10px] sm:text-xs uppercase tracking-[0.24em] sm:tracking-[0.32em] text-[var(--accent)] font-semibold mb-8 sm:mb-10">
        Calcular frete
      </span>

      <div className="max-w-2xl mx-auto rounded-2xl border border-[var(--border-strong)] bg-[var(--bg)] p-6 sm:p-8">
        <form onSubmit={calcular} className="flex flex-col gap-5">
          {/* Tamanho */}
          <div>
            <label className="block text-xs uppercase tracking-[0.16em] text-[var(--fg-mute)] mb-3">
              Tamanho da peça
            </label>
            <div className="flex gap-2">
              {TAMANHOS.map((t) => {
                const selected = t.tamanho === size;
                return (
                  <button
                    key={t.tamanho}
                    type="button"
                    onClick={() => setSize(t.tamanho)}
                    aria-pressed={selected}
                    className={`flex-1 rounded-xl border px-3 py-2.5 text-sm transition-colors cursor-pointer ${
                      selected
                        ? "border-[var(--accent)] bg-[var(--bg-alt)] text-[var(--fg)] font-medium"
                        : "border-[var(--border-strong)] text-[var(--fg-soft)] hover:text-[var(--fg)]"
                    }`}
                  >
                    {t.tamanho}
                  </button>
                );
              })}
            </div>
          </div>

          {/* CEP */}
          <div>
            <label
              htmlFor="frete-cep"
              className="block text-xs uppercase tracking-[0.16em] text-[var(--fg-mute)] mb-3"
            >
              CEP de entrega
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="frete-cep"
                inputMode="numeric"
                autoComplete="postal-code"
                placeholder="00000-000"
                value={cep}
                onChange={(e) => setCep(maskCep(e.target.value))}
                className="flex-1 rounded-xl border border-[var(--border-strong)] bg-[var(--bg)] px-4 py-3 text-[var(--fg)] outline-none focus:border-[var(--accent)] transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-solid justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Calculando…" : "Calcular"}
              </button>
            </div>
            <a
              href="https://buscacepinter.correios.com.br/app/endereco/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-xs text-[var(--fg-mute)] underline underline-offset-2 hover:text-[var(--accent)]"
            >
              Não sei meu CEP
            </a>
          </div>

          {erro && (
            <p className="text-sm text-[var(--accent)]" role="alert">
              {erro}
            </p>
          )}

          {cidade && opcoes && (
            <p className="text-sm text-[var(--fg-soft)]">
              Entrega para <span className="text-[var(--fg)]">{cidade}</span>:
            </p>
          )}

          {opcoes && (
            <ul className="flex flex-col gap-2">
              {opcoes.map((o) => (
                <li
                  key={o.id}
                  className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--bg-alt)] px-4 py-3"
                >
                  <div>
                    <p className="text-sm text-[var(--fg)] font-medium">
                      {o.transportadora} {o.servico}
                    </p>
                    {o.prazo != null && (
                      <p className="text-xs text-[var(--fg-mute)]">
                        {o.prazo} {o.prazo === 1 ? "dia útil" : "dias úteis"}
                      </p>
                    )}
                  </div>
                  <span className="text-sm font-semibold text-[var(--fg)]">
                    {brl(o.preco)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </form>
      </div>

      <p className="mt-5 text-center text-xs text-[var(--fg-mute)]">
        Frete grátis para {SITE_CONFIG.cidadesEntregaGratis.join(" e ")}. Valores
        de frete estimados; o valor final é confirmado no fechamento do pedido.
      </p>
    </div>
  );
}
