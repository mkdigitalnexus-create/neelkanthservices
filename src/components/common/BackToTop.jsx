import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          key="back-to-top"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })}
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Back to top"
          className="fixed bottom-5 left-5 z-40 grid h-11 w-11 place-items-center rounded-[3px] border border-ink bg-paper text-ink shadow-[0_10px_30px_-14px_rgba(14,36,57,0.55)] transition-colors hover:bg-ink hover:text-paper"
        >
          <ArrowUp className="h-[18px] w-[18px]" aria-hidden="true" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
