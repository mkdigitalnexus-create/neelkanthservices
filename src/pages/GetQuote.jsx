import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ClipboardList,
  Loader2,
} from "lucide-react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import { WhatsAppIcon } from "../components/common/SocialIcons";
import { submitEnquiry, createReference } from "../utils/enquiry";
import { validate, todayISO } from "../utils/validation";
import { allCityNames } from "../data/locations";
import { services } from "../data/services";

const PROPERTY_TYPES = [
  "1 BHK apartment",
  "2 BHK apartment",
  "3 BHK apartment / house",
  "Independent house / villa",
  "Office / commercial space",
  "Retail / commercial unit",
  "Storage unit / warehouse",
  "Other / not sure yet",
];

const MOVING_TYPES = [
  "Local shifting (within the city)",
  "Intercity relocation (between cities)",
  "Office / commercial relocation",
  "Vehicle transportation only",
  "Storage requirement",
  "Not sure yet — please advise",
];

const VOLUME_OPTIONS = [
  "Few items / less than a room",
  "1 BHK worth of items",
  "2 BHK worth of items",
  "3 BHK or larger household",
  "Partial office / commercial load",
  "Full office / commercial load",
  "Not sure — will share a list later",
];

const STEPS = [
  { id: 0, label: "Moving details", caption: "Route, date and property" },
  { id: 1, label: "Contact details", caption: "How to reach you" },
  { id: 2, label: "Additional information", caption: "Volume and add-ons" },
];

const RULES = [
  {
    from: ["required", "min:2"],
    to: ["required", "min:2"],
    date: ["required", "date"],
    propertyType: ["required"],
    movingType: ["required"],
  },
  {
    name: ["required", "min:2"],
    phone: ["required", "mobile"],
    email: ["email"],
  },
  {
    volume: ["required"],
  },
];

