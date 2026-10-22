import ServicesContent from "./ServicesContent";

export const metadata = {
  title: "Commercial Road Transport Services — Gurugram, Delhi, Ghaziabad & Haryana",
  description:
    "Comprehensive commercial road freight: Full Truckload (FTL), Container Trailers, Open-Body Trucks, and Industrial Cargo Movement from Gurugram to Delhi NCR & Nationwide.",
  keywords: [
    "commercial transport services gurugram",
    "full truckload transport delhi",
    "container truck services ghaziabad",
    "trailer transport haryana",
    "open body truck service delhi ncr",
    "industrial cargo logistics india"
  ],
  alternates: {
    canonical: "https://www.neelkanthtransport.com/services",
  },
  openGraph: {
    title: "Commercial Road Transport Services — Gurugram, Delhi, Ghaziabad & Haryana",
    description:
      "Reliable FTL, container, and trailer transport dispatched daily from our Dhankot, Gurugram hub. Instant rates and confirmed placement.",
    url: "https://www.neelkanthtransport.com/services",
    images: ["/assets/hero/hero-3.jpg"],
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
