import ContactContent from "./ContactContent";
import { siteConfig } from "../../data/siteConfig";

export const metadata = {
  title: "Contact Head Office — Gurugram, Delhi NCR, Haryana & Punjab",
  description:
    "Contact Neelkanth Transport Services head office in Dhankot, Gurugram. Call +91 76781 76144 or +91 98124 58224 for commercial road freight booking across Delhi NCR, Haryana, and Punjab.",
  keywords: [
    "contact neelkanth transport",
    "transport company gurugram contact number",
    "dhankot transport office phone",
    "transport number delhi",
    "freight transport haryana contact",
    "punjab transport booking number",
    "truck booking office opposite zepto dhankot",
    "delhi transport contact",
  ],
  alternates: {
    canonical: `${siteConfig.siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Neelkanth Transport Services | Head Office Dhankot Gurugram",
    description:
      "Get in touch with Neelkanth Transport Services for 24/7 freight booking, vehicle placement, and commercial transport queries across Delhi NCR, Haryana, and Punjab.",
    url: `${siteConfig.siteUrl}/contact`,
    images: [
      {
        url: "/assets/services/about.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Neelkanth Transport Services",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
