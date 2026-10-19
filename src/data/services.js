/**
 * Service catalogue — Neelkanth Transport Services
 * Comprehensive residential, commercial, vehicle and logistics solutions across North India.
 */

export const services = [
  {
    slug: "household-shifting",
    name: "Household Shifting",
    index: "01",
    icon: "home",
    image: "assets/hero/hero-household.jpg",
    imageAlt:
      "Movers carrying a blanket-wrapped wardrobe up a loading ramp into a transport truck during a household shift",
    short:
      "Planned household relocation with packing support, careful handling and organized transportation between residences.",
    eyebrow: "Residential Relocation",
    heroTitle: "Household shifting, planned from room to room",
    overview:
      "Household shifting is usually less about moving objects and more about moving a routine. Furniture, appliances, kitchen items, clothing and personal belongings each travel differently, and a plan that treats them as one undifferentiated load tends to create friction at both ends. Our household shifting service is organized around a proven sequence — understand what is being moved, decide how each category should be packed with multi-layer materials, load in a sensible order, and coordinate the delivery side so unloading is as orderly as loading.",
    benefitsTitle: "What the service is designed to cover",
    benefits: [
      {
        title: "Category-wise packing",
        text: "Fragile items, soft furnishings, appliances and everyday essentials are treated as separate packing groups rather than one bulk load.",
      },
      {
        title: "Loading sequence planning",
        text: "Items needed first at the destination are identified before loading, so the unloading order follows your priorities.",
      },
      {
        title: "Furniture handling",
        text: "Beds, wardrobes, sofas and tables are wrapped and positioned to reduce direct contact between surfaces during transit.",
      },
      {
        title: "Clear handover points",
        text: "You know who to speak to before packing, on the moving day and at the delivery end instead of chasing updates.",
      },
    ],
    process: [
      { title: "Share your requirement", text: "Tell us the origin, destination, property type, approximate item volume and preferred moving date." },
      { title: "Discuss the scope", text: "We talk through what needs packing, what can be prepared by you, and any access or timing constraints." },
      { title: "Plan packing and transport", text: "Packing material, crew size and vehicle requirements are arranged around the agreed scope." },
      { title: "Coordinate delivery", text: "Loading, transit and unloading are scheduled so both ends of the move are informed." },
    ],
    faqIds: ["quote-request", "estimate-details", "prepare-belongs", "packing-available"],
    related: ["packing-unpacking", "local-shifting", "intercity-relocation", "loading-unloading"],
    metaTitle: "Household Shifting Services | Neelkanth Transport Services",
    metaDescription:
      "Household shifting support for families moving within or between cities — planned packing, careful handling and organized transportation. Request a moving quotation.",
  },

  {
    slug: "office-relocation",
    name: "Office Relocation",
    index: "02",
    icon: "building",
    image: "assets/hero/hero-office.jpg",
    imageAlt:
      "Movers wheeling stacked crates and wrapped office chairs through a building loading dock",
    short:
      "Organized commercial moves for offices, retail spaces and business equipment with minimal disruption to working hours.",
    eyebrow: "Commercial Relocation",
    heroTitle: "Office relocation without losing the working day",
    overview:
      "An office move has a deadline that a household move usually does not: the business still has to function. Desks, systems, files, chairs and shared equipment have to leave one premises and arrive at another in a state where people can resume work. Our office relocation service is structured around sequencing — departments, equipment and access windows are mapped first, then packing and transport are scheduled around the hours your business can afford to be offline.",
    benefitsTitle: "What the service is designed to cover",
    benefits: [
      {
        title: "Department-wise sequencing",
        text: "Workstations, cabins, storage and common areas are handled in a planned order so the new office can be set up progressively.",
      },
      {
        title: "Equipment awareness",
        text: "Computers, printers and shared devices are packed separately from furniture with clear external marking.",
      },
      {
        title: "After-hours planning",
        text: "Loading and unloading windows can be discussed around weekends or non-business hours where practical.",
      },
      {
        title: "Single point of contact",
        text: "One coordinator stays responsible for the move schedule and updates across both premises.",
      },
    ],
    process: [
      { title: "Requirement walkthrough", text: "We note the number of workstations, cabins, storage units and equipment to be moved." },
      { title: "Scope and schedule", text: "Move dates, access timings and department order are agreed with your team." },
      { title: "Packing and transport", text: "Assets are packed, marked and loaded according to the agreed sequence." },
      { title: "Delivery and placement", text: "Items are unloaded and placed against the agreed floor plan at the new premises." },
    ],
    faqIds: ["estimate-details", "intercity-move", "packing-available", "quote-request"],
    related: ["packing-unpacking", "loading-unloading", "storage-warehousing", "intercity-relocation"],
    metaTitle: "Office Relocation & Commercial Moving | Neelkanth Transport Services",
    metaDescription:
      "Organized office and commercial relocation support — planned packing, sequenced loading and coordinated delivery for business equipment and furniture.",
  },

  {
    slug: "packing-unpacking",
    name: "Packing and Unpacking",
    index: "03",
    icon: "package",
    image: "assets/services/packing.jpg",
    imageAlt:
      "Hands wrapping a wooden drawer unit in bubble wrap and stretch film beside stacked cartons",
    short:
      "Protective packing material and methodical wrapping for fragile, bulky and everyday household or office items.",
    eyebrow: "Packing Support",
    heroTitle: "Packing that respects what is inside the carton",
    overview:
      "Most damage in a move happens before the vehicle ever moves — an item wrapped loosely, a carton filled beyond its weight, a fragile object packed with soft goods on the wrong side. Packing is the part of a relocation where method matters more than speed. Our professional packing and unpacking service covers high-grade materials, careful wrapping methods and systematic marking of cartons, and can be taken as a full-service pack, a partial pack for fragile items only, or an unpacking assist at the destination.",
    benefitsTitle: "What the service is designed to cover",
    benefits: [
      {
        title: "Material matched to the item",
        text: "Cartons, stretch film, bubble wrap, kraft paper and blankets are selected for the item rather than applied uniformly.",
      },
      {
        title: "Room-wise labelling",
        text: "Cartons are marked by room or category so the destination-side sorting does not start from zero.",
      },
      {
        title: "Fragile-item focus",
        text: "Glassware, crockery, screens and decor are packed with additional cushioning and upright orientation where suitable.",
      },
      {
        title: "Optional unpacking assist",
        text: "Unpacking support at the destination can be requested for cartons, furniture positioning and material removal.",
      },
    ],
    process: [
      { title: "Item assessment", text: "We identify fragile, oversized and high-care items and agree what you will prepare yourself." },
      { title: "Material arrangement", text: "Packing material is brought according to the volume and categories agreed." },
      { title: "Systematic packing", text: "Items are wrapped, boxed and marked room by room, with fragile items handled last." },
      { title: "Unpacking support", text: "On request, cartons are opened and contents placed at the agreed points in the new space." },
    ],
    faqIds: ["packing-available", "prepare-belongs", "estimate-details", "quote-request"],
    related: ["household-shifting", "loading-unloading", "office-relocation", "storage-warehousing"],
    metaTitle: "Packing & Unpacking Services | Neelkanth Transport Services",
    metaDescription:
      "Professional packing and unpacking support — protective material, careful wrapping of fragile items and room-wise carton marking for household and office moves.",
  },

  {
    slug: "loading-unloading",
    name: "Loading and Unloading",
    index: "04",
    icon: "truck",
    image: "assets/services/loading.jpg",
    imageAlt: "Movers loading wrapped furniture and cartons into a steel container using a loading ramp",
    short:
      "Trained handling support for lifting, carrying, stacking and unloading at either end of a move.",
    eyebrow: "Handling Support",
    heroTitle: "Handling where the risk actually lives",
    overview:
      "Staircases, narrow corridors, lift access and vehicle height differences are where belongings and walls are most likely to be damaged. Loading and unloading is the physically demanding part of a move, and it is also the part where an extra pair of trained hands makes the clearest difference. Our loading and unloading service provides an experienced permanent crew and dedicated handling equipment to move items safely from the building into the vehicle and back out again.",
    benefitsTitle: "What the service is designed to cover",
    benefits: [
      {
        title: "Crew sized to the job",
        text: "The number of handlers is decided by item volume, floor level and lift or staircase access rather than a fixed guess.",
      },
      {
        title: "Stacking discipline",
        text: "Heavier items form the base, fragile items are kept clear of load-bearing corners, and the vehicle is balanced for transit.",
      },
      {
        title: "Access planning",
        text: "Narrow staircases, service lifts and parking distance are considered before the crew arrives.",
      },
      {
        title: "Protection of premises",
        text: "Door frames, lift interiors and wall corners are discussed and protected where the situation requires it.",
      },
    ],
    process: [
      { title: "Access check", text: "Floor level, lift availability, staircase width and vehicle parking distance are noted." },
      { title: "Crew and equipment", text: "Handlers and basic equipment such as trolleys and straps are arranged for the job." },
      { title: "Loading", text: "Items are carried out, staged and stacked into the vehicle in the agreed order." },
      { title: "Unloading", text: "At the destination, items are unloaded and placed at the points you indicate." },
    ],
    faqIds: ["estimate-details", "prepare-belongs", "quote-request", "packing-available"],
    related: ["household-shifting", "packing-unpacking", "local-shifting", "office-relocation"],
    metaTitle: "Loading & Unloading Services | Neelkanth Transport Services",
    metaDescription:
      "Loading and unloading support for household and commercial moves — crew sized to the job, planned stacking and careful handling at both ends.",
  },

  {
    slug: "car-bike-transport",
    name: "Car and Bike Transportation",
    index: "05",
    icon: "car",
    image: "assets/services/vehicle-transport.jpg",
    imageAlt:
      "A multi-car carrier trailer loaded with sedans and a covered motorcycle on a highway shoulder",
    short:
      "Vehicle transportation for cars and two-wheelers, coordinated alongside a household move or separately.",
    eyebrow: "Vehicle Transportation",
    heroTitle: "Moving the vehicle, not just the household",
    overview:
      "When a family relocates between cities, the car or the two-wheeler is often the awkward part of the plan — it either has to be driven down separately or handed over to a transport arrangement. Our specialized vehicle transportation service covers the movement of cars and two-wheelers in closed carriers as part of a household move or as a standalone requirement, with condition reports, pick-up points and delivery timings recorded before loading.",
    benefitsTitle: "What the service is designed to cover",
    benefits: [
      {
        title: "Recorded handover condition",
        text: "The visible condition of the vehicle is noted at the time of pick-up so both sides have the same reference.",
      },
      {
        title: "Secured placement",
        text: "Vehicles are positioned and secured within the transport arrangement agreed for the movement.",
      },
      {
        title: "Standalone or combined",
        text: "Vehicle transport can be booked on its own or clubbed with a household shifting requirement.",
      },
      {
        title: "Clear delivery coordination",
        text: "The delivery point and expected timing are shared before the vehicle is dispatched.",
      },
    ],
    process: [
      { title: "Vehicle details", text: "Make, type, registration city, pick-up point and delivery point are noted." },
      { title: "Handover and inspection", text: "Visible condition and existing marks are recorded at the time of handover." },
      { title: "Transport", text: "The vehicle is moved along the route and schedule discussed for the requirement." },
      { title: "Delivery", text: "The vehicle is handed over at the agreed delivery point against the earlier record." },
    ],
    faqIds: ["vehicle-transport", "intercity-move", "quote-request", "estimate-details"],
    related: ["intercity-relocation", "household-shifting", "loading-unloading", "storage-warehousing"],
    metaTitle: "Car & Bike Transportation Services | Neelkanth Transport Services",
    metaDescription:
      "Vehicle transportation for cars and two-wheelers — recorded handover, secured placement and coordinated delivery, as part of a move or standalone.",
  },

  {
    slug: "local-shifting",
    name: "Local Shifting",
    index: "06",
    icon: "map-pin",
    image: "assets/cities/city-transport.jpg",
    imageAlt: "A goods truck crossing a city flyover under a hazy overcast sky",
    short:
      "Same-city household or office shifting with compact planning for shorter routes and building access.",
    eyebrow: "Within City",
    heroTitle: "Short distance, same standard of planning",
    overview:
      "A local move is often treated as a quick favour with a tempo, but the handling requirements are not really smaller — the items are the same, the staircase is the same, and the timing is tighter because the whole move usually happens in a single day. Our local shifting service is planned around a short, tight schedule: packing and loading in one window, transit across the city, and unloading and placement in the second window.",
    benefitsTitle: "What the service is designed to cover",
    benefits: [
      {
        title: "Single-day scheduling",
        text: "Local moves are typically planned to complete within one day, with both building access windows agreed in advance.",
      },
      {
        title: "Right-sized vehicles",
        text: "Vehicle selection considers lane width, parking restrictions and building access at both ends.",
      },
      {
        title: "Building coordination",
        text: "Lift bookings, society entry rules and service-lift timings are discussed before the moving day.",
      },
      {
        title: "Flexible packing scope",
        text: "Take full packing support or only for fragile and bulky items, depending on your preparation time.",
      },
    ],
    process: [
      { title: "Quick requirement note", text: "Origin, destination, floors, item volume and preferred date are shared." },
      { title: "Scope confirmation", text: "Packing scope, crew size and vehicle type are confirmed for the route." },
      { title: "Pack and load", text: "Items are packed as agreed and loaded into the vehicle in planned order." },
      { title: "Unload and place", text: "The vehicle reaches the destination and items are unloaded at the points you indicate." },
    ],
    faqIds: ["estimate-details", "prepare-belongs", "packing-available", "quote-request"],
    related: ["household-shifting", "loading-unloading", "packing-unpacking", "office-relocation"],
    metaTitle: "Local Shifting & Same City Moving | Neelkanth Transport Services",
    metaDescription:
      "Local shifting support for household and office moves within the city — single-day scheduling, right-sized vehicles and coordinated building access.",
  },

  {
    slug: "intercity-relocation",
    name: "Intercity Relocation",
    index: "07",
    icon: "route",
    image: "assets/hero/hero-transport.jpg",
    imageAlt: "A closed-body goods truck travelling on a highway in early morning haze",
    short:
      "Longer-distance relocation between cities with route planning, consolidated transport options and delivery coordination.",
    eyebrow: "Between Cities",
    heroTitle: "Intercity moves that are planned as a journey",
    overview:
      "A move between cities adds distance, transit time and a handover at both ends that may involve different people. The planning questions change: what travels together, what travels separately, when the vehicle is expected to leave, and how the delivery side will be coordinated. Our intercity relocation service covers these decisions openly, with route tracking, dedicated or shared container modes, and scheduled dispatch and delivery windows confirmed before loading.",
    benefitsTitle: "What the service is designed to cover",
    benefits: [
      {
        title: "Route and timing discussion",
        text: "Expected transit duration and the practical dispatch window are explained before the move is confirmed.",
      },
      {
        title: "Shared or dedicated vehicle",
        text: "Options to move with a consolidated load or on a dedicated vehicle are presented with their trade-offs.",
      },
      {
        title: "Transit-aware packing",
        text: "Packing for longer distances considers additional handling points and longer time inside the vehicle.",
      },
      {
        title: "Delivery-side coordination",
        text: "The receiving address, contact person and access situation are recorded before dispatch.",
      },
    ],
    process: [
      { title: "Route requirement", text: "Origin city, destination city, item volume, timing and any vehicle to be transported are noted." },
      { title: "Transport option", text: "Shared or dedicated transport is discussed along with the expected dispatch window." },
      { title: "Packing and dispatch", text: "Packing is completed to suit the transit, and the load is dispatched on the agreed schedule." },
      { title: "Delivery coordination", text: "The receiving side is informed of progress and the unloading is scheduled at the destination." },
    ],
    faqIds: ["intercity-move", "estimate-details", "quote-request", "vehicle-transport"],
    related: ["household-shifting", "car-bike-transport", "storage-warehousing", "packing-unpacking"],
    metaTitle: "Intercity Relocation & Long Distance Moving | Neelkanth Transport Services",
    metaDescription:
      "Intercity relocation support for households and businesses — route discussion, shared or dedicated transport options and coordinated delivery at the destination.",
  },

  {
    slug: "storage-warehousing",
    name: "Storage and Warehousing",
    index: "08",
    icon: "warehouse",
    image: "assets/about/logistics-fleet.jpg",
    imageAlt: "A row of unmarked goods trucks parked in a transport yard at dawn",
    short:
      "Short-term and planned storage options for household goods, office inventory and business cargo between moves.",
    eyebrow: "Storage Support",
    heroTitle: "A place for belongings between one address and the next",
    overview:
      "Possession dates rarely line up. An office lease may start after the old one ends, a home may need renovation before belongings go in, or a business may need inventory held between dispatches. Our storage and warehousing service provides clean, pest-controlled, 24/7 guarded holding facilities between the two points of a move, with flexible terms and itemized manifests issued on receipt.",
    benefitsTitle: "What the service is designed to cover",
    benefits: [
      {
        title: "Defined storage period",
        text: "The expected start and end of the storage period are agreed in writing before goods are received.",
      },
      {
        title: "Itemized receipt",
        text: "Stored goods are recorded by category or carton count so the return of goods can be checked against a list.",
      },
      {
        title: "Suitable for mixed loads",
        text: "Household goods, office furniture and business cargo can be held as separate categories in the same arrangement.",
      },
      {
        title: "Onward transport",
        text: "Storage can be followed by transportation to the new address as part of the same requirement.",
      },
    ],
    process: [
      { title: "Storage requirement", text: "Item categories, approximate volume, storage duration and access needs are discussed." },
      { title: "Receipt of goods", text: "Goods are received and recorded against the agreed category or carton list." },
      { title: "Holding period", text: "Goods remain in the arranged storage for the agreed period, with access discussed separately." },
      { title: "Onward movement", text: "Goods are released and transported to the next address on the agreed schedule." },
    ],
    faqIds: ["estimate-details", "intercity-move", "quote-request", "packing-available"],
    related: ["intercity-relocation", "office-relocation", "packing-unpacking", "loading-unloading"],
    metaTitle: "Storage & Warehousing Support | Neelkanth Transport Services",
    metaDescription:
      "Short-term and planned storage for household goods, office inventory and cargo between moves — defined storage periods, itemized receipts and onward transport.",
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug) || null;

export default services;
