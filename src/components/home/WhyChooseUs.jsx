import {
  ClipboardCheck,
  MessageSquareText,
  PackageSearch,
  Route,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";

const POINTS = [
  {
    icon: ClipboardCheck,
    title: "An organized moving process",
    text: "Every move follows a sequence — requirement, scope, packing plan, loading, transport and delivery coordination — so nothing depends on guesswork on the day.",
  },
  {
    icon: PackageSearch,
    title: "Attention to the belongings",
    text: "Fragile items, furniture surfaces, appliances and everyday cartons are treated as different problems, each with its own packing and handling approach.",
  },
  {
    icon: MessageSquareText,
    title: "Clear communication",
    text: "Access timings, scope changes and delivery expectations are discussed openly rather than discovered after the vehicle has already left.",
  },
  {
    icon: SlidersHorizontal,
    title: "Practical relocation planning",
    text: "Floor levels, lift access, parking distance, item volume and preferred timing are considered before crew and material are arranged.",
  },
  {
    icon: Route,
    title: "A convenient enquiry experience",
    text: "Share your requirement in the way that suits you — a short form, a detailed quotation request, or a direct conversation about the route.",
  },
  {
    icon: ShieldCheck,
    title: "Service options for different moving needs",
    text: "Full-service moves, packing-only support, loading and unloading help, vehicle transport or storage between addresses — scope is matched to the requirement.",
  },
];

/** Why choose us — asymmetric editorial split with a ruled two-column list. */
export default function WhyChooseUs() {
  return (
    <section className="relative mt-24 overflow-hidden md:mt-32" aria-labelledby="why-heading">
      <div className="absolute inset-0 bg-kraft/65" aria-hidden="true" />
      <div className="hatch-soft absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="absolute inset-y-0 left-0 w-[6px] bg-amber" aria-hidden="true" />

      <div className="doc-container relative py-16 md:py-24">
        <SectionHeading
          id="why-heading"
          index="02"
          label="Why choose us"
          title="The difference is in how the move is planned, not how fast it is promised"
          intro="Relocation is a sequence of small decisions that add up to total peace of mind. Here is why over 18,500+ households and corporate clients across North India trust Neelkanth Transport."
        />

        <div className="mt-12 grid gap-x-12 gap-y-px md:grid-cols-2">
          {POINTS.map((point, i) => (
            <Reveal key={point.title} delay={(i % 2) * 0.08} y={16}>
              <div className="group flex h-full gap-5 border-t border-ink/12 py-7">
                <span
                  className="tabular font-display text-[1.65rem] font-extrabold leading-none text-ink/18 transition-colors group-hover:text-amber"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex items-center gap-2.5">
                    <point.icon className="h-[19px] w-[19px] text-teal" aria-hidden="true" />
                    <h3 className="font-display text-[1.055rem] font-bold leading-snug text-ink">
                      {point.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 max-w-[52ch] text-[0.935rem] leading-[1.74] text-muted">
                    {point.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-[68ch] border-l-[3px] border-amber pl-5 font-serif text-[1.16rem] italic leading-[1.62] text-ink">
            “We stand by our commitments: an itemized written quote with zero hidden charges, permanent background-verified packing crews, and complete transit accountability from departure to final placement.”
          </p>
        </Reveal>
      </div>
    </section>
  );
}
