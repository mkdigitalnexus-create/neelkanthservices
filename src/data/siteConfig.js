// Central site configuration. Fill in verified business details before launch.
// Empty strings are treated as "not configured" and hidden in the UI.
export const siteConfig = {
  name: "Neelkanth Transport Services",
  shortName: "Neelkanth Transport",
  tagline: "Best Transport Services in Delhi, Gurugram & Haryana",
  description:
    "Neelkanth Transport Services provides top-rated commercial truck transportation, full truckload (FTL), trailer movements, and industrial cargo logistics across Gurugram, Delhi, New Delhi, Ghaziabad, Haryana, and nationwide.",
  siteUrl: "https://www.neelkanthtransport.com",
  logo: "/assets/brand/logo.jpeg",
  logoLight: "/assets/brand/logo.jpeg",
  ogImage: "/assets/hero/hero-1.jpg",
  colors: {
    navy: "#081B36",
    blue: "#075CC8",
    blueDark: "#063D85",
    gold: "#F5B51B",
  },
  // Verified business contact details
  contact: {
    phone: "+917678176144",
    phoneDisplay: "+91 76781 76144",
    phoneSecondary: "+919812458224",
    phoneSecondaryDisplay: "+91 98124 58224",
    whatsapp: "917678176144",
    email: "info@neelkanthtransport.com",
    address: "4th Floor, Ground Floor, Chowk, opposite Zepto, Dhankot, Gurugram, Haryana 122505",
    landmark: "Opposite Zepto, Dhankot Chowk",
    city: "Gurugram",
    state: "Haryana",
    pincode: "122505",
    region: "Delhi NCR, Haryana, India",
    hours: "24/7 Dispatch & Support (Office: Mon – Sat, 9:00 AM – 8:00 PM)",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3507.2283765955!2d76.95055517549496!3d28.472668175752485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI4JzIxLjYiTiA3NsKwNTcnMTEuMyJF!5e0!3m2!1sen!2sin!4v1792661732817!5m2!1sen!2sin",
    geo: {
      latitude: 28.472668,
      longitude: 76.950555,
    },
  },
  serviceAreas: [
    "Gurugram",
    "Delhi",
    "New Delhi",
    "Ghaziabad",
    "Haryana",
    "Faridabad",
    "Manesar",
    "Noida",
    "Pan India",
  ],
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  demoMode: false,
  nav: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Fleet", to: "/fleet" },
    { label: "Industries", to: "/industries" },
    { label: "Routes", to: "/routes" },
    { label: "Contact", to: "/contact" },
  ],
  secondaryNav: [
    { label: "FAQ", to: "/faq" },
    { label: "Privacy Policy", to: "/privacy-policy" },
  ],
};

export const hasContact = (key) => Boolean(siteConfig.contact[key]);
