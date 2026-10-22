import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeUp, stagger } from "./motion";

export default function PageHero({ title, intro, image, position = "center 15%", crumbs = [] }) {
  // Ensure vertical object-position preserves the top of trucks/warehouse signs without cutting off roofs/containers
  const resolvedPosition = (() => {
    if (!position || position === "center") return "center 15%";
    return position
      .replace("40%", "15%")
      .replace(/center$/, "15%")
      .replace(/50%$/, "15%");
  })();

  return (
    <section
      className="relative flex items-center overflow-hidden bg-navy min-h-[460px] md:min-h-[560px] lg:min-h-[640px]"
      style={{ minHeight: "min(680px, 72svh)" }}
    >
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: resolvedPosition }}
        width={1600}
        height={900}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,27,54,0.96) 0%, rgba(8,27,54,0.85) 40%, rgba(8,27,54,0.38) 75%, rgba(8,27,54,0.15) 100%)",
        }}
      />
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,27,54,0.92) 0%, rgba(8,27,54,0.78) 55%, rgba(8,27,54,0.4) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-44"
        style={{
          background: "linear-gradient(180deg, rgba(8,27,54,0.6) 0%, transparent 100%)",
        }}
      />
      <div className="container-x relative py-20 md:py-28 lg:py-32">
        <motion.div variants={stagger(0.08)} initial="hidden" animate="show">
          <motion.nav variants={fadeUp} aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-1.5 text-xs font-semibold text-white/70">
            <Link to="/" className="transition hover:text-white">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={12} />
                {c.to ? <Link to={c.to} className="transition hover:text-white">{c.label}</Link> : <span className="text-gold font-bold">{c.label}</span>}
              </span>
            ))}
          </motion.nav>
          <motion.h1 variants={fadeUp} className="h-page max-w-3xl text-white font-heading font-extrabold tracking-tight">
            {title}
          </motion.h1>
          {intro && (
            <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg lg:text-xl">
              {intro}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
