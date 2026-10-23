"use client";

import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { siteConfig } from "../../data/siteConfig";

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);
  const c = siteConfig.contact;

  const defaultMessage =
    "Namaste Neelkanth Transport Services, I am visiting your website and would like to enquire about truck transport & freight rates.";
  const waUrl = `https://wa.me/${c.whatsapp}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div
      className="fixed bottom-6 right-5 z-40 flex items-center gap-3 md:bottom-8 md:right-8"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip badge */}
      <div
        className={`hidden md:flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-xs font-bold text-navy shadow-lg border border-line transition-all duration-300 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-90 translate-x-1"
        }`}
      >
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Chat on WhatsApp</span>
      </div>

      {/* Main Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp with Neelkanth Transport Services"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] focus:outline-none focus:ring-4 focus:ring-emerald-300/50"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:opacity-0" />

        {/* WhatsApp Icon */}
        <WhatsAppIcon size={34} className="relative z-10 drop-shadow-sm" />

        {/* Status dot */}
        <span className="absolute top-1 right-1 h-3.5 w-3.5 rounded-full bg-amber-400 border-2 border-white shadow-sm" title="24/7 Dispatch Online" />
      </a>
    </div>
  );
}
