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
        const target = (e.target as HTMLElement)?.closest("a[href^='#']");
        if (!target) return;
        const id = target.getAttribute("href");
        if (!id || id === "#") return;
        const el = document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        lenis?.scrollTo(el as HTMLElement, { offset: -72 });
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

  // Reset scroll quando muda de rota
  useEffect(() => {
    if (typeof window === "undefined") return;
    const lenis = window.__lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname]);

  return null;
}
