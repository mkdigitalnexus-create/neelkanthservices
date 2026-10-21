import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { publishedServices } from "../../data/services";
import Logo from "../common/Logo";

export default function Footer() {
  const c = siteConfig.contact;
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white">
      <div className="container-x pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo light className="h-[76px] w-auto max-w-[200px]" />
            <p className="mt-5 font-heading text-sm font-semibold text-gold">{siteConfig.tagline}</p>
            <p className="mt-4 max-w-sm text-[0.92rem] leading-relaxed text-white/65">
              Transportation for commercial goods, industrial cargo and business logistics requirements, coordinated with clear communication from pickup to delivery.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="eyebrow mb-5 text-white/50">Services</h3>
            <ul className="space-y-2.5">
              {publishedServices.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-[0.92rem] text-white/80 transition hover:text-gold">{s.title.replace(" Transportation", "")}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="eyebrow mb-5 text-white/50">Company</h3>
            <ul className="space-y-2.5">
              {[...siteConfig.nav, ...siteConfig.secondaryNav.filter((n) => n.to !== "/privacy-policy"), { label: "Get a Quote", to: "/get-a-quote" }].map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-[0.92rem] text-white/80 transition hover:text-gold">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="eyebrow mb-5 text-white/50">Contact</h3>
            <ul className="space-y-3.5 text-[0.92rem] text-white/80">
              {c.phone && (
                <li className="flex gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-gold" /><a href={`tel:${c.phone}`} className="hover:text-gold">{c.phoneDisplay || c.phone}</a></li>
              )}
              {c.email && (
                <li className="flex gap-3"><Mail size={18} className="mt-0.5 shrink-0 text-gold" /><a href={`mailto:${c.email}`} className="hover:text-gold">{c.email}</a></li>
              )}
              {c.address && (
                <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-gold" /><span>{c.address}</span></li>
              )}
              {c.hours && (
                <li className="flex gap-3"><Clock size={18} className="mt-0.5 shrink-0 text-gold" /><span>{c.hours}</span></li>
              )}
              {!c.phone && !c.email && (
                <li className="text-white/55">Contact details will be published once confirmed. Use the enquiry form to reach us.</li>
              )}
            </ul>
            <Link to="/contact" className="link-arrow mt-5 text-gold">Contact page →</Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/faq" className="hover:text-white">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
