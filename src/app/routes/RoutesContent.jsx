"use client";

import Link from "next/link";
import { ArrowRight, Navigation, Clock, ShieldCheck } from "lucide-react";
import PageHero from "../../components/common/PageHero";
import RouteMap from "../../components/common/RouteMap";
import ContactForm from "../../components/forms/ContactForm";
import CtaBand from "../../components/common/CtaBand";
import { coverage, regionalCorridors } from "../../data/routes";

export default function RoutesContent() {
  return (
    <>
      <PageHero
        title="Direct Freight Corridors Across Delhi NCR, Haryana & Punjab"
        intro="Daily commercial vehicle dispatches from our Dhankot, Gurugram hub to key industrial clusters across Delhi, New Delhi, Ghaziabad, Haryana, Punjab (Ludhiana, Chandigarh), Rajasthan, Gujarat and Maharashtra."
        image="/assets/hero/hero-1.jpg"
        position="70% center"
        crumbs={[{ label: "Routes" }]}
      />

      {/* Featured Regional Corridors Grid for Local SEO */}
      <section className="section bg-surface border-b border-line">
        <div className="container-x">
          <div className="mb-4 flex items-center gap-3">
            <span className="gold-line" />
            <span className="eyebrow text-blue">Primary Direct Highway Corridors</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="h-section text-navy">High-Demand Corridors: Delhi, Haryana & Punjab</h2>
              <p className="lead mt-2 max-w-2xl">
                Daily point-to-point commercial dispatches with guaranteed transit schedules, verified fleets, and full GST e-way bill compliance.
              </p>
            </div>
            <a href="#route-enquiry" className="btn btn-navy btn-sm shrink-0">
              Get Corridor Rate Card
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {regionalCorridors.map((rc) => (
              <div
                key={rc.slug}
                className="group flex flex-col justify-between rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:border-gold hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-line/70 pb-3">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-navy">
                      <Navigation size={13} className="text-gold" /> {rc.distance}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      <Clock size={12} /> {rc.transitTime}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-navy group-hover:text-blue transition-colors mt-4">
                    <Link href={`/routes/${rc.slug}`} className="hover:underline">
                      {rc.title}
                    </Link>
                  </h3>
                  <p className="mt-2.5 text-sm text-muted leading-relaxed line-clamp-3">
                    {rc.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
                  <span className="text-xs text-muted truncate max-w-[170px]">{rc.highway}</span>
                  <Link
                    href={`/routes/${rc.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue group-hover:text-gold transition-colors"
                  >
                    View Corridor <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="rounded-md border border-line bg-surface p-4 md:p-6 shadow-sm">
            <RouteMap />
            <p className="mt-3 text-center text-xs text-muted">
              Strategic transport corridor network — connecting Northern India industrial belt to key national markets.
            </p>
          </div>
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="gold-line" />
              <span className="eyebrow text-blue">Coverage</span>
            </div>
            <h2 className="h-section text-navy">Regions and Corridors</h2>
            <p className="lead mt-5">{coverage.note}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {coverage.regions.map((r) => (
                <div key={r.name} className="border-l-2 border-gold pl-4">
                  <h3 className="font-heading font-bold text-navy">{r.name}</h3>
                  <ul className="mt-2 space-y-1 text-sm text-muted">
                    {r.cities.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <h3 className="mt-10 font-heading text-lg font-bold text-navy">Daily High-Frequency Corridors</h3>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {coverage.corridors.map((c) => (
                <li
                  key={`${c.from}-${c.to}`}
                  className="flex items-center justify-between py-3 text-[0.95rem] font-medium text-ink"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-navy">{c.from}</span>
                    <ArrowRight size={14} className="text-gold" />
                    <span>{c.to}</span>
                  </div>
                  {c.tag && (
                    <span className="text-[11px] font-semibold text-muted bg-surface px-2 py-0.5 rounded border border-line">
                      {c.tag}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-surface" id="route-enquiry">
        <div className="container-x grid gap-10 lg:grid-cols-[40fr_60fr] lg:gap-16">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="gold-line" />
              <span className="eyebrow text-blue">Route enquiry</span>
            </div>
            <h2 className="h-section text-navy">Check Route Availability & Rates</h2>
            <p className="lead mt-5">
              Tell us your pickup city and destination along with cargo specs. Our Gurugram operations desk will provide prompt vehicle placement and competitive pricing.
            </p>
          </div>
          <ContactForm
            title="Route enquiry"
            subjects={["Route availability", "Recurring route", "One-time movement", "Other"]}
          />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
