// Vehicle categories are configurable. No counts, capacities or models are published until verified.
export const fleet = [
  {
    id: "open-body",
    name: "Open-Body Trucks",
    group: "Trucks",
    image: "/assets/services/open-body.jpg",
    position: "center",
    description: "Open platform vehicles suited to building materials, bagged goods and bulky cargo that can be secured and covered.",
    suitedFor: ["Construction materials", "Bagged commodities", "Metal products"],
  },
  {
    id: "closed-body",
    name: "Closed-Body Trucks",
    group: "Trucks",
    image: "/assets/gallery/warehouse.jpg",
    position: "center",
    description: "Enclosed vehicles that protect packaged and sensitive goods from weather and dust during transit.",
    suitedFor: ["Packaged goods", "Appliances", "Textiles"],
  },
  {
    id: "container",
    name: "Container Vehicles",
    group: "Containers",
    image: "/assets/hero/hero-2.jpg",
    position: "65% center",
    description: "Vehicles configured for containerised cargo moving between facilities, yards and business locations.",
    suitedFor: ["Sealed cargo", "Standardised loads", "Long-distance moves"],
  },
  {
    id: "trailer",
    name: "Trailers",
    group: "Trailers",
    image: "/assets/hero/hero-3.jpg",
    position: "65% center",
    description: "Flatbed and trailer configurations for long, heavy and project-type industrial cargo.",
    suitedFor: ["Machinery", "Structural steel", "Project cargo"],
  },
];

export const fleetGroups = ["All", ...new Set(fleet.map((f) => f.group))];
export const getVehicle = (id) => fleet.find((f) => f.id === id);
