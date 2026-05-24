import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { SITE_CONFIG, whatsappLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Canais de atendimento do estúdio Eternize: WhatsApp, Instagram e e-mail. Atendimento direto, sem intermediários.",
};

export default function ContatoPage() {
  return (
    <>
      <Section variant="bone">
        <SectionTitle
          eyebrow="Contato"
          title={<>canais de<br/>atendimento</>}
          subtitle="Todo atendimento é conduzido diretamente pela artista. Selecione o canal de sua preferência."
        />

        <div className="mt-12 sm:mt-16 grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-3">
          {/* WhatsApp — destaque */}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal lift-card md:col-span-3 lg:col-span-1 lg:row-span-2 group flex flex-col rounded-2xl bg-[var(--brand-walnut)] text-[var(--brand-bone)] p-7 sm:p-8 md:p-10 overflow-hidden hover:bg-[var(--brand-ink)] transition-colors"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-caramel)] text-[var(--brand-bone)]">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.768.967-.941 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487 2.981 1.288 2.981.86 3.518.806.537-.054 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
            </span>
            <h3 className="mt-6 sm:mt-8 font-script text-4xl sm:text-5xl leading-none">
              WhatsApp
            </h3>
            <p className="mt-3 text-[var(--brand-cream)]/80 leading-relaxed">
              Canal principal de atendimento. Envio de referências, briefing,
              orçamento e acompanhamento de produção em um único fluxo.
            </p>
            <span className="mt-auto pt-8 sm:pt-10 inline-flex items-center gap-2 text-sm tracking-[0.04em] text-[var(--brand-bone)]">
              Abrir conversa
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>

          {/* Instagram */}
          <a
            href={SITE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal lift-card group flex flex-col rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-alt)] p-7 sm:p-8 hover:bg-[var(--bg)] hover:border-[var(--accent)] transition-colors"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg)] text-[var(--accent)] border border-[var(--border-strong)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-[var(--brand-bone)] group-hover:border-[var(--accent)]">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
            </span>
            <h3 className="mt-5 sm:mt-6 font-script text-3xl text-[var(--fg)] leading-none">
              Instagram
            </h3>
            <p className="mt-3 text-[var(--fg-soft)] leading-relaxed">
              Bastidores do estúdio, peças recentes e dicas de captação
              fotográfica para boas referências.
            </p>
            <span className="mt-5 sm:mt-6 inline-flex items-center gap-2 text-sm tracking-wide text-[var(--accent)]">
              @{SITE_CONFIG.instagramHandle}
            </span>
          </a>

          {/* E-mail */}
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="reveal lift-card group flex flex-col rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-alt)] p-7 sm:p-8 hover:bg-[var(--bg)] hover:border-[var(--accent)] transition-colors"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg)] text-[var(--accent)] border border-[var(--border-strong)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-[var(--brand-bone)] group-hover:border-[var(--accent)]">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </span>
            <h3 className="mt-5 sm:mt-6 font-script text-3xl text-[var(--fg)] leading-none">
              E-mail
            </h3>
            <p className="mt-3 text-[var(--fg-soft)] leading-relaxed">
              Contato formal: parcerias, imprensa, assessoria, encomendas
              corporativas e atendimento B2B.
            </p>
            <span className="mt-5 sm:mt-6 inline-flex items-center gap-2 text-sm tracking-wide text-[var(--accent)] break-all">
              {SITE_CONFIG.email}
            </span>
          </a>
        </div>

        <div className="reveal mt-12 sm:mt-16 text-sm text-[var(--fg-mute)] max-w-2xl">
          <p>
            <strong className="text-[var(--fg-soft)]">Horário de atendimento:</strong>{" "}
            segunda a sexta, das 9h às 19h. Aos sábados, retornos pontuais conforme
            disponibilidade. Domingos e feriados, sem atendimento.
          </p>
        </div>
      </Section>
    </>
  );
}
