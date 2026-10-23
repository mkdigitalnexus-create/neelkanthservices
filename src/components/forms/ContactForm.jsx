"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { useForm, validators as v } from "./useForm";
import Field from "./Field";
import DemoNotice from "../common/DemoNotice";
import SubmittedNotice from "./SubmittedNotice";
import { siteConfig } from "../../data/siteConfig";

const initial = { name: "", phone: "", email: "", subject: "", message: "" };
const rules = {
  name: [v.required("Please enter your name.")],
  phone: [v.required("Please enter a phone number."), v.phone],
  email: [v.email],
  message: [v.required("Please enter a message.")],
};

export default function ContactForm({
  subjects = ["General enquiry", "Transport requirement", "Route enquiry", "Other"],
  title = "Send a message",
}) {
  const [waUrl, setWaUrl] = useState("");
  const [emailSuccess, setEmailSuccess] = useState(true);

  const handleSubmitAsync = async (vals) => {
    // 1. Build Pre-Drafted WhatsApp message
    const lines = [
      "Namaste Neelkanth Transport Services,",
      "I have sent an enquiry from your website:",
      "",
      `• Name: ${vals.name}`,
      `• Phone: ${vals.phone}`,
      vals.email ? `• Email: ${vals.email}` : null,
      vals.subject ? `• Subject: ${vals.subject}` : null,
      `• Message: ${vals.message}`,
      "",
      "Kindly share rates and dispatch availability.",
    ].filter(Boolean);

    const text = lines.join("\n");
    const link = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    setWaUrl(link);

    // 2. Dispatch email to neelkanthtransportationservice@gmail.com
    try {
      const res = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", data: vals }),
      });
      const data = await res.json();
      setEmailSuccess(data.success);
    } catch (err) {
      console.error("Failed to send inquiry email:", err);
      setEmailSuccess(false);
    }
  };

  const f = useForm(initial, rules, handleSubmitAsync);

  if (f.status === "submitted") {
    return (
      <SubmittedNotice
        onReset={f.reset}
        whatsappUrl={waUrl}
        emailSent={emailSuccess}
        summary={[
          ["Name", f.values.name],
          ["Phone", f.values.phone],
          ["Email", f.values.email],
          ["Subject", f.values.subject || "General Inquiry"],
        ]}
      />
    );
  }

  const isSubmitting = f.status === "submitting";

  return (
    <form onSubmit={f.handleSubmit} noValidate className="rounded-xl border border-line bg-white p-6 md:p-8 shadow-sm">
      <h2 className="mb-6 font-heading text-xl font-bold text-navy">{title}</h2>
      <div className="grid gap-5 sm:grid-cols-2">
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
          label="Phone"
          name="phone"
          type="tel"
          value={f.values.phone}
          onChange={f.onChange}
          onBlur={f.onBlur}
          error={f.errors.phone}
          autoComplete="tel"
          disabled={isSubmitting}
        />
        <Field
          label="Email"
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
        <Field
          label="Subject"
          name="subject"
          as="select"
          optional
          value={f.values.subject}
          onChange={f.onChange}
          onBlur={f.onBlur}
          disabled={isSubmitting}
        >
          <option value="">Select a subject</option>
          {subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </Field>
        <Field
          label="Message"
          name="message"
          as="textarea"
          className="sm:col-span-2"
          value={f.values.message}
          onChange={f.onChange}
          onBlur={f.onBlur}
          error={f.errors.message}
          disabled={isSubmitting}
        />
      </div>
      <DemoNotice className="mt-6" />
      {f.status === "error" && (
        <p className="mt-4 text-sm font-medium text-[#c9372c]" role="alert">
          Please correct the highlighted fields.
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
            <span>Send Message</span>
            <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  );
}
