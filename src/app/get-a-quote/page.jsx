import GetAQuoteContent from "./GetAQuoteContent";

export const metadata = {
  title: "Get Transport Quote Online | Fast Rates for Delhi NCR, Gurugram & Haryana",
  description:
    "Request an instant transport rate quote from Neelkanth Transport Services. FTL, container, and commercial road freight pricing for Delhi, Gurugram, New Delhi, Ghaziabad and Pan-India. Call +91 76781 76144.",
  keywords: [
    "transport quote Delhi NCR",
    "truck hire rate Gurugram",
    "commercial freight quote Haryana",
    "FTL pricing Ghaziabad",
    "road freight rates India",
    "Neelkanth Transport get a quote",
  ],
  alternates: {
    canonical: "https://www.neelkanthtransport.com/get-a-quote",
  },
  openGraph: {
    title: "Request a Transport Quote | Neelkanth Transport Services",
    description:
      "Get accurate freight quotes and vehicle options for your cargo movements across Delhi NCR, Haryana, and all-India corridors.",
    url: "https://www.neelkanthtransport.com/get-a-quote",
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
