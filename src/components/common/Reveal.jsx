import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-triggered entrance. Uses transform + opacity only.
 * Honours prefers-reduced-motion by rendering the final state immediately.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 18,
  duration = 0.55,
  className = "",
  amount = 0.15,
  as = "div",
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
