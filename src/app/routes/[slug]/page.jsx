import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, MapPin, Navigation, ShieldCheck, Truck, Phone } from "lucide-react";
import PageHero from "../../../components/common/PageHero";
import ContactForm from "../../../components/forms/ContactForm";
import CtaBand from "../../../components/common/CtaBand";
import WhatsAppIcon from "../../../components/common/WhatsAppIcon";
import { siteConfig } from "../../../data/siteConfig";
import { regionalCorridors, getRegionalCorridor } from "../../../data/routes";

export async function generateStaticParams() {
  return regionalCorridors.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const corridor = getRegionalCorridor(slug);

  if (!corridor) {
    return {
      title: "Route Not Found | Neelkanth Transport Services",
    };
  }

  return {
    title: `${corridor.metaTitle} | Neelkanth Transport`,
    description: corridor.metaDescription,
    keywords: corridor.keywords,
    alternates: {
      canonical: `${siteConfig.siteUrl}/routes/${slug}`,
    },
    openGraph: {
      title: `${corridor.metaTitle} | Neelkanth Transport Services`,
      description: corridor.metaDescription,
      url: `${siteConfig.siteUrl}/routes/${slug}`,
      images: [
        {
          url: "/assets/hero/hero-1.jpg",
          width: 1200,
          height: 630,
          alt: corridor.title,
        },
      ],
    },
  };
}

