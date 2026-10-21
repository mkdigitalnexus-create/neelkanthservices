import { Info } from "lucide-react";

export default function DemoNotice({ className = "" }) {
  return (
    <p className={`flex items-start gap-2.5 rounded-md border border-line bg-surface px-4 py-3 text-[0.8rem] leading-relaxed text-muted ${className}`}>
      <Info size={16} className="mt-0.5 shrink-0 text-blue" />
      <span>
        This form is part of a frontend demonstration and is not connected to a live submission service. No quote or booking is created when you submit it.
      </span>
    </p>
  );
}
