import FaqContent from "./FaqContent";
import { faqs } from "../../data/faqs";
import { siteConfig } from "../../data/siteConfig";

export const metadata = {
  title: "Frequently Asked Questions — Transport in Delhi NCR, Haryana & Punjab",
  description:
    "Find answers to frequently asked questions about commercial road logistics, FTL booking, 32ft container transport, and routes across Delhi NCR, Haryana, and Punjab. Call +91 76781 76144.",
  keywords: [
    "transport questions Delhi",
    "delhi to punjab truck FAQ",
    "truck hire FAQ Gurugram",
    "commercial transport queries Haryana",
    "ludhiana transport booking question",
    "Neelkanth Transport FAQ",
  ],
  alternates: {
    canonical: `${siteConfig.siteUrl}/faq`,
  },
  openGraph: {
    title: "Transport FAQ & Guidance | Neelkanth Transport Services",
    description:
      "Clear guidance on commercial freight booking, vehicle types, routes, and billing for businesses across Delhi NCR, Haryana, and Punjab.",
    url: `${siteConfig.siteUrl}/faq`,
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
