import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Navigation, ShieldCheck } from "lucide-react";
import { regions } from "../../data/locations";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";

export default function ServiceAreaPreview() {
  return (
    <section className="doc-container mt-24 md:mt-32" aria-labelledby="areas-heading">
      <SectionHeading
        id="areas-heading"
        index="04"
        label="Where we operate"
        title="Active Service Network across North India"
        intro="Scheduled daily container runs and trained localized packing teams connecting Punjab, Haryana, Chandigarh Tricity, and Delhi NCR with guaranteed transit schedules."
      />

      <div className="mt-11 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <Reveal>
          <div className="relative h-full overflow-hidden rounded-[4px] border border-rule bg-ink">
            <img
              src="assets/cities/city-transport.jpg"
              alt="A goods truck crossing a city flyover under a hazy overcast sky"
              loading="lazy"
              decoding="async"
              width="1536"
              height="1024"
              className="absolute inset-0 h-full w-full object-cover opacity-55"
              style={{ objectPosition: "62% 55%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/72 to-ink/25" aria-hidden="true" />
            <div className="relative flex h-full flex-col justify-end p-7 md:p-9">
              <Navigation className="h-6 w-6 text-amber" aria-hidden="true" />
              <p className="mt-5 font-serif text-[1.28rem] italic leading-[1.52] text-paper">
                “Need an express intercity move or same-day local shifting? Our regional hubs ensure prompt fleet dispatch and punctual delivery.”
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/service-areas"
                  className="inline-flex h-11 items-center gap-2 rounded-[3px] border border-amber bg-amber px-5 text-[0.915rem] font-semibold text-[#20160A] transition-colors hover:bg-[#f0a03c]"
                >
                  View all service areas
                  <ArrowRight className="h-[17px] w-[17px]" aria-hidden="true" />
                </Link>
                <Link
                  to="/get-a-quote"
                  className="inline-flex h-11 items-center rounded-[3px] border border-paper/40 px-5 text-[0.915rem] font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
                >
                  Enquire about a route
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {regions.slice(0, 4).map((region, i) => (
            <Reveal key={region.id} delay={i * 0.07} y={16}>
              <article className="group h-full rounded-[3px] border border-rule bg-white p-5 transition-colors hover:border-ink/25">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
                    <h3 className="font-display text-[1.02rem] font-bold text-ink">{region.name}</h3>
                  </div>
                  <span className="tabular label-micro text-[0.6rem] text-muted">{region.code}</span>
                </div>
                <p className="mt-2.5 text-[0.845rem] leading-[1.62] text-muted">{region.note}</p>
                <ul className="mt-3.5 flex flex-wrap gap-1.5">
                  {region.cities.slice(0, 4).map((c) => (
                    <li
                      key={c.name}
                      className="rounded-[2px] border border-rule bg-kraft/70 px-2 py-1 text-[0.735rem] text-ink/80"
                    >
                      {c.name}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-7 flex items-center gap-3 rounded-[3px] border border-rule bg-white px-5 py-4 text-[0.875rem] leading-[1.68] text-muted shadow-sm">
          <ShieldCheck className="h-5 w-5 shrink-0 text-teal" />
          <p>
            <strong className="text-ink">Daily Line-Haul Guarantee:</strong> Scheduled closed-body container fleet operating across Punjab, Haryana, Chandigarh Tricity, and Delhi NCR corridors. Same-day local shifting available across Tricity and Ludhiana.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
