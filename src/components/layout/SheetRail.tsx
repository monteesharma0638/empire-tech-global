"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { sheets } from "@/lib/site";

/**
 * Signature element: a fixed margin rail that reports which "sheet" of the
 * drawing set you are reading — mirroring the brochure's 02 / 09 page marks.
 *
 * Sections alternate between navy and paper, so the rail reads a `data-tone`
 * attribute off the active section and recolours itself to stay legible.
 * Decorative, so it is hidden from assistive tech and from narrow viewports.
 */
export default function SheetRail() {
  const [active, setActive] = useState(0);
  const [tone, setTone] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const nodes = sheets
      .map((s) => document.getElementById(s.id))
      .filter((n): n is HTMLElement => Boolean(n));

    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (!visible) return;
        const idx = sheets.findIndex((s) => s.id === visible.target.id);
        if (idx >= 0) {
          setActive(idx);
          setTone(
            visible.target.getAttribute("data-tone") === "light" ? "light" : "dark"
          );
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  const current = sheets[active];
  const total = String(sheets.length).padStart(2, "0");

  const label = tone === "dark" ? "text-paper/45" : "text-ink/40";
  const dim = tone === "dark" ? "text-paper/30" : "text-ink/25";
  const idle = tone === "dark" ? "bg-paper/25" : "bg-ink/20";

  // The cover sheet stays uncluttered — the rail appears once you're inside the set.
  const onCover = active === 0;

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 pr-7 transition-opacity duration-700 2xl:block ${
        onCover ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-end gap-4">
        {/* Section title — only where the margin is genuinely wide enough */}
        <div className="hidden h-52 items-center min-[1800px]:flex">
          <AnimatePresence mode="wait">
            <motion.span
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`eyebrow whitespace-nowrap transition-colors duration-500 ${label}`}
              style={{ writingMode: "vertical-rl" }}
            >
              {current.title}
            </motion.span>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.span
            key={current.n}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow block text-right tabular-nums text-gold"
          >
            {current.n}
            <span className={`transition-colors duration-500 ${dim}`}>/{total}</span>
          </motion.span>
        </AnimatePresence>

        <div className="flex flex-col items-end gap-2.5">
          {sheets.map((s, i) => (
            <span
              key={s.id}
              className={`block h-px transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                i === active ? "w-6 bg-gold" : `w-3 ${idle}`
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
