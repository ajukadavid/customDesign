export type Service = {
  id: string
  slug: string
  icon: string
  title: string
  summary: string
  detail: string
  image: string
  tag?: string
  featured?: boolean
  wide?: boolean
}

export type ProjectCategory =
  | "Carports & Pergolas"
  | "Solar Carports"
  | "Billboards"
  | "Warehouses"
  | "Moving Shops & Offices"
  | "Custom Design & Construction"

export type Project = {
  id: string
  year: string
  category: ProjectCategory
  title: string
  description: string
  image: string
  featured?: boolean
}

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "Carports & Pergolas",
  "Solar Carports",
  "Billboards",
  "Warehouses",
  "Moving Shops & Offices",
  "Custom Design & Construction",
]

export const siteImages = {
  hero: "/images/work/w18.jpg",
  about: "/images/work/w06.jpg",
  warehouseFeature: "/images/work/w30.jpg",
  steelGrade: "/images/work/w01.jpg",
  measure: "/images/work/w01.jpg",
  design: "/images/work/w25.jpg",
  construct: "/images/work/w38.jpg",
} as const

export const services: Service[] = [
  {
    id: "01",
    slug: "carports-pergolas",
    icon: "garage",
    title: "Carports & Pergolas",
    summary:
      "We design and construct custom carports and pergolas that provide protection, functionality, and an attractive addition to your property.",
    detail:
      "We design and construct custom carports and pergolas that provide protection, functionality, and an attractive addition to your property.",
    image: "/images/work/w06.jpg",
  },
  {
    id: "02",
    slug: "solar-carports",
    icon: "solar_power",
    title: "Solar Carports",
    tag: "SOLAR-READY",
    summary:
      "We create innovative solar carport structures that combine vehicle protection with the integration of solar energy systems, making better use of available space.",
    detail:
      "We create innovative solar carport structures that combine vehicle protection with the integration of solar energy systems, making better use of available space.",
    image: "/images/work/w25.jpg",
  },
  {
    id: "03",
    slug: "billboards",
    icon: "aspect_ratio",
    title: "Billboards",
    summary:
      "We design and construct sturdy billboard structures engineered to provide reliable support for outdoor advertising installations.",
    detail:
      "We design and construct sturdy billboard structures engineered to provide reliable support for outdoor advertising installations.",
    image: "/images/work/w12.jpg",
  },
  {
    id: "04",
    slug: "warehouses",
    icon: "factory",
    title: "Warehouses",
    tag: "HIGH-CAPACITY",
    featured: true,
    summary:
      "We provide construction solutions for functional and durable warehouse structures, designed around the operational requirements of businesses.",
    detail:
      "We provide construction solutions for functional and durable warehouse structures, designed around the operational requirements of businesses.",
    image: "/images/work/w30.jpg",
  },
  {
    id: "05",
    slug: "moving-shops",
    icon: "storefront",
    title: "Moving Shops & Offices",
    summary:
      "We design and construct mobile shops and offices that provide flexible, practical spaces for businesses seeking mobility without compromising functionality and presentation.",
    detail:
      "We design and construct mobile shops and offices that provide flexible, practical spaces for businesses seeking mobility without compromising functionality and presentation.",
    image: "/images/cdc-shop-green.jpg",
  },
  {
    id: "06",
    slug: "custom",
    icon: "architecture",
    title: "Custom Design & Construction",
    wide: true,
    summary:
      "Beyond our core services, we undertake custom structural projects based on specific client requirements, from concept and design through to construction and completion.",
    detail:
      "Beyond our core services, we undertake custom structural projects based on specific client requirements, from concept and design through to construction and completion.",
    image: "/images/work/w33.jpg",
  },
]

