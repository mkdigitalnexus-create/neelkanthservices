import { useEffect, useState } from "react";
import { Send, X } from "lucide-react";
import { siteConfig, waHref } from "../../config/siteConfig";
import { WhatsAppIcon } from "./SocialIcons";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const href = waHref(
    `Hello ${siteConfig.businessName}, I would like to enquire about a moving requirement.`
  );

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {open ? (
        <div
          role="dialog"
          aria-label="WhatsApp enquiry"
          className="w-[20.5rem] rounded-[6px] border border-rule bg-white p-5 shadow-[0_24px_60px_-20px_rgba(14,36,57,0.5)] animate-in fade-in zoom-in-95 duration-200"
        >
          <div className="flex items-start justify-between gap-3 border-b border-rule pb-3.5">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
              </span>
              <div>
                <p className="font-display font-bold text-[0.98rem] text-ink">
                  Neelkanth Move Support
                </p>
                <p className="text-[0.74rem] text-muted">
                  Typically replies within 15 mins
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close WhatsApp panel"
              className="grid h-7 w-7 place-items-center rounded-[3px] border border-rule text-ink/70 transition-colors hover:bg-ink hover:text-paper"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="my-3.5 rounded-[4px] bg-[#EFEAE2]/60 p-3 text-[0.84rem] leading-[1.6] text-ink">
            <p>
              Hello! 👋 Planning a household shift, vehicle carrier or office relocation? Connect with our moving desk directly on WhatsApp.
            </p>
          </div>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-[3px] bg-[#25D366] px-4 text-[0.915rem] font-semibold text-white shadow-sm transition-colors hover:bg-[#1fae53]"
          >
            <WhatsAppIcon className="h-4.5 w-4.5" />
            Start WhatsApp Chat
          </a>
          <p className="mt-2 text-center text-[0.72rem] text-muted">
            Direct Helpline: {siteConfig.contact.phone}
          </p>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Chat on WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full border-2 border-white bg-[#25D366] text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,0.7)] transition-all hover:scale-[1.08] active:scale-[0.96]"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-amber"></span>
        </span>
        <WhatsAppIcon className="h-7 w-7" aria-hidden="true" />
      </button>
    </div>
  );
}
