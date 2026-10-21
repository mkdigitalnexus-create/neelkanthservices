import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import { fadeUp, stagger, viewport } from "../common/motion";

const steps = [
  { t: "Share Your Requirement", d: "Tell us what you need to move, from where to where, and when." },
  { t: "Discuss Cargo and Route", d: "We review cargo type, dimensions, loading points and route considerations." },
  { t: "Review the Quote", d: "You receive a clear proposal covering the vehicle category and scope." },
  { t: "Coordinate the Transport", d: "Pickup, loading and movement are planned and communicated." },
  { t: "Delivery Coordination", d: "We coordinate the unloading point and keep you informed until handover." },
];

export default function Process() {
  return (
    <section className="section bg-surface">
      <div className="container-x">
        <SectionHeading eyebrow="How it works" title="A Clear Process from Enquiry to Delivery" align="center" />
        <motion.ol variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewport} className="relative mt-14 grid gap-10 md:grid-cols-5 md:gap-6">
          <span className="absolute left-[19px] top-2 h-[calc(100%-16px)] w-px bg-line md:left-0 md:top-5 md:h-px md:w-full" aria-hidden="true" />
          {steps.map((s, i) => (
            <motion.li key={s.t} variants={fadeUp} className="relative flex gap-5 md:block">
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-white font-heading text-sm font-bold text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="md:mt-6">
                <h3 className="font-heading text-[1.05rem] font-bold text-navy">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
