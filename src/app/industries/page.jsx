import IndustriesContent from "./IndustriesContent";

export const metadata = {
  title: "Industries Served in Delhi, Gurugram & Haryana | Manufacturing, Auto, FMCG Transport",
  description:
    "Tailored logistics and freight services for Manufacturing, Automotive hubs, FMCG, Construction, and Engineering industries across Gurugram, Delhi NCR, Ghaziabad, and Haryana. Call +91 76781 76144.",
  keywords: [
    "industrial transport Delhi NCR",
    "manufacturing logistics Gurugram",
    "automobile parts transport Manesar",
    "FMCG road freight Haryana",
    "construction material transport Ghaziabad",
    "Neelkanth Transport industries",
  ],
  alternates: {
    canonical: "https://www.neelkanthtransport.com/industries",
  },
  openGraph: {
    title: "Industries Served | Neelkanth Transport Services Delhi NCR",
    description:
      "Reliable freight solutions for automotive, industrial machinery, manufacturing, and retail goods across Delhi NCR, Haryana and pan-India.",
    url: "https://www.neelkanthtransport.com/industries",
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
