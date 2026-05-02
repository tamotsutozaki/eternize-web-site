<div align="center">

# Eternize

**Site institucional + vitrine de portfólio para uma marca artesanal de retratos de pets pintados à mão sobre madeira natural.**

*Memórias que ficam.*

[![Next.js](https://img.shields.io/badge/Next.js-16-000?style=flat&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-0055FF?style=flat&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Vercel-deploy-000?style=flat&logo=vercel&logoColor=white)](https://vercel.com)

</div>

---

## Sobre o projeto

A Eternize é uma marca real de retratos personalizados: o cliente envia uma foto do pet e recebe uma peça pintada à mão sobre uma fatia de madeira pinus, com acabamento envernizado. O modelo de venda é totalmente conversacional — não há e-commerce. Toda transação acontece pelo WhatsApp.

Este repositório é o **site institucional**: vitrine, portfólio e ponte para o atendimento direto. O objetivo de UX é simples — apresentar a marca com calor humano, mostrar o trabalho com cuidado editorial e empurrar o usuário pra uma conversa qualificada no WhatsApp.

> Construído com Next.js 16 (App Router + Turbopack), TypeScript, Tailwind v4 e Framer Motion. 100% estático, mobile-first, com tema claro/escuro respeitando a paleta da marca.

---

## Decisões de design

- **Vitrine, não e-commerce.** Sem carrinho, sem login, sem pagamento integrado. Cada CTA leva pra uma conversa pré-preenchida no WhatsApp. Reduz fricção e mantém o atendimento humano.
- **Sistema de design próprio.** Sem bibliotecas como shadcn, MUI ou Chakra — todos os componentes são feitos do zero pra preservar a identidade artesanal. Tokens semânticos (`--bg`, `--fg`, `--accent`) trocam automaticamente entre os temas.
- **Tema claro e escuro com a mesma paleta.** O escuro não é preto puro — usa `--brand-ink` (#2A1E14, marrom muito profundo). Mantém o calor da marca.
- **Tipografia híbrida.** Dancing Script no logo, Caveat em headlines/citações emocionais, Inter no corpo. Self-hosted via `next/font` pra zero requests externos.
- **Performance e SEO.** Build 100% estático (9 rotas pré-renderizadas), `next/image` em tudo, Open Graph configurado, Lighthouse alvo 90+ em todas as métricas.
- **Animações com propósito.** Framer Motion em microinterações (drawer mobile com stagger, lightbox com spring, cards com tap feedback) — reforçam a sensação de produto cuidado, sem custar performance.
- **Acessibilidade.** Tap targets ≥ 44px no mobile, `aria-label` em ícones, modal com `role="dialog"`/`aria-modal`, fecha no Esc, body-scroll-lock, suporte a `prefers-reduced-motion`.

---

## Páginas

| Rota | Conteúdo |
|---|---|
| `/` | Home — hero, processo em 5 passos, galeria preview, tabela de preços (3 cards no desktop, tabs no mobile), apresentação da artista, depoimentos, CTA final |
| `/portfolio` | Galeria filtrada por tamanho, cards clicáveis abrindo lightbox com detalhe da peça |
| `/como-funciona` | Passo a passo detalhado, layout zigzag desktop, stack vertical mobile |
| `/sobre` | Página pessoal da artista em 1ª pessoa, com pull quote em Caveat |
| `/faq` | 4 categorias × 15 perguntas em accordion animado |
| `/contato` | WhatsApp em destaque + Instagram + e-mail |

---

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Linguagem**: TypeScript estrito
- **Estilo**: Tailwind CSS v4 com `@theme` API e `@custom-variant` para tema escuro via atributo
- **Animações**: Framer Motion 12
- **Fontes**: Inter, Caveat, Dancing Script (auto-hospedadas via `next/font/google`)
- **Imagens**: `next/image` com lazy loading + remote patterns
- **Hospedagem**: Vercel (plano gratuito)

---

## Estrutura

```
site/
├── app/                       # App Router — rotas
│   ├── layout.tsx             # root layout (fontes, metadata, providers)
│   ├── globals.css            # tokens da marca + tema claro/escuro + Tailwind
│   ├── page.tsx               # Home
│   ├── portfolio/page.tsx
│   ├── como-funciona/page.tsx
│   ├── sobre/page.tsx
│   ├── faq/page.tsx
│   └── contato/page.tsx
├── components/
│   ├── BrandLogo.tsx          # PNG responsiva, troca por tema
│   ├── EternizeLogo.tsx       # variante SVG inline (currentColor)
│   ├── Header.tsx             # nav desktop + drawer mobile animado
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Section.tsx, SectionTitle.tsx
│   ├── PriceCard.tsx, PricingTabs.tsx
│   ├── PortfolioGallery.tsx, FeaturedGrid.tsx
│   ├── PieceLightbox.tsx      # modal de detalhe da peça
│   ├── Accordion.tsx          # FAQ
│   ├── ThemeProvider.tsx, ThemeToggle.tsx
│   ├── ScrollReveal.tsx       # IntersectionObserver utility
│   ├── ScrollTopButton.tsx
│   └── WhatsAppButton.tsx     # CTA flutuante fixo
├── lib/
│   ├── config.ts              # WhatsApp, Instagram, e-mail (placeholders)
│   └── portfolio.ts           # dados das peças, tamanhos, depoimentos
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
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

Outros scripts:

```bash
npm run build   # build de produção
npm start       # rodar build local
npm run lint    # ESLint + regras Next 16
```

---

## Tema claro e escuro

Detecta `prefers-color-scheme` do sistema, salva preferência em `localStorage` e tem toggle no header (desktop) e no drawer (mobile). Anti-flash via script inline no `<head>` evita FOUC.

Implementação em `app/globals.css` usando Tailwind v4:

```css
@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));

:root {
  --bg: var(--brand-bone);
  --fg: var(--brand-walnut);
  /* ... */
}

[data-theme="dark"] {
  --bg: var(--brand-ink);
  --fg: var(--brand-bone);
  /* ... */
}
```

---

## Personalização (placeholders)

Antes de subir pra produção, trocar os mocks. Tudo está marcado no código com `// MOCK` ou `{/* MOCK */}` — buscar essa string para encontrar todos.

| Onde | O que trocar |
|---|---|
| `lib/config.ts` | número WhatsApp, Instagram handle, e-mail |
| `lib/portfolio.ts` | trocar URLs `placedog.net` por fotos locais em `/public/images/portfolio/` |
| `app/sobre/page.tsx` | textos da artista (3 blocos + pull quote) |
| `app/page.tsx` | citação curta no preview da seção Sobre |
| `lib/portfolio.ts` (DEPOIMENTOS) | substituir os 5 depoimentos placeholder por reais |
| `components/Hero.tsx` | trocar imagem placedog por foto real da peça destaque |

Detalhamento completo em [`CONFIG.md`](./CONFIG.md).

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
