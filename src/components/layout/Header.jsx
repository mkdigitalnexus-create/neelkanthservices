"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight, Phone, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import Logo from "../common/Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const c = siteConfig.contact;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isLinkActive = (to) => (to === "/" ? pathname === "/" : pathname?.startsWith(to));

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top Contact & Location Bar for High-Conversion & Local SEO */}
      <div className="hidden border-b border-white/10 bg-navy text-white/80 py-1.5 text-xs md:block">
        <div className="container-x flex items-center justify-between">
          <div className="flex items-center gap-4 text-[11px] lg:text-xs">
            <span className="flex items-center gap-1.5 font-medium text-white/90">
              <MapPin size={12} className="text-gold" />
              <span>Dhankot, Gurugram (Delhi NCR, Haryana)</span>
            </span>
            <span className="text-white/30">•</span>
            <span className="text-white/70">Daily Dispatch: Delhi, Gurugram, Ghaziabad, Haryana & Pan India</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] lg:text-xs">
            <a
              href={`tel:${c.phone}`}
              className="flex items-center gap-1.5 font-bold text-white hover:text-gold transition-colors"
            >
              <Phone size={12} className="text-gold" />
              <span>Call Main: {c.phoneDisplay}</span>
            </a>
            <span className="text-white/30">/</span>
            <a
              href={`tel:${c.phoneSecondary}`}
              className="font-medium text-white/80 hover:text-gold transition-colors"
            >
              <span>{c.phoneSecondaryDisplay}</span>
            </a>
            <span className="text-white/30">•</span>
            <a
              href={`https://wa.me/${c.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 font-semibold text-emerald-400 hover:text-emerald-300"
            >
              <MessageCircle size={12} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div
        className={`border-b transition-[height,box-shadow] duration-200 ${
          scrolled ? "border-line shadow-[0_6px_24px_-12px_rgba(8,27,54,0.25)]" : "border-line/70"
        }`}
      >
        <div className={`container-x flex items-center justify-between transition-[height] duration-200 ${scrolled ? "h-[64px] lg:h-[72px]" : "h-[68px] lg:h-[84px]"}`}>
          <Link href="/" className="flex shrink-0 items-center py-2" aria-label={`${siteConfig.name} home`}>
            <Logo className={`w-auto object-contain transition-[height] duration-200 ${scrolled ? "h-[46px] lg:h-[54px]" : "h-[52px] lg:h-[64px]"}`} />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {siteConfig.nav.map((n) => {
              const active = isLinkActive(n.to);
              return (
                <Link
                  key={n.to}
                  href={n.to}
                  className={`relative py-2 text-[0.9rem] font-semibold transition-colors duration-200 hover:text-blue ${
                    active ? "text-blue after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:rounded after:bg-gold" : "text-ink"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href={`tel:${c.phone}`}
              className="btn btn-outline btn-sm hidden xl:inline-flex items-center gap-1.5 font-bold text-navy"
            >
              <Phone size={14} className="text-blue" />
              <span>{c.phoneDisplay}</span>
            </a>
            <Link href="/get-a-quote" className="btn btn-gold btn-sm hidden sm:inline-flex">
              Get a Quote <ArrowRight size={16} />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center rounded-md border border-line text-navy lg:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-navy/60 lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              role="dialog"
              aria-label="Mobile navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-50 flex w-[min(88vw,380px)] flex-col bg-white shadow-2xl lg:hidden"
            >
              <div className="flex h-[72px] items-center justify-between border-b border-line px-5">
                <Logo className="h-[48px] w-auto object-contain" />
                <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="flex h-11 w-11 items-center justify-center rounded-md border border-line text-navy">
                  <X size={22} />
                </button>
              </div>
              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-6">
                <ul className="space-y-1">
                  {siteConfig.nav.map((n) => {
                    const active = isLinkActive(n.to);
                    return (
                      <li key={n.to}>
                        <Link
                          href={n.to}
                          className={`flex items-center justify-between rounded-md px-3 py-3 font-heading text-lg font-bold ${
                            active ? "bg-surface-blue text-blue" : "text-navy"
                          }`}
                        >
                          {n.label}
                          <ArrowRight size={16} className="text-gold" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6 border-t border-line pt-5">
                  <p className="eyebrow mb-3 text-muted">More</p>
                  <ul className="space-y-1">
                    {siteConfig.secondaryNav.map((n) => {
                      const active = isLinkActive(n.to);
                      return (
                        <li key={n.to}>
                          <Link
                            href={n.to}
                            className={`block rounded-md px-3 py-2.5 text-[0.95rem] font-semibold ${
                              active ? "text-blue" : "text-ink"
                            }`}
                          >
                            {n.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="mt-6 border-t border-line pt-5 space-y-3">
                  <p className="eyebrow text-muted">Direct Booking / Call</p>
                  <a
                    href={`tel:${c.phone}`}
                    className="flex items-center gap-3 rounded-lg border-2 border-blue/20 bg-blue/5 p-3 text-sm font-bold text-navy"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-blue text-white">
                      <Phone size={14} />
                    </span>
                    <div>
                      <span className="block text-[11px] text-blue font-semibold uppercase">Main Contact</span>
                      <span>{c.phoneDisplay}</span>
                    </div>
                  </a>
                  <a
                    href={`tel:${c.phoneSecondary}`}
                    className="flex items-center gap-3 rounded-lg border border-line bg-surface p-3 text-sm font-semibold text-navy"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-navy text-white">
                      <Phone size={14} />
                    </span>
                    <div>
                      <span className="block text-[11px] text-muted uppercase">Second Number</span>
                      <span>{c.phoneSecondaryDisplay}</span>
                    </div>
                  </a>
                  <a
                    href={`https://wa.me/${c.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-emerald-500/30 bg-emerald-50/60 p-3 text-sm font-bold text-emerald-900"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-600 text-white">
                      <MessageCircle size={14} />
                    </span>
                    <div>
                      <span className="block text-[11px] text-emerald-700 uppercase">Instant Chat</span>
                      <span>WhatsApp Support</span>
                    </div>
                  </a>
                  <div className="pt-2 text-[11px] text-muted">
                    <p className="font-semibold text-navy">Head Office:</p>
                    <p className="mt-0.5">{c.address}</p>
                  </div>
                </div>
              </nav>
              <div className="border-t border-line p-5">
                <Link href="/get-a-quote" className="btn btn-gold w-full">
                  Request a Quote
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
