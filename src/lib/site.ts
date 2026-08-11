/**
 * Single source of truth for company facts.
 * Everything here is taken from the brochure / flyer — do not invent claims.
 */

export const site = {
  name: "EmpireTech Global",
  legalName: "EmpireTech Global Pvt. Ltd.",
  tagline: "Creating your paradise",
  promise: ["Engineered right", "Cleared right", "Delivered on time"],
  descriptor: "A Jaipur-based construction & project delivery company",
  quote:
    "We build what industries and institutions depend on — engineered right, cleared right, delivered on time.",

  // Update this once the domain is live; drives canonical URLs, sitemap and OG tags.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://empiretechglobal.com",

  phones: [
    { label: "+91 96721 19046", href: "tel:+919672119046", raw: "919672119046" },
    { label: "+91 89300 67567", href: "tel:+918930067567", raw: "918930067567" },
  ],
  email: "communications.etg@gmail.com",
  address: {
    lines: [
      "Chamber 1, Basement, C-28",
      "Panchsheel Colony, Ajmer Road",
      "Jaipur 302019",
    ],
    city: "Jaipur",
    region: "Rajasthan",
    postalCode: "302019",
    country: "IN",
  },
  serviceArea: "Rajasthan and the industrial belts near NCR",

  directors: [
    {
      name: "Ashwil Bhupesh",
      role: "Director",
      credential: "BTech, IIT Delhi",
      phone: "+91 96721 19046",
      href: "tel:+919672119046",
    },
    {
      name: "Devdeep Singh",
      role: "Director",
      credential: "BTech, Civil Engineering",
      phone: "+91 89300 67567",
      href: "tel:+918930067567",
    },
  ],
} as const;

export const nav = [
  { label: "What we build", href: "/what-we-build", sheet: "02" },
  { label: "Capabilities", href: "/capabilities", sheet: "04" },
  { label: "Process", href: "/process", sheet: "05" },
  { label: "About", href: "/about", sheet: "03" },
  { label: "Contact", href: "/contact", sheet: "09" },
] as const;

/** Sheet register — drives the scroll rail and section numbering on the home page. */
export const sheets = [
  { id: "hero", n: "01", title: "Cover" },
  { id: "sectors", n: "02", title: "What we build" },
  { id: "story", n: "03", title: "Story & mission" },
  { id: "capabilities", n: "04", title: "Design & engineering" },
  { id: "process", n: "05", title: "End-to-end process" },
  { id: "costing", n: "06", title: "Open costs" },
  { id: "safety", n: "07", title: "Safety & quality" },
  { id: "team", n: "08", title: "Team & values" },
  { id: "contact", n: "09", title: "Let's build" },
] as const;

export const sectors = [
  {
    slug: "industrial",
    code: "IND",
    name: "Industrial facilities",
    short: "Factories",
    singular: "factory",
    blurb:
      "Factory sheds and manufacturing units, built to handle heavy loads, good airflow, and long daily use.",
    detail:
      "Clear-span sheds sized to your machine layout and crane loads, with ventilation and floor specs set against how the plant actually runs — not a generic shed with equipment dropped in.",
    image: "sectorFactory",
  },
  {
    slug: "warehousing",
    code: "WHS",
    name: "Warehouses & logistics parks",
    short: "Warehouses",
    singular: "warehouse",
    blurb: "Open, clear-span storage spaces built for easy loading and strong floors.",
    detail:
      "Column-free spans, dock levels set to your vehicle mix, and power-floated floors specified for the racking and MHE you plan to run.",
    image: "sectorWarehouse",
  },
  {
    slug: "schools",
    code: "SCH",
    name: "Schools",
    short: "Schools",
    singular: "school",
    blurb: "Classrooms, labs, and campuses, built to meet state education norms.",
    detail:
      "Classroom sizes, corridor widths, lighting and sanitation planned against state education norms and fire requirements before the layout is frozen.",
    image: "sectorSchool",
  },
  {
    slug: "colleges",
    code: "CLG",
    name: "Colleges",
    short: "Colleges",
    singular: "college",
    blurb: "Academic blocks and hostels, built to UGC/AICTE rules and accessible for everyone.",
    detail:
      "Academic blocks, labs and hostels planned to UGC/AICTE norms, with accessible routes designed in rather than retrofitted after inspection.",
    image: "sectorCollege",
  },
  {
    slug: "hospitals",
    code: "HSP",
    name: "Hospitals",
    short: "Hospitals",
    singular: "hospital",
    blurb:
      "From small diagnostic blocks to full hospital campuses — with the same focus on getting it right and getting it approved.",
    detail:
      "Departmental adjacencies, clean and soiled routes, and services planned early, because on a hospital the approvals and the layout decide each other.",
    image: "sectorHospital",
  },
  {
    slug: "townships",
    code: "TWN",
    name: "Townships",
    short: "Townships",
    singular: "township",
    blurb: "Planned residential development — layout, services and staged delivery.",
    detail:
      "Plot layouts, internal roads and service networks planned for phased delivery, so early phases can be handed over while later ones are still building.",
    image: "sectorTownship",
  },
] as const;

