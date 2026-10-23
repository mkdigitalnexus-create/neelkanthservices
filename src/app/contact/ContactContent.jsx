"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import PageHero from "../../components/common/PageHero";
import ContactForm from "../../components/forms/ContactForm";
import WhatsAppIcon from "../../components/common/WhatsAppIcon";
import { siteConfig } from "../../data/siteConfig";

export default function ContactContent() {
  const c = siteConfig.contact;

  return (
    <>
      <PageHero
        title="Contact Us"
        intro="Reach out to our Gurugram dispatch office to discuss your cargo movement across Delhi NCR, Haryana and Pan-India."
        image="/assets/services/about.jpg"
        position="center 12%"
        crumbs={[{ label: "Contact" }]}
      />

      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[42fr_58fr] lg:gap-16">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="gold-line" />
              <span className="eyebrow text-blue">Head Office & Dispatch</span>
            </div>
            <h2 className="h-section text-navy">Let's Talk About Your Cargo.</h2>
            <p className="lead mt-4">
              Need reliable transport services in Delhi, Gurugram, New Delhi, Ghaziabad, or Haryana? Speak directly with our dispatch team.
            </p>

            {/* Direct Contact Cards */}
            <div className="mt-8 space-y-4">
              {/* Primary Phone */}
              <div className="rounded-lg border-2 border-blue/20 bg-blue/5 p-4 transition-colors hover:border-blue">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue text-white shadow-sm">
                    <Phone size={20} />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-blue">Main Contact Number</p>
                      <span className="rounded bg-gold/20 px-2 py-0.5 text-[11px] font-bold text-navy">Primary</span>
                    </div>
                    <a
                      href={`tel:${c.phone}`}
                      className="mt-1 block font-heading text-xl font-bold text-navy hover:text-blue"
                    >
                      {c.phoneDisplay}
                    </a>
                    <p className="text-xs text-muted">Available 24/7 for booking & urgent dispatch</p>
                  </div>
                </div>
              </div>

              {/* Secondary Phone */}
              <div className="rounded-lg border border-line bg-surface p-4 transition-colors hover:border-blue/40">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy text-white shadow-sm">
                    <Phone size={20} />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted">Second Number</p>
                    <a
                      href={`tel:${c.phoneSecondary}`}
                      className="mt-1 block font-heading text-lg font-bold text-navy hover:text-blue"
                    >
                      {c.phoneSecondaryDisplay}
                    </a>
                    <p className="text-xs text-muted">Alternate fleet coordination & support</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="rounded-lg border border-emerald-500/30 bg-emerald-50/50 p-4 transition-colors hover:border-emerald-500">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#25D366] text-white shadow-sm">
                    <WhatsAppIcon size={24} />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">Instant WhatsApp Chat</p>
                    <a
                      href={`https://wa.me/${c.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block font-heading text-lg font-bold text-emerald-900 hover:text-emerald-700"
                    >
                      Chat on WhatsApp (+91 76781 76144)
                    </a>
                    <p className="text-xs text-muted">Quick rates, vehicle photos, and live availability</p>
                  </div>
                </div>
              </div>

              {/* Direct Email */}
              <div className="rounded-lg border border-line bg-surface p-4 transition-colors hover:border-blue/40">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue text-white shadow-sm">
                    <Mail size={20} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted">Official Dispatch Email</p>
                    <a
                      href={`mailto:${c.email}`}
                      className="mt-1 block font-heading text-base font-bold text-navy hover:text-blue break-all"
                    >
                      {c.email}
                    </a>
                    <p className="text-xs text-muted">For rate inquiries, formal RFQs, and enterprise freight contracts</p>
                  </div>
                </div>
              </div>

              {/* Office Address */}
              <div className="rounded-lg border border-line bg-surface p-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-blue text-blue">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted">Office & Yard Address</p>
                    <p className="mt-1 font-heading text-sm font-semibold text-navy leading-snug">
                      {c.address}
                    </p>
                    <p className="mt-1 text-xs text-blue font-medium">Landmark: {c.landmark}</p>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="rounded-lg border border-line bg-surface p-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-blue text-blue">
                    <Clock size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted">Operating Hours</p>
                    <p className="mt-1 font-heading text-sm font-semibold text-navy">{c.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/get-a-quote" className="btn btn-navy btn-sm">
                Request a Quote <ArrowRight size={16} />
              </Link>
              <a
                href={`tel:${c.phone}`}
                className="btn btn-gold btn-sm"
              >
                Call Main: {c.phoneDisplay}
              </a>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Google Maps Location Section */}
      <section className="section bg-surface pt-0">
        <div className="container-x">
          <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="gold-line" />
                <span className="eyebrow text-blue">Find Us on Map</span>
              </div>
              <h2 className="font-heading text-2xl font-bold text-navy">
                Visit Our Office in Dhankot, Gurugram
              </h2>
              <p className="mt-1 text-sm text-muted">
                Strategically positioned in Dhankot Chowk (opposite Zepto), connecting rapidly to Dwarka Expressway, KMP, NH-48 and Delhi NCR.
              </p>
            </div>
            <a
              href={`https://maps.google.com/?q=${c.geo.latitude},${c.geo.longitude}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-sm shrink-0"
            >
              Open in Google Maps <ArrowRight size={16} />
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-line shadow-md bg-white">
            <iframe
              src={c.mapEmbed}
              title="Neelkanth Transport Services Location Map"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[420px] md:h-[480px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
