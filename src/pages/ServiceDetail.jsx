import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { ArrowRight, Check, Truck } from "lucide-react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import Accordion from "../components/common/Accordion";
import CtaBand from "../components/common/CtaBand";
import { getService, publishedServices } from "../data/services";
import { getVehicle } from "../data/fleet";
import { faqs } from "../data/faqs";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) return <NotFound />;

  const related = service.related.map((r) => publishedServices.find((s) => s.slug === r)).filter(Boolean);
  const vehicles = service.vehicles.map(getVehicle).filter(Boolean);
  const faqList = service.faqs.length ? [...service.faqs, ...faqs.slice(1, 3)] : faqs.slice(0, 4);

  return (
    <>
      <Seo title={service.title} description={service.short} image={service.image} />
      <PageHero title={service.title} intro={service.short} image={service.image} position={service.position} crumbs={[{ label: "Services", to: "/services" }, { label: service.title }]} />

      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-20">
          <div>
            <div className="mb-4 flex items-center gap-3"><span className="gold-line" /><span className="eyebrow text-blue">{service.category}</span></div>
            <h2 className="h-section text-navy">About This Service</h2>
            <p className="lead mt-6">{service.intro}</p>

            <h3 className="mt-12 font-heading text-xl font-bold text-navy">Typical cargo applications</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.applications.map((a) => (
                <li key={a} className="flex items-start gap-3 rounded-md border border-line bg-surface px-4 py-3 text-[0.95rem] font-medium text-ink">
                  <Check size={16} strokeWidth={3} className="mt-1 shrink-0 text-gold" />{a}
                </li>
              ))}
            </ul>

            <h3 className="mt-12 font-heading text-xl font-bold text-navy">Relevant vehicle types</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {vehicles.map((v) => (
                <Link key={v.id} to="/fleet" className="group flex gap-4 rounded-md border border-line p-3 transition hover:border-blue/40">
                  <div className="img-hover h-20 w-28 shrink-0 overflow-hidden rounded">
                    <img src={v.image} alt="" loading="lazy" width={224} height={160} className="h-full w-full object-cover" style={{ objectPosition: v.position }} />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-navy">{v.name}</p>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">{v.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            <h3 className="mt-12 font-heading text-xl font-bold text-navy">Frequently asked</h3>
            <div className="mt-5"><Accordion items={faqList} idPrefix={`svc-${service.slug}`} /></div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-md bg-navy p-7 text-white">
              <Truck size={28} strokeWidth={1.5} className="text-gold" />
              <h3 className="mt-4 font-heading text-xl font-bold">Need this service?</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">Share your route and cargo details and we will discuss the right vehicle for the consignment.</p>
              <Link to="/get-a-quote" state={{ prefill: { cargoType: "", vehicle: "" } }} className="btn btn-gold mt-6 w-full">Request a Quote <ArrowRight size={16} /></Link>
            </div>
            <div className="rounded-md border border-line p-7">
              <h3 className="eyebrow text-muted">Related services</h3>
              <ul className="mt-4 divide-y divide-line">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link to={`/services/${r.slug}`} className="group flex items-center justify-between py-3 font-heading text-[0.95rem] font-bold text-navy transition hover:text-blue">
                      {r.title.replace(" Transportation", "")}
                      <ArrowRight size={16} className="text-gold transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/services" className="link-arrow mt-5 text-sm">All services <ArrowRight size={16} /></Link>
            </div>
          </aside>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
