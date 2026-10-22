import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import BackToTop from "../components/common/BackToTop";
import { siteConfig } from "../data/siteConfig";

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Neelkanth Transport Services | Best Transport in Delhi, Gurugram & Haryana",
    template: "%s | Neelkanth Transport Services",
  },
  description:
    "Top-rated commercial logistics and road freight transport company headquartered in Dhankot, Gurugram (Delhi NCR). Fast, dependable Full Truckload (FTL), Container, and Trailer services connecting Delhi, New Delhi, Ghaziabad, Haryana, and Pan-India.",
  keywords: [
    "transport services in gurugram",
    "transport company in delhi",
    "best transport company in haryana",
    "best transport services delhi ncr",
    "truck transport service ghaziabad",
    "commercial transport services new delhi",
    "full truckload transport gurugram",
    "container transport delhi haryana",
    "trailer transport services dhankot",
    "neelkanth transport services",
    "freight logistics company gurugram",
    "all india permit truck transport"
  ],
  authors: [{ name: "Neelkanth Transport Services" }],
  creator: "Neelkanth Transport Services",
  publisher: "Neelkanth Transport Services",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  icons: {
    icon: "/assets/brand/favicon.svg",
    apple: "/assets/brand/logo.jpeg",
  },
  openGraph: {
    title: "Neelkanth Transport Services | Best Transport Company in Delhi, Gurugram & Haryana",
    description:
      "Top-rated commercial road freight partner headquartered in Dhankot, Gurugram. Fast, safe FTL, container, and trailer transport across Delhi NCR, Ghaziabad & Pan-India.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: "/assets/hero/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Neelkanth Transport Services Commercial Fleet",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neelkanth Transport Services | Best Transport in Delhi NCR & Haryana",
    description: "Daily commercial freight dispatch from Dhankot, Gurugram to Delhi, New Delhi, Ghaziabad, Haryana & Pan India.",
    images: ["/assets/hero/hero-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};

export default function RootLayout({ children }) {
  const c = siteConfig.contact;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "LogisticsService"],
        "@id": `${siteConfig.siteUrl}/#business`,
        name: siteConfig.name,
        alternateName: [siteConfig.shortName, "Neelkanth Logistics", "Neelkanth Transport Gurugram"],
        url: siteConfig.siteUrl,
        logo: `${siteConfig.siteUrl}/assets/brand/logo.jpeg`,
        image: `${siteConfig.siteUrl}/assets/hero/hero-1.jpg`,
        description: siteConfig.description,
        telephone: c.phone,
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Secondary Phone",
            value: c.phoneSecondary,
          },
          {
            "@type": "PropertyValue",
            name: "WhatsApp Support",
            value: `+${c.whatsapp}`,
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "4th Floor, Ground Floor, Chowk, opposite Zepto, Dhankot",
          addressLocality: "Gurugram",
          addressRegion: "Haryana",
          postalCode: "122505",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: c.geo.latitude,
          longitude: c.geo.longitude,
        },
        hasMap: c.mapEmbed,
        priceRange: "₹₹",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Gurugram" },
          { "@type": "City", name: "Delhi" },
          { "@type": "City", name: "New Delhi" },
          { "@type": "City", name: "Ghaziabad" },
          { "@type": "State", name: "Haryana" },
          { "@type": "Country", name: "India" },
        ],
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full Truck Load (FTL) Transportation",
              description: "Dedicated point-to-point commercial truck transport across Delhi NCR and India.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Container & Trailer Transportation",
              description: "Safe, weather-protected container and heavy trailer movement for industrial goods.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Open-Body Commercial Truck Freight",
              description: "Heavy structural steel, pipes, and construction materials freight.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content="Gurugram, Dhankot, Haryana, Delhi NCR" />
        <meta name="geo.position" content={`${c.geo.latitude};${c.geo.longitude}`} />
        <meta name="ICBM" content={`${c.geo.latitude}, ${c.geo.longitude}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
