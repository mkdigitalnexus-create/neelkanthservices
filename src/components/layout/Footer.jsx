import { Link } from "react-router-dom";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { services } from "../../data/services";
import { regions } from "../../data/locations";
import { siteConfig, waHref } from "../../config/siteConfig";
import Logo from "../common/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
  WhatsAppIcon,
} from "../common/SocialIcons";

const COMPANY = [
  { label: "About Us", to: "/about" },
  { label: "Our Process", to: "/our-process" },
  { label: "Service Areas", to: "/service-areas" },
  { label: "Get a Free Quote", to: "/get-a-quote" },
  { label: "Contact Us", to: "/contact" },
  { label: "FAQs", to: "/faq" },
];

const SOCIAL_META = {
  facebook: {
    icon: FacebookIcon,
    name: "Facebook",
    hoverStyle: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
  },
  instagram: {
    icon: InstagramIcon,
    name: "Instagram",
    hoverStyle: "hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F]",
  },
  linkedin: {
    icon: LinkedInIcon,
    name: "LinkedIn",
    hoverStyle: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]",
  },
  youtube: {
    icon: YouTubeIcon,
    name: "YouTube",
    hoverStyle: "hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]",
  },
};

function ContactRow({ icon: Icon, label, value, href }) {
  return (
    <li className="flex items-start gap-3">
      <Icon className="mt-[3px] h-4 w-4 shrink-0 text-amber" aria-hidden="true" />
      <div>
        <p className="label-micro text-[0.6rem] text-onink/50">{label}</p>
        {href ? (
          <a href={href} className="mt-1 block text-[0.885rem] text-paper transition-colors hover:text-amber">
            {value}
          </a>
        ) : (
          <p className="mt-1 text-[0.885rem] text-onink/70">{value}</p>
        )}
      </div>
    </li>
  );
}

export default function Footer() {
  const socials = Object.entries(siteConfig.social).filter(([, v]) => typeof v === "string" && v);
  const waUrl = waHref("Hello! I would like to enquire about transport and moving services.");

  return (
    <footer className="relative mt-24 bg-ink text-paper">
      <div className="chevron-band h-2 w-full opacity-90" aria-hidden="true" />

      <div className="doc-container grid gap-11 py-14 md:grid-cols-2 md:py-16 lg:grid-cols-[1.45fr_1fr_1fr_1.15fr] lg:gap-10">
        <div>
          <Logo variant="light" />
          <p className="mt-6 max-w-[36ch] font-serif text-[1.12rem] italic leading-[1.55] text-onink/85">
            {siteConfig.tagline}
          </p>
          <p className="mt-5 max-w-[42ch] text-[0.885rem] leading-[1.72] text-onink/65">
            Commercial transportation, Full Truck Load (FTL) freight, industrial machinery logistics, and professional packers & movers across Punjab, Haryana, Chandigarh, Delhi NCR and Pan-India.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            {socials.map(([name, url]) => {
              const meta = SOCIAL_META[name.toLowerCase()];
              const Icon = meta?.icon;
              if (!Icon) return null;
              return (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Neelkanth Transport on ${meta.name}`}
                  title={meta.name}
                  className={`grid h-10 w-10 place-items-center rounded-full border border-paper/20 bg-ink/60 text-onink/80 transition-all duration-200 ${meta.hoverStyle} hover:scale-110 shadow-sm`}
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              );
            })}
            {waUrl ? (
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Neelkanth Transport on WhatsApp"
                title="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full border border-paper/20 bg-ink/60 text-onink/80 transition-all duration-200 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:scale-110 shadow-sm"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
              </a>
            ) : null}
          </div>
        </div>

        <nav aria-label="Services">
          <h2 className="label-micro text-amber">Services</h2>
          <ul className="mt-5 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="text-[0.885rem] text-onink/72 transition-colors hover:text-paper"
                >
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="text-[0.885rem] font-semibold text-amber">
                All services →
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Company and service areas">
          <h2 className="label-micro text-amber">Company</h2>
          <ul className="mt-5 space-y-2.5">
            {COMPANY.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-[0.885rem] text-onink/72 transition-colors hover:text-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mt-8 label-micro text-amber">Active Regions</h2>
          <ul className="mt-5 space-y-2.5">
            {regions.slice(0, 4).map((r) => (
              <li key={r.id}>
                <Link
                  to="/service-areas"
                  className="text-[0.885rem] text-onink/72 transition-colors hover:text-paper"
                >
                  {r.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="label-micro text-amber">Contact &amp; Hubs</h2>
          <ul className="mt-5 space-y-4">
            <ContactRow
              icon={Phone}
              label="Direct phone / WhatsApp"
              value={siteConfig.contact.phone}
              href={`tel:${siteConfig.contact.phoneHref}`}
            />
            <ContactRow
              icon={Mail}
              label="Email enquiry"
              value={siteConfig.contact.email}
              href={`mailto:${siteConfig.contact.email}`}
            />
            <ContactRow
              icon={MapPin}
              label="Head office"
              value={siteConfig.contact.address}
            />
            <ContactRow icon={Clock} label="Working hours" value={siteConfig.hoursSummary} />
          </ul>

          <div className="mt-6 rounded-[3px] border border-paper/15 bg-paper/[0.04] p-4 text-[0.795rem] text-onink/75">
            <p className="label-micro text-[0.62rem] text-amber">Accreditation &amp; Trust</p>
            <p className="mt-2 text-paper font-semibold">IBA Approved Code: {siteConfig.ibaApprovedCode}</p>
            <p className="mt-1">{siteConfig.isoCertification} • GSTIN: {siteConfig.gstin}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/12">
        <div className="doc-container flex flex-col gap-3 py-6 text-[0.775rem] text-onink/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="max-w-[62ch] leading-[1.6]">
            Government registered and IBA approved packers &amp; movers serving Punjab, Haryana, Chandigarh Tricity, and Delhi NCR with all-India carrier logistics.
          </p>
          <ul className="flex flex-wrap gap-5">
            <li>
              <Link to="/faq" className="transition-colors hover:text-amber">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-amber">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/get-a-quote" className="transition-colors hover:text-amber">
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
