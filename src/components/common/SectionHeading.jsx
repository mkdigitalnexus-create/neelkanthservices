import Reveal from "./Reveal";

/**
 * The "document spine" section heading: an index + tracked label sit in the left
 * margin rail, the title and intro sit in the content measure — like annotations
 * on a consignment note.
 */
export default function SectionHeading({
  index,
  label,
  title,
  intro,
  tone = "light",
  align = "left",
  className = "",
  titleClass = "",
  id,
  children,
}) {
  const isDark = tone === "dark";
  const labelColor = isDark ? "text-amber" : "text-brand";
  const titleColor = isDark ? "text-paper" : "text-ink";
  const introColor = isDark ? "text-onink/85" : "text-muted";
  const ruleColor = isDark ? "bg-paper/25" : "bg-ink/15";

  return (
    <Reveal className={`w-full ${className}`} amount={0.1}>
      <div
        className={`grid gap-5 md:gap-10 ${
          align === "center" ? "md:grid-cols-1 md:text-center" : "md:grid-cols-[minmax(0,180px)_1fr]"
        }`}
      >
        <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-3">
          {index ? (
            <span
              className={`font-display font-extrabold tabular text-[2.1rem] leading-none ${
                isDark ? "text-paper/25" : "text-ink/20"
              }`}
              aria-hidden="true"
            >
              {index}
            </span>
          ) : null}
          <div className="flex items-center gap-2 md:mt-1">
            <span className={`h-[2px] w-7 ${isDark ? "bg-amber" : "bg-amber"}`} aria-hidden="true" />
            <span className={`label-micro ${labelColor}`}>{label}</span>
          </div>
        </div>

        <div className="max-w-[62ch]">
          <div className={`mb-5 h-px w-full ${ruleColor} md:hidden`} aria-hidden="true" />
          <h2
            id={id}
            className={`font-display font-extrabold display-tight text-[clamp(1.75rem,4.6vw,3.05rem)] ${titleColor} ${titleClass}`}
          >
            {title}
          </h2>
          {intro ? (
            <p className={`mt-4 text-[1.02rem] md:text-[1.115rem] leading-[1.72] ${introColor}`}>{intro}</p>
          ) : null}
          {children}
        </div>
      </div>
    </Reveal>
  );
}
