import { Link } from "react-router-dom";
import { ArrowRight, Boxes, Building2, Home as HomeIcon, Warehouse } from "lucide-react";
import Seo from "../components/common/Seo";
import Reveal from "../components/common/Reveal";
import HeroCarousel from "../components/home/HeroCarousel";
import TrustHighlights from "../components/home/TrustHighlights";
import ServicesGrid from "../components/home/ServicesGrid";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ProcessTimeline from "../components/home/ProcessTimeline";
import ServiceAreaPreview from "../components/home/ServiceAreaPreview";
import Testimonials from "../components/home/Testimonials";
import FAQAccordion from "../components/home/FAQAccordion";
import FinalCTA from "../components/home/FinalCTA";

const BANNER_ITEMS = [
  { icon: HomeIcon, label: "Household" },
  { icon: Building2, label: "Commercial" },
  { icon: Boxes, label: "Packing" },
  { icon: Warehouse, label: "Storage" },
];

/** Featured relocation banner — wide cinematic band between process and regions. */
function RelocationBanner() {
  return (
    <section className="doc-container mt-24 md:mt-32" aria-labelledby="relocation-banner-heading">
      <Reveal>
        <div className="relative min-h-[30rem] md:min-h-[34rem] overflow-hidden rounded-[4px] border border-rule flex items-center">
          <img
            src="assets/services/loading.jpg"
            alt="Movers loading wrapped furniture and cartons into a transport container over a steel ramp"
            loading="lazy"
            decoding="async"
            width="1536"
            height="1024"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "58% 52%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/96 via-ink/85 to-ink/30" aria-hidden="true" />

          <div className="relative z-10 w-full px-7 py-12 md:px-14 md:py-16">
            <div className="max-w-[38rem]">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-9 bg-amber" aria-hidden="true" />
                <span className="label-micro text-amber">Household &amp; commercial</span>
              </div>
              <h2
                id="relocation-banner-heading"
                className="mt-5 font-display font-extrabold display-tight text-paper text-[clamp(1.75rem,4.2vw,2.75rem)]"
              >
                Organized relocation for homes, offices and everything in between.
              </h2>
              <p className="mt-5 max-w-[48ch] text-[1.015rem] leading-[1.72] text-onink/85">
                One planning approach, applied to different kinds of moves — from a single-bedroom
                apartment to a full commercial floor, with packing, handling and transport arranged
                as one coordinated job.
              </p>

              <ul className="mt-7 flex flex-wrap gap-2.5">
                {BANNER_ITEMS.map((item) => (
                  <li
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-[2px] border border-paper/25 bg-paper/10 px-3 py-1.5 text-[0.815rem] text-paper/88 backdrop-blur-sm"
                  >
                    <item.icon className="h-4 w-4 text-amber" aria-hidden="true" />
                    {item.label}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  to="/services"
                  className="inline-flex h-12 items-center gap-2 rounded-[3px] border border-amber bg-amber px-6 text-[0.955rem] font-semibold text-[#20160A] shadow-[0_2px_0_0_#B96F12] transition-colors hover:bg-[#f0a03c]"
                >
                  Explore Our Services
                  <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Seo
        title="Neelkanth Transport Services — Packers & Movers, Household Shifting & Transport"
        description="Packers and movers for household shifting, office relocation, packing and unpacking, loading and unloading, car and bike transportation and intercity transport across Punjab, Haryana, Chandigarh and Delhi NCR. Request a moving quotation."
        path="/"
        image="assets/hero/hero-household.jpg"
        breadcrumbs={[{ label: "Home", to: "/" }]}
      />

      <HeroCarousel />
      <TrustHighlights />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessTimeline />
      <RelocationBanner />
      <ServiceAreaPreview />
      <Testimonials />
      <FAQAccordion />
      <FinalCTA />
    </>
  );
}
