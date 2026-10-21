import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Accordion from "../common/Accordion";
import { faqs } from "../../data/faqs";

export default function FaqSection({ items = faqs.slice(0, 5), showAllLink = true }) {
  return (
    <section className="section bg-white">
      <div className="container-x grid gap-12 lg:grid-cols-[40fr_60fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="FAQ" title="Questions Before You Ship?" copy="Answers to the questions businesses ask most often before arranging transport." />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn btn-navy btn-sm">Contact Us <ArrowRight size={16} /></Link>
            {showAllLink && <Link to="/faq" className="btn btn-outline-dark btn-sm">All FAQs</Link>}
          </div>
        </div>
        <Accordion items={items} />
      </div>
    </section>
  );
}
