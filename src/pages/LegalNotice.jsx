import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import { siteConfig } from "../data/siteConfig";

const sections = [
  ["Information we collect", "When you use the enquiry forms on this website, you may provide your name, company, phone number, email address and details about your transport requirement. In this demonstration version, form data is validated in your browser only and is not transmitted or stored."],
  ["How information is used", "Information submitted through a live version of this website would be used to respond to your enquiry, prepare a transport proposal and coordinate the requested service."],
  ["Sharing of information", "We do not sell personal information. Information may be shared with vehicle operators or partners only to the extent required to coordinate a transport service you have requested."],
  ["Cookies and analytics", "This demonstration website does not set tracking cookies. A live version may use basic analytics; this section should be updated to reflect any tools in use."],
  ["Data retention", "Enquiry details would be retained only as long as necessary to respond to and service the request, or as required by applicable law."],
  ["Your choices", "You may ask us to update or delete information you have provided by contacting us through the details published on the Contact page."],
  ["Changes to this policy", "This policy may be updated from time to time. The latest version will always be published on this page."],
];

export default function LegalNotice() {
  return (
    <>
      <Seo title="Privacy Policy" description={`Draft privacy policy for the ${siteConfig.name} website.`} />
      <PageHero title="Privacy Policy" intro="How information shared through this website is handled." image="/assets/hero/hero-3.jpg" position="65% center" crumbs={[{ label: "Privacy Policy" }]} />
      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <p className="rounded-md border border-gold/40 bg-gold/10 px-4 py-3 text-sm leading-relaxed text-ink">
              <strong>Draft notice:</strong> This is an editable draft prepared for the website demonstration. It has not been reviewed by a legal professional and should be finalised before publication.
            </p>
            <p className="lead mt-8">{siteConfig.name} ("we", "us") respects the privacy of visitors to this website. This policy explains what information may be collected and how it would be used.</p>
            <div className="mt-10 space-y-10">
              {sections.map(([t, d], i) => (
                <section key={t}>
                  <h2 className="flex items-baseline gap-4 font-heading text-xl font-bold text-navy"><span className="text-xs text-gold">{String(i + 1).padStart(2, "0")}</span>{t}</h2>
                  <p className="mt-3 leading-relaxed text-muted">{d}</p>
                </section>
              ))}
            </div>
            <p className="mt-12 text-xs text-muted">Last updated: draft for demonstration.</p>
          </div>
        </div>
      </section>
    </>
  );
}
