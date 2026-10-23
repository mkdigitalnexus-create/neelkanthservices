import { ShieldCheck } from "lucide-react";

export default function DemoNotice({ className = "" }) {
  return (
    <p
      className={`flex items-start gap-2.5 rounded-lg border border-emerald-500/20 bg-emerald-50/50 px-4 py-3 text-[0.8rem] leading-relaxed text-emerald-900 ${className}`}
    >
      <ShieldCheck size={16} className="mt-0.5 shrink-0 text-emerald-600" />
      <span>
        <strong>Fast Dispatch Guarantee:</strong> Submitting your requirement sends an instant enquiry to our dispatch office and opens WhatsApp with your pre-drafted quote request.
      </span>
    </p>
  );
}
