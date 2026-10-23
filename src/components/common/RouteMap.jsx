import Link from "next/link";
import { MapPin, Navigation, ArrowRight } from "lucide-react";

export default function RouteMap({ className = "" }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-navy/15 bg-navy shadow-xl transition-all duration-300 hover:shadow-2xl ${className}`}
    >
      {/* Route Network Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy">
        <img
          src="/assets/routes/india-routes-map.jpg"
          alt="Neelkanth Transport Services — Pan-India Highway Logistics & Freight Route Network"
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Subtle gradient vignette to blend with card */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-navy/85 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-md shadow-md">
            <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse" />
            <span className="flex items-center gap-1 text-gold">
              <MapPin size={12} />
              <span>HQ Hub: Dhankot, Gurugram</span>
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/15 px-2.5 py-1 text-[10px] font-semibold text-white/90 backdrop-blur-md">
            <Navigation size={11} className="text-emerald-400" />
            <span>24/7 National Dispatch</span>
          </div>
        </div>

        {/* Bottom Route Information Strip */}
        <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-white/15 bg-navy/90 p-3 backdrop-blur-md">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-gold">
                All-India Permit Freight Network
              </p>
              <p className="mt-0.5 text-xs font-semibold text-white">
                Delhi NCR &bull; Gurugram &bull; Gujarat &bull; Mumbai &bull; Kolkata &bull; South India
              </p>
            </div>
            <Link
              href="/routes"
              className="hidden sm:inline-flex shrink-0 items-center gap-1 rounded bg-gold px-2.5 py-1 text-[11px] font-bold text-navy hover:bg-gold/90 transition"
            >
              <span>Corridors</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
