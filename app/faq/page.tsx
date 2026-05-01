import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import FAQAccordion, { FaqCategoria } from "@/components/Accordion";
import { whatsappLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description:
    "Tudo o que você precisa saber sobre os retratos de pet da Eternize: produto, pedido, pagamento, entrega e garantia.",
};

const FAQS: FaqCategoria[] = [
  {
    titulo: "Sobre o produto",
    items: [
      {
        q: "Que tipo de madeira é usada?",
        a: "Fatias de madeira pinus (bolacha de tronco) selecionadas, tratadas e lixadas à mão. Cada peça tem uma textura única — nó, veio, formato — porque é madeira de verdade, não MDF.",
      },
      {
        q: "Quanto tempo a peça dura?",
        a: "Com cuidado básico (longe de umidade direta e luz solar intensa), dura por décadas. O verniz protege a tinta e a madeira contra desgaste do tempo.",
      },
      {
        q: "Posso pendurar em ambiente externo?",
        a: "Não recomendamos. A peça é feita pra ambiente interno. Sol direto e chuva afetam tinta e madeira ao longo do tempo.",
      },
      {
        q: "O verniz protege contra o quê?",
        a: "Contra umidade leve, poeira, oleosidade do toque e amarelamento. É o que garante que a peça envelheça bonito.",
      },
    ],
  },
  {
    titulo: "Sobre o pedido",
    items: [
      {
        q: "Como faço pra pedir?",
        a: "Manda mensagem no WhatsApp com a foto do seu pet. Eu respondo com sugestões de tamanho, fundo e detalhes. Confirmou? PIX e a pintura começa.",
      },
      {
        q: "Quanto tempo leva?",
        a: "De 7 a 15 dias úteis após confirmação do pagamento. Em períodos de alta demanda (Natal, Dia das Mães), o prazo pode ser maior — sempre confirmamos antes.",
      },
      {
        q: "Posso colocar mais de um pet na mesma peça?",
        a: "Sim, nos tamanhos 18cm (R$ 80 por pet adicional) e 25cm (R$ 100 por pet adicional). No 14cm não dá — o espaço não comporta dois pets bem retratados.",
      },
      {
        q: "Posso escolher o fundo?",
        a: "Pode. Madeira natural é o padrão e fica lindo. Mas você pode pedir cor sólida (qualquer uma) — sem custo extra. Elementos como flores, folhas, estrelas e acessórios no pet (lenço, gravata, óculos, coroa) também são gratuitos.",
      },
      {
        q: "Que tipo de foto preciso mandar?",
        a: "Quanto melhor a foto, melhor o retrato. Luz natural (de dia, perto de janela), pet em foco, no nível do olhar dele. Pode ser corpo inteiro ou close. Fundo bagunçado não importa — recompomos na pintura.",
      },
    ],
  },
  {
    titulo: "Pagamento e entrega",
    items: [
      {
        q: "Como pago?",
        a: "PIX é o preferido (5% de desconto à vista). Também aceitamos cartão de crédito em até 3x sem juros (a definir taxas).",
      },
      {
        q: "Tem desconto?",
        a: "Sim — 5% no PIX à vista. E descontos progressivos pra quem encomenda mais de uma peça (ex: presente pra família inteira).",
      },
      {
        q: "Onde vocês entregam?",
        a: "A entrega presencial gratuita é feita apenas em Indaiatuba/SP e Salto/SP. Para qualquer outra cidade, o pedido é enviado pelos Correios ou transportadora, e o frete fica por conta do cliente.",
      },
      {
        q: "Quanto custa o frete?",
        a: "Para cidades fora de Indaiatuba e Salto, o frete é calculado pelo CEP no momento da encomenda — você recebe o valor antes de fechar o pedido. Embalagem reforçada já vai incluída sem custo extra.",
      },
    ],
  },
  {
    titulo: "Garantia",
    items: [
      {
        q: "E se eu não gostar?",
        a: "Antes de envernizar, a gente manda foto da peça quase pronta. Se algum ajuste for necessário, fazemos sem custo. Quando você recebe, é porque já aprovou.",
      },
      {
        q: "Posso pedir alterações depois de pronto?",
        a: "Pequenos ajustes pontuais a gente discute caso a caso. Pra mudanças grandes (cor de fundo, troca de pet), seria uma nova peça.",
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
          subtitle="As dúvidas que mais aparecem na nossa caixa de entrada. Se a sua não está aqui, fala com a gente no WhatsApp."
        />

        <div className="mt-16 max-w-3xl">
          <FAQAccordion categorias={FAQS} />
        </div>
      </Section>

      <section className="bg-[var(--bg-alt)] border-t border-[var(--border)]">
        <div className="mx-auto max-w-3xl px-5 md:px-10 py-20 text-center reveal">
          <h2 className="font-script text-4xl md:text-5xl">
            ainda tem dúvida?
          </h2>
          <p className="mt-4 text-[var(--fg-soft)]">
            Me chama direto no WhatsApp.
          </p>
          <a
            href={whatsappLink("Olá! Tenho uma dúvida sobre os retratos.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-[var(--bg-deep)] text-[var(--bg-deep-text)] px-7 py-3.5 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            Tirar dúvida no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
