import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "../../data/services";
import ServiceCard from "../common/ServiceCard";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";

/** Services overview grid — eight proposed service categories. */
export default function ServicesGrid({ limit, tone = "light", showHeader = true }) {
  const items = typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <section className="doc-container mt-24 md:mt-32" aria-labelledby="services-heading">
      {showHeader ? (
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-heading"
            index="01"
            label="What we can move"
            title="Relocation services organised by the job in front of you"
            intro="Eight proposed service categories, each with its own scope, process and preparation notes — so the discussion starts with what you actually need moved."
            className="lg:max-w-[58rem]"
          />
          <Reveal delay={0.05}>
            <Link
              to="/services"
              className="inline-flex h-11 items-center gap-2 rounded-[3px] border border-ink/25 px-5 text-[0.885rem] font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              All services
              <ArrowRight className="h-[17px] w-[17px]" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      ) : null}

      <div className="mt-11 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((service, i) => (
          <Reveal key={service.slug} delay={(i % 4) * 0.07} y={22}>
            <ServiceCard service={service} tone={tone} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
