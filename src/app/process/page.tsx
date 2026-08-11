import type { Metadata } from "next";
import Image from "next/image";
import { img } from "@/lib/images";
import PageHero from "@/components/layout/PageHero";
import Process from "@/components/sections/Process";
import Costing from "@/components/sections/Costing";
import CTA from "@/components/sections/CTA";
import { Container, SectionHead } from "@/components/ui/Bits";
import { Reveal, ZoomIn } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Our process",
  description:
    "Nine stages from site feasibility and approvals mapping through design, costing, construction and handover — managed end to end by one team.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        crumb="Process"
        eyebrow="How we work"
        title="Nine stages, one team, one person to call."
        lead="The same project manager owns cost, schedule and compliance from the first site visit to the final handover."
        image={img.processBg}
      />

      <Process sheet={false} />

      {/* Handover — the stage most contractors treat as an afterthought */}
      <section className="bg-paper-pure py-24 lg:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ZoomIn>
              <div className="tick-frame relative aspect-[3/2] overflow-hidden border border-rule">
                <Image
                  src={img.processHandover.src}
                  alt={img.processHandover.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ZoomIn>
            <Reveal direction="left">
              <SectionHead
                eyebrow="Stage 09"
                title="Handover is a stage, not an afterthought."
                lead="A final check, the full paperwork set, and a proper handover — followed by support after you have moved in. You get the drawings, the approvals and the as-built record, not just the keys."
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <Costing sheet={false} />
      <CTA />
    </>
  );
}
