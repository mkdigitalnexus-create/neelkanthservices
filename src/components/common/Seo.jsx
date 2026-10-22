import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { siteConfig } from "../../data/siteConfig";

export default function Seo({ title, description, image, keywords }) {
  const { pathname } = useLocation();
  const fullTitle = title
    ? `${title} | ${siteConfig.name} — Delhi, Gurugram & Haryana`
    : `${siteConfig.name} — Best Transport Services in Delhi, Gurugram, New Delhi, Ghaziabad & Haryana`;
  const desc =
    description ||
    "Neelkanth Transport Services is the leading road transport company in Gurugram, Delhi, New Delhi, Ghaziabad, and Haryana. Full truck load (FTL), trailer, open body, container trucks & industrial logistics. Call +91 76781 76144.";
  const url = `${siteConfig.siteUrl}${pathname}`;
  const img = `${siteConfig.siteUrl}${image || siteConfig.ogImage}`;
  const kw =
    keywords ||
    "transport services in gurugram, transport services in delhi, transport services in new delhi, transport in ghaziabad, transport company in haryana, best transport company delhi ncr, commercial truck transport gurugram, dhankot transport service, full truckload ftl delhi gurugram, container trailer transport haryana, neelkanth transport services";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "LogisticsService"],
    name: siteConfig.name,
    alternateName: ["Neelkanth Transport", "Neelkhanth Transport Services"],
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}${siteConfig.logo}`,
    image: img,
    description: desc,
    telephone: siteConfig.contact.phone,
    alternatePhone: siteConfig.contact.phoneSecondary,
    email: siteConfig.contact.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122505",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.geo.latitude,
      longitude: siteConfig.contact.geo.longitude,
    },
    hasMap: siteConfig.contact.mapEmbed,
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={kw} />
      <link rel="canonical" href={url} />

      {/* Local SEO Geo Tags for Gurugram, Haryana & Delhi NCR */}
      <meta name="geo.region" content="IN-HR" />
      <meta name="geo.placename" content="Gurugram, Dhankot, Haryana, Delhi NCR" />
      <meta name="geo.position" content={`${siteConfig.contact.geo.latitude};${siteConfig.contact.geo.longitude}`} />
      <meta name="ICBM" content={`${siteConfig.contact.geo.latitude}, ${siteConfig.contact.geo.longitude}`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />

      {/* Rich Snippets Schema */}
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
    </Helmet>
  );
}
