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
    nomePet: "Mel",
    ano: 2026,
    tamanho: "25cm",
    imagens: ["https://placedog.net/640/640?id=1"],
    descricao:
      "Composição sobre fundo de madeira natural, com acessório em laço azul-petróleo. Detalhamento de textura do pelo em camadas sucessivas.",
  },
  {
    id: "thor",
    nomePet: "Thor",
    ano: 2026,
    tamanho: "18cm",
    imagens: ["https://placedog.net/640/640?id=2"],
    descricao:
      "Retrato com fundo creme sólido e gravata borboleta. Encomenda comemorativa para o Dia dos Pais.",
  },
  {
    id: "luna",
    nomePet: "Luna",
    ano: 2026,
    tamanho: "14cm",
    imagens: ["https://placedog.net/640/640?id=3"],
    descricao:
      "Formato compacto para mesa, com composição floral discreta ao redor. Fundo em madeira natural.",
  },
  {
    id: "bento",
    nomePet: "Bento",
    ano: 2026,
    tamanho: "25cm",
    imagens: ["https://placedog.net/640/640?id=4"],
    descricao:
      "Retrato em primeiro plano sobre fundo verde-musgo profundo. Ênfase no contato visual do animal.",
  },
  {
    id: "nina",
    nomePet: "Nina",
    ano: 2026,
    tamanho: "18cm",
    imagens: ["https://placedog.net/640/640?id=5"],
    descricao:
      "Composição com laço rosa e elementos estrelados sobre madeira natural. Encomenda comemorativa.",
  },
  {
    id: "pipoca",
    nomePet: "Pipoca",
    ano: 2026,
    tamanho: "14cm",
    imagens: ["https://placedog.net/640/640?id=6"],
    descricao:
      "Formato reduzido, indicado para prateleira ou superfície de trabalho. Composição minimalista.",
  },
  {
    id: "bob-maya",
    nomePet: "Bob & Maya",
    ano: 2026,
    tamanho: "25cm",
    imagens: ["https://placedog.net/640/640?id=7"],
    descricao:
      "Dupla composição sobre fundo terracota. Encomenda dedicada a dois animais da mesma família.",
    multiplosPets: 2,
  },
  {
    id: "cacau",
    nomePet: "Cacau",
    ano: 2026,
    tamanho: "18cm",
    imagens: ["https://placedog.net/640/640?id=8"],
    descricao:
      "Peça memorial. Fundo bege com elemento simbólico discreto incorporado à composição.",
  },
  {
    id: "amora",
    nomePet: "Amora",
    ano: 2026,
    tamanho: "18cm",
    imagens: ["https://placedog.net/640/640?id=9"],
    descricao:
      "Composição com coroa em folha de ouro e fundo creme. Encomenda comemorativa de aniversário.",
  },
  {
    id: "biscoito",
    nomePet: "Biscoito",
    ano: 2026,
    tamanho: "14cm",
    imagens: ["https://placedog.net/640/640?id=10"],
    descricao:
      "Formato compacto sobre madeira natural, sem elementos decorativos adicionais. Foco na expressão.",
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
      "Cordão de algodão incluso",
      "Indicado para mesa ou prateleira",
    ],
  },
  {
    tamanho: "18cm",
    preco: 140,
    descricao: "Formato intermediário",
    detalhes: [
      "Até dois animais (acréscimo de R$ 80 por animal extra)",
      "Acabamento envernizado",
      "Acessórios e fundo personalizados inclusos",
      "Indicado para parede",
    ],
  },
  {
    tamanho: "25cm",
    preco: 190,
    descricao: "Formato destaque",
    detalhes: [
      "Até três animais (acréscimo de R$ 100 por animal extra)",
      "Acabamento envernizado premium",
      "Composição complexa: fundo, acessórios e elementos decorativos",
      "Peça principal de ambiente",
    ],
  },
];

// MOCK — depoimentos placeholder, substituir por reais com autorização dos clientes.
export const DEPOIMENTOS = [
  {
    nome: "Mariana Souza",
    pet: "Mel",
    cidade: "Indaiatuba/SP",
    texto:
      "O nível de fidelidade da peça surpreendeu toda a família. A Isabella conduziu o briefing com cuidado raro — cada detalhe foi discutido antes da execução. Recomendo sem reservas.",
  },
  {
    nome: "Rafael Lima",
    pet: "Thor",
    cidade: "Salto/SP",
    texto:
      "Encomendei como presente de aniversário. O acompanhamento durante a produção, com fotos das etapas intermediárias, fez diferença. Resultado final superou a expectativa.",
  },
  {
    nome: "Camila Ribeiro",
    pet: "Luna",
    cidade: "Itu/SP",
    texto:
      "Peça memorial executada com sensibilidade. A Isabella entendeu o peso emocional da encomenda e conduziu o processo com respeito. Hoje a obra é um marco na sala de casa.",
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
