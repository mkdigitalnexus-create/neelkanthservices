import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

/**
 * Crawlable breadcrumb trail.
 * `items`: [{ label, to }] — last item is rendered as the current page.
 */
export default function Breadcrumbs({ items = [], tone = "light" }) {
  const isDark = tone === "dark";
  // Filter out redundant leading "Home" if already passed by callers since Home root icon is always rendered first
  const normalizedItems = items.filter(
    (item, index) => !(index === 0 && (item.label?.toLowerCase() === "home" || item.to === "/"))
  );

  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <ol className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.78rem] ${isDark ? "text-onink/70" : "text-muted"}`}>
        <li className="flex items-center gap-2">
          <Link
            to="/"
            className={`inline-flex items-center gap-1.5 transition-colors ${
              isDark ? "hover:text-amber" : "hover:text-brand"
            }`}
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="label-micro text-[0.64rem]">Home</span>
          </Link>
        </li>
        {normalizedItems.map((item, i) => {
          const last = i === normalizedItems.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              <ChevronRight className={`h-3.5 w-3.5 ${isDark ? "text-onink/40" : "text-ink/30"}`} aria-hidden="true" />
              {last || !item.to ? (
                <span
                  aria-current={last ? "page" : undefined}
                  className={`label-micro text-[0.64rem] ${isDark ? "text-amber" : "text-ink"}`}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className={`label-micro text-[0.64rem] transition-colors ${
                    isDark ? "hover:text-amber" : "hover:text-brand"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
