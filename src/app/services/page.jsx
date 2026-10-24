import ServicesContent from "./ServicesContent";
import { siteConfig } from "../../data/siteConfig";

export const metadata = {
  title: "Commercial Road Transport Services — Delhi NCR, Haryana & Punjab",
  description:
    "Comprehensive commercial road freight: Full Truckload (FTL), 32ft Container Trailers, Open-Body Trucks, and Industrial Cargo Movement connecting Delhi NCR, Haryana, and Punjab. Call +91 76781 76144.",
  keywords: [
    "commercial transport services delhi",
    "transport services in punjab",
    "transport company in haryana",
    "full truckload transport gurugram",
    "container truck services ludhiana",
    "trailer transport haryana",
    "open body truck service delhi ncr",
    "industrial cargo logistics north india",
  ],
  alternates: {
    canonical: `${siteConfig.siteUrl}/services`,
  },
  openGraph: {
    title: "Commercial Road Transport Services — Delhi NCR, Haryana & Punjab",
    description:
      "Reliable FTL, container, and trailer transport dispatched daily from our Dhankot, Gurugram hub across Delhi NCR, Haryana, Punjab & Pan-India.",
    url: `${siteConfig.siteUrl}/services`,
    images: ["/assets/hero/hero-3.jpg"],
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
