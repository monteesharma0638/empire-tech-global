import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Letterspaced mono label with the brochure's leading rule. */
export function Eyebrow({
  children,
  dark = false,
  className,
  rule = true,
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
  rule?: boolean;
}) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center gap-3",
        dark ? "text-gold-bright" : "text-gold-dim",
        className
      )}
    >
      {rule && (
        <span
          aria-hidden
          className={cn("h-px w-8", dark ? "bg-gold-bright/60" : "bg-gold-dim/50")}
        />
      )}
      {children}
    </span>
  );
}

/** Sheet number, e.g. "03 / 09" — mirrors the brochure's page marks. */
export function SheetMark({
  n,
  total = "09",
  dark = false,
  className,
}: {
  n: string;
  total?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "eyebrow tabular-nums",
        dark ? "text-paper/35" : "text-ink/30",
        className
      )}
    >
      {n} / {total}
    </span>
  );
}

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "solid" | "outline" | "ghost";
  dark?: boolean;
  className?: string;
};

/** Square-cornered, letterspaced — reads like a stamped drawing label. */
export function Button({
  children,
  href,
  variant = "solid",
  dark = false,
  className,
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-3 px-7 py-4 text-[0.8125rem] font-medium tracking-[0.12em] uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]";

  const styles = {
    solid: dark
      ? "bg-gold text-ink hover:bg-gold-bright"
      : "bg-ink text-paper hover:bg-ink-deep",
    outline: dark
      ? "border border-paper/25 text-paper hover:border-gold hover:text-gold-bright"
      : "border border-ink/20 text-ink hover:border-gold hover:text-gold-dim",
    ghost: dark
      ? "text-paper/70 hover:text-gold-bright"
      : "text-ink/70 hover:text-gold-dim",
  }[variant];

  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const Cmp = isExternal ? "a" : Link;

  return (
    <Cmp href={href} className={cn(base, styles, "font-sans", className)}>
      {children}
      <span
        aria-hidden
        className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
      >
        →
      </span>
    </Cmp>
  );
}

/** Section heading block: eyebrow + display title + optional standfirst. */
export function SectionHead({
  eyebrow,
  title,
  lead,
  dark = false,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Eyebrow dark={dark} rule={align === "left"}>
        {eyebrow}
      </Eyebrow>
      <h2
        className={cn(
          "mt-5 text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.06]",
          dark ? "text-paper" : "text-ink"
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-6 text-lg leading-relaxed",
            dark ? "text-paper/65" : "text-muted"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

/** Standard horizontal gutter — one place to change page rhythm. */
export function Container({
  children,
  className,
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        wide ? "max-w-[110rem]" : "max-w-[88rem]",
        className
      )}
    >
      {children}
    </div>
  );
}
