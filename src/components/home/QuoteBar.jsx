import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cargoTypes, vehicleOptions } from "../forms/options";

export default function QuoteBar() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ pickupCity: "", deliveryCity: "", cargoType: "", vehicle: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    navigate("/get-a-quote", { state: { prefill: form } });
  };

  return (
    <section className="relative z-10 bg-white" aria-label="Quick enquiry">
      <div className="container-x">
        <form onSubmit={submit} className="-mt-0 grid gap-4 border-b border-line py-7 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:items-end lg:gap-5 lg:py-8">
          <div>
            <label htmlFor="qb-pickup" className="field-label">Pickup City</label>
            <input
              id="qb-pickup"
              className="field"
              placeholder="e.g. Gurugram / Dhankot"
              value={form.pickupCity}
              onChange={set("pickupCity")}
              list="qb-pickup-cities"
            />
            <datalist id="qb-pickup-cities">
              <option value="Gurugram (Dhankot HQ)" />
              <option value="Delhi NCR" />
              <option value="New Delhi" />
              <option value="Ghaziabad" />
              <option value="Manesar" />
              <option value="Faridabad" />
            </datalist>
          </div>
          <div>
            <label htmlFor="qb-delivery" className="field-label">Delivery City</label>
            <input
              id="qb-delivery"
              className="field"
              placeholder="e.g. Delhi / Ghaziabad"
              value={form.deliveryCity}
              onChange={set("deliveryCity")}
              list="qb-delivery-cities"
            />
            <datalist id="qb-delivery-cities">
              <option value="Delhi" />
              <option value="New Delhi" />
              <option value="Ghaziabad" />
              <option value="Gurugram" />
              <option value="Haryana (Faridabad/Panipat)" />
              <option value="Mumbai / JNPT" />
            </datalist>
          </div>
          <div>
            <label htmlFor="qb-cargo" className="field-label">Cargo Type</label>
            <select id="qb-cargo" className="field" value={form.cargoType} onChange={set("cargoType")}>
              <option value="">Select cargo</option>
              {cargoTypes.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="qb-vehicle" className="field-label">Vehicle Requirement</label>
            <select id="qb-vehicle" className="field" value={form.vehicle} onChange={set("vehicle")}>
              <option value="">Select vehicle</option>
              {vehicleOptions.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <button type="submit" className="btn btn-gold h-[50px] w-full md:col-span-2 lg:col-span-1 lg:w-auto">
            Request a Quote <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