export const projects: Project[] = [
  {
    id: "PROJECT_01",
    year: "2026",
    category: "Carports & Pergolas",
    title: "Night Carport",
    description:
      "Finished cantilevered carport with layered ACP ceiling, recessed lighting, and dark structural columns.",
    image: "/images/work/w18.jpg",
    featured: true,
  },
  {
    id: "PROJECT_02",
    year: "2026",
    category: "Carports & Pergolas",
    title: "White Garden Carport",
    description:
      "Open-sided white steel carport with slanted columns over patterned paving and planted borders.",
    image: "/images/work/w06.jpg",
    featured: true,
  },
  {
    id: "PROJECT_03",
    year: "2026",
    category: "Billboards",
    title: "House of Freeda Directory",
    description:
      "Multi-tenant pylon sign in orange ACP cladding with stacked lightboxes for plaza tenants.",
    image: "/images/work/w12.jpg",
    featured: true,
  },
  {
    id: "PROJECT_04",
    year: "2026",
    category: "Carports & Pergolas",
    title: "Decorative Steel Pergola",
    description:
      "Patio pergola with laser-cut Greek-key beams, circular cutouts, and custom scalloped brackets.",
    image: "/images/work/w33.jpg",
    featured: true,
  },
  {
    id: "PROJECT_05",
    year: "2026",
    category: "Carports & Pergolas",
    title: "White Driveway Carport",
    description:
      "Cantilevered white steel carport with three slanted columns and a grid roof over herringbone pavers.",
    image: "/images/work/w35.jpg",
  },
  {
    id: "PROJECT_06",
    year: "2026",
    category: "Carports & Pergolas",
    title: "Charcoal Cantilever",
    description:
      "Two-tone charcoal and white ACP canopy on a T-cantilever frame with recessed spotlights.",
    image: "/images/work/w22.jpg",
  },
  {
    id: "PROJECT_07",
    year: "2026",
    category: "Carports & Pergolas",
    title: "Yellow & White Canopy",
    description:
      "Custom yellow-and-white slatted canopy with matching geometric gate and integrated lighting.",
    image: "/images/work/w20.jpg",
  },
  {
    id: "PROJECT_08",
    year: "2026",
    category: "Carports & Pergolas",
    title: "Black Filigree Canopy",
    description:
      "Gloss black cantilever with laser-cut filigree ceiling panels, LED spots, and tension-cable support.",
    image: "/images/work/w19.jpg",
  },
  {
    id: "PROJECT_09",
    year: "2026",
    category: "Carports & Pergolas",
    title: "Bronze Polycarbonate Canopy",
    description:
      "Wall-mounted black steel canopy with circular beam cutouts and bronze-tinted polycarbonate roofing.",
    image: "/images/work/w09.jpg",
  },
  {
    id: "PROJECT_10",
    year: "2026",
    category: "Carports & Pergolas",
    title: "White Steel Pergola",
    description:
      "Open white pergola frame against a contemporary residence, ready for roof infill.",
    image: "/images/work/w31.jpg",
  },
  {
    id: "PROJECT_11",
    year: "2026",
    category: "Carports & Pergolas",
    title: "Scalloped Bracket Pergola",
    description:
      "Red-primed patio pergola with ornamental brackets and circular cutouts during on-site assembly.",
    image: "/images/work/w34.jpg",
  },
  {
    id: "PROJECT_12",
    year: "2026",
    category: "Carports & Pergolas",
    title: "Dark Driveway Carport",
    description:
      "Near-complete dark cantilever carport with slanted columns over interlocking stone paving.",
    image: "/images/work/w36.jpg",
  },
  {
    id: "PROJECT_13",
    year: "2026",
    category: "Carports & Pergolas",
    title: "Translucent Canopy Install",
    description:
      "Black-framed cantilever canopy with translucent roof panels being fitted on a tiled courtyard.",
    image: "/images/work/w10.jpg",
  },
  {
    id: "PROJECT_14",
    year: "2026",
    category: "Carports & Pergolas",
    title: "Tension-Cable Carport",
    description:
      "Gloss black ACP carport with rear-wall columns and steel tension rods during finishing.",
    image: "/images/work/w21.jpg",
  },
  {
    id: "PROJECT_15",
    year: "2026",
    category: "Carports & Pergolas",
    title: "ACP Canopy Cladding",
    description:
      "White cantilever canopy receiving TINONE aluminium composite panels and decorative fascia.",
    image: "/images/work/w17.jpg",
  },
  {
    id: "PROJECT_16",
    year: "2026",
    category: "Carports & Pergolas",
    title: "Panel Reveal",
    description:
      "On-site ACP installation as protective film is stripped from a black-and-white cantilever canopy.",
    image: "/images/work/w23.jpg",
  },
  {
    id: "PROJECT_17",
    year: "2026",
    category: "Carports & Pergolas",
    title: "Steel Carport Frame",
    description:
      "Red-primed four-bay carport skeleton with purlins, base plates, and concrete footings.",
    image: "/images/work/w02.jpg",
  },
  {
    id: "PROJECT_18",
    year: "2026",
    category: "Solar Carports",
    title: "Solar Carport Design",
    description:
      "Engineered solar carport model with panel layout, elevations, and foundation detail.",
    image: "/images/work/w25.jpg",
  },
  {
    id: "PROJECT_19",
    year: "2026",
    category: "Solar Carports",
    title: "Solar Array Model",
    description:
      "Isometric design for a long-span solar canopy on paired steel columns and pad footings.",
    image: "/images/work/w24.jpg",
  },
  {
    id: "PROJECT_20",
    year: "2026",
    category: "Billboards",
    title: "St. Global Pilar Energy",
    description:
      "Fuel-station pylon with ACP cladding, 3D lettering, and integrated LED price boards.",
    image: "/images/work/w14.jpg",
  },
  {
    id: "PROJECT_21",
    year: "2026",
    category: "Billboards",
    title: "Renny's Foods Pylon",
    description:
      "Red ACP pylon with stacked 3D channel-letter boxes for a multi-tenant food court.",
    image: "/images/work/w16.jpg",
  },
  {
    id: "PROJECT_22",
    year: "2026",
    category: "Billboards",
    title: "ACP Sign Fabrication",
    description:
      "Large outdoor cladding assembly in Healthy Choice Bond aluminium composite panels.",
    image: "/images/work/w13.jpg",
  },
  {
    id: "PROJECT_23",
    year: "2026",
    category: "Billboards",
    title: "Pylon Steel Frame",
    description:
      "Welded box-section pylon skeleton with base plate and internal bracing, ready for cladding.",
    image: "/images/work/w15.jpg",
  },
  {
    id: "PROJECT_24",
    year: "2026",
    category: "Warehouses",
    title: "Multi-Bay Steel Frame",
    description:
      "On-site welding of a tiered red-primed steel roof grid for a large covered structure.",
    image: "/images/work/w30.jpg",
  },
  {
    id: "PROJECT_25",
    year: "2025",
    category: "Moving Shops & Offices",
    title: "Service Kiosk",
    description:
      "Mobile shop unit with service window and awning — flexible space without compromising presentation.",
    image: "/images/cdc-shop-green.jpg",
  },
  {
    id: "PROJECT_26",
    year: "2025",
    category: "Moving Shops & Offices",
    title: "Bar & Café Unit",
    description:
      "Fitted moving shop with counter, hatch, and interior fit-out for hospitality use.",
    image: "/images/cdc-shop-bar.jpg",
  },
  {
    id: "PROJECT_27",
    year: "2026",
    category: "Moving Shops & Offices",
    title: "Canopy over Shop Unit",
    description:
      "Steel canopy frame assembled over a modular shop and office unit on a commercial lot.",
    image: "/images/work/w32.jpg",
  },
  {
    id: "PROJECT_28",
    year: "2026",
    category: "Custom Design & Construction",
    title: "On-Site Welding",
    description:
      "Stick welding of base plates onto red-primed hollow-section steel at the job site.",
    image: "/images/work/w38.jpg",
  },
  {
    id: "PROJECT_29",
    year: "2026",
    category: "Custom Design & Construction",
    title: "Base Plate Anchoring",
    description:
      "Column base plate aligned with a layout string while masonry anchors are drilled into paving.",
    image: "/images/work/w01.jpg",
  },
]

