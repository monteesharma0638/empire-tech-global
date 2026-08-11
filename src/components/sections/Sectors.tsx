import Image from "next/image";
import Link from "next/link";
import { sectors } from "@/lib/site";
import { img, type ImageKey } from "@/lib/images";
import { Container, SectionHead, SheetMark } from "@/components/ui/Bits";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

type Sector = (typeof sectors)[number];

function SectorCard({ s, large = false }: { s: Sector; large?: boolean }) {
  const picture = img[s.image as ImageKey];

  return (
    <StaggerItem as="article" className="h-full">
      <Link
        href={`/what-we-build#${s.slug}`}
        className="tick-frame group flex h-full flex-col border border-rule bg-paper-pure transition-colors duration-500 hover:border-gold/45"
      >
        <div
          className={`relative overflow-hidden ${large ? "aspect-[16/10]" : "aspect-[4/3]"}`}
        >
          <Image
            src={picture.src}
            alt={picture.alt}
            fill
            sizes={
              large
                ? "(max-width: 1024px) 100vw, 50vw"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            }
            className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-40"
          />
          <span className="eyebrow absolute left-4 top-4 bg-ink/75 px-2.5 py-1.5 text-gold-bright backdrop-blur-sm">
            {s.code}
          </span>
        </div>

        <div className={`flex flex-1 flex-col ${large ? "p-8" : "p-6"}`}>
          <h3
            className={`text-ink transition-colors duration-500 group-hover:text-gold-dim ${
              large ? "text-2xl sm:text-[1.75rem]" : "text-xl"
            }`}
          >
            {s.name}
          </h3>
          <p
            className={`mt-3 flex-1 leading-relaxed text-muted ${
              large ? "text-base" : "text-sm"
            }`}
          >
            {s.blurb}
          </p>
          <span className="eyebrow mt-6 inline-flex items-center gap-2 text-gold-dim">
            View detail
            <span
              aria-hidden
              className="transition-transform duration-500 group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </StaggerItem>
  );
}

export default function Sectors() {
  const [lead, second, ...rest] = sectors;

  return (
    <section
      id="sectors"
      data-tone="light"
      className="relative bg-paper py-24 lg:py-32"
    >
      <Container>
        <div className="flex items-start justify-between gap-8">
          <Reveal>
            <SectionHead
              eyebrow="Our focus"
              title="What we build"
              lead="Six kinds of buildings. Each one carries its own rules and its own way of working — and we plan for them from day one."
            />
          </Reveal>
          <Reveal delay={0.1} className="hidden shrink-0 pt-2 lg:block">
            <SheetMark n="02" />
          </Reveal>
        </div>

        {/* Industrial and warehouse lead the set — they are the core of the business */}
        <Stagger className="mt-16 grid gap-6 lg:grid-cols-2">
          <SectorCard s={lead} large />
          <SectorCard s={second} large />
        </Stagger>

        <Stagger className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((s) => (
            <SectorCard key={s.slug} s={s} />
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
