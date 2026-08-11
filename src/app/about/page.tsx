import type { Metadata } from "next";
import Image from "next/image";
import { img } from "@/lib/images";
import { site } from "@/lib/site";
import PageHero from "@/components/layout/PageHero";
import Story from "@/components/sections/Story";
import Team from "@/components/sections/Team";
import CTA from "@/components/sections/CTA";
import { Container, SectionHead } from "@/components/ui/Bits";
import { Reveal, ZoomIn } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About us",
  description:
    "EmpireTech Global is a founder-led construction and project delivery company based in Jaipur, serving Rajasthan and the industrial belts near NCR.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="About us"
        title="Founder-led, engineering-first, based in Jaipur."
        lead={`Directors Ashwil Bhupesh and Devdeep Singh personally oversee every project. We serve ${site.serviceArea}.`}
        image={img.aboutJaipur}
      />

      <Story sheet={false} />

      <section className="bg-paper py-24 lg:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="right">
              <SectionHead
                eyebrow="Where we work"
                title="Jaipur, Rajasthan, and the belts near NCR."
                lead="Being close to your site matters more than most owners expect. Approvals are local, inspectors are local, and the vendors who can actually hold a schedule are local. We work where we know the ground."
              />
              <address className="mt-9 not-italic leading-relaxed text-muted">
                {site.address.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
            </Reveal>
            <ZoomIn className="lg:order-first">
              <div className="tick-frame relative aspect-[4/3] overflow-hidden border border-rule">
                <Image
                  src={img.contactOffice.src}
                  alt={img.contactOffice.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ZoomIn>
          </div>
        </Container>
      </section>

      <Team sheet={false} />
      <CTA />
    </>
  );
}
