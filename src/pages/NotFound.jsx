import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "../components/common/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you are looking for could not be found." />
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy text-white">
        <img src="/assets/hero/cta.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-40" style={{ objectPosition: "35% center" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/40" />
        <div className="container-x relative py-24">
          <p className="eyebrow text-gold">Error 404</p>
          <h1 className="h-page mt-4 max-w-2xl">This Route Doesn't Exist.</h1>
          <p className="lead mt-5 max-w-lg text-white/70">The page you were looking for has moved or was never on our network. Let's get you back on the right road.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/" className="btn btn-gold">Back to Home <ArrowRight size={18} /></Link>
            <Link to="/services" className="btn btn-outline-light">View Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
