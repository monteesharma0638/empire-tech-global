import Image from "next/image";
import Link from "next/link";
import type { ImageAsset } from "@/lib/images";
import { Container } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Every inner page opens on a navy band — the header sits transparent over it,
 * so this is a layout requirement as much as a styling one.
 */
export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  crumb,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image: ImageAsset;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-deep pb-20 pt-40 text-paper lg:pb-28 lg:pt-52">
      <div className="absolute inset-0">
        <Image
          src={image.src}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-cover opacity-45"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/80 to-ink-deep/60"
        />
        <div className="survey-grid absolute inset-0 opacity-[0.06]" aria-hidden />
      </div>

      <Container className="relative">
        <Reveal>
          <nav aria-label="Breadcrumb" className="eyebrow text-paper/40">
            <Link href="/" className="transition-colors hover:text-gold-bright">
              Home
            </Link>
            <span aria-hidden className="px-2.5">
              /
            </span>
            <span className="text-gold-bright">{crumb}</span>
          </nav>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="eyebrow mt-10 text-gold-bright">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.2rem,5.4vw,4.25rem)] font-light leading-[1.05] text-paper">
            {title}
          </h1>
          {lead && (
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-paper/70">
              {lead}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
