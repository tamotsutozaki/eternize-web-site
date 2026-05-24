// MOCK — substituir antes de produção. Ver CONFIG.md.
export const SITE_CONFIG = {
  whatsappNumber: "5519999999999",
  instagramHandle: "eternize.art",
  instagramUrl: "https://instagram.com/eternize.art",
  email: "contato@eternize.art",
  cidadesEntregaGratis: ["Indaiatuba", "Salto"],
} as const;

export function whatsappLink(message?: string) {
  const text = message ?? "Olá! Gostaria de saber mais sobre os retratos.";
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
