"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, ShieldCheck, Handshake, MessageSquare, Route } from "lucide-react";
import PageHero from "../../components/common/PageHero";
import SectionHeading from "../../components/common/SectionHeading";
import CtaBand from "../../components/common/CtaBand";
import { fadeUp, imageReveal, stagger, viewport } from "../../components/common/motion";

const values = [
  { icon: ShieldCheck, t: "Safety first", d: "Cargo is handled with care and vehicles are selected to suit the load, not the other way round." },
  { icon: Handshake, t: "Reliability", d: "We commit to what we can deliver and communicate early when plans need to change." },
  { icon: MessageSquare, t: "Transparency", d: "Clear scope, clear coordination and honest updates throughout the journey." },
  { icon: Route, t: "Practical planning", d: "Routes and schedules are planned around real-world loading and road conditions." },
];

export default function AboutContent() {
  return (
    <>
      <PageHero
        title="Built for the Journey. Trusted for the Delivery."
        intro="A premier transport and logistics partner headquartered in Gurugram, focused on commercial cargo, industrial freight and business supply chains."
        image="/assets/services/about.jpg"
        position="center 12%"
        crumbs={[{ label: "About" }]}
      />

      <section className="section bg-white">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[45fr_55fr] lg:gap-16">
          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewport} className="lg:order-1">
            <motion.div variants={fadeUp} className="mb-4 flex items-center gap-3">
              <span className="gold-line" />
              <span className="eyebrow text-blue">Company profile</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="h-section text-navy">
              Delhi NCR's Dependable Commercial Transport Partner.
            </motion.h2>
            <motion.p variants={fadeUp} className="lead mt-6">
              Neelkanth Transport Services provides premier commercial road transportation and freight logistics. Headquartered in Dhankot, Gurugram (opposite Zepto), we strategically serve the entire industrial belt of Gurugram, Manesar, Delhi, New Delhi, Ghaziabad, and Haryana, with direct long-haul corridors across India.
            </motion.p>
            <motion.p variants={fadeUp} className="lead mt-4">
              Our core capability is commercial B2B freight: full truckloads (FTL), open-body carriers, multi-axle trailers, and container trucks. Whether handling industrial machinery, automotive components, construction materials, or consumer goods, we guarantee verified drivers, on-time placement, and 24/7 dispatch communication.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4 items-center">
              <Link href="/services" className="link-arrow">
                Explore our services <ArrowRight size={18} />
              </Link>
              <a href="tel:+917678176144" className="btn btn-navy btn-sm">
                Call Main: +91 76781 76144
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={imageReveal} initial="hidden" whileInView="show" viewport={viewport} className="relative lg:order-2">
            <div className="aspect-[4/3] overflow-hidden rounded-md">
              <img
                src="/assets/hero/hero-2.jpg"
                alt="Container trailer travelling along an expressway at dusk"
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
                style={{ objectPosition: "60% center" }}
              />
            </div>
            <span className="absolute -top-3 right-8 h-1.5 w-28 bg-gold" aria-hidden="true" />
          </motion.div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container-x grid gap-px overflow-hidden lg:grid-cols-2">
          {[
            { icon: Target, t: "Our mission", d: "To move commercial and industrial cargo dependably, with professional coordination and communication that businesses can plan around." },
            { icon: Eye, t: "Our vision", d: "To be the transport partner businesses turn to first when a consignment needs to arrive as planned." },
          ].map(({ icon: Icon, t, d }, i) => (
            <div key={t} className={`py-14 lg:py-20 ${i === 0 ? "lg:pr-16" : "border-t border-white/10 lg:border-l lg:border-t-0 lg:pl-16"}`}>
              <Icon size={28} strokeWidth={1.5} className="text-gold" />
              <h2 className="mt-5 font-heading text-2xl font-bold md:text-3xl">{t}</h2>
              <p className="mt-4 max-w-md text-[1.0625rem] leading-relaxed text-white/70">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-x">
          <SectionHeading eyebrow="Our values" title="What Guides Every Journey" />
          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewport} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {values.map(({ icon: Icon, t, d }, i) => (
              <motion.div key={t} variants={fadeUp} className="rounded-md border border-line bg-white p-7">
                <div className="flex items-center justify-between">
                  <Icon size={24} strokeWidth={1.6} className="text-blue" />
                  <span className="text-xs font-bold tabular-nums text-gold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="h-card mt-6 text-navy">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Our approach" title="How We Approach Transport" copy="Four principles that shape every consignment we coordinate." />
          <ol className="divide-y divide-line border-y border-line">
            {[
              ["Understand the cargo", "Type, dimensions, weight, packaging and handling needs are reviewed before vehicles are discussed."],
              ["Match the vehicle", "Open-body, closed-body, container or trailer — chosen to suit the load and loading conditions."],
              ["Plan the route", "Pickup, delivery and timing are planned around practical road and site realities."],
              ["Coordinate and communicate", "Clear updates from dispatch to handover so your team can plan with confidence."],
            ].map(([t, d], i) => (
              <li key={t} className="grid gap-2 py-6 sm:grid-cols-[64px_1fr]">
                <span className="font-heading text-sm font-bold text-gold">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-navy">{t}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
