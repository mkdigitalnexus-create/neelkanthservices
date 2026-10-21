// Central site configuration. Fill in verified business details before launch.
// Empty strings are treated as "not configured" and hidden in the UI.
export const siteConfig = {
  name: "Neelkhanth Transport Services",
  shortName: "Neelkhanth Transport",
  tagline: "Built for the Journey. Trusted for the Delivery.",
  description:
    "Neelkhanth Transport Services provides dependable truck transportation for commercial goods, industrial cargo and business logistics requirements across India.",
  siteUrl: "https://www.neelkhanthtransport.example",
  logo: "/assets/brand/logo.jpeg",
  logoLight: "/assets/brand/logo.jpeg",
  ogImage: "/assets/hero/hero-1.jpg",
  colors: {
    navy: "#081B36",
    blue: "#075CC8",
    blueDark: "#063D85",
    gold: "#F5B51B",
  },
  // Contact — leave blank until verified with the client.
  contact: {
    phone: "",
    phoneDisplay: "",
    whatsapp: "",
    email: "",
    address: "",
    city: "",
    hours: "Monday – Saturday, 9:00 AM – 7:00 PM",
  },
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  demoMode: true,
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
    { label: "Gallery", to: "/gallery" },
    { label: "FAQ", to: "/faq" },
    { label: "Privacy Policy", to: "/privacy-policy" },
  ],
};

export const hasContact = (key) => Boolean(siteConfig.contact[key]);
