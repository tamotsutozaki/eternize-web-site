"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type LenisInstance = {
  raf: (time: number) => void;
  scrollTo: (target: number | HTMLElement, options?: { offset?: number; immediate?: boolean; duration?: number }) => void;
  destroy: () => void;
};

declare global {
  interface Window {
    __lenis?: LenisInstance;
  }
}

export default function SmoothScroll() {
  const pathname = usePathname();
  const initializedRef = useRef(false);

  // Init Lenis (uma vez)
  useEffect(() => {
    if (initializedRef.current) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lenis: LenisInstance | undefined;
    let rafId = 0;
    let cancelled = false;
    initializedRef.current = true;

    (async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;

      lenis = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.6,
      }) as unknown as LenisInstance;

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      const onAnchorClick = (e: MouseEvent) => {
        const target = (e.target as HTMLElement)?.closest("a[href]");
        if (!target) return;
        const href = target.getAttribute("href") || "";
        const i = href.indexOf("#");
        if (i < 0) return;
        const hash = href.slice(i); // "#tamanhos"
        if (hash === "#") return;
        const linkPath = href.slice(0, i); // "" | "/" | "/rota"
        // Só trata se a âncora é da página atual; outra rota deixa navegar
        // (o efeito de troca de rota cuida do scroll ao chegar).
        if (linkPath !== "" && linkPath !== window.location.pathname) return;
        const el = document.querySelector(hash);
        if (!el) return;
        e.preventDefault();
        lenis?.scrollTo(el as HTMLElement, { offset: -72 });
        window.history.replaceState(null, "", window.location.pathname);
      };
      document.addEventListener("click", onAnchorClick);

      window.__lenis = lenis;
    })();

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      window.__lenis?.destroy();
      window.__lenis = undefined;
      initializedRef.current = false;
    };
  }, []);

  // Ao mudar de rota: se a URL tem hash (ex: /#tamanhos vindo de outra
  // página), rola até a seção; senão volta ao topo.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const lenis = window.__lenis;
    const hash = window.location.hash;

    if (hash.length > 1) {
      const el = document.querySelector(hash);
      if (el) {
        requestAnimationFrame(() => {
          if (lenis) {
            lenis.scrollTo(el as HTMLElement, { offset: -72, immediate: true });
          } else {
            (el as HTMLElement).scrollIntoView();
          }
          window.history.replaceState(null, "", window.location.pathname);
        });
        return;
      }
    }

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname]);

  return null;
}
