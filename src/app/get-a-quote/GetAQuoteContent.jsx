"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Phone, ArrowRight, MapPin, Mail } from "lucide-react";
import PageHero from "../../components/common/PageHero";
import QuoteForm from "../../components/forms/QuoteForm";
import WhatsAppIcon from "../../components/common/WhatsAppIcon";
import { siteConfig } from "../../data/siteConfig";

function QuoteFormContainer() {
  const searchParams = useSearchParams();
  const prefill = searchParams
    ? {
        pickupCity: searchParams.get("from") || "",
        deliveryCity: searchParams.get("to") || "",
        cargoType: searchParams.get("cargo") || "",
        vehicle: searchParams.get("vehicle") || "",
      }
    : null;

  return <QuoteForm prefill={prefill} />;
}

export default function GetAQuoteContent() {
  const c = siteConfig.contact;

  return (
    <>
      <PageHero
        title="Request a Fast Transport Quote"
        intro="Tell us about your consignment route, cargo, and vehicle needs. Get competitive rates for full truck loads and road freight across Delhi NCR, Haryana & Pan-India."
        image="/assets/hero/cta.jpg"
        position="35% center"
        crumbs={[{ label: "Get a Quote" }]}
      />

      <section className="section bg-surface">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-14">
          <Suspense fallback={<div className="p-8 text-center text-muted">Loading quote form...</div>}>
            <QuoteFormContainer />
          </Suspense>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-md border border-line bg-white p-7 shadow-sm">
              <h2 className="font-heading text-lg font-bold text-navy">What helps us respond quickly</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                {[
                  "Pickup and delivery cities",
                  "Cargo type, approximate weight and volume",
                  "Packaging and loading arrangements",
                  "Preferred date or timing window",
                  "Any special handling instructions",
                ].map((t, i) => (
                  <li key={t} className="flex gap-3">
                    <span className="font-heading text-xs font-bold text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-md bg-navy p-7 text-white shadow-sm">
              <h2 className="font-heading text-lg font-bold">Prefer to call directly?</h2>
              <p className="mt-2 text-xs text-white/70">
                Call our Gurugram dispatch office for immediate vehicle availability and spot rates.
              </p>
              <ul className="mt-5 space-y-4 text-sm text-white/90">
                <li className="flex gap-3">
                  <Phone size={18} className="shrink-0 text-gold mt-0.5" />
                  <div>
                    <span className="text-[11px] text-gold uppercase font-semibold block">Main Contact:</span>
                    <a href={`tel:${c.phone}`} className="font-bold text-white hover:text-gold text-base">
                      {c.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="shrink-0 text-gold mt-0.5" />
                  <div>
                    <span className="text-[11px] text-white/60 uppercase block">Second Number:</span>
                    <a href={`tel:${c.phoneSecondary}`} className="font-medium text-white/90 hover:text-gold">
                      {c.phoneSecondaryDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 mt-0.5">
                    <WhatsAppIcon size={18} />
                  </span>
                  <div>
                    <span className="text-[11px] text-emerald-400 uppercase font-semibold block">WhatsApp:</span>
                    <a
                      href={`https://wa.me/${c.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-emerald-400 hover:text-emerald-300"
                    >
                      Chat on WhatsApp (+91 76781 76144)
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail size={18} className="shrink-0 text-gold mt-0.5" />
                  <div className="min-w-0">
                    <span className="text-[11px] text-white/60 uppercase block">Official Email:</span>
                    <a
                      href={`mailto:${c.email}`}
                      className="text-xs font-semibold text-white/90 hover:text-gold truncate block"
                    >
                      {c.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPin size={18} className="shrink-0 text-gold mt-0.5" />
                  <div className="text-xs text-white/80">
                    <span className="font-semibold text-white block">Head Office:</span>
                    <span>{c.address}</span>
                  </div>
                </li>
              </ul>
              <Link href="/contact" className="link-arrow mt-6 text-gold">
                View full contact details & map <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
