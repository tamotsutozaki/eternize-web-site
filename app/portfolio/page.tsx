import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import PortfolioGallery from "@/components/PortfolioGallery";
import { whatsappLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Galeria de retratos de pet executados pela Eternize. Peças nas dimensões 14, 18 e 25 centímetros.",
};

export default function PortfolioPage() {
  return (
    <>
      <Section variant="bone">
        <SectionTitle
          eyebrow="Portfólio"
          title={<>retratos entregues</>}
          subtitle="Seleção curatorial de peças finalizadas. Use o filtro para visualizar por dimensão. Clique em qualquer obra para acessar a ficha técnica."
        />
        <div className="mt-12 sm:mt-14">
          <PortfolioGallery />
        </div>
      </Section>

      <section className="bg-[var(--bg-alt)] border-t border-[var(--border)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24 text-center reveal">
          <h2 className="font-script text-4xl sm:text-5xl leading-tight">
            Encomende a sua
          </h2>
          <p className="mt-4 text-[var(--fg-soft)] max-w-xl mx-auto">
            Envie a fotografia do seu pet pelo WhatsApp para iniciar o
            briefing. Atendimento individual, com orçamento em até 24h.
          </p>
          <a
            href={whatsappLink("Olá! Vi o portfólio e gostaria de solicitar um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid mt-7 sm:mt-8"
          >
            Solicitar orçamento
          </a>
        </div>
      </section>
    </>
  );
}
