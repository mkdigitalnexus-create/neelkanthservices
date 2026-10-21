import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import { gallery, galleryCategories } from "../data/gallery";

export default function Gallery() {
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState(null); // index within filtered list
  const list = cat === "All" ? gallery : gallery.filter((g) => g.category === cat);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive((i) => (i - 1 + list.length) % list.length), [list.length]);
  const next = useCallback(() => setActive((i) => (i + 1) % list.length), [list.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  return (
    <>
      <Seo title="Gallery" description="Photographs of vehicles, loading operations and highway movements. Imagery is illustrative for this demonstration." />
      <PageHero title="Gallery" intro="Vehicles, loading points and routes. Imagery on this page is illustrative for the demonstration." image="/assets/hero/hero-2.jpg" position="65% center" crumbs={[{ label: "Gallery" }]} />

      <section className="section bg-white">
        <div className="container-x">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter gallery">
            {galleryCategories.map((c) => (
              <button key={c} type="button" role="tab" aria-selected={cat === c} onClick={() => { setCat(c); setActive(null); }} className={`h-10 rounded-md border px-4 text-sm font-semibold transition ${cat === c ? "border-navy bg-navy text-white" : "border-line text-ink hover:border-navy"}`}>{c}</button>
            ))}
          </div>

          <motion.ul layout className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {list.map((g, i) => (
                <motion.li layout key={g.id} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.3 }} className={g.size === "large" ? "col-span-2 row-span-2" : ""}>
                  <button type="button" onClick={() => setActive(i)} className="img-hover group relative block h-full w-full overflow-hidden rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue" aria-label={`Open image: ${g.caption}`}>
                    <div className={g.size === "large" ? "aspect-[4/3] h-full" : "aspect-[4/3]"}>
                      <img src={g.src} alt={g.alt} loading="lazy" width={800} height={600} className="h-full w-full object-cover" />
                    </div>
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-4 text-left text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{g.caption}</span>
                  </button>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      </section>

      <AnimatePresence>
        {active !== null && list[active] && (
          <motion.div role="dialog" aria-modal="true" aria-label="Image viewer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-[80] flex items-center justify-center bg-navy/95 p-4" onClick={close}>
            <button type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-md border border-white/30 text-white hover:border-gold hover:text-gold"><X size={20} /></button>
            <button type="button" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous image" className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-white/30 text-white hover:border-gold hover:text-gold md:left-6"><ChevronLeft size={20} /></button>
            <button type="button" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next image" className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-white/30 text-white hover:border-gold hover:text-gold md:right-6"><ChevronRight size={20} /></button>
            <motion.figure key={list[active].id} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <img src={list[active].src} alt={list[active].alt} className="max-h-[78vh] w-auto rounded-md object-contain" />
              <figcaption className="mt-4 flex items-center justify-between text-sm text-white/80">
                <span>{list[active].caption}</span>
                <span className="tabular-nums text-white/50">{active + 1} / {list.length}</span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
