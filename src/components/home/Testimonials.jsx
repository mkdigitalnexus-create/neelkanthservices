import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Quote, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import "swiper/css";
import { useState } from "react";
import { testimonials } from "../../data/testimonials";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import { siteConfig } from "../../config/siteConfig";

export default function Testimonials() {
  const [swiper, setSwiper] = useState(null);

  return (
    <section className="relative mt-24 overflow-hidden bg-ink py-16 md:mt-32 md:py-24" aria-labelledby="testimonials-heading">
      <div className="paper-grain absolute inset-0 opacity-[0.16]" aria-hidden="true" />
      <div className="chevron-band absolute inset-x-0 top-0 h-2 opacity-90" aria-hidden="true" />

      <div className="doc-container relative">
        <SectionHeading
          id="testimonials-heading"
          tone="dark"
          index="05"
          label="Client Experiences"
          title="What clients say about moving with Neelkanth"
          intro="Genuine feedback from families, corporate teams and businesses who trusted Neelkanth Transport with their relocations across Punjab, Haryana, Chandigarh Tricity and Delhi NCR."
        />

        <div className="mt-11 grid gap-8 lg:grid-cols-[1fr_21rem] lg:items-start">
          <Swiper
            modules={[Keyboard, A11y]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            keyboard={{ enabled: true }}
            a11y={{ enabled: true, prevSlideMessage: "Previous testimonial", nextSlideMessage: "Next testimonial" }}
            onSwiper={setSwiper}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} className="!h-auto">
                <figure className="flex h-full flex-col rounded-[4px] border border-paper/15 bg-paper/[0.045] p-7 transition-colors hover:border-amber/40">
                  <div className="flex items-center justify-between">
                    <Quote className="h-7 w-7 text-amber" aria-hidden="true" />
                    <div className="flex items-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
                      {[...Array(t.rating || 5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber text-amber" aria-hidden="true" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="mt-5 flex-1">
                    <p className="text-[1.015rem] leading-[1.76] text-onink/88">“{t.quote}”</p>
                  </blockquote>

                  <figcaption className="mt-7 border-t border-paper/15 pt-5">
                    <p className="font-display text-[0.985rem] font-bold text-paper">{t.name}</p>
                    <p className="mt-1 text-[0.825rem] text-onink/62">
                      {t.role}
                    </p>
                    <p className="mt-0.5 text-[0.8rem] text-amber/90">
                      {t.location}
                    </p>
                    <div className="mt-3.5 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-[2px] bg-teal/15 px-2.5 py-1 label-micro text-[0.62rem] text-teal">
                        <CheckCircle2 className="h-3 w-3" />
                        Verified Relocation
                      </span>
                      {t.tag ? (
                        <span className="rounded-[2px] border border-paper/20 px-2 py-0.5 text-[0.68rem] text-onink/60">
                          {t.tag}
                        </span>
                      ) : null}
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          <Reveal delay={0.08}>
            <div className="rounded-[4px] border border-paper/20 bg-paper/[0.04] p-7">
              <span className="label-micro text-amber">Trust &amp; Track Record</span>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display text-[2.4rem] font-extrabold leading-none text-paper">4.9</span>
                <span className="text-[0.95rem] text-onink/60">/ 5.0 Rating</span>
              </div>
              <div className="mt-2 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber text-amber" />
                ))}
                <span className="ml-2 text-[0.8rem] text-onink/70">Based on 1,450+ verified moves</span>
              </div>

              <div className="mt-6 space-y-3.5 border-t border-paper/15 pt-5">
                {[
                  { label: "On-time delivery record", value: "98.8%" },
                  { label: "Total moves completed", value: siteConfig.movesCompleted },
                  { label: "Owned container fleet", value: siteConfig.fleetCount },
                  { label: "Transit safety rating", value: "99.4%" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between text-[0.865rem]">
                    <span className="text-onink/72">{stat.label}</span>
                    <span className="font-semibold text-paper tabular">{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => swiper?.slidePrev()}
                  aria-label="Previous testimonial"
                  className="grid h-11 w-11 place-items-center rounded-[3px] border border-paper/30 text-paper transition-colors hover:border-amber hover:bg-amber hover:text-[#20160A]"
                >
                  <ArrowLeft className="h-[18px] w-[18px]" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => swiper?.slideNext()}
                  aria-label="Next testimonial"
                  className="grid h-11 w-11 place-items-center rounded-[3px] border border-paper/30 text-paper transition-colors hover:border-amber hover:bg-amber hover:text-[#20160A]"
                >
                  <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
                </button>
                <Link
                  to="/get-a-quote"
                  className="ml-auto inline-flex h-11 items-center rounded-[3px] border border-amber bg-amber px-5 text-[0.875rem] font-semibold text-[#20160A] transition-colors hover:bg-[#f0a03c]"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
