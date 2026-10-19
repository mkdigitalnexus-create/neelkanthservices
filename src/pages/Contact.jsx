import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Info,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/common/Reveal";
import Accordion from "../components/common/Accordion";
import QuoteCTA from "../components/common/QuoteCTA";
import { siteConfig, isContactConfigured, waHref } from "../config/siteConfig";
import { WhatsAppIcon } from "../components/common/SocialIcons";
import { submitEnquiry, createReference } from "../utils/enquiry";
import { validate } from "../utils/validation";
import { faqs } from "../data/faqs";

const CATEGORIES = [
  "Household shifting enquiry",
  "Office / commercial relocation",
  "Packing and unpacking",
  "Loading and unloading",
  "Car and bike transportation",
  "Intercity relocation",
  "Storage and warehousing",
  "Something else",
];

const RULES = {
  name: ["required", "min:2"],
  phone: ["required", "mobile"],
  email: ["email"],
  category: ["required"],
  message: ["required", "min:10"],
};

function InfoRow({ icon: Icon, label, value, href, hrefLabel, note }) {
  return (
    <div className="flex gap-4 border-t border-ink/12 py-5">
      <Icon className="mt-[3px] h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
      <div className="flex-1">
        <p className="label-micro text-[0.6rem] text-muted">{label}</p>
        {href ? (
          <a
            href={href}
            className="mt-1.5 inline-block text-[1.025rem] font-semibold text-ink transition-colors hover:text-brand"
          >
            {value}
          </a>
        ) : (
          <p className="mt-1.5 text-[1.025rem] font-semibold text-ink">{value}</p>
        )}
        {note ? <p className="mt-1.5 text-[0.815rem] leading-[1.6] text-muted">{note}</p> : null}
      </div>
    </div>
  );
}

