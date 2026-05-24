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
  { n: "03", titulo: "Execução da pintura", desc: "Sete a quinze dias úteis, em estúdio próprio." },
  { n: "04", titulo: "Aprovação prévia", desc: "Você revisa a peça antes do acabamento final." },
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
              <span className="font-script text-5xl md:text-6xl text-[var(--accent)] leading-none">
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
            <h2 className="font-script text-5xl md:text-6xl mt-4 leading-[1.05]">
              especificações<br/>
              da peça
            </h2>
            <p className="mt-5 sm:mt-6 text-[var(--fg-soft)] leading-relaxed max-w-md">
              Trabalho integralmente artesanal, executado em estúdio próprio.
              Sem terceirização, sem reprodução em série. Toda peça é única
              e numerada.
            </p>
          </div>

          <div className="reveal lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { titulo: "Suporte", desc: "Fatia de pinus natural, selecionada manualmente, lixada e tratada para receber a pintura." },
              { titulo: "Pintura", desc: "Tinta acrílica artística profissional, aplicada em camadas, com fidelidade cromática ao referencial." },
              { titulo: "Acabamento", desc: "Verniz protetor de base aquosa, anti-amarelamento, proteção contra umidade leve." },
              { titulo: "Fixação", desc: "Cordão de algodão natural incluído, pronto para instalação sem necessidade de suporte adicional." },
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
          subtitle="Valores referência. Acessórios, fundo personalizado e elementos decorativos estão inclusos. Pagamento via PIX (5% de desconto à vista) ou cartão em até 3x."
        />

        <PricingTabs />
      </Section>

      {/* Sobre Isabella preview */}
      <Section variant="cream">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          <div className="reveal lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--bg-alt)] shadow-[var(--shadow-soft)] zoom-on-hover max-w-md w-full mx-auto lg:max-w-none">
            <Image
              // MOCK — substituir por fotografia da artista em estúdio
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Isabella, médica veterinária e artista responsável pela Eternize"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="reveal lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-medium">
              Sobre a artista
            </span>
            <h2 className="font-script text-5xl md:text-6xl lg:text-7xl mt-4 leading-[1.05]">
              Isabella Ferreira
            </h2>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[var(--fg-soft)] leading-relaxed max-w-xl">
              Médica veterinária com formação complementar em ilustração
              naturalista. Funda a Eternize a partir da intersecção entre
              o conhecimento clínico de anatomia animal e a prática artística
              iniciada na infância.
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
              <blockquote className="mt-4 text-[var(--fg-soft)] leading-relaxed">
                {d.texto}
              </blockquote>
              <figcaption className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-[var(--border)] text-sm">
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
          <h2 className="mt-5 font-script text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-[var(--brand-bone)]">
            Um retrato para<br/>permanecer.
          </h2>
          <p className="mt-5 sm:mt-6 text-[var(--brand-cream)]/80 max-w-xl mx-auto leading-relaxed">
            Envie a fotografia do seu pet pelo WhatsApp. O briefing é
            conduzido por mim, com retorno em até 24h.
          </p>
          <a
            href={whatsappLink("Olá! Gostaria de solicitar um orçamento para um retrato.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid btn-light mt-8 sm:mt-10"
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
