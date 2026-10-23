import Link from "next/link";
import { Phone, MapPin, Clock, Mail, ShieldCheck, ArrowRight, Truck } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { publishedServices } from "../../data/services";
import WhatsAppIcon from "../common/WhatsAppIcon";

export default function Footer() {
  const c = siteConfig.contact;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white relative overflow-hidden border-t-2 border-gold/30">
      {/* Decorative top ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-48 bg-blue/15 blur-[120px] rounded-full" />

      {/* 1. Pre-Footer Quick Contact / Dispatch Bar */}
      <div className="border-b border-white/10 bg-white/[0.02]">
        <div className="container-x py-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-center">
            {/* Dispatch Badge */}
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 border border-gold/30 text-gold">
                <Truck size={24} />
              </div>
              <div>
                <p className="text-xs uppercase font-semibold tracking-wider text-gold">24/7 Fleet Dispatch</p>
                <p className="text-sm font-bold text-white">Dhankot, Gurugram Hub</p>
              </div>
            </div>

            {/* Main Phone */}
            <a
              href={`tel:${c.phone}`}
              className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] p-3 transition hover:border-gold/50 hover:bg-white/[0.08]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue text-white group-hover:bg-gold group-hover:text-navy transition-colors">
                <Phone size={18} />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-medium uppercase text-white/50">Primary Contact</span>
                <span className="text-sm font-bold text-white group-hover:text-gold transition-colors truncate block">{c.phoneDisplay}</span>
              </div>
            </a>

            {/* Second Phone */}
            <a
              href={`tel:${c.phoneSecondary}`}
              className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] p-3 transition hover:border-gold/50 hover:bg-white/[0.08]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white group-hover:bg-gold group-hover:text-navy transition-colors">
                <Phone size={18} />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-medium uppercase text-white/50">Second Contact</span>
                <span className="text-sm font-bold text-white group-hover:text-gold transition-colors truncate block">{c.phoneSecondaryDisplay}</span>
              </div>
            </a>

            {/* WhatsApp Direct */}
            <a
              href={`https://wa.me/${c.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3 font-bold text-emerald-400 transition hover:bg-emerald-500/20 text-sm"
            >
              <WhatsAppIcon size={20} />
              <span>WhatsApp Instant Rates</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main 4-Column Balanced Grid */}
      <div className="container-x py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          
          {/* Col 1: Brand & Credibility (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block rounded-xl bg-white p-3 shadow-md border border-white/20">
              <img
                src="/assets/brand/logo.jpeg"
                alt={siteConfig.name}
                className="h-12 md:h-14 w-auto object-contain"
                loading="lazy"
              />
            </Link>
            <p className="font-heading text-sm font-bold text-gold">
              {siteConfig.tagline}
            </p>
            <p className="text-sm leading-relaxed text-white/70 max-w-sm">
              Headquartered in Dhankot, Gurugram, Neelkanth Transport Services provides dependable full truckload (FTL), container, and heavy trailer freight movements across Delhi NCR, Haryana, and nationwide.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs text-white/80">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1 border border-white/10">
                <ShieldCheck size={14} className="text-emerald-400" /> All India Permit
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1 border border-white/10">
                <Clock size={14} className="text-gold" /> 24/7 Live Dispatch
              </span>
            </div>
          </div>

          {/* Col 2: Services (Span 2) */}
          <div className="lg:col-span-2">
            <h3 className="eyebrow mb-4 text-gold font-bold uppercase tracking-wider text-xs">Services</h3>
            <ul className="space-y-2.5 text-sm">
              {publishedServices.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/75 transition hover:text-gold hover:translate-x-0.5 inline-block"
                  >
                    {s.title.replace(" Transportation", "")}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="inline-flex items-center gap-1 text-gold hover:underline font-semibold text-xs mt-1">
                  View All Services <ArrowRight size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company Navigation (Span 2) */}
          <div className="lg:col-span-2">
            <h3 className="eyebrow mb-4 text-gold font-bold uppercase tracking-wider text-xs">Company</h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.nav.map((n) => (
                <li key={n.to}>
                  <Link href={n.to} className="text-white/75 transition hover:text-gold hover:translate-x-0.5 inline-block">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/faq" className="text-white/75 transition hover:text-gold hover:translate-x-0.5 inline-block">
                  FAQs & Help
                </Link>
              </li>
              <li>
                <Link href="/get-a-quote" className="text-gold font-semibold transition hover:underline inline-block">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Gurugram Head Office & Contacts (Span 4) */}
          <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 lg:p-6 backdrop-blur-sm">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-gold mb-4 flex items-center gap-2">
              <MapPin size={16} /> Gurugram Head Office
            </h3>
            
            <div className="space-y-3.5 text-sm">
              <div className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <p className="font-medium text-white leading-snug">{c.address}</p>
                  <p className="text-xs text-gold/90 mt-0.5 font-medium">Landmark: {c.landmark}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <span className="text-xs text-white/50 block">Direct Booking Hotline:</span>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-0.5">
                    <a href={`tel:${c.phone}`} className="font-bold text-white hover:text-gold text-base">
                      {c.phoneDisplay}
                    </a>
                    <span className="text-white/30">|</span>
                    <a href={`tel:${c.phoneSecondary}`} className="font-medium text-white/80 hover:text-gold text-sm">
                      {c.phoneSecondaryDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <span className="text-xs text-white/50 block">Operating Hours:</span>
                  <p className="text-xs text-white/80 leading-snug">{c.hours}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-gold" />
                <div className="min-w-0">
                  <span className="text-xs text-white/50 block">Official Dispatch Email:</span>
                  <a
                    href={`mailto:${c.email}`}
                    className="text-xs font-semibold text-white hover:text-gold transition truncate block mt-0.5"
                  >
                    {c.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
              <Link href="/contact" className="btn btn-gold btn-sm text-xs h-9 px-4">
                View On Google Maps
              </Link>
              <Link href="/get-a-quote" className="text-xs font-semibold text-white/80 hover:text-white underline">
                Get Fast Rate Card →
              </Link>
            </div>
          </div>

        </div>

        {/* 3. Local SEO Service Areas Footer Badge Strip */}
        <div className="mt-12 rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs text-white/70">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/10 pb-3 mb-3">
            <span className="font-bold text-gold uppercase tracking-wider text-[11px]">
              Primary Transport Corridors & Local Service Footprint
            </span>
            <span className="text-[11px] text-white/50">
              HQ: Dhankot Chowk, Gurugram (Delhi NCR)
            </span>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              "Dhankot (HQ)", "Gurugram", "Manesar Industrial Hub", "Delhi NCR",
              "New Delhi", "Ghaziabad", "Sahibabad", "Faridabad",
              "Sonipat", "Panipat", "Rewari & Bawal", "Dwarka Expressway",
              "Mumbai & JNPT Port", "Ahmedabad & Gujarat", "Rajasthan (Jaipur)", "Pan India"
            ].map((hub) => (
              <span key={hub} className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-white/80 hover:border-gold/40 transition">
                {hub}
              </span>
            ))}
          </div>
        </div>

        {/* 4. Bottom Copyright & Legal Links */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p className="text-white/40 hidden lg:block">Dhankot, Gurugram, Haryana 122505 • Commercial Logistics & FTL Freight</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/legal-notice" className="hover:text-white transition">Legal Notice</Link>
            <Link href="/faq" className="hover:text-white transition">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
