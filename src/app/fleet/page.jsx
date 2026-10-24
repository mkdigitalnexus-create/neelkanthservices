import FleetContent from "./FleetContent";
import { siteConfig } from "../../data/siteConfig";

export const metadata = {
  title: "Commercial Truck Fleet in Delhi NCR, Haryana & Punjab | 32ft Containers, Trailers, Open Trucks",
  description:
    "Explore Neelkanth Transport Services commercial fleet: Open-body trucks, 32ft MXL containers, closed containers & heavy trailers. Connecting Delhi NCR, Haryana, Punjab & Pan-India. Call +91 76781 76144.",
  keywords: [
    "transport fleet Delhi NCR",
    "commercial trucks Haryana",
    "container truck hire Punjab",
    "32ft container hire Ludhiana",
    "trailer transport services Delhi",
    "truck hire Dhankot Gurugram",
    "Neelkanth Transport fleet",
  ],
  alternates: {
    canonical: `${siteConfig.siteUrl}/fleet`,
  },
  openGraph: {
    title: "Commercial Truck Fleet in Delhi NCR, Haryana & Punjab | Neelkanth Transport",
    description:
      "Modern commercial fleet: Open-body trucks, 32ft containers & multi-axle trailers for industrial freight across Delhi NCR, Haryana, Punjab & Pan-India.",
    url: `${siteConfig.siteUrl}/fleet`,
    images: [
      {
        url: "/assets/fleet/fleet-dark.jpg",
        width: 1200,
        height: 630,
        alt: "Neelkanth Transport Services Commercial Fleet",
      },
    ],
  },
};

export default function FleetPage() {
  return <FleetContent />;
}
