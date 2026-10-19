import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";

/**
 * Accessible accordion. Buttons carry aria-expanded / aria-controls, panels are
 * focusable regions, and the whole item is operable with Enter and Space.
 */
export default function Accordion({
  items = [],
  tone = "light",
  defaultOpenId = null,
  singleOpen = true,
  className = "",
  compact = false,
}) {
  const baseId = useId();
  const reduce = useReducedMotion();
  const [openIds, setOpenIds] = useState(defaultOpenId ? [defaultOpenId] : []);

  const toggle = (id) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      if (singleOpen) return isOpen ? [] : [id];
      return isOpen ? prev.filter((x) => x !== id) : [...prev, id];
    });
  };

  const isDark = tone === "dark";

  return (
    <div className={`w-full ${className}`}>
      <ul className="w-full">
        {items.map((item, i) => {
          const open = openIds.includes(item.id);
          const panelId = `${baseId}-panel-${i}`;
          const buttonId = `${baseId}-button-${i}`;
          return (
            <li
              key={item.id}
              className={`border-t ${isDark ? "border-paper/15" : "border-rule"} last:border-b`}
            >
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => toggle(item.id)}
                  className={`group flex w-full items-start gap-4 py-5 text-left transition-colors ${
                    compact ? "py-4" : "py-5"
                  } ${isDark ? "hover:text-amber" : "hover:text-brand"}`}
                >
                  <span
                    className={`mt-[3px] tabular label-micro text-[0.66rem] ${
                      isDark ? "text-amber/80" : "text-amber-dark"
                    }`}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex-1 font-display font-semibold text-[1.02rem] md:text-[1.12rem] leading-[1.42] ${
                      isDark ? "text-paper" : "text-ink"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`mt-[2px] grid h-7 w-7 shrink-0 place-items-center rounded-[3px] border transition-colors ${
                      open
                        ? "bg-amber border-amber text-[#20160A]"
                        : isDark
                        ? "border-paper/30 text-paper"
                        : "border-ink/20 text-ink group-hover:border-ink"
                    }`}
                    aria-hidden="true"
                  >
                    <Plus
                      className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                    />
                  </span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div
                    key="panel"
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={reduce ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduce ? { height: "auto", opacity: 0 } : { height: 0, opacity: 0 }}
                    transition={{ duration: reduce ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p
                      className={`pb-6 pl-[2.65rem] pr-2 text-[0.965rem] leading-[1.78] ${
                        isDark ? "text-onink/80" : "text-muted"
                      }`}
                    >
                      {item.answer}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
