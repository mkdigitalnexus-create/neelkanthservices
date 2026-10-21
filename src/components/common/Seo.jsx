import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { siteConfig } from "../../data/siteConfig";

export default function Seo({ title, description, image }) {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — Moving Cargo. Connecting Businesses.`;
  const desc = description || siteConfig.description;
  const url = `${siteConfig.siteUrl}${pathname}`;
  const img = `${siteConfig.siteUrl}${image || siteConfig.ogImage}`;

  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}${siteConfig.logo}`,
    ...(siteConfig.contact.phone ? { telephone: siteConfig.contact.phone } : {}),
    ...(siteConfig.contact.email ? { email: siteConfig.contact.email } : {}),
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(org)}</script>
    </Helmet>
  );
}
