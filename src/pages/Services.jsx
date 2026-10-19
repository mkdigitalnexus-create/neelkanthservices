import { Link } from "react-router-dom";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import ServicesGrid from "../components/home/ServicesGrid";
import FAQAccordion from "../components/home/FAQAccordion";
import QuoteCTA from "../components/common/QuoteCTA";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/common/Reveal";
import { services } from "../data/services";

const BENEFITS = [
  {
    title: "One catalogue, one conversation",
    text: "Whatever combination of services your move needs, it is discussed as a single scope rather than separate arrangements.",
  },
  {
    title: "Scope you can edit",
    text: "Packing support, handling help, transport, vehicle movement and storage can be taken together or separately.",
  },
  {
    title: "Preparation notes included",
    text: "Each service page explains what to prepare before the work begins, so there are fewer surprises on the day.",
  },
  {
    title: "Routes discussed honestly",
    text: "Coverage is confirmed for your specific route instead of being assumed from a marketing list.",
  },
];

export default function Services() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What relocation and moving services does Neelkanth Transport Services provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Neelkanth Transport Services provides complete household shifting, corporate office relocation, multi-layer packing and unpacking, loading and unloading, specialized car and bike transportation, local same-day shifting, intercity highway moves, and secure storage and warehousing across Punjab, Haryana, Chandigarh Tricity, and Delhi NCR.",
        },
      },
      {
        "@type": "Question",
        name: "Can more than one service be combined for a single move?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Packing support, handling help, transportation, vehicle movement and storage can be combined into one custom package or requested individually based on your moving requirements.",
        },
      },
    ],
  };

  return (
    <>
      <Seo
        title="Packers and Movers Services | Neelkanth Transport Services"
        description="Comprehensive relocation services — household shifting, office relocation, professional packing, vehicle carriers, local city shifting, and intercity freight across North India."
        path="/services"
        image="assets/services/packing.jpg"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
        jsonLd={faqJsonLd}
      />

      <PageHero
        index="01"
        label="Services"
        title="Relocation services, organised so you only take what you need"
        intro="Eight specialized service categories covering the full journey of a move — from packing the first carton with multi-layer materials to safe container transit and room-by-room delivery."
        image="assets/services/packing.jpg"
        imageAlt="Hands wrapping a wooden drawer unit in bubble wrap and stretch film beside stacked cartons"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
        objectPosition="58% 50%"
      >
        <ul className="mt-6 flex flex-wrap gap-2">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                to={`/services/${s.slug}`}
                className="inline-flex items-center gap-2 rounded-[2px] border border-paper/25 px-3 py-1.5 text-[0.775rem] text-paper/85 transition-colors hover:border-amber hover:text-amber"
              >
                <span className="tabular label-micro text-[0.575rem] text-amber">{s.index}</span>
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </PageHero>

      <ServicesGrid />

      <section className="doc-container mt-24 md:mt-32" aria-labelledby="benefits-heading">
        <SectionHeading
          id="benefits-heading"
          index="02"
          label="How the catalogue works"
          title="Built to be combined, not sold as a bundle"
          intro="A move rarely fits one category cleanly. The service catalogue is structured so the scope can be shaped around the actual requirement."
        />
        <div className="mt-11 grid gap-x-12 gap-y-px md:grid-cols-2">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={(i % 2) * 0.08} y={16}>
              <div className="flex h-full gap-5 border-t border-ink/12 py-7">
                <span className="tabular font-display text-[1.6rem] font-extrabold leading-none text-ink/20" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-[1.045rem] font-bold leading-snug text-ink">{b.title}</h3>
                  <p className="mt-2.5 max-w-[52ch] text-[0.935rem] leading-[1.74] text-muted">{b.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FAQAccordion
        index="03"
        label="Before you choose"
        title="Questions about choosing and combining services"
        intro="What to know before deciding which parts of a move you want handled and which you will prepare yourself."
        ids={["estimate-details", "packing-available", "intercity-move", "vehicle-transport", "quote-request"]}
      />

      <div className="doc-container mt-20 md:mt-28">
        <QuoteCTA
          eyebrow="Not sure which service you need?"
          title="Describe the move — we will help shape the scope."
          text="Share the route, the property type and what needs to move. The service mix can be worked out together."
        />
      </div>
    </>
  );
}
