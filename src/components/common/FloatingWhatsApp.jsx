"use client";

import WhatsAppIcon from "./WhatsAppIcon";
import { siteConfig } from "../../data/siteConfig";

export default function FloatingWhatsApp() {
  const c = siteConfig.contact;
  const defaultMessage =
    "Namaste Neelkanth Transport Services, I am visiting your website and would like to enquire about truck transport & freight rates.";
  const waUrl = `https://wa.me/${c.whatsapp}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside
      aria-label="WhatsApp Quick Contact"
      className="fixed bottom-6 right-5 z-40 md:bottom-8 md:right-8"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp with Neelkanth Transport Services"
        className="group relative flex items-center gap-2.5 sm:gap-3 rounded-full bg-[#25D366] px-4 py-3 sm:px-5 sm:py-3.5 text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] focus:outline-none focus:ring-4 focus:ring-emerald-300/60"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none group-hover:opacity-0" />

        {/* Real WhatsApp white speech-bubble & handset icon */}
        <WhatsAppIcon size={26} color="#ffffff" className="relative z-10 shrink-0 drop-shadow-sm" />

        {/* Text Label */}
        <div className="relative z-10 text-left">
          <span className="block text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-emerald-100 leading-none">
            24/7 Live Rates
          </span>
          <span className="block font-heading text-xs sm:text-sm font-bold text-white leading-tight mt-0.5 whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </div>
      </a>
    </aside>
  );
}
