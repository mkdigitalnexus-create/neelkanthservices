import { useLocation, Link } from "react-router-dom";
import { Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import QuoteForm from "../components/forms/QuoteForm";
import { siteConfig } from "../data/siteConfig";

export default function GetAQuote() {
  const { state } = useLocation();
  const c = siteConfig.contact;
  return (
    <>
      <Seo title="Request a Quote" description="Share your route, cargo and vehicle requirement to request a transport quote from Neelkhanth Transport Services." />
      <PageHero title="Request a Quote" intro="Tell us about your consignment and we will discuss the right transport option with you." image="/assets/hero/cta.jpg" position="35% center" crumbs={[{ label: "Get a Quote" }]} />

      <section className="section bg-surface">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-14">
          <QuoteForm prefill={state?.prefill} />
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-md border border-line bg-white p-7">
              <h2 className="font-heading text-lg font-bold text-navy">What helps us respond quickly</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                {["Pickup and delivery cities", "Cargo type, approximate weight and volume", "Packaging and loading arrangements", "Preferred date or timing window", "Any special handling instructions"].map((t, i) => (
                  <li key={t} className="flex gap-3"><span className="font-heading text-xs font-bold text-gold">{String(i + 1).padStart(2, "0")}</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-md bg-navy p-7 text-white">
              <h2 className="font-heading text-lg font-bold">Prefer to talk?</h2>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                {c.phone && <li className="flex gap-3"><Phone size={18} className="shrink-0 text-gold" /><a href={`tel:${c.phone}`} className="hover:text-gold">{c.phoneDisplay || c.phone}</a></li>}
                {c.email && <li className="flex gap-3"><Mail size={18} className="shrink-0 text-gold" /><a href={`mailto:${c.email}`} className="hover:text-gold">{c.email}</a></li>}
                {c.hours && <li className="flex gap-3"><Clock size={18} className="shrink-0 text-gold" /><span>{c.hours}</span></li>}
                {!c.phone && !c.email && <li className="text-white/60">Direct contact details will appear here once configured.</li>}
              </ul>
              <Link to="/contact" className="link-arrow mt-5 text-gold">Contact page <ArrowRight size={16} /></Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
