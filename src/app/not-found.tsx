import Image from "next/image";
import Link from "next/link";
import { img } from "@/lib/images";
import { nav } from "@/lib/site";
import { Container } from "@/components/ui/Bits";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-deep py-32 text-paper">
      <div className="absolute inset-0">
        <Image
          src={img.notFound.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div aria-hidden className="absolute inset-0 bg-ink-deep/70" />
        <div className="survey-grid absolute inset-0 opacity-[0.06]" aria-hidden />
      </div>

      <Container className="relative">
        <p className="eyebrow text-gold-bright">Sheet not found</p>
        <h1 className="mt-6 max-w-3xl text-[clamp(2.2rem,5.5vw,4rem)] font-light leading-[1.05]">
          This drawing isn&rsquo;t in the set.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
          The page you asked for doesn&rsquo;t exist. Here is the rest of the set.
        </p>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
          <li>
            <Link
              href="/"
              className="rule-link font-sans text-[0.8125rem] uppercase tracking-[0.12em] text-gold-bright"
            >
              Home
            </Link>
          </li>
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rule-link font-sans text-[0.8125rem] uppercase tracking-[0.12em] text-paper/75"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
