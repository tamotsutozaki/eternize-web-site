export type Tamanho = "14cm" | "18cm" | "25cm";

export type Peca = {
  id: string;
  nomePet: string;
  ano?: number;
  tamanho: Tamanho;
  imagens: string[];
  descricao?: string;
  multiplosPets?: number;
};

// MOCK — substituir por imagens reais das peças entregues.
export const PORTFOLIO: Peca[] = [
  {
    id: "mel",
    nomePet: "Aurora",
    ano: 2026,
    tamanho: "25cm",
    imagens: ["/images/portfolio/aurora-full.jpg"],
    descricao:
      "Composição sobre fundo de madeira natural, com círculo em verde esmeralda, margaridas e ramos de folhas. A auréola, incorporada a pedido da tutora, dá significado à composição final — em homenagem à pet, que já havia partido.",
  },
  {
    id: "thor",
    nomePet: "Shory",
    ano: 2026,
    tamanho: "18cm",
    imagens: ["/images/portfolio/shory-full.jpg"],
    descricao:
      "Retrato com fundo completamente natural, composição realizada por pequenas flores coloridas. Encomenda comemorativa para o Dia dos Namorados.",
  },
  {
    id: "luna",
    nomePet: "Odin",
    ano: 2026,
    tamanho: "14cm",
    imagens: ["/images/portfolio/odin-full.jpg"],
    descricao:
      "Formato compacto para mesa, com composição minimalista de círculo verde escuro.",
  },
  {
    id: "bento",
    nomePet: "Tunico e Magoo",
    ano: 2026,
    tamanho: "18cm",
    imagens: ["/images/portfolio/magoo-tunico-full.jpg"],
    descricao:
      "Retrato duplo com composição em círculo lilás e acessórios em ambos os pets, trazendo um toque de diversão ao resultado final.",
    multiplosPets: 2,
  },
];

export const TAMANHOS: { tamanho: Tamanho; preco: number; descricao: string; detalhes: string[] }[] = [
  {
    tamanho: "14cm",
    preco: 110,
    descricao: "Formato compacto",
    detalhes: [
      "Um animal por peça",
      "Acabamento envernizado",
      "Acessórios e fundo personalizados inclusos",
      "Cordão de algodão ou suporte acrílico",
      "Indicado para mesa ou prateleira",
    ],
  },
  {
    tamanho: "18cm",
    preco: 140,
    descricao: "Formato intermediário",
    detalhes: [
      "Até três animais (acréscimo de R$ 80 por animal extra)",
      "Acabamento envernizado",
      "Acessórios e fundo personalizados inclusos",
      "Inclusão de elementos decorativos",
      "Cordão de algodão ou suporte acrílico",
      "Indicado para parede ou mesa/prateleira",
    ],
  },
  {
    tamanho: "25cm",
    preco: 190,
    descricao: "Formato destaque",
    detalhes: [
      "Até cinco animais (acréscimo de R$ 100 por animal extra)",
      "Acabamento envernizado",
      "Acessórios e fundo personalizados inclusos",
      "Inclusão de elementos decorativos",
      "Cordão de algodão",
      "Peça principal de ambiente",
    ],
  },
];

// MOCK — depoimentos placeholder, substituir por reais com autorização dos clientes.
export const DEPOIMENTOS = [
  {
    nome: "Ana Maísa",
    pet: "Aurora",
    cidade: "Cerquilho/SP",
    texto:
      "Nossa Aurora partiu recentemente, e quando encontramos a Isa tivemos certeza que poderíamos confiar para eternizar nosso grande amor. Recomendo de olhos fechados.",
  },
  {
    nome: "Rafael Lima",
    pet: "Luna",
    cidade: "Salto/SP",
    texto:
      "Encomendei como presente de aniversário para minha esposa, e ela ficou totalmente emocionada com a riqueza de detalhes e com o carinho para pintar nossa Luna. Resultado final superou completamente a expectativa, recomendo!",
  },
  {
    nome: "Gabriela Pozebom",
    pet: "Tunico e Magoo",
    cidade: "Indaiatuba/SP",
    texto:
      "Quanta delicadeza! A Isa conseguiu conduzir a pintura dos nossos animais da maneira mais linda possível, não tem quem venha em casa e não elogie! A melhor decoração de todas!",
  },
  {
    nome: "Felipe Andrade",
    pet: "Bento",
    cidade: "Campinas/SP",
    texto:
      "A embalagem chegou íntegra mesmo após longo trajeto pelos Correios. Trabalho de altíssimo padrão. Já encomendei outras duas peças para presente.",
  },
  {
    nome: "Larissa Almeida",
    pet: "Bob & Maya",
    cidade: "Indaiatuba/SP",
    texto:
      "Composição com dois animais resolvida com elegância. Cada pet ficou identificável em sua expressão particular — algo difícil em retratos múltiplos.",
  },
];
