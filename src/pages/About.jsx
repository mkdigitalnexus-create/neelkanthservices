import { Link } from "react-router-dom";
import {
  Award,
  Calendar,
  CheckCircle2,
  ClipboardList,
  Eye,
  MessagesSquare,
  ShieldCheck,
  Target,
  Truck,
  Users,
} from "lucide-react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/common/Reveal";
import QuoteCTA from "../components/common/QuoteCTA";
import { siteConfig } from "../config/siteConfig";

const STATS = [
  { icon: Calendar, value: siteConfig.yearsOfExperience, label: "Years of Moving Excellence", note: "Serving families & businesses since 2011" },
  { icon: Users, value: siteConfig.movesCompleted, label: "Relocations Completed", note: "Homes, apartments & corporate premises" },
  { icon: Truck, value: siteConfig.fleetCount, label: "Owned Container Fleet", note: "GPS-enabled, closed-body weather-proof trucks" },
  { icon: ShieldCheck, value: siteConfig.satisfactionRate, label: "Damage-Free Delivery Record", note: "Backed by multi-layer packing standards" },
];

const PRINCIPLES = [
  {
    icon: ClipboardList,
    title: "Plan before packing",
    text: "Every item category, elevator constraint, and destination delivery order is surveyed in advance. We bring the right materials and team for your exact belongings.",
  },
  {
    icon: MessagesSquare,
    title: "Transparent written estimates",
    text: "All quotes are documented in plain language with no hidden destination costs, unexpected fuel surcharges, or last-minute surprises on moving day.",
  },
  {
    icon: Target,
    title: "Precision loading & delivery care",
    text: "Receiving address access, lift availability, and destination placement are mapped before dispatch, ensuring unloading is as smooth as loading.",
  },
  {
    icon: Eye,
    title: "Complete transit transparency",
    text: "Every carton is clearly labeled by room and item group, with direct coordinator contact and GPS convoy tracking across every highway route.",
  },
];

