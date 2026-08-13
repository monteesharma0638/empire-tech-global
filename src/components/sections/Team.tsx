import Image from "next/image";
import { Phone } from "lucide-react";
import { site, values } from "@/lib/site";
import { img } from "@/lib/images";
import { Container, SectionHead, SheetMark } from "@/components/ui/Bits";
import { Reveal, ZoomIn, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function Team({ sheet = true }: { sheet?: boolean }) {
  return (
    <section
      id="team"
      data-tone="light"
      className="relative bg-paper-pure py-24 lg:py-32"
    >
      <Container>
        <div className="flex items-start justify-between gap-8">
          <Reveal>
            <SectionHead
              eyebrow="Our team"
              title="Team & core values"
              lead="Structural engineers, MEP consultants, procurement specialists and site supervisors — we treat every build as an engineering problem first. A dedicated project manager owns cost, schedule and compliance on every project."
            />
          </Reveal>
          {sheet && (
            <Reveal delay={0.1} className="hidden shrink-0 pt-2 lg:block">
              <SheetMark n="08" />
            </Reveal>
          )}
        </div>

        <ZoomIn className="mt-14">
          <div className="relative aspect-[16/9] overflow-hidden border border-rule lg:aspect-[21/9]">
            <Image
              src={img.teamEngineers.src}
              alt={img.teamEngineers.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </ZoomIn>

        {/* Directors */}
        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2">
          {site.directors.map((d) => (
            <StaggerItem key={d.name}>
              <div className="tick-frame flex h-full items-center gap-6 border border-rule bg-paper p-7 transition-colors duration-500 hover:border-gold/45">
                <div className="relative size-20 shrink-0 overflow-hidden rounded-full border border-rule bg-ink">
                  <Image
                    src={img[d.photo].src}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl text-ink">{d.name}</h3>
                  <p className="eyebrow mt-2 text-gold-dim">
                    {d.role} · {d.credential}
                  </p>
                  <a
                    href={d.href}
                    className="rule-link mt-3 inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-ink"
                  >
                    <Phone className="size-3.5" strokeWidth={1.75} />
                    {d.phone}
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Values */}
        <Stagger className="mt-16 grid gap-x-12 gap-y-px sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="border-t border-rule py-7">
                <h3 className="font-display text-xl text-ink">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {v.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="eyebrow mt-12 text-muted/70">
            Structural · MEP · Procurement · Site supervision
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
