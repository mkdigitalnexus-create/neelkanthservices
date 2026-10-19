import { Link } from "react-router-dom";

const BASE =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-[3px] transition-[background-color,color,border-color,transform,box-shadow] duration-200 ease-out active:translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-60 select-none";

const VARIANTS = {
  amber:
    "bg-amber text-[#20160A] border border-amber hover:bg-[#f0a03c] hover:border-[#f0a03c] shadow-[0_2px_0_0_#B96F12] hover:shadow-[0_3px_0_0_#B96F12]",
  ink: "bg-ink text-paper border border-ink hover:bg-[#17334c] shadow-[0_2px_0_0_#071826] hover:shadow-[0_3px_0_0_#071826]",
  outline:
    "bg-transparent text-ink border border-ink/30 hover:border-ink hover:bg-ink hover:text-paper",
  "outline-light":
    "bg-transparent text-paper border border-paper/35 hover:bg-paper hover:text-ink",
  ghost: "bg-transparent text-brand border border-transparent hover:bg-brand/8",
  link: "bg-transparent text-brand border border-transparent px-0 hover:text-amber-dark underline underline-offset-4 decoration-amber/60 hover:decoration-amber",
};

const SIZES = {
  sm: "text-[0.82rem] px-4 h-9",
  md: "text-[0.92rem] px-5 h-11",
  lg: "text-[0.98rem] px-7 h-13 py-3.5",
};

export default function Button({
  as = "auto",
  to,
  href,
  type = "button",
  variant = "amber",
  size = "md",
  className = "",
  children,
  icon: Icon,
  iconRight: IconRight,
  ...rest
}) {
  const classes = `${BASE} ${VARIANTS[variant] || VARIANTS.amber} ${SIZES[size] || SIZES.md} ${className}`;

  const content = (
    <>
      {Icon ? <Icon className="h-[18px] w-[18px] shrink-0" aria-hidden="true" /> : null}
      <span className="whitespace-nowrap">{children}</span>
      {IconRight ? <IconRight className="h-[18px] w-[18px] shrink-0" aria-hidden="true" /> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}
