/**
 * Service catalogue — Neelkanth Transport Services
 * Comprehensive Packers & Movers, Commercial Goods Transportation & Industrial Logistics across North India & Pan-India.
 */

export const SERVICE_CATEGORIES = [
  { id: "all", label: "All Services" },
  { id: "transportation", label: "Transportation & Freight" },
  { id: "relocation", label: "Packers & Movers" },
  { id: "specialized", label: "Vehicles & Storage" },
];

export const services = [
  {
    slug: "ftl-freight-transport",
    name: "Full Truck Load (FTL) Freight",
    index: "01",
    category: "transportation",
    icon: "truck",
    image: "assets/services/ftl-freight.jpg",
    imageAlt: "A heavy closed-body commercial container truck driving on a multi-lane Indian national expressway",
    short:
      "Dedicated point-to-point full truckload transport for bulk goods, manufacturing cargo, and FMCG consignments.",
    eyebrow: "Commercial Freight",
    heroTitle: "Full Truck Load transport with dedicated capacity and verified drivers",
    overview:
      "When bulk cargo, industrial stock or manufacturing consignments require direct, unshared transit, Full Truck Load (FTL) freight is the most dependable choice. Neelkanth Transport Services provides an extensive fleet of closed-body container trucks (14ft, 19ft, 24ft, 32ft SXL/MXL) operating on guaranteed departure schedules with real-time GPS tracking, electronic proof of delivery (e-POD), and comprehensive transit documentation across all major North Indian and national industrial corridors.",
    benefitsTitle: "What our FTL freight service delivers",
    benefits: [
      {
        title: "Dedicated vehicle allotment",
        text: "The full container capacity is allocated exclusively to your consignment with zero intermediate transshipment.",
      },
      {
        title: "Diverse fleet sizing",
        text: "Containers ranging from 3.5-ton light commercial vehicles to 32-foot multi-axle heavy trailers tailored to load weight and volume.",
      },
      {
        title: "GPS tracking & milestone alerts",
        text: "Live highway telematics provide dispatch, toll-crossing, transit checkpoint, and arrival notifications.",
      },
      {
        title: "Standardized logistics documentation",
        text: "Full compliance with GST e-Way bills, consignment notes (bilty), insurance declarations, and digital PODs.",
      },
    ],
    process: [
      { title: "Consignment assessment", text: "Cargo type, tonnage, volume, pickup hub, delivery destination, and loading dock access are recorded." },
      { title: "Vehicle placement", text: "The right-sized GPS-tracked container vehicle is dispatched to your facility within the committed window." },
      { title: "Securing & documentation", text: "Cargo is loaded, strapped, sealed with tamper-evident container locks, and e-way bill verification completed." },
      { title: "Transit & e-POD delivery", text: "Non-stop highway transit is monitored by dispatch control with verified digital proof-of-delivery at the receiving dock." },
    ],
    faqIds: ["quote-request", "estimate-details", "intercity-move", "insurance", "shared-vs-dedicated"],
    related: ["ptl-goods-transport", "industrial-machinery-transport", "commercial-fleet-logistics", "storage-warehousing"],
    metaTitle: "Full Truck Load (FTL) Freight Services | Neelkanth Transport Services",
    metaDescription:
      "Dedicated Full Truck Load (FTL) transportation services across Punjab, Haryana, Delhi NCR and Pan-India. Container fleet, GPS tracking, and corporate GST billing.",
  },

  {
    slug: "household-shifting",
    name: "Household Shifting",
    index: "02",
    category: "relocation",
    icon: "home",
    image: "assets/hero/hero-household.jpg",
    imageAlt:
      "Movers carrying a blanket-wrapped wardrobe up a loading ramp into a transport truck during a household shift",
    short:
      "Planned residential relocation with multi-layer packing, careful furniture handling and organized room-by-room delivery.",
    eyebrow: "Residential Relocation",
    heroTitle: "Household shifting, planned from room to room",
    overview:
      "Household shifting is usually less about moving objects and more about moving a routine. Furniture, appliances, kitchen items, clothing and personal belongings each travel differently, and a plan that treats them as one undifferentiated load creates friction at both ends. Our household shifting service is organized around a proven sequence — understand what is being moved, decide how each category should be packed with multi-layer materials, load in a sensible order, and coordinate the delivery side so unloading is as orderly as loading.",
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
    slug: "ptl-goods-transport",
    name: "Part Truck Load (PTL) / Cargo",
    index: "03",
    category: "transportation",
    icon: "boxes",
    image: "assets/services/ptl-cargo.jpg",
    imageAlt: "A busy commercial logistics cargo loading bay with palletized cartons and parked container transport trucks",
    short:
      "Economical shared cargo and parcel distribution for business consignments, retail inventory, and mid-sized shipments.",
    eyebrow: "Commercial Logistics",
    heroTitle: "Scheduled Part Truck Load (PTL) parcel and cargo distribution",
    overview:
      "For small to medium businesses, traders, and manufacturers who do not require a full 32-foot container, our Part Truck Load (PTL) service provides cost-efficient shared freight without compromising transit speed or cargo safety. We consolidate verified commercial consignments into scheduled line-haul runs connecting major industrial hubs in Punjab, Haryana, Chandigarh Tricity, Delhi NCR, and interstate trading corridors with barcoded tracking and damage-free palletized handling.",
    benefitsTitle: "Why choose our PTL cargo network",
    benefits: [
      {
        title: "Cost efficiency",
        text: "Pay strictly for the cubic volume or weight footprint your cargo occupies, minimizing transport overheads.",
      },
      {
        title: "Scheduled highway departures",
        text: "Regular daily and bi-weekly line-haul services ensure your shipments move without waiting for full container accumulation.",
      },
      {
        title: "Barcoded cargo tracking",
        text: "Every carton or pallet is scanned at hub check-in, loading, transit transit-points, and delivery drop.",
      },
      {
        title: "Last-mile commercial delivery",
        text: "Options for hub-to-hub, door-to-hub, or direct door-to-door store delivery with scheduled unloading windows.",
      },
    ],
    process: [
      { title: "Weight & volume survey", text: "Share consignment invoice details, box/pallet dimensions, pickup location, and destination city." },
      { title: "Consolidation & receipt", text: "Cargo is collected or received at our local hub, weighed, barcoded, and issued a consignment bilty." },
      { title: "Line-haul transit", text: "Consignments are loaded onto scheduled long-haul container trucks with secure strapping and partition walls." },
      { title: "Destination distribution", text: "Shipments arrive at destination logistics hubs and are dispatched for final local dock delivery." },
    ],
    faqIds: ["shared-vs-dedicated", "quote-request", "estimate-details", "transit-time"],
    related: ["ftl-freight-transport", "commercial-fleet-logistics", "storage-warehousing", "intercity-relocation"],
    metaTitle: "Part Truck Load (PTL) & Cargo Services | Neelkanth Transport Services",
    metaDescription:
      "Reliable Part Truck Load (PTL) and parcel transportation across North India. Economical freight rates, barcoded tracking, and scheduled line-haul departures.",
  },

  {
    slug: "office-relocation",
    name: "Office Relocation",
    index: "04",
    category: "relocation",
    icon: "building",
    image: "assets/hero/hero-office.jpg",
    imageAlt:
      "Movers wheeling stacked crates and wrapped office chairs through a building loading dock",
    short:
      "Organized commercial moves for offices, IT hubs and business spaces with minimal disruption to working hours.",
    eyebrow: "Commercial Relocation",
    heroTitle: "Office relocation without losing the working day",
    overview:
      "An office move has a deadline that a household move usually does not: the business still has to function. Desks, systems, servers, files, ergonomic chairs and shared equipment have to leave one premises and arrive at another in a state where employees can resume work. Our office relocation service is structured around sequencing — departments, IT infrastructure and access windows are mapped first, then packing and transport are scheduled around the hours your business can afford to be offline.",
    benefitsTitle: "What the service is designed to cover",
    benefits: [
      {
        title: "Department-wise sequencing",
        text: "Workstations, cabins, server rooms and common areas are handled in a planned order so the new office sets up progressively.",
      },
      {
        title: "Equipment & server awareness",
        text: "Computers, networking racks, monitors and printers are packed with anti-static wrapping and distinct color-coded labels.",
      },
      {
        title: "After-hours & weekend execution",
        text: "Loading and transit are scheduled across Friday night to Sunday so business operations resume uninterrupted on Monday morning.",
      },
      {
        title: "Single dedicated project lead",
        text: "One corporate relocation manager coordinates security clearances, lift bookings, loading, and desk-by-desk placement.",
      },
    ],
    process: [
      { title: "Requirement walkthrough", text: "We note the number of workstations, server units, cabins, storage units and equipment to be moved." },
      { title: "Scope and schedule", text: "Move dates, building permissions, access timings and department order are agreed with your management." },
      { title: "Packing and transport", text: "Assets are packed, coded and loaded according to the agreed department sequence." },
      { title: "Delivery and placement", text: "Items are unloaded, placed, and reassembled against the agreed floor plan at the new premises." },
    ],
    faqIds: ["estimate-details", "intercity-move", "packing-available", "payment-terms"],
    related: ["commercial-fleet-logistics", "loading-unloading", "storage-warehousing", "packing-unpacking"],
    metaTitle: "Office Relocation & Corporate Moving | Neelkanth Transport Services",
    metaDescription:
      "Organized office and corporate relocation support — weekend scheduling, IT asset packing, department sequencing, and minimal business downtime.",
  },

  {
    slug: "industrial-machinery-transport",
    name: "Industrial & Machinery Transport",
    index: "05",
    category: "transportation",
    icon: "factory",
    image: "assets/services/machinery-transport.jpg",
    imageAlt: "Heavy industrial generators and machinery equipment secured with tie-down straps on an Indian commercial transport flatbed trailer",
    short:
      "Heavy equipment, manufacturing plant machinery, CNC machines, and oversized industrial goods transport.",
    eyebrow: "Heavy Logistics",
    heroTitle: "Heavy industrial machinery and plant equipment transport",
    overview:
      "Transporting heavy industrial machinery requires specialized transport rigs, mechanical rigging expertise, and meticulous weight-distribution planning. Neelkanth Transport Services manages the safe relocation of factory equipment, CNC machines, heavy generators, textile machinery, presses, and industrial fabrications. Operating open flatbeds, low-bed trailers, and hydraulic pullers, we ensure compliance with over-dimensional cargo regulations and highway transit permits.",
    benefitsTitle: "Engineered heavy equipment logistics",
    benefits: [
      {
        title: "Low-bed & flatbed trailers",
        text: "Specialized vehicle configurations for tall, wide, or ultra-heavy machinery requiring low centre of gravity.",
      },
      {
        title: "Rigging & crane coordination",
        text: "On-site cranes, fork-trucks, and heavy-duty skates for precision lifting from factory floor to trailer bed.",
      },
      {
        title: "Heavy-duty lashings & chains",
        text: "Grade-80 load chains, heavy ratchet binders, and anti-slip rubber pads engineered to prevent transit movement.",
      },
      {
        title: "Permits & route clearance",
        text: "Prior survey of overhead bridges, toll plazas, turning radii, and state road transport authority clearances.",
      },
    ],
    process: [
      { title: "Technical survey", text: "We review machine dimensions, net tonnage, center-of-gravity, and plant exit/entry clearances." },
      { title: "Rigging & loading", text: "Machinery is lifted via crane or heavy skates, placed onto the trailer, and locked down with certified binders." },
      { title: "Transit escort & navigation", text: "The heavy consignment navigates approved highway corridors with driver crews trained in over-dimensional cargo." },
      { title: "Unloading & positioning", text: "Arrival at the receiving factory, crane positioning, and lowering directly onto the workshop foundation." },
    ],
    faqIds: ["quote-request", "insurance", "estimate-details", "payment-terms"],
    related: ["ftl-freight-transport", "commercial-fleet-logistics", "storage-warehousing", "loading-unloading"],
    metaTitle: "Industrial Machinery & Heavy Equipment Transport | Neelkanth Transport",
    metaDescription:
      "Specialized heavy equipment and industrial machinery transport. Low-bed trailers, crane rigging, route permits, and experienced heavy transport drivers.",
  },

  {
    slug: "commercial-fleet-logistics",
    name: "Commercial Fleet & Contract Logistics",
    index: "06",
    category: "transportation",
    icon: "fleet",
    image: "assets/about/logistics-fleet.jpg",
    imageAlt: "A row of modern commercial goods trucks parked in a logistics depot at dawn",
    short:
      "Dedicated contract vehicles, corporate distribution loops, and supply chain fleet supply for businesses.",
    eyebrow: "Fleet Solutions",
    heroTitle: "Contract commercial transportation and supply chain fleet supply",
    overview:
      "Businesses needing consistent, reliable transportation require more than one-off vehicle bookings — they need dedicated fleet contracts and dependable supply chain partners. Neelkanth Transport Services provides long-term commercial logistics partnerships, supplying dedicated closed-container vehicles, vetted drivers, and daily warehouse-to-dealer distribution runs. We manage fleet maintenance, fuel logistics, driver compliance, and backup vehicles to keep your supply chain running smoothly.",
    benefitsTitle: "Turnkey enterprise transportation",
    benefits: [
      {
        title: "Dedicated vehicle assignment",
        text: "Trucks dedicated exclusively to your operational routes, branded to your corporate identity if required.",
      },
      {
        title: "Guaranteed vehicle uptime",
        text: "Standby vehicles and rapid replacement protocols ensure zero delivery delays caused by mechanical issues.",
      },
      {
        title: "Transparent corporate billing",
        text: "Consolidated monthly GST invoices, customized MIS performance reports, and digital POD repositories.",
      },
      {
        title: "Experienced highway operators",
        text: "Strictly background-verified, commercially licensed drivers with regular defensive driving and safety training.",
      },
    ],
    process: [
      { title: "Operational route mapping", text: "We analyze your dispatch volume, frequency, routes, cargo density, and turnaround requirements." },
      { title: "Service level agreement (SLA)", text: "Agreed vehicle specifications, reporting frequency, transit turnaround times, and contract pricing are formalized." },
      { title: "Fleet deployment", text: "GPS-installed container vehicles and assigned drivers are integrated into your warehouse schedule." },
      { title: "Continuous MIS review", text: "Monthly dispatch reports, on-time delivery metrics, and capacity scaling meetings." },
    ],
    faqIds: ["payment-terms", "quote-request", "insurance", "shared-vs-dedicated"],
    related: ["ftl-freight-transport", "ptl-goods-transport", "storage-warehousing", "industrial-machinery-transport"],
    metaTitle: "Commercial Fleet Logistics & Contract Transport | Neelkanth Transport",
    metaDescription:
      "Dedicated commercial fleet supply and contract logistics for manufacturers, FMCG brands, and distribution hubs across North India. SLA-backed operations.",
  },

  {
    slug: "packing-unpacking",
    name: "Packing and Unpacking",
    index: "07",
    category: "relocation",
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
    faqIds: ["packing-available", "fragile-items", "prepare-belongs", "quote-request"],
    related: ["household-shifting", "loading-unloading", "office-relocation", "storage-warehousing"],
    metaTitle: "Packing & Unpacking Services | Neelkanth Transport Services",
    metaDescription:
      "Professional packing and unpacking support — protective material, careful wrapping of fragile items and room-wise carton marking for household and office moves.",
  },

  {
    slug: "loading-unloading",
    name: "Loading and Unloading",
    index: "08",
    category: "relocation",
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
    index: "09",
    category: "specialized",
    icon: "car",
    image: "assets/services/vehicle-transport.jpg",
    imageAlt:
      "A multi-car carrier trailer loaded with sedans and a covered motorcycle on a highway shoulder",
    short:
      "Vehicle transportation for cars and two-wheelers in closed carriers, coordinated alongside a move or standalone.",
    eyebrow: "Vehicle Carrier",
    heroTitle: "Moving your vehicle with safety inspections and enclosed carriers",
    overview:
      "When a family relocates between cities or an executive transfers, the car or motorcycle requires dedicated care. Our specialized vehicle transportation service covers the movement of four-wheelers and two-wheelers in closed car carrier trailers or customized vehicle containment sections. Every vehicle undergoes a thorough pre-loading inspection report with high-resolution condition photos, wheel chocks, and tie-down securing.",
    benefitsTitle: "What our vehicle transport covers",
    benefits: [
      {
        title: "Digital condition inspection",
        text: "The visible exterior condition, odometer reading, and fuel levels are documented at pickup with photographic records.",
      },
      {
        title: "Hydraulic carriers & safety tie-downs",
        text: "Enclosed hydraulic car trailers prevent exposure to highway road debris, weather elements, and scratches.",
      },
      {
        title: "Specialized bike crating",
        text: "Motorcycles and scooters are wrapped in multi-layer foam sheets and secured in wooden cage crates.",
      },
      {
        title: "Doorstep pickup & handover",
        text: "Door-to-door vehicle delivery directly to your residential address or company parking bay.",
      },
    ],
    process: [
      { title: "Vehicle details", text: "Vehicle make, model, chassis details, pickup address and delivery city are registered." },
      { title: "Inspection & handover", text: "A comprehensive digital condition report is signed by our surveyor and the vehicle owner." },
      { title: "Loading & securing", text: "The vehicle is driven up hydraulic ramps, positioned on wheel stoppers, and locked with ratchet straps." },
      { title: "Delivery & joint inspection", text: "Vehicle is unloaded at destination and verified against the pickup inspection report." },
    ],
    faqIds: ["vehicle-transport", "intercity-move", "quote-request", "insurance"],
    related: ["intercity-relocation", "household-shifting", "ftl-freight-transport", "storage-warehousing"],
    metaTitle: "Car & Bike Transportation Services | Neelkanth Transport Services",
    metaDescription:
      "Enclosed car carrier and two-wheeler bike transport services across North India. Detailed condition inspection, GPS tracking, and insurance.",
  },

  {
    slug: "local-shifting",
    name: "Local Shifting (Within City)",
    index: "10",
    category: "relocation",
    icon: "map-pin",
    image: "assets/cities/city-transport.jpg",
    imageAlt: "A goods truck crossing a city flyover under an overcast sky",
    short:
      "Same-city household or office shifting with single-day execution and building access coordination.",
    eyebrow: "Within City",
    heroTitle: "Short distance, same high standard of planning",
    overview:
      "A local move is often treated as a quick trip with a tempo, but the handling requirements are not smaller — the items are the same, the staircase is the same, and the timing is tighter because the whole move usually happens in a single day. Our local shifting service is planned around a short, tight schedule: packing and loading in one morning window, transit across the city, and unloading and placement in the afternoon window.",
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
    name: "Intercity Highway Logistics",
    index: "11",
    category: "transportation",
    icon: "route",
    image: "assets/hero/hero-transport.jpg",
    imageAlt: "A closed-body goods truck travelling on a highway in early morning haze",
    short:
      "Long-distance intercity transportation and relocation with scheduled highway transit and delivery coordination.",
    eyebrow: "Highway Logistics",
    heroTitle: "Intercity transport planned as a dependable journey",
    overview:
      "Moving between cities and across state borders brings distance, highway regulations, toll clearances, and handover handshakes at both ends. Whether moving personal households or commercial goods between Punjab, Haryana, Chandigarh, Delhi NCR, and other national hubs, our intercity transport service ensures GPS-tracked enclosed container trucks, clear transit duration commitments, and complete end-to-end delivery management.",
    benefitsTitle: "Intercity route assurance",
    benefits: [
      {
        title: "Dedicated or shared containers",
        text: "Choose between dedicated non-stop trucks or consolidated shared loads depending on budget and timeline.",
      },
      {
        title: "Interstate road clearance",
        text: "We manage commercial permits, border green-channel clearances, and e-way bill compliance.",
      },
      {
        title: "Weatherproof container protection",
        text: "All-steel, closed-body container bodies prevent rain, dust, and highway vibrations from affecting your cargo.",
      },
      {
        title: "Committed delivery windows",
        text: "Specific transit times agreed upon booking with regular milestone updates sent to your phone.",
      },
    ],
    process: [
      { title: "Route requirement", text: "Origin city, destination city, item volume, timing and any vehicle to be transported are noted." },
      { title: "Transport option", text: "Shared or dedicated transport is discussed along with the expected dispatch window." },
      { title: "Packing and dispatch", text: "Packing is completed to suit the transit, and the load is dispatched on the agreed schedule." },
      { title: "Delivery coordination", text: "The receiving side is informed of progress and the unloading is scheduled at the destination." },
    ],
    faqIds: ["intercity-move", "transit-time", "shared-vs-dedicated", "insurance"],
    related: ["ftl-freight-transport", "household-shifting", "car-bike-transport", "storage-warehousing"],
    metaTitle: "Intercity Relocation & Long Distance Transport | Neelkanth Transport",
    metaDescription:
      "Intercity relocation and long-distance transport services across North India and pan-India corridors. GPS-tracked containers and committed schedules.",
  },

  {
    slug: "storage-warehousing",
    name: "Storage & Safe Warehousing",
    index: "12",
    category: "specialized",
    icon: "warehouse",
    image: "assets/about/logistics-fleet.jpg",
    imageAlt: "A row of unmarked goods trucks parked in a transport yard at dawn",
    short:
      "Short-term and planned storage facilities for household belongings, commercial inventory, and transit cargo.",
    eyebrow: "Warehousing",
    heroTitle: "Safe, 24/7 guarded holding facilities between origin and destination",
    overview:
      "Possession dates rarely line up. An office lease may start after the old one ends, a home may need renovation before belongings go in, or a business may need inventory held between dispatches. Our storage and warehousing service provides clean, pest-controlled, 24/7 CCTV guarded holding facilities in Ludhiana, Chandigarh Tricity, and Delhi NCR, with flexible tenures and itemized warehouse receipts issued on intake.",
    benefitsTitle: "What our warehousing facilities provide",
    benefits: [
      {
        title: "Defined, flexible holding periods",
        text: "Store goods for days, weeks, or months with predictable daily or monthly tariffs.",
      },
      {
        title: "Barcoded inventory manifests",
        text: "Every stored carton or pallet is catalogued and issued an itemized receipt for full accountability.",
      },
      {
        title: "Climate-conscious & pest controlled",
        text: "Clean, dry, moisture-protected concrete warehouses with regular pest eradication and fire-suppression systems.",
      },
      {
        title: "Seamless onward transport",
        text: "When you are ready, our fleet delivers your stored goods directly to your final address without third-party handling.",
      },
    ],
    process: [
      { title: "Storage requirement", text: "Item categories, approximate volume, storage duration and access needs are discussed." },
      { title: "Receipt & cataloguing", text: "Goods are received, wrapped for storage, and recorded against the agreed category manifest." },
      { title: "Secured holding", text: "Goods remain in guarded storage with 24/7 CCTV surveillance and controlled access." },
      { title: "Onward dispatch", text: "Goods are released and transported to the final address on your confirmed schedule." },
    ],
    faqIds: ["storage-needed", "estimate-details", "insurance", "quote-request"],
    related: ["ftl-freight-transport", "household-shifting", "office-relocation", "commercial-fleet-logistics"],
    metaTitle: "Storage & Warehousing Facilities | Neelkanth Transport Services",
    metaDescription:
      "Short-term and long-term secure warehousing for household goods, commercial stock and cargo in Ludhiana, Chandigarh, and Delhi NCR. 24/7 security.",
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug) || null;

export const getServicesByCategory = (cat) => {
  if (!cat || cat === "all") return services;
  return services.filter((s) => s.category === cat);
};

export default services;
