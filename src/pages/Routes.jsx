import { ArrowRight } from "lucide-react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import RouteMap from "../components/common/RouteMap";
import ContactForm from "../components/forms/ContactForm";
import CtaBand from "../components/common/CtaBand";
import { coverage } from "../data/routes";

export default function RoutesPage() {
  return (
    <>
      <Seo
        title="Routes & Coverage — Freight Corridors from Gurugram, Delhi & Haryana"
        description="Daily freight corridors connecting Gurugram (Dhankot HQ), Delhi, New Delhi, Ghaziabad, and Haryana with Mumbai, Gujarat, Rajasthan, Punjab, and Pan India."
        keywords="transport routes delhi, gurugram transport corridors, freight service ghaziabad, haryana truck routes, delhi mumbai transport corridor"
      />
      <PageHero
        title="Direct Freight Corridors Across Delhi NCR & Pan India"
        intro="Daily commercial vehicle dispatches from our Dhankot, Gurugram hub to key industrial clusters nationwide."
        image="/assets/hero/hero-1.jpg"
        position="70% center"
        crumbs={[{ label: "Routes" }]}
      />

      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="rounded-md border border-line bg-surface p-4 md:p-6">
            <RouteMap />
            <p className="mt-3 text-center text-xs text-muted">Illustrative network graphic — not a live map or tracking view.</p>
          </div>
          <div>
            <div className="mb-4 flex items-center gap-3"><span className="gold-line" /><span className="eyebrow text-blue">Coverage</span></div>
            <h2 className="h-section text-navy">Regions and Corridors</h2>
            <p className="lead mt-5">{coverage.note}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {coverage.regions.map((r) => (
                <div key={r.name} className="border-l-2 border-gold pl-4">
                  <h3 className="font-heading font-bold text-navy">{r.name}</h3>
                  <ul className="mt-2 space-y-1 text-sm text-muted">{r.cities.map((c) => <li key={c}>{c}</li>)}</ul>
                </div>
              ))}
            </div>
            <h3 className="mt-10 font-heading text-lg font-bold text-navy">Example corridors</h3>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {coverage.corridors.map((c) => (
                <li key={`${c.from}-${c.to}`} className="flex items-center gap-3 py-3 text-[0.95rem] font-medium text-ink">
                  <span>{c.from}</span><ArrowRight size={14} className="text-gold" /><span>{c.to}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-surface" id="route-enquiry">
        <div className="container-x grid gap-10 lg:grid-cols-[40fr_60fr] lg:gap-16">
          <div>
            <div className="mb-4 flex items-center gap-3"><span className="gold-line" /><span className="eyebrow text-blue">Route enquiry</span></div>
            <h2 className="h-section text-navy">Ask About a Specific Route</h2>
            <p className="lead mt-5">Tell us your pickup and delivery cities and the cargo you need to move. We will confirm whether we can coordinate the route.</p>
          </div>
          <ContactForm title="Route enquiry" subjects={["Route availability", "Recurring route", "One-time movement", "Other"]} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
