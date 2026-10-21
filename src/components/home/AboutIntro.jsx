import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { imageReveal, fadeUp, stagger, viewport } from "../common/motion";

const points = ["Transport planned around cargo, route and timing", "Vehicle categories matched to the consignment", "Clear updates and coordination at every stage"];

export default function AboutIntro() {
  return (
    <section className="section bg-white">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[55fr_45fr] lg:gap-16">
        <motion.div variants={imageReveal} initial="hidden" whileInView="show" viewport={viewport} className="relative">
          <div className="aspect-[5/4] overflow-hidden rounded-md">
            <img src="/assets/services/about.jpg" alt="Transport yard with trucks being coordinated for loading" loading="lazy" width={1200} height={960} className="h-full w-full object-cover" />
          </div>
          <span className="absolute -bottom-3 left-8 h-1.5 w-28 bg-gold" aria-hidden="true" />
        </motion.div>

        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewport}>
          <motion.div variants={fadeUp} className="mb-4 flex items-center gap-3">
            <span className="gold-line" />
            <span className="eyebrow text-blue">About Neelkhanth</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="h-section text-navy">Transport Solutions That Keep Business Moving.</motion.h2>
          <motion.p variants={fadeUp} className="lead mt-6">
            Neelkhanth Transport Services works with manufacturers, distributors and project teams that depend on road transport to keep their operations on schedule.
          </motion.p>
          <motion.p variants={fadeUp} className="lead mt-4">
            From full truck loads to trailer movements, we focus on understanding the cargo, selecting the right vehicle category and coordinating each journey with care.
          </motion.p>
          <motion.ul variants={fadeUp} className="mt-7 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[0.95rem] font-medium text-ink">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface-blue text-blue"><Check size={12} strokeWidth={3} /></span>
                {p}
              </li>
            ))}
          </motion.ul>
          <motion.div variants={fadeUp} className="mt-8">
            <Link to="/about" className="link-arrow">Learn more about us <ArrowRight size={18} /></Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
