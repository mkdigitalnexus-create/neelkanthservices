import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { services } from "../../data/services";
import { siteConfig, isContactConfigured } from "../../config/siteConfig";
import Logo from "../common/Logo";
import TopBar from "./TopBar";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services", dropdown: true },
  { label: "Our Process", to: "/our-process" },
  { label: "Service Areas", to: "/service-areas" },
  { label: "Contact Us", to: "/contact" },
];

function navClass({ isActive }) {
  return `relative inline-flex items-center gap-1.5 py-2 text-[0.865rem] font-semibold tracking-[0.01em] transition-colors ${
    isActive ? "text-brand" : "text-ink hover:text-brand"
  }`;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const reduce = useReducedMotion();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const phoneLink = isContactConfigured("phone") ? `tel:${siteConfig.contact.phoneHref}` : null;

  return (
    <header className="sticky top-0 z-50">
      <TopBar />

      <div
        className={`border-b transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled
            ? "border-rule bg-paper/97 shadow-[0_10px_32px_-24px_rgba(14,36,57,0.55)] backdrop-blur-[6px]"
            : "border-transparent bg-paper"
        }`}
      >
        <div className="doc-container flex h-[72px] items-center justify-between gap-4 md:h-[82px]">
          <Link to="/" aria-label="Neelkanth Transport Services — home" className="shrink-0">
            <Logo />
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="flex items-center">
                    <NavLink to={item.to} className={navClass} end={false}>
                      {({ isActive }) => (
                        <>
                          <span>{item.label}</span>
                          {isActive ? (
                            <span className="absolute -bottom-[1px] left-0 h-[2px] w-full bg-amber" />
                          ) : null}
                        </>
                      )}
                    </NavLink>
                    <button
                      type="button"
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      aria-controls="services-menu"
                      aria-label="Toggle services menu"
                      onClick={() => setServicesOpen((v) => !v)}
                      className="ml-1 grid h-8 w-8 place-items-center rounded-[3px] text-ink/60 transition-colors hover:bg-ink/10 hover:text-ink"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  <AnimatePresence>
                    {servicesOpen ? (
                      <motion.div
                        id="services-menu"
                        initial={reduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full z-50 w-[42rem] max-w-[calc(100vw-2rem)] -translate-x-1/2 pt-3"
                      >
                        <div className="relative rounded-[4px] border border-rule bg-white p-4 shadow-[0_28px_70px_-28px_rgba(14,36,57,0.55)]">
                          {/* Centered pointer arrow connecting to Services nav link */}
                          <div
                            className="absolute -top-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-l border-t border-rule bg-white"
                            aria-hidden="true"
                          />

                          <div className="grid grid-cols-2 gap-6">
                            {/* Column 1: Commercial Transportation & Storage (6 services) */}
                            <div>
                              <div className="mb-2.5 flex items-center gap-2 border-b border-rule/70 pb-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                                <span className="label-micro text-[0.635rem] font-bold uppercase tracking-wider text-ink">
                                  Commercial Transportation
                                </span>
                              </div>
                              <div className="space-y-0.5">
                                {services
                                  .filter((s) => s.category === "transportation" || s.slug === "storage-warehousing")
                                  .map((s) => (
                                    <Link
                                      key={s.slug}
                                      to={`/services/${s.slug}`}
                                      className="group flex items-start gap-2.5 rounded-[3px] px-2.5 py-2 transition-colors hover:bg-kraft"
                                    >
                                      <span className="tabular label-micro mt-[3px] text-[0.6rem] text-amber-dark">
                                        {s.index}
                                      </span>
                                      <span>
                                        <span className="block text-[0.855rem] font-semibold text-ink transition-colors group-hover:text-brand">
                                          {s.name}
                                        </span>
                                        <span className="block text-[0.735rem] leading-[1.4] text-muted">
                                          {s.eyebrow}
                                        </span>
                                      </span>
                                    </Link>
                                  ))}
                              </div>
                            </div>

                            {/* Column 2: Packers & Movers & Relocation (6 services) */}
                            <div>
                              <div className="mb-2.5 flex items-center gap-2 border-b border-rule/70 pb-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                                <span className="label-micro text-[0.635rem] font-bold uppercase tracking-wider text-ink">
                                  Packers & Movers
                                </span>
                              </div>
                              <div className="space-y-0.5">
                                {services
                                  .filter((s) => s.category === "relocation" || s.slug === "car-bike-transport")
                                  .map((s) => (
                                    <Link
                                      key={s.slug}
                                      to={`/services/${s.slug}`}
                                      className="group flex items-start gap-2.5 rounded-[3px] px-2.5 py-2 transition-colors hover:bg-kraft"
                                    >
                                      <span className="tabular label-micro mt-[3px] text-[0.6rem] text-amber-dark">
                                        {s.index}
                                      </span>
                                      <span>
                                        <span className="block text-[0.855rem] font-semibold text-ink transition-colors group-hover:text-brand">
                                          {s.name}
                                        </span>
                                        <span className="block text-[0.735rem] leading-[1.4] text-muted">
                                          {s.eyebrow}
                                        </span>
                                      </span>
                                    </Link>
                                  ))}
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 flex items-center justify-between border-t border-rule pt-2.5">
                            <span className="text-[0.775rem] text-muted">
                              Pan-India Permit Fleet • IBA Approved Transporter
                            </span>
                            <Link
                              to="/services"
                              className="inline-flex items-center gap-1.5 rounded-[3px] bg-ink px-3.5 py-1.5 text-[0.815rem] font-semibold text-paper transition-colors hover:bg-ink-soft"
                            >
                              View all 12 services
                              <span aria-hidden="true">→</span>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink key={item.label} to={item.to} className={navClass} end={item.to === "/"}>
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      {isActive ? (
                        <span className="absolute -bottom-[1px] left-0 h-[2px] w-full bg-amber" />
                      ) : null}
                    </>
                  )}
                </NavLink>
              )
            )}
          </nav>

          <div className="flex items-center gap-2.5">
            {phoneLink ? (
              <a
                href={phoneLink}
                className="hidden h-11 items-center gap-2 rounded-[3px] border border-ink/20 px-4 text-[0.86rem] font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper md:inline-flex"
              >
                <Phone className="h-[17px] w-[17px]" aria-hidden="true" />
                Call now
              </a>
            ) : null}
            <Link
              to="/get-a-quote"
              className="hidden h-11 items-center rounded-[3px] border border-amber bg-amber px-5 text-[0.865rem] font-semibold text-[#20160A] shadow-[0_2px_0_0_#B96F12] transition-colors hover:bg-[#f0a03c] sm:inline-flex"
            >
              Get a Free Quote
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              className="grid h-11 w-11 place-items-center rounded-[3px] border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-paper lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            key="mobile-nav"
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div
              className="absolute inset-0 bg-ink/55"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={reduce ? { x: 0 } : { x: "100%" }}
              animate={{ x: 0 }}
              exit={reduce ? { x: 0 } : { x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 flex h-full w-[min(22rem,88vw)] flex-col bg-paper shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-rule px-5 py-4">
                <Logo markClass="h-9 w-9" />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation menu"
                  className="grid h-10 w-10 place-items-center rounded-[3px] border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-4">
                <ul className="space-y-1">
                  {NAV.map((item) => (
                    <li key={item.label} className="border-b border-rule/70">
                      {item.dropdown ? (
                        <>
                          <div className="flex items-center justify-between">
                            <NavLink
                              to={item.to}
                              className="flex-1 py-3.5 text-[1.02rem] font-semibold text-ink"
                            >
                              {item.label}
                            </NavLink>
                            <button
                              type="button"
                              onClick={() => setMobileServicesOpen((v) => !v)}
                              aria-expanded={mobileServicesOpen}
                              aria-controls="mobile-services"
                              aria-label="Toggle services list"
                              className="grid h-9 w-9 place-items-center rounded-[3px] border border-ink/15 text-ink"
                            >
                              <ChevronDown
                                className={`h-4 w-4 transition-transform duration-300 ${
                                  mobileServicesOpen ? "rotate-180" : ""
                                }`}
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                          <AnimatePresence initial={false}>
                            {mobileServicesOpen ? (
                              <motion.ul
                                id="mobile-services"
                                initial={reduce ? { height: "auto" } : { height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={reduce ? { height: 0 } : { height: 0, opacity: 0 }}
                                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden pb-2"
                              >
                                {services.map((s) => (
                                  <li key={s.slug}>
                                    <Link
                                      to={`/services/${s.slug}`}
                                      className="flex items-center gap-3 py-2 pl-1 text-[0.925rem] text-muted transition-colors hover:text-brand"
                                    >
                                      <span className="tabular label-micro text-[0.6rem] text-amber-dark">
                                        {s.index}
                                      </span>
                                      {s.name}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            ) : null}
                          </AnimatePresence>
                        </>
                      ) : (
                        <NavLink
                          to={item.to}
                          end={item.to === "/"}
                          className="block py-3.5 text-[1.02rem] font-semibold text-ink"
                        >
                          {item.label}
                        </NavLink>
                      )}
                    </li>
                  ))}
                  <li>
                    <Link to="/faq" className="block py-3.5 text-[1.02rem] font-semibold text-ink">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="space-y-2.5 border-t border-rule px-5 py-5">
                <Link
                  to="/get-a-quote"
                  className="flex h-12 items-center justify-center rounded-[3px] border border-amber bg-amber text-[0.94rem] font-semibold text-[#20160A]"
                >
                  Get a Free Quote
                </Link>
                <a
                  href={`tel:${siteConfig.contact.phoneHref}`}
                  className="flex h-12 items-center justify-center gap-2 rounded-[3px] border border-ink/25 text-[0.94rem] font-semibold text-ink transition-colors hover:border-amber hover:text-amber"
                >
                  <Phone className="h-[17px] w-[17px]" aria-hidden="true" />
                  Call {siteConfig.contact.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
