import PageHero from "../../components/common/PageHero";
import { siteConfig } from "../../data/siteConfig";

export const metadata = {
  title: "Privacy Policy | Neelkanth Transport Services",
  description:
    "Privacy Policy for Neelkanth Transport Services. Learn how your enquiry information and cargo movement requests are handled.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/privacy-policy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  ["Information We Collect", "When you use the enquiry forms or call our numbers, you may provide your name, company, phone number, email address, and shipment details (pickup/destination, cargo weight, dimensions). We use this information solely to coordinate and quote your freight."],
  ["How Information Is Used", "Information submitted is used to respond to your booking enquiry, prepare rate proposals, assign appropriate commercial vehicles, and coordinate driver dispatch across Delhi NCR and national highways."],
  ["Confidentiality & Data Protection", "We do not sell or lease client commercial details. Information is shared strictly with dispatch coordinators, drivers, and trusted logistics partners involved in the safe execution of your consignment."],
  ["Digital Cookies & Analytics", "We utilize standard server-side performance analytics to ensure website availability and optimize page loading times."],
  ["Contact & Data Inquiries", "If you wish to update or remove your business details from our dispatch directory, please reach out to our Gurugram head office at +91 76781 76144."],
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        intro="How client information and transport enquiries shared with Neelkanth Transport Services are handled."
        image="/assets/hero/hero-3.jpg"
        position="65% center"
        crumbs={[{ label: "Privacy Policy" }]}
      />
      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <p className="lead mt-4 text-ink">
              {siteConfig.name} operates from Dhankot Chowk, Gurugram, Haryana. We are committed to safeguarding the privacy and business confidentiality of every client who contacts us for commercial road transport.
            </p>
            <div className="mt-10 space-y-10">
              {sections.map(([title, desc], i) => (
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
              Head Office: 4th Floor, Ground Floor, Chowk, opposite Zepto, Dhankot, Gurugram, Haryana 122505
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
