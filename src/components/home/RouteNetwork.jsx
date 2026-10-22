"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import RouteMap from "../common/RouteMap";
import { coverage } from "../../data/routes";
import { fadeUp, fadeIn, stagger, viewport } from "../common/motion";

export default function RouteNetwork() {
  return (
    <section className="section bg-white">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewport}>
          <motion.div variants={fadeUp} className="mb-4 flex items-center gap-3">
            <span className="gold-line" />
            <span className="eyebrow text-blue">Route network</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="h-section text-navy">Connecting Your Business to the Right Routes.</motion.h2>
          <motion.p variants={fadeUp} className="lead mt-6">
            Whether your cargo travels within a region or across the country, we plan each movement around the corridors that make sense for your pickup and delivery points.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {coverage.regions.map((r) => (
              <div key={r.name}>
                <h3 className="font-heading text-sm font-bold text-navy">{r.name}</h3>
                <p className="mt-1 text-sm text-muted">{r.cities.join(" · ")}</p>
              </div>
            ))}
          </motion.div>
          <motion.p variants={fadeUp} className="mt-6 text-xs text-muted">{coverage.note}</motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <Link href="/routes" className="btn btn-navy btn-sm">Enquire About a Route <ArrowRight size={16} /></Link>
          </motion.div>
        </motion.div>
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={viewport} className="rounded-md border border-line bg-surface p-4 md:p-6">
          <RouteMap />
        </motion.div>
      </div>
    </section>
  );
}