function Field({ id, label, required, error, hint, children }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="label-micro text-[0.615rem] text-ink/70">
        {label}
        {required ? <span className="ml-1 text-amber-dark">*</span> : (
          <span className="ml-1.5 font-medium normal-case tracking-normal text-[0.675rem] text-muted">
            (optional)
          </span>
        )}
      </label>
      <div className="mt-2">{children}</div>
      {hint && !error ? <p className="mt-1.5 text-[0.735rem] text-muted">{hint}</p> : null}
      {error ? (
        <p role="alert" className="mt-1.5 flex items-start gap-1.5 text-[0.765rem] font-medium text-[#B3372A]">
          <AlertCircle className="mt-[1px] h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

function ChoiceGroup({ legend, name, options, value, onChange, error, columns = 2 }) {
  return (
    <fieldset className="flex flex-col">
      <legend className="label-micro text-[0.615rem] text-ink/70">
        {legend}
        <span className="ml-1 text-amber-dark">*</span>
      </legend>
      <div className={`mt-2.5 grid gap-2 ${columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
        {options.map((opt) => {
          const selected = value === opt.value;
          return (
            <label
              key={opt.value}
              className={`flex cursor-pointer items-start gap-2.5 rounded-[3px] border px-3.5 py-3 text-[0.875rem] leading-[1.5] transition-colors ${
                selected
                  ? "border-brand bg-brand/8 text-ink"
                  : "border-rule bg-white text-muted hover:border-ink/35"
              }`}
            >
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={selected}
                onChange={onChange}
                className="sr-only"
              />
              <span
                className={`mt-[2px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full border-2 ${
                  selected ? "border-brand bg-brand text-white" : "border-ink/25"
                }`}
                aria-hidden="true"
              >
                {selected ? <Check className="h-3 w-3" /> : null}
              </span>
              <span>{opt.label}</span>
            </label>
          );
        })}
      </div>
      {error ? (
        <p role="alert" className="mt-2 flex items-center gap-1.5 text-[0.765rem] font-medium text-[#B3372A]">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}

export default function GetQuote() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({
    from: "",
    to: "",
    date: "",
    propertyType: "",
    movingType: "",
    name: "",
    phone: "",
    email: "",
    volume: "",
    packingNeeded: "yes",
    vehicleNeeded: "no",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [reference, setReference] = useState(null);

  const update = (key) => (e) => {
    const val = e?.target ? e.target.value : e;
    setValues((v) => ({ ...v, [key]: val }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const validateStep = (index) => {
    const found = validate(values, RULES[index]);
    setErrors(found);
    return found;
  };

  const goNext = () => {
    const found = validateStep(step);
    if (Object.keys(found).length > 0) {
      const firstKey = Object.keys(found)[0];
      document.getElementById(`q-${firstKey}`)?.focus();
      return;
    }
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  const goBack = () => {
    setErrors({});
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validateStep(step);
    if (Object.keys(found).length > 0) {
      const firstKey = Object.keys(found)[0];
      document.getElementById(`q-${firstKey}`)?.focus();
      return;
    }
    setStatus("submitting");
    setReference(createReference());
    await submitEnquiry({ ...values, source: "Multi-step quotation form" });
    setStatus("done");
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  const inputClass = (key) =>
    `field-rule h-12 w-full px-3.5 text-[0.94rem] text-ink placeholder:text-muted/70 ${
      errors[key] ? "field-error" : ""
    }`;

  const summary = useMemo(
    () => [
      { label: "Moving from", value: values.from },
      { label: "Moving to", value: values.to },
      { label: "Preferred date", value: values.date },
      { label: "Property type", value: values.propertyType },
      { label: "Moving type", value: values.movingType },
      { label: "Full name", value: values.name },
      { label: "Phone", value: values.phone },
      { label: "Email", value: values.email || "Not provided" },
      { label: "Approximate volume", value: values.volume },
      { label: "Packing assistance", value: values.packingNeeded === "yes" ? "Required" : "Not required" },
      { label: "Vehicle transportation", value: values.vehicleNeeded === "yes" ? "Required" : "Not required" },
      { label: "Additional requirements", value: values.notes || "None specified" },
    ],
    [values]
  );

  return (
    <>
      <Seo
        title="Get a Free Moving Quote | Neelkanth Transport Services"
        description="Request a moving quotation for household shifting, office relocation, packing, vehicle transportation or intercity moves. Share your route, date and item volume in a simple multi-step form."
        path="/get-a-quote"
        image="assets/hero/hero-household.jpg"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Get a Quote" }]}
      />

      <PageHero
        index="01"
        label="Request a quotation"
        title="Get a free moving quote"
        intro="Three simple steps: your route details, contact information, and inventory scope. Receive a transparent, itemized moving quotation with no hidden costs."
        image="assets/hero/hero-household.jpg"
        imageAlt="Movers carrying a blanket-wrapped wardrobe up a loading ramp into a transport truck"
        breadcrumbs={[{ label: "Get a Quote" }]}
      />

      <section className="doc-container mt-12 md:mt-16" aria-labelledby="quote-form-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-14">
          <div>
            <AnimatePresence mode="wait">
              {status === "done" ? (
                <motion.div
                  key="done"
                  initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  role="status"
                  aria-live="polite"
                  className="rounded-[4px] border border-rule bg-white p-8 md:p-10 shadow-sm"
                >
                  <div className="inline-flex h-13 w-13 items-center justify-center rounded-full bg-teal/12 text-teal">
                    <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h2 className="mt-6 font-display font-extrabold display-tight text-[clamp(1.75rem,3.6vw,2.35rem)] text-ink">
                    Quotation Request Registered!
                  </h2>
                  <p className="mt-4 max-w-[62ch] text-[1.015rem] leading-[1.78] text-muted">
                    Thank you, <strong className="text-ink">{values.name}</strong>. Your relocation details have been logged in our dispatch registry. Our certified move surveyor is calculating the vehicle sizing and packing material requirements. We will contact you at <strong className="text-ink">{values.phone}</strong> within 30 minutes with your formal quotation.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-6 rounded-[3px] border border-dashed border-rule bg-kraft/60 p-5">
                    <div>
                      <p className="label-micro text-[0.6rem] text-muted">Official Quote Reference</p>
                      <p className="tabular mt-1 font-display text-[1.2rem] font-bold text-brand">{reference}</p>
                    </div>
                    <div>
                      <p className="label-micro text-[0.6rem] text-muted">Submitted on</p>
                      <p className="tabular mt-1 text-[0.94rem] text-ink font-medium">
                        {new Date().toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <div>
                      <p className="label-micro text-[0.6rem] text-muted">Status</p>
                      <span className="mt-1 inline-flex items-center rounded-full bg-teal/15 px-2.5 py-0.5 text-[0.75rem] font-semibold text-teal">
                        Surveyor Assigned
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-9 label-micro text-ink/70">Request summary</h3>
                  <dl className="mt-4 grid gap-px overflow-hidden rounded-[3px] border border-rule bg-rule sm:grid-cols-2">
                    {summary.map((row) => (
                      <div key={row.label} className="bg-white px-4 py-3">
                        <dt className="label-micro text-[0.585rem] text-muted">{row.label}</dt>
                        <dd className="mt-1.5 text-[0.925rem] leading-[1.5] text-ink font-medium">{row.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={`https://wa.me/919872834910?text=${encodeURIComponent(`Hello Neelkanth Transport, I have submitted a quotation request on your website with Quote Ref: ${reference}. My name is ${values.name}. Moving from ${values.from} to ${values.to}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 items-center gap-2 rounded-[3px] border border-[#25D366] bg-[#25D366] px-6 text-[0.935rem] font-semibold text-white transition-colors hover:bg-[#1fae53]"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      Connect on WhatsApp with Quote Ref
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setStep(0);
                        setReference(null);
                        setValues({
                          from: "",
                          to: "",
                          date: "",
                          propertyType: "",
                          movingType: "",
                          name: "",
                          phone: "",
                          email: "",
                          volume: "",
                          packingNeeded: "yes",
                          vehicleNeeded: "no",
                          notes: "",
                        });
                      }}
                      className="inline-flex h-12 items-center rounded-[3px] border border-ink px-6 text-[0.935rem] font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
                    >
                      Start another request
                    </button>
                    <Link
                      to="/services"
                      className="inline-flex h-12 items-center gap-2 rounded-[3px] border border-amber bg-amber px-6 text-[0.935rem] font-semibold text-[#20160A] transition-colors hover:bg-[#f0a03c]"
                    >
                      Explore our services
                      <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key={`step-${step}`}
                  onSubmit={onSubmit}
                  noValidate
                  initial={reduce ? { opacity: 1 } : { opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduce ? { opacity: 1 } : { opacity: 0, x: -18 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-[4px] border border-rule bg-white p-7 md:p-9"
                >
                  {/* Progress indicator */}
                  <ol className="flex items-stretch gap-2" aria-label="Form progress">
                    {STEPS.map((s, i) => {
                      const complete = i < step;
                      const current = i === step;
                      return (
                        <li key={s.id} className="flex-1">
                          <button
                            type="button"
                            onClick={() => (i < step ? setStep(i) : null)}
                            disabled={i > step}
                            aria-current={current ? "step" : undefined}
                            className={`w-full rounded-[3px] border px-3 py-3 text-left transition-colors ${
                              current
                                ? "border-brand bg-brand/8"
                                : complete
                                ? "border-teal/40 bg-teal/8"
                                : "border-rule bg-kraft/45"
                            } ${i < step ? "cursor-pointer hover:border-brand" : "cursor-default"}`}
                          >
                            <span className="flex items-center gap-2">
                              <span
                                className={`tabular label-micro text-[0.585rem] ${
                                  current ? "text-brand" : complete ? "text-teal" : "text-muted"
                                }`}
                              >
                                Step {i + 1}
                              </span>
                              {complete ? (
                                <Check className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
                              ) : null}
                            </span>
                            <span
                              className={`mt-1.5 block text-[0.855rem] font-semibold leading-tight ${
                                current ? "text-ink" : complete ? "text-ink/85" : "text-muted"
                              }`}
                            >
                              {s.label}
                            </span>
                            <span className="mt-1 hidden text-[0.735rem] leading-tight text-muted sm:block">
                              {s.caption}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ol>

                  <div className="mt-8">
                    <h2 className="font-display text-[1.38rem] font-extrabold display-tight text-ink">
                      {STEPS[step].label}
                    </h2>
                    <p className="mt-2 text-[0.925rem] leading-[1.68] text-muted">
                      {step === 0 &&
                        "Tell us where the move starts and ends, when you would like it to happen and what kind of property is involved."}
                      {step === 1 &&
                        "So the team can reach you to discuss the scope. A phone number is required; an email address is optional."}
                      {step === 2 &&
                        "A rough sense of the item volume and any add-ons helps the discussion move faster."}
                    </p>
                  </div>

                  {/* Step content */}
                  <div className="mt-8">
                    {step === 0 ? (
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Field id="q-from" label="Moving from" required error={errors.from}>
                          <input
                            id="q-from"
                            type="text"
                            value={values.from}
                            onChange={update("from")}
                            placeholder="City or locality"
                            autoComplete="address-level2"
                            list="q-cities"
                            aria-invalid={Boolean(errors.from)}
                            className={inputClass("from")}
                          />
                        </Field>
                        <Field id="q-to" label="Moving to" required error={errors.to}>
                          <input
                            id="q-to"
                            type="text"
                            value={values.to}
                            onChange={update("to")}
                            placeholder="City or locality"
                            autoComplete="address-level2"
                            list="q-cities"
                            aria-invalid={Boolean(errors.to)}
                            className={inputClass("to")}
                          />
                        </Field>
                        <Field
                          id="q-date"
                          label="Preferred moving date"
                          required
                          error={errors.date}
                          hint="Choose today or a later date"
                        >
                          <input
                            id="q-date"
                            type="date"
                            min={todayISO()}
                            value={values.date}
                            onChange={update("date")}
                            aria-invalid={Boolean(errors.date)}
                            className={inputClass("date")}
                          />
                        </Field>
                        <Field id="q-propertyType" label="Property type" required error={errors.propertyType}>
                          <select
                            id="q-propertyType"
                            value={values.propertyType}
                            onChange={update("propertyType")}
                            aria-invalid={Boolean(errors.propertyType)}
                            className={inputClass("propertyType")}
                          >
                            <option value="">Select property type</option>
                            {PROPERTY_TYPES.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                        </Field>
                        <datalist id="q-cities">
                          {allCityNames.map((c) => (
                            <option key={c} value={c} />
                          ))}
                        </datalist>

                        <div className="sm:col-span-2">
                          <ChoiceGroup
                            legend="Moving type"
                            name="movingType"
                            value={values.movingType}
                            onChange={update("movingType")}
                            error={errors.movingType}
                            options={MOVING_TYPES.map((m) => ({ label: m, value: m }))}
                          />
                        </div>
                      </div>
                    ) : null}

                    {step === 1 ? (
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Field id="q-name" label="Full name" required error={errors.name}>
                          <input
                            id="q-name"
                            type="text"
                            value={values.name}
                            onChange={update("name")}
                            placeholder="Your full name"
                            autoComplete="name"
                            aria-invalid={Boolean(errors.name)}
                            className={inputClass("name")}
                          />
                        </Field>
                        <Field
                          id="q-phone"
                          label="Phone number"
                          required
                          error={errors.phone}
                          hint="10-digit Indian mobile number"
                        >
                          <input
                            id="q-phone"
                            type="tel"
                            inputMode="numeric"
                            value={values.phone}
                            onChange={update("phone")}
                            placeholder="98XXXXXXXX"
                            autoComplete="tel"
                            aria-invalid={Boolean(errors.phone)}
                            className={inputClass("phone")}
                          />
                        </Field>
                        <div className="sm:col-span-2">
                          <Field
                            id="q-email"
                            label="Email address"
                            error={errors.email}
                            hint="Optional — only used if you would like a written summary"
                          >
                            <input
                              id="q-email"
                              type="email"
                              value={values.email}
                              onChange={update("email")}
                              placeholder="you@example.com"
                              autoComplete="email"
                              aria-invalid={Boolean(errors.email)}
                              className={inputClass("email")}
                            />
                          </Field>
                        </div>
                      </div>
                    ) : null}

                    {step === 2 ? (
                      <div className="grid gap-7">
                        <Field id="q-volume" label="Approximate item volume or household size" required error={errors.volume}>
                          <select
                            id="q-volume"
                            value={values.volume}
                            onChange={update("volume")}
                            aria-invalid={Boolean(errors.volume)}
                            className={inputClass("volume")}
                          >
                            <option value="">Select an approximate volume</option>
                            {VOLUME_OPTIONS.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                        </Field>

                        <ChoiceGroup
                          legend="Packing assistance required?"
                          name="packingNeeded"
                          value={values.packingNeeded}
                          onChange={update("packingNeeded")}
                          options={[
                            { label: "Yes, please arrange packing", value: "yes" },
                            { label: "No, I will pack myself", value: "no" },
                          ]}
                        />

                        <ChoiceGroup
                          legend="Vehicle transportation required?"
                          name="vehicleNeeded"
                          value={values.vehicleNeeded}
                          onChange={update("vehicleNeeded")}
                          options={[
                            { label: "Yes, a car or bike also needs to move", value: "yes" },
                            { label: "No, household items only", value: "no" },
                          ]}
                        />

                        <Field
                          id="q-notes"
                          label="Additional requirements"
                          hint="Special items, access constraints, storage needs, preferred timings…"
                        >
                          <textarea
                            id="q-notes"
                            rows={5}
                            value={values.notes}
                            onChange={update("notes")}
                            placeholder="Tell us anything else that would help us understand the move."
                            className="field-rule w-full px-3.5 py-3 text-[0.94rem] leading-[1.6] text-ink placeholder:text-muted/70"
                          />
                        </Field>

                        <div className="rounded-[3px] border border-rule bg-kraft/55 px-4 py-3 text-[0.815rem] leading-[1.62] text-muted">
                          <strong className="text-ink">Transparent Pricing Policy:</strong> Every relocation has unique packing, elevator access, and volume requirements. Submitting this form initiates an itemized quotation verified against your exact inventory with no hidden fees or destination charges.
                        </div>
                      </div>
                    ) : null}
                  </div>

                  {/* Controls */}
                  <div className="mt-9 flex flex-col-reverse gap-3 border-t border-rule pt-7 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      {step > 0 ? (
                        <button
                          type="button"
                          onClick={goBack}
                          className="inline-flex h-12 items-center gap-2 rounded-[3px] border border-ink/25 px-5 text-[0.925rem] font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                        >
                          <ArrowLeft className="h-[18px] w-[18px]" aria-hidden="true" />
                          Previous
                        </button>
                      ) : (
                        <Link
                          to="/contact"
                          className="inline-flex h-12 items-center rounded-[3px] border border-ink/25 px-5 text-[0.925rem] font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                        >
                          Prefer to talk first?
                        </Link>
                      )}
                    </div>

                    {step < STEPS.length - 1 ? (
                      <button
                        type="button"
                        onClick={goNext}
                        className="inline-flex h-12 items-center gap-2 rounded-[3px] border border-amber bg-amber px-7 text-[0.935rem] font-semibold text-[#20160A] shadow-[0_2px_0_0_#B96F12] transition-colors hover:bg-[#f0a03c]"
                      >
                        Continue
                        <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="inline-flex h-12 items-center gap-2 rounded-[3px] border border-amber bg-amber px-7 text-[0.935rem] font-semibold text-[#20160A] shadow-[0_2px_0_0_#B96F12] transition-colors hover:bg-[#f0a03c] disabled:opacity-70"
                      >
                        {status === "submitting" ? (
                          <>
                            <Loader2 className="h-[18px] w-[18px] animate-spin" aria-hidden="true" />
                            Preparing request…
                          </>
                        ) : (
                          <>
                            <ClipboardList className="h-[18px] w-[18px]" aria-hidden="true" />
                            Submit quotation request
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <Reveal delay={0.08}>
            <aside className="lg:sticky lg:top-32">
              <div className="rounded-[4px] border border-rule bg-kraft/55 p-6">
                <h2 className="label-micro text-amber-dark">What happens next</h2>
                <ol className="mt-5 space-y-4">
                  {[
                    "Your enquiry details are reviewed against the route and date.",
                    "The scope — packing, handling and transport — is discussed with you.",
                    "A quotation is prepared for the agreed scope.",
                  ].map((text, i) => (
                    <li key={text} className="flex gap-3 border-t border-ink/12 pt-3.5">
                      <span className="tabular font-display text-[1.05rem] font-extrabold leading-none text-amber-dark">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[0.875rem] leading-[1.66] text-muted">{text}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-5 rounded-[4px] border border-rule bg-white p-6">
                <h2 className="label-micro text-ink/70">Useful services</h2>
                <ul className="mt-4 space-y-2">
                  {services.slice(0, 5).map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/services/${s.slug}`}
                        className="flex items-center justify-between text-[0.875rem] text-ink transition-colors hover:text-brand"
                      >
                        {s.name}
                        <ArrowRight className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
