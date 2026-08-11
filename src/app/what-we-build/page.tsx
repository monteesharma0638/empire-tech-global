import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { sectors } from "@/lib/site";
import { img, type ImageKey } from "@/lib/images";
import PageHero from "@/components/layout/PageHero";
import { Container, Eyebrow } from "@/components/ui/Bits";
import { Reveal, ZoomIn, DrawRule } from "@/components/ui/Reveal";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "What we build",
  description:
    "Factories, warehouses and logistics parks, schools, colleges, hospitals and townships — built across Rajasthan and the NCR industrial belt by EmpireTech Global.",
  alternates: { canonical: "/what-we-build" },
};

export default function WhatWeBuildPage() {
  return (
    <>
      <PageHero
        crumb="What we build"
        eyebrow="Our focus"
        title="Six kinds of buildings, each with its own rulebook."
        lead="Every building type carries its own approvals, loads and daily working pattern. We plan for them from day one rather than discovering them at inspection."
        image={img.heroWarehouse}
      />

      <section className="bg-paper py-20 lg:py-28">
        <Container>
          <ul className="space-y-24 lg:space-y-32">
            {sectors.map((s, i) => {
              const picture = img[s.image as ImageKey];
              const flip = i % 2 === 1;

              return (
                <li key={s.slug} id={s.slug} className="scroll-mt-32">
                  <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <ZoomIn className={flip ? "lg:order-2" : undefined}>
                      <div className="tick-frame relative aspect-[4/3] overflow-hidden border border-rule">
                        <Image
                          src={picture.src}
                          alt={picture.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    </ZoomIn>

                    <Reveal
                      direction={flip ? "left" : "right"}
                      className={flip ? "lg:order-1" : undefined}
                    >
                      <Eyebrow>
                        {s.code} · Sector {String(i + 1).padStart(2, "0")}
                      </Eyebrow>
                      <h2 className="mt-5 text-[clamp(1.75rem,3.2vw,2.75rem)] leading-tight text-ink">
                        {s.name}
                      </h2>
                      <DrawRule className="mt-7 w-24 !bg-gold" />
                      <p className="mt-7 text-lg leading-relaxed text-muted">
                        {s.blurb}
                      </p>
                      <p className="mt-4 leading-relaxed text-muted">{s.detail}</p>
                      <Link
                        href="/contact"
                        className="rule-link mt-8 inline-flex items-center gap-2.5 font-sans text-[0.8125rem] uppercase tracking-[0.12em] text-gold-dim"
                      >
                        Discuss a {s.singular} project
                        <span aria-hidden>→</span>
                      </Link>
                    </Reveal>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <CTA />
    </>
  );
}
