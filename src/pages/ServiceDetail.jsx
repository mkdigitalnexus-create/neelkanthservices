import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import Breadcrumbs from "../components/common/Breadcrumbs";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/common/Reveal";
import QuoteCTA from "../components/common/QuoteCTA";
import Accordion from "../components/common/Accordion";
import ServiceCard from "../components/common/ServiceCard";
import { getServiceBySlug } from "../data/services";
import { getFaqsByIds } from "../data/faqs";
import NotFound from "./NotFound";

/** Shared template for every /services/:slug page. */
export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <NotFound />;
  }

  const related = service.related.map(getServiceBySlug).filter(Boolean);
  const serviceFaqs = getFaqsByIds(service.faqIds);

  const jsonLd =
    serviceFaqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: serviceFaqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  return (
    <>
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        image={service.image}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.name },
        ]}
        jsonLd={jsonLd}
      />

      <PageHero
        index={service.index}
        label={service.eyebrow}
        title={service.heroTitle}
        intro={service.short}
        image={service.image}
        imageAlt={service.imageAlt}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.name },
        ]}
      >
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to="/get-a-quote"
            className="inline-flex h-12 items-center gap-2 rounded-[3px] border border-amber bg-amber px-6 text-[0.955rem] font-semibold text-[#20160A] shadow-[0_2px_0_0_#B96F12] transition-colors hover:bg-[#f0a03c]"
          >
            Get a Free Quote
            <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
          </Link>
          <Link
            to="/services"
            className="inline-flex h-12 items-center rounded-[3px] border border-paper/38 px-6 text-[0.955rem] font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            All services
          </Link>
        </div>
      </PageHero>

      {/* Overview — editorial measure with margin annotations */}
      <section className="doc-container mt-16 md:mt-24" aria-labelledby="overview-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_19rem] lg:gap-16">
          <div>
            <SectionHeading
              id="overview-heading"
              index="01"
              label="Overview"
              title={`What ${service.name.toLowerCase()} involves`}
            />
            <Reveal delay={0.05}>
              <p className="mt-6 text-[1.03rem] leading-[1.84] text-muted">{service.overview}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 overflow-hidden rounded-[4px] border border-rule">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  decoding="async"
                  width="1536"
                  height="1024"
                  className="h-[20rem] w-full object-cover md:h-[25rem]"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <aside className="lg:sticky lg:top-32">
              <div className="rounded-[4px] border border-rule bg-kraft/55 p-6">
                <h2 className="label-micro text-amber-dark">At a glance</h2>
                <dl className="mt-5 space-y-4">
                  <div className="rule-t pt-3">
                    <dt className="label-micro text-[0.6rem] text-muted">Service</dt>
                    <dd className="mt-1.5 text-[0.945rem] font-semibold text-ink">{service.name}</dd>
                  </div>
                  <div className="rule-t pt-3">
                    <dt className="label-micro text-[0.6rem] text-muted">Category</dt>
                    <dd className="mt-1.5 text-[0.945rem] text-ink">{service.eyebrow}</dd>
                  </div>
                  <div className="rule-t pt-3">
                    <dt className="label-micro text-[0.6rem] text-muted">Service reference</dt>
                    <dd className="tabular mt-1.5 text-[0.945rem] text-ink">
                      SVC-{service.index} / {service.slug.toUpperCase()}
                    </dd>
                  </div>
                  <div className="rule-t pt-3">
                    <dt className="label-micro text-[0.6rem] text-muted">Coverage Network</dt>
                    <dd className="mt-1.5 text-[0.945rem] text-ink">
                      Punjab • Haryana • Chandigarh Tricity • Delhi NCR (All-India connecting routes)
                    </dd>
                  </div>
                </dl>
                <Link
                  to="/get-a-quote"
                  className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-[3px] border border-ink bg-ink text-[0.9rem] font-semibold text-paper transition-colors hover:bg-ink-soft"
                >
                  Enquire about this service
                  <ArrowRight className="h-[17px] w-[17px]" aria-hidden="true" />
                </Link>
                <div className="mt-5 border-t border-rule pt-4">
                  <Breadcrumbs
                    items={[
                      { label: "Home", to: "/" },
                      { label: "Services", to: "/services" },
                      { label: service.name },
                    ]}
                  />
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="doc-container mt-20 md:mt-28" aria-labelledby="benefits-heading">
        <SectionHeading
          id="benefits-heading"
          index="02"
          label="Scope"
          title={service.benefitsTitle}
        />
        <div className="mt-10 grid gap-x-12 gap-y-px md:grid-cols-2">
          {service.benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 2) * 0.08} y={16}>
              <div className="flex h-full gap-4 border-t border-ink/12 py-7">
                <span className="mt-[3px] grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal/12">
                  <Check className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-[1.045rem] font-bold leading-snug text-ink">{b.title}</h3>
                  <p className="mt-2.5 max-w-[52ch] text-[0.935rem] leading-[1.74] text-muted">{b.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Typical process */}
      <section className="relative mt-20 overflow-hidden bg-ink py-16 md:mt-28 md:py-24">
        <div className="paper-grain absolute inset-0 opacity-[0.16]" aria-hidden="true" />
        <div className="doc-container relative">
          <SectionHeading
            tone="dark"
            index="03"
            label="Typical process"
            title={`How ${service.name.toLowerCase()} usually runs`}
            intro="A representative sequence. The exact steps for your requirement are agreed during the scope discussion."
          />
          <ol className="mt-11 grid gap-7 md:grid-cols-4">
            {service.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.09} y={18} as="li">
                <div className="h-full border-t-2 border-amber pt-5">
                  <span className="tabular font-display text-[1.65rem] font-extrabold leading-none text-amber">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-[1.055rem] font-bold leading-snug text-paper">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[0.905rem] leading-[1.72] text-onink/78">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="doc-container mt-20 md:mt-28" aria-labelledby="service-faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          <SectionHeading
            id="service-faq-heading"
            index="04"
            label="Questions"
            title={`${service.name} — frequently asked questions`}
            intro="Answers to the questions that come up most often for this service."
          />
          <Reveal delay={0.05}>
            <Accordion items={serviceFaqs} defaultOpenId={serviceFaqs[0]?.id} />
            <Link
              to="/faq"
              className="mt-6 inline-flex items-center gap-2 text-[0.885rem] font-semibold text-brand transition-colors hover:text-amber-dark"
            >
              Browse the full FAQ library
              <ChevronRight className="h-[17px] w-[17px]" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Related services */}
      <section className="doc-container mt-20 md:mt-28" aria-labelledby="related-heading">
        <SectionHeading
          id="related-heading"
          index="05"
          label="Related services"
          title="Often requested alongside this service"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.07} y={20}>
              <ServiceCard service={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <div className="doc-container mt-20 md:mt-28">
        <QuoteCTA
          eyebrow={service.name}
          title={`Ready to discuss your ${service.name.toLowerCase()} requirement?`}
          text="Share the route, the date and what needs to move. The scope for this service will be discussed with you before anything is scheduled."
        />
      </div>
    </>
  );
}
