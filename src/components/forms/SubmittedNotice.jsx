"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import WhatsAppIcon from "../common/WhatsAppIcon";

export default function SubmittedNotice({
  summary,
  onReset,
  whatsappUrl,
  emailSent = true,
}) {
  const [countdown, setCountdown] = useState(2);

  useEffect(() => {
    if (!whatsappUrl) return;

    // Countdown and automatic redirect
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = whatsappUrl;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [whatsappUrl]);

  return (
    <div
      className="rounded-xl border border-emerald-500/30 bg-white p-6 md:p-10 shadow-lg text-left"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 size={32} />
        </span>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
            Inquiry Dispatched Successfully
          </span>
          <h2 className="font-heading text-xl md:text-2xl font-bold text-navy">
            Thank You! Your Details Are Sent
          </h2>
        </div>
      </div>

      <div className="mt-5 rounded-lg border border-emerald-500/20 bg-emerald-50/60 p-4 text-sm text-emerald-900 leading-relaxed">
        <p className="font-medium">
          {emailSent
            ? "Your freight requirement has been delivered directly to our dispatch inbox (neelkanthtransportationservice@gmail.com)."
            : "Your requirement has been captured."}
        </p>
        <p className="mt-1 text-xs text-emerald-700">
          Redirecting you to WhatsApp with your pre-drafted message in{" "}
          <strong className="text-emerald-950 font-bold">{countdown}s</strong> for instant rate calculation and vehicle booking...
        </p>
      </div>

      {whatsappUrl && (
        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href={whatsappUrl}
            className="btn h-12 px-6 flex items-center justify-center gap-2.5 rounded-lg bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#20bd5a] hover:shadow-lg transition-all"
          >
            <WhatsAppIcon size={22} />
            <span>Open WhatsApp Now & Send Message</span>
            <ArrowRight size={16} />
          </a>
        </div>
      )}

      {summary && (
        <div className="mt-8 border-t border-line pt-6">
          <p className="eyebrow text-muted mb-3">Enquiry Summary</p>
          <dl className="grid gap-3 text-sm sm:grid-cols-2">
            {summary
              .filter(([, v]) => v)
              .map(([k, v]) => (
                <div key={k} className="rounded-md border border-line bg-surface/50 p-2.5">
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-muted">
                    {k}
                  </dt>
                  <dd className="mt-0.5 font-semibold text-navy truncate">{v}</dd>
                </div>
              ))}
          </dl>
        </div>
      )}

      <div className="mt-8 flex items-center justify-between border-t border-line pt-5">
        <button
          type="button"
          onClick={onReset}
          className="btn btn-outline btn-sm text-xs font-semibold"
        >
          Submit Another Enquiry
        </button>
        <span className="text-xs text-muted">Dispatch Hotline: +91 76781 76144</span>
      </div>
    </div>
  );
}
