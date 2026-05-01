// MOCK — trocar antes de produção. Ver CONFIG.md.
export const SITE_CONFIG = {
  whatsappNumber: "5519999999999", // MOCK
  instagramHandle: "eternize.art", // MOCK
  instagramUrl: "https://instagram.com/eternize.art", // MOCK
  email: "contato@eternize.art", // MOCK
  cidadesEntregaGratis: ["Indaiatuba", "Salto"],
} as const;

export function whatsappLink(message?: string) {
  const text = message ?? "Olá! Vim pelo site da Eternize 🐾";
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
