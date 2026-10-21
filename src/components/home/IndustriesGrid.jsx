import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { industries } from "../../data/industries";
import { fadeUp, stagger, viewport } from "../common/motion";

export function IndustryTile({ ind, className = "" }) {
  return (
    <motion.div variants={fadeUp} className={className}>
      <Link to={`/industries#${ind.id}`} className="img-hover group relative block h-full min-h-[220px] overflow-hidden rounded-md bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">
        <img src={ind.image} alt={ind.name} loading="lazy" width={1200} height={800} className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: ind.position }} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <h3 className="font-heading text-lg font-bold text-white md:text-xl">{ind.name}</h3>
          <p className="mt-1 hidden text-sm text-white/70 sm:block">{ind.description}</p>
        </div>
        <span className="absolute right-5 top-5 h-0.5 w-8 bg-gold transition-all duration-300 group-hover:w-12" aria-hidden="true" />
      </Link>
    </motion.div>
  );
}

export default function IndustriesGrid() {
  const list = industries.slice(0, 5);
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Who we serve" title="Industries We Transport For" copy="Transport coordinated for the sectors that depend on dependable road movement." />
          <Link to="/industries" className="link-arrow shrink-0 md:mb-2">All industries <ArrowRight size={18} /></Link>
        </div>
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewport} className="mt-12 grid auto-rows-[220px] gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:auto-rows-[240px]">
          <IndustryTile ind={list[0]} className="lg:col-span-2 lg:row-span-2" />
          <IndustryTile ind={list[1]} />
          <IndustryTile ind={list[2]} />
          <IndustryTile ind={list[3]} />
          <IndustryTile ind={list[4]} />
        </motion.div>
      </div>
    </section>
  );
}
