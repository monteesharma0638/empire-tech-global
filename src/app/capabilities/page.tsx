import type { Metadata } from "next";
import { img } from "@/lib/images";
import PageHero from "@/components/layout/PageHero";
import Capabilities from "@/components/sections/Capabilities";
import Safety from "@/components/sections/Safety";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Architectural drawings, structural engineering to IS 456 / IS 800 / IS 1893, quantity and cost estimation, and material sourcing advice — from EmpireTech Global, Jaipur.",
  alternates: { canonical: "/capabilities" },
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        crumb="Capabilities"
        eyebrow="Design, engineering & systems"
        title="We plan the drawings, the structure and the systems before we lay a brick."
        lead="Structural and MEP design sized to what your building actually needs, costed item by item, and drawn ready for authority approval."
        image={img.capStructural}
      />
      <Capabilities sheet={false} />
      <Safety sheet={false} />
      <CTA />
    </>
  );
}
