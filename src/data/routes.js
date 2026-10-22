// Illustrative coverage. Replace with verified routes before publishing.
export const coverage = {
  note: "Operating from our primary dispatch terminal in Dhankot, Gurugram, we provide dedicated FTL, container, and industrial freight movement connecting Delhi NCR, Haryana, Gujarat, Maharashtra, and all major Indian industrial centers.",
  regions: [
    {
      name: "Delhi NCR & Haryana (HQ)",
      cities: [
        "Gurugram (Dhankot HQ)",
        "Delhi & New Delhi",
        "Ghaziabad",
        "Faridabad",
        "Manesar & Bawal",
        "Sonipat & Panipat",
      ],
    },
    {
      name: "Western India & Ports",
      cities: ["Mumbai & JNPT", "Pune", "Ahmedabad", "Surat", "Vadodara", "Kandla / Mundra"],
    },
    {
      name: "Rajasthan & Northern India",
      cities: ["Jaipur", "Bhiwadi", "Ludhiana", "Chandigarh", "Lucknow", "Kanpur"],
    },
    {
      name: "Southern & Eastern India",
      cities: ["Bengaluru", "Chennai", "Hyderabad", "Nagpur", "Indore", "Kolkata"],
    },
  ],
  corridors: [
    { from: "Gurugram / Delhi", to: "Mumbai / JNPT" },
    { from: "Delhi / Gurugram", to: "Ahmedabad / Surat" },
    { from: "Ghaziabad / Delhi NCR", to: "Jaipur / Rajasthan" },
    { from: "Haryana (Manesar / Faridabad)", to: "Pune / Maharashtra" },
    { from: "Delhi NCR / Haryana", to: "Ludhiana / Punjab" },
    { from: "Gurugram (Dhankot)", to: "Bengaluru / Hyderabad" },
    { from: "Delhi / Ghaziabad", to: "Kolkata / Eastern Hub" },
  ],
};

// Node positions for the SVG route illustration (viewBox 0 0 600 640).
export const routeNodes = [
  { id: "delhi", label: "Delhi NCR", x: 250, y: 120 },
  { id: "jaipur", label: "Jaipur", x: 205, y: 190 },
  { id: "lucknow", label: "Lucknow", x: 350, y: 185 },
  { id: "ahmedabad", label: "Ahmedabad", x: 130, y: 300 },
  { id: "indore", label: "Indore", x: 240, y: 300 },
  { id: "kolkata", label: "Kolkata", x: 500, y: 300 },
  { id: "mumbai", label: "Mumbai", x: 150, y: 400 },
  { id: "pune", label: "Pune", x: 190, y: 440 },
  { id: "nagpur", label: "Nagpur", x: 320, y: 380 },
  { id: "hyderabad", label: "Hyderabad", x: 300, y: 480 },
  { id: "bengaluru", label: "Bengaluru", x: 280, y: 580 },
  { id: "chennai", label: "Chennai", x: 380, y: 590 },
];

export const routeLinks = [
  ["delhi", "jaipur"], ["delhi", "lucknow"], ["jaipur", "ahmedabad"], ["jaipur", "indore"],
  ["ahmedabad", "mumbai"], ["indore", "nagpur"], ["mumbai", "pune"], ["pune", "hyderabad"],
  ["nagpur", "hyderabad"], ["nagpur", "kolkata"], ["lucknow", "kolkata"], ["hyderabad", "bengaluru"],
  ["bengaluru", "chennai"], ["hyderabad", "chennai"], ["indore", "delhi"],
];
export const highlightedLinks = [["delhi", "jaipur"], ["jaipur", "ahmedabad"], ["ahmedabad", "mumbai"], ["delhi", "lucknow"]];
