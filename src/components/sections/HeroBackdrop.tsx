import { getImageProps } from "next/image";
import { img } from "@/lib/images";

/**
 * Art-directed hero plate.
 *
 * The landscape and portrait crops are genuinely different images, so this uses
 * a real <picture> element. Toggling two <Image> tags with `hidden`/`sm:hidden`
 * looks identical but makes the browser download BOTH files — and preload both,
 * since each carries `priority`. <source media> lets the browser pick one.
 *
 * Server component: getImageProps runs at render time, off the client bundle.
 * The ken-burns drift is neutralised by the prefers-reduced-motion rule in
 * globals.css, so it needs no JS check here.
 */
export default function HeroBackdrop() {
  const shared = { fill: true, priority: true, sizes: "100vw" } as const;

  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...shared, quality: 82, src: img.heroDusk.src, alt: "" });

  const {
    props: { srcSet: mobileSrcSet, ...rest },
  } = getImageProps({ ...shared, quality: 80, src: img.heroMobile.src, alt: "" });

  return (
    <div className="absolute inset-0">
      <picture>
        <source media="(min-width: 640px)" srcSet={desktopSrcSet} />
        <source srcSet={mobileSrcSet} />
        <img
          {...rest}
          alt={img.heroDusk.alt}
          className="ken-burns absolute inset-0 size-full object-cover object-center"
        />
      </picture>

      {/* Scrims: the vertical one anchors the foot strip, the horizontal one
          protects the headline column. Kept light so the steelwork still reads. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/30 to-ink-deep/15"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink-deep/90 via-ink-deep/40 to-transparent sm:via-ink-deep/25"
      />
      <div className="survey-grid absolute inset-0 opacity-[0.06]" aria-hidden />
    </div>
  );
}
