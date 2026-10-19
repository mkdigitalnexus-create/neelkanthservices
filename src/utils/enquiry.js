import { siteConfig } from "../config/siteConfig";

/**
 * Enquiry submission utility.
 *
 * This demonstration build has NO backend, no database and no API.
 * `submitEnquiry` resolves locally and records the enquiry in frontend state only.
 * When `siteConfig.enquiry.endpoint` is set, the same function posts the payload,
 * so connecting a real service later does not require rewriting the forms.
 */
export function submitEnquiry(payload) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({
        ok: true,
        demo: true,
        reference: createReference(),
        receivedAt: new Date().toISOString(),
        payload,
      });
    }, 450);
  });
}

/** Human-readable demo reference, e.g. NKT-24F1-8QD3 */
export function createReference() {
  const stamp = Date.now().toString(36).toUpperCase().slice(-4);
  const rand = Math.random().toString(36).toUpperCase().slice(2, 5);
  return `NKT-${stamp}-${rand}`;
}

/** Builds a prefilled WhatsApp deep link — only when a real number is configured. */
export function whatsappLink(message) {
  if (!siteConfig.contact.whatsapp) return null;
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Builds a mailto link — only when a real address is configured. */
export function emailLink(subject, body) {
  if (!siteConfig.contact.email) return null;
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function telLink() {
  return siteConfig.contact.phoneHref ? `tel:${siteConfig.contact.phoneHref}` : null;
}
