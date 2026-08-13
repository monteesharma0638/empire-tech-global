/**
 * R2 image manifest.
 *
 * Bucket is public and folders sit at the bucket root (no /empire-tech-global prefix).
 * Change the host in one place by setting NEXT_PUBLIC_IMAGE_BASE.
 */

export const IMAGE_BASE =
  process.env.NEXT_PUBLIC_IMAGE_BASE ??
  "https://pub-b09a677af6a84e489708bae5457ea79b.r2.dev";

const r2 = (p: string) => `${IMAGE_BASE}/${p}`;

export type ImageAsset = {
  src: string;
  alt: string;
  /** Intrinsic ratio, used to reserve layout space and avoid CLS. */
  w: number;
  h: number;
};

export const img = {
  // — Hero
  heroDusk: {
    src: r2("hero/hero-industrial-dusk.jpg"),
    alt: "Steel-framed industrial facility under construction at dusk in Rajasthan",
    w: 1376,
    h: 768,
  },
  heroMobile: {
    src: r2("hero/hero-mobile.jpg"),
    alt: "Industrial steel frame rising against a dusk sky",
    w: 928,
    h: 1152,
  },
  heroWarehouse: {
    src: r2("hero/hero-alt-warehouse.jpg"),
    alt: "Completed warehouse and logistics park with loading docks at sunrise",
    w: 1376,
    h: 768,
  },

  // — Sectors
  sectorFactory: {
    src: r2("sectors/sector-factory.jpg"),
    alt: "Interior of a clear-span manufacturing factory shed",
    w: 1200,
    h: 896,
  },
  sectorWarehouse: {
    src: r2("sectors/sector-warehouse.jpg"),
    alt: "Clear-span warehouse interior with polished concrete floor",
    w: 1200,
    h: 896,
  },
  sectorSchool: {
    src: r2("sectors/sector-school.jpg"),
    alt: "Newly built modern school campus building",
    w: 1200,
    h: 896,
  },
  // NOTE: uploaded as "sector-collage.jpg" (typo for college). Referenced as-is.
  sectorCollege: {
    src: r2("sectors/sector-collage.jpg"),
    alt: "Modern college academic block with landscaped plaza",
    w: 1200,
    h: 896,
  },
  sectorHospital: {
    src: r2("sectors/sector-hospital.jpg"),
    alt: "Completed multi-storey hospital building with ambulance porch",
    w: 1200,
    h: 896,
  },
  sectorTownship: {
    src: r2("sectors/sector-township.jpg"),
    alt: "Aerial view of a planned township development near Jaipur",
    w: 1200,
    h: 896,
  },

  // — About
  aboutSiteVisit: {
    src: r2("about/about-site-visit.jpg"),
    alt: "EmpireTech Global engineers reviewing drawings on site",
    w: 928,
    h: 1152,
  },
  aboutJaipur: {
    src: r2("about/about-jaipur-context.jpg"),
    alt: "Jaipur industrial outskirts at dawn with the Aravalli hills beyond",
    w: 1584,
    h: 672,
  },

  // — Capabilities
  capDrawings: {
    src: r2("capabilities/cap-architectural-drawings.jpg"),
    alt: "Architectural site plans and elevations on a drafting desk",
    w: 1264,
    h: 848,
  },
  capStructural: {
    src: r2("capabilities/cap-structural-engineering.jpg"),
    alt: "Steel reinforcement detail at a concrete column junction",
    w: 1264,
    h: 848,
  },
  capCost: {
    src: r2("capabilities/cap-cost-estimation.jpg"),
    alt: "Project cost ledger, calculator and estimates on a desk",
    w: 1264,
    h: 848,
  },
  capSourcing: {
    src: r2("capabilities/cap-material-sourcing.jpg"),
    alt: "Organised construction material yard with steel, cement and blocks",
    w: 1264,
    h: 848,
  },

  // — Process
  processBg: {
    src: r2("process/process-bg.jpg"),
    alt: "",
    w: 1376,
    h: 768,
  },
  processHandover: {
    src: r2("process/process-handover.jpg"),
    alt: "Spotless completed corridor of a newly handed-over building",
    w: 1264,
    h: 848,
  },

  // — Why us
  whyOneTeam: {
    src: r2("why/why-one-team.jpg"),
    alt: "Project manager coordinating work on an active site",
    w: 1264,
    h: 848,
  },
  whyCompliance: {
    src: r2("why/why-compliance.jpg"),
    alt: "Engineer reviewing approval drawings against site compliance checks",
    w: 1264,
    h: 848,
  },

  // — Safety
  safetyPpe: {
    src: r2("safety/safety-ppe.jpg"),
    alt: "Construction crew in full PPE at the start of a shift",
    w: 1264,
    h: 848,
  },
  safetyInspection: {
    src: r2("safety/safety-inspection.jpg"),
    alt: "Quality inspector checking a freshly poured concrete slab",
    w: 1264,
    h: 848,
  },
  safetyTraining: {
    src: r2("safety/safety-training.jpg"),
    alt: "Site safety toolbox talk with the construction crew",
    w: 1264,
    h: 848,
  },

  // — Team
  teamEngineers: {
    src: r2("team/team-engineers.jpg"),
    alt: "The EmpireTech Global engineering and site team",
    w: 1376,
    h: 768,
  },
  teamSiteOffice: {
    src: r2("team/team-site-office.jpg"),
    alt: "Organised construction site project office",
    w: 1264,
    h: 848,
  },
  // Real headshots, supplied by the directors. Square, with the subject inside a
  // circle that overshoots the frame — they are only ever rendered round.
  directorAshwil: {
    src: r2("team/director-ashwil.jpg"),
    alt: "Ashwil Bhupesh, Director at EmpireTech Global",
    w: 512,
    h: 512,
  },
  directorDevdeep: {
    src: r2("team/director-devdeep.jpg"),
    alt: "Devdeep Singh, Director at EmpireTech Global",
    w: 512,
    h: 512,
  },
  avatarPlaceholder: {
    src: r2("team/avatar-placeholder.png"),
    alt: "Director portrait",
    w: 1024,
    h: 1024,
  },

  // — CTA / contact
  ctaLetsBuild: {
    src: r2("cta/cta-lets-build.jpg"),
    alt: "",
    w: 1584,
    h: 672,
  },
  contactOffice: {
    src: r2("cta/contact-office-exterior.jpg"),
    alt: "EmpireTech Global office entrance in Jaipur",
    w: 1264,
    h: 848,
  },

  // — Textures & meta
  textureConcrete: {
    src: r2("textures/texture-navy-concrete.jpg"),
    alt: "",
    w: 1024,
    h: 1024,
  },
  textureBlueprint: {
    src: r2("textures/texture-blueprint-grid.png"),
    alt: "",
    w: 1024,
    h: 1024,
  },
  ogImage: {
    src: r2("meta/og-image.jpg"),
    alt: "EmpireTech Global — industrial, warehouse and institutional construction",
    w: 1584,
    h: 672,
  },
  notFound: {
    src: r2("meta/404-blueprint.jpg"),
    alt: "A single rolled drawing on an empty concrete floor",
    w: 1264,
    h: 848,
  },
} satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof img;
