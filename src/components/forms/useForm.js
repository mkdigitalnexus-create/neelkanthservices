import { useState } from "react";

export const validators = {
  required: (msg = "This field is required.") => (v) => (String(v || "").trim() ? "" : msg),
  phone: (v) => (!v ? "" : /^[+\d][\d\s\-()]{7,16}$/.test(v) ? "" : "Enter a valid phone number."),
  email: (v) => (!v ? "" : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email address."),
};

export function useForm(initial, rules) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");

  const validateField = (k, v) => {
    const fns = rules[k] || [];
    for (const fn of fns) {
      const err = fn(v);
      if (err) return err;
    }
    return "";
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((s) => ({ ...s, [name]: value }));
    if (touched[name]) setErrors((s) => ({ ...s, [name]: validateField(name, value) }));
  };

  const onBlur = (e) => {
    const { name, value } = e.target;
    setTouched((s) => ({ ...s, [name]: true }));
    setErrors((s) => ({ ...s, [name]: validateField(name, value) }));
  };

  const validateAll = () => {
    const errs = {};
    Object.keys(rules).forEach((k) => {
      const e = validateField(k, values[k]);
      if (e) errs[k] = e;
    });
    setErrors(errs);
    setTouched(Object.fromEntries(Object.keys(rules).map((k) => [k, true])));
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      setStatus("submitted");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setStatus("error");
      const first = document.querySelector(".field.error");
      first?.focus();
    }
  };

  const reset = () => {
    setValues(initial);
    setErrors({});
    setTouched({});
    setStatus("idle");
  };

  return { values, errors, status, onChange, onBlur, handleSubmit, reset, setValues };
}
