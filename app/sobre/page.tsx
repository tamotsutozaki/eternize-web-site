import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import { whatsappLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Sobre a artista",
  description:
    "Isabella Ferreira — médica veterinária e artista responsável pela Eternize. Trajetória, formação e processo de trabalho.",
};

export default function SobrePage() {
  return (
    <>
      {/* Hero pessoal */}
      <section className="bg-[var(--bg)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 pt-12 sm:pt-16 md:pt-24 pb-10 sm:pb-12">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-7 reveal">
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-medium">
                Sobre a artista
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-4 leading-[1.02] text-[var(--fg)] tracking-tight">
                Isabella Rossi
              </h1>
              <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-[var(--fg-soft)] max-w-xl leading-relaxed">
                Ilustradora e fundadora da Eternize. Cada peça do estúdio é
                executada integralmente por mim, do briefing inicial à entrega.
              </p>
            </div>
            <div className="lg:col-span-5 reveal relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] bg-[var(--bg-alt)] zoom-on-hover max-w-md w-full mx-auto lg:max-w-none">
              {/* MOCK */}
              <Image
                src="/images/isabella-aurora.jpg"
                alt="Isabella Rossi"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Texto pessoal */}
      <Section variant="bone">
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12">
          <div className="lg:col-span-8 lg:col-start-2 space-y-10 sm:space-y-12">
            <div className="reveal">
              <h2 className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-3 sm:mb-4 font-medium">
                A paixão por animais
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[var(--fg-soft)] leading-relaxed">
                {/* MOCK */}
                Desde a infância cresci rodeada por animais — cães, gatos,
                ovelhas e pássaros. Foi com eles que aprendi o que é o amor
                incondicional, o mais sincero que existe. Esse vínculo é o que
                procuro traduzir em cada retrato.
              </p>
            </div>

            <div className="reveal">
              <h2 className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-3 sm:mb-4 font-medium">
                Da ilustração à madeira
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[var(--fg-soft)] leading-relaxed">
                {/* MOCK */}
                Desenho desde a infância e, em especial, os animais. Em 2026
                retomei a pintura e, ao descobrir a arte sobre madeira pinus,
                não tive dúvidas de que me apaixonaria por esse universo —
                com suas texturas, nós e veios, o suporte natural passou a
                integrar a composição como parte ativa da obra.
              </p>
            </div>

            <div className="reveal">
              <h2 className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-3 sm:mb-4 font-medium">
                Filosofia de trabalho
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[var(--fg-soft)] leading-relaxed">
                {/* MOCK */}
                Cada peça nasce de uma conversa direta. Não trabalho com
                terceirização, não opero em escala industrial. Atendo um
                número limitado de encomendas por mês para garantir o
                tempo de execução que cada retrato exige.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Pull quote */}
      <Section variant="cream">
        <blockquote className="reveal max-w-4xl mx-auto text-center">
          <p className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[var(--fg)] leading-[1.2]">
            &ldquo;Retratar um pet é registrar a história de uma família.
            Esse compromisso define o ritmo do estúdio.&rdquo;
          </p>
          <footer className="mt-6 sm:mt-8 text-sm uppercase tracking-[0.3em] text-[var(--accent)] font-medium">
            Isabella Rossi
          </footer>
        </blockquote>
      </Section>

      {/* CTA */}
      <section className="bg-[var(--brand-walnut)] text-[var(--brand-bone)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24 text-center reveal">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Vamos conversar?
          </h2>
          <p className="mt-4 text-[var(--brand-cream)]/80 max-w-xl mx-auto">
            O atendimento é feito diretamente comigo, via WhatsApp.
            Resposta em até 24 horas em dias úteis.
          </p>
          <a
            href={whatsappLink("Olá, Isabella! Vim pela página Sobre e gostaria de conversar sobre um retrato.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid btn-light mt-7 sm:mt-8 w-full sm:w-auto"
          >
            Falar com Isabella
          </a>
        </div>
      </section>
    </>
  );
}
