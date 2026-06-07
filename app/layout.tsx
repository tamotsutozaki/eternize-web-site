import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollTopButton from "@/components/ScrollTopButton";
import SmoothScroll from "@/components/SmoothScroll";
import { ScrollReveal } from "@/components/ScrollReveal";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eternize.art"),
  title: {
    default: "Eternize — Eternizando emoções com arte",
    template: "%s · Eternize",
  },
  description:
    "Retratos de pets pintados à mão sobre madeira natural, por uma veterinária que entende de bicho. Indaiatuba/SP.",
  keywords: [
    "retrato pet",
    "pintura pet",
    "presente pet",
    "memorial pet",
    "Indaiatuba",
    "arte personalizada",
  ],
  openGraph: {
    title: "Eternize — Eternizando emoções com arte",
    description:
      "Retratos de pets pintados à mão sobre madeira natural.",
    url: "https://eternize.art",
    siteName: "Eternize",
    locale: "pt_BR",
    type: "website",
    images: ["/brand/eternize-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eternize — Eternizando emoções com arte",
    description: "Retratos de pets pintados à mão sobre madeira natural.",
    images: ["/brand/eternize-logo.png"],
  },
  // Ícone via convenção: app/icon.png + app/favicon.ico (emblema da logo).
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF7F2",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${fraunces.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--fg)]">
        <SmoothScroll />
        <ScrollReveal />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollTopButton />
        <WhatsAppButton />
      </body>
    </html>
  );
}
