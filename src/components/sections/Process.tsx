import Image from "next/image";
import { processStages } from "@/lib/site";
import { img } from "@/lib/images";
import { Container, SectionHead, SheetMark } from "@/components/ui/Bits";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

/**
 * The process is a genuine nine-stage sequence, so it is set as a register:
 * stage number, stage code, scope. Numbering here carries real information.
 */
export default function Process({ sheet = true }: { sheet?: boolean }) {
  return (
    <section
      id="process"
      data-tone="dark"
      className="relative overflow-hidden bg-ink-deep py-24 text-paper lg:py-32"
    >
      <div className="absolute inset-0">
        <Image
          src={img.processBg.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.18]"
        />
        <div aria-hidden className="absolute inset-0 bg-ink-deep/75" />
      </div>

      <Container className="relative">
        <div className="flex items-start justify-between gap-8">
          <Reveal>
            <SectionHead
              dark
              eyebrow="How we work"
              title="Our end-to-end process"
              lead="One team manages every stage of your project — from the first site visit to the final handover."
            />
          </Reveal>
          {sheet && (
            <Reveal delay={0.1} className="hidden shrink-0 pt-2 lg:block">
              <SheetMark n="05" dark />
            </Reveal>
          )}
        </div>

        {/* Register header — column labels, drawing-sheet style */}
        <Reveal delay={0.1}>
          <div className="mt-16 hidden grid-cols-[5rem_6rem_1fr_1.4fr] items-baseline gap-6 border-b border-gold/30 pb-4 lg:grid">
            <span className="eyebrow text-gold/70">Stage</span>
            <span className="eyebrow text-gold/70">Code</span>
            <span className="eyebrow text-gold/70">Activity</span>
            <span className="eyebrow text-gold/70">Scope</span>
          </div>
        </Reveal>

        <Stagger as="ol" className="mt-2" amount={0.05}>
          {processStages.map((p) => (
            <StaggerItem key={p.n} as="li">
              <div className="group grid grid-cols-1 items-baseline gap-x-6 gap-y-2 border-b border-ink-line py-7 transition-colors duration-500 hover:border-gold/45 lg:grid-cols-[5rem_6rem_1fr_1.4fr] lg:py-8">
                <span className="font-mono text-2xl tabular-nums text-gold transition-transform duration-500 group-hover:translate-x-1 lg:text-3xl">
                  {p.n}
                </span>
                <span className="eyebrow text-paper/40">{p.code}</span>
                <h3 className="text-xl text-paper lg:text-[1.375rem]">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-paper/60 lg:text-base">
                  {p.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="eyebrow mt-8 text-paper/35">
            Single-point accountability, start to finish
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
