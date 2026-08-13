import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/lib/site";
import { img } from "@/lib/images";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/ContactForm";
import { Container, Eyebrow } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Planning a factory, warehouse, school, college, hospital or township project in Rajasthan or the NCR belt? Send us a brief and a director will call you back.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Grow with us"
        title="Tell us what you're planning to build."
        lead="Send a short brief and one of our directors will call you back. If you would rather talk first, the numbers below reach us directly."
        image={img.ctaLetsBuild}
      />

      <section className="bg-paper py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <h2 className="text-3xl text-ink">Project brief</h2>
              <p className="mt-3 text-muted">
                Fields marked <span className="text-gold-dim">*</span> are required.
                Everything else helps us come back with something useful.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </Reveal>

            <div className="lg:col-span-5">
              <Reveal direction="left" className="lg:sticky lg:top-32">
                <div className="tick-frame border border-rule bg-paper-pure p-9">
                  <Eyebrow>Direct lines</Eyebrow>

                  <ul className="mt-8 space-y-7">
                    <li className="flex gap-4">
                      <Phone className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.5} />
                      <div>
                        <h3 className="eyebrow text-muted">Call us</h3>
                        <div className="mt-2.5 space-y-1">
                          {site.phones.map((p) => (
                            <a
                              key={p.href}
                              href={p.href}
                              className="block font-mono text-base text-ink transition-colors hover:text-gold-dim"
                            >
                              {p.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <Mail className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.5} />
                      <div>
                        <h3 className="eyebrow text-muted">Email us</h3>
                        <a
                          href={`mailto:${site.email}`}
                          className="mt-2.5 block break-all font-mono text-base text-ink transition-colors hover:text-gold-dim"
                        >
                          {site.email}
                        </a>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <MapPin className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.5} />
                      <div>
                        <h3 className="eyebrow text-muted">Visit us</h3>
                        <address className="mt-2.5 not-italic leading-relaxed text-ink">
                          {site.address.lines.map((l) => (
                            <span key={l} className="block">
                              {l}
                            </span>
                          ))}
                        </address>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <Clock className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.5} />
                      <div>
                        <h3 className="eyebrow text-muted">Hours</h3>
                        <p className="mt-2.5 leading-relaxed text-ink">
                          Monday to Saturday, 10:00 – 19:00 IST
                        </p>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-9 border-t border-rule pt-7">
                    <Eyebrow>Speak to a director</Eyebrow>
                    <ul className="mt-5 space-y-5">
                      {site.directors.map((d) => (
                        <li key={d.name} className="flex items-start gap-4">
                          <div className="relative size-12 shrink-0 overflow-hidden rounded-full border border-rule bg-ink">
                            <Image
                              src={img[d.photo].src}
                              alt=""
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-display text-lg text-ink">{d.name}</p>
                            <p className="text-sm text-muted">
                              {d.role} · {d.credential}
                            </p>
                            <a
                              href={d.href}
                              className="rule-link mt-1 inline-block font-mono text-sm text-gold-dim"
                            >
                              {d.phone}
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
