import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import ContactForm from "../components/forms/ContactForm";
import { siteConfig } from "../data/siteConfig";

export default function Contact() {
  const c = siteConfig.contact;
  const rows = [
    c.phone && { icon: Phone, label: "Phone", value: c.phoneDisplay || c.phone, href: `tel:${c.phone}` },
    c.whatsapp && { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: `https://wa.me/${c.whatsapp.replace(/\D/g, "")}` },
    c.email && { icon: Mail, label: "Email", value: c.email, href: `mailto:${c.email}` },
    c.address && { icon: MapPin, label: "Address", value: c.address },
    c.hours && { icon: Clock, label: "Hours", value: c.hours },
  ].filter(Boolean);

  return (
    <>
      <Seo title="Contact Us" description="Get in touch with Neelkhanth Transport Services to discuss your transportation requirement." />
      <PageHero title="Contact Us" intro="Discuss your transport requirement with our team." image="/assets/services/about.jpg" position="center 40%" crumbs={[{ label: "Contact" }]} />

      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[40fr_60fr] lg:gap-20">
          <div>
            <div className="mb-4 flex items-center gap-3"><span className="gold-line" /><span className="eyebrow text-blue">Reach us</span></div>
            <h2 className="h-section text-navy">Let's Talk About Your Cargo.</h2>
            <p className="lead mt-5">Send a message using the form or reach us through the channels below.</p>

            <ul className="mt-8 divide-y divide-line border-y border-line">
              {rows.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4 py-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface-blue text-blue"><Icon size={18} /></span>
                  <div>
                    <p className="eyebrow text-muted">{label}</p>
                    {href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="mt-1 block font-heading font-bold text-navy hover:text-blue">{value}</a> : <p className="mt-1 font-heading font-bold text-navy">{value}</p>}
                  </div>
                </li>
              ))}
              {rows.length <= 1 && (
                <li className="py-4 text-sm leading-relaxed text-muted">Phone, email and address will be published here once confirmed by the business. In the meantime, use the form or the quote page.</li>
              )}
            </ul>
            <Link to="/get-a-quote" className="btn btn-navy btn-sm mt-8">Request a Quote <ArrowRight size={16} /></Link>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
