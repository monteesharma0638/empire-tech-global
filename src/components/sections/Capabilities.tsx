import Image from "next/image";
import { capabilities } from "@/lib/site";
import { img, type ImageKey } from "@/lib/images";
import { Container, SectionHead, SheetMark } from "@/components/ui/Bits";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const codes = ["IS 456", "IS 800", "IS 1893", "Fire & life-safety"];

export default function Capabilities({ sheet = true }: { sheet?: boolean }) {
  return (
    <section
      id="capabilities"
      data-tone="light"
      className="relative bg-paper-pure py-24 lg:py-32"
    >
      <Container>
        <div className="flex items-start justify-between gap-8">
          <Reveal>
            <SectionHead
              eyebrow="Capabilities"
              title="Design, engineering & systems"
              lead="Before we lay a single brick, we plan the drawings, the structure, and the systems your building will run on."
            />
          </Reveal>
          {sheet && (
            <Reveal delay={0.1} className="hidden shrink-0 pt-2 lg:block">
              <SheetMark n="04" />
            </Reveal>
          )}
        </div>

        <Stagger className="mt-16 grid gap-px border border-rule bg-rule sm:grid-cols-2">
          {capabilities.map((c) => {
            const picture = img[c.image as ImageKey];
            return (
              <StaggerItem key={c.code} as="article">
                <div className="group flex h-full flex-col bg-paper-pure sm:flex-row">
                  <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-auto sm:w-2/5">
                    <Image
                      src={picture.src}
                      alt={picture.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 22vw"
                      className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7 lg:p-9">
                    <span className="eyebrow text-gold-dim">{c.code}</span>
                    <h3 className="mt-4 text-xl text-ink lg:text-2xl">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted lg:text-base">
                      {c.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* The codes they actually design to — evidence, not decoration */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-rule pt-7">
            <span className="eyebrow text-muted/70">Designed to</span>
            {codes.map((c) => (
              <span key={c} className="eyebrow text-ink/60">
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
