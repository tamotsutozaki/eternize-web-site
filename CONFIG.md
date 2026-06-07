# Eternize — Configuração e Placeholders

Tudo que precisa ser trocado **antes de subir pra produção**. Cada item está marcado no código com comentário `// MOCK` ou `{/* MOCK */}` pra fácil localização (busque por "MOCK" no projeto).

---

## 1. Dados de contato (CRÍTICO)

Arquivo: `lib/config.ts`

| Placeholder | Valor atual (MOCK) | Onde aparece |
|---|---|---|
| `whatsappNumber` | `5519999999999` | Botão flutuante, todos os CTAs, links de encomenda |
| `instagramHandle` | `eternize.art` | Footer, página /contato |
| `instagramUrl` | `https://instagram.com/eternize.art` | Footer, página /contato |
| `email` | `contato@eternize.art` | Footer, página /contato |

> **Importante:** o número de WhatsApp deve estar no formato internacional **sem `+` ou espaços**, ex: `5519988887777`.

---

## 2. Imagens placeholder (TROCAR ANTES DE LANÇAR)

### 2.1 Portfólio
- Arquivo: `lib/portfolio.ts`
- Hoje usa `https://placedog.net/640/640?id=N` em todos os 10 itens.
- Substituir cada `imagens: ["..."]` por caminho local em `/public/images/portfolio/<slug>.jpg` (recomendado) ou URL Cloudinary.
- Aspecto recomendado: **1:1 (quadrado)**, **mínimo 800x800px**, JPG otimizado (~150KB).

### 2.2 Foto da Isabella
- Arquivos: `app/page.tsx` (preview Sobre), `app/sobre/page.tsx` (hero).
- Hoje usa `https://randomuser.me/api/portraits/women/44.jpg` (placeholder de pessoa).
- Substituir por foto real da Isabella pintando ou em estúdio. Aspecto recomendado: **4:5 retrato**, **mínimo 800x1000px**.
- Salvar em `/public/images/sobre/isabella.jpg`.

### 2.3 Hero da home
- Arquivo: `components/Hero.tsx`
- Foto à direita do hero — hoje placedog. Trocar por foto destaque de uma peça pronta sobre fundo simples.

### 2.4 Como Funciona
- Arquivo: `app/como-funciona/page.tsx`
- 5 imagens, uma por passo. Trocar cada uma por foto contextual (foto sendo escolhida, conversa, Isabella pintando, peça quase pronta, peça embalada).

### 2.5 OG/Social image
- Arquivo: `app/layout.tsx`
- Hoje usa `/brand/eternize-cafe.png`. Considerar criar imagem específica 1200x630px com peça em destaque + logo.

---

## 3. Textos placeholder (REVISAR COM ISABELLA)

| Local | O que tem agora | O que precisa |
|---|---|---|
| `/sobre` — 3 parágrafos | Texto genérico marcado `MOCK` | Texto real da Isabella em primeira pessoa |
| `/sobre` — pull quote | Texto sugerido do briefing | Confirmar ou ajustar com Isabella |
| `/` — preview Sobre | Citação curta de 2 linhas | Confirmar com Isabella |
| `lib/portfolio.ts` — `descricao` de cada peça | Inventado | Trocar pelas histórias reais conforme entregas |
| `lib/portfolio.ts` — `DEPOIMENTOS` | 5 depoimentos inventados | Substituir por reais (com permissão dos clientes) |

---

## 4. Tracking (FASE PÓS-LANÇAMENTO)

Não há código de tracking instalado. Quando os IDs estiverem prontos:

- **Google Analytics 4** — ID a fornecer (`G-XXXXXXXXXX`).
- **Meta Pixel** — ID a fornecer.
- **Google Search Console** — meta tag de verificação.

Sugerido: usar `next/script` no `app/layout.tsx` com `strategy="afterInteractive"`.

---

## 5. Domínio e Vercel

- Domínio: `eternize.art` (já comprado).
- Vercel: criar projeto e conectar ao repo.
- Configurar redirect `www → não-www` (ou contrário).
- HTTPS automático Vercel.

---

## 6. Logos disponíveis

Em `/public/brand/`:

- `eternize-logo.png` — logo oficial (silhueta + script Eternize). Usada no Header, Footer e OG.
- `logo.svg`, `wordmark.svg`, `logo-mark.svg` — versões SVG monocromáticas alternativas (usam `currentColor`).

> O componente `<BrandLogo />` carrega `/brand/eternize-logo.png`. Para trocar a logo, basta substituir esse arquivo mantendo o mesmo nome.

---

## 7. Cálculo de frete (SuperFrete)

A home tem uma calculadora de frete (`components/FreteCalculator.tsx`) que chama a
Pages Function `functions/api/frete.ts`. A Function é um proxy que guarda o token
no servidor (Cloudflare), nunca no navegador.

> SuperFrete escolhido por usar **token pessoal simples** (sem OAuth/refresh, ao
> contrário do Melhor Envio). Grátis para cotação; só paga ao comprar etiqueta.

### 7.1 Conta + token
1. Criar conta grátis em **superfrete.com**.
2. Completar perfil (CPF/CNPJ, endereço de origem).
3. Painel → **Configurações / Integração → Token de API** → gerar e copiar o token.

### 7.2 Variáveis de ambiente (Cloudflare Pages → Settings → Environment variables, Production)
| Variável | Valor |
|---|---|
| `SUPERFRETE_TOKEN` | token gerado (obrigatório) |
| `SUPERFRETE_UA` | `Eternize contato@eternize.art` |
| `FRETE_FROM_CEP` | CEP de origem (opcional; senão usa o do código) |
| `SUPERFRETE_BASE` | só pra testar em sandbox: `https://sandbox.superfrete.com` |

Após adicionar/alterar env vars, **fazer um novo deploy** (push ou "Retry deployment")
pra Function enxergar os valores.

### 7.3 Dados físicos (CRÍTICO — hoje são MOCK)
Em `functions/api/frete.ts`:
- `PACOTES` — peso (kg) e dimensões (cm) da embalagem de cada tamanho (14/18/25cm).
- `FROM_CEP_DEFAULT` — CEP do estúdio em Indaiatuba.

Trocar pelos valores reais, senão a cotação sai imprecisa.

---

## Checklist final antes de produção

- [ ] WhatsApp number trocado em `lib/config.ts`
- [ ] Instagram + e-mail trocados em `lib/config.ts`
- [ ] Pelo menos 5 fotos reais no portfólio
- [ ] Foto real da Isabella nas páginas Home (preview) e Sobre
- [ ] Texto da Isabella em `/sobre` substituído
- [ ] 3-5 depoimentos reais em `lib/portfolio.ts`
- [ ] OG image específica criada (opcional mas recomendado)
- [ ] GA4 + Meta Pixel instalados
- [ ] Domínio `eternize.art` apontado pra Vercel
- [ ] Lighthouse 90+ em todas as métricas
- [ ] Testes em iPhone SE, iPhone 14 Pro, iPad e desktop 1440px
