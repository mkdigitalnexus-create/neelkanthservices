import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Building2,
  Car,
  Home,
  MapPin,
  Package,
  Route,
  Truck,
  Warehouse,
} from "lucide-react";

const ICONS = {
  home: Home,
  building: Building2,
  package: Package,
  truck: Truck,
  car: Car,
  "map-pin": MapPin,
  route: Route,
  warehouse: Warehouse,
};

/**
 * Service card — a ruled document box rather than a floating rounded card:
 * image plate on top, hairline rule, tracked index label, title, copy, action.
 */
export default function ServiceCard({ service, delay = 0, tone = "light", size = "md" }) {
  const Icon = ICONS[service.icon] || Truck;
  const isDark = tone === "dark";

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[3px] border transition-[border-color,transform,box-shadow] duration-300 ease-out hover:-translate-y-[3px] ${
        isDark
          ? "border-paper/15 bg-paper/[0.035] hover:border-paper/35"
          : "border-rule bg-white hover:border-ink/25 hover:shadow-[0_14px_38px_-22px_rgba(14,36,57,0.42)]"
      }`}
    >
      <Link
        to={`/services/${service.slug}`}
        className="flex h-full flex-col focus-visible:outline-offset-4"
        aria-label={`Read more about ${service.name}`}
      >
        <div className={`relative w-full overflow-hidden ${size === "lg" ? "aspect-[16/10]" : "aspect-[16/9]"}`}>
          <img
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            decoding="async"
            width="1536"
            height="1024"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.055]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/72 via-ink/12 to-transparent"
            aria-hidden="true"
          />
          <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-[2px] bg-paper/95 px-2.5 py-1.5">
            <Icon className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            <span className="label-micro text-[0.6rem] text-ink">{service.eyebrow}</span>
          </span>
          <span
            className="absolute bottom-3 right-3 tabular font-display text-[2.25rem] font-extrabold leading-none text-paper/25"
            aria-hidden="true"
          >
            {service.index}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <h3
            className={`font-display font-bold text-[1.16rem] leading-[1.28] ${
              isDark ? "text-paper" : "text-ink"
            }`}
          >
            {service.name}
          </h3>
          <div className="my-3 h-px w-full bg-amber/60" aria-hidden="true" />
          <p className={`flex-1 text-[0.925rem] leading-[1.72] ${isDark ? "text-onink/75" : "text-muted"}`}>
            {service.short}
          </p>
          <span
            className={`mt-5 inline-flex items-center gap-2 label-micro text-[0.655rem] ${
              isDark ? "text-amber" : "text-brand"
            }`}
          >
            Service details
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}
