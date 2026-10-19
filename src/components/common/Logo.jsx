/**
 * Brand mark — hand-drawn inline SVG so it scales, reverses and recolours cleanly.
 * Shield = protected delivery. Container-truck silhouette = transport.
 * Three amber bars = forward motion.
 */

export function LogoMark({ className = "h-9 w-9", ink = "#0E2439", face = "#FBF8F3", accent = "#E08A1E" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Neelkanth Transport Services">
      <path
        fill={ink}
        d="M32 2.5 57.5 11v21.2c0 13.8-10.3 24.4-25.5 29.3C16.8 56.6 6.5 46 6.5 32.2V11L32 2.5Z"
      />
      <g fill={face}>
        <path d="M20 21.5h17.6v13.4H20z" />
        <path d="M37.6 26h5.4l5.2 5.2v3.7H37.6z" />
        <circle cx="26.4" cy="36.4" r="3.3" />
        <circle cx="43.6" cy="36.4" r="3.3" />
      </g>
      <g fill={accent}>
        <rect x="11.4" y="23.6" width="6" height="2.6" rx="1.3" />
        <rect x="11.4" y="29.1" width="8.2" height="2.6" rx="1.3" />
        <rect x="11.4" y="34.6" width="6" height="2.6" rx="1.3" />
      </g>
    </svg>
  );
}

export function Logo({ variant = "dark", className = "", markClass = "h-10 w-10", compact = false }) {
  const onDark = variant === "light";
  const wordColor = onDark ? "text-paper" : "text-ink";
  const subColor = onDark ? "text-[#9FC6E4]" : "text-brand";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark
        className={markClass}
        ink={onDark ? "#FBF8F3" : "#0E2439"}
        face={onDark ? "#0E2439" : "#FBF8F3"}
        accent="#E08A1E"
      />
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display font-extrabold tracking-[-0.025em] text-[1.02rem] sm:text-[1.12rem] ${wordColor}`}
          >
            NEELKHANTH
          </span>
          <span className="mt-[5px] h-[2px] w-full max-w-[132px] bg-amber" aria-hidden="true" />
          <span
            className={`mt-[5px] label-micro text-[0.555rem] sm:text-[0.6rem] tracking-[0.235em] ${subColor}`}
          >
            TRANSPORT SERVICES
          </span>
        </span>
      )}
    </span>
  );
}

export default Logo;
