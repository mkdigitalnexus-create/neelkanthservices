import Seo from "../components/common/Seo";
import Hero from "../components/home/Hero";
import QuoteBar from "../components/home/QuoteBar";
import TrustStrip from "../components/home/TrustStrip";
import AboutIntro from "../components/home/AboutIntro";
import ServicesShowcase from "../components/home/ServicesShowcase";
import FleetShowcase from "../components/home/FleetShowcase";
import IndustriesGrid from "../components/home/IndustriesGrid";
import Process from "../components/home/Process";
import RouteNetwork from "../components/home/RouteNetwork";
import GalleryPreview from "../components/home/GalleryPreview";
import FaqSection from "../components/home/FaqSection";
import CtaBand from "../components/common/CtaBand";

export default function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <QuoteBar />
      <TrustStrip />
      <AboutIntro />
      <ServicesShowcase />
      <FleetShowcase />
      <IndustriesGrid />
      <Process />
      <RouteNetwork />
      <GalleryPreview />
      <FaqSection />
      <CtaBand />
    </>
  );
}
