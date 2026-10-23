"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { useForm, validators as v } from "./useForm";
import Field from "./Field";
import DemoNotice from "../common/DemoNotice";
import SubmittedNotice from "./SubmittedNotice";
import { cargoTypes, vehicleOptions } from "./options";
import { siteConfig } from "../../data/siteConfig";

const initial = {
  name: "",
  company: "",
  phone: "",
  email: "",
  pickupCity: "",
  deliveryCity: "",
  cargoType: "",
  vehicle: "",
  load: "",
  date: "",
  notes: "",
};

const rules = {
  name: [v.required("Please enter your name.")],
  phone: [v.required("Please enter a phone number."), v.phone],
  email: [v.email],
  pickupCity: [v.required("Please enter the pickup city.")],
  deliveryCity: [v.required("Please enter the delivery city.")],
  cargoType: [v.required("Please select a cargo type.")],
  vehicle: [v.required("Please select a vehicle requirement.")],
};

export default function QuoteForm({ prefill }) {
  const [waUrl, setWaUrl] = useState("");
  const [emailSuccess, setEmailSuccess] = useState(true);

  const handleSubmitAsync = async (vals) => {
    // 1. Build Pre-Drafted WhatsApp Quote Message
    const lines = [
      "Namaste Neelkanth Transport Services,",
      "I want to request a freight quote from your website:",
      "",
      `• Name: ${vals.name}`,
      `• Phone: ${vals.phone}`,
      vals.company ? `• Company: ${vals.company}` : null,
      vals.email ? `• Email: ${vals.email}` : null,
      `• Route: ${vals.pickupCity} → ${vals.deliveryCity}`,
      `• Cargo Type: ${vals.cargoType}`,
      `• Required Vehicle: ${vals.vehicle}`,
      vals.load ? `• Load / Weight: ${vals.load}` : null,
      vals.date ? `• Preferred Date: ${vals.date}` : null,
      vals.notes ? `• Special Instructions: ${vals.notes}` : null,
      "",
      "Please provide the estimated rate and truck availability.",
    ].filter(Boolean);

    const text = lines.join("\n");
    const link = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    setWaUrl(link);

    // 2. Dispatch inquiry email to neelkanthtransportationservice@gmail.com
    try {
      const res = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "quote", data: vals }),
      });
      const data = await res.json();
      setEmailSuccess(data.success);
    } catch (err) {
      console.error("Failed to send quote inquiry email:", err);
      setEmailSuccess(false);
    }
  };

  const f = useForm(initial, rules, handleSubmitAsync);

  useEffect(() => {
    if (prefill) {
      f.setValues((s) => ({
        ...s,
        ...Object.fromEntries(Object.entries(prefill).filter(([, val]) => val)),
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefill]);

  if (f.status === "submitted") {
    return (
      <SubmittedNotice
        onReset={f.reset}
        whatsappUrl={waUrl}
        emailSent={emailSuccess}
        summary={[
          ["Customer Name", f.values.name],
          ["Contact Phone", f.values.phone],
          ["Route", `${f.values.pickupCity} → ${f.values.deliveryCity}`],
          ["Cargo Type", f.values.cargoType],
          ["Vehicle Type", f.values.vehicle],
          ["Company", f.values.company],
          ["Load Details", f.values.load],
          ["Preferred Date", f.values.date],
        ]}
      />
    );
  }

  const isSubmitting = f.status === "submitting";

  return (
    <form
      onSubmit={f.handleSubmit}
      noValidate
      className="rounded-xl border border-line bg-white p-6 md:p-10 shadow-sm"
    >
      <fieldset className="grid gap-5 sm:grid-cols-2">
        <legend className="mb-5 font-heading text-lg font-bold text-navy">
          Your Contact Details
        </legend>
        <Field
          label="Name"
          name="name"
          value={f.values.name}
          onChange={f.onChange}
          onBlur={f.onBlur}
          error={f.errors.name}
          autoComplete="name"
          disabled={isSubmitting}
        />
        <Field
          label="Company / Firm"
          name="company"
          optional
          value={f.values.company}
          onChange={f.onChange}
          onBlur={f.onBlur}
          autoComplete="organization"
          disabled={isSubmitting}
        />
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          value={f.values.phone}
          onChange={f.onChange}
          onBlur={f.onBlur}
          error={f.errors.phone}
          autoComplete="tel"
          inputMode="tel"
          disabled={isSubmitting}
        />
        <Field
          label="Email Address"
          name="email"
          type="email"
          optional
          value={f.values.email}
          onChange={f.onChange}
          onBlur={f.onBlur}
          error={f.errors.email}
          autoComplete="email"
          disabled={isSubmitting}
        />
      </fieldset>

      <fieldset className="mt-10 grid gap-5 sm:grid-cols-2">
        <legend className="mb-5 font-heading text-lg font-bold text-navy">
          Transport & Shipment Requirement
        </legend>
        <Field
          label="Pickup City / Area"
          name="pickupCity"
          placeholder="e.g. Gurugram / Dhankot / Manesar"
          list="qf-pickup-cities"
          value={f.values.pickupCity}
          onChange={f.onChange}
          onBlur={f.onBlur}
          error={f.errors.pickupCity}
          disabled={isSubmitting}
        />
        <datalist id="qf-pickup-cities">
          <option value="Gurugram (Dhankot HQ)" />
          <option value="Delhi NCR" />
          <option value="New Delhi" />
          <option value="Ghaziabad" />
          <option value="Manesar" />
          <option value="Faridabad" />
        </datalist>

        <Field
          label="Delivery City / Destination"
          name="deliveryCity"
          placeholder="e.g. Delhi / Ghaziabad / Mumbai"
          list="qf-delivery-cities"
          value={f.values.deliveryCity}
          onChange={f.onChange}
          onBlur={f.onBlur}
          error={f.errors.deliveryCity}
          disabled={isSubmitting}
        />
        <datalist id="qf-delivery-cities">
          <option value="Delhi" />
          <option value="New Delhi" />
          <option value="Ghaziabad" />
          <option value="Gurugram" />
          <option value="Haryana (Faridabad/Panipat)" />
          <option value="Mumbai / JNPT" />
        </datalist>

        <Field
          label="Cargo Type"
          name="cargoType"
          as="select"
          value={f.values.cargoType}
          onChange={f.onChange}
          onBlur={f.onBlur}
          error={f.errors.cargoType}
          disabled={isSubmitting}
        >
          <option value="">Select cargo type</option>
          {cargoTypes.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </Field>

        <Field
          label="Vehicle Requirement"
          name="vehicle"
          as="select"
          value={f.values.vehicle}
          onChange={f.onChange}
          onBlur={f.onBlur}
          error={f.errors.vehicle}
          disabled={isSubmitting}
        >
          <option value="">Select vehicle</option>
          {vehicleOptions.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </Field>

        <Field
          label="Load details / Weight"
          name="load"
          optional
          placeholder="Approx. weight in MT, volume, packaging"
          value={f.values.load}
          onChange={f.onChange}
          onBlur={f.onBlur}
          disabled={isSubmitting}
        />
        <Field
          label="Preferred Dispatch Date"
          name="date"
          type="date"
          optional
          value={f.values.date}
          onChange={f.onChange}
          onBlur={f.onBlur}
          disabled={isSubmitting}
        />
        <Field
          label="Additional notes / Instructions"
          name="notes"
          as="textarea"
          optional
          className="sm:col-span-2"
          placeholder="Loading arrangements, crane requirement, timing constraints, special handling…"
          value={f.values.notes}
          onChange={f.onChange}
          onBlur={f.onBlur}
          disabled={isSubmitting}
        />
      </fieldset>

      <DemoNotice className="mt-8" />
      {f.status === "error" && (
        <p className="mt-4 text-sm font-medium text-[#c9372c]" role="alert">
          Please correct the highlighted fields before continuing.
        </p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-gold mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            <span>Sending Inquiry & Connecting WhatsApp...</span>
          </>
        ) : (
          <>
            <span>Submit Enquiry & Chat on WhatsApp</span>
            <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  );
}
