import type { Metadata } from "next";
import { Inter, Caveat, Dancing_Script } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollTopButton from "@/components/ScrollTopButton";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollReveal } from "@/components/ScrollReveal";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const dancing = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eternize.art"),
  title: {
    default: "Eternize — Memórias que ficam",
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
    title: "Eternize — Memórias que ficam",
    description:
      "Retratos de pets pintados à mão sobre madeira natural.",
    url: "https://eternize.art",
    siteName: "Eternize",
    locale: "pt_BR",
    type: "website",
    images: ["/brand/eternize-cafe.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eternize — Memórias que ficam",
    description: "Retratos de pets pintados à mão sobre madeira natural.",
    images: ["/brand/eternize-cafe.png"],
  },
  icons: {
    icon: "/brand/logo-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${caveat.variable} ${dancing.variable} antialiased`}
    >
      <head>
        {/* Evita flash antes do React hidratar */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('eternize-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--fg)]">
        <ThemeProvider>
          <ScrollReveal />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollTopButton />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
