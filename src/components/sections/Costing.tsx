import { Check, Minus } from "lucide-react";
import { costing, whyUs } from "@/lib/site";
import { Container, SectionHead, SheetMark } from "@/components/ui/Bits";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function Costing({ sheet = true }: { sheet?: boolean }) {
  return (
    <section
      id="costing"
      data-tone="light"
      className="relative bg-paper py-24 lg:py-32"
    >
      <Container>
        <div className="flex items-start justify-between gap-8">
          <Reveal>
            <SectionHead
              eyebrow="Costing & trust"
              title="Open costs, no surprises"
              lead="You see the full item-by-item cost list before work begins, and the budget stage by stage after that."
            />
          </Reveal>
          {sheet && (
            <Reveal delay={0.1} className="hidden shrink-0 pt-2 lg:block">
              <SheetMark n="06" />
            </Reveal>
          )}
        </div>

        {/* The contrast the brochure draws — kept honest and specific */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="tick-frame h-full bg-ink p-9 text-paper lg:p-11">
              <h3 className="text-2xl text-gold-bright">
                With EmpireTech Global
              </h3>
              <ul className="mt-8 space-y-5">
                {costing.ours.map((item) => (
                  <li key={item} className="flex gap-4">
                    <Check
                      className="mt-0.5 size-5 shrink-0 text-gold"
                      strokeWidth={2}
                      aria-hidden
                    />
                    <span className="leading-relaxed text-paper/85">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.08}>
            <div className="h-full border border-rule bg-paper-pure p-9 lg:p-11">
              <h3 className="text-2xl text-ink/70">
                Typical fragmented contracting
              </h3>
              <ul className="mt-8 space-y-5">
                {costing.theirs.map((item) => (
                  <li key={item} className="flex gap-4">
                    <Minus
                      className="mt-0.5 size-5 shrink-0 text-muted/50"
                      strokeWidth={2}
                      aria-hidden
                    />
                    <span className="leading-relaxed text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Why us — six reasons, as a numbered index */}
        <Reveal>
          <h3 className="eyebrow mt-24 text-gold-dim">Why EmpireTech Global</h3>
        </Reveal>

        <Stagger as="ol" className="mt-8 grid gap-x-12 gap-y-px sm:grid-cols-2">
          {whyUs.map((w, i) => (
            <StaggerItem key={w.title} as="li">
              <div className="group flex gap-6 border-t border-rule py-7 transition-colors duration-500 hover:border-gold/50">
                <span className="font-mono text-sm tabular-nums text-gold-dim/70 transition-transform duration-500 group-hover:translate-x-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="font-display text-xl text-ink">{w.title}</h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {w.body}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
