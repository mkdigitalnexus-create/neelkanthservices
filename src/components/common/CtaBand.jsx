import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBand() {
  return (
    <section className="bg-navy text-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[460px]">
          <img src="/assets/hero/cta.jpg" alt="Freight truck on an illuminated highway at night" loading="lazy" width={1500} height={1000} className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: "35% center" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent lg:bg-gradient-to-l lg:from-navy lg:via-navy/10" />
        </div>
        <div className="flex items-center px-5 py-14 sm:px-7 lg:py-20 lg:pl-16 lg:pr-[max(44px,calc((100vw-1408px)/2+64px))]">
          <div className="max-w-lg">
            <div className="mb-4 flex items-center gap-3">
              <span className="gold-line" />
              <span className="eyebrow text-gold">Get started</span>
            </div>
            <h2 className="h-section">Ready to Move Your Cargo Forward?</h2>
            <p className="lead mt-5 text-white/70">Tell us what you need to transport and discuss the next step with our team.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/get-a-quote" className="btn btn-gold">Request a Quote <ArrowRight size={18} /></Link>
              <Link href="/contact" className="btn btn-outline-light">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
