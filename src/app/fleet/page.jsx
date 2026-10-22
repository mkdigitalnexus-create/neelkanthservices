import FleetContent from "./FleetContent";

export const metadata = {
  title: "Commercial Truck Fleet in Delhi, Gurugram & Haryana | Containers, Trailers, Open Body",
  description:
    "Explore Neelkanth Transport Services commercial fleet: Open-body trucks, 32ft MX containers, closed containers & heavy trailers. Available across Delhi NCR, Gurugram, Ghaziabad and Pan-India. Call +91 76781 76144.",
  keywords: [
    "transport fleet Gurugram",
    "commercial trucks Delhi NCR",
    "container truck hire Haryana",
    "open body truck rental Ghaziabad",
    "trailer transport services Delhi",
    "truck hire Dhankot Gurugram",
    "Neelkanth Transport fleet",
  ],
  alternates: {
    canonical: "https://www.neelkanthtransport.com/fleet",
  },
  openGraph: {
    title: "Commercial Truck Fleet in Delhi, Gurugram & Haryana | Neelkanth Transport",
    description:
      "Modern commercial fleet: Open-body trucks, closed-body, 32ft containers & multi-axle trailers for industrial freight across Delhi NCR, Gurugram, and pan-India.",
    url: "https://www.neelkanthtransport.com/fleet",
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
