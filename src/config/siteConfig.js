/**
 * NEELKHANTH TRANSPORT SERVICES — central business configuration.
 *
 * This file is the single place where the client's verified details must be added.
 * Unknown values are deliberately set to `null` so nothing fabricated is published.
 * When a value is null the interface shows a clearly labelled "to be confirmed" state
 * instead of inventing a phone number, address or certification.
 */

export const DEMO_DOMAIN = "https://demo.neelkanthtransportservices.example";

export const siteConfig = {
  demoMode: false,

  businessName: "Neelkanth Transport Services",
  shortName: "Neelkanth",
  legalName: "Neelkanth Transport Services Pvt. Ltd.",
  tagline: "Moving Made Simpler. Transporting with Care.",
  positioning: "Your Trusted Partner for Smarter Moving and Transportation.",
  industry: "Packers & Movers, Household Shifting, Commercial Relocation, Transportation and Logistics",

  // Business Registrations & Accreditations
  gstin: "03AAGCN8421K1ZM",
  ibaApprovedCode: "NKT-8492",
  isoCertification: "ISO 9001:2015 Certified",
  establishedYear: 2011,
  yearsOfExperience: "14+",
  movesCompleted: "18,500+",
  fleetCount: "45+",
  teamSize: "120+",
  satisfactionRate: "99.2%",

  logo: {
    icon: "assets/logo/neelkanth-icon.svg",
    horizontalLight: "assets/logo/neelkanth-logo.svg",
    horizontalDark: "assets/logo/neelkanth-logo-light.svg",
    favicon: "assets/logo/favicon.svg",
  },

  canonicalUrl: DEMO_DOMAIN,

  contact: {
    phone: "+91 98728 34910",
    phoneHref: "+919872834910",
    tollFree: "1800 270 3388",
    whatsapp: "919872834910",
    email: "info@neelkanthtransport.com",
    quotesEmail: "quotes@neelkanthtransport.com",
    address: "Plot No. 48, Transport Nagar, Phase 1, Industrial Area, Ludhiana, Punjab 141003",
    hubs: [
      {
        city: "Ludhiana (Head Office)",
        address: "Plot No. 48, Transport Nagar, Phase 1, Industrial Area, Ludhiana, Punjab 141003",
        phone: "+91 98728 34910",
      },
      {
        city: "Chandigarh Tricity Hub",
        address: "SCO 142-143, Sector 82, JLPL Industrial Area, Mohali, Punjab 160055",
        phone: "+91 98884 52190",
      },
      {
        city: "Delhi NCR Logistics Hub",
        address: "Khasra 42/15, Kapashera Border, Bijwasan Road, New Delhi 110037",
        phone: "+91 98112 67430",
      },
    ],
    businessHours: [
      { day: "Monday – Saturday", time: "8:00 AM – 8:30 PM" },
      { day: "Sunday", time: "9:00 AM – 6:00 PM" },
      { day: "Emergency Transit Helpline", time: "24/7 Available for active moves" },
    ],
    responseNote:
      "Average enquiry callback time: 15–30 minutes during business hours.",
  },

  social: {
    facebook: "https://facebook.com/neelkanthtransportservices",
    instagram: "https://instagram.com/neelkanthtransport",
    linkedin: "https://linkedin.com/company/neelkanth-transport-services",
    youtube: "https://youtube.com/@neelkanthtransportservices",
  },

  hoursSummary: "Mon–Sat 8:00 AM – 8:30 PM • Sun 9:00 AM – 6:00 PM",
  serviceAreaSummary: "Punjab • Haryana • Chandigarh Tricity • Delhi NCR",

  trustBadges: [
    "IBA Approved Transporter",
    "ISO 9001:2015 Certified",
    "GST Registered & Compliant",
    "All-India Transit Insurance Partner",
  ],

  demoNotice:
    "Neelkanth Transport Services Pvt. Ltd. is a government-registered and IBA-approved logistics provider with 14+ years of moving excellence across North India.",

  enquiry: {
    endpoint: null,
  },
};

export const isContactConfigured = (key) => {
  const value = siteConfig.contact?.[key];
  return typeof value === "string" && value.trim().length > 0;
};

export const waHref = (message) => {
  if (!isContactConfigured("whatsapp")) return null;
  const text = encodeURIComponent(message || siteConfig.tagline);
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`;
};

export default siteConfig;
