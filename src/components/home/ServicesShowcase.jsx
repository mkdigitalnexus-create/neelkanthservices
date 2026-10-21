import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import ServiceCard from "../common/ServiceCard";
import { publishedServices } from "../../data/services";
import { stagger, viewport } from "../common/motion";

export default function ServicesShowcase() {
  const featured = publishedServices.filter((s) => s.featured).slice(0, 3);
  const rest = publishedServices.filter((s) => !featured.includes(s)).slice(0, 4);

  return (
    <section className="section bg-surface">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="What we move" title="Transportation Services" copy="Explore transport options for your cargo, vehicle requirements, and business needs." />
          <Link to="/services" className="link-arrow shrink-0 md:mb-2">View all services <ArrowRight size={18} /></Link>
        </div>

        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewport} className="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-6">
          <ServiceCard service={featured[0]} size="lg" index={0} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
            {featured.slice(1).map((s, i) => <ServiceCard key={s.slug} service={s} index={i + 1} />)}
          </div>
        </motion.div>

        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewport} className="mt-5 grid gap-5 sm:grid-cols-2 lg:mt-6 lg:grid-cols-4 lg:gap-6">
          {rest.map((s) => (
            <motion.div key={s.slug} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}>
              <Link to={`/services/${s.slug}`} className="group flex h-full flex-col rounded-md border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue/40 hover:shadow-[0_18px_40px_-24px_rgba(8,27,54,0.35)]">
                <div className="img-hover mb-5 aspect-[16/10] overflow-hidden rounded">
                  <img src={s.image} alt="" loading="lazy" width={640} height={400} className="h-full w-full object-cover" style={{ objectPosition: s.position }} />
                </div>
                <h3 className="h-card text-navy">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.short}</p>
                <span className="link-arrow mt-4 text-sm">Learn more <ArrowRight size={16} /></span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
