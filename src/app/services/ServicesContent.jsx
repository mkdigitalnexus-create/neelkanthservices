"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageHero from "../../components/common/PageHero";
import CtaBand from "../../components/common/CtaBand";
import { publishedServices, serviceCategories } from "../../data/services";

export default function ServicesContent() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? publishedServices : publishedServices.filter((s) => s.category === cat);

  return (
    <>
      <PageHero
        title="Commercial Road Transportation Services"
        intro="Full truckloads (FTL), container freight, trailers, and open-body transport dispatched from our Gurugram hub to destinations across India."
        image="/assets/hero/hero-3.jpg"
        position="65% 15%"
        crumbs={[{ label: "Services" }]}
      />

      <section className="section bg-white">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="lead max-w-xl">
              Browse our commercial road transport portfolio. Each service is tailored for industrial cargo, verified vehicle assignment, and real-time transit tracking.
            </p>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter services by category">
              {serviceCategories.map((c) => (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={cat === c}
                  onClick={() => setCat(c)}
                  className={`h-10 rounded-md border px-4 text-sm font-semibold transition ${
                    cat === c ? "border-navy bg-navy text-white" : "border-line text-ink hover:border-navy"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((s, i) => (
                <motion.article
                  layout
                  key={s.slug}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex h-full flex-col rounded-md border border-line bg-white transition-all duration-300 hover:border-blue/40 hover:shadow-[0_18px_40px_-24px_rgba(8,27,54,0.35)]"
                  >
                    <div className="img-hover aspect-[16/10] overflow-hidden rounded-t-md">
                      <img
                        src={s.image}
                        alt={s.title}
                        loading={i < 3 ? "eager" : "lazy"}
                        width={960}
                        height={600}
                        className="h-full w-full object-cover"
                        style={{ objectPosition: s.position }}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="eyebrow text-gold">{s.category}</span>
                      <h2 className="h-card mt-2 text-navy">{s.title}</h2>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.short}</p>
                      <span className="link-arrow mt-5 text-sm">
                        View service details <ArrowRight size={16} />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