export default async function RouteDetailPage({ params }) {
  const { slug } = await params;
  const corridor = getRegionalCorridor(slug);

  if (!corridor) {
    notFound();
  }

  const c = siteConfig.contact;

  const routeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.siteUrl}/routes/${slug}#service`,
        name: corridor.title,
        description: corridor.summary,
        provider: {
          "@type": "LocalBusiness",
          name: siteConfig.name,
          telephone: c.phone,
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
          { "@type": "State", name: "Delhi" },
          { "@type": "State", name: "Haryana" },
          { "@type": "State", name: "Punjab" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Routes",
            item: `${siteConfig.siteUrl}/routes`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: corridor.title,
            item: `${siteConfig.siteUrl}/routes/${slug}`,
          },
        ],
      },
      ...(corridor.faqs && corridor.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: corridor.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
      />

      <PageHero
        title={corridor.title}
        intro={corridor.summary}
        image="/assets/hero/hero-1.jpg"
        position="70% center"
        crumbs={[
          { label: "Routes", to: "/routes" },
          { label: corridor.title },
        ]}
      />

      {/* Corridor Quick Specifications Strip */}
      <section className="border-b border-line bg-surface py-5">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-blue">
                <Navigation size={20} />
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase text-muted">Distance</span>
                <span className="text-sm font-bold text-navy">{corridor.distance}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/20 text-navy">
                <Clock size={20} />
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase text-muted">Transit Time</span>
                <span className="text-sm font-bold text-navy">{corridor.transitTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                <Truck size={20} />
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase text-muted">Primary Highway</span>
                <span className="text-sm font-bold text-navy truncate block">{corridor.highway}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-blue">
                <MapPin size={20} />
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase text-muted">Dispatch Hub</span>
                <span className="text-sm font-bold text-navy">Dhankot, Gurugram</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Route Breakdown */}
      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[60fr_40fr] lg:gap-16">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="gold-line" />
              <span className="eyebrow text-blue">Corridor Overview</span>
            </div>
            <h2 className="h-section text-navy">{corridor.title}</h2>
            <p className="lead mt-5">{corridor.summary}</p>

            {/* Key Service Benefits */}
            <h3 className="mt-8 font-heading text-xl font-bold text-navy">Route Capabilities & Guarantees</h3>
            <ul className="mt-4 space-y-3">
              {corridor.keyBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[0.95rem] text-ink">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Pickup & Delivery Hubs */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-line bg-surface p-5">
                <h4 className="flex items-center gap-2 font-heading text-base font-bold text-navy">
                  <MapPin size={16} className="text-blue" /> Major Pickup Points
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-ink/80">
                  {corridor.pickupHubs.map((hub) => (
                    <li key={hub} className="flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span>{hub}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-line bg-surface p-5">
                <h4 className="flex items-center gap-2 font-heading text-base font-bold text-navy">
                  <MapPin size={16} className="text-emerald-600" /> Major Delivery Hubs
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-ink/80">
                  {corridor.deliveryHubs.map((hub) => (
                    <li key={hub} className="flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span>{hub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recommended Fleet */}
            <h3 className="mt-10 font-heading text-xl font-bold text-navy">Suitable Fleet Categories for this Route</h3>
            <div className="mt-4 space-y-2.5">
              {corridor.fleetRecommended.map((fleet) => (
                <div key={fleet} className="flex items-center gap-3 rounded-lg border border-line p-3 text-sm font-medium text-navy">
                  <Truck size={18} className="text-gold shrink-0" />
                  <span>{fleet}</span>
                </div>
              ))}
            </div>

            {/* Route Specific FAQs */}
            {corridor.faqs && corridor.faqs.length > 0 && (
              <div className="mt-12">
                <h3 className="font-heading text-xl font-bold text-navy">Frequently Asked Questions — {corridor.title}</h3>
                <div className="mt-4 space-y-4">
                  {corridor.faqs.map((faq) => (
                    <div key={faq.q} className="rounded-xl border border-line bg-surface p-5">
                      <h4 className="font-heading text-base font-bold text-navy">{faq.q}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Instant Booking & Dispatch Contacts */}
          <div>
            <div className="sticky top-28 space-y-6">
              <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-navy">Instant Quote for this Route</h3>
                <p className="mt-1 text-xs text-muted">
                  Share your cargo weight & preferred pickup date. Our dispatch manager will reply within minutes.
                </p>
                <div className="mt-4">
                  <ContactForm
                    title={`Rate Inquiry — ${corridor.title}`}
                    subjects={["Full Truck Load (FTL)", "32ft Container", "Trailer", "Other"]}
                  />
                </div>
              </div>

              {/* Direct Hotline Strip */}
              <div className="rounded-2xl border border-gold/30 bg-navy p-6 text-white shadow-md">
                <span className="text-xs font-bold uppercase tracking-wider text-gold">24/7 Operations Desk</span>
                <h4 className="mt-1 font-heading text-lg font-bold">Need Immediate Truck Placement?</h4>
                <p className="mt-2 text-xs text-white/80 leading-relaxed">
                  Call our central dispatch desk in Dhankot, Gurugram directly for live vehicle availability and instant spot rates.
                </p>
                <div className="mt-4 flex flex-col gap-2.5">
                  <a
                    href={`tel:${c.phone}`}
                    className="btn btn-gold flex items-center justify-center gap-2 text-sm font-bold"
                  >
                    <Phone size={16} /> Call {c.phoneDisplay}
                  </a>
                  <a
                    href={`https://wa.me/${c.whatsapp}?text=Hi%2C%20I%20need%20a%20rate%20quote%20for%20${encodeURIComponent(corridor.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 py-2.5 text-xs font-bold text-emerald-400 transition hover:bg-emerald-500/20"
                  >
                    <WhatsAppIcon size={16} /> WhatsApp Inquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Regional Corridors Navigation */}
      <section className="section bg-surface border-t border-line">
        <div className="container-x">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="eyebrow text-blue">More Routes</span>
              <h3 className="h-section text-navy text-2xl mt-1">Explore Other Delhi, Haryana & Punjab Corridors</h3>
            </div>
            <Link href="/routes" className="link-arrow">
              View Full Route Network <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {regionalCorridors
              .filter((rc) => rc.slug !== slug)
              .slice(0, 3)
              .map((rc) => (
                <Link
                  key={rc.slug}
                  href={`/routes/${rc.slug}`}
                  className="group rounded-xl border border-line bg-white p-5 shadow-sm transition hover:border-gold hover:shadow-md"
                >
                  <span className="text-xs font-bold text-gold uppercase">{rc.distance} • {rc.transitTime}</span>
                  <h4 className="font-heading text-base font-bold text-navy group-hover:text-blue transition-colors mt-2">
                    {rc.title}
                  </h4>
                  <p className="mt-2 line-clamp-2 text-xs text-muted leading-relaxed">
                    {rc.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-blue group-hover:text-gold transition-colors">
                    Check Details & Rates <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
