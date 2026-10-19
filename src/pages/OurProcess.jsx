import { Link } from "react-router-dom";
import { ArrowRight, FileText, MapPinned, PackageCheck, ShieldQuestion } from "lucide-react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/common/Reveal";
import QuoteCTA from "../components/common/QuoteCTA";
import FAQAccordion from "../components/home/FAQAccordion";
import ProcessTimeline from "../components/home/ProcessTimeline";

const EXTENDED_STEPS = [
  {
    icon: FileText,
    title: "Enquiry and requirement collection",
    text: "Origin, destination, property type, item volume, preferred date and any special items are captured through the enquiry form or a conversation.",
  },
  {
    icon: ShieldQuestion,
    title: "Scope discussion",
    text: "Packing scope, handling requirements, transport type, storage needs and vehicle transportation are discussed and recorded in plain language.",
  },
  {
    icon: PackageCheck,
    title: "Packing preparation",
    text: "Packing material, packing groups and the marking scheme are arranged, and the loading order is set against what is needed first at the destination.",
  },
  {
    icon: MapPinned,
    title: "Loading and transportation",
    text: "Items are carried out, staged and stacked in the planned order, then transported along the route and dispatch window agreed earlier.",
  },
];

const CHECKLIST = [
  "Valuables, documents and jewellery kept with you rather than packed",
  "Refrigerators defrosted and appliances disconnected in advance",
  "Perishables, open fuel cans and prohibited items removed from the load",
  "Building access arranged at both ends — lifts, service entries and parking",
  "A reachable contact person available at the destination for the delivery",
  "An item list or photographs ready to support the scope discussion",
];

export default function OurProcess() {
  return (
    <>
      <Seo
        title="Our Moving Process | Neelkanth Transport Services"
        description="See the step-by-step relocation journey — enquiry and requirement collection, scope discussion, packing preparation, loading and transportation, and delivery coordination for household and commercial moves."
        path="/our-process"
        image="assets/services/loading.jpg"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Our Process" }]}
      />

      <PageHero
        index="01"
        label="Our process"
        title="A moving process you can follow from the first enquiry"
        intro="Every move runs through the same sequence of decisions. This is the journey — what happens at each stage, what we need from you, and what is agreed before anything is loaded."
        image="assets/services/loading.jpg"
        imageAlt="Movers loading wrapped furniture and cartons into a transport container over a steel ramp"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Our Process" }]}
        objectPosition="56% 52%"
      />

      <ProcessTimeline
        headingId="process-steps-heading"
        index="02"
        label="The four stages"
        title="From requirement to delivery, in four stages"
        intro="The headline sequence. Each stage has a clear purpose and a clear handover to the next."
        showCta={false}
      />

      {/* Extended detail — alternating ruled rows */}
      <section className="doc-container mt-24 md:mt-32" aria-labelledby="process-detail-heading">
        <SectionHeading
          id="process-detail-heading"
          index="03"
          label="In more detail"
          title="What actually happens at each stage"
          intro="The practical detail behind the sequence — useful for planning a move and for setting expectations before the moving day."
        />

        <div className="mt-11 space-y-px">
          {EXTENDED_STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06} y={16}>
              <article className="group grid gap-5 border-t border-ink/12 py-8 md:grid-cols-[7rem_1fr_1.1fr] md:gap-10">
                <div className="flex items-start gap-4">
                  <span className="tabular font-display text-[2.15rem] font-extrabold leading-none text-ink/18 transition-colors group-hover:text-amber">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <step.icon className="mt-[3px] h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                  <h3 className="font-display text-[1.14rem] font-bold leading-[1.32] text-ink">
                    {step.title}
                  </h3>
                </div>
                <p className="max-w-[58ch] text-[0.955rem] leading-[1.78] text-muted">{step.text}</p>
              </article>
            </Reveal>
          ))}
          <div className="border-t border-ink/12" aria-hidden="true" />
        </div>
      </section>

      {/* Delivery coordination */}
      <section className="relative mt-24 overflow-hidden bg-ink py-16 md:mt-32 md:py-24">
        <div className="paper-grain absolute inset-0 opacity-[0.16]" aria-hidden="true" />
        <div className="chevron-band absolute inset-x-0 top-0 h-2" aria-hidden="true" />
        <div className="doc-container relative">
          <SectionHeading
            tone="dark"
            index="04"
            label="Delivery coordination"
            title="Stage five — the part most moves get wrong"
            intro="The delivery end deserves as much planning as the pick-up. Here is what coordination means in practice."
          />
          <div className="mt-11 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Confirmed receiving details",
                text: "Address, contact person and reachable phone number at the destination are recorded before dispatch.",
              },
              {
                title: "Access arranged in advance",
                text: "Lift bookings, society entry rules, parking restrictions and floor level at the destination are checked beforehand.",
              },
              {
                title: "An agreed unloading order",
                text: "Items are unloaded against the marked categories, so the room-by-room sorting at the new address is much faster.",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 0.08} y={18}>
                <article className="h-full rounded-[4px] border border-paper/15 bg-paper/[0.045] p-7">
                  <h3 className="font-display text-[1.065rem] font-bold leading-snug text-paper">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[0.925rem] leading-[1.76] text-onink/78">{card.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <p className="mt-9 max-w-[76ch] border-l-[3px] border-amber pl-5 font-serif text-[1.05rem] italic leading-[1.78] text-paper">
              “Every relocation with Neelkanth Transport is backed by an itemized move itinerary, scheduled delivery timing, and comprehensive transit insurance options confirmed before loading begins.”
            </p>
          </Reveal>
        </div>
      </section>

      {/* Preparation checklist */}
      <section className="doc-container mt-24 md:mt-32" aria-labelledby="checklist-heading">
        <div className="grid gap-10 rounded-[4px] border border-rule bg-kraft/55 p-8 md:p-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <SectionHeading
            id="checklist-heading"
            index="05"
            label="Before moving day"
            title="A short preparation checklist"
            intro="A few things worth sorting before the crew arrives. Handling these early makes the moving day noticeably smoother."
          />
          <Reveal delay={0.08}>
            <ul className="space-y-3.5">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3 border-t border-ink/12 pt-3.5">
                  <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-amber" aria-hidden="true" />
                  <span className="text-[0.935rem] leading-[1.72] text-muted">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/faq"
              className="mt-7 inline-flex items-center gap-2 text-[0.885rem] font-semibold text-brand transition-colors hover:text-amber-dark"
            >
              More moving preparation advice
              <ArrowRight className="h-[17px] w-[17px]" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <FAQAccordion
        index="06"
        label="Process questions"
        title="Questions about how a move is organised"
        ids={["quote-request", "moving-date", "shared-vs-dedicated", "after-move-support"]}
      />

      <div className="doc-container mt-20 md:mt-28">
        <QuoteCTA
          eyebrow="Start at stage one"
          title="Share your requirement and we will take it from there."
          text="A few details about the route, the property and the date are enough to begin the scope discussion."
        />
      </div>
    </>
  );
}
