import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { site, nav, sectors } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink-deep text-paper">
      <div className="survey-grid absolute inset-0 opacity-[0.05]" aria-hidden />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[110rem] px-6 sm:px-8 lg:px-12">
        <div className="grid gap-14 py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
          {/* Identity */}
          <div className="lg:col-span-4">
            <Image
              src="/brand/logo-full.svg"
              alt={site.legalName}
              width={454}
              height={237}
              className="h-24 w-auto"
            />
            <p className="mt-7 max-w-sm text-sm leading-relaxed text-paper/55">
              {site.descriptor}. We build factories, warehouses, schools, colleges,
              hospitals and townships across {site.serviceArea}.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2">
              {site.promise.map((p) => (
                <span key={p} className="eyebrow text-gold/80">
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <nav className="lg:col-span-2" aria-label="Pages">
            <h2 className="eyebrow text-paper/40">Pages</h2>
            <ul className="mt-6 space-y-3.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rule-link text-sm text-paper/75 transition-colors hover:text-gold-bright"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sectors */}
          <nav className="lg:col-span-3" aria-label="What we build">
            <h2 className="eyebrow text-paper/40">What we build</h2>
            <ul className="mt-6 space-y-3.5">
              {sectors.map((s) => (
                <li key={s.slug} className="flex items-baseline gap-3">
                  <span className="eyebrow text-gold/45">{s.code}</span>
                  <Link
                    href={`/what-we-build#${s.slug}`}
                    className="rule-link text-sm text-paper/75 transition-colors hover:text-gold-bright"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="eyebrow text-paper/40">Get in touch</h2>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-3.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.5} />
                <span className="flex flex-col gap-1.5">
                  {site.phones.map((p) => (
                    <a
                      key={p.href}
                      href={p.href}
                      className="font-mono text-paper/80 transition-colors hover:text-gold-bright"
                    >
                      {p.label}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.5} />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all font-mono text-paper/80 transition-colors hover:text-gold-bright"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.5} />
                <address className="not-italic leading-relaxed text-paper/70">
                  {site.address.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Referral note — carried over from the brochure's closing page */}
        <div className="border-t border-ink-line py-8">
          <p className="text-sm text-paper/55">
            Know an industrial owner, school trust, or hospital board planning a build?{" "}
            <Link href="/contact" className="rule-link text-gold-bright">
              Refer them to us
            </Link>{" "}
            and earn a payout once the project is confirmed.
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-ink-line py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow text-paper/35">
            © {year} {site.legalName}
          </p>
          <p className="eyebrow text-paper/35">
            {site.promise.join(" · ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
