import RoutesContent from "./RoutesContent";
import { siteConfig } from "../../data/siteConfig";

export const metadata = {
  title: "Direct Freight Corridors — Delhi NCR, Haryana & Punjab | Neelkanth Transport",
  description:
    "Daily highway freight corridors connecting Delhi NCR, Gurugram (Dhankot HQ), and Haryana with Punjab (Ludhiana, Chandigarh, Jalandhar), Gujarat, Maharashtra & Pan-India. Call +91 76781 76144.",
  keywords: [
    "transport routes delhi",
    "delhi to punjab transport routes",
    "delhi to haryana freight corridors",
    "truck transport delhi to ludhiana",
    "gurugram transport corridors",
    "freight service ghaziabad",
    "haryana truck routes",
    "panipat sonipat truck route",
    "chandigarh goods transport route",
    "Neelkanth Transport routes",
  ],
  alternates: {
    canonical: `${siteConfig.siteUrl}/routes`,
  },
  openGraph: {
    title: "Direct Freight Corridors — Delhi NCR, Haryana & Punjab | Neelkanth Transport",
    description:
      "Daily highway freight corridors connecting Delhi NCR, Gurugram, and Haryana with Punjab (Ludhiana, Chandigarh, Jalandhar) and Pan-India.",
    url: `${siteConfig.siteUrl}/routes`,
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
