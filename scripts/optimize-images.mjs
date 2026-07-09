// Gera versões otimizadas das imagens em WebP.
//
// Por que existe: o site é export estático (`output: "export"` + Cloudflare),
// então `next/image` roda com `unoptimized: true` — ele NÃO redimensiona nada,
// serve o arquivo original inteiro e o navegador "espreme" no container. Isso
// obriga o browser a decodificar bitmaps grandes (~1.7MP) em cards pequenos, o
// que trava o scroll (vários cards ao mesmo tempo nos grids).
//
// Solução (mesma ideia do build da Tomore, aqui feita à mão com sharp):
//  - thumbs webp ~860px pra grids/hero (decode ~2x mais leve, arquivos ~85% menores)
//  - webp ~1100px pros destaques single (sobre/processo)
//  - logo webp pequeno (o PNG original tinha 1.47MB pra exibir a 84px)
//
// Uso: `npm run images` (idempotente — regenera sempre a partir dos originais).

import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.resolve(__dirname, "..", "public");

const rel = (p) => path.relative(PUBLIC, p).replace(/\\/g, "/");

async function build(src, dest, { width, quality }) {
  await mkdir(path.dirname(dest), { recursive: true });
  const info = await sharp(src)
    .rotate() // respeita a orientação EXIF (fotos de celular)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(dest);
  const kb = Math.round(info.size / 1024);
  console.log(`  ${rel(src)} -> ${rel(dest)}  (${info.width}x${info.height}, ${kb}KB)`);
}

async function run() {
  // 1) Thumbs de portfólio — usadas nos grids, no hero e nas miniaturas do lightbox.
  //    O .jpg original continua servindo a imagem grande do lightbox.
  const portfolioDir = path.join(PUBLIC, "images", "portfolio");
  const files = (await readdir(portfolioDir)).filter((f) => /\.(jpe?g|png)$/i.test(f));
  console.log("Thumbs de portfólio (860px, q74):");
  for (const f of files) {
    const base = f.replace(/\.(jpe?g|png)$/i, "");
    await build(
      path.join(portfolioDir, f),
      path.join(portfolioDir, `${base}-thumb.webp`),
      { width: 860, quality: 74 }
    );
  }

  // 2) Destaques single (uma imagem por seção, não em grid) → webp mais leve.
  console.log("Destaques single (1100px, q78):");
  const singles = [
    "images/isabella-aurora.jpg",
    "images/isabella-shory.jpg",
    "images/processo.jpeg",
    "images/embalado.jpeg",
    "images/envio-conversa.jpeg",
    "images/odin.jpeg",
    "images/aprovacao-final.jpeg",
  ];
  for (const s of singles) {
    const src = path.join(PUBLIC, s);
    const dest = path.join(PUBLIC, s.replace(/\.(jpe?g|png)$/i, ".webp"));
    await build(src, dest, { width: 1100, quality: 78 });
  }

  // 3) Logo — o PNG original tem 1.47MB (1024px) só pra exibir a ~84px no header.
  console.log("Logo (384px, q90):");
  await build(
    path.join(PUBLIC, "brand", "eternize-logo-full.png"),
    path.join(PUBLIC, "brand", "eternize-logo.webp"),
    { width: 384, quality: 90 }
  );

  console.log("OK.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
