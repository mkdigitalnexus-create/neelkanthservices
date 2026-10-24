import Hero from "../components/home/Hero";
import QuoteBar from "../components/home/QuoteBar";
import TrustStrip from "../components/home/TrustStrip";
import AboutIntro from "../components/home/AboutIntro";
import ServicesShowcase from "../components/home/ServicesShowcase";
import FleetShowcase from "../components/home/FleetShowcase";
import IndustriesGrid from "../components/home/IndustriesGrid";
import Process from "../components/home/Process";
import RouteNetwork from "../components/home/RouteNetwork";
import FaqSection from "../components/home/FaqSection";
import CtaBand from "../components/common/CtaBand";

import { siteConfig } from "../data/siteConfig";

export const metadata = {
  title: "Best Transport Services in Delhi, Haryana & Punjab | Neelkanth Transport",
  description:
    "Top-rated commercial logistics and road freight partner headquartered in Dhankot, Gurugram. Fast, safe full truckload (FTL), container, and trailer transport across Delhi NCR, Haryana, Punjab & Pan-India. Call +91 76781 76144.",
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuoteBar />
      <TrustStrip />
      <AboutIntro />
      <ServicesShowcase />
      <FleetShowcase />
      <IndustriesGrid />
      <Process />
      <RouteNetwork />
      <FaqSection />
      <CtaBand />
    </>
  );
}
