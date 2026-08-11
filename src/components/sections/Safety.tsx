import Image from "next/image";
import { safety } from "@/lib/site";
import { img } from "@/lib/images";
import { Container, SectionHead, SheetMark } from "@/components/ui/Bits";
import { Reveal, ZoomIn, Stagger, StaggerItem } from "@/components/ui/Reveal";

const plates = [img.safetyPpe, img.safetyInspection, img.safetyTraining];

export default function Safety({ sheet = true }: { sheet?: boolean }) {
  return (
    <section
      id="safety"
      data-tone="dark"
      className="relative overflow-hidden bg-ink py-24 text-paper lg:py-32"
    >
      <Container>
        <div className="flex items-start justify-between gap-8">
          <Reveal>
            <SectionHead
              dark
              eyebrow="On site"
              title="Safety & quality, built in"
              lead="Checks happen at every stage of building, not once at the end."
            />
          </Reveal>
          {sheet && (
            <Reveal delay={0.1} className="hidden shrink-0 pt-2 lg:block">
              <SheetMark n="07" dark />
            </Reveal>
          )}
        </div>

        <div className="mt-16 grid gap-3 sm:grid-cols-3">
          {plates.map((p, i) => (
            <ZoomIn key={p.src} delay={i * 0.09}>
              <div className="relative aspect-[4/3] overflow-hidden border border-ink-line">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent"
                />
              </div>
            </ZoomIn>
          ))}
        </div>

        <Stagger className="mt-14 grid gap-x-12 gap-y-px md:grid-cols-2 lg:grid-cols-3">
          {safety.map((s) => (
            <StaggerItem key={s.title}>
              <div className="border-t border-gold/35 py-6">
                <h3 className="font-sans text-base font-medium text-paper">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-paper/60">
                  {s.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="eyebrow mt-10 text-paper/35">
            Cost control · Site safety · Quality sign-off
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
