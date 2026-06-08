<div align="center">

# Eternize

**Site institucional + vitrine de portfólio para uma marca artesanal de retratos de pets pintados à mão sobre madeira natural.**

*Eternizando emoções com arte.*

[![Next.js](https://img.shields.io/badge/Next.js-16-000?style=flat&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-0055FF?style=flat&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-deploy-F38020?style=flat&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)

🌐 **No ar:** [eternize.art](https://eternize.art)

</div>

---

## Sobre o projeto

A Eternize é uma marca real de retratos personalizados: o cliente envia uma foto do pet e recebe uma peça pintada à mão sobre uma fatia de madeira pinus, com acabamento envernizado. O modelo de venda é totalmente conversacional — não há e-commerce. Toda transação acontece pelo WhatsApp.

Este repositório é o **site institucional**: vitrine, portfólio e ponte para o atendimento direto. O objetivo de UX é simples — apresentar a marca com calor humano, mostrar o trabalho com cuidado editorial e empurrar o usuário pra uma conversa qualificada no WhatsApp.

> Construído com Next.js 16 (App Router + Turbopack), TypeScript, Tailwind v4, Framer Motion e Lenis (smooth scroll). Export **100% estático** servido pela **Cloudflare Pages**, com uma única **Pages Function** para a calculadora de frete. Mobile-first, tema claro único respeitando a paleta da marca.

---

## Decisões de design

- **Vitrine, não e-commerce.** Sem carrinho, sem login, sem pagamento integrado. Cada CTA leva pra uma conversa pré-preenchida no WhatsApp. Reduz fricção e mantém o atendimento humano.
- **Estático + 1 função.** O site é `output: "export"` (HTML estático). A única peça server-side é a Pages Function `functions/api/frete.ts`, um proxy de cotação de frete que mantém o token fora do navegador. Custo zero no free tier da Cloudflare.
- **Sistema de design próprio.** Sem bibliotecas como shadcn, MUI ou Chakra — todos os componentes são feitos do zero pra preservar a identidade artesanal. Tokens semânticos (`--bg`, `--fg`, `--accent`) regem todo o sistema visual.
- **Tema claro único.** Paleta calma com `--brand-bone` (#FAF7F2) e `--brand-walnut` (#3D2817). Foco em destacar as obras, não competir com elas.
- **Smooth scroll com Lenis.** Rolagem suave em desktop e mobile, com respeito a `prefers-reduced-motion`. Navegação por âncora (botão "Valores" → seção de preços) centralizada no `SmoothScroll`, funcionando tanto na home quanto vindo de outras páginas.
- **Tipografia híbrida.** Dancing Script no logo, Caveat em headlines/citações emocionais, Inter no corpo. Self-hosted via `next/font` pra zero requests externos.
- **Performance e SEO.** Build estático (8 rotas pré-renderizadas), Open Graph configurado, favicon com o emblema da marca, Lighthouse alvo 90+.
- **Animações com propósito.** Framer Motion em microinterações (drawer mobile com stagger, lightbox com galeria de miniaturas, cards com tap feedback, lift on hover).
- **Acessibilidade.** Tap targets ≥ 44px no mobile, `aria-label` em ícones, modal com `role="dialog"`/`aria-modal`, fecha no Esc, body-scroll-lock, suporte a `prefers-reduced-motion`.

---

## Páginas

| Rota | Conteúdo |
|---|---|
| `/` | Home — hero com carrossel, processo em 5 passos, galeria preview, tabela de preços (3 cards no desktop, tabs no mobile), **calculadora de frete**, formas de pagamento, apresentação da artista, depoimentos, CTA final. Âncora `#tamanhos` (botão "Valores"). |
| `/portfolio` | Galeria filtrada por tamanho, cards clicáveis abrindo lightbox com ficha técnica e **galeria de miniaturas** (peça + foto em suporte). |
| `/processo` | Passo a passo detalhado, layout zigzag desktop, stack vertical mobile. |
| `/sobre` | Página pessoal da artista em 1ª pessoa, com pull quote em Caveat. |
| `/faq` | 4 categorias em accordion animado (produto, produção, pagamento/logística, garantia). |
| `/contato` | WhatsApp em destaque + Instagram + e-mail. |

---

## Cálculo de frete

A home tem uma calculadora (`components/FreteCalculator.tsx`) que consulta a **Pages Function** `functions/api/frete.ts` — um proxy para a API de cotação do **SuperFrete** (Correios PAC/SEDEX/Mini Envios). O token fica em variável de ambiente no servidor, nunca no cliente.

- Peso, dimensões da embalagem e CEP de origem ficam na própria Function (por tamanho de peça).
- Env vars de produção: `SUPERFRETE_TOKEN`, `SUPERFRETE_UA`. Detalhes em [`CONFIG.md`](./CONFIG.md) (seção 7).
- **Local:** a Function não roda no `next dev`. Para testar a calculadora localmente use `npx wrangler pages dev out` (com um `.dev.vars` contendo o token).

---

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack) — `output: "export"`
- **Linguagem**: TypeScript estrito
- **Estilo**: Tailwind CSS v4 com `@theme` API
- **Animações**: Framer Motion 12 + Lenis (smooth scroll)
- **Fontes**: Inter, Caveat, Dancing Script (auto-hospedadas via `next/font/google`)
- **Frete**: SuperFrete via Cloudflare Pages Function
- **Hospedagem**: Cloudflare Pages (free tier) — domínio `eternize.art`
- **E-mail**: `contato@eternize.art` via Cloudflare Email Routing (recebimento) + Brevo SMTP (envio com a marca)

---

## Estrutura

```
site/
├── app/                       # App Router — rotas
│   ├── layout.tsx             # root layout (fontes, metadata)
│   ├── globals.css            # tokens da marca + Tailwind
│   ├── icon.png / favicon.ico # emblema da marca
│   ├── page.tsx               # Home
│   ├── portfolio/page.tsx
│   ├── processo/page.tsx
│   ├── sobre/page.tsx
│   ├── faq/page.tsx
│   └── contato/page.tsx
├── functions/
│   └── api/frete.ts           # Pages Function — proxy de cotação (SuperFrete)
├── components/
│   ├── BrandLogo.tsx          # logo PNG responsiva
│   ├── Header.tsx             # nav desktop + drawer mobile animado
│   ├── Footer.tsx
│   ├── Hero.tsx, HeroSlider.tsx
│   ├── Section.tsx, SectionTitle.tsx
│   ├── PriceCard.tsx, PricingTabs.tsx
│   ├── FreteCalculator.tsx    # calculadora de frete (client)
│   ├── PortfolioGallery.tsx, FeaturedGrid.tsx
│   ├── PieceLightbox.tsx      # modal de detalhe + galeria de miniaturas
│   ├── Accordion.tsx          # FAQ
│   ├── SmoothScroll.tsx       # Lenis + scroll de âncora
│   ├── ScrollReveal.tsx, ScrollTopButton.tsx
│   └── WhatsAppButton.tsx     # CTA flutuante fixo
├── lib/
│   ├── config.ts              # WhatsApp, Instagram, e-mail, cidades
│   └── portfolio.ts           # peças, tamanhos, depoimentos
└── public/
    ├── brand/                 # SVGs e PNGs da marca
    └── images/                # fotos do portfólio e da artista
```

---

## Como rodar local

```bash
git clone https://github.com/tamotsutozaki/Eternize.git
cd Eternize
npm install
npm run dev          # http://localhost:3000
```

> A calculadora de frete depende da Pages Function, que **não** roda no `next dev`. Para testá-la, rode o build e sirva com o Wrangler:
> ```bash
> npm run build
> npx wrangler pages dev out   # http://localhost:8788 (precisa de .dev.vars com SUPERFRETE_TOKEN)
> ```

Outros scripts:

```bash
npm run build   # build estático (gera out/)
npm run lint    # ESLint + regras Next 16
```

---

## Deploy

Hospedado na **Cloudflare Pages**, build automático a cada push na `main`.

| Configuração | Valor |
|---|---|
| Build command | `npm run build` |
| Output directory | `out` |
| Env var | `NODE_VERSION=20` |
| Env vars (frete) | `SUPERFRETE_TOKEN`, `SUPERFRETE_UA` |

Domínio `eternize.art` apontado via nameservers Cloudflare. SSL automático.

---

## Tema único (claro)

Paleta bone/walnut/cream/caramel definida em `app/globals.css` via tokens semânticos. Sem dark mode — site editorial focado em destacar as obras.

```css
:root {
  --bg: var(--brand-bone);
  --fg: var(--brand-walnut);
  --accent: var(--brand-caramel);
  /* ... */
}
```

---

## Pendências de conteúdo

Itens ainda placeholder (marcados com `// MOCK` / `{/* MOCK */}` no código):

| Onde | O que falta |
|---|---|
| `lib/portfolio.ts` (`DEPOIMENTOS`) | substituir os depoimentos placeholder por reais (com autorização) |
| `app/sobre/page.tsx` | texto definitivo da artista (3 blocos + pull quote) |

WhatsApp, Instagram, e-mail, fotos do portfólio e dados de frete já são **reais**. Detalhamento completo em [`CONFIG.md`](./CONFIG.md).

---

## Roadmap

Funcionalidades fora do escopo do MVP, candidatas a próximas fases:

- [ ] Blog interno pra SEO (posts sobre cuidado da peça, presentes, retratos memoriais)
- [ ] Linha "Eternize VET" (linha B2B pra clínicas veterinárias)
- [ ] Variação de suporte além da bolacha de pinus (telas, mini quadros)
- [ ] Integração de pagamento (Mercado Pago / Stripe) sem perder o atendimento humano
- [ ] CMS leve (Sanity ou Notion) pra Isabella subir peças sem mexer no código
- [ ] Tradução EN/ES

---

## Sobre o desenvolvimento

Projeto solo, do briefing à entrega. Decisões de produto tomadas em conjunto com a artista (Isabella) — escopo, copy, identidade visual e prioridades de UX. Identidade visual já definida em manual de marca; o trabalho de código focou em traduzir essa identidade pra um produto digital coerente, performático e fácil de manter.

---

<div align="center">

**Eternize** · feita à mão, do focinho ao último fio de pelo.

</div>
