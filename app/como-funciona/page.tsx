import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { whatsappLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Processo",
  description:
    "Do envio da fotografia à entrega da peça finalizada. Etapas detalhadas do processo de encomenda na Eternize.",
};

const PASSOS = [
  {
    n: "01",
    titulo: "Envio da fotografia",
    descricao:
      "O atendimento começa com o envio de uma fotografia do pet pelo WhatsApp. Recomenda-se imagem em luz natural, com o animal em foco e na altura do olhar. Resoluções acima de 2.000 pixels facilitam a captação de detalhes do pelo e da expressão. Fundo da foto não influencia — a composição é recriada na pintura.",
    cta: "Iniciar atendimento",
    ctaMessage: "Olá! Gostaria de iniciar o atendimento para uma encomenda.",
    imagem: "https://placedog.net/700/900?id=20",
  },
  {
    n: "02",
    titulo: "Briefing e orçamento",
    descricao:
      "Definimos juntos as características da peça: dimensão (14, 18 ou 25 cm), tratamento do fundo (madeira natural ou cor sólida), acessórios opcionais para o pet (lenço, gravata, óculos, coroa) e elementos decorativos (flora, estrelas, motivos pessoais). Encomendas com múltiplos pets são possíveis nos formatos 18 e 25 cm.",
    imagem: "https://placedog.net/700/900?id=21",
  },
  {
    n: "03",
    titulo: "Execução da pintura",
    descricao:
      "Após confirmação do pagamento, a peça entra na fila de produção. O prazo padrão é de sete a quinze dias úteis, executado em estúdio próprio. A pintura é feita em tinta acrílica artística profissional, aplicada em camadas sobre a fatia de pinus previamente preparada.",
    imagem: "https://placedog.net/700/900?id=22",
  },
  {
    n: "04",
    titulo: "Aprovação prévia",
    descricao:
      "Antes do envernizamento final, envio fotografias da peça em alta resolução para sua avaliação. Ajustes pontuais — tom de fundo, posicionamento de acessório, refinamento de traço — são incorporados nesta etapa, sem custo adicional. O acabamento só é aplicado após sua aprovação.",
    imagem: "https://placedog.net/700/900?id=23",
  },
  {
    n: "05",
    titulo: "Embalagem e envio",
    descricao:
      "Entrega presencial sem custo em Indaiatuba e Salto. Para demais localidades, despacho via Correios ou transportadora, com frete calculado pelo CEP. A peça é embalada em camadas protetoras de espuma e papelão duplo, acompanhada do cordão de algodão natural pronto para fixação.",
    imagem: "https://placedog.net/700/900?id=24",
  },
];

export default function ComoFuncionaPage() {
  return (
    <>
      <Section variant="bone">
        <SectionTitle
          eyebrow="Processo"
          title={<>do envio da foto<br/>à entrega da peça</>}
          subtitle="Cinco etapas conduzidas individualmente pela artista. Atendimento conversacional, sem intermediários, com acompanhamento da concepção à finalização."
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
                  <span className="font-serif text-7xl sm:text-8xl lg:text-9xl text-[var(--accent)] leading-none">
                    {p.n}
                  </span>
                  <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--fg)] tracking-tight leading-tight">
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
                      className="btn-solid mt-7 sm:mt-8"
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
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-[var(--brand-caramel)] font-medium">
            Próximo passo
          </span>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl md:text-6xl leading-tight">
            Pronto para começar?
          </h2>
          <p className="mt-5 sm:mt-6 text-[var(--brand-cream)]/80 max-w-xl mx-auto">
            Envie a fotografia do pet pelo WhatsApp. Retorno o orçamento
            em até 24 horas úteis.
          </p>
          <a
            href={whatsappLink("Olá! Gostaria de iniciar uma encomenda.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid btn-light mt-8 sm:mt-10"
          >
            Enviar fotografia
          </a>
        </div>
      </section>
    </>
  );
}
