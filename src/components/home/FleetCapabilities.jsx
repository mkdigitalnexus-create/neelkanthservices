import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Cog, Gauge, Shield, Truck } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";

const FLEET_TYPES = [
  {
    title: "14ft – 19ft Closed Containers",
    chassis: "Tata 407 / Eicher Pro Series",
    capacity: "3.5 to 7.5 Tons Capacity",
    tag: "City & Regional Transit",
    description:
      "Engineered for narrow urban lanes, society gates, same-day local shifting, and rapid Part Truck Load (PTL) parcel distribution.",
    features: [
      "Weather-sealed steel container body",
      "Tailgate ramp for easy roll-on handling",
      "Permitted for peak city transit windows",
    ],
  },
  {
    title: "24ft – 32ft Heavy Multi-Axle",
    chassis: "BharatBenz / Tata Signa MXL",
    capacity: "10 to 20 Tons Capacity",
    tag: "Highway FTL & Intercity",
    description:
      "Dedicated Full Truck Load (FTL) line-haul operations, 3+ BHK household shifting, industrial raw materials, and FMCG consignments.",
    features: [
      "High-cube container with vibration dampening",
      "Live GPS telematics with speed monitoring",
      "Tamper-proof container bolt seals",
    ],
  },
  {
    title: "Low-Bed & Heavy Flatbed Trailers",
    chassis: "Hydraulic Multi-Axle Pullers",
    capacity: "Up to 40+ Tons Capacity",
    tag: "Machinery & ODC Cargo",
    description:
      "Purpose-built for oversized industrial machinery, manufacturing plant equipment, heavy CNC machines, and factory relocations.",
    features: [
      "Low ground-clearance for tall cargo",
      "Grade-80 certified lashing chains & binders",
      "Special highway route clearance & escorts",
    ],
  },
  {
    title: "Enclosed Multi-Car Carriers",
    chassis: "Hydraulic Covered Rigs",
    capacity: "Up to 8 Cars / Bike Cages",
    tag: "Vehicle Transportation",
    description:
      "Enclosed multi-tier carriers protecting four-wheelers and two-wheelers from highway dust, weather, and road stones.",
    features: [
      "Hydraulic loading ramps & wheel chocks",
      "Soft tire strapping without body contact",
      "Pre-loading photographic inspection report",
    ],
  },
];

const METRICS = [
  { value: "45+", label: "Company-Owned Trucks", desc: "GPS-enabled closed containers" },
  { value: "100%", label: "Weatherproof Steel", desc: "Zero moisture or dust ingress" },
  { value: "All-India", label: "National Permits", desc: "Seamless interstate highway transit" },
  { value: "0%", label: "Transshipment on FTL", desc: "Direct point-to-point delivery" },
];

export default function FleetCapabilities() {
  return (
    <section className="relative mt-24 overflow-hidden md:mt-32" aria-labelledby="fleet-heading">
      <div className="doc-container">
        <SectionHeading
          id="fleet-heading"
          index="03"
          label="Our Fleet & Transport Infrastructure"
          title="Heavy transport capacity, engineered for cargo and relocation alike"
          intro="We own, operate, and maintain an extensive commercial fleet of 45+ vehicles. Whether you need a dedicated 32-foot container for interstate cargo or a prompt 14-foot truck for apartment shifting, we deploy the exact vehicle your move requires."
        />

        {/* Fleet Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FLEET_TYPES.map((fleet, i) => (
            <Reveal key={fleet.title} delay={i * 0.08} y={20}>
              <div className="group relative flex h-full flex-col justify-between rounded-[3px] border border-rule bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_16px_40px_-24px_rgba(14,36,57,0.45)]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-[2px] bg-kraft px-2.5 py-1 text-[0.72rem] font-semibold text-brand">
                      <Truck className="h-3.5 w-3.5" />
                      {fleet.tag}
                    </span>
                    <span className="tabular font-display text-[1.4rem] font-bold text-ink/20">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-[1.12rem] font-bold leading-tight text-ink">
                    {fleet.title}
                  </h3>

                  <p className="mt-1 text-[0.785rem] font-medium text-amber-dark">
                    {fleet.chassis} • {fleet.capacity}
                  </p>

                  <p className="mt-3 text-[0.875rem] leading-[1.65] text-muted">
                    {fleet.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-rule/60 pt-4">
                    {fleet.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-[0.815rem] text-muted">
                        <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 shrink-0 text-teal" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-2">
                  <Link
                    to="/get-a-quote"
                    className="inline-flex items-center gap-1.5 text-[0.825rem] font-semibold text-brand transition-colors hover:text-amber-dark"
                  >
                    Check vehicle availability
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Fleet Performance Metrics Strip */}
        <Reveal delay={0.15}>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[3px] border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((m) => (
              <div key={m.label} className="bg-[#FAF8F5] p-6 text-center lg:text-left">
                <span className="tabular font-display text-[1.85rem] font-extrabold text-ink">
                  {m.value}
                </span>
                <p className="mt-1 font-display text-[0.925rem] font-bold text-ink">{m.label}</p>
                <p className="mt-0.5 text-[0.785rem] text-muted">{m.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
