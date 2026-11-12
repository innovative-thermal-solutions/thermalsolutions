export interface PortfolioItem {
  id: string;
  name: string;
  family: "air" | "liquid" | "electrical";
  image: string;
  tag?: string;
  short: string;
  description?: string;
  material: string;
  dimension?: string;
  dimensionNote?: string;
  construction: string;
  application: string;
  considerations?: string;
}

export const PORTFOLIO_PRODUCTS: PortfolioItem[] = [
  // --- AIR COOLED ---
  {
    id: "extruded",
    name: "Extruded heat sinks",
    family: "air",
    image: "/images/portfolio/air-family.webp",
    tag: "AIR COOLED / EXTRUDED",
    short: "A practical foundation for everyday thermal challenges.",
    description:
      "Aluminum extrusion provides a cost-conscious starting point for air-cooled thermal designs. ITS develops the geometry, mounting features and finishing around the requirements of your assembly.",
    material: "Aluminum",
    construction: "Extruded profile with CNC finishing",
    application: "Power electronics and industrial equipment",
    considerations: "Airflow, fin geometry, mounting envelope and cost",
  },
  {
    id: "skived",
    name: "Skived fin heat sinks",
    family: "air",
    image: "/images/portfolio/extruded.webp",
    tag: "AIR COOLED / HIGH FIN DENSITY",
    short: "Dense fin structures for compact cooling designs.",
    description:
      "Skiving forms thin fins from a single block of aluminum or copper. ITS evaluates fin density and spacing together with the airflow and heat source layout to develop the design.",
    material: "Aluminum or copper",
    construction: "Fins formed from the base material",
    application: "Compact power electronic assemblies",
    considerations: "Fin spacing, pressure drop and thermal load",
  },
  {
    id: "heatpipe",
    name: "Embedded heat pipes",
    family: "air",
    image: "/images/portfolio/heat-pipe.webp",
    tag: "AIR COOLED / HEAT SPREADING",
    short: "Move heat away from concentrated hot spots.",
    description:
      "Heat pipes integrated into a heat sink help spread heat across the base. ITS uses this approach when concentrated heat sources make conventional heat sinks difficult to optimize.",
    material: "Aluminum heat sink with copper heat pipes",
    construction: "Heat pipes integrated into the heat sink",
    application: "RF amplifiers and concentrated heat sources",
    considerations: "Heat source placement, orientation and integration",
  },
  {
    id: "forged",
    name: "Fabricated & forged",
    family: "air",
    image: "/images/portfolio/forged.webp",
    tag: "AIR COOLED / CUSTOM GEOMETRY",
    short: "More design possibilities for your application.",
    description:
      "Fabricated air-cooled designs and cold-forged heat sinks provide additional options for fin geometry and assembly. ITS selects the process to fit the thermal and manufacturing requirements.",
    material: "Aluminum or copper, project dependent",
    construction: "Fabricated or cold-forged geometry",
    application: "Custom electronic cooling assemblies",
    considerations: "Fin geometry, production quantity and manufacturing process",
  },
  {
    id: "bonded-fin",
    name: "Bonded copper heat sinks",
    family: "air",
    image: "/images/portfolio/bonded-copper-heat-sink.webp",
    tag: "AIR COOLED / BONDED FIN",
    short: "Copper fins bonded to a base add surface area for air cooling.",
    material: "Copper fins; base specified per project",
    construction: "Copper fins bonded to a base",
    application: "Power electronics and telecommunications equipment",
  },
  {
    id: "copper-sink",
    name: "Copper heat sinks",
    family: "air",
    image: "/images/portfolio/copper-heat-sink.webp",
    tag: "AIR COOLED / SOLID COPPER",
    short: "Copper heat sinks spread heat away from electronic components.",
    material: "Copper",
    construction: "Custom copper heat sink",
    application: "Electronics with concentrated heat sources",
  },

  // --- LIQUID COOLED ---
  {
    id: "hypercool",
    name: "HyperCool cold plates",
    family: "liquid",
    image: "/images/portfolio/hypercool.webp",
    tag: "LIQUID COOLED / HYPERCOOL",
    short: "Custom flow paths. Precision thermal management.",
    description:
      "HyperCool cold plates use machined internal flow paths tailored to the heat source layout. Thermal and hydraulic modeling support the design, with friction stir welding available for leak-tight construction.",
    material: "Aluminum",
    construction: "Machined channels and friction stir welding",
    application: "Power electronics and converters",
    considerations: "Heat distribution, flow rate and pressure drop",
  },
  {
    id: "tube",
    name: "Pressed-in tube plates",
    family: "liquid",
    image: "/images/portfolio/pressed-tube.webp",
    tag: "LIQUID COOLED / EMBEDDED TUBE",
    short: "An economical route to liquid cooling.",
    description:
      "A tube pressed into a machined plate creates a simple fluid path for liquid cooling. ITS configures the tube route and plate features around component locations, system constraints and budget.",
    material: "Plate and tube materials selected for the project",
    construction: "Tube embedded into a machined plate",
    application: "Industrial equipment and electronic assemblies",
    considerations: "Tube diameter, coolant compatibility and fittings",
  },
  {
    id: "fsw",
    name: "Friction stir welded plates",
    family: "liquid",
    image: "/images/portfolio/fsw-plate.webp",
    tag: "LIQUID COOLED / SOLID-STATE JOINING",
    short: "Sealed channels for demanding cooling assemblies.",
    description:
      "Friction stir welding closes machined fluid channels using a solid-state joining process. ITS has in-house FSW capability for precision thermal assemblies in aluminum and copper.",
    material: "Aluminum or copper",
    construction: "CNC machining with friction stir welded closure",
    application: "Battery systems and power electronics",
    considerations: "Channel geometry, joint design and validation",
  },
  {
    id: "copper",
    name: "Copper brazed cold plates",
    family: "liquid",
    image: "/images/portfolio/copper-brazed.webp",
    tag: "LIQUID COOLED / COPPER",
    short: "Copper construction for demanding thermal designs.",
    description:
      "Copper vacuum-brazed cold plates are part of the ITS thermal solution portfolio. The appropriate construction is selected around the component layout, material requirements and system operating conditions.",
    material: "Copper",
    construction: "Vacuum-brazed cold plate assembly",
    application: "High-performance electronic systems",
    considerations: "Thermal load, fluid compatibility and assembly requirements",
  },
  {
    id: "bus-plate",
    name: "Electric bus battery cold plate",
    family: "liquid",
    image: "/images/portfolio/bus-plate.webp",
    tag: "LIQUID COOLED / BATTERY PACK",
    short: "A large-format cold plate developed to cool an electric bus battery pack.",
    dimension: "1,450 × 610 × 15 mm",
    dimensionNote: "Documented example (L × W × H)",
    material: "Aluminum",
    construction: "Custom aluminum battery cold plate",
    application: "Electric bus battery pack cooling",
  },

  // --- POWER DISTRIBUTION / ELECTRICAL ---
  {
    id: "busbar",
    name: "Custom busbars",
    family: "electrical",
    image: "/images/portfolio/its-busbars.webp",
    tag: "POWER DISTRIBUTION / CONDUCTIVE BARS",
    short: "Conductive bars and laminated assemblies for electrical power distribution.",
    material: "Copper or aluminum",
    construction: "Bare, coated, plated, formed or laminated",
    application: "Electrical and power electronics assemblies",
  },
];

