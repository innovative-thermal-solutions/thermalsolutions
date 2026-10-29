export interface TeamMember {
  name: string;
  role: string;
  title: string;
  email: string;
  phone?: string;
  cell?: string;
  bio: string;
  experience?: string;
  image: string;
}

export interface Machine {
  name: string;
  model: string;
  type: string;
  axis: string;
  specs: string;
  purpose: string;
  image: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  heroMetric: string;
  metricLabel: string;
  summary: string;
  challenge: string;
  engineeringApproach: string;
  specifications: { label: string; value: string }[];
  results: string[];
  image: string;
  chartImage?: string;
}

export interface Milestone {
  year: string;
  step: string;
  title: string;
  facilitySize?: string;
  description: string;
  highlights: string[];
}

export const COMPANY_INFO = {
  name: "Innovative Thermal Solutions Inc.",
  shortName: "ITS Cooling",
  tagline: "Engineered to Control Heat",
  founded: "2020",
  address: "2-290 Southgate Drive, Guelph, ON N1G 4P5, Canada",
  facilitySize: "6,000 sq ft",
  teamCount: "27+",
  combinedExperience: "50+ Years",
  ceoExperience: "26 Years",
  ceoPatents: "2 Patents",
  phone: "+1 (519) 763-4454",
  mobile: "+1 (519) 654-0658",
  salesPhone: "+1 (647) 803-3647",
  supplyChainPhone: "+1 (519) 222-2336",
  email: "info@itscooling.com",
  salesEmail: "Abdu.Zaghlol@itscooling.com",
  engineeringEmail: "Engineering@itscooling.com",
  ceoEmail: "ahmed.zaghlol@itscooling.com",
  supplyChainEmail: "Nada.Zaghlol@itscooling.com",
  website: "www.itscooling.com",
  isoCertifiedDate: "January 17, 2021",
  isoStatus: "ISO 9001:2015 Certified",
  as9100Status: "AS9100 Certification (In Progress)",
  cgpItarStatus: "Canadian Controlled Goods Program (CGP) & ITAR Compliant (In Progress)",
  vision: "To be the leader in designing, manufacturing and testing quality heat sink products for the electronics industries.",
  mission: "We pride ourselves in delivering innovative solutions through designing and manufacturing quality heat sink products on time for the electronics industries.",
  ceoQuote: "ITS is a turnkey engineering and manufacturing supplier delivering quality heat sink products on time. We partner with our customers utilizing our 75 years of hands on experience designing, engineering, testing and manufacturing heat sinks for a wide spectrum of thermal challenges from simple to complex designs.",
  values: [
    {
      title: "Workplace of Choice",
      description: "ITS Cooling to be the workplace of choice for our expert team of thermal and mechanical specialists."
    },
    {
      title: "Trusted Partner",
      description: "ITS Cooling to be a trusted and preferred engineering & manufacturing partner for our customers globally."
    },
    {
      title: "Environmentally Responsible",
      description: "ITS Cooling to be an environmentally responsible citizen for our communities through green, solid-state processes."
    },
    {
      title: "Committed to Innovation",
      description: "ITS Cooling to be committed to deliver cutting-edge, reliable thermal solutions for complex high-power electronics."
    }
  ]
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Ahmed Zaghlol, Ph.D., P.Eng.",
    role: "Founder & CEO",
    title: "President and CEO",
    email: "ahmed.zaghlol@itscooling.com",
    phone: "+1 (519) 763-4454",
    cell: "+1 (519) 654-0658",
    bio: "Dr. Ahmed Zaghlol brings over 26 years of specialized industry leadership and holds 2 thermal patents. He spearheads ITS Cooling's engineering vision, pioneering turnkey design, advanced testing, and high-precision manufacturing for extreme thermal applications.",
    experience: "26 Years Industry Leadership • 2 Patents",
    image: "/images/assets/founder/DSC00309 (1).JPG"
  },
  {
    name: "Abdu Zaghlol",
    role: "Sales Manager",
    title: "Technical & Sales Inquiries — North America",
    email: "Abdu.Zaghlol@itscooling.com",
    cell: "+1 (647) 803-3647",
    bio: "Leads technical sales, customer application engineering, and project qualification across North America. Abdu partners closely with tier-1 defense, EV, and aerospace clients from initial feasibility through production ramp-up.",
    experience: "Technical Sales & Application Qualification",
    image: "/images/assets/img_0028.jpg"
  },
  {
    name: "Nada Zaghlol",
    role: "Supply Chain Manager",
    title: "Global Supply Chain & Operations",
    email: "Nada.Zaghlol@itscooling.com",
    cell: "+1 (519) 222-2336",
    bio: "Oversees end-to-end global supply chain operations, raw material procurement, quality assurance traceability, and partnerships with trusted Asian manufacturing suppliers for cost-competitive high-volume runs.",
    experience: "Supply Chain Optimization & Global Sourcing",
    image: "/images/assets/img_0006.jpg"
  },
  {
    name: "Sam Hemming",
    role: "Lead Mechanical Engineer",
    title: "Mechanical Design & 5-Axis CAM",
    email: "Sam.Hemming@itscooling.com",
    bio: "Specializes in complex 3D CAD mechanical modeling in SolidWorks, multi-axis CNC toolpath generation, FSW joint fixture engineering, and static structural simulations for harsh operating environments.",
    experience: "SolidWorks • 5-Axis Milling • Structural Simulation",
    image: "/images/assets/engineers/Sam Hemming Floor.jpg"
  },
  {
    name: "David Dawson",
    role: "Thermal Engineer",
    title: "CFD & Thermal Simulation Specialist",
    email: "David.Dawson@itscooling.com",
    bio: "Expert in computational fluid dynamics (CFD), multi-phase thermal simulations, pressure drop minimization, and thermal optimization using EATON SmartCFD (Qfin) and specialized simulation software.",
    experience: "EATON SmartCFD (Qfin) • Hydrodynamic Optimization",
    image: "/images/assets/engineers/David Dawson Floor.jpg"
  },
  {
    name: "Matthew Galvez",
    role: "Mechanical Engineer",
    title: "Precision Manufacturing & Tooling Engineer",
    email: "Matthew.Galvez@itscooling.com",
    bio: "Drives precision manufacturing engineering, tolerance stack-up analysis, deep drilling operations, and Friction Stir Welding parameter optimization for leak-tight cold plates.",
    experience: "FSW Station Tooling • Deep Hole CNC Machining",
    image: "/images/assets/engineers/Matt Galvez Floor.jpg"
  }
];

