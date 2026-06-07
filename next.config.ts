import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export estático pra Cloudflare Pages (free, CDN global). Gera pasta out/.
  output: "export",
  images: {
    // export estático não tem otimizador server-side; servir imagens direto.
    unoptimized: true,
    remotePatterns: [
      // MOCK — placedog/randomuser pra placeholder. Remover quando trocar.
      { protocol: "https", hostname: "placedog.net" },
      { protocol: "https", hostname: "place.dog" },
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
