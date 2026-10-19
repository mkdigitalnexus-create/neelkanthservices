import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, SearchX, X } from "lucide-react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/common/Reveal";
import Accordion from "../components/common/Accordion";
import QuoteCTA from "../components/common/QuoteCTA";
import { faqs, faqCategories } from "../data/faqs";

export default function FAQ() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f) => {
      const matchesCategory = category === "all" || f.category === category;
      const matchesQuery =
        !q ||
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q) ||
        f.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const grouped = useMemo(() => {
    const map = new Map();
    filtered.forEach((f) => {
      if (!map.has(f.category)) map.set(f.category, []);
      map.get(f.category).push(f);
    });
    return Array.from(map.entries());
  }, [filtered]);

  const labelFor = (id) => faqCategories.find((c) => c.id === id)?.label || id;

  return (
    <>
      <Seo
        title="Frequently Asked Questions | Neelkanth Transport Services"
        description="Answers about moving quotations, household shifting, packing, transportation, intercity moves, vehicle transport and preparing for moving day. Searchable and categorised FAQ."
        path="/faq"
        image="assets/services/packing.jpg"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "FAQs" }]}
      />

      <PageHero
        index="01"
        label="Frequently asked questions"
        title="Straight answers about moving, packing and transport"
        intro="Clear, transparent answers about our moving process, multi-layer packing standards, pricing structure, transit schedules, and insurance coverage."
        image="assets/services/packing.jpg"
        imageAlt="Hands wrapping a wooden drawer unit in bubble wrap and stretch film beside stacked cartons"
        breadcrumbs={[{ label: "FAQs" }]}
        objectPosition="56% 50%"
      />

      {/* Search + filters */}
      <section className="doc-container mt-12 md:mt-16" aria-labelledby="faq-search-heading">
        <Reveal>
          <div className="rounded-[4px] border border-rule bg-white p-6 md:p-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="w-full lg:max-w-[26rem]">
                <label htmlFor="faq-search" className="label-micro text-[0.615rem] text-ink/70">
                  Search questions
                </label>
                <div className="relative mt-2">
                  <Search
                    className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted"
                    aria-hidden="true"
                  />
                  <input
                    id="faq-search"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g. packing, intercity, quotation…"
                    className="field-rule h-12 w-full pl-11 pr-10 text-[0.94rem] text-ink placeholder:text-muted/70"
                  />
                  {query ? (
                    <button
                      type="button"
                      onClick={() => setQuery("")}
                      aria-label="Clear search"
                      className="absolute right-2.5 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-[3px] text-muted transition-colors hover:bg-ink hover:text-paper"
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  ) : null}
                </div>
              </div>

              <div className="w-full">
                <p className="label-micro text-[0.615rem] text-ink/70">Filter by category</p>
                <ul className="mt-2.5 flex flex-wrap gap-2">
                  <li>
                    <button
                      type="button"
                      onClick={() => setCategory("all")}
                      aria-pressed={category === "all"}
                      className={`rounded-[2px] border px-3.5 py-2 text-[0.825rem] font-medium transition-colors ${
                        category === "all"
                          ? "border-ink bg-ink text-paper"
                          : "border-rule bg-white text-muted hover:border-ink/35 hover:text-ink"
                      }`}
                    >
                      All questions
                    </button>
                  </li>
                  {faqCategories.map((c) => (
                    <li key={c.id}>
                      <button
                        type="button"
                        onClick={() => setCategory(c.id)}
                        aria-pressed={category === c.id}
                        className={`rounded-[2px] border px-3.5 py-2 text-[0.825rem] font-medium transition-colors ${
                          category === c.id
                            ? "border-ink bg-ink text-paper"
                            : "border-rule bg-white text-muted hover:border-ink/35 hover:text-ink"
                        }`}
                      >
                        {c.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-5 border-t border-rule pt-4 text-[0.845rem] text-muted" aria-live="polite">
              Showing <strong className="text-ink">{filtered.length}</strong> of {faqs.length} questions
              {category !== "all" ? ` in ${labelFor(category)}` : ""}
              {query ? ` matching “${query}”` : ""}.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Results */}
      <section className="doc-container mt-14 md:mt-20" aria-labelledby="faq-results-heading">
        {filtered.length === 0 ? (
          <Reveal>
            <div className="flex flex-col items-center rounded-[4px] border border-dashed border-rule bg-kraft/50 px-6 py-16 text-center">
              <SearchX className="h-10 w-10 text-ink/28" aria-hidden="true" />
              <h2
                id="faq-results-heading"
                className="mt-5 font-display text-[1.35rem] font-extrabold display-tight text-ink"
              >
                No questions match that search
              </h2>
              <p className="mt-3 max-w-[46ch] text-[0.945rem] leading-[1.72] text-muted">
                Try a different keyword, or clear the filters to see the full library. If your
                question is not covered here, send it through the enquiry form.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setCategory("all");
                  }}
                  className="inline-flex h-11 items-center rounded-[3px] border border-ink px-5 text-[0.9rem] font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  Clear filters
                </button>
                <QuoteCTAButton />
              </div>
            </div>
          </Reveal>
        ) : (
          <div className="space-y-14">
            {grouped.map(([catId, items], gi) => (
              <div key={catId} className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
                <SectionHeading
                  id={`faq-group-${catId}`}
                  index={String(gi + 1).padStart(2, "0")}
                  label={labelFor(catId)}
                  title={`${items.length} question${items.length > 1 ? "s" : ""} on ${labelFor(
                    catId
                  ).toLowerCase()}`}
                  intro={`Answers covering ${labelFor(catId).toLowerCase()}, written to inform rather than to promise.`}
                />
                <Reveal delay={0.05}>
                  <Accordion items={items} defaultOpenId={items[0]?.id} compact />
                </Reveal>
              </div>
            ))}
          </div>
        )}
      </section>

      <div className="doc-container mt-20 md:mt-28">
        <QuoteCTA
          eyebrow="Still have a question?"
          title="Ask it as part of a quotation enquiry."
          text="Include your question in the additional information section and it will be addressed when the scope is discussed."
        />
      </div>
    </>
  );
}

function QuoteCTAButton() {
  return (
    <Link
      to="/get-a-quote"
      className="inline-flex h-11 items-center rounded-[3px] border border-amber bg-amber px-5 text-[0.9rem] font-semibold text-[#20160A] transition-colors hover:bg-[#f0a03c]"
    >
      Ask a question
    </Link>
  );
}
