import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
