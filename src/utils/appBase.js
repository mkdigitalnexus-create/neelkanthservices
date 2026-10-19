/**
 * Resolves the directory the application was served from, so the same build works
 * both at a domain root (https://example.com/) and under a path prefix
 * (https://example.com/preview/build/), including client-side route changes.
 *
 * The value is written to the <base> element in main.jsx, which makes every
 * relative asset reference ("assets/hero/…") resolve against the app root on every
 * route — instead of against the current URL, which would break on /services/:slug.
 */
const SPA_ROUTE_PATTERN =
  /\/(services(\/[a-z0-9-]+)?|about|our-process|service-areas|get-a-quote|contact|faq|404)\/?$/;

export function computeAppBase() {
  if (typeof window === "undefined") return "/";
  let path = window.location.pathname || "/";

  // Drop a trailing document name such as index.html
  path = path.replace(/[^/]*\.[a-zA-Z0-9]+$/, "");
  // Drop any trailing client-side route
  path = path.replace(SPA_ROUTE_PATTERN, "");
  // Normalise to a directory
  if (!path.endsWith("/")) path += "/";
  return path || "/";
}

export const APP_BASE = computeAppBase();

/** React Router basename — no trailing slash (except the root). */
export const APP_BASENAME = APP_BASE === "/" ? "/" : APP_BASE.replace(/\/$/, "");

/** Prefix for a relative asset path, e.g. asset("assets/hero/hero-household.jpg"). */
export function asset(relativePath) {
  return `${APP_BASE}${String(relativePath).replace(/^\//, "")}`;
}

export default APP_BASE;
