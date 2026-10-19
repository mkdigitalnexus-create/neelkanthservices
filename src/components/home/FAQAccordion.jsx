import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { faqs } from "../../data/faqs";
import Accordion from "../common/Accordion";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";

/** Homepage FAQ block — a curated subset of the full FAQ library. */
export default function FAQAccordion({ ids, title, intro, index = "06", label = "Common questions" }) {
  const items = ids ? faqs.filter((f) => ids.includes(f.id)) : faqs.slice(0, 6);

  return (
    <section className="doc-container mt-24 md:mt-32" aria-labelledby="faq-heading">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        <div>
          <SectionHeading
            id="faq-heading"
            index={index}
            label={label}
            title={title || "Questions people ask before a move"}
            intro={
              intro ||
              "Straight answers about quotations, packing, intercity moves and vehicle transportation — written to inform, not to promise."
            }
          />
          <Reveal delay={0.08}>
            <div className="mt-8 rounded-[3px] border border-rule bg-kraft/60 p-6">
              <p className="text-[0.915rem] leading-[1.72] text-muted">
                Still have a question that is not covered here? Send it through the enquiry form and
                it will be addressed as part of the discussion.
              </p>
              <Link
                to="/faq"
                className="mt-4 inline-flex items-center gap-2 text-[0.875rem] font-semibold text-brand transition-colors hover:text-amber-dark"
              >
                Browse all frequently asked questions
                <ArrowRight className="h-[17px] w-[17px]" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <Accordion items={items} defaultOpenId={items[0]?.id} />
        </Reveal>
      </div>
    </section>
  );
}
