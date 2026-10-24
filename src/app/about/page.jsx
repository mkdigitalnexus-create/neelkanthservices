import AboutContent from "./AboutContent";
import { siteConfig } from "../../data/siteConfig";

export const metadata = {
  title: "About Us — Best Transport Company in Delhi NCR, Haryana & Punjab",
  description:
    "Neelkanth Transport Services, headquartered in Dhankot, Gurugram, is the leading commercial transport provider across Delhi NCR, Haryana, Punjab (Ludhiana, Chandigarh), and Pan-India. Call +91 76781 76144.",
  keywords: [
    "about neelkanth transport",
    "transport company in gurugram",
    "best transport company haryana",
    "goods transport services punjab",
    "commercial truck transport delhi ncr",
    "dhankot transport office",
    "transport services delhi",
    "ludhiana truck logistics",
  ],
  alternates: {
    canonical: `${siteConfig.siteUrl}/about`,
  },
  openGraph: {
    title: "About Us — Best Transport Company in Delhi NCR, Haryana & Punjab",
    description:
      "Learn about Neelkanth Transport Services, headquartered in Dhankot, Gurugram. Dependable commercial logistics, container trailers, and FTL road transport across Delhi NCR, Haryana, and Punjab.",
    url: `${siteConfig.siteUrl}/about`,
    images: ["/assets/services/about.jpg"],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
