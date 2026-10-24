import IndustriesContent from "./IndustriesContent";
import { siteConfig } from "../../data/siteConfig";

export const metadata = {
  title: "Industries Served in Delhi NCR, Haryana & Punjab | Manufacturing, Auto, Textile & FMCG Transport",
  description:
    "Tailored logistics and freight services for Manufacturing, Automotive hubs, Textiles, FMCG, and Heavy Engineering across Delhi NCR, Haryana (Manesar, Panipat), and Punjab (Ludhiana). Call +91 76781 76144.",
  keywords: [
    "industrial transport Delhi NCR",
    "manufacturing logistics Gurugram",
    "automobile parts transport Manesar",
    "textile truck transport Ludhiana Panipat",
    "FMCG road freight Haryana",
    "construction material transport Delhi",
    "Neelkanth Transport industries",
  ],
  alternates: {
    canonical: `${siteConfig.siteUrl}/industries`,
  },
  openGraph: {
    title: "Industries Served in Delhi NCR, Haryana & Punjab | Neelkanth Transport",
    description:
      "Reliable freight solutions for automotive, industrial machinery, manufacturing, textiles, and retail goods across Delhi NCR, Haryana, Punjab and pan-India.",
    url: `${siteConfig.siteUrl}/industries`,
    images: [
      {
        url: "/assets/industries/manufacturing.jpg",
        width: 1200,
        height: 630,
        alt: "Industries Served by Neelkanth Transport Services",
      },
    ],
  },
};

export default function IndustriesPage() {
  return <IndustriesContent />;
}
