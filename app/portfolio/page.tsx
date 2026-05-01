import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import PortfolioGallery from "@/components/PortfolioGallery";
import { whatsappLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Galeria de retratos de pets pintados à mão pela Eternize. Veja peças entregues em 14cm, 18cm e 25cm.",
};

export default function PortfolioPage() {
  return (
    <>
      <Section variant="bone">
        <SectionTitle
          eyebrow="Portfólio"
          title={<>cada peça,<br/>uma família</>}
          subtitle="Filtre por tamanho ou veja todas. Clique em qualquer retrato pra ver detalhes e encomendar um parecido."
        />
        <div className="mt-14">
          <PortfolioGallery />
        </div>
      </Section>

      <section className="bg-[var(--bg-alt)] border-t border-[var(--border)]">
        <div className="mx-auto max-w-3xl px-5 md:px-10 py-20 md:py-24 text-center reveal">
          <h2 className="font-script text-4xl md:text-5xl leading-tight">
            quero o meu também
          </h2>
          <p className="mt-4 text-[var(--fg-soft)] max-w-xl mx-auto">
            Manda foto do seu pet no WhatsApp e a gente acerta tamanho,
            fundo e detalhes na conversa.
          </p>
          <a
            href={whatsappLink("Olá! Vi o portfólio e quero encomendar um retrato 🐾")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--bg-deep)] text-[var(--bg-deep-text)] px-7 py-3.5 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            Encomendar agora
          </a>
        </div>
      </section>
    </>
  );
}
