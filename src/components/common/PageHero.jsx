import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeUp, stagger } from "./motion";

export default function PageHero({ title, intro, image, position = "center", crumbs = [] }) {
  return (
    <section className="relative flex min-h-[240px] items-end overflow-hidden bg-navy md:min-h-[340px]">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: position }}
        width={1600}
        height={900}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(90deg, rgba(8,27,54,0.94) 0%, rgba(8,27,54,0.82) 45%, rgba(8,27,54,0.45) 100%)" }}
      />
      <div className="container-x relative pb-10 pt-24 md:pb-14 md:pt-28">
        <motion.div variants={stagger(0.08)} initial="hidden" animate="show">
          <motion.nav variants={fadeUp} aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-1.5 text-xs font-medium text-white/60">
            <Link to="/" className="transition hover:text-white">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={12} />
                {c.to ? <Link to={c.to} className="transition hover:text-white">{c.label}</Link> : <span className="text-gold">{c.label}</span>}
              </span>
            ))}
          </motion.nav>
          <motion.h1 variants={fadeUp} className="h-page max-w-3xl text-white">{title}</motion.h1>
          {intro && <motion.p variants={fadeUp} className="mt-4 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">{intro}</motion.p>}
        </motion.div>
      </div>
    </section>
  );
}