export const MACHINERY_EQUIPMENT: Machine[] = [
  {
    name: "Haas VF-5XT 5-Axis",
    model: "Haas VF-5XT with Trunnion Table",
    type: "5-Axis Machining Center",
    axis: "5-Axis Contouring",
    specs: "High-speed spindle, extended X-axis travel, high-pressure through-spindle coolant.",
    purpose: "Machining intricate liquid cooling channels, complex 3D fin geometries, and large-format structural cold plates.",
    image: "/images/image135.png"
  },
  {
    name: "UMC-1000SS | 5-Axis Mill",
    model: "Haas UMC-1000SS Super-Speed",
    type: "Universal 5-Axis Machining Center",
    axis: "Simultaneous 5-Axis",
    specs: "High-torque 12,000 RPM spindle, high-speed tool changer, 40-taper platform.",
    purpose: "High-speed precision milling of mission-critical cold plates, vacuum brazed bases, and aerospace electronic enclosures.",
    image: "/images/image137.jpeg"
  },
  {
    name: "VC-Ez 26 – Mazak Ez",
    model: "Mazak VC-Ez 26 Vertical Center",
    type: "High-Efficiency Vertical Machining Center",
    axis: "3-Axis with High Rigidity",
    specs: "Heavy-duty C-frame construction, high-precision linear roller guides, rapid traverse.",
    purpose: "High-volume component production, deep drilling operations, and high-precision mounting hole drilling.",
    image: "/images/image134.jpeg"
  },
  {
    name: "Haas VF-6/40",
    model: "Haas VF-6 Large VMC",
    type: "Heavy-Duty Large-Format VMC",
    axis: "3-Axis Large Envelope",
    specs: "64\" x 32\" x 30\" travels, rugged cast-iron build, rigid tapping.",
    purpose: "Machining large electric vehicle bus cold plates up to 57\" length and high-density air-cooled extruded heatsinks.",
    image: "/images/image136.jpeg"
  },
  {
    name: "Friction Stir Welding (FSW) Station",
    model: "ITS Custom In-House FSW Rig",
    type: "Solid-State Joining Station",
    axis: "Automated Feed & Spindle Load Control",
    specs: "High forging force capability, computerized rotational & traverse speed control.",
    purpose: "Hermetically seals aluminum cold plates with zero porosity, eliminating coolant leaks without melting the parent material.",
    image: "/images/assets/machining_photo.png"
  },
  {
    name: "5-Axis Deep Drilling Operation",
    model: "Deep Hole Gun Drilling System",
    type: "Specialized Deep Bore Drilling",
    axis: "Multi-Angle Precision Drilling",
    specs: "Extreme length-to-diameter ratio capability with tight bore concentricity.",
    purpose: "Boring long fluid transfer channels directly through monolithic aluminum and copper base plates.",
    image: "/images/image139.png"
  }
];

