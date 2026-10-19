import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig, isContactConfigured } from "../../config/siteConfig";
import { WhatsAppIcon } from "../common/SocialIcons";
import Reveal from "../common/Reveal";

/** Full-bleed cinematic closing band. */
export default function FinalCTA() {
  const phoneConfigured = isContactConfigured("phone");

  return (
    <section className="relative mt-24 overflow-hidden md:mt-32" aria-labelledby="final-cta-heading">
      <div className="relative min-h-[27rem] w-full">
        <img
          src="assets/about/logistics-fleet.jpg"
          alt="A row of goods trucks parked in a transport yard at dawn"
          loading="lazy"
          decoding="async"
          width="1536"
          height="1024"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "50% 62%" }}
        />
        <div className="absolute inset-0 bg-ink/82" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-2 chevron-band" aria-hidden="true" />

        <div className="doc-container relative flex min-h-[27rem] flex-col justify-center py-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-9 bg-amber" aria-hidden="true" />
                <span className="label-micro text-amber">Ready when you are</span>
              </div>
              <h2
                id="final-cta-heading"
                className="mt-5 font-display font-extrabold display-tight text-paper text-[clamp(2rem,5vw,3.35rem)]"
              >
                Let’s plan the move properly, from the first conversation.
              </h2>
              <p className="mt-5 max-w-[52ch] text-[1.045rem] leading-[1.72] text-onink/82">
                Share the route, the date and what needs to move. We will put together the scope —
                packing, handling, transport and delivery coordination — and walk you through it.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[4px] border border-paper/18 bg-paper/[0.06] p-7">
                <div className="flex flex-col gap-3">
                  <Link
                    to="/get-a-quote"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-[3px] border border-amber bg-amber px-6 text-[0.955rem] font-semibold text-[#20160A] shadow-[0_2px_0_0_#B96F12] transition-colors hover:bg-[#f0a03c]"
                  >
                    Get a Free Quote
                    <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-[3px] border border-paper/38 px-6 text-[0.955rem] font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
                  >
                    Contact Us
                  </Link>
                  <a
                    href={`tel:${siteConfig.contact.phoneHref}`}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-[3px] border border-paper/25 px-6 text-[0.955rem] font-semibold text-paper transition-colors hover:border-amber hover:text-amber"
                  >
                    <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
                    Call {siteConfig.contact.phone}
                  </a>
                  <a
                    href={`https://wa.me/919872834910?text=${encodeURIComponent(`Hello Neelkanth Transport, I would like to enquire about planning a move.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-[3px] border border-[#25D366]/40 bg-[#25D366]/15 px-6 text-[0.955rem] font-semibold text-paper transition-colors hover:bg-[#25D366] hover:text-[#0C1E10]"
                  >
                    <WhatsAppIcon className="h-[18px] w-[18px]" aria-hidden="true" />
                    WhatsApp Chat (+91 98728 34910)
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
