import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Boxes, CheckCircle2, Home, Sparkles, Truck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { services, SERVICE_CATEGORIES } from "../../data/services";
import ServiceCard from "../common/ServiceCard";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";

const CATEGORY_ICONS = {
  all: Sparkles,
  transportation: Truck,
  relocation: Home,
  specialized: Boxes,
};

/**
 * Services overview grid with dynamic category tabs.
 * Showcases both Transportation & Freight and Packers & Movers.
 */
export default function ServicesGrid({ limit, tone = "light", showHeader = true, initialCategory = "all" }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filtered = activeCategory === "all"
    ? services
    : services.filter((s) => s.category === activeCategory);

  const items = typeof limit === "number" ? filtered.slice(0, limit) : filtered;

  return (
    <section className="doc-container mt-24 md:mt-32" aria-labelledby="services-heading">
      {showHeader ? (
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-heading"
            index="01"
            label="Complete Transport & Relocation Solutions"
            title="Commercial transportation and packers & movers, under one trusted fleet"
            intro="From dedicated Full Truck Load (FTL) industrial logistics to multi-layer household shifting — explore our dual capabilities built over 14+ years across North India."
            className="lg:max-w-[58rem]"
          />
          <Reveal delay={0.05}>
            <Link
              to="/services"
              className="inline-flex h-11 items-center gap-2 rounded-[3px] border border-ink/25 px-5 text-[0.885rem] font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              Explore all 12 services
              <ArrowRight className="h-[17px] w-[17px]" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      ) : null}

      {/* Category Filter Tabs */}
      <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-rule pb-4">
        {SERVICE_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const Icon = CATEGORY_ICONS[cat.id] || Sparkles;
          const count = cat.id === "all"
            ? services.length
            : services.filter((s) => s.category === cat.id).length;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`relative inline-flex items-center gap-2 rounded-[3px] px-4 py-2 text-[0.875rem] font-semibold transition-all ${
                isActive
                  ? "bg-ink text-paper shadow-sm"
                  : "bg-paper/70 text-ink/75 hover:bg-kraft hover:text-ink"
              }`}
              aria-pressed={isActive}
            >
              <Icon className={`h-4 w-4 ${isActive ? "text-amber" : "text-brand"}`} />
              <span>{cat.label}</span>
              <span
                className={`tabular text-[0.72rem] rounded-full px-1.5 py-0.2 ${
                  isActive ? "bg-amber text-[#20160A] font-bold" : "bg-ink/8 text-muted"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Interactive Service Grid */}
      <motion.div
        layout
        className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {items.map((service, i) => (
            <motion.div
              layout
              key={service.slug}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.28, delay: (i % 4) * 0.05 }}
            >
              <ServiceCard service={service} tone={tone} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
