import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import PricingTabs from "@/components/PricingTabs";
import FeaturedGrid from "@/components/FeaturedGrid";
import { whatsappLink } from "@/lib/config";
import { PORTFOLIO, DEPOIMENTOS } from "@/lib/portfolio";

const PASSOS = [
  { n: "01", titulo: "Você manda a foto", desc: "Pelo WhatsApp, simples assim." },
  { n: "02", titulo: "Conversamos os detalhes", desc: "Tamanho, fundo, acessórios, mais de um pet." },
  { n: "03", titulo: "Eu pinto à mão", desc: "Cada peça leva 7 a 15 dias." },
  { n: "04", titulo: "Você aprova", desc: "Foto da peça antes da finalização." },
  { n: "05", titulo: "Recebe em casa", desc: "Embalagem caprichada, prontinha pra pendurar." },
];

export default function HomePage() {
  const destaque = PORTFOLIO.slice(0, 4);

  return (
    <>
      <Hero />

      {/* Como funciona — resumo */}
      <Section variant="cream" id="como-funciona">
        <SectionTitle
          eyebrow="Em 5 passos"
          title={<>do clique até<br/>a parede da sua sala</>}
          subtitle="Sem cadastro, sem carrinho. Toda venda acontece numa conversa direta — do jeito que sempre foi feito quando se pinta à mão."
        />

        <ol className="reveal mt-16 grid gap-8 md:gap-6 md:grid-cols-5">
          {PASSOS.map((p) => (
            <li key={p.n} className="flex flex-col">
              <span className="font-script text-5xl md:text-6xl text-[var(--accent)] leading-none">
                {p.n}
              </span>
              <span className="mt-3 h-px w-10 bg-[var(--border-strong)]" />
              <h3 className="mt-4 text-base font-medium text-[var(--fg)]">
                {p.titulo}
              </h3>
              <p className="mt-2 text-sm text-[var(--fg-soft)] leading-relaxed">
                {p.desc}
              </p>
            </li>
          ))}
        </ol>

        <div className="reveal mt-12">
          <Link
            href="/como-funciona"
            className="inline-flex items-center gap-2 text-sm tracking-wide text-[var(--fg)] underline-offset-8 hover:underline decoration-[var(--accent)]"
          >
            Ver passo a passo completo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </Section>

      {/* Galeria preview */}
      <Section variant="bone" id="galeria">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionTitle
            eyebrow="Portfólio"
            title={<>peças que já<br/>foram pra casa</>}
            subtitle="Cada retrato carrega o olhar de quem entende de bicho — e a história de uma família."
          />
          <Link
            href="/portfolio"
            className="reveal hidden md:inline-flex items-center gap-2 text-sm tracking-wide text-[var(--fg)] underline-offset-8 hover:underline decoration-[var(--accent)]"
          >
            Ver portfólio completo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <FeaturedGrid items={destaque} />

        <div className="reveal mt-10 md:hidden">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm tracking-wide text-[var(--fg)] underline-offset-8 hover:underline decoration-[var(--accent)]"
          >
            Ver portfólio completo →
          </Link>
        </div>
      </Section>

      {/* Tamanhos e preços */}
      <Section variant="cream" id="tamanhos">
        <SectionTitle
          align="center"
          eyebrow="Tamanhos"
          title="escolha o seu"
          subtitle="Três tamanhos, mesmo cuidado. PIX à vista tem 5% de desconto."
        />

        <PricingTabs />
      </Section>

      {/* Sobre Isabella preview */}
      <Section variant="bone">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="reveal lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--bg-alt)] shadow-[var(--shadow-soft)]">
            <Image
              // MOCK — trocar pela foto real da Isabella pintando
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Isabella, médica veterinária e artista por trás da Eternize"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="reveal lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
              Sobre a artista
            </span>
            <h2 className="font-script text-5xl md:text-6xl lg:text-7xl mt-4 leading-[1.05]">
              oi, eu sou a<br/>Isabella
            </h2>
            <p className="mt-6 text-lg md:text-xl text-[var(--fg-soft)] leading-relaxed max-w-xl font-script italic">
              {/* MOCK — substituir pelo texto real da Isabella */}
              &ldquo;Sou veterinária há 5 anos e desenho pets desde criança.
              Cada peça que faço carrega esse olhar — técnico e afetivo.&rdquo;
            </p>
            <Link
              href="/sobre"
              className="mt-10 inline-flex items-center gap-2 text-sm tracking-wide text-[var(--fg)] underline-offset-8 hover:underline decoration-[var(--accent)]"
            >
              Conheça minha história
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </Section>

      {/* Depoimentos */}
      <Section variant="cream">
        <SectionTitle
          eyebrow="Quem já levou pra casa"
          title="depoimentos"
        />
        <div className="reveal mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DEPOIMENTOS.slice(0, 3).map((d) => (
            <figure
              key={d.nome}
              className="flex flex-col rounded-2xl border border-[var(--border-strong)] bg-[var(--bg)] p-7 md:p-8"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
                className="text-[var(--accent)]"
              >
                <path d="M9 7H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v2a4 4 0 0 1-4 4v2c4 0 7-3 7-7V7zm12 0h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v2a4 4 0 0 1-4 4v2c4 0 7-3 7-7V7z" />
              </svg>
              <blockquote className="mt-4 text-[var(--fg-soft)] leading-relaxed">
                {d.texto}
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-[var(--border)] text-sm">
                <p className="font-medium text-[var(--fg)]">{d.nome}</p>
                <p className="text-[var(--fg-mute)] mt-0.5">
                  {d.pet} · {d.cidade}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA final escuro */}
      <section className="bg-[var(--brand-walnut)] text-[var(--brand-bone)]">
        <div className="mx-auto max-w-4xl px-5 md:px-10 py-24 md:py-32 text-center reveal">
          <h2 className="font-script text-5xl md:text-7xl leading-[1.05] text-[var(--brand-bone)]">
            pronto pra eternizar<br/>seu pet?
          </h2>
          <p className="mt-6 text-[var(--brand-cream)]/80 max-w-xl mx-auto leading-relaxed">
            Manda a foto pelo zap. A gente conversa, decide os detalhes, e
            em 7-15 dias seu retrato está pronto.
          </p>
          <a
            href={whatsappLink("Olá! Quero encomendar o retrato do meu pet 🐾")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--brand-bone)] text-[var(--brand-walnut)] px-8 py-4 text-base font-medium tracking-wide hover:bg-[var(--brand-caramel)] hover:text-[var(--brand-bone)] transition-colors"
          >
            Falar no WhatsApp
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