export default function Contact() {
  const reduce = useReducedMotion();
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    category: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [reference, setReference] = useState(null);

  const update = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values, RULES);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(`c-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    setStatus("submitting");
    setReference(createReference());
    await submitEnquiry({ ...values, source: "Contact page enquiry form" });
    setStatus("done");
  };

  const inputClass = (key) =>
    `field-rule h-12 w-full px-3.5 text-[0.94rem] text-ink placeholder:text-muted/70 ${
      errors[key] ? "field-error" : ""
    }`;

  const phoneConfigured = isContactConfigured("phone");
  const emailConfigured = isContactConfigured("email");
  const waConfigured = isContactConfigured("whatsapp");

  return (
    <>
      <Seo
        title="Contact Us | Neelkanth Transport Services"
        description="Get in touch with Neelkanth Transport Services for household shifting, office relocation, packing, vehicle transportation and intercity moving enquiries across Punjab, Haryana, Chandigarh and Delhi NCR."
        path="/contact"
        image="assets/hero/hero-office.jpg"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact Us" }]}
      />

      <PageHero
        index="01"
        label="Contact us"
        title="Talk to us about the move you are planning"
        intro="Whether it is a full household shift, a commercial relocation, or a single question about a route — send the details through and the discussion starts there."
        image="assets/hero/hero-office.jpg"
        imageAlt="Movers wheeling stacked crates and wrapped office chairs through a building loading dock"
        breadcrumbs={[{ label: "Contact Us" }]}
      >
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={`tel:${siteConfig.contact.phoneHref}`}
            className="inline-flex h-12 items-center gap-2 rounded-[3px] border border-amber bg-amber px-6 text-[0.935rem] font-semibold text-[#20160A] transition-colors hover:bg-[#f0a03c]"
          >
            <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
            Call {siteConfig.contact.phone}
          </a>
          <a
            href="tel:18002703388"
            className="inline-flex h-12 items-center gap-2 rounded-[3px] border border-paper/38 px-6 text-[0.935rem] font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
            Toll-Free: 1800 270 3388
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex h-12 items-center gap-2 rounded-[3px] border border-paper/38 px-6 text-[0.935rem] font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
            Email Us
          </a>
          <a
            href={waHref("Hello Neelkanth Transport, I would like to enquire about a move.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-[3px] border border-[#25D366] bg-[#25D366]/20 px-6 text-[0.935rem] font-semibold text-paper transition-colors hover:bg-[#25D366] hover:text-[#0C1E10]"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" aria-hidden="true" />
            WhatsApp Us
          </a>
        </div>
      </PageHero>

      {/* Contact details + enquiry form */}
      <section className="doc-container mt-16 md:mt-24" aria-labelledby="contact-heading">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <SectionHeading
              id="contact-heading"
              index="02"
              label="Contact details"
              title="Head Office &amp; Branch Hubs"
              intro="Get in touch directly with our dispatch desk, corporate booking team, or customer care coordinators across Punjab, Chandigarh Tricity, and Delhi NCR."
            />

            <div className="mt-9">
              <InfoRow
                icon={Phone}
                label="Direct phone &amp; helpline"
                value={`${siteConfig.contact.phone} • Toll-Free: 1800 270 3388`}
                href={`tel:${siteConfig.contact.phoneHref}`}
                note="Lines open Mon–Sat 8:00 AM – 8:30 PM. 24/7 dedicated assistance for active moves."
              />
              <InfoRow
                icon={Mail}
                label="Email enquiries"
                value={siteConfig.contact.email}
                href={`mailto:${siteConfig.contact.email}`}
                note="General: info@neelkanthtransport.com • Quotations: quotes@neelkanthtransport.com"
              />
              <InfoRow
                icon={MapPin}
                label="Head office"
                value={siteConfig.contact.address}
                note="Plot No. 48, Transport Nagar, Phase 1, Industrial Area, Ludhiana, Punjab 141003"
              />

              {/* Branch Hubs list */}
              <div className="border-t border-ink/12 py-5">
                <p className="label-micro text-[0.6rem] text-muted">Regional branch hubs</p>
                <div className="mt-3 space-y-3">
                  <div className="rounded-[3px] border border-rule bg-kraft/40 p-3.5">
                    <p className="font-semibold text-[0.915rem] text-ink">Chandigarh Tricity Hub</p>
                    <p className="mt-1 text-[0.82rem] text-muted">SCO 142-143, Sector 82, JLPL Industrial Area, Mohali 160055</p>
                    <p className="mt-1 text-[0.8rem] text-brand font-medium">Direct: +91 98884 52190</p>
                  </div>
                  <div className="rounded-[3px] border border-rule bg-kraft/40 p-3.5">
                    <p className="font-semibold text-[0.915rem] text-ink">Delhi NCR Logistics Hub</p>
                    <p className="mt-1 text-[0.82rem] text-muted">Khasra 42/15, Kapashera Border, Bijwasan Road, New Delhi 110037</p>
                    <p className="mt-1 text-[0.8rem] text-brand font-medium">Direct: +91 98112 67430</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-ink/12 py-5">
                <div className="flex gap-4">
                  <Clock className="mt-[3px] h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <div className="flex-1">
                    <p className="label-micro text-[0.6rem] text-muted">Working hours</p>
                    <dl className="mt-2.5 space-y-1.5">
                      {siteConfig.contact.businessHours.map((row) => (
                        <div key={row.day} className="flex items-baseline justify-between gap-4">
                          <dt className="text-[0.905rem] text-ink">{row.day}</dt>
                          <dd className="tabular text-[0.905rem] text-muted">{row.time}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-3 text-[0.815rem] leading-[1.6] text-muted">
                      {siteConfig.contact.responseNote}
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t border-ink/12" aria-hidden="true" />
            </div>

            {/* Service enquiry categories */}
            <Reveal delay={0.08}>
              <div className="mt-9 rounded-[4px] border border-rule bg-kraft/55 p-6">
                <h2 className="label-micro text-amber-dark">Services available for enquiry</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {CATEGORIES.map((c) => (
                    <li
                      key={c}
                      className="rounded-[2px] border border-rule bg-white px-3 py-1.5 text-[0.815rem] text-ink/85"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Enquiry form */}
          <Reveal delay={0.05}>
            <div className="rounded-[4px] border border-rule bg-white shadow-sm">
              <div className="border-b border-rule px-7 py-6">
                <h2 className="font-display text-[1.38rem] font-extrabold display-tight text-ink">
                  Send an enquiry
                </h2>
                <p className="mt-2 text-[0.905rem] leading-[1.66] text-muted">
                  Share your move requirements below. Our move coordinator will contact you within 15–30 minutes with full details.
                </p>
              </div>

              <div className="px-7 py-7">
                <AnimatePresence mode="wait">
                  {status === "done" ? (
                    <motion.div
                      key="success"
                      role="status"
                      aria-live="polite"
                      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="flex min-h-[26rem] flex-col justify-center"
                    >
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal/12 text-teal">
                        <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="mt-5 font-display text-[1.42rem] font-extrabold display-tight text-ink">
                        Enquiry Registered Successfully!
                      </h3>
                      <p className="mt-3 text-[0.955rem] leading-[1.74] text-muted">
                        Thank you, <strong className="text-ink">{values.name}</strong>. Your requirement has been routed to our regional move coordination team. One of our senior moving specialists will call you at <strong className="text-ink">{values.phone}</strong> within 15–30 minutes to confirm inventory volume and prepare your personalized quotation.
                      </p>
                      <div className="mt-6 rounded-[3px] border border-dashed border-rule bg-kraft/60 p-4">
                        <p className="label-micro text-[0.6rem] text-muted">Your enquiry reference number</p>
                        <p className="tabular mt-1 font-display text-[1.15rem] font-bold text-brand">
                          {reference}
                        </p>
                      </div>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <a
                          href={`https://wa.me/919872834910?text=${encodeURIComponent(`Hello Neelkanth Transport, I have submitted an enquiry on your website with Ref: ${reference}. My name is ${values.name}.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-12 items-center gap-2 rounded-[3px] border border-[#25D366] bg-[#25D366] px-6 text-[0.925rem] font-semibold text-white transition-colors hover:bg-[#1fae53]"
                        >
                          <WhatsAppIcon className="h-[18px] w-[18px]" />
                          Connect on WhatsApp Now
                        </a>
                        <button
                          type="button"
                          onClick={() => {
                            setStatus("idle");
                            setValues({ name: "", phone: "", email: "", category: "", message: "" });
                          }}
                          className="inline-flex h-12 items-center rounded-[3px] border border-ink px-6 text-[0.925rem] font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
                        >
                          Send another enquiry
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={onSubmit}
                      noValidate
                      exit={{ opacity: 0 }}
                      className="grid gap-6 sm:grid-cols-2"
                    >
                      <div>
                        <label htmlFor="c-name" className="label-micro text-[0.615rem] text-ink/70">
                          Full name<span className="ml-1 text-amber-dark">*</span>
                        </label>
                        <input
                          id="c-name"
                          type="text"
                          value={values.name}
                          onChange={update("name")}
                          placeholder="Your full name"
                          autoComplete="name"
                          aria-invalid={Boolean(errors.name)}
                          className={`mt-2 ${inputClass("name")}`}
                        />
                        {errors.name ? (
                          <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-[0.765rem] font-medium text-[#B3372A]">
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            {errors.name}
                          </p>
                        ) : null}
                      </div>

                      <div>
                        <label htmlFor="c-phone" className="label-micro text-[0.615rem] text-ink/70">
                          Phone number<span className="ml-1 text-amber-dark">*</span>
                        </label>
                        <input
                          id="c-phone"
                          type="tel"
                          inputMode="numeric"
                          value={values.phone}
                          onChange={update("phone")}
                          placeholder="98XXXXXXXX"
                          autoComplete="tel"
                          aria-invalid={Boolean(errors.phone)}
                          className={`mt-2 ${inputClass("phone")}`}
                        />
                        {errors.phone ? (
                          <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-[0.765rem] font-medium text-[#B3372A]">
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            {errors.phone}
                          </p>
                        ) : null}
                      </div>

                      <div>
                        <label htmlFor="c-email" className="label-micro text-[0.615rem] text-ink/70">
                          Email address
                          <span className="ml-1.5 font-medium normal-case tracking-normal text-[0.675rem] text-muted">
                            (optional)
                          </span>
                        </label>
                        <input
                          id="c-email"
                          type="email"
                          value={values.email}
                          onChange={update("email")}
                          placeholder="you@example.com"
                          autoComplete="email"
                          aria-invalid={Boolean(errors.email)}
                          className={`mt-2 ${inputClass("email")}`}
                        />
                        {errors.email ? (
                          <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-[0.765rem] font-medium text-[#B3372A]">
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            {errors.email}
                          </p>
                        ) : null}
                      </div>

                      <div>
                        <label htmlFor="c-category" className="label-micro text-[0.615rem] text-ink/70">
                          Enquiry category<span className="ml-1 text-amber-dark">*</span>
                        </label>
                        <select
                          id="c-category"
                          value={values.category}
                          onChange={update("category")}
                          aria-invalid={Boolean(errors.category)}
                          className={`mt-2 ${inputClass("category")}`}
                        >
                          <option value="">Select a category</option>
                          {CATEGORIES.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                        {errors.category ? (
                          <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-[0.765rem] font-medium text-[#B3372A]">
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            {errors.category}
                          </p>
                        ) : null}
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="c-message" className="label-micro text-[0.615rem] text-ink/70">
                          Your message<span className="ml-1 text-amber-dark">*</span>
                        </label>
                        <textarea
                          id="c-message"
                          rows={6}
                          value={values.message}
                          onChange={update("message")}
                          placeholder="Tell us about the move — route, date, property type and anything unusual."
                          aria-invalid={Boolean(errors.message)}
                          className={`mt-2 field-rule w-full px-3.5 py-3 text-[0.94rem] leading-[1.6] text-ink placeholder:text-muted/70 ${
                            errors.message ? "field-error" : ""
                          }`}
                        />
                        {errors.message ? (
                          <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-[0.765rem] font-medium text-[#B3372A]">
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            {errors.message}
                          </p>
                        ) : null}
                      </div>

                      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-[38ch] text-[0.775rem] leading-[1.6] text-muted">
                          Nothing is sent to a server in this demo build.
                        </p>
                        <button
                          type="submit"
                          disabled={status === "submitting"}
                          className="inline-flex h-12 items-center gap-2 rounded-[3px] border border-amber bg-amber px-7 text-[0.935rem] font-semibold text-[#20160A] shadow-[0_2px_0_0_#B96F12] transition-colors hover:bg-[#f0a03c] disabled:opacity-70"
                        >
                          {status === "submitting" ? (
                            <>
                              <Loader2 className="h-[18px] w-[18px] animate-spin" aria-hidden="true" />
                              Preparing…
                            </>
                          ) : (
                            <>
                              <Send className="h-[18px] w-[18px]" aria-hidden="true" />
                              Send enquiry
                            </>
                          )}
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Support FAQ */}
      <section className="doc-container mt-24 md:mt-32" aria-labelledby="support-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          <SectionHeading
            id="support-heading"
            index="03"
            label="Contact support"
            title="Before you send a message"
            intro="A few questions that often come up around contacting the team, requesting quotations and understanding what happens after an enquiry."
          />
          <Reveal delay={0.05}>
            <Accordion items={faqs.filter((f) => ["quote-request", "estimate-details", "quote-accuracy", "moving-date"].includes(f.id))} defaultOpenId="quote-request" />
          </Reveal>
        </div>
      </section>

      <div className="doc-container mt-20 md:mt-28">
        <QuoteCTA
          eyebrow="Prefer a structured enquiry?"
          title="Use the quotation form for a detailed request."
          text="The multi-step form collects the route, date, property type, item volume and add-ons — everything needed to start a proper discussion."
          secondaryLabel="Our Process"
          secondaryTo="/our-process"
        />
      </div>
    </>
  );
}
