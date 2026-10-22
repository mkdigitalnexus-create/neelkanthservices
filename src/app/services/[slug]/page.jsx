import { notFound } from "next/navigation";
import { publishedServices, getService } from "../../../data/services";
import ServiceDetailContent from "./ServiceDetailContent";

export async function generateStaticParams() {
  return publishedServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Service Not Found | Neelkanth Transport Services",
    };
  }

  const title = `${service.title} in Delhi, Gurugram & Haryana`;
  const description = `${service.short} Reliable commercial road freight across Delhi NCR, Gurugram, New Delhi, Ghaziabad, Haryana and pan-India. Call +91 76781 76144.`;

  return {
    title,
    description,
    keywords: [
      service.title,
      `${service.title} Delhi`,
      `${service.title} Gurugram`,
      `${service.title} Haryana`,
      `${service.title} Ghaziabad`,
      "Neelkanth Transport Services",
      "transport company near me",
      "goods transport services Delhi NCR",
      "Dhankot Gurugram logistics",
    ],
    alternates: {
      canonical: `https://www.neelkanthtransport.com/services/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.neelkanthtransport.com/services/${slug}`,
      images: [
        {
          url: service.image || "/assets/hero/hero-1.jpg",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.intro || service.short,
    provider: {
      "@type": "LocalBusiness",
      name: "Neelkanth Transport Services",
      telephone: "+91-7678176144",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4th Floor, Ground Floor, Chowk, opposite Zepto, Dhankot",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        postalCode: "122505",
        addressCountry: "IN",
      },
    },
    areaServed: [
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Gurugram" },
      { "@type": "City", name: "New Delhi" },
      { "@type": "City", name: "Ghaziabad" },
      { "@type": "State", name: "Haryana" },
      { "@type": "Country", name: "India" },
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceDetailContent slug={slug} />
    </>
  );
}
