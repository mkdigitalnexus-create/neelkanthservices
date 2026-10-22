"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "./motion";

export default function ServiceCard({ service, size = "md", index }) {
  const large = size === "lg";
  return (
    <motion.article variants={fadeUp} className={`group relative overflow-hidden rounded-md bg-navy ${large ? "min-h-[380px] lg:min-h-full" : "min-h-[260px]"}`}>
      <Link href={`/services/${service.slug}`} className="img-hover absolute inset-0 block focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          width={1200}
          height={800}
          className="h-full w-full object-cover"
          style={{ objectPosition: service.position }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-navy/10" />
        <div className={`absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 ${large ? "p-7 md:p-9" : "p-6"}`}>
          <div>
            {typeof index === "number" && <span className="mb-2 block text-xs font-bold tabular-nums text-gold">{String(index + 1).padStart(2, "0")}</span>}
            <h3 className={`font-heading font-bold text-white ${large ? "text-2xl md:text-[1.75rem]" : "text-[1.15rem] md:text-xl"}`}>{service.title}</h3>
            <p className={`mt-2 max-w-md text-sm leading-relaxed text-white/75 ${large ? "" : "hidden sm:block"}`}>{service.short}</p>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/30 text-white transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-navy">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
