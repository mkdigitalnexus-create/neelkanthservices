import ContactContent from "./ContactContent";

export const metadata = {
  title: "Contact Head Office — Gurugram, Delhi, New Delhi & Haryana",
  description:
    "Contact Neelkanth Transport Services head office in Dhankot, Gurugram. Call +91 76781 76144 or +91 98124 58224 for commercial road freight booking across Delhi, Gurugram, Ghaziabad & Haryana.",
  keywords: [
    "contact neelkanth transport",
    "transport company gurugram contact number",
    "dhankot transport office phone",
    "transport number delhi",
    "freight transport haryana contact",
    "truck booking office opposite zepto dhankot",
    "delhi transport contact",
  ],
  alternates: {
    canonical: "https://www.neelkanthtransport.com/contact",
  },
  openGraph: {
    title: "Contact Neelkanth Transport Services | Head Office Dhankot Gurugram",
    description:
      "Get in touch with Neelkanth Transport Services for 24/7 freight booking, vehicle placement, and commercial transport queries across Delhi NCR and Haryana.",
    url: "https://www.neelkanthtransport.com/contact",
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
