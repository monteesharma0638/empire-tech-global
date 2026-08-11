"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const OFFSET = 26;

function offsetFor(dir: Direction) {
  switch (dir) {
    case "up":
      return { y: OFFSET };
    case "down":
      return { y: -OFFSET };
    case "left":
      return { x: OFFSET };
    case "right":
      return { x: -OFFSET };
    default:
      return {};
  }
}

/**
 * Scroll-triggered fade + rise. The workhorse for the whole site.
 * Collapses to a plain fade when the visitor prefers reduced motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.7,
  amount = 0.25,
  once = true,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  duration?: number;
  amount?: number;
  once?: boolean;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const reduce = useReducedMotion();
  const M = motion[as];

  return (
    <M
      className={className}
      initial={{ opacity: 0, ...(reduce ? {} : offsetFor(direction)) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration: reduce ? 0.3 : duration,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </M>
  );
}

/**
 * Scale-in for imagery and cards — the "zoom in" treatment.
 */
export function ZoomIn({
  children,
  className,
  delay = 0,
  from = 1.06,
  duration = 0.9,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: number;
  duration?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: reduce ? 1 : from }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduce ? 0.3 : duration,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/** Parent that staggers its Stagger.Item children in sequence. */
const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Stagger({
  children,
  className,
  amount = 0.15,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
  as?: "div" | "ul" | "ol" | "section";
}) {
  const M = motion[as];
  return (
    <M
      className={className}
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </M>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const reduce = useReducedMotion();
  const M = motion[as];
  return (
    <M
      className={className}
      variants={
        reduce
          ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
          : itemVariants
      }
    >
      {children}
    </M>
  );
}

/** A hairline that draws itself across as it scrolls into view. */
export function DrawRule({
  className,
  dark = false,
  delay = 0,
}: {
  className?: string;
  dark?: boolean;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      className={`h-px origin-left ${dark ? "bg-ink-line" : "bg-rule"} ${className ?? ""}`}
      initial={{ scaleX: reduce ? 1 : 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
