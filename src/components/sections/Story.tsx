import Image from "next/image";
import { UserRound, MapPin, ScrollText } from "lucide-react";
import { site } from "@/lib/site";
import { img } from "@/lib/images";
import { Container, SectionHead, SheetMark } from "@/components/ui/Bits";
import {
  Reveal,
  ZoomIn,
  Stagger,
  StaggerItem,
  DrawRule,
} from "@/components/ui/Reveal";

const credentials = [
  {
    icon: UserRound,
    title: "Founder-led",
    body: "Directors Ashwil Bhupesh (BTech, IIT Delhi) and Devdeep Singh (BTech, Civil Engineering) personally oversee every project.",
  },
  {
    icon: MapPin,
    title: "Based in Jaipur",
    body: "We serve Rajasthan and the industrial belts near NCR.",
  },
  {
    icon: ScrollText,
    title: "Compliance first",
    body: "We check the rules that apply to your project before we design anything.",
  },
];

export default function Story({ sheet = true }: { sheet?: boolean }) {
  return (
    <section
      id="story"
      data-tone="dark"
      className="relative overflow-hidden bg-ink py-24 text-paper lg:py-32"
    >
      <div
        className="survey-grid absolute inset-0 opacity-[0.05]"
        aria-hidden
      />

      <Container className="relative">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <ZoomIn className="lg:col-span-5">
            <div className="tick-frame relative aspect-[4/5] overflow-hidden border border-ink-line">
              <Image
                src={img.aboutSiteVisit.src}
                alt={img.aboutSiteVisit.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent"
              />
            </div>
          </ZoomIn>

          <div className="lg:col-span-7">
            <div className="flex items-start justify-between gap-8">
              <Reveal>
                <SectionHead
                  dark
                  eyebrow="About us"
                  title="Our story & mission"
                />
              </Reveal>
              {sheet && (
                <Reveal delay={0.1} className="hidden shrink-0 pt-2 sm:block">
                  <SheetMark n="03" dark />
                </Reveal>
              )}
            </div>

            <Reveal delay={0.08}>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-paper/70">
                <p>
                  <span className="font-medium text-paper">Our story.</span>{" "}
                  EmpireTech Global started in Jaipur as a real estate and
                  construction company, with roots in hands-on civil
                  engineering. Today we focus on one clear goal: building
                  factories, warehouses, schools, colleges, hospitals and
                  townships — the kind of buildings where strong structure,
                  proper approvals and on-time delivery matter most.
                </p>
                <p>
                  <span className="font-medium text-paper">Our mission.</span>{" "}
                  To be the one partner you need for large projects. From the
                  first site visit to the final handover — design, approvals and
                  construction — we manage it all, so you get a building that is
                  safe, strong and ready on time.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <DrawRule dark className="mt-12" />
              <blockquote className="mt-10 border-l-2 border-gold pl-7">
                <p className="font-display text-[clamp(1.35rem,2.4vw,1.85rem)] italic leading-snug text-paper">
                  &ldquo;{site.quote}&rdquo;
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>

        <Stagger className="mt-20 grid gap-6 md:grid-cols-3">
          {credentials.map(({ icon: Icon, title, body }) => (
            <StaggerItem key={title}>
              <div className="tick-frame h-full border border-ink-line bg-ink-raised/40 p-8 transition-colors duration-500 hover:border-gold/40">
                <Icon className="size-6 text-gold" strokeWidth={1.5} />
                <h3 className="mt-6 text-xl text-paper">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">
                  {body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
