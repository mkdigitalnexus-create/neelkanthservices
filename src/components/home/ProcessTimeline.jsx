import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ClipboardList, Handshake, PackageOpen, Truck } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";

export const PROCESS_STEPS = [
  {
    icon: ClipboardList,
    title: "Share Your Requirements",
    text: "Tell us the origin, destination, property type, approximate item volume and the date you have in mind.",
    detail:
      "A short enquiry is enough to begin. Floor level, lift access, packing expectations and anything unusual — a safe, a piano, a large refrigerator — are useful to mention at this stage.",
  },
  {
    icon: Handshake,
    title: "Discuss Your Moving Needs",
    text: "We talk through the scope: what needs packing, what you will prepare, access at both ends and any timing constraints.",
    detail:
      "This is where the scope becomes clear. Full packing or partial packing, shared or dedicated transport, storage between addresses and vehicle transportation are all discussed openly before anything is arranged.",
  },
  {
    icon: PackageOpen,
    title: "Plan Packing and Transportation",
    text: "Packing material, crew size and vehicle requirements are arranged around the agreed scope and schedule.",
    detail:
      "Packing groups are decided by item category, the loading order is set around what you need first at the destination, and the dispatch window is confirmed for the route.",
  },
  {
    icon: Truck,
    title: "Coordinate Delivery",
    text: "Loading, transit and unloading are scheduled so both ends of the move know what to expect and when.",
    detail:
      "The receiving address, contact person and access situation are recorded before dispatch. At delivery, items are unloaded and placed at the points you indicate.",
  },
];

/**
 * Process timeline — horizontal band on desktop, vertical rail on mobile.
 * The connecting rule draws in as the section enters the viewport.
 */
export default function ProcessTimeline({
  steps = PROCESS_STEPS,
  title = "How it works",
  intro = "A four-step sequence that keeps the move legible from the first enquiry to the final unload.",
  index = "03",
  label = "The moving journey",
  showCta = true,
  numbered = true,
  headingId = "process-heading",
}) {
  const reduce = useReducedMotion();

  return (
    <section className="doc-container mt-24 md:mt-32" aria-labelledby={headingId}>
      <SectionHeading id={headingId} index={index} label={label} title={title} intro={intro} />

      <div className="relative mt-14">
        {/* Connecting rule */}
        <motion.div
          aria-hidden="true"
          className="absolute left-[27px] top-0 h-full w-[2px] bg-ink/12 md:left-0 md:top-[27px] md:h-[2px] md:w-full"
          initial={reduce ? { scaleX: 1, scaleY: 1 } : { scaleX: 0, scaleY: 0 }}
          whileInView={{ scaleX: 1, scaleY: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left top" }}
        />

        <ol className="relative grid gap-9 md:grid-cols-4 md:gap-7">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} y={20} as="li" className="relative">
              <div className="flex gap-6 md:block">
                <div className="flex flex-col items-center">
                  <motion.span
                    initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.42, delay: 0.12 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-ink bg-paper"
                  >
                    <step.icon className="h-[22px] w-[22px] text-ink" aria-hidden="true" />
                  </motion.span>
                </div>

                <div className="pb-2 md:mt-6">
                  {numbered ? (
                    <span className="tabular label-micro text-[0.625rem] text-amber-dark">
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                  ) : null}
                  <h3 className="mt-2 font-display text-[1.105rem] font-bold leading-[1.32] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[0.905rem] leading-[1.72] text-muted">{step.text}</p>
                  {step.detail ? (
                    <p className="mt-3 text-[0.845rem] leading-[1.7] text-muted/85">{step.detail}</p>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      {showCta ? (
        <Reveal delay={0.12}>
          <div className="mt-12 flex flex-col items-start gap-4 border-t border-rule pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[58ch] text-[0.965rem] leading-[1.7] text-muted">
              Ready to start at step one? Share the requirement and we will take it from there.
            </p>
            <Link
              to="/get-a-quote"
              className="inline-flex h-12 shrink-0 items-center gap-2 rounded-[3px] border border-amber bg-amber px-7 text-[0.955rem] font-semibold text-[#20160A] shadow-[0_2px_0_0_#B96F12] transition-colors hover:bg-[#f0a03c]"
            >
              Get a Free Quote
              <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      ) : null}
    </section>
  );
}
