import { ArrowRight } from "lucide-react";
import { useForm, validators as v } from "./useForm";
import Field from "./Field";
import DemoNotice from "../common/DemoNotice";
import SubmittedNotice from "./SubmittedNotice";

const initial = { name: "", phone: "", email: "", subject: "", message: "" };
const rules = {
  name: [v.required("Please enter your name.")],
  phone: [v.required("Please enter a phone number."), v.phone],
  email: [v.email],
  message: [v.required("Please enter a message.")],
};

export default function ContactForm({ subjects = ["General enquiry", "Transport requirement", "Route enquiry", "Other"], title = "Send a message" }) {
  const f = useForm(initial, rules);
  if (f.status === "submitted") {
    return <SubmittedNotice onReset={f.reset} summary={[["Name", f.values.name], ["Phone", f.values.phone], ["Subject", f.values.subject]]} />;
  }
  return (
    <form onSubmit={f.handleSubmit} noValidate className="rounded-md border border-line bg-white p-6 md:p-8">
      <h2 className="mb-6 font-heading text-xl font-bold text-navy">{title}</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" value={f.values.name} onChange={f.onChange} onBlur={f.onBlur} error={f.errors.name} autoComplete="name" />
        <Field label="Phone" name="phone" type="tel" value={f.values.phone} onChange={f.onChange} onBlur={f.onBlur} error={f.errors.phone} autoComplete="tel" />
        <Field label="Email" name="email" type="email" optional value={f.values.email} onChange={f.onChange} onBlur={f.onBlur} error={f.errors.email} autoComplete="email" />
        <Field label="Subject" name="subject" as="select" optional value={f.values.subject} onChange={f.onChange} onBlur={f.onBlur}>
          <option value="">Select a subject</option>
          {subjects.map((s) => <option key={s}>{s}</option>)}
        </Field>
        <Field label="Message" name="message" as="textarea" className="sm:col-span-2" value={f.values.message} onChange={f.onChange} onBlur={f.onBlur} error={f.errors.message} />
      </div>
      <DemoNotice className="mt-6" />
      {f.status === "error" && <p className="mt-4 text-sm font-medium text-[#c9372c]" role="alert">Please correct the highlighted fields.</p>}
      <button type="submit" className="btn btn-gold mt-6 w-full sm:w-auto">Send Message <ArrowRight size={18} /></button>
    </form>
  );
}
