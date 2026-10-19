/**
 * Client-side validation helpers.
 * Everything here runs in the browser — there is no backend in this demonstration build.
 */

export const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(value).trim());

/** Indian mobile numbers: optional +91 / 91 prefix, then a 10-digit number starting 6-9. */
export const isIndianMobile = (value) => {
  const raw = String(value || "").replace(/[\s\-().]/g, "");
  const normalized = raw.replace(/^\+?91/, "");
  return /^[6-9]\d{9}$/.test(normalized);
};

export const isNotEmpty = (value) => String(value ?? "").trim().length > 0;

/** Date must be today or later, given an ISO yyyy-mm-dd string. */
export const isFutureDate = (value) => {
  if (!isNotEmpty(value)) return false;
  const chosen = new Date(`${value}T00:00:00`);
  if (Number.isNaN(chosen.getTime())) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return chosen.getTime() >= today.getTime();
};

export const todayISO = () => {
  const d = new Date();
  const off = d.getTimezoneOffset();
  return new Date(d.getTime() - off * 60000).toISOString().slice(0, 10);
};

export const FIELD_LABELS = {
  from: "Moving from",
  to: "Moving to",
  date: "Preferred moving date",
  propertyType: "Property type",
  movingType: "Moving type",
  name: "Full name",
  phone: "Phone number",
  email: "Email address",
  volume: "Approximate item volume",
};

/**
 * validate(values, rules) -> { [field]: message }
 * rules: { field: ["required", "mobile", "email", "date", "min:2"] }
 */
export function validate(values, rules) {
  const errors = {};
  Object.entries(rules).forEach(([field, checks]) => {
    const value = values[field];
    const label = FIELD_LABELS[field] || field;
    for (const check of checks) {
      const [kind, arg] = check.split(":");
      if (kind === "required" && !isNotEmpty(value)) {
        errors[field] = `${label} is required.`;
        break;
      }
      if (isNotEmpty(value)) {
        if (kind === "mobile" && !isIndianMobile(value)) {
          errors[field] = "Enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9.";
          break;
        }
        if (kind === "email" && !isEmail(value)) {
          errors[field] = "Enter a valid email address.";
          break;
        }
        if (kind === "date" && !isFutureDate(value)) {
          errors[field] = "Choose today or a future date.";
          break;
        }
        if (kind === "min" && String(value).trim().length < Number(arg || 2)) {
          errors[field] = `${label} should be at least ${arg || 2} characters.`;
          break;
        }
      }
    }
  });
  return errors;
}
