"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { site, nav } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "bg-ink/95 py-3 shadow-[0_1px_0_0_rgba(182,136,67,0.25)] backdrop-blur-md"
            : "bg-transparent py-6"
        )}
      >
        <div className="mx-auto flex w-full max-w-[110rem] items-center justify-between px-6 sm:px-8 lg:px-12">
          <Link
            href="/"
            aria-label={`${site.legalName} — home`}
            className="flex items-center gap-4"
          >
            <Image
              src="/brand/logo-mark.svg"
              alt=""
              width={454}
              height={164}
              priority
              className={cn(
                "w-auto transition-all duration-500",
                scrolled ? "h-7" : "h-9 sm:h-11"
              )}
            />
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-lg tracking-wide text-paper">
                EmpireTech Global
              </span>
              <span className="eyebrow mt-1 text-[0.5625rem] text-gold-bright/80">
                Creating your paradise
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rule-link font-sans text-[0.8125rem] tracking-[0.08em] uppercase transition-colors duration-300",
                    active ? "text-gold-bright" : "text-paper/75 hover:text-paper"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={site.phones[0].href}
              className="group inline-flex items-center gap-2.5 border border-gold/40 px-5 py-3 font-mono text-[0.75rem] tracking-[0.1em] text-gold-bright transition-colors duration-500 hover:border-gold hover:bg-gold hover:text-ink"
            >
              <Phone className="size-3.5" strokeWidth={2} />
              {site.phones[0].label}
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex items-center justify-center p-2 text-paper lg:hidden"
          >
            <Menu className="size-6" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-ink-deep lg:hidden"
          >
            <div className="survey-grid absolute inset-0 opacity-[0.07]" aria-hidden />

            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between px-6 py-6">
                <Image
                  src="/brand/logo-mark.svg"
                  alt=""
                  width={454}
                  height={164}
                  className="h-8 w-auto"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-paper"
                >
                  <X className="size-6" strokeWidth={1.5} />
                </button>
              </div>

              <nav className="flex flex-1 flex-col justify-center gap-1 px-6">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 + i * 0.06,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-5 border-b border-ink-line py-5"
                    >
                      <span className="eyebrow text-gold/60">{item.sheet}</span>
                      <span className="font-display text-3xl text-paper">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="border-t border-ink-line px-6 py-7">
                {site.phones.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="block py-1.5 font-mono text-base text-gold-bright"
                  >
                    {p.label}
                  </a>
                ))}
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 block break-all font-mono text-sm text-paper/60"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