export const capabilities = [
  {
    code: "ARCH",
    title: "Architectural drawings",
    body: "Site plans, floor plans, and elevations — ready for authority approval, for any building type.",
    image: "capDrawings",
  },
  {
    code: "STRC",
    title: "Structural engineering",
    body: "Design that follows Indian safety codes (IS 456 / IS 800 / IS 1893), for the load and span your building needs.",
    image: "capStructural",
  },
  {
    code: "COST",
    title: "Quantity & cost estimation",
    body: "A full, item-by-item list of materials and costs — for civil, finishing, and system works.",
    image: "capCost",
  },
  {
    code: "SRCE",
    title: "Material & sourcing advice",
    body: "Guidance on brand, grade, and bulk-rate sourcing, to help control your material costs.",
    image: "capSourcing",
  },
] as const;

export const processStages = [
  {
    n: "01",
    code: "FEAS",
    title: "Site & feasibility study",
    body: "We check the land, load, and access before any planning starts.",
  },
  {
    n: "02",
    code: "APPR",
    title: "Rules & approvals mapping",
    body: "We find out every clearance your project will need, right at the start.",
  },
  {
    n: "03",
    code: "DSGN",
    title: "Design & structure planning",
    body: "We plan the layout and structure to Indian safety codes, sized to your needs.",
  },
  {
    n: "04",
    code: "COST",
    title: "Cost estimate & budget",
    body: "We share a full, item-by-item cost list and a stage-wise budget plan.",
  },
  {
    n: "05",
    code: "DOCS",
    title: "Approvals & paperwork",
    body: "We prepare all drawings and files needed for government approval.",
  },
  {
    n: "06",
    code: "PROC",
    title: "Sourcing & vendors",
    body: "We source materials and bring in the right contractors for your project.",
  },
  {
    n: "07",
    code: "CONS",
    title: "Construction",
    body: "Civil, structural, and system works go ahead under close site supervision.",
  },
  {
    n: "08",
    code: "QLTY",
    title: "Quality checks",
    body: "We inspect the work at every stage before we sign off on it.",
  },
  {
    n: "09",
    code: "HAND",
    title: "Handover & support",
    body: "A final check, full paperwork, and handover — plus support after that.",
  },
] as const;

export const whyUs = [
  {
    title: "One team, one owner",
    body: "One team handles your project from start to finish. No blame-shifting between architect, builder, and supplier.",
  },
  {
    title: "Rules checked early",
    body: "Fire safety, structure, and other approvals are planned at the design stage — not fixed later when an inspection fails.",
  },
  {
    title: "Engineering-led design",
    body: "Our structural and electrical/plumbing design follows Indian safety codes, sized to what your building actually needs.",
  },
  {
    title: "Clear, open costing",
    body: "You get a full, item-by-item cost list before work starts. You always know where the money goes.",
  },
  {
    title: "On-time, by stage",
    body: "A dedicated project manager tracks each stage of work and keeps your build on schedule.",
  },
  {
    title: "Built to run, not just to look good",
    body: "We design for how your factory, hospital, or campus will work every day — not just how it looks on handover day.",
  },
] as const;

export const values = [
  { title: "Trust", body: "We keep our commitments. No renegotiating terms halfway through the project." },
  { title: "Transparency", body: "Open-book cost lists. No hidden charges or surprise line items." },
  { title: "Promise", body: "What we agree to build is exactly what we deliver." },
  { title: "On-time", body: "We track every stage of the timeline, down to the day." },
  { title: "Within budget", body: "Cost control is part of every design decision we make." },
  { title: "One point of contact", body: "One project manager. One number to call. No passing you between teams." },
] as const;

export const costing = {
  ours: [
    "Full, item-by-item cost list before work begins",
    "Budget shared stage by stage",
    "Material choices shown to you openly",
    "One person to call for any cost question",
  ],
  theirs: [
    "Different, uncoordinated vendors for design and build",
    "Cost increases show up after work has started",
    "Material changes made without telling you",
    "No one person responsible when timelines slip",
  ],
} as const;

export const safety = [
  { title: "Safe site, always", body: "Every worker follows PPE and safety rules on site." },
  { title: "Regular inspections", body: "We check the work at every stage of building." },
  { title: "Ongoing training", body: "Site staff and contractors get regular safety training." },
  { title: "National standards", body: "All work follows national construction and safety codes." },
  { title: "Early risk checks", body: "We flag risks early, before they turn into problems." },
  { title: "Independent audits", body: "Work is checked against our own standards before sign-off." },
] as const;
