import { Link } from "react-router-dom";
import { Clock, Mail, Phone } from "lucide-react";
import { siteConfig, waHref } from "../../config/siteConfig";
import { WhatsAppIcon } from "../common/SocialIcons";

export default function TopBar() {
  return (
    <div className="hidden w-full border-b border-paper/10 bg-ink text-paper md:block">
      <div className="doc-container flex h-10 items-center justify-between gap-4 text-[0.78rem] whitespace-nowrap">
        {/* Left: Contact Numbers & Email */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href={`tel:${siteConfig.contact.phoneHref}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-amber"
          >
            <Phone className="h-3.5 w-3.5 text-amber" aria-hidden="true" />
            <span className="label-micro text-[0.62rem] text-onink/55">Enquiry:</span>
            <span className="font-semibold text-paper">{siteConfig.contact.phone}</span>
          </a>

          <span className="text-onink/30" aria-hidden="true">•</span>

          <a
            href="tel:18002703388"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-amber"
          >
            <span className="label-micro text-[0.62rem] text-onink/55">Toll-Free:</span>
            <span className="text-onink/90">1800 270 3388</span>
          </a>

          <span className="hidden lg:inline text-onink/30" aria-hidden="true">•</span>

          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="hidden lg:inline-flex items-center gap-1.5 transition-colors hover:text-amber"
          >
            <Mail className="h-3.5 w-3.5 text-amber" aria-hidden="true" />
            <span className="text-onink/85">{siteConfig.contact.email}</span>
          </a>
        </div>

        {/* Right: Hours, WhatsApp, FAQs */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden xl:inline-flex items-center gap-1.5 text-onink/80">
            <Clock className="h-3.5 w-3.5 text-amber" aria-hidden="true" />
            <span className="label-micro text-[0.62rem] text-onink/55">Hours:</span>
            <span>Mon–Sat 8:00 AM – 8:30 PM</span>
          </div>

          <a
            href={waHref("Hello Neelkanth Transport, I would like to enquire about moving services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-[2px] bg-[#25D366]/15 px-2 py-0.5 text-[0.74rem] font-semibold text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-[#0C1E10]"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            <span>WhatsApp</span>
          </a>

          <Link
            to="/faq"
            className="label-micro text-[0.625rem] text-amber transition-colors hover:text-paper"
          >
            FAQs
          </Link>
        </div>
      </div>
    </div>
  );
}
