import { ShieldCheck, Users, MessageSquare, Briefcase } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Safety-Conscious Handling" },
  { icon: Users, label: "Professional Coordination" },
  { icon: MessageSquare, label: "Clear Communication" },
  { icon: Briefcase, label: "Business-Focused Solutions" },
];

export default function TrustStrip() {
  return (
    <section className="bg-surface" aria-label="Why businesses work with us">
      <div className="container-x">
        <ul className="grid grid-cols-2 divide-line sm:divide-x lg:grid-cols-4">
          {items.map(({ icon: Icon, label }, i) => (
            <li key={label} className={`flex items-center gap-3 py-5 sm:px-6 lg:py-6 ${i % 2 === 1 ? "pl-4 sm:pl-6" : ""} ${i === 0 ? "sm:pl-0" : ""}`}>
              <Icon size={20} strokeWidth={1.6} className="shrink-0 text-blue" />
              <span className="font-heading text-[0.82rem] font-bold tracking-wide text-navy md:text-sm">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
