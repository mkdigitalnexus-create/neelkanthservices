"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "../../components/common/PageHero";
import CtaBand from "../../components/common/CtaBand";
import { industries } from "../../data/industries";
import { getService } from "../../data/services";

export default function IndustriesContent() {
  return (
    <>
      <PageHero
        title="Industries We Transport For"
        intro="Sector-specific transport and logistics coordination for manufacturing plants, automotive hubs, FMCG distributors, and construction projects across Delhi NCR and India."
        image="/assets/industries/manufacturing.jpg"
        crumbs={[{ label: "Industries" }]}
      />

      <section className="section bg-white">
        <div className="container-x space-y-16 lg:space-y-20">
          {industries.map((ind, i) => (
            <article
              key={ind.id}
              id={ind.id}
              className="grid gap-8 border-t border-line pt-12 lg:grid-cols-12 lg:gap-10 first:border-t-0 first:pt-0"
            >
              <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="img-hover aspect-[16/9] overflow-hidden rounded-md shadow-md">
                  <img
                    src={ind.image}
                    alt={`${ind.name} Logistics - Neelkanth Transport Services`}
                    loading="lazy"
                    width={1200}
                    height={675}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: ind.position }}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center lg:col-span-5">
                <span className="text-xs font-bold tabular-nums text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 font-heading text-2xl font-bold text-navy md:text-3xl">
                  {ind.name}
                </h2>
                <p className="lead mt-4">{ind.description}</p>
                <h3 className="eyebrow mt-7 text-muted">Related services</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {ind.services
                    .map((s) => getService(s))
                    .filter(Boolean)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="inline-flex h-9 items-center gap-1.5 rounded-md border border-line px-3 text-sm font-semibold text-navy transition hover:border-blue hover:text-blue"
                        >
                          {s.title.replace(" Transportation", "")} <ArrowRight size={14} />
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
