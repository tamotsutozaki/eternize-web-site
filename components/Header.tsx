"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import BrandLogo from "./BrandLogo";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";
import { whatsappLink } from "@/lib/config";

const NAV = [
  { href: "/portfolio", label: "Portfólio" },
  { href: "/como-funciona", label: "Como Funciona" },
  { href: "/sobre", label: "Sobre" },
  { href: "/faq", label: "FAQ" },
  { href: "/contato", label: "Contato" },
];

const fadeUp = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.32, ease: [0.22, 0.61, 0.36, 1] as const },
  },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while drawer open
  useEffect(() => {
    if (typeof document === "undefined") return;
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-[color-mix(in_oklab,var(--bg)_85%,transparent)] border-b border-[var(--border)]"
            : "bg-[var(--bg)]"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-5">
          <motion.button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            whileTap={{ scale: 0.9 }}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-strong)] cursor-pointer overflow-hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.svg
                key={open ? "x" : "burger"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                aria-hidden
              >
                {open ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M3 7h18" />
                    <path d="M3 12h18" />
                    <path d="M3 17h18" />
                  </>
                )}
              </motion.svg>
            </AnimatePresence>
          </motion.button>

          <Link
            href="/"
            aria-label="Eternize — início"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="hidden md:flex items-center transition-opacity hover:opacity-80"
          >
            <BrandLogo width={96} priority />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm tracking-wide uppercase transition-colors ${
                    active
                      ? "text-[var(--accent)]"
                      : "text-[var(--fg-soft)] hover:text-[var(--fg)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <motion.a
              href={whatsappLink("Olá! Quero encomendar um retrato 🐾")}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.96 }}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-[var(--bg-deep)] text-[var(--bg-deep-text)] px-5 py-2.5 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
            >
              Encomendar
            </motion.a>
            {/* Spacer mobile pra balancear o hamburger esquerdo */}
            <span className="md:hidden h-11 w-11" aria-hidden />
          </div>
        </div>
      </header>

      {/* Drawer mobile — RENDERIZADO FORA DO HEADER pra position:fixed escapar do containing-block do backdrop-filter */}
      <AnimatePresence>
        {open && (
          <div className="md:hidden">
            <motion.div
              key="backdrop"
              onClick={() => setOpen(false)}
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 z-[60] bg-[var(--brand-ink)]/60 backdrop-blur-[2px]"
            />

            <motion.aside
              key="panel"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34, mass: 0.9 }}
              className="fixed top-0 left-0 bottom-0 z-[70] w-[82%] max-w-[340px] bg-[var(--bg)] border-r border-[var(--border)] shadow-2xl flex flex-col"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.04, delayChildren: 0.12 },
                  },
                }}
                className="flex flex-col flex-1 min-h-0"
              >
                <motion.div
                  variants={fadeUp}
                  className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)] shrink-0"
                >
                  <Link
                    href="/"
                    aria-label="Eternize — início"
                    onClick={(e) => {
                      if (pathname === "/") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                      setOpen(false);
                    }}
                    className="flex items-center"
                  >
                    <BrandLogo width={110} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Fechar menu"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)] text-[var(--fg)] hover:bg-[var(--bg-alt)] cursor-pointer transition-colors active:scale-95"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      aria-hidden
                    >
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  </button>
                </motion.div>

                <div className="flex-1 overflow-y-auto flex flex-col min-h-0">
                  <nav className="flex flex-col px-2 py-3">
                    {NAV.map((item) => {
                      const active = pathname === item.href;
                      return (
                        <motion.div key={item.href} variants={fadeUp}>
                          <Link
                            href={item.href}
                            className={`block px-4 py-3.5 rounded-xl text-base tracking-wide transition-colors ${
                              active
                                ? "bg-[var(--bg-alt)] text-[var(--accent)] font-medium"
                                : "text-[var(--fg)] hover:bg-[var(--bg-alt)]"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </nav>

                  <motion.div
                    variants={fadeUp}
                    className="mt-auto px-5 pb-6 pt-4 space-y-3 shrink-0"
                  >
                    <button
                      type="button"
                      onClick={toggle}
                      className="flex w-full items-center justify-between rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-alt)] px-4 py-3 cursor-pointer hover:bg-[var(--bg)] transition-colors"
                      aria-label={
                        theme === "dark"
                          ? "Mudar para tema claro"
                          : "Mudar para tema escuro"
                      }
                    >
                      <span className="flex items-center gap-3 text-sm text-[var(--fg)]">
                        <motion.span
                          key={theme}
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="inline-flex"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                          >
                            {theme === "dark" ? (
                              <path
                                d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"
                                fill="currentColor"
                              />
                            ) : (
                              <>
                                <circle cx="12" cy="12" r="4" />
                                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                              </>
                            )}
                          </svg>
                        </motion.span>
                        Tema {theme === "dark" ? "claro" : "escuro"}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                        Trocar
                      </span>
                    </button>

                    <motion.a
                      href={whatsappLink("Olá! Quero encomendar um retrato 🐾")}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.97 }}
                      className="flex w-full items-center justify-center rounded-full bg-[var(--bg-deep)] text-[var(--bg-deep-text)] px-5 py-3.5 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
                    >
                      Encomendar no WhatsApp
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