export const processSteps = [
  {
    id: "01",
    title: "Measure",
    copy: "We understand the space, requirements, dimensions, and purpose of every project.",
    image: siteImages.measure,
  },
  {
    id: "02",
    title: "Design",
    copy: "We develop practical and customized solutions that balance functionality, aesthetics, and structural considerations.",
    image: siteImages.design,
  },
  {
    id: "03",
    title: "Construct",
    copy: "We turn the approved concept into a finished structure through careful execution and quality workmanship.",
    image: siteImages.construct,
  },
] as const

export const steelGrades = [
  {
    grade: "S275JR",
    use: "General structural members, secondary framing",
    yield: "275 MPa",
    tag: "STANDARD",
  },
  {
    grade: "S355JR / S355J2",
    use: "Primary frames, long-span warehouses, high wind regions",
    yield: "355 MPa",
    tag: "STEEL-GRADE",
  },
  {
    grade: "S460",
    use: "Heavy columns, crane beams, high-capacity members",
    yield: "460 MPa",
    tag: "HIGH-CAPACITY",
  },
  {
    grade: "Galvanized / HDG",
    use: "Carports, solar arrays, coastal and high-corrosion sites",
    yield: "As specified",
    tag: "SOLAR-READY",
  },
] as const

export const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/steel-grade", label: "Steel Grade" },
  { to: "/about", label: "About" },
  { to: "/process", label: "Process" },
] as const
