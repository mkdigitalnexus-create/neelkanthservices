import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fleet } from "../../data/fleet";
import { fadeUp, imageReveal, stagger, viewport } from "../common/motion";

export default function FleetShowcase() {
  return (
    <section className="bg-navy text-white">
      <div className="grid lg:grid-cols-[42fr_58fr]">
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewport} className="flex items-center px-5 py-16 sm:px-7 lg:py-24 lg:pl-[max(44px,calc((100vw-1408px)/2+64px))] lg:pr-16">
          <div className="max-w-lg">
            <motion.div variants={fadeUp} className="mb-4 flex items-center gap-3">
              <span className="gold-line" />
              <span className="eyebrow text-gold">Our fleet</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="h-section">Vehicles for the Journey Ahead.</motion.h2>
            <motion.p variants={fadeUp} className="lead mt-6 text-white/70">
              Vehicle categories are selected to suit the cargo, the route and the loading conditions at each end of the journey.
            </motion.p>
            <motion.ul variants={fadeUp} className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {fleet.map((f, i) => (
                <li key={f.id} className="flex items-center justify-between py-3.5">
                  <span className="flex items-center gap-4 font-heading font-bold">
                    <span className="text-xs tabular-nums" style={{ color: "#6FA8F0" }}>{String(i + 1).padStart(2, "0")}</span>
                    {f.name}
                  </span>
                  <span className="text-xs text-white/50">{f.group}</span>
                </li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp} className="mt-9">
              <Link to="/fleet" className="btn btn-gold">Explore the Fleet <ArrowRight size={18} /></Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div variants={imageReveal} initial="hidden" whileInView="show" viewport={viewport} className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[640px]">
          <img src="/assets/fleet/fleet-dark.jpg" alt="Container truck in a depot at night" loading="lazy" width={1500} height={1000} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/20 to-transparent lg:from-navy lg:via-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
