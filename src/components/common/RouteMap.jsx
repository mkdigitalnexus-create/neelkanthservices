import { routeNodes, routeLinks, highlightedLinks } from "../../data/routes";

const byId = Object.fromEntries(routeNodes.map((n) => [n.id, n]));
const isHi = (a, b) => highlightedLinks.some(([x, y]) => (x === a && y === b) || (x === b && y === a));

export default function RouteMap({ className = "" }) {
  return (
    <svg viewBox="0 0 600 640" className={`h-auto w-full ${className}`} role="img" aria-label="Illustrative route network connecting major Indian cities">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#DCE4EE" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="600" height="640" fill="url(#grid)" opacity="0.7" />
      {routeLinks.map(([a, b]) => {
        const A = byId[a], B = byId[b];
        const hi = isHi(a, b);
        const mx = (A.x + B.x) / 2 + (B.y - A.y) * 0.12;
        const my = (A.y + B.y) / 2 - (B.x - A.x) * 0.12;
        return (
          <path
            key={`${a}-${b}`}
            d={`M${A.x} ${A.y} Q${mx} ${my} ${B.x} ${B.y}`}
            fill="none"
            stroke={hi ? "#F5B51B" : "#075CC8"}
            strokeWidth={hi ? 3 : 1.6}
            strokeOpacity={hi ? 1 : 0.5}
            strokeDasharray={hi ? "none" : "6 6"}
            strokeLinecap="round"
          />
        );
      })}
      {routeNodes.map((n) => {
        const hub = ["mumbai", "delhi", "bengaluru", "hyderabad"].includes(n.id);
        return (
          <g key={n.id}>
            {hub && <circle cx={n.x} cy={n.y} r="14" fill="#075CC8" opacity="0.12" />}
            <circle cx={n.x} cy={n.y} r={hub ? 6 : 4.5} fill={hub ? "#081B36" : "#fff"} stroke="#081B36" strokeWidth="2" />
            <text x={n.x + 12} y={n.y + 4} fontFamily="Inter, sans-serif" fontSize="12.5" fontWeight="600" fill="#15243A">{n.label}</text>
          </g>
        );
      })}
    </svg>
  );
}
