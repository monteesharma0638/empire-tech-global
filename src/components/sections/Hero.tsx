"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Phone } from "lucide-react";
import { site, sectors } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  // Orchestrated load sequence — one moment, not scattered effects.
  const step = (i: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduce ? 0.3 : 0.85,
      delay: reduce ? 0 : 0.15 + i * 0.11,
      ease,
    },
  });

  return (
    <section
      id="hero"
      data-tone="dark"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink-deep pb-10 pt-32"
    >
      {/* Background plate — a server-rendered <picture>, passed in from the page
          so the browser downloads only the crop it needs. */}
      {children}

      <div className="relative mx-auto w-full max-w-[110rem] px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <motion.p {...step(0)} className="eyebrow text-gold-bright">
            {site.descriptor}
          </motion.p>

          <motion.h1
            {...step(1)}
            className="mt-7 text-[clamp(2.4rem,6.4vw,5.25rem)] font-light leading-[1.02] tracking-[-0.02em] text-paper"
          >
            We build what industries
            <br className="hidden sm:block" /> and institutions{" "}
            <span className="italic text-gold-bright">depend on.</span>
          </motion.h1>

          <motion.p
            {...step(2)}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70 sm:text-xl"
          >
            Factories, warehouses, schools, colleges, hospitals and townships —
            designed, approved and delivered by one team, from the first site
            visit to final handover.
          </motion.p>

          <motion.div
            {...step(3)}
            className="mt-11 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-gold px-8 py-4.5 font-sans text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-ink transition-colors duration-500 hover:bg-gold-bright"
            >
              Scope your project
              <span
                aria-hidden
                className="transition-transform duration-500 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            <a
              href={site.phones[0].href}
              className="group inline-flex items-center justify-center gap-3 border border-paper/25 px-8 py-4.5 font-mono text-[0.8125rem] tracking-[0.08em] text-paper transition-colors duration-500 hover:border-gold hover:text-gold-bright"
            >
              <Phone className="size-4" strokeWidth={1.75} />
              {site.phones[0].label}
            </a>
          </motion.div>
        </div>

        {/* Foot of sheet: the three-beat promise + sector register */}
        <motion.div
          {...step(4)}
          className="mt-16 border-t border-paper/15 pt-7 lg:mt-24"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-2 text-gold">
              {site.promise.map((p, i) => (
                <span key={p} className="flex items-center gap-3">
                  {i > 0 && (
                    <span aria-hidden className="text-gold/40">
                      ·
                    </span>
                  )}
                  {p}
                </span>
              ))}
            </p>

            {/* Redundant with the sectors sheet below, so it stays off small screens */}
            <ul className="hidden flex-wrap gap-x-6 gap-y-2 sm:flex">
              {sectors.map((s) => (
                <li
                  key={s.slug}
                  className="eyebrow flex items-baseline gap-2 text-paper/45"
                >
                  <span className="text-gold/50">{s.code}</span>
                  {s.short}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
