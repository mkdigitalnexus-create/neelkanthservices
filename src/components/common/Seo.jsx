import { Helmet } from "react-helmet-async";
import { siteConfig } from "../../config/siteConfig";

/**
 * Route-level metadata. Titles, descriptions, canonicals, Open Graph and Twitter
 * cards change per route.
 *
 * Note: this is a client-side SPA. Meta tags set here are correct in the rendered
 * document but static prerendering would still be advisable before production —
 * the routing and data layer are structured so prerendering can be added without
 * changing framework.
 */
export default function Seo({
  title,
  description,
  path = "/",
  image = "assets/hero/hero-household.jpg",
  noindex = false,
  jsonLd,
  breadcrumbs,
}) {
  const canonical = `${siteConfig.canonicalUrl}${path === "/" ? "/" : path}`;
  const fullTitle = title
    ? `${title}`
    : `${siteConfig.businessName} — Packers & Movers, Household Shifting & Transport`;

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.businessName,
    url: siteConfig.canonicalUrl,
    logo: `${siteConfig.canonicalUrl}/${siteConfig.logo.icon}`,
    description: siteConfig.positioning,
    areaServed: siteConfig.serviceAreaSummary,
  };

  const breadcrumbJsonLd = breadcrumbs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.label,
          item: `${siteConfig.canonicalUrl}${b.to || ""}`,
        })),
      }
    : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.businessName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${siteConfig.canonicalUrl}/${image}`} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteConfig.canonicalUrl}/${image}`} />

      <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      {breadcrumbJsonLd ? (
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      ) : null}
      {jsonLd ? <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> : null}
    </Helmet>
  );
}
