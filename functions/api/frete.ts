// Cloudflare Pages Function — proxy de cotação de frete (SuperFrete).
// Mantém o token no servidor (não vai pro navegador). Rota: POST /api/frete
//
// Env vars (Cloudflare Pages → Settings → Environment variables):
//   SUPERFRETE_TOKEN   (obrigatório) token Bearer gerado no painel SuperFrete.
//   SUPERFRETE_UA      (recomendado) User-Agent exigido pela API. Ex: "Eternize contato@eternize.art"
//   SUPERFRETE_BASE    (opcional)    base da API. Default produção. Sandbox: https://sandbox.superfrete.com
//   FRETE_FROM_CEP     (opcional)    sobrescreve o CEP de origem sem mexer no código.

interface Env {
  SUPERFRETE_TOKEN?: string;
  SUPERFRETE_UA?: string;
  SUPERFRETE_BASE?: string;
  FRETE_FROM_CEP?: string;
}

// Embalagem real por tamanho: dimensões em cm, peso em kg (com embalagem), valor p/ seguro.
const PACOTES: Record<string, { height: number; width: number; length: number; weight: number; valor: number }> = {
  "14cm": { height: 6, width: 25.5, length: 25.5, weight: 0.225, valor: 110 },
  "18cm": { height: 6, width: 25.5, length: 25.5, weight: 0.325, valor: 140 },
  "25cm": { height: 6, width: 30, length: 29.4, weight: 0.625, valor: 190 },
};

// CEP do estúdio em Indaiatuba (origem). Pode sobrescrever via env FRETE_FROM_CEP.
const FROM_CEP_DEFAULT = "13332496";

const onlyDigits = (s: string) => (s || "").replace(/\D/g, "");

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  const { request, env } = context;

  try {
  if (!env.SUPERFRETE_TOKEN) {
    return json({ error: "Cálculo de frete ainda não configurado." }, 503);
  }

  let body: { cep?: string; size?: string };
  try {
    body = await request.json();
  } catch {
    return json({ error: "Requisição inválida." }, 400);
  }

  const toCep = onlyDigits(body.cep || "");
  const pacote = PACOTES[body.size || ""];

  if (toCep.length !== 8) return json({ error: "CEP inválido." }, 400);
  if (!pacote) return json({ error: "Tamanho inválido." }, 400);

  const base = env.SUPERFRETE_BASE || "https://api.superfrete.com";
  const fromCep = onlyDigits(env.FRETE_FROM_CEP || FROM_CEP_DEFAULT);

  const payload = {
    from: { postal_code: fromCep },
    to: { postal_code: toCep },
    package: {
      height: pacote.height,
      width: pacote.width,
      length: pacote.length,
      weight: pacote.weight,
    },
    options: {
      insurance_value: pacote.valor,
      use_insurance_value: true,
      receipt: false,
      own_hand: false,
    },
  };

  let upstream: Response;
  try {
    upstream = await fetch(`${base}/api/v0/calculator`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.SUPERFRETE_TOKEN}`,
        "User-Agent": env.SUPERFRETE_UA || "Eternize (contato@eternize.art)",
      },
      body: JSON.stringify(payload),
    });
  } catch (e) {
    return json({ error: "Falha de rede ao consultar transportadoras.", detail: String(e) }, 502);
  }

  const raw = await upstream.text();

  if (!upstream.ok) {
    return json(
      { error: "Transportadora retornou erro.", status: upstream.status, detail: raw.slice(0, 400) },
      502
    );
  }

  let data: Array<Record<string, unknown>>;
  try {
    data = JSON.parse(raw);
  } catch {
    return json({ error: "Resposta inesperada da transportadora.", detail: raw.slice(0, 400) }, 502);
  }

  const opcoes = (Array.isArray(data) ? data : [])
    .filter((s) => s && !s.error && s.price)
    .map((s) => ({
      id: s.id as number,
      transportadora: (s.company as { name?: string } | undefined)?.name ?? "",
      servico: (s.name as string) ?? "",
      preco: Number(s.price),
      prazo: (s.delivery_time as number) ?? null,
    }))
    .sort((a, b) => a.preco - b.preco);

  return json({ opcoes });
  } catch (e) {
    return json({ error: "Erro interno na cotação.", detail: String(e) }, 500);
  }
}
