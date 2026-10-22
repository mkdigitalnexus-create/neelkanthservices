import PageHero from "../../components/common/PageHero";
import { siteConfig } from "../../data/siteConfig";

export const metadata = {
  title: "Legal Notice & Terms | Neelkanth Transport Services",
  description:
    "Legal terms, commercial carrier disclosures, and operating terms for Neelkanth Transport Services, Gurugram, Haryana.",
  alternates: {
    canonical: "https://www.neelkanthtransport.com/legal-notice",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const terms = [
  ["Operating Entity", "Neelkanth Transport Services is a premier road logistics and freight transport enterprise headquartered at 4th Floor, Ground Floor, Chowk, opposite Zepto, Dhankot, Gurugram, Haryana 122505."],
  ["Commercial Scope", "We operate strictly commercial and industrial road freight transportation. All consignment bookings, vehicle allocations, transit timelines, and freight tariffs are governed by written consignment notes (Bilty / L.R.) issued at time of loading."],
  ["Carrier Liability & Transit Insurance", "Shippers and consignors are advised to secure adequate transit cargo insurance. Carrier liability adheres to applicable Indian road transportation and Carriage by Road laws."],
  ["Website Content & Intellectual Property", "All brand logos, photography, trademarks, and descriptive content published on this website are property of Neelkanth Transport Services and may not be reproduced without written permission."],
];

export default function LegalNoticePage() {
  return (
    <>
      <PageHero
        title="Legal Notice & Terms"
        intro="Commercial operating disclosures, carrier terms, and corporate information for Neelkanth Transport Services."
        image="/assets/hero/hero-3.jpg"
        position="65% center"
        crumbs={[{ label: "Legal Notice" }]}
      />
      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <div className="mt-8 space-y-10">
              {terms.map(([title, desc], i) => (
                <section key={title}>
                  <h2 className="flex items-baseline gap-4 font-heading text-xl font-bold text-navy">
                    <span className="text-xs text-gold">{String(i + 1).padStart(2, "0")}</span>
                    {title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted">{desc}</p>
                </section>
              ))}
            </div>
            <p className="mt-12 text-xs text-muted">
              For legal inquiries: Contact Head Office at +91 76781 76144 or visit Dhankot, Gurugram, Haryana 122505.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