export const FSW_ADVANTAGES = [
  {
    num: "01",
    title: "Joint Strength",
    description: "Yields 100% parent metal mechanical strength. Solid-state plastic deformation preserves the temper of high-grade aluminum."
  },
  {
    num: "02",
    title: "Leak Tightness",
    description: "Zero porosity and no micro-voids. Hermetically seals liquid cold plates designed for extreme coolant pressure."
  },
  {
    num: "03",
    title: "Thermal Conductivity",
    description: "No filler wire or foreign braze flux is used, retaining pristine uninterrupted thermal conductivity across all weld seams."
  },
  {
    num: "04",
    title: "Low Distortion",
    description: "Operates well below the aluminum melting point, drastically reducing residual stresses and maintaining tight plate flatness."
  },
  {
    num: "05",
    title: "Fatigue Performance",
    description: "Unrivaled cyclic fatigue life under severe vehicle vibration and fluctuating thermal expansion cycles."
  },
  {
    num: "06",
    title: "Corrosion Resistance",
    description: "Eliminates heat-affected zone pitting and galvanic corrosion since the joined alloy composition remains homogeneous."
  },
  {
    num: "07",
    title: "Process Control",
    description: "Precision CNC automated travel speed, plunge depth, and RPM produce identical, repeatable weld joints every batch."
  },
  {
    num: "08",
    title: "Environmental Impact",
    description: "A green, eco-friendly solid-state manufacturing method with no toxic fumes, shielding gas, or consumables."
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    phase: "Customer Inputs",
    title: "Project Requirements & Envelope",
    details: "We start by analyzing your boundary conditions: maximum allowable junction temperature, heat flux hotspots, maximum packaging envelope, coolant type, flow rate, and target pressure drop.",
    deliverables: "Thermal specification sheet & design boundary freeze"
  },
  {
    step: "02",
    phase: "Thermal Engineering",
    title: "CFD Simulation & Optimization",
    details: "Using leading tools like EATON SmartCFD (Qfin), our thermal engineers run iterative CFD parametric studies to balance velocity distribution, heat spreading, and fluid pressure drop.",
    deliverables: "CFD velocity profiles, temperature contour plots, hydraulic curves"
  },
  {
    step: "03",
    phase: "Mechanical CAD",
    title: "SolidWorks & Structural Verification",
    details: "Our mechanical engineers translate CFD results into fully manufacturable SolidWorks 3D CAD assemblies with GD&T drawings, tolerance stack-up calculations, and static structural FEA.",
    deliverables: "Detailed 2D/3D CAD drawings, FEA stress reports, BOM"
  },
  {
    step: "04",
    phase: "Manufacturing & QC",
    title: "5-Axis CNC, FSW & Testing",
    details: "In-house production utilizing 5-axis CNC machining, friction stir welding, deep drilling, and ISO 9001:2015 inspection with 100% helium leak and hydro-pressure verification.",
    deliverables: "Finished hardware, CMM dimensional reports, leak test certificates"
  }
];

