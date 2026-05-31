import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import FAQAccordion, { FaqCategoria } from "@/components/Accordion";
import { whatsappLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description:
    "Esclarecimentos sobre produto, processo, pagamento, entrega e garantia das peças produzidas pela Eternize.",
};

const FAQS: FaqCategoria[] = [
  {
    titulo: "Produto e materiais",
    items: [
      {
        q: "Qual madeira é utilizada como suporte?",
        a: "Fatias naturais de pinus, selecionadas individualmente, lixadas e tratadas antes da pintura. Cada peça apresenta textura, nós e veios únicos — característica intencional do suporte, não um defeito.",
      },
      {
        q: "Qual a durabilidade esperada da obra?",
        a: "Com conservação adequada — ambiente interno, distante de fontes de umidade direta e luz solar incidente — a peça mantém integridade por décadas. O acabamento envernizado oferece proteção contra desgaste físico-químico do tempo.",
      },
      {
        q: "A peça pode ser exposta em ambiente externo?",
        a: "Não recomendado. O conjunto madeira + tinta acrílica + verniz é dimensionado para ambientes internos. Exposição direta a sol, chuva ou variações bruscas de umidade compromete a integridade da obra.",
      },
      {
        q: "Qual a função do verniz aplicado?",
        a: "Proteção contra umidade leve, deposição de poeira, oleosidade do toque manual e amarelamento por oxidação. É um verniz de base aquosa, atóxico após cura completa, sem alteração cromática da pintura.",
      },
    ],
  },
  {
    titulo: "Encomenda e produção",
    items: [
      {
        q: "Como iniciar uma encomenda?",
        a: "Envio inicial da fotografia do pet pelo WhatsApp. Após análise da imagem, retorno orçamento detalhado em até 24 horas úteis, com sugestões de dimensão, composição e prazo. Confirmação via PIX dá início à produção.",
      },
      {
        q: "Qual o prazo de execução?",
        a: "Sete a quinze dias úteis a partir da confirmação do pagamento. Em períodos de alta demanda (Natal, Dia das Mães, Dia dos Pais), o prazo pode ser estendido — sempre comunicado previamente.",
      },
      {
        q: "É possível retratar mais de um pet na mesma peça?",
        a: "Sim, nos formatos 18 cm (acréscimo de R$ 80 por pet adicional) e 25 cm (acréscimo de R$ 100 por pet adicional). O formato 14 cm é dedicado a um único animal, em função da área útil de composição.",
      },
      {
        q: "É possível escolher o fundo da peça?",
        a: "Sim. Madeira natural é o tratamento padrão. Cores sólidas e composições com elementos decorativos (flores, estrelas, auréola em caso de pets que já partiram) e acessórios no pet (lenço, gravata, óculos, coroa) estão inclusos no valor base, sem custo adicional.",
      },
      {
        q: "Que tipo de fotografia obtém melhor resultado?",
        a: "Imagem em luz natural (próximo a janelas, durante o dia), com o pet em foco e na altura do olhar. Resolução acima de 2.000 pixels é ideal. O fundo da foto não influencia o resultado — a composição é recriada integralmente na pintura.",
      },
    ],
  },
  {
    titulo: "Pagamento e logística",
    items: [
      {
        q: "Quais formas de pagamento são aceitas?",
        a: "PIX em 2x (50% para iniciar a peça + 50% na entrega), PIX à vista com 5% de desconto, ou cartão de crédito em até 12x com juros das parcelas por conta do cliente.",
      },
      {
        q: "Há desconto para múltiplas peças?",
        a: "Sim. Encomendas com duas ou mais peças no mesmo pedido recebem desconto progressivo, calculado caso a caso.",
      },
      {
        q: "Para quais localidades vocês entregam?",
        a: "Entrega presencial sem custo em Indaiatuba/SP e Salto/SP. Demais localidades: envio via Correios ou transportadora, com frete por conta do cliente.",
      },
      {
        q: "Como é calculado o frete?",
        a: "Para localidades fora da área de entrega presencial, o frete é calculado pelo CEP no momento do orçamento. Embalagem reforçada já está inclusa, sem custo adicional.",
      },
    ],
  },
  {
    titulo: "Garantia e ajustes",
    items: [
      {
        q: "E se o resultado não corresponder à expectativa?",
        a: "Antes do envernizamento final, envio fotografias em alta resolução para aprovação. Ajustes pontuais — tom de fundo, posicionamento de elementos, refinamento de traço — são incorporados sem custo. A finalização só ocorre após aprovação explícita.",
      },
      {
        q: "É possível solicitar alterações após a entrega?",
        a: "Ajustes menores são avaliados individualmente. Alterações estruturais (mudança de fundo, troca de pet retratado) configuram nova encomenda, com novo orçamento.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Section variant="bone">
        <SectionTitle
          eyebrow="FAQ"
          title="perguntas frequentes"
          subtitle="Esclarecimentos sobre produto, processo, logística e garantia. Para dúvidas específicas não cobertas aqui, atendimento direto via WhatsApp."
        />

        <div className="mt-12 sm:mt-16 max-w-3xl">
          <FAQAccordion categorias={FAQS} />
        </div>
      </Section>

      <section className="bg-[var(--bg-alt)] border-t border-[var(--border)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-10 py-16 sm:py-20 text-center reveal">
          <h2 className="font-serif text-4xl sm:text-5xl">
            Dúvida não respondida?
          </h2>
          <p className="mt-4 text-[var(--fg-soft)]">
            Envio direto para o WhatsApp do estúdio.
          </p>
          <a
            href={whatsappLink("Olá! Tenho uma dúvida sobre os retratos.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid mt-7 sm:mt-8 w-full sm:w-auto"
          >
            Falar com a artista
          </a>
        </div>
      </section>
    </>
  );
}
