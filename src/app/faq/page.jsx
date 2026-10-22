import FaqContent from "./FaqContent";
import { faqs } from "../../data/faqs";

export const metadata = {
  title: "Frequently Asked Questions — Road Freight & Booking",
  description:
    "Find answers to frequently asked questions about road logistics, FTL booking, container transport, rates, and route coverage across Gurugram, Delhi, Ghaziabad and Haryana.",
  keywords: [
    "transport questions Delhi",
    "truck hire FAQ Gurugram",
    "commercial transport queries Haryana",
    "Neelkanth Transport FAQ",
  ],
  alternates: {
    canonical: "https://www.neelkanthtransport.com/faq",
  },
  openGraph: {
    title: "Transport FAQ & Guidance | Neelkanth Transport Services",
    description:
      "Clear guidance on commercial freight booking, vehicle types, routes, and billing for businesses across Delhi NCR and Haryana.",
    url: "https://www.neelkanthtransport.com/faq",
    images: [
      {
        url: "/assets/services/open-body.jpg",
        width: 1200,
        height: 630,
        alt: "Neelkanth Transport Services FAQ",
      },
    ],
  },
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqContent />
    </>
  );
}
