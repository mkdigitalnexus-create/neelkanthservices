import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AlertCircle, ArrowRight, CheckCircle2, ClipboardList, Loader2 } from "lucide-react";
import { WhatsAppIcon } from "../common/SocialIcons";
import { submitEnquiry, createReference } from "../../utils/enquiry";
import { validate, todayISO } from "../../utils/validation";
import { allCityNames } from "../../data/locations";

const PROPERTY_TYPES = [
  "Household Shifting (1-2 BHK)",
  "Household Shifting (3+ BHK / Villa)",
  "Commercial / Office Relocation",
  "Full Truck Load (FTL) Freight",
  "Part Truck Load (PTL) / Cargo",
  "Industrial Machinery Transport",
  "Car / Two-Wheeler Transportation",
  "Local Same-Day Shifting",
  "Storage / Safe Warehousing",
  "Commercial Fleet / Contract Logistics",
  "Other / Custom Requirement",
];

const RULES = {
  from: ["required", "min:2"],
  to: ["required", "min:2"],
  date: ["required", "date"],
  propertyType: ["required"],
  name: ["required", "min:2"],
  phone: ["required", "mobile"],
};

function Field({ id, label, required, error, children, hint }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="label-micro text-[0.615rem] text-ink/70">
        {label}
        {required ? <span className="ml-1 text-amber-dark">*</span> : null}
      </label>
      <div className="mt-2">{children}</div>
      {hint && !error ? <p className="mt-1.5 text-[0.72rem] text-muted">{hint}</p> : null}
      {error ? (
        <p role="alert" className="mt-1.5 flex items-start gap-1.5 text-[0.745rem] font-medium text-[#B3372A]">
          <AlertCircle className="mt-[1px] h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Quick moving enquiry form styled as a consignment-note panel.
 * Front-end only: submissions resolve locally and are never sent to a server.
 */
export default function QuickQuoteForm() {
  const reduce = useReducedMotion();
  const [values, setValues] = useState({
    from: "",
    to: "",
    date: "",
    propertyType: "",
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | done
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
    if (Object.keys(found).length > 0) {
      const firstKey = Object.keys(found)[0];
      document.getElementById(`qq-${firstKey}`)?.focus();
      return;
    }
    setStatus("submitting");
    setReference(createReference());
    await submitEnquiry({ ...values, source: "Homepage quick enquiry form" });
    setStatus("done");
  };

  const reset = () => {
    setValues({ from: "", to: "", date: "", propertyType: "", name: "", phone: "" });
    setErrors({});
    setReference(null);
    setStatus("idle");
  };

  const inputClass = (key) =>
    `field-rule h-11 w-full px-3 text-[0.915rem] text-ink placeholder:text-muted/70 ${
      errors[key] ? "field-error" : ""
    }`;

  return (
    <div className="relative overflow-hidden rounded-[4px] border border-rule bg-[#FFFDF9] shadow-[0_30px_70px_-34px_rgba(14,36,57,0.55)]">
      <div className="absolute inset-x-0 top-0 h-[5px] bg-amber" aria-hidden="true" />
      <div className="hatch-soft absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="relative grid gap-0 lg:grid-cols-[19rem_1fr]">
        {/* Left: the "waybill" header */}
        <div className="border-b border-rule bg-kraft/70 px-6 py-7 lg:border-b-0 lg:border-r lg:px-8">
          <div className="flex items-center gap-2">
            <ClipboardList className="h-4 w-4 text-amber-dark" aria-hidden="true" />
            <span className="label-micro text-[0.615rem] text-amber-dark">Quick enquiry</span>
          </div>
          <h2 className="mt-3 font-display font-extrabold display-tight text-[1.55rem] text-ink">
            Request a moving quotation
          </h2>
          <p className="mt-3 text-[0.875rem] leading-[1.68] text-muted">
            Fill in the essentials and we will prepare the enquiry details for the team to discuss.
          </p>
          <div className="mt-6 space-y-2.5 border-t border-rule pt-5">
            {["No obligation", "Front-end demo — nothing is sent", "Editable before you submit"].map(
              (t) => (
                <p key={t} className="flex items-start gap-2 text-[0.8rem] text-muted">
                  <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 shrink-0 text-teal" aria-hidden="true" />
                  {t}
                </p>
              )
            )}
          </div>
        </div>

        {/* Right: the form */}
        <div className="px-6 py-8 lg:px-9">
          <AnimatePresence mode="wait">
            {status === "done" ? (
              <motion.div
                key="success"
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                role="status"
                aria-live="polite"
                className="flex min-h-[280px] flex-col justify-center"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal/12 text-teal">
                  <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display font-extrabold display-tight text-[1.55rem] text-ink">
                  Quotation Request Registered!
                </h3>
                <p className="mt-3 max-w-[54ch] text-[0.955rem] leading-[1.72] text-muted">
                  Thank you, <strong className="text-ink">{values.name}</strong>. Our fleet dispatcher has received your route details. A moving supervisor will contact you at <strong className="text-ink">{values.phone}</strong> within 15–30 minutes to verify your packing needs and provide your customized estimate.
                </p>
                <dl className="mt-6 grid gap-3 rounded-[3px] border border-rule bg-white p-4 sm:grid-cols-2">
                  <div>
                    <dt className="label-micro text-[0.6rem] text-muted">Booking Reference</dt>
                    <dd className="tabular mt-1 font-display text-[1.05rem] font-bold text-brand">
                      {reference}
                    </dd>
                  </div>
                  <div>
                    <dt className="label-micro text-[0.6rem] text-muted">Route &amp; Date</dt>
                    <dd className="mt-1 text-[0.925rem] text-ink font-medium">
                      {values.from} → {values.to} ({values.date || "Immediate / Flexible"})
                    </dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/919872834910?text=${encodeURIComponent(`Hello Neelkanth Transport, I requested a quick quote for ${values.from} to ${values.to} (Ref: ${reference}). My name is ${values.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-[3px] border border-[#25D366] bg-[#25D366] px-5 text-[0.9rem] font-semibold text-white transition-colors hover:bg-[#1fae53]"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                  <Link
                    to="/get-a-quote"
                    className="inline-flex h-11 items-center rounded-[3px] border border-amber bg-amber px-5 text-[0.9rem] font-semibold text-[#20160A] transition-colors hover:bg-[#f0a03c]"
                  >
                    Detailed Inventory Form
                    <ArrowRight className="ml-2 h-[17px] w-[17px]" aria-hidden="true" />
                  </Link>
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex h-11 items-center rounded-[3px] border border-ink px-5 text-[0.9rem] font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
                  >
                    Start another enquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                noValidate
                initial={reduce ? { opacity: 1 } : { opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3"
              >
                <Field id="qq-from" label="Moving from" required error={errors.from}>
                  <input
                    id="qq-from"
                    name="from"
                    type="text"
                    value={values.from}
                    onChange={update("from")}
                    placeholder="City or locality"
                    autoComplete="address-level2"
                    aria-invalid={Boolean(errors.from)}
                    className={inputClass("from")}
                    list="qq-cities"
                  />
                </Field>

                <Field id="qq-to" label="Moving to" required error={errors.to}>
                  <input
                    id="qq-to"
                    name="to"
                    type="text"
                    value={values.to}
                    onChange={update("to")}
                    placeholder="City or locality"
                    autoComplete="address-level2"
                    aria-invalid={Boolean(errors.to)}
                    className={inputClass("to")}
                    list="qq-cities"
                  />
                </Field>

                <Field id="qq-date" label="Moving date" required error={errors.date}>
                  <input
                    id="qq-date"
                    name="date"
                    type="date"
                    min={todayISO()}
                    value={values.date}
                    onChange={update("date")}
                    aria-invalid={Boolean(errors.date)}
                    className={inputClass("date")}
                  />
                </Field>

                <Field id="qq-propertyType" label="Service / requirement" required error={errors.propertyType}>
                  <select
                    id="qq-propertyType"
                    name="propertyType"
                    value={values.propertyType}
                    onChange={update("propertyType")}
                    aria-invalid={Boolean(errors.propertyType)}
                    className={inputClass("propertyType")}
                  >
                    <option value="">Select service / cargo type</option>
                    {PROPERTY_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field id="qq-name" label="Name" required error={errors.name}>
                  <input
                    id="qq-name"
                    name="name"
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
                  id="qq-phone"
                  label="Phone number"
                  required
                  error={errors.phone}
                  hint="10-digit Indian mobile number"
                >
                  <input
                    id="qq-phone"
                    name="phone"
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

                <datalist id="qq-cities">
                  {allCityNames.map((c) => (
                    <option key={c} value={c} />
                  ))}
                </datalist>

                <div className="flex flex-col gap-3 pt-1 sm:col-span-2 lg:col-span-3 lg:flex-row lg:items-center lg:justify-between">
                  <p className="max-w-[52ch] text-[0.765rem] leading-[1.6] text-muted">
                    Submitting this form does not send anything to the business in this demo build.
                    Nothing is stored on a server.
                  </p>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-[3px] border border-amber bg-amber px-8 text-[0.955rem] font-semibold text-[#20160A] shadow-[0_2px_0_0_#B96F12] transition-colors hover:bg-[#f0a03c] disabled:opacity-70"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-[18px] w-[18px] animate-spin" aria-hidden="true" />
                        Preparing enquiry…
                      </>
                    ) : (
                      <>
                        Get a Free Quote
                        <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
