import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, whatsappLink } from "@/lib/config";

function IconWA({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.768.967-.941 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function IconIG({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

function IconMail({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-[var(--brand-ink)] text-[var(--brand-bone)]">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src="/brand/eternize-cappuccino.png"
              alt="Eternize"
              width={1080}
              height={1080}
              className="h-auto w-[220px]"
            />
            <p className="mt-6 text-[var(--brand-cream)]/80 max-w-sm leading-relaxed">
              Retratos de pets pintados à mão sobre madeira natural. Feitos
              com olhar técnico e afetivo por uma veterinária.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--brand-caramel)] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/portfolio" className="hover:text-[var(--brand-caramel)]">Portfólio</Link></li>
              <li><Link href="/como-funciona" className="hover:text-[var(--brand-caramel)]">Como funciona</Link></li>
              <li><Link href="/sobre" className="hover:text-[var(--brand-caramel)]">Sobre</Link></li>
              <li><Link href="/faq" className="hover:text-[var(--brand-caramel)]">FAQ</Link></li>
              <li><Link href="/contato" className="hover:text-[var(--brand-caramel)]">Contato</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--brand-caramel)] mb-4">
              Fale com a gente
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 hover:text-[var(--brand-caramel)] transition-colors"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-bone)]/8 text-[var(--brand-caramel)] border border-[var(--brand-bone)]/15">
                    <IconWA />
                  </span>
                  WhatsApp · atendimento direto
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 hover:text-[var(--brand-caramel)] transition-colors"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-bone)]/8 text-[var(--brand-caramel)] border border-[var(--brand-bone)]/15">
                    <IconIG />
                  </span>
                  @{SITE_CONFIG.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center gap-3 hover:text-[var(--brand-caramel)] transition-colors"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-bone)]/8 text-[var(--brand-caramel)] border border-[var(--brand-bone)]/15">
                    <IconMail />
                  </span>
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[var(--brand-bone)]/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-[var(--brand-cream)]/60">
          <span>© {year} Eternize</span>
          <span className="font-script text-base text-[var(--brand-caramel)]">
            Memórias que ficam
          </span>
        </div>
      </div>
    </footer>
  );
}
