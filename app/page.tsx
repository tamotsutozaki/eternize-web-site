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
  { n: "01", titulo: "Envio da referência", desc: "Você envia uma fotografia do pet pelo WhatsApp." },
  { n: "02", titulo: "Briefing e orçamento", desc: "Definimos dimensão, fundo, acessórios e prazo." },
  { n: "03", titulo: "Execução da pintura", desc: "Após pagamento, a peça é produzida no período de sete a quinze dias úteis." },
  { n: "04", titulo: "Aprovação prévia", desc: "Enviamos uma prévia para conferência antes do envernizamento." },
  { n: "05", titulo: "Entrega", desc: "Embalagem reforçada e pronta para fixação na parede." },
];

export default function HomePage() {
  const destaque = PORTFOLIO.slice(0, 4);

  return (
    <>
      <Hero />

      {/* Processo — resumo */}
      <Section variant="cream" id="como-funciona">
        <SectionTitle
          eyebrow="Processo"
          title={<>do envio da foto<br/>à entrega da peça</>}
          subtitle="Atendimento conversacional via WhatsApp. Sem carrinho, sem cadastro — cada pedido recebe acompanhamento individual do briefing à entrega."
        />

        <ol className="reveal mt-12 md:mt-16 grid gap-8 sm:gap-10 md:gap-6 sm:grid-cols-2 md:grid-cols-5">
          {PASSOS.map((p) => (
            <li key={p.n} className="flex flex-col">
              <span className="font-serif text-5xl md:text-6xl text-[var(--accent)] leading-none">
                {p.n}
              </span>
              <span className="mt-3 h-px w-10 bg-[var(--border-strong)]" />
              <h3 className="mt-4 text-[15px] font-semibold text-[var(--fg)] tracking-tight">
                {p.titulo}
              </h3>
              <p className="mt-2 text-sm text-[var(--fg-soft)] leading-relaxed">
                {p.desc}
              </p>
            </li>
          ))}
        </ol>

        <div className="reveal mt-10 sm:mt-12">
          <Link href="/como-funciona" className="link-arrow">
            Ver processo completo
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
            title={<>peças entregues<br/>a famílias reais</>}
            subtitle="Seleção de retratos finalizados nos últimos meses. O portfólio completo reúne trabalhos nas três dimensões disponíveis."
          />
          <Link href="/portfolio" className="reveal hidden md:inline-flex link-arrow">
            Ver portfólio completo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <FeaturedGrid items={destaque} />

        <div className="reveal mt-10 md:hidden">
          <Link href="/portfolio" className="link-arrow">
            Ver portfólio completo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </Section>

      {/* Materiais e técnica */}
      <Section variant="cream">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="reveal lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-medium">
              Materiais e técnica
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mt-4 leading-[1.05] tracking-tight">
              Especificações da peça
            </h2>
            <p className="mt-5 sm:mt-6 text-[var(--fg-soft)] leading-relaxed max-w-md">
              Trabalho integralmente artesanal, executado em estúdio próprio.
              Sem terceirização, sem reprodução em série. Toda peça eternizada é única.
            </p>
          </div>

          <div className="reveal lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { titulo: "Suporte", desc: "Fatia de pinus natural, selecionada manualmente, lixada e tratada para receber a pintura." },
              { titulo: "Pintura", desc: "Tinta acrílica artística profissional, aplicada em camadas, com fidelidade cromática ao referencial." },
              { titulo: "Acabamento", desc: "Verniz protetor de base aquosa, anti-amarelamento, proteção contra umidade leve." },
              { titulo: "Fixação", desc: "Cordão de algodão natural incluso, pronto para pendurar; suporte acrílico opcional para exibição em pé sobre mesa ou prateleira." },
            ].map((item) => (
              <div
                key={item.titulo}
                className="lift-card rounded-2xl border border-[var(--border-strong)] bg-[var(--bg)] p-5 sm:p-6"
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] font-medium">{item.titulo}</p>
                <p className="mt-3 text-sm text-[var(--fg-soft)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Tamanhos e preços */}
      <Section variant="bone" id="tamanhos">
        <SectionTitle
          align="center"
          eyebrow="Dimensões e investimento"
          title="três formatos disponíveis"
          subtitle="Acessórios, fundo personalizado e elementos decorativos estão inclusos."
        />

        <PricingTabs />

        {/* Formas de pagamento */}
        <div className="reveal mt-16 sm:mt-20">
          <span className="block text-center text-[10px] sm:text-xs uppercase tracking-[0.24em] sm:tracking-[0.32em] text-[var(--accent)] font-semibold mb-8 sm:mb-10">
            Formas de pagamento
          </span>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              {
                icone: (
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                    <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" stroke="none" />
                    <path d="M12 3v18" strokeLinecap="round" />
                  </svg>
                ),
                titulo: "PIX 50% + 50%",
                desc: "50% para iniciar a peça + 50% na entrega",
              },
              {
                icone: (
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                    <path d="M12 3l1.6 4.9a3 3 0 0 0 1.9 1.9L21 11.4l-4.5 1.6a3 3 0 0 0-1.9 1.9L12 19.8l-1.6-4.9a3 3 0 0 0-1.9-1.9L4 11.4l4.5-1.6a3 3 0 0 0 1.9-1.9L12 3z" strokeLinejoin="round" />
                    <path d="M19 4.5v3M20.5 6h-3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                titulo: "PIX à vista",
                sub: "5% de desconto",
                desc: "Pagamento integral antecipado",
                destaque: true,
              },
              {
                icone: (
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                    <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" strokeLinejoin="round" />
                    <path d="M2.5 9.5h19" strokeLinecap="round" />
                    <path d="M6 14.5h4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                titulo: "Cartão em até 12x",
                desc: "Juros das parcelas por conta do cliente",
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className={`lift-card flex flex-col rounded-2xl p-6 sm:p-7 text-center ${
                  item.destaque
                    ? "border-2 border-[var(--accent)] bg-[var(--bg-alt)] shadow-[var(--shadow-soft)]"
                    : "border border-[var(--border-strong)] bg-[var(--bg)]"
                }`}
              >
                <span className="flex justify-center text-[var(--accent)]" aria-hidden>
                  {item.icone}
                </span>
                <h3 className="mt-4 font-serif text-xl sm:text-2xl text-[var(--fg)] tracking-tight leading-tight">
                  {item.titulo}
                </h3>
                {item.sub && (
                  <p className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-[var(--accent)] font-semibold">
                    {item.sub}
                  </p>
                )}
                <p className="mt-3 text-sm text-[var(--fg-soft)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal mt-10 sm:mt-12 flex justify-center">
            <Link href="/como-funciona" className="btn-solid">
              Como funciona o processo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </Section>

      {/* Sobre Isabella preview */}
      <Section variant="cream">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          <div className="reveal lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--bg-alt)] shadow-[var(--shadow-soft)] zoom-on-hover max-w-md w-full mx-auto lg:max-w-none">
            <Image
              src="/images/isabella-shory.jpg"
              alt="Isabella Rossi, fundadora da Eternize, segurando um retrato de pet pintado à mão"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="reveal lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-medium">
              Sobre a artista
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mt-4 leading-[1.02] tracking-tight">
              Isabella Rossi
            </h2>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[var(--fg-soft)] leading-relaxed max-w-xl">
              Olá, sou a Isabella! Fundei a Eternize para transformar o amor
              entre tutores e pets em arte. Cada peça é pintada à mão, com tinta
              acrílica sobre madeira pinus, e carrega uma história única — e sua.
            </p>
            <Link href="/sobre" className="link-arrow mt-8 sm:mt-10">
              Conhecer trajetória completa
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </Section>

      {/* Depoimentos */}
      <Section variant="bone">
        <SectionTitle
          eyebrow="Depoimentos"
          title="o que dizem"
          subtitle="Retornos de clientes que receberam suas peças nos últimos meses."
        />
        <div className="reveal mt-12 sm:mt-14 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DEPOIMENTOS.slice(0, 3).map((d) => (
            <figure
              key={d.nome}
              className="lift-card flex flex-col rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-alt)] p-6 sm:p-7 md:p-8"
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
              <blockquote className="mt-4 mb-5 sm:mb-6 text-[var(--fg-soft)] leading-relaxed">
                {d.texto}
              </blockquote>
              <figcaption className="mt-auto pt-5 sm:pt-6 border-t border-[var(--border)] text-sm">
                <p className="font-medium text-[var(--fg)]">{d.nome}</p>
                <p className="text-[var(--fg-mute)] mt-0.5">
                  {d.pet} · {d.cidade}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA final */}
      <section className="bg-[var(--brand-walnut)] text-[var(--brand-bone)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-10 py-20 sm:py-24 md:py-32 text-center reveal">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-[var(--brand-caramel)] font-medium">
            Solicite sua peça
          </span>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-[var(--brand-bone)] tracking-tight">
            um retrato para permanecer.
          </h2>
          <p className="mt-5 sm:mt-6 text-[var(--brand-cream)]/80 max-w-xl mx-auto leading-relaxed">
            Envie a fotografia do seu pet pelo WhatsApp. O briefing é
            conduzido por mim, com retorno em até 24h.
          </p>
          <a
            href={whatsappLink("Olá! Gostaria de solicitar um orçamento para um retrato.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid btn-light mt-8 sm:mt-10 w-full sm:w-auto"
          >
            Iniciar conversa no WhatsApp
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
