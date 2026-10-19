import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectFade, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import QuickQuoteForm from "./QuickQuoteForm";

export const heroSlides = [
  {
    id: "household",
    index: "01",
    eyebrow: "Household Relocation",
    title: "Moving Homes? We Make Every Move Easier.",
    description:
      "Professional multi-layer packing, careful furniture handling and dependable transportation for a smoother residential moving experience.",
    image: "assets/hero/hero-household.jpg",
    alt: "Movers carrying a blanket-wrapped wardrobe up a loading ramp into a transport truck outside a house",
    tag: "Packers & Movers",
    highlights: ["Multi-layer packing support", "Trained permanent crew", "Room-wise furniture placement"],
  },
  {
    id: "freight",
    index: "02",
    eyebrow: "Commercial Freight & FTL",
    title: "Dedicated Full Truckload Freight & Transport.",
    description:
      "Point-to-point commercial goods transport, industrial consignments, and line-haul logistics with real-time GPS fleet tracking across India.",
    image: "assets/services/ftl-freight.jpg",
    alt: "A heavy closed-body commercial container truck driving on a multi-lane Indian national expressway at sunrise",
    tag: "Commercial Freight",
    highlights: ["GPS-tracked container fleet", "GST e-way bill compliance", "All-India highway permits"],
  },
  {
    id: "commercial",
    index: "03",
    eyebrow: "Office & Corporate Moving",
    title: "A Smarter Way to Move Your Business.",
    description:
      "Sequenced relocation support for workstations, servers, IT equipment, and corporate archives with zero operational downtime.",
    image: "assets/hero/hero-office.jpg",
    alt: "Movers wheeling stacked crates and wrapped office chairs through a building loading dock",
    tag: "Corporate Relocation",
    highlights: ["Department-wise sequencing", "IT server & equipment packing", "Weekend downtime-free moves"],
  },
  {
    id: "machinery",
    index: "04",
    eyebrow: "Heavy Equipment & Cargo",
    title: "Industrial Machinery & Heavy Fleet Logistics.",
    description:
      "Specialized open trailers, low-bed rigs, and trained rigging teams for manufacturing plant equipment and over-dimensional cargo.",
    image: "assets/services/machinery-transport.jpg",
    alt: "Heavy industrial generators and machinery equipment secured on an Indian commercial transport flatbed trailer",
    tag: "Heavy Logistics",
    highlights: ["Low-bed & flatbed trailers", "Factory plant relocation", "Comprehensive transit insurance"],
  },
];

export default function HeroCarousel() {
  const reduce = useReducedMotion();
  const [swiper, setSwiper] = useState(null);
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);

  const pause = useCallback(() => {
    pausedRef.current = true;
    if (swiper?.autoplay) swiper.autoplay.stop();
  }, [swiper]);

  const resume = useCallback(() => {
    pausedRef.current = false;
    if (swiper?.autoplay && !reduce) swiper.autoplay.start();
  }, [swiper, reduce]);

  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) pause();
      else if (!pausedRef.current) resume();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [pause, resume]);

  const slide = heroSlides[active] || heroSlides[0];

  return (
    <section className="relative" aria-label="Featured relocation services">
      <div
        className="relative flex min-h-[clamp(600px,86vh,880px)] w-full items-center overflow-hidden bg-ink"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocusCapture={pause}
        onBlurCapture={resume}
      >
        <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Keyboard, A11y]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={reduce ? 0 : 900}
          rewind
          autoplay={
            reduce
              ? false
              : { delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true }
          }
          keyboard={{ enabled: true }}
          a11y={{
            enabled: true,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            slideLabelMessage: "Slide {{index}} of {{slidesLength}}",
          }}
          onSwiper={setSwiper}
          onSlideChange={(s) => setActive(s.activeIndex)}
          className="h-full w-full"
        >
          {heroSlides.map((s, i) => (
            <SwiperSlide key={s.id}>
              <div className="relative h-full w-full">
                <img
                  src={s.image}
                  alt={s.alt}
                  width="1536"
                  height="1024"
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : "auto"}
                  decoding="async"
                  className={`h-full w-full object-cover ${reduce ? "" : "kb"}`}
                  style={{ objectPosition: i === 2 ? "70% 50%" : "62% 50%" }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-ink via-ink/78 to-ink/22"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-ink to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-y-0 left-0 w-[6px] bg-amber/85" aria-hidden="true" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>

        {/* Slide content — re-animated per active slide */}
        <div className="pointer-events-none relative z-10 w-full">
          <div className="doc-container pb-[210px] pt-16 md:pb-[220px]">
            <motion.div
              key={slide.id}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto max-w-[46rem]"
            >
              <div className="flex items-center gap-3">
                <span className="tabular label-micro text-amber">{slide.index}</span>
                <span className="h-[2px] w-9 bg-amber" aria-hidden="true" />
                <span className="label-micro text-paper/80">{slide.eyebrow}</span>
              </div>

              <h1 className="mt-6 font-display font-extrabold display-tight text-paper text-[clamp(2.15rem,6.1vw,4.35rem)]">
                {slide.title}
              </h1>

              <p className="mt-6 max-w-[42ch] text-[1.055rem] leading-[1.68] text-onink/85 md:text-[1.16rem]">
                {slide.description}
              </p>

              <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
                {slide.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-amber" aria-hidden="true" />
                    <span className="text-[0.855rem] font-medium text-onink/80">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/get-a-quote"
                  className="inline-flex h-13 items-center justify-center rounded-[3px] border border-amber bg-amber px-7 text-[0.965rem] font-semibold text-[#20160A] shadow-[0_2px_0_0_#B96F12] transition-colors hover:bg-[#f0a03c]"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-[18px] w-[18px]" aria-hidden="true" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex h-13 items-center justify-center rounded-[3px] border border-paper/40 px-7 text-[0.965rem] font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Pagination + controls */}
        <div className="absolute inset-x-0 bottom-0 z-20">
          <div className="doc-container flex items-end justify-between gap-6 pb-[122px] md:pb-[136px]">
            <div className="flex items-end gap-3">
              {heroSlides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => swiper?.slideTo(i)}
                  aria-label={`Show slide ${i + 1}: ${s.title}`}
                  aria-current={active === i ? "true" : undefined}
                  className="group flex flex-col items-start gap-2 pt-6"
                >
                  <span
                    className={`tabular label-micro text-[0.62rem] transition-colors ${
                      active === i ? "text-amber" : "text-paper/45 group-hover:text-paper/80"
                    }`}
                  >
                    {s.index}
                  </span>
                  <span
                    className={`h-[3px] transition-all duration-500 ${
                      active === i ? "w-16 bg-amber" : "w-8 bg-paper/30 group-hover:bg-paper/55"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={() => swiper?.slidePrev()}
                aria-label="Previous slide"
                className="grid h-11 w-11 place-items-center rounded-[3px] border border-paper/35 text-paper transition-colors hover:border-amber hover:bg-amber hover:text-[#20160A]"
              >
                <ArrowLeft className="h-[18px] w-[18px]" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => swiper?.slideNext()}
                aria-label="Next slide"
                className="grid h-11 w-11 place-items-center rounded-[3px] border border-paper/35 text-paper transition-colors hover:border-amber hover:bg-amber hover:text-[#20160A]"
              >
                <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick quotation panel — straddles the photographic band and the paper page */}
      <div className="doc-container relative z-30 -mt-[92px] md:-mt-[104px]">
        <QuickQuoteForm />
      </div>
    </section>
  );
}
