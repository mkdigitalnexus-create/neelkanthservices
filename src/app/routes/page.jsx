import RoutesContent from "./RoutesContent";

export const metadata = {
  title: "Direct Freight Corridors from Gurugram, Delhi, New Delhi & Haryana",
  description:
    "Daily freight corridors connecting Gurugram (Dhankot HQ), Delhi, New Delhi, Ghaziabad, and Haryana with Mumbai, Gujarat, Rajasthan, Punjab, and Pan India. Call +91 76781 76144.",
  keywords: [
    "transport routes delhi",
    "gurugram transport corridors",
    "freight service ghaziabad",
    "haryana truck routes",
    "delhi mumbai transport corridor",
    "daily dispatch gurugram to ahmedabad",
    "delhi to jaipur truck service",
    "Neelkanth Transport routes",
  ],
  alternates: {
    canonical: "https://www.neelkanthtransport.com/routes",
  },
  openGraph: {
    title: "Direct Freight Corridors & Transport Routes | Neelkanth Transport Services",
    description:
      "Daily highway freight corridors from Dhankot, Gurugram connecting Delhi NCR with key industrial hubs across India.",
    url: "https://www.neelkanthtransport.com/routes",
    images: [
      {
        url: "/assets/hero/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Neelkanth Transport Services Route Network",
      },
    ],
  },
};

export default function RoutesPage() {
  return <RoutesContent />;
}
