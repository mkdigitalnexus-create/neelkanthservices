import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { gallery } from "../../data/gallery";
import { fadeUp, stagger, viewport } from "../common/motion";

export default function GalleryPreview() {
  const items = [gallery[0], gallery[1], gallery[2], gallery[3], gallery[5]];
  return (
    <section className="section bg-surface">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Gallery" title="On the Road and at the Yard" copy="A look at the vehicles, loading points and routes behind our work. Imagery is illustrative for this demonstration." />
          <Link to="/gallery" className="link-arrow shrink-0 md:mb-2">View Gallery <ArrowRight size={18} /></Link>
        </div>
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewport} className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-5">
          {items.map((g, i) => (
            <motion.figure key={g.id} variants={fadeUp} className={`img-hover overflow-hidden rounded-md ${i === 0 ? "col-span-2 row-span-2 aspect-[4/3] md:aspect-auto" : "aspect-[4/3]"}`}>
              <img src={g.src} alt={g.alt} loading="lazy" width={1200} height={800} className="h-full w-full object-cover" />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