const GALLERY = [
  {
    src: "assets/services/packing.jpg",
    alt: "Hands wrapping a wooden drawer unit in bubble wrap and stretch film beside stacked cartons",
    caption: "Multi-layer packing — 5-ply cartons, foam and waterproof stretch film",
  },
  {
    src: "assets/services/loading.jpg",
    alt: "Movers loading wrapped furniture and cartons into a transport container over a steel ramp",
    caption: "Systematic loading — planned weight distribution and securing belts",
  },
  {
    src: "assets/hero/hero-transport.jpg",
    alt: "A closed-body goods truck travelling along a highway in early morning haze",
    caption: "Highway transit — GPS-enabled enclosed container vehicles",
  },
  {
    src: "assets/about/logistics-fleet.jpg",
    alt: "A row of goods trucks parked in a transport yard at dawn",
    caption: "Dedicated fleet — company-owned and maintained transport fleet",
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Us | Neelkanth Transport Services — 14+ Years of Relocation Excellence"
        description="Learn about Neelkanth Transport Services: 14+ years of trusted household shifting, office relocation, and logistics across Punjab, Haryana, Chandigarh, and Delhi NCR. IBA Approved & ISO 9001:2015 Certified."
        path="/about"
        image="assets/about/logistics-fleet.jpg"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
      />

      <PageHero
        index="01"
        label="About the company"
        title="A transport service built on care, precision, and 14+ years of trust"
        intro="Neelkanth Transport Services Pvt. Ltd. is a premier packers and movers provider serving North India — specialized in household shifting, commercial relocation, vehicle carriers, and express intercity logistics."
        image="assets/about/logistics-fleet.jpg"
        imageAlt="A row of goods trucks parked in a transport yard at dawn"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
      >
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-[3px] border border-amber/40 bg-amber/15 px-3 py-1.5 label-micro text-[0.68rem] text-amber">
            <Award className="h-3.5 w-3.5" />
            IBA Approved Transporter ({siteConfig.ibaApprovedCode})
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-[3px] border border-paper/20 bg-paper/10 px-3 py-1.5 label-micro text-[0.68rem] text-paper">
            <ShieldCheck className="h-3.5 w-3.5 text-teal" />
            {siteConfig.isoCertification}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-[3px] border border-paper/20 bg-paper/10 px-3 py-1.5 label-micro text-[0.68rem] text-paper">
            <CheckCircle2 className="h-3.5 w-3.5 text-amber" />
            GST Registered: {siteConfig.gstin}
          </span>
        </div>
      </PageHero>

      {/* Stats Grid */}
      <section className="doc-container relative -mt-10 z-20" aria-label="Key company achievements">
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-[4px] border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4 shadow-lg">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-white p-7 transition-colors hover:bg-kraft/40">
                <stat.icon className="h-6 w-6 text-brand" />
                <p className="mt-4 tabular font-display text-[2.2rem] font-extrabold leading-none text-ink">
                  {stat.value}
                </p>
                <p className="mt-2 font-display text-[0.98rem] font-bold text-ink">{stat.label}</p>
                <p className="mt-1 text-[0.82rem] text-muted">{stat.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Brand introduction */}
      <section className="doc-container mt-20 md:mt-28" aria-labelledby="about-intro">
        <SectionHeading
          id="about-intro"
          index="02"
          label="Our Story"
          title="Moving is not just cargo — it's your home, your memories, and your livelihood"
          intro="Founded in 2011 in Ludhiana, Neelkanth Transport Services started with a clear belief: that moving should not be stressful, chaotic, or opaque. Over the last decade and a half, we have grown into one of North India's most respected relocation names by treating every customer's belongings as if they were our own."
        />

        <div className="mt-11 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <div className="space-y-5 text-[1.015rem] leading-[1.82] text-muted">
              <p>
                What began as a regional freight carrier has evolved into a full-spectrum moving and logistics enterprise. Today, Neelkanth Transport operates an owned fleet of over 45 closed-body container trucks and car carriers, supported by more than 120 full-time trained packing specialists, carpenters, and move managers.
              </p>
              <p>
                We do not rely on unvetted day-laborers. Every member of our handling crew is thoroughly background-verified and rigorously trained in multi-layer packing techniques: dismantling and reassembling modular furniture, securing double-door refrigerators, wrapping fragile bone china in honeycomb paper, and handling luxury electronics with anti-static bubble wrap.
              </p>
              <p>
                With regional hubs in Ludhiana, Chandigarh Tricity, and New Delhi / Gurugram, we provide seamless door-to-door relocation across Punjab, Haryana, Chandigarh, and Delhi NCR, as well as express highway routes to all major metropolitan centers in India.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="rounded-[4px] border border-rule bg-kraft/55 p-7">
              <h3 className="font-display text-[1.135rem] font-bold leading-snug text-ink">
                The Neelkanth Standard of Care
              </h3>
              <ul className="mt-5 space-y-4">
                {[
                  "Permanent, certified packing and carpentry crew on company payroll.",
                  "High-grade virgin packing supplies (5-ply cartons, bubble wrap, stretch film).",
                  "Closed-body, weather-proof container trucks with GPS convoy tracking.",
                  "Full written transit insurance coverage with immediate claim assistance.",
                  "Committed move coordinator as your single direct point of contact.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-amber" aria-hidden="true" />
                    <span className="text-[0.925rem] leading-[1.72] text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="relative mt-24 overflow-hidden bg-ink py-16 md:mt-32 md:py-24">
        <div className="paper-grain absolute inset-0 opacity-[0.16]" aria-hidden="true" />
        <div className="doc-container relative">
          <SectionHeading
            tone="dark"
            index="03"
            label="Mission & vision"
            title="Our purpose and guiding principles"
            intro="The values that direct every estimate, every packing box taped, and every vehicle dispatched."
          />
          <div className="mt-11 grid gap-6 md:grid-cols-2">
            {[
              {
                kicker: "Our Mission",
                title: "To simplify moving through care, honesty, and operational precision",
                text: "To deliver stress-free relocation experiences by providing transparent written scopes, master craftsmanship in packing, modern containerized transportation, and unwavering accountability from origin to destination.",
              },
              {
                kicker: "Our Vision",
                title: "To be North India's most recommended relocation and transport brand",
                text: "To set the benchmark for professionalism in Indian logistics, where customers, corporate institutions, and families trust us implicitly whenever life or business requires a change of address.",
              },
            ].map((card) => (
              <Reveal key={card.kicker}>
                <article className="h-full rounded-[4px] border border-paper/15 bg-paper/[0.045] p-8">
                  <span className="label-micro text-amber">{card.kicker}</span>
                  <h3 className="mt-4 font-display text-[1.42rem] font-extrabold display-tight text-paper">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-[0.965rem] leading-[1.78] text-onink/80">{card.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service principles */}
      <section className="doc-container mt-24 md:mt-32" aria-labelledby="principles-heading">
        <SectionHeading
          id="principles-heading"
          index="04"
          label="Operational Standards"
          title="Customer-focused service commitments"
          intro="Four concrete commitments that govern how every team member at Neelkanth handles your move."
        />
        <div className="mt-11 grid gap-x-12 gap-y-px md:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08} y={16}>
              <div className="group flex h-full gap-5 border-t border-ink/12 py-7">
                <p.icon className="mt-[3px] h-6 w-6 shrink-0 text-teal" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-[1.055rem] font-bold leading-snug text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 max-w-[52ch] text-[0.935rem] leading-[1.74] text-muted">
                    {p.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Workflow + gallery */}
      <section className="doc-container mt-24 md:mt-32" aria-labelledby="workflow-heading">
        <SectionHeading
          id="workflow-heading"
          index="05"
          label="Transportation & packing workflow"
          title="From initial survey to final placement"
          intro="A glimpse into our daily packing standards, fleet handling, and warehouse operations."
        />

        <div className="mt-11 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.07} y={20}>
              <figure className="group overflow-hidden rounded-[3px] border border-rule bg-white">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    width="1536"
                    height="1024"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <figcaption className="border-t border-rule p-4 text-[0.845rem] leading-[1.6] text-muted">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why structured planning matters */}
      <section className="doc-container mt-24 md:mt-32" aria-labelledby="planning-heading">
        <div className="grid gap-10 rounded-[4px] border border-rule bg-kraft/55 p-8 md:p-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <SectionHeading
            id="planning-heading"
            index="06"
            label="Professional Execution"
            title="Why structured relocation planning makes all the difference"
            intro="A move without a plan results in confusion and delays. Our structured survey and color-coded packing protocols keep everything under control."
          />
          <Reveal delay={0.08}>
            <div className="space-y-5 text-[0.975rem] leading-[1.82] text-muted">
              <p>
                Structured planning eliminates the chaos of moving day. When every room is categorized before the crew arrives, the right packing cartons, bubble layers, and foam protectors are ready on-site.
              </p>
              <p>
                When container loading follows your delivery sequence, unloading at your new home or office happens systematically room-by-room, allowing you to settle in hours faster.
              </p>
              <p className="border-l-[3px] border-amber pl-5 font-serif text-[1.115rem] italic leading-[1.62] text-ink">
                “Planning is not paperwork. It is the peace of mind that ensures not a single saucer, laptop, or wardrobe is damaged on the road.”
              </p>
              <Link
                to="/our-process"
                className="inline-flex items-center gap-2 text-[0.895rem] font-semibold text-brand transition-colors hover:text-amber-dark"
              >
                Read our step-by-step moving process
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="doc-container mt-20 md:mt-28">
        <QuoteCTA
          eyebrow="Next step"
          title="Plan your upcoming move with Neelkanth Transport."
          text="Request a free quote online or call our dispatch desk. We provide customized moving quotes tailored to your exact inventory."
          secondaryLabel="View Services"
          secondaryTo="/services"
        />
      </div>
    </>
  );
}
