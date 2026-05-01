import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { SITE_CONFIG, whatsappLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale comigo pelo WhatsApp, Instagram ou e-mail. Atendimento direto, sem intermediário.",
};

export default function ContatoPage() {
  return (
    <>
      <Section variant="bone">
        <SectionTitle
          eyebrow="Contato"
          title={<>vamos<br/>conversar</>}
          subtitle="Eu mesma atendo cada mensagem. Escolha o canal mais confortável pra você."
        />

        <div className="mt-16 grid gap-6 md:gap-8 md:grid-cols-3">
          {/* WhatsApp — destaque */}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal md:col-span-3 lg:col-span-1 lg:row-span-2 group flex flex-col rounded-2xl bg-[var(--bg-deep)] text-[var(--bg-deep-text)] p-8 md:p-10 hover:opacity-95 transition-opacity"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-caramel)] text-[var(--brand-bone)]">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.768.967-.941 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487 2.981 1.288 2.981.86 3.518.806.537-.054 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
            </span>
            <h3 className="mt-8 font-script text-4xl md:text-5xl leading-none">
              WhatsApp
            </h3>
            <p className="mt-3 text-[var(--brand-cream)]/80">
              Falo com você por aqui. Manda foto, tira dúvida, encomenda
              — tudo num lugar só.
            </p>
            <span className="mt-auto pt-10 inline-flex items-center gap-2 text-sm tracking-wide text-[var(--brand-bone)] underline-offset-8 group-hover:underline decoration-[var(--brand-caramel)]">
              Abrir WhatsApp
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>

          {/* Instagram */}
          <a
            href={SITE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group flex flex-col rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-alt)] p-8 hover:bg-[var(--bg)] transition-colors"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg)] text-[var(--accent)] border border-[var(--border-strong)]">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
            </span>
            <h3 className="mt-6 font-script text-3xl text-[var(--fg)] leading-none">
              Instagram
            </h3>
            <p className="mt-3 text-[var(--fg-soft)]">
              Veja peças novas em primeira mão, bastidores da pintura e
              dicas pra escolher fotos do seu pet.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm tracking-wide text-[var(--accent)]">
              {/* MOCK */}
              @{SITE_CONFIG.instagramHandle}
            </span>
          </a>

          {/* E-mail */}
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="reveal group flex flex-col rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-alt)] p-8 hover:bg-[var(--bg)] transition-colors"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg)] text-[var(--accent)] border border-[var(--border-strong)]">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </span>
            <h3 className="mt-6 font-script text-3xl text-[var(--fg)] leading-none">
              E-mail
            </h3>
            <p className="mt-3 text-[var(--fg-soft)]">
              Pra parcerias, atacado, presskit ou qualquer coisa que peça
              algo mais formal.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm tracking-wide text-[var(--accent)] break-all">
              {/* MOCK */}
              {SITE_CONFIG.email}
            </span>
          </a>
        </div>

        <div className="reveal mt-16 text-sm text-[var(--fg-mute)]">
          <p>
            <strong className="text-[var(--fg-soft)]">Atendimento:</strong>{" "}
            seg-sex das 9h às 19h. Aos sábados respondo quando dá. Domingo
            é dia de descanso (e de pet também).
          </p>
        </div>
      </Section>
    </>
  );
}