export const MILESTONES: Milestone[] = [
  {
    year: "2020",
    step: "01",
    title: "ITS Cooling Founded",
    facilitySize: "Initial Launch",
    description: "Founded by Dr. Ahmed Zaghlol with a clear vision: deliver high-performance, turnkey thermal engineering and heat sink manufacturing on time for global electronics pioneers.",
    highlights: ["Founded in Ontario, Canada", "Focus on custom heat sink engineering & rapid turnarounds"]
  },
  {
    year: "2021",
    step: "02",
    title: "First Facility & Machine & ISO Certification",
    facilitySize: "1,200 sq ft Facility",
    description: "Commissioned our initial 1,200 sq ft workshop with our first 5-axis CNC machining center (Haas VF-5) and in-house Friction Stir Welding (FSW) rig. Awarded ISO 9001:2015 Certificate of Registration on January 17, 2021.",
    highlights: ["1,200 sq ft facility", "First Haas VF-5 installed", "In-house FSW setup", "ISO 9001:2015 Certified Jan 17, 2021"]
  },
  {
    year: "2022",
    step: "03",
    title: "Expansion Begins",
    facilitySize: "2,300 sq ft Facility",
    description: "Rapid customer adoption required expanded manufacturing capacity. Added a second large-format vertical machining center (Haas VF-6) and upgraded to a 2,300 sq ft manufacturing space.",
    highlights: ["Relocated to 2,300 sq ft facility", "Added Haas VF-6 VMC", "Doubled machining throughput"]
  },
  {
    year: "2023",
    step: "04",
    title: "Tradeshow Expansion Begins",
    facilitySize: "North American Expansion",
    description: "Exhibited at the prestigious Thermal Management Expo in Novi, Michigan. This marked the milestone launch of expanding direct sales, engineering consulting, and brand recognition across North America.",
    highlights: ["Debuted at Thermal Management Expo in Michigan", "Secured tier-1 EV and aerospace programs", "Expanded sales footprint"]
  },
  {
    year: "2024",
    step: "05",
    title: "Advanced 5-Axis Capabilities",
    facilitySize: "Expanded Multi-Axis Shop",
    description: "Substantially upgraded machine capacity by introducing Mazak VC-Ez 26 vertical center and Haas UMC-1000SS simultaneous 5-axis machines, enabling complex geometries and deep channel machining.",
    highlights: ["Introduced Mazak VC-Ez 26", "Added Haas UMC-1000SS 5-Axis Mill", "5-Axis deep hole drilling capabilities"]
  },
  {
    year: "2025",
    step: "06",
    title: "Scaling Operations & Facility Move",
    facilitySize: "6,000 sq ft Facility",
    description: "Expanded production capacity and strengthened engineering team. Relocated to our current flagship 6,000 sq ft facility in Guelph, Ontario with expanded clean assembly and testing bays.",
    highlights: ["Moved to 6,000 sq ft state-of-the-art facility", "Added dedicated testing & evaluation labs", "AS9100 & CGP / ITAR certification launched"]
  },
  {
    year: "2026",
    step: "07",
    title: "Where We Are Today & Global Future",
    facilitySize: "6,000 sq ft • 27 Team Members",
    description: "Operating from our 6,000 sq ft headquarters with 27 skilled engineers, technicians, and machinists. Actively working on AS9100 aerospace certification, CGP/ITAR defense compliance, and expanding international customer locations.",
    highlights: ["Growing team of 27 experts", "AS9100 & CGP/ITAR compliance in progress", "Active worldwide expansion"]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "wireless-amplifier",
    title: "Wireless Solid-State Amplifier",
    subtitle: "RF Power Component Thermal Optimization",
    industry: "Telecommunications & Satellites",
    heroMetric: "20°C",
    metricLabel: "Peak Temperature Reduction",
    summary: "Engineered a custom heat sink solution with optimized fin geometry to eliminate intense thermal hotspots across high-power RF amplifier transistors, boosting operational reliability and signal stability.",
    challenge: "The customer's original design exhibited localized thermal crowding and dangerous hotspot temperatures that exceeded transistor maximum junction ratings, causing power throttling and reduced MTBF in continuous outdoor operation.",
    engineeringApproach: "ITS conducted detailed CFD thermal simulation using EATON SmartCFD. We optimized base plate thickness and fin density distribution directly underneath high heat-flux amplifier modules, converting concentrated thermal flux into an evenly spread conduction field.",
    specifications: [
      { label: "Peak Temperature Drop", value: "Up to 20°C reduction" },
      { label: "Cooling Medium", value: "Forced Air Convection" },
      { label: "Fin Technology", value: "Optimized High-Aspect Ratio Fin Geometry" },
      { label: "Base Interface", value: "High-planarity CNC Milled Base (< 0.05mm)" },
      { label: "Simulation Tool", value: "EATON SmartCFD (Qfin)" }
    ],
    results: [
      "Eliminated 20°C peak hotspot concentrations",
      "Normalized temperature across all RF power modules",
      "Prevented component thermal throttling",
      "Extended amplifier lifespan and MTBF in harsh outdoor base stations"
    ],
    image: "/images/image66.png",
    chartImage: "/images/image65.png"
  },
  {
    slug: "power-supply",
    title: "Power Supply Heat Sink (Dual AC/DC Sides)",
    subtitle: "High-Density Industrial Power Conversion Solution",
    industry: "Power Converters & Automation",
    heroMetric: "82.3W",
    metricLabel: "AC Module Dissipation Handled",
    summary: "Integrated thermal architecture handling dual asymmetric heat dissipation loads from 12X DC power modules and 6X high-wattage AC power modules on a single shared heatsink.",
    challenge: "High heat density in an extremely constrained volume. The heatsink had to simultaneously cool twelve DC modules generating 24W steady-state and 32W peak loads alongside six AC modules generating 82.3W each, all while keeping acoustic fan noise below strict thresholds.",
    engineeringApproach: "We parameterized fin pitch, height, and spacing across separate zones to match the varying heat flux densities. Aerodynamic fin shaping minimized pressure drop and airflow turbulence, achieving peak dissipation at lower CFM fan speeds.",
    specifications: [
      { label: "DC Modules (12X)", value: "Footprint 2.51” × 0.9” | Steady State: 24W each" },
      { label: "DC Peak Module", value: "Footprint 1.89” × 0.9” | Peak Heat Load: 32W" },
      { label: "AC Modules (6X)", value: "Footprint 3.30” × 7.84” | Heat Load: 82.3W each" },
      { label: "Optimization Goal", value: "Fin Spacing Optimization for Max Thermal & Low Noise" },
      { label: "Material", value: "High-Thermal-Conductivity Aluminum Alloy" }
    ],
    results: [
      "Successfully dissipated full 82.3W AC load and multi-point DC loads",
      "Balanced airflow across asymmetric power zones",
      "Reduced cooling fan noise by 6 dBA through optimized fin spacing",
      "100% compliant with industrial continuous-duty requirements"
    ],
    image: "/images/image73.png",
    chartImage: "/images/image72.png"
  },
  {
    slug: "electric-bus",
    title: "Electric Bus Aluminum Cold Plates",
    subtitle: "Battery Pack Cooling with Friction Stir Welding",
    industry: "EV & Battery Systems",
    heroMetric: "57″ × 24″",
    metricLabel: "Large-Format Cold Plate Dimensions",
    summary: "Large-format Friction Stir Welded aluminum cold plate engineered to provide ultra-uniform velocity and temperature distribution across commercial electric bus battery modules.",
    challenge: "Heavy-duty electric transit buses require cold plates up to 57 inches long that operate under harsh road vibrations with zero leakage risk. Uneven coolant velocity across such a large plate would cause battery cell temperature gradients, accelerating cell degradation.",
    engineeringApproach: "ITS engineered custom internal flow channels manufactured via 5-axis CNC machining and hermetically sealed using in-house Friction Stir Welding. Hydrodynamic CFD modeling was calibrated to achieve uniform velocity distribution across every parallel channel.",
    specifications: [
      { label: "Imperial Dimensions", value: "57″ × 24″ × 0.6″" },
      { label: "Metric Dimensions", value: "1450 mm × 610 mm × 15 mm" },
      { label: "Joining Process", value: "In-House Friction Stir Welding (FSW)" },
      { label: "Fluid Flow", value: "Balanced Multi-Pass Internal Channels" },
      { label: "Leak Verification", value: "100% Hydrostatic Pressure & Helium Leak Tested" }
    ],
    results: [
      "Achieved uniform velocity profile across the entire 1450mm span",
      "Resulted in uniform temperature distribution across all lithium-ion cells",
      "Zero-porosity FSW weld seam withstood 300+ PSI pressure test",
      "Validated for high shock, cyclic thermal expansion, and road vibration"
    ],
    image: "/images/image126.png",
    chartImage: "/images/image114.png"
  },
  {
    slug: "embedded-heat-pipe",
    title: "Embedded Heat Pipe Base Plate",
    subtitle: "High Power Dissipation Two-Phase Heat Spreading",
    industry: "Aerospace & Defense",
    heroMetric: "32W",
    metricLabel: "High-Flux Compact Dissipation",
    summary: "Precision CNC routed aluminum base plate with integrated high-efficiency two-phase sintered copper heat pipes embedded directly beneath localized high-heat microelectronic packages.",
    challenge: "Extreme heat flux concentrated over tiny component footprints (1.89” × 0.9”) where solid aluminum conduction alone could not spread heat fast enough, causing high thermal resistance and overheating.",
    engineeringApproach: "We CNC-machined precise radius grooves into the aluminum chassis and embedded sintered copper powder heat pipes using specialized high-conductivity bonding solder, rapidly transferring heat to outer fin arrays.",
    specifications: [
      { label: "Compact Footprint", value: "1.89” × 0.9” Heat Source" },
      { label: "Peak Heat Load", value: "32W concentrated dissipation" },
      { label: "Two-Phase Element", value: "High-performance flattened sintered heat pipes" },
      { label: "Machining Accuracy", value: "±0.025 mm channel depth control" },
      { label: "Chassis Integration", value: "Flush mounted direct component contact" }
    ],
    results: [
      "Over 4x increase in effective thermal conductivity compared to solid aluminum",
      "Rapid lateral heat spreading across outer fin surface area",
      "Maintained component temperature well within aerospace mission thresholds",
      "Lightweight architecture ideal for flight avionics"
    ],
    image: "/images/image58.png",
    chartImage: "/images/image59.png"
  }
];

