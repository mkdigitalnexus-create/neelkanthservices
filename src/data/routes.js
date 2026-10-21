// Illustrative coverage. Replace with verified routes before publishing.
export const coverage = {
  note: "Coverage shown is illustrative for this demonstration and should be confirmed with the business.",
  regions: [
    { name: "Western India", cities: ["Mumbai", "Pune", "Surat", "Ahmedabad", "Nashik"] },
    { name: "Northern India", cities: ["Delhi NCR", "Jaipur", "Ludhiana", "Lucknow"] },
    { name: "Southern India", cities: ["Bengaluru", "Chennai", "Hyderabad", "Coimbatore"] },
    { name: "Central & Eastern India", cities: ["Nagpur", "Indore", "Raipur", "Kolkata"] },
  ],
  corridors: [
    { from: "Mumbai", to: "Delhi NCR" },
    { from: "Mumbai", to: "Bengaluru" },
    { from: "Pune", to: "Hyderabad" },
    { from: "Ahmedabad", to: "Jaipur" },
    { from: "Nagpur", to: "Kolkata" },
    { from: "Chennai", to: "Bengaluru" },
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
export const highlightedLinks = [["mumbai", "pune"], ["pune", "hyderabad"], ["hyderabad", "bengaluru"]];
