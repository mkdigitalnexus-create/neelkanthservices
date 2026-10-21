import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import CtaBand from "../components/common/CtaBand";
import { fleet, fleetGroups } from "../data/fleet";
import { fadeUp, imageReveal, stagger, viewport } from "../components/common/motion";

export default function Fleet() {
  const [group, setGroup] = useState("All");
  const list = group === "All" ? fleet : fleet.filter((f) => f.group === group);

  return (
    <>
      <Seo title="Our Fleet" description="Open-body, closed-body, container and trailer vehicle categories for commercial and industrial transport." />
      <PageHero title="Vehicles for the Journey Ahead" intro="Vehicle categories matched to your cargo, route and loading conditions." image="/assets/fleet/fleet-dark.jpg" position="center" crumbs={[{ label: "Fleet" }]} />

      <section className="section bg-white">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Vehicle categories" title="Choose the Right Vehicle for the Load" copy="Vehicle details below describe categories only. Specific capacities and availability are confirmed per enquiry." />
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter fleet">
              {fleetGroups.map((g) => (
                <button key={g} type="button" role="tab" aria-selected={group === g} onClick={() => setGroup(g)} className={`h-10 rounded-md border px-4 text-sm font-semibold transition ${group === g ? "border-navy bg-navy text-white" : "border-line text-ink hover:border-navy"}`}>{g}</button>
              ))}
            </div>
          </div>

          <div className="mt-14 space-y-16 lg:space-y-24">
            {list.map((v, i) => (
              <motion.article key={v.id} id={v.id} variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewport} className={`grid items-center gap-8 lg:grid-cols-[60fr_40fr] lg:gap-16 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <motion.div variants={imageReveal} className="aspect-[3/2] overflow-hidden rounded-md">
                  <img src={v.image} alt={v.name} loading="lazy" width={1200} height={800} className="h-full w-full object-cover" style={{ objectPosition: v.position }} />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <span className="text-xs font-bold tabular-nums text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-navy md:text-3xl">{v.name}</h3>
                  <p className="lead mt-4">{v.description}</p>
                  <ul className="mt-6 space-y-2">
                    {v.suitedFor.map((s) => (
                      <li key={s} className="flex items-center gap-3 text-[0.95rem] font-medium text-ink"><Check size={16} strokeWidth={3} className="text-blue" />{s}</li>
                    ))}
                  </ul>
                  <Link to="/get-a-quote" className="link-arrow mt-7">Enquire about this vehicle <ArrowRight size={18} /></Link>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
