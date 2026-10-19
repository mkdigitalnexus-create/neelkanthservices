import { Link } from "react-router-dom";
import { ArrowRight, Building, CheckCircle2, MapPin, Navigation, Phone, ShieldCheck } from "lucide-react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/common/Reveal";
import QuoteCTA from "../components/common/QuoteCTA";
import FAQAccordion from "../components/home/FAQAccordion";
import { regions } from "../data/locations";
import { siteConfig } from "../config/siteConfig";

export default function ServiceAreas() {
  return (
    <>
      <Seo
        title="Service Areas & Regional Hubs | Neelkanth Transport Services"
        description="Comprehensive packers and movers coverage across Punjab, Haryana, Chandigarh Tricity and Delhi NCR. Daily line-haul container routes, express local shifting and all-India transport."
        path="/service-areas"
        image="assets/cities/city-transport.jpg"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Service Areas" }]}
      />

      <PageHero
        index="01"
        label="Service areas"
        title="Direct Service Corridors across Punjab, Haryana, Chandigarh and Delhi NCR"
        intro="Scheduled daily departures, regional dispatch hubs, and experienced local moving crews connecting over 25+ cities across North India with door-to-door delivery."
        image="assets/cities/city-transport.jpg"
        imageAlt="A goods truck crossing a city flyover under a hazy overcast sky"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Service Areas" }]}
        objectPosition="58% 58%"
      />

      {/* Regional introduction */}
      <section className="doc-container mt-16 md:mt-24" aria-labelledby="regions-intro">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <SectionHeading
            id="regions-intro"
            index="02"
            label="Where we operate"
            title="A strategic network built around key transport corridors"
            intro="North India is a dynamic moving landscape — high-rise society access in Delhi NCR and Chandigarh Tricity, independent homes across Punjab and Haryana, and fast transit on the NH-44 Grand Trunk road. We maintain specialized handling equipment, parking clearance permits, and trained manpower tailored to each city's unique conditions."
          />

          <Reveal delay={0.08}>
            <aside className="rounded-[4px] border border-rule bg-kraft/55 p-7">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-teal" aria-hidden="true" />
                <h2 className="label-micro text-teal">Daily Line-Haul Guarantee</h2>
              </div>
              <p className="mt-4 text-[0.925rem] leading-[1.76] text-muted">
                Our owned fleet of closed-body container trucks runs on fixed daily schedules between Ludhiana, Chandigarh, Ambala, and New Delhi / Gurugram. Whether you are moving a 1BHK, a luxury villa, or a 50-workstation office, your goods travel securely without unnecessary multi-hub transshipment.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/get-a-quote"
                  className="inline-flex h-11 items-center gap-2 rounded-[3px] border border-amber bg-amber px-5 text-[0.9rem] font-semibold text-[#20160A] transition-colors hover:bg-[#f0a03c]"
                >
                  Get Route Quote
                  <ArrowRight className="h-[17px] w-[17px]" aria-hidden="true" />
                </Link>
                <a
                  href={`tel:${siteConfig.contact.phoneHref}`}
                  className="inline-flex h-11 items-center gap-2 rounded-[3px] border border-ink bg-ink px-5 text-[0.9rem] font-semibold text-paper transition-colors hover:bg-ink-soft"
                >
                  <Phone className="h-4 w-4" />
                  Call Dispatch Desk
                </a>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* Hub Locations Banner */}
      <section className="doc-container mt-16 md:mt-20">
        <div className="rounded-[4px] border border-rule bg-white p-7 md:p-9 shadow-sm">
          <h2 className="label-micro text-brand">Regional Dispatch Hubs</h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-3">
            {siteConfig.contact.hubs.map((hub) => (
              <div key={hub.city} className="rounded-[3px] border border-rule bg-kraft/40 p-5">
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-amber-dark" />
                  <h3 className="font-display font-bold text-ink text-[1.02rem]">{hub.city}</h3>
                </div>
                <p className="mt-2.5 text-[0.84rem] leading-[1.62] text-muted">{hub.address}</p>
                <p className="mt-3 text-[0.82rem] font-semibold text-brand">Direct: {hub.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Region and city cards */}
      <section className="doc-container mt-16 md:mt-20" aria-label="Regions and cities">
        <div className="space-y-10">
          {regions.map((region, rIndex) => (
            <Reveal key={region.id} delay={rIndex * 0.05} y={18}>
              <section aria-labelledby={`region-${region.id}`} className="rounded-[4px] border border-rule bg-white">
                <header className="flex flex-col gap-4 border-b border-rule px-6 py-6 sm:flex-row sm:items-center sm:justify-between md:px-8">
                  <div className="flex items-center gap-4">
                    <span className="tabular font-display text-[1.55rem] font-extrabold leading-none text-ink/22">
                      {region.code}
                    </span>
                    <div>
                      <h2
                        id={`region-${region.id}`}
                        className="font-display text-[1.285rem] font-extrabold display-tight text-ink"
                      >
                        {region.name}
                      </h2>
                      <p className="mt-1.5 max-w-[58ch] text-[0.875rem] leading-[1.62] text-muted">
                        {region.note}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 rounded-[2px] border border-teal/30 bg-teal/10 px-3 py-2 label-micro text-[0.6rem] text-teal">
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                    Active Daily Network
                  </span>
                </header>

                <ul className="grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3">
                  {region.cities.map((city) => (
                    <li key={city.name} className="bg-white p-5 transition-colors hover:bg-kraft/45">
                      <div className="flex items-start gap-3">
                        <Navigation className="mt-[3px] h-4 w-4 shrink-0 text-amber-dark" aria-hidden="true" />
                        <div>
                          <h3 className="text-[0.965rem] font-semibold leading-snug text-ink">{city.name}</h3>
                          <p className="mt-1.5 text-[0.825rem] leading-[1.6] text-muted">{city.note}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Local relocation information */}
      <section className="doc-container mt-24 md:mt-32" aria-labelledby="local-info-heading">
        <SectionHeading
          id="local-info-heading"
          index="03"
          label="Local relocation insights"
          title="How we tailor every move to local requirements"
          intro="Moving logistics change from high-rises to independent houses. Here is how our operational planning ensures smooth handling in each environment."
        />
        <div className="mt-11 grid gap-x-12 gap-y-px md:grid-cols-3">
          {[
            {
              title: "High-Rise Society Moves (NCR & Tricity)",
              text: "We coordinate service elevator bookings, security gate passes, and society moving hours in advance. Heavy-duty wheel dollies protect lobby tiles and minimize transit time from lift to truck.",
            },
            {
              title: "Independent Villas & Kothis (Punjab & Haryana)",
              text: "Our carpentry experts dismantle king-size beds, large wooden almirahs, and dining tables on-site, numbering and tagging all hardware before packing each piece in protective blankets.",
            },
            {
              title: "Express Intercity Highway Freight",
              text: "GPS-tracked enclosed container trucks ensure zero weather damage, rain protection, and route security along NH-44 and expressway corridors with real-time updates for clients.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} y={16}>
              <div className="flex h-full gap-5 border-t border-ink/12 py-7">
                <span className="tabular font-display text-[1.6rem] font-extrabold leading-none text-ink/20" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-[1.045rem] font-bold leading-snug text-ink">{item.title}</h3>
                  <p className="mt-2.5 text-[0.935rem] leading-[1.74] text-muted">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FAQAccordion
        index="04"
        label="Coverage questions"
        title="Questions about routes and transit schedules"
        ids={["intercity-move", "transit-time", "moving-date", "quote-request"]}
      />

      <div className="doc-container mt-20 md:mt-28">
        <QuoteCTA
          eyebrow="Intercity & Local Shifting"
          title="Ready to plan your move with North India's trusted transporter?"
          text="Share your moving date, origin, and destination. Our move coordinators will provide a detailed scope and competitive estimate within 30 minutes."
        />
      </div>
    </>
  );
}
