import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { img } from "@/lib/images";
import { Container } from "@/components/ui/Bits";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function CTA() {
  const blocks = [
    {
      icon: Phone,
      label: "Call us",
      items: site.phones.map((p) => ({ text: p.label, href: p.href })),
    },
    {
      icon: Mail,
      label: "Email us",
      items: [{ text: site.email, href: `mailto:${site.email}` }],
    },
    {
      icon: MapPin,
      label: "Visit us",
      items: site.address.lines.map((l) => ({ text: l, href: undefined })),
    },
  ];

  return (
    <section
      id="contact"
      data-tone="dark"
      className="relative overflow-hidden bg-ink-deep py-24 text-paper lg:py-32"
    >
      <div className="absolute inset-0">
        <Image
          src={img.ctaLetsBuild.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/85 to-ink-deep/70"
        />
      </div>

      <Container className="relative">
        <Reveal>
          <span className="eyebrow text-gold-bright">Grow with us</span>
          <h2 className="mt-6 max-w-4xl text-[clamp(2.4rem,5.5vw,4.5rem)] font-light leading-[1.04] text-paper">
            Let&rsquo;s build.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/70">
            Planning a factory, warehouse, school, college, hospital or township
            project? We&rsquo;re ready to scope it with you.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-gold px-8 py-4.5 font-sans text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-ink transition-colors duration-500 hover:bg-gold-bright"
            >
              Start a project brief
              <span
                aria-hidden
                className="transition-transform duration-500 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            <a
              href={site.phones[0].href}
              className="inline-flex items-center gap-3 border border-paper/25 px-8 py-4.5 font-mono text-[0.8125rem] tracking-[0.08em] text-paper transition-colors duration-500 hover:border-gold hover:text-gold-bright"
            >
              <Phone className="size-4" strokeWidth={1.75} />
              {site.phones[0].label}
            </a>
          </div>
        </Reveal>

        <Stagger className="mt-20 grid gap-10 border-t border-paper/15 pt-12 sm:grid-cols-3">
          {blocks.map(({ icon: Icon, label, items }) => (
            <StaggerItem key={label}>
              <div className="flex gap-4">
                <Icon
                  className="mt-0.5 size-5 shrink-0 text-gold"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="eyebrow text-paper/45">{label}</h3>
                  <div className="mt-4 space-y-1.5">
                    {items.map((it) =>
                      it.href ? (
                        <a
                          key={it.text}
                          href={it.href}
                          className="block break-words font-mono text-sm text-paper/85 transition-colors hover:text-gold-bright"
                        >
                          {it.text}
                        </a>
                      ) : (
                        <span
                          key={it.text}
                          className="block text-sm leading-relaxed text-paper/70"
                        >
                          {it.text}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
