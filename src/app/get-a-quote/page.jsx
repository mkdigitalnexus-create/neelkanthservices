import GetAQuoteContent from "./GetAQuoteContent";
import { siteConfig } from "../../data/siteConfig";

export const metadata = {
  title: "Get Transport Quote Online | Fast Freight Rates for Delhi NCR, Haryana & Punjab",
  description:
    "Request an instant commercial transport rate quote from Neelkanth Transport Services. FTL, container, and trailer freight pricing for Delhi NCR, Haryana, Punjab & Pan-India. Call +91 76781 76144.",
  keywords: [
    "transport quote Delhi NCR",
    "truck hire rate Gurugram",
    "commercial freight quote Haryana",
    "delhi to punjab transport quote",
    "FTL pricing Ludhiana",
    "road freight rates India",
    "Neelkanth Transport get a quote",
  ],
  alternates: {
    canonical: `${siteConfig.siteUrl}/get-a-quote`,
  },
  openGraph: {
    title: "Request a Transport Quote | Neelkanth Transport Services",
    description:
      "Get accurate freight quotes and vehicle options for your cargo movements across Delhi NCR, Haryana, Punjab, and all-India corridors.",
    url: `${siteConfig.siteUrl}/get-a-quote`,
    images: [
      {
        url: "/assets/hero/cta.jpg",
        width: 1200,
        height: 630,
        alt: "Request a Quote - Neelkanth Transport Services",
      },
    ],
  },
};

export default function GetAQuotePage() {
  return <GetAQuoteContent />;
}
