import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import Logo from "../common/Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const linkClass = ({ isActive }) =>
    `relative py-2 text-[0.9rem] font-semibold transition-colors duration-200 hover:text-blue ${
      isActive ? "text-blue after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:rounded after:bg-gold" : "text-ink"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white transition-[height,box-shadow] duration-200 ${
        scrolled ? "border-line shadow-[0_6px_24px_-12px_rgba(8,27,54,0.25)]" : "border-line/70"
      }`}
    >
      <div className={`container-x flex items-center justify-between transition-[height] duration-200 ${scrolled ? "h-[68px] lg:h-[76px]" : "h-[72px] lg:h-[92px]"}`}>
        <Link to="/" className="flex shrink-0 items-center py-2" aria-label={`${siteConfig.name} home`}>
          <Logo className={`w-auto object-contain transition-[height] duration-200 ${scrolled ? "h-[50px] lg:h-[58px]" : "h-[56px] lg:h-[70px]"}`} />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === "/"} className={linkClass}>
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/get-a-quote" className="btn btn-gold btn-sm hidden sm:inline-flex">
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
                  {siteConfig.nav.map((n) => (
                    <li key={n.to}>
                      <NavLink
                        to={n.to}
                        end={n.to === "/"}
                        className={({ isActive }) =>
                          `flex items-center justify-between rounded-md px-3 py-3 font-heading text-lg font-bold ${isActive ? "bg-surface-blue text-blue" : "text-navy"}`
                        }
                      >
                        {n.label}
                        <ArrowRight size={16} className="text-gold" />
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-line pt-5">
                  <p className="eyebrow mb-3 text-muted">More</p>
                  <ul className="space-y-1">
                    {siteConfig.secondaryNav.map((n) => (
                      <li key={n.to}>
                        <NavLink to={n.to} className={({ isActive }) => `block rounded-md px-3 py-2.5 text-[0.95rem] font-semibold ${isActive ? "text-blue" : "text-ink"}`}>
                          {n.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
              <div className="border-t border-line p-5">
                <Link to="/get-a-quote" className="btn btn-gold w-full">
                  Request a Quote <ArrowRight size={16} />
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
