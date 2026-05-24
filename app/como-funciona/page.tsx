import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { whatsappLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Como funciona",
  description:
    "Do clique até a peça pendurada na parede. O passo a passo da Eternize, em 5 etapas simples.",
};

const PASSOS = [
  {
    n: "01",
    titulo: "Você manda a foto",
    descricao:
      "Pelo WhatsApp. Quanto melhor a foto, melhor o retrato — luz natural, pet em foco, no nível do olhar dele. Pode ser de corpo inteiro ou close. Não se preocupe com fundo bagunçado: a gente recompõe na pintura.",
    cta: "Mandar foto agora",
    ctaMessage: "Olá! Quero mandar a foto do meu pet pra começar 🐾",
    imagem: "https://placedog.net/700/900?id=20",
  },
  {
    n: "02",
    titulo: "Conversamos os detalhes",
    descricao:
      "Tamanho da peça (14, 18 ou 25 cm), fundo (madeira natural ou cor sólida à sua escolha), acessórios opcionais no pet (lenço, gravata, terno, óculos, coroa) e elementos decorativos (flores, folhas, estrelas). Mais de um pet? Em 18 e 25 cm dá pra fazer.",
    imagem: "https://placedog.net/700/900?id=21",
  },
  {
    n: "03",
    titulo: "Eu pinto à mão",
    descricao:
      "A pintura é feita sobre uma fatia de madeira pinus (bolacha de tronco), com tinta acrílica e acabamento envernizado. Cada peça leva entre 7 e 15 dias úteis após confirmação do PIX — esse é o tempo da arte.",
    imagem: "https://placedog.net/700/900?id=22",
  },
  {
    n: "04",
    titulo: "Você aprova antes da finalização",
    descricao:
      "Antes de envernizar e finalizar, a gente manda foto da peça quase pronta. Se tiver algum ajuste — cor de fundo, posição do acessório — é o momento. Sem custo extra.",
    imagem: "https://placedog.net/700/900?id=23",
  },
  {
    n: "05",
    titulo: "Você recebe em casa",
    descricao:
      "Entrega presencial gratuita apenas em Indaiatuba e Salto. Para as demais cidades, fazemos o envio pelos Correios ou transportadora — o frete é calculado pelo CEP e fica por conta do cliente. A peça já chega com cordão de algodão pronto pra pendurar.",
    imagem: "https://placedog.net/700/900?id=24",
  },
];

export default function ComoFuncionaPage() {
  return (
    <>
      <Section variant="bone">
        <SectionTitle
          eyebrow="Como funciona"
          title={<>do clique<br/>até a parede</>}
          subtitle="Sem cadastro, sem carrinho, sem complicação. Toda venda acontece numa conversa direta no WhatsApp — pra que cada peça saia com o cuidado que ela pede."
        />
      </Section>

      {PASSOS.map((p, idx) => {
        const isEven = idx % 2 === 0;
        const variant = idx % 2 === 0 ? "bone" : "cream";
        const bgClass =
          variant === "bone" ? "bg-[var(--bg)]" : "bg-[var(--bg-alt)]";
        return (
          <section key={p.n} className={`${bgClass} border-t border-[var(--border)]`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-28">
              <div
                className={`grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center ${
                  isEven ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                <div className="reveal lg:col-span-6">
                  <span className="font-script text-7xl sm:text-8xl lg:text-9xl text-[var(--accent)] leading-none">
                    {p.n}
                  </span>
                  <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[var(--fg)] tracking-tight leading-tight">
                    {p.titulo}
                  </h2>
                  <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[var(--fg-soft)] leading-relaxed max-w-xl">
                    {p.descricao}
                  </p>
                  {p.cta && (
                    <a
                      href={whatsappLink(p.ctaMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-solid mt-7 sm:mt-8 text-sm"
                    >
                      {p.cta}
                    </a>
                  )}
                </div>
                <div className="reveal lg:col-span-6 relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--bg)] shadow-[var(--shadow-soft)] zoom-on-hover max-w-md w-full mx-auto lg:max-w-none">
                  {/* MOCK */}
                  <Image
                    src={p.imagem}
                    alt={p.titulo}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-[var(--brand-walnut)] text-[var(--brand-bone)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-10 py-20 sm:py-24 md:py-28 text-center reveal">
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl leading-tight">
            tudo pronto<br/>pra começar?
          </h2>
          <p className="mt-5 sm:mt-6 text-[var(--brand-cream)]/80 max-w-xl mx-auto">
            Manda a foto do seu pet pelo WhatsApp. A gente cuida do resto.
          </p>
          <a
            href={whatsappLink("Olá! Quero começar — vou mandar a foto do meu pet 🐾")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid btn-light mt-8 sm:mt-10 text-sm"
          >
            Mandar foto agora
          </a>
        </div>
      </section>
    </>
  );
}
