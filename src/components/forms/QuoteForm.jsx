import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useForm, validators as v } from "./useForm";
import Field from "./Field";
import DemoNotice from "../common/DemoNotice";
import SubmittedNotice from "./SubmittedNotice";
import { cargoTypes, vehicleOptions } from "./options";

const initial = {
  name: "", company: "", phone: "", email: "", pickupCity: "", deliveryCity: "",
  cargoType: "", vehicle: "", load: "", date: "", notes: "",
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
  const f = useForm(initial, rules);

  useEffect(() => {
    if (prefill) f.setValues((s) => ({ ...s, ...Object.fromEntries(Object.entries(prefill).filter(([, val]) => val)) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefill]);

  if (f.status === "submitted") {
    return (
      <SubmittedNotice
        onReset={f.reset}
        summary={[["Name", f.values.name], ["Phone", f.values.phone], ["Route", `${f.values.pickupCity} → ${f.values.deliveryCity}`], ["Cargo", f.values.cargoType], ["Vehicle", f.values.vehicle], ["Preferred date", f.values.date]]}
      />
    );
  }

  return (
    <form onSubmit={f.handleSubmit} noValidate className="rounded-md border border-line bg-white p-6 md:p-10">
      <fieldset className="grid gap-5 sm:grid-cols-2">
        <legend className="mb-5 font-heading text-lg font-bold text-navy">Your details</legend>
        <Field label="Name" name="name" value={f.values.name} onChange={f.onChange} onBlur={f.onBlur} error={f.errors.name} autoComplete="name" />
        <Field label="Company" name="company" optional value={f.values.company} onChange={f.onChange} onBlur={f.onBlur} autoComplete="organization" />
        <Field label="Phone" name="phone" type="tel" value={f.values.phone} onChange={f.onChange} onBlur={f.onBlur} error={f.errors.phone} autoComplete="tel" inputMode="tel" />
        <Field label="Email" name="email" type="email" optional value={f.values.email} onChange={f.onChange} onBlur={f.onBlur} error={f.errors.email} autoComplete="email" />
      </fieldset>

      <fieldset className="mt-10 grid gap-5 sm:grid-cols-2">
        <legend className="mb-5 font-heading text-lg font-bold text-navy">Transport requirement</legend>
        <Field label="Pickup City" name="pickupCity" value={f.values.pickupCity} onChange={f.onChange} onBlur={f.onBlur} error={f.errors.pickupCity} />
        <Field label="Delivery City" name="deliveryCity" value={f.values.deliveryCity} onChange={f.onChange} onBlur={f.onBlur} error={f.errors.deliveryCity} />
        <Field label="Cargo Type" name="cargoType" as="select" value={f.values.cargoType} onChange={f.onChange} onBlur={f.onBlur} error={f.errors.cargoType}>
          <option value="">Select cargo type</option>
          {cargoTypes.map((c) => <option key={c}>{c}</option>)}
        </Field>
        <Field label="Vehicle Requirement" name="vehicle" as="select" value={f.values.vehicle} onChange={f.onChange} onBlur={f.onBlur} error={f.errors.vehicle}>
          <option value="">Select vehicle</option>
          {vehicleOptions.map((c) => <option key={c}>{c}</option>)}
        </Field>
        <Field label="Load details" name="load" optional placeholder="Approx. weight, volume, packaging" value={f.values.load} onChange={f.onChange} onBlur={f.onBlur} />
        <Field label="Preferred date" name="date" type="date" optional value={f.values.date} onChange={f.onChange} onBlur={f.onBlur} />
        <Field label="Additional information" name="notes" as="textarea" optional className="sm:col-span-2" placeholder="Loading arrangements, timing constraints, special handling…" value={f.values.notes} onChange={f.onChange} onBlur={f.onBlur} />
      </fieldset>

      <DemoNotice className="mt-8" />
      {f.status === "error" && <p className="mt-4 text-sm font-medium text-[#c9372c]" role="alert">Please correct the highlighted fields before continuing.</p>}
      <button type="submit" className="btn btn-gold mt-6 w-full sm:w-auto">Submit Enquiry <ArrowRight size={18} /></button>
    </form>
  );
}