export const PRODUCT_CATEGORIES = [
  {
    slug: "liquid-cold-plates",
    title: "Liquid Cold Plates",
    subtitle: "High-Performance Liquid Cooling with FSW & Vacuum Brazing",
    heroDescription: "Custom internal channel geometries engineered for extreme heat flux in EV battery packs, high-voltage inverters, energy storage systems, and aerospace radar platforms.",
    products: [
      {
        name: "Friction Stir Welded (FSW) Aluminum Cold Plates",
        desc: "Solid-state joined cold plates offering 100% leak tightness, zero porosity, and superior structural integrity without melting the parent aluminum.",
        specs: "Sizes up to 57\" x 24\" (1450 x 610 mm). Pressure rated > 300 PSI.",
        image: "/images/image89.png"
      },
      {
        name: "HyperCool Series Aluminum Cold Plates",
        desc: "Optimized internal channel profiles designed specifically for power electronics (IGBT / SiC inverter modules) requiring uniform temperature and low hydraulic resistance.",
        specs: "CFD-optimized flow channels, high heat flux capability, low pressure drop.",
        image: "/images/image93.png"
      },
      {
        name: "Copper Vacuum Brazed Cold Plates",
        desc: "High thermal conductivity copper cold plates with vacuum-brazed internal fins for extreme thermal density applications.",
        specs: "Pure copper base, fluxless vacuum brazing, high burst pressure.",
        image: "/images/image130.png"
      },
      {
        name: "Copper Embedded Aluminum Cold Plates",
        desc: "Hybrid construction pairing copper conduction blocks or tubes with lightweight aluminum chassis plates for optimal heat spreading directly beneath heat-flux components.",
        specs: "Direct contact copper tubes, precision CNC expansion fit, front/back thermal equalization.",
        image: "/images/products/copper-embedded-cold-plate/lfa0073-front.png"
      }
    ]
  },
  {
    slug: "air-cooled-heat-sinks",
    title: "Air-Cooled Heat Sinks",
    subtitle: "Precision Engineered Convection Cooling",
    heroDescription: "Custom fin geometries designed for natural and forced convection cooling across a wide spectrum of power electronic, telecommunication, and industrial automation designs.",
    products: [
      {
        name: "Extruded Aluminum Heat Sinks",
        desc: "High-efficiency aluminum extrusions with high fin aspect ratios, custom cut, CNC machined, and anodized in-house.",
        specs: "Custom aspect ratios up to 24:1, precision milling, RoHS clear or black anodize.",
        image: "/images/assets/air_cooled/Extruded.png"
      },
      {
        name: "Skived Fin Heat Sinks",
        desc: "High-density monolithic fin arrays shaved from solid aluminum or copper blocks, eliminating thermal interface resistance between fins and base.",
        specs: "Ultra-thin fin pitch (down to 0.2mm), seamless monolithic thermal path.",
        image: "/images/assets/user_showcase/Skived.png"
      },
      {
        name: "Fabricated & Bonded Fin Heat Sinks",
        desc: "High aspect ratio heatsinks with individually fabricated fins epoxy-bonded or brazed into grooved base plates for high airflow forced convection.",
        specs: "Extremely tall fin heights (> 100mm), aluminum or copper fin combinations.",
        image: "/images/products/bonded-heat-sink/bonded-heat-sink.png"
      },
      {
        name: "Cold Forging Heat Sinks",
        desc: "Forged round and elliptical pin-fin arrays providing multi-directional airflow cooling for enclosed electronic enclosures.",
        specs: "Zero air directionality sensitivity, high surface area density, 1070 pure aluminum.",
        image: "/images/image46.png"
      }
    ]
  },
  {
    slug: "heat-pipes",
    title: "Heat Pipe Solutions",
    subtitle: "Two-Phase Thermal Spreading in Constrained Volumes",
    heroDescription: "High-performance two-phase thermal superconductors for rapid heat spreading away from extreme localized heat sources to remote dissipation surfaces.",
    products: [
      {
        name: "Embedded Heat Pipe Base Plates",
        desc: "High-efficiency sintered copper heat pipes embedded directly into CNC-machined aluminum and copper plates for instant heat spreading.",
        specs: "6mm, 8mm, 10mm sintered copper pipes, flattened and soldered or epoxy-set.",
        image: "/images/assets/air_cooled/Embedded Heat Pipes.png"
      },
      {
        name: "Vapor Chamber Assemblies",
        desc: "Two-dimensional planar two-phase heat spreaders offering isothermal surface distribution across high-power microprocessors and laser diodes.",
        specs: "Ultra-thin profiles (down to 1.5mm), copper or titanium envelopes.",
        image: "/images/image58.png"
      },
      {
        name: "Heat Pipe Tower & Fin Stack Assemblies",
        desc: "Remote heat dissipation assemblies with multi-bend heat pipes routing heat to dense folded or stamped fin arrays with dedicated blower fans.",
        specs: "Complex 3D pipe routing, nickel-plated copper, custom mounting brackets.",
        image: "/images/image14.png"
      }
    ]
  },
  {
    slug: "busbar",
    title: "BusBar & Power Distribution",
    subtitle: "Thermally-Engineered High-Current Conduction",
    heroDescription: "Custom laminated, machined, and insulated copper & aluminum busbars engineered for low electrical resistance and optimized thermal dissipation in inverters and battery systems.",
    products: [
      {
        name: "High-Current Precision Milled Busbars",
        desc: "Oxygen-free high conductivity (OFHC) copper and aluminum busbars CNC machined to tight tolerances with nickel or tin plating.",
        specs: "Up to 1000A+ current ratings, high planarity, integrated mounting hardware.",
        image: "/images/products/busbar/busbar.png"
      },
      {
        name: "Thermally-Coupled Laminated Busbars",
        desc: "Multi-layer low inductance busbars laminated with high-dielectric insulation, engineered for direct mounting onto liquid cold plates.",
        specs: "Low parasitic inductance, epoxy powder or Nomex insulation, high dielectric strength.",
        image: "/images/products/busbar/busbar-detail.png"
      }
    ]
  }
];

