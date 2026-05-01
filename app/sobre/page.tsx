import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import { whatsappLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Sou Isabella — médica veterinária e artista por trás de cada peça da Eternize.",
};

export default function SobrePage() {
  return (
    <>
      {/* Hero pessoal */}
      <section className="bg-[var(--bg)]">
        <div className="mx-auto max-w-7xl px-5 md:px-10 pt-16 md:pt-24 pb-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-7 reveal">
              <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
                Sobre a artista
              </span>
              <h1 className="font-script text-6xl md:text-7xl lg:text-8xl mt-4 leading-[1] text-[var(--fg)]">
                oi, eu sou a<br/>Isabella
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[var(--fg-soft)] max-w-xl leading-relaxed">
                Médica veterinária, artista e a pessoa por trás de cada
                pincelada da Eternize.
              </p>
            </div>
            <div className="lg:col-span-5 reveal relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] bg-[var(--bg-alt)]">
              {/* MOCK — trocar por foto real da Isabella */}
              <Image
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Isabella"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Texto pessoal — 1ª pessoa */}
      <Section variant="bone">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 lg:col-start-2 space-y-12">
            <div className="reveal">
              <h2 className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-4">
                Veterinária há 5 anos
              </h2>
              <p className="text-lg md:text-xl text-[var(--fg-soft)] leading-relaxed">
                {/* MOCK — substituir pelo [TEXTO_ISABELLA] real */}
                Quando me formei em medicina veterinária, eu não imaginava
                que ia acabar pintando os meus próprios pacientes. Mas o
                olhar que a clínica me ensinou — anatomia, expressão,
                comportamento — é o mesmo que uso hoje pra te entregar um
                retrato em que você reconhece o seu pet de primeira.
              </p>
            </div>

            <div className="reveal">
              <h2 className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-4">
                Pintar pets desde criança
              </h2>
              <p className="text-lg md:text-xl text-[var(--fg-soft)] leading-relaxed">
                {/* MOCK — substituir pelo [TEXTO_ISABELLA] real */}
                Eu desenho desde sempre. Cachorro, gato, coelho — qualquer
                bicho que aparecesse na minha frente virava traço no caderno.
                Quando descobri a madeira como suporte, foi como achar o
                lugar onde tudo se encaixava: a vet, a artista, a memória.
              </p>
            </div>

            <div className="reveal">
              <h2 className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-4">
                Por que cada peça importa
              </h2>
              <p className="text-lg md:text-xl text-[var(--fg-soft)] leading-relaxed">
                {/* MOCK — substituir pelo [TEXTO_ISABELLA] real */}
                Pinto tudo à mão, do esboço ao verniz. Não terceirizo nada
                e atendo cada pessoa pessoalmente — desde a primeira foto
                que você me manda até a hora em que a peça chega na sua
                casa. Pra mim, retratar um pet é fixar uma história, e isso
                merece todo o cuidado.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Pull quote */}
      <Section variant="cream">
        <blockquote className="reveal max-w-4xl mx-auto text-center">
          <p className="font-script italic text-4xl md:text-6xl lg:text-7xl text-[var(--fg)] leading-[1.1]">
            &ldquo;Cada pet tem uma história — meu trabalho é transformar
            essa história em algo que dure.&rdquo;
          </p>
          <footer className="mt-8 text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
            Isabella
          </footer>
        </blockquote>
      </Section>

      {/* CTA */}
      <section className="bg-[var(--brand-walnut)] text-[var(--brand-bone)]">
        <div className="mx-auto max-w-3xl px-5 md:px-10 py-20 md:py-24 text-center reveal">
          <h2 className="font-script text-4xl md:text-5xl">
            quer um retrato seu?
          </h2>
          <p className="mt-4 text-[var(--brand-cream)]/80 max-w-xl mx-auto">
            Me manda uma foto do seu pet no WhatsApp. A gente conversa,
            decide os detalhes, e em 7-15 dias seu retrato está pronto.
          </p>
          <a
            href={whatsappLink("Olá Isabella! Vim pelo Sobre do site e quero encomendar 🐾")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-[var(--brand-bone)] text-[var(--brand-walnut)] px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-[var(--brand-caramel)] hover:text-[var(--brand-bone)] transition-colors"
          >
            Falar comigo
          </a>
        </div>
      </section>
    </>
  );
}
