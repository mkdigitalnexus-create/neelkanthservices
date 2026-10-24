"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Keyboard, EffectFade } from "swiper/modules";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";
import { heroText } from "../common/motion";

const slides = [
  {
    image: "/assets/hero/hero-1.jpg",
    position: "72% 15%",
    mobilePosition: "78% 15%",
    title: "Best Transport Services in Delhi, Haryana & Punjab",
    copy: "Premier commercial logistics and road freight partner headquartered in Dhankot, Gurugram. Fast, safe full truckload (FTL), 32ft container, and heavy trailer transport connecting Delhi NCR, Haryana, Punjab & Pan-India.",
    overlay: "linear-gradient(90deg, rgba(8,27,54,0.94) 0%, rgba(8,27,54,0.76) 38%, rgba(8,27,54,0.24) 72%, rgba(8,27,54,0.08) 100%)",
  },
  {
    image: "/assets/hero/hero-2.jpg",
    position: "70% 15%",
    mobilePosition: "72% 15%",
    title: "Daily Direct Corridors: Delhi to Punjab & Haryana",
    copy: "Daily high-frequency commercial fleet dispatches connecting Delhi NCR and Haryana with Ludhiana, Chandigarh, Jalandhar, Amritsar, Panipat, Sonipat, and national industrial hubs.",
    overlay: "linear-gradient(90deg, rgba(8,27,54,0.94) 0%, rgba(8,27,54,0.72) 40%, rgba(8,27,54,0.2) 74%, rgba(8,27,54,0.06) 100%)",
  },
  {
    image: "/assets/hero/hero-3.jpg",
    position: "70% 18%",
    mobilePosition: "75% 18%",
    title: "Heavy Commercial, Open-Body & Container Fleet",
    copy: "Safe, on-time delivery with 24/7 dispatch coordination. Call +91 76781 76144 or +91 98124 58224 for instant rates and confirmed truck placement across North India.",
    overlay: "linear-gradient(90deg, rgba(8,27,54,0.94) 0%, rgba(8,27,54,0.74) 38%, rgba(8,27,54,0.22) 72%, rgba(8,27,54,0.08) 100%)",
  },
];

const AUTOPLAY = 7000;

const ease = [0.22, 0.61, 0.36, 1];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const swiperRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const heroFade = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease },
        };

  return (
    <section
      className="relative w-full overflow-hidden bg-navy"
      style={{ height: "min(820px, calc(100svh - 90px))", minHeight: 640 }}
      aria-roledescription="carousel"
      aria-label="Featured transport services"
    >
      <Swiper
        modules={[Autoplay, A11y, Keyboard, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="hero-swiper h-full w-full overflow-hidden"
        loop
        speed={800}
        keyboard={{ enabled: true }}
        autoplay={reduceMotion ? false : { delay: AUTOPLAY, disableOnInteraction: false, pauseOnMouseEnter: true }}
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(s) => {
          setIndex(s.realIndex);
          setProgressKey((k) => k + 1);
        }}
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i} className="h-full w-full overflow-hidden">
            <div className="relative h-full w-full overflow-hidden">
              <motion.img
                key={`${i}-${index === i}`}
                src={s.image}
                alt=""
                aria-hidden="true"
                width={1600}
                height={900}
                fetchPriority={i === 0 ? "high" : "auto"}
                loading={i === 0 ? "eager" : "lazy"}
                initial={reduceMotion ? false : { scale: 1.06 }}
                animate={{ scale: index === i ? 1 : 1.06 }}
                transition={{ duration: 7, ease: "linear" }}
                className="hero-img absolute inset-0 h-full w-full object-cover"
                style={{ "--pos": s.position, "--pos-m": s.mobilePosition }}
              />
              <div className="absolute inset-0 hidden md:block" style={{ background: s.overlay }} />
              <div
                className="absolute inset-0 md:hidden"
                style={{ background: "linear-gradient(180deg, rgba(8,27,54,0.92) 0%, rgba(8,27,54,0.78) 45%, rgba(8,27,54,0.35) 100%)" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content overlay — outside swiper so text transitions are controlled */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-start pt-16 md:items-center md:pt-0">
        <div className="container-x">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? false : { opacity: 0, transition: { duration: 0.2 } }}
              className="pointer-events-auto max-w-[700px]"
            >
              <motion.div {...heroFade(0.04)} className="mb-5 flex items-center gap-3">
                <span className="eyebrow text-gold font-semibold">HQ: Dhankot, Gurugram (Delhi NCR)</span>
                <span className="gold-line" />
              </motion.div>
              <motion.h1 {...heroFade(0.12)} className="h-hero text-white">
                {slides[index].title}
              </motion.h1>
              <motion.p {...heroFade(0.2)} className="mt-6 max-w-[540px] text-base leading-relaxed text-white/85 md:text-lg">
                {slides[index].copy}
              </motion.p>
              <motion.div {...heroFade(0.28)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/get-a-quote" className="btn btn-gold">
                  Request a Quote <ArrowRight size={18} />
                </Link>
                <a href="tel:+917678176144" className="btn btn-outline-light flex items-center gap-2">
                  <Phone size={17} className="text-gold" />
                  <span>Call: +91 76781 76144</span>
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls — bottom right */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="container-x flex items-end justify-end pb-6 md:pb-8">
          <div className="flex items-center gap-5 text-white">
            <div className="flex items-baseline gap-1 font-heading tabular-nums">
              <span className="text-lg font-bold">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-xs text-white/55">/ {String(slides.length).padStart(2, "0")}</span>
            </div>
            <div className="h-px w-16 overflow-hidden bg-white/25 sm:w-28" aria-hidden="true">
              <motion.div
                key={progressKey}
                className="h-full bg-gold"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: reduceMotion ? 0 : AUTOPLAY / 1000, ease: "linear" }}
              />
            </div>
            <div className="flex gap-2">
              <button type="button" aria-label="Previous slide" onClick={() => swiperRef.current?.slidePrev()} className="flex h-10 w-10 items-center justify-center rounded-md border border-white/35 transition hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">
                <ChevronLeft size={18} />
              </button>
              <button type="button" aria-label="Next slide" onClick={() => swiperRef.current?.slideNext()} className="flex h-10 w-10 items-center justify-center rounded-md border border-white/35 transition hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>{`.hero-img{object-position:var(--pos-m)} @media(min-width:768px){.hero-img{object-position:var(--pos)}}`}</style>
    </section>
  );
}
