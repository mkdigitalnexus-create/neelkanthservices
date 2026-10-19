/**
 * Neelkanth Transport Services — Regional Logistics & Service Corridors
 * Daily line-haul container runs, localized packing crews, and dedicated fleet dispatch.
 */

export const regions = [
  {
    id: "punjab",
    name: "Punjab",
    code: "PB",
    hub: "Central Terminal, Transport Nagar, Ludhiana",
    note: "Comprehensive coverage across all major industrial and residential hubs with daily line-haul trucks.",
    cities: [
      { name: "Ludhiana", note: "Head office terminal, daily container dispatch & residential shifting" },
      { name: "Amritsar", note: "Full packing crew & direct GT Road transit corridor" },
      { name: "Jalandhar", note: "Local shifting, commercial freight & car transportation hub" },
      { name: "Patiala", note: "Dedicated residential and government officer relocation team" },
      { name: "Bathinda", note: "Heavy cargo, industrial machinery & household relocation" },
      { name: "Mohali / SAS Nagar", note: "IT office relocations, apartment shifts & packing depot" },
    ],
  },
  {
    id: "chandigarh",
    name: "Chandigarh Tricity",
    code: "CH",
    hub: "Sector 82 JLPL Industrial Area & Phase II Hub",
    note: "High-density fleet for same-day local shifting, apartment moves, and corporate relocations.",
    cities: [
      { name: "Chandigarh", note: "High-rise lift management, delicate packing & full household shifting" },
      { name: "Mohali", note: "Corporate office shifting, IT assets & residential societies" },
      { name: "Panchkula", note: "Dedicated villa moves, multi-layer packing & intercity departures" },
      { name: "Zirakpur", note: "Express residential relocations & society goods handling" },
    ],
  },
  {
    id: "haryana",
    name: "Haryana",
    code: "HR",
    hub: "GT Road Logistics Center, Ambala & Panipat",
    note: "Key NH-44 transit corridor connecting Punjab and Delhi with scheduled daily runs.",
    cities: [
      { name: "Ambala", note: "Railway & highway consolidation junction, express line-haul" },
      { name: "Karnal", note: "Household shifting, agricultural equipment & local moves" },
      { name: "Panipat", note: "Textile machinery, corporate cargo & residential relocation" },
      { name: "Hisar", note: "Commercial transport & residential packing services" },
      { name: "Rohtak", note: "Local & intercity household moves with trained crews" },
      { name: "Sonipat", note: "Industrial estate freight & Delhi border transit hub" },
    ],
  },
  {
    id: "delhi-ncr",
    name: "Delhi NCR",
    code: "DL",
    hub: "Bijwasan Logistics Depot & Kapashera Border Terminal",
    note: "Dedicated capital region distribution network with 24/7 commercial and household moving support.",
    cities: [
      { name: "New Delhi", note: "Central Delhi, South Delhi & West Delhi residential and embassy relocations" },
      { name: "Noida & Greater Noida", note: "High-rise society shifting, corporate tech parks & warehousing" },
      { name: "Gurugram", note: "Cyber City corporate moves, luxury villa shifting & secure storage" },
      { name: "Ghaziabad", note: "Residential apartment moves, packing & regional transport" },
      { name: "Faridabad", note: "Industrial machinery transport & complete household relocations" },
    ],
  },
  {
    id: "other-north-india",
    name: "All-India Connecting Routes",
    code: "IND",
    hub: "Interstate Line-Haul Fleet Network",
    note: "Long-distance container transport and car carrier service across prominent highway corridors.",
    cities: [
      { name: "Himachal Pradesh (Shimla, Baddi, Kangra)", note: "Hill route experienced drivers & enclosed vehicles" },
      { name: "Uttarakhand (Dehradun, Haridwar, Roorkee)", note: "Direct transit with weather-proof container trucks" },
      { name: "Rajasthan (Jaipur, Jodhpur, Kota)", note: "Full truckload (FTL) and shared moving options" },
      { name: "Uttar Pradesh (Lucknow, Kanpur, Agra)", note: "Fast interstate transit with GPS tracking updates" },
    ],
  },
];

export const allCityNames = regions.flatMap((r) => r.cities.map((c) => c.name));

export const regionSummary = "Punjab • Haryana • Chandigarh Tricity • Delhi NCR";

export default regions;
