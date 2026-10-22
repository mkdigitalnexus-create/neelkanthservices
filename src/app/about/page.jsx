import AboutContent from "./AboutContent";

export const metadata = {
  title: "About Us — Best Transport Company in Gurugram, Delhi & Haryana",
  description:
    "Neelkanth Transport Services, based in Dhankot, Gurugram (opposite Zepto), is the leading commercial transport provider across Delhi, New Delhi, Ghaziabad, Haryana, and Pan India.",
  keywords: [
    "about neelkanth transport",
    "transport company in gurugram",
    "best logistics company haryana",
    "commercial truck transport delhi ncr",
    "dhankot transport office",
    "transport services delhi",
    "logistics firm ghaziabad"
  ],
  alternates: {
    canonical: "https://www.neelkanthtransport.com/about",
  },
  openGraph: {
    title: "About Us — Best Transport Company in Gurugram, Delhi & Haryana",
    description:
      "Learn about Neelkanth Transport Services, headquartered in Dhankot, Gurugram. Dependable commercial logistics, container trailers, and FTL road transport across Delhi NCR and India.",
    url: "https://www.neelkanthtransport.com/about",
    images: ["/assets/services/about.jpg"],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