export const INDUSTRIES = [
  {
    slug: "power-electronics",
    slideNumber: "Slide 4",
    title: "Power Electronics",
    subtitle: "SiC & GaN High Heat-Flux Dissipation for Compact Inverters & Converters",
    description: "Managing extreme, concentrated heat loads in compact power-conversion architectures, 800V silicon-carbide inverters, and high-frequency IGBT switches. ITS designs custom high-density liquid cold plates and precision micro-channel heat sinks that eliminate localized semiconductor hotspots.",
    challenges: "Localized heat flux exceeding 120 W/cm², tight volumetric boundaries, high-voltage clearance rules, and dynamic thermal duty cycles.",
    itsApproach: "Direct copper-tube embedded plates and 5-axis CNC micro-channel cold plates with customized multi-zone fluid delivery that equalizes junction temperatures across all semiconductor switches.",
    image: "/images/industries/power-electronics.webp",
    keySpecs: ["Up to 120 W/cm² heat flux", "Thermal resistance < 0.02 °C/W", "Uniform junction ΔT < 2°C", "Integrated laminated busbar routing"]
  },
  {
    slug: "ev-battery",
    slideNumber: "Slide 5",
    title: "EV & Battery Systems",
    subtitle: "High-Rate Automotive Traction & Heavy-Duty Commercial Bus Cooling",
    description: "Uniform thermal regulation for ultra-fast DC charging stations, commercial electric buses, and high-performance automotive battery packs. ITS delivers lightweight aluminum ribbon chillers, battery cold plates, and inverter cooling systems engineered to prevent thermal runaway.",
    challenges: "Large formats up to 57-inch lengths, continuous road shock and vibration, coolant pressure drop minimization, and strict cell-to-cell isothermal limits.",
    itsApproach: "In-house Friction Stir Welded (FSW) aluminum cold plates with optimized serpentine flow paths that maintain pack temperature delta under 2.5°C under continuous high-rate discharge.",
    image: "/images/industries/ev-battery.webp",
    keySpecs: ["Uniform ΔT < 2.5°C across pack", "100% helium leak tested < 1×10⁻⁸ mbar·L/s", "Shock & vibration validated", "Corrosion-resistant Al-3003/6061 alloy"]
  },
  {
    slug: "clean-energy",
    slideNumber: "Slide 6",
    title: "Clean Energy & Grid Storage",
    subtitle: "Ruggedized 25-Year Reliability for Solar Inverters, Wind & BESS",
    description: "Utility-scale central solar inverters, megawatt wind turbine nacelle converters, and containerized battery energy storage systems (BESS) require dependable thermal management in extreme outdoor conditions (-40°C to +60°C).",
    challenges: "Severe ambient swings, heavy cyclic thermal fatigue, zero-maintenance expectations, and outdoor moisture/dust exposure.",
    itsApproach: "Hermetically sealed FSW liquid cold plates and heavy-duty bonded-fin heat sinks with marine-grade anodized and chemical conversion finishes.",
    image: "/images/industries/clean-energy.webp",
    keySpecs: ["25+ Year operating lifespan", "Zero-maintenance solid-state FSW joints", "Direct glycol/dielectric fluid compatibility", "Corrosion-resistant anodized finishes"]
  },
  {
    slug: "aerospace",
    slideNumber: "Slide 7",
    title: "Aerospace & Defence",
    subtitle: "Mission-Critical Enclosures for Airborne Radar, Avionics & Missile Guidance",
    description: "Airborne radar systems, electronic warfare pods, and flight control computers operating under extreme acceleration, rapid altitude pressure fluctuations, and severe thermal shock. ITS complies with Canadian Controlled Goods Program (CGP) and ITAR requirements.",
    challenges: "Extreme G-force loading, high-altitude burst pressure, strict size, weight, and power (SWaP) limits, and zero-defect quality mandates.",
    itsApproach: "Monolithic 5-axis CNC-machined chassis cold walls, gun-drilled fluid passages, and parent-metal strength solid-state friction stir welded covers.",
    image: "/images/industries/aerospace.webp",
    keySpecs: ["CGP & ITAR Compliant", "AS9100 Quality (In Progress)", "100% Helium Mass-Spec Leak Tested", "MIL-STD & DO-160 shock/vibration certified"]
  },
  {
    slug: "satellite",
    slideNumber: "Slide 8",
    title: "Satellite Communications",
    subtitle: "Zero-Gravity Heat Spreading & Vacuum-Compatible Radiator Systems",
    description: "From orbital LEO satellites operating in the thermal extremes of space vacuum to ground earth station 5G massive MIMO terminals and Ka-band solid-state power amplifiers, ITS provides ultra-low thermal resistance spreading systems.",
    challenges: "Absence of convective air cooling in vacuum, strict launch mass budgets, NASA outgassing compliance, and RF amplifier heat fluxes exceeding 100°C.",
    itsApproach: "High-conductance embedded sintered-copper heat pipe arrays, thin-fin skived copper/aluminum heat sinks, and vacuum-rated fluxless brazed cold plates.",
    image: "/images/industries/satellite.webp",
    keySpecs: ["Zero-gravity heat spreading", "Outgassing compliant NASA SP-R-0022A", "20°C temperature reduction on RF amplifiers", "Thin-fin high-density skived profiles"]
  },
  {
    slug: "industrial",
    slideNumber: "Slide 9",
    title: "Industrial Automation",
    subtitle: "24/7 Continuous Duty for Variable Frequency Drives, CNCs & Laser Chillers",
    description: "Durable, high-uptime cooling for industrial variable-frequency drives (VFD), multi-axis CNC spindle motor drives, automated factory robotics, and high-power fiber laser power supplies operating continuously under punishing factory conditions.",
    challenges: "Abrasive particulate exposure, vibration from adjacent machinery, continuous 24/7/365 production duty, and minimal allowable pressure drop.",
    itsApproach: "Rugged monolithic aluminum extrusion matrices, heavy-wall copper tube cold plates, and high-flow manifold designs that maximize uptime.",
    image: "/images/manufacturing/precision-manufacturing.png",
    keySpecs: ["Continuous 24/7/365 production duty", "Low backpressure fluid manifolding", "Standard SAE/NPT port interfaces", "Extruded & bonded fin architectures"]
  }
];
