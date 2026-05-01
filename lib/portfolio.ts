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

// MOCK — placedog usado como placeholder. Substituir por fotos reais
// das peças entregues.
export const PORTFOLIO: Peca[] = [
  {
    id: "mel",
    nomePet: "Mel",
    ano: 2026,
    tamanho: "25cm",
    imagens: ["https://placedog.net/640/640?id=1"], // MOCK
    descricao:
      "Retrato em destaque na sala. Fundo madeira natural, lacinho azul.",
  },
  {
    id: "thor",
    nomePet: "Thor",
    ano: 2026,
    tamanho: "18cm",
    imagens: ["https://placedog.net/640/640?id=2"], // MOCK
    descricao: "Fundo creme com gravata borboleta. Presente do Dia dos Pais.",
  },
  {
    id: "luna",
    nomePet: "Luna",
    ano: 2026,
    tamanho: "14cm",
    imagens: ["https://placedog.net/640/640?id=3"], // MOCK
    descricao: "Versão mesa, com flores miúdas em volta.",
  },
  {
    id: "bento",
    nomePet: "Bento",
    ano: 2026,
    tamanho: "25cm",
    imagens: ["https://placedog.net/640/640?id=4"], // MOCK
    descricao: "Olhar atento. Fundo verde-musgo profundo.",
  },
  {
    id: "nina",
    nomePet: "Nina",
    ano: 2026,
    tamanho: "18cm",
    imagens: ["https://placedog.net/640/640?id=5"], // MOCK
    descricao: "Lacinho rosa, fundo madeira natural com estrelas pequenas.",
  },
  {
    id: "pipoca",
    nomePet: "Pipoca",
    ano: 2026,
    tamanho: "14cm",
    imagens: ["https://placedog.net/640/640?id=6"], // MOCK
    descricao: "Mini retrato pra prateleira do escritório.",
  },
  {
    id: "bob-maya",
    nomePet: "Bob & Maya",
    ano: 2026,
    tamanho: "25cm",
    imagens: ["https://placedog.net/640/640?id=7"], // MOCK
    descricao: "Os dois irmãos juntos. Fundo terracota.",
    multiplosPets: 2,
  },
  {
    id: "cacau",
    nomePet: "Cacau",
    ano: 2026,
    tamanho: "18cm",
    imagens: ["https://placedog.net/640/640?id=8"], // MOCK
    descricao: "Peça memorial. Fundo bege com coração discreto.",
  },
  {
    id: "amora",
    nomePet: "Amora",
    ano: 2026,
    tamanho: "18cm",
    imagens: ["https://placedog.net/640/640?id=9"], // MOCK
    descricao: "Coroa dourada e fundo creme, presente de aniversário.",
  },
  {
    id: "biscoito",
    nomePet: "Biscoito",
    ano: 2026,
    tamanho: "14cm",
    imagens: ["https://placedog.net/640/640?id=10"], // MOCK
    descricao: "Versão prateleira, fundo madeira sem detalhes extras.",
  },
];

export const TAMANHOS: { tamanho: Tamanho; preco: number; descricao: string; detalhes: string[] }[] = [
  {
    tamanho: "14cm",
    preco: 110,
    descricao: "Mesa, prateleira, presente compacto",
    detalhes: ["1 pet por peça", "Acabamento envernizado", "Cordão de algodão"],
  },
  {
    tamanho: "18cm",
    preco: 140,
    descricao: "Parede, presente clássico",
    detalhes: [
      "1 pet ou +1 (R$ 80 por pet extra)",
      "Acabamento envernizado",
      "Acessórios e fundo personalizáveis",
    ],
  },
  {
    tamanho: "25cm",
    preco: 190,
    descricao: "Destaque na sala, peça principal",
    detalhes: [
      "1 pet ou +1 (R$ 100 por pet extra)",
      "Acabamento envernizado premium",
      "Fundo + acessórios + elementos decorativos",
    ],
  },
];

// MOCK — depoimentos placeholder, trocar por reais.
export const DEPOIMENTOS = [
  {
    nome: "Mariana Souza",
    pet: "Mel",
    cidade: "Indaiatuba/SP",
    texto:
      "A semelhança é assustadora. Minha mãe chorou quando abriu o pacote. Cada detalhe parece ter sido olhado com carinho.",
  },
  {
    nome: "Rafael Lima",
    pet: "Thor",
    cidade: "Salto/SP",
    texto:
      "Pedi pra presentear minha esposa e foi o melhor presente que já dei. Atendimento super atencioso, mostrou cada etapa.",
  },
  {
    nome: "Camila Ribeiro",
    pet: "Luna",
    cidade: "Itu/SP",
    texto:
      "A Luna me deixou ano passado. Ter um retrato dela na sala fez muita diferença pra família. Ficou exatamente como ela era.",
  },
  {
    nome: "Felipe Andrade",
    pet: "Bento",
    cidade: "Campinas/SP",
    texto:
      "A peça chegou super bem embalada e o trabalho é de outro nível. Já encomendei mais duas pra dar de Natal.",
  },
  {
    nome: "Larissa Almeida",
    pet: "Bob & Maya",
    cidade: "Indaiatuba/SP",
    texto:
      "Os dois juntos numa peça só ficou lindo. Cada um com sua personalidade — atendimento entende mesmo de bicho.",
  },
];
