import Hero from "@/components/sections/Hero";
import HeroBackdrop from "@/components/sections/HeroBackdrop";
import Sectors from "@/components/sections/Sectors";
import Story from "@/components/sections/Story";
import Capabilities from "@/components/sections/Capabilities";
import Process from "@/components/sections/Process";
import Costing from "@/components/sections/Costing";
import Safety from "@/components/sections/Safety";
import Team from "@/components/sections/Team";
import CTA from "@/components/sections/CTA";
import SheetRail from "@/components/layout/SheetRail";

export default function Home() {
  return (
    <>
      <SheetRail />
      <Hero>
        <HeroBackdrop />
      </Hero>
      <Sectors />
      <Story />
      <Capabilities />
      <Process />
      <Costing />
      <Safety />
      <Team />
      <CTA />
    </>
  );
}
