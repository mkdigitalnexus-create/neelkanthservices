import { Hand, Headphones, PackageCheck, Truck } from "lucide-react";
import Reveal from "../common/Reveal";

const ITEMS = [
  {
    icon: PackageCheck,
    title: "Multi-Layer Packing Standards",
    text: "Heavy-duty 5-ply cartons, virgin bubble wrap, and furniture blankets.",
  },
  {
    icon: Hand,
    title: "Trained Permanent Crew",
    text: "Background-verified packers and carpenters — no unvetted casual day labour.",
  },
  {
    icon: Truck,
    title: "GPS-Tracked Container Fleet",
    text: "Owned weather-proof closed containers with live highway tracking updates.",
  },
  {
    icon: Headphones,
    title: "IBA Approved Transporter",
    text: "Code: NKT-8492 • ISO 9001:2015 certified with full GST billing.",
  },
];

/** Trust strip — a ruled four-column band, like the header block of a waybill. */
export default function TrustHighlights() {
  return (
    <section className="doc-container mt-20 md:mt-24" aria-label="Service benefits">
      <Reveal>
        <div className="grid overflow-hidden rounded-[4px] border border-rule bg-white sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`group relative flex gap-4 px-6 py-7 transition-colors hover:bg-kraft/60 ${
                i > 0 ? "border-t border-rule lg:border-l lg:border-t-0" : ""
              } ${i === 1 ? "sm:border-t-0 sm:border-l" : ""} ${i === 3 ? "sm:border-l" : ""}`}
            >
              <span
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-amber transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden="true"
              />
              <item.icon className="mt-[2px] h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <h3 className="font-display text-[0.975rem] font-bold leading-[1.35] text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.845rem] leading-[1.62] text-muted">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
