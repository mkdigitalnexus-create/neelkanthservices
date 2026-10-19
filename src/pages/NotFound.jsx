import { Link } from "react-router-dom";
import { ArrowRight, Compass, Home, PackageSearch } from "lucide-react";
import Seo from "../components/common/Seo";
import { LogoMark } from "../components/common/Logo";
import Reveal from "../components/common/Reveal";

/** Branded 404 page — invalid routes never render a blank screen. */
export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Neelkanth Transport Services"
        description="The page you are looking for could not be found. Return to the home page, explore the relocation services, or request a moving quotation."
        path="/404"
        noindex
      />

      <section className="relative overflow-hidden bg-ink">
        <div className="paper-grain absolute inset-0 opacity-[0.16]" aria-hidden="true" />
        <div className="chevron-band absolute inset-x-0 top-0 h-2" aria-hidden="true" />

        <div className="doc-container relative flex min-h-[74vh] flex-col justify-center py-20">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal>
              <div className="flex items-center gap-3">
                <LogoMark className="h-11 w-11" ink="#FBF8F3" face="#0E2439" accent="#E08A1E" />
                <span className="h-[2px] w-9 bg-amber" aria-hidden="true" />
                <span className="label-micro text-amber">Route not found</span>
              </div>

              <p
                className="tabular mt-8 font-display font-extrabold leading-none text-paper/12"
                style={{ fontSize: "clamp(5.5rem,17vw,11rem)" }}
                aria-hidden="true"
              >
                404
              </p>

              <h1 className="mt-2 max-w-[18ch] font-display font-extrabold display-tight text-paper text-[clamp(1.95rem,4.6vw,3.05rem)]">
                This consignment has gone off route.
              </h1>

              <p className="mt-5 max-w-[52ch] text-[1.025rem] leading-[1.74] text-onink/82">
                The page you were looking for is not here — it may have been moved, renamed, or the
                link may be incomplete. The rest of the site is exactly where you left it.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-[3px] border border-amber bg-amber px-6 text-[0.955rem] font-semibold text-[#20160A] shadow-[0_2px_0_0_#B96F12] transition-colors hover:bg-[#f0a03c]"
                >
                  <Home className="h-[18px] w-[18px]" aria-hidden="true" />
                  Back to Home
                </Link>
                <Link
                  to="/services"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-[3px] border border-paper/38 px-6 text-[0.955rem] font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
                >
                  Explore Services
                  <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[4px] border border-paper/16 bg-paper/[0.05] p-8">
                <h2 className="font-display text-[1.125rem] font-bold leading-snug text-paper">
                  Try one of these instead
                </h2>
                <ul className="mt-6 space-y-px">
                  {[
                    {
                      icon: PackageSearch,
                      label: "All relocation services",
                      to: "/services",
                      text: "Eight proposed service categories for household and commercial moves.",
                    },
                    {
                      icon: Compass,
                      label: "Our moving process",
                      to: "/our-process",
                      text: "The five stages of a move, from enquiry to delivery coordination.",
                    },
                    {
                      icon: Home,
                      label: "Get a free quote",
                      to: "/get-a-quote",
                      text: "Share the route, the date and what needs to move.",
                    },
                  ].map((item) => (
                    <li key={item.to} className="border-t border-paper/12">
                      <Link
                        to={item.to}
                        className="group flex items-start gap-4 py-4 transition-colors hover:text-amber"
                      >
                        <item.icon className="mt-[3px] h-5 w-5 shrink-0 text-amber" aria-hidden="true" />
                        <span>
                          <span className="block text-[0.975rem] font-semibold text-paper group-hover:text-amber">
                            {item.label}
                          </span>
                          <span className="mt-1 block text-[0.845rem] leading-[1.6] text-onink/68">
                            {item.text}
                          </span>
                        </span>
                        <ArrowRight
                          className="ml-auto mt-1 h-[18px] w-[18px] text-onink/50 transition-transform group-hover:translate-x-1 group-hover:text-amber"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
