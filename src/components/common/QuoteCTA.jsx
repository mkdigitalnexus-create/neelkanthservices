import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import Reveal from "./Reveal";

/**
 * Shared quotation call-to-action band used across pages and service templates.
 */
export default function QuoteCTA({
  eyebrow = "Request a quotation",
  title = "Tell us what needs to move, and when.",
  text = "Share a few details about your requirement and we will prepare a discussion around the scope — packing, handling, transport and timing.",
  primaryLabel = "Get a Free Quote",
  primaryTo = "/get-a-quote",
  secondaryLabel = "Contact Us",
  secondaryTo = "/contact",
  tone = "ink",
  className = "",
}) {
  const dark = tone === "ink";

  return (
    <section
      className={`relative overflow-hidden rounded-[4px] border ${
        dark ? "border-ink bg-ink" : "border-rule bg-kraft"
      } ${className}`}
      aria-label="Request a quotation"
    >
      <div
        className={`absolute inset-y-0 right-0 w-1.5 ${dark ? "bg-amber" : "bg-amber"}`}
        aria-hidden="true"
      />
      <div className="hatch-soft absolute inset-0 opacity-70" aria-hidden="true" />

      <Reveal className="relative">
        <div className="grid gap-8 px-6 py-11 md:grid-cols-[1fr_auto] md:items-end md:gap-12 md:px-11 md:py-14">
          <div className="max-w-[52ch]">
            <div className="flex items-center gap-2">
              <FileText
                className={`h-4 w-4 ${dark ? "text-amber" : "text-amber-dark"}`}
                aria-hidden="true"
              />
              <span className={`label-micro ${dark ? "text-amber" : "text-amber-dark"}`}>{eyebrow}</span>
            </div>
            <h2
              className={`mt-4 font-display font-extrabold display-tight text-[clamp(1.65rem,3.9vw,2.55rem)] ${
                dark ? "text-paper" : "text-ink"
              }`}
            >
              {title}
            </h2>
            <p
              className={`mt-4 text-[1.015rem] leading-[1.72] ${
                dark ? "text-onink/80" : "text-muted"
              }`}
            >
              {text}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Link
              to={primaryTo}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[3px] border border-amber bg-amber px-6 text-[0.94rem] font-semibold text-[#20160A] shadow-[0_2px_0_0_#B96F12] transition-colors hover:bg-[#f0a03c]"
            >
              {primaryLabel}
              <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
            </Link>
            <Link
              to={secondaryTo}
              className={`inline-flex h-12 items-center justify-center gap-2 rounded-[3px] border px-6 text-[0.94rem] font-semibold transition-colors ${
                dark
                  ? "border-paper/35 text-paper hover:bg-paper hover:text-ink"
                  : "border-ink/30 text-ink hover:bg-ink hover:text-paper"
              }`}
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
