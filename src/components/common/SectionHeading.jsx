"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "./motion";

export default function SectionHeading({ eyebrow, title, copy, light = false, align = "left", className = "" }) {
  const center = align === "center";
  return (
    <motion.div
      variants={stagger(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${className}`}
    >
      {eyebrow && (
        <motion.div variants={fadeUp} className={`mb-4 flex items-center gap-3 ${center ? "justify-center" : ""}`}>
          <span className="gold-line" />
          <span className={`eyebrow ${light ? "text-gold" : "text-blue"}`}>{eyebrow}</span>
        </motion.div>
      )}
      <motion.h2 variants={fadeUp} className={`h-section ${light ? "text-white" : "text-navy"}`}>
        {title}
      </motion.h2>
      {copy && (
        <motion.p variants={fadeUp} className={`lead mt-5 ${light ? "text-white/70" : ""}`}>
          {copy}
        </motion.p>
      )}
    </motion.div>
  );
}
