import Breadcrumbs from "./Breadcrumbs";
import Reveal from "./Reveal";

/**
 * Interior page banner — a photographic band with the "document" header block:
 * breadcrumb trail, index numeral, tracked label, headline and intro measure.
 */
export default function PageHero({
  index,
  label,
  title,
  intro,
  image,
  imageAlt,
  breadcrumbs = [],
  children,
  objectPosition = "50% 55%",
  height,
}) {
  return (
    <section
      className="relative w-full overflow-hidden bg-ink"
      style={{ minHeight: height || "clamp(22rem, 36vw, 32rem)" }}
    >
      {image ? (
        <img
          src={image}
          alt={imageAlt}
          width="1536"
          height="1024"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-72"
          style={{ objectPosition }}
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/38" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-y-0 left-0 w-[6px] bg-amber" aria-hidden="true" />

      <div className="doc-container relative flex min-h-full flex-col justify-center py-12 md:py-16">
        {breadcrumbs.length ? <Breadcrumbs items={breadcrumbs} tone="dark" /> : null}

        <Reveal className="mt-6 md:mt-7">
          <div className="flex items-center gap-3">
            {index ? (
              <span className="tabular font-display text-[1.35rem] font-extrabold leading-none text-amber">
                {index}
              </span>
            ) : null}
            <span className="h-[2px] w-9 bg-amber" aria-hidden="true" />
            <span className="label-micro text-paper/82">{label}</span>
          </div>

          <h1 className="mt-4 md:mt-5 max-w-[22ch] font-display font-extrabold display-tight text-paper text-[clamp(2.05rem,5.4vw,3.65rem)]">
            {title}
          </h1>

          {intro ? (
            <p className="mt-4 md:mt-5 max-w-[62ch] text-[1.025rem] leading-[1.72] text-onink/82 md:text-[1.105rem]">
              {intro}
            </p>
          ) : null}

          {children}
        </Reveal>
      </div>
    </section>
  );
}
