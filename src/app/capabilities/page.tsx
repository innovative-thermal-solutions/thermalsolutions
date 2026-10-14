import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, Cog, Cpu, Wrench, Layers, TestTube } from "lucide-react";
import { WORKFLOW_STEPS, COMPANY_INFO } from "@/data/companyContent";

export const metadata = {
  title: "Engineering & Manufacturing Capabilities | ITS Cooling",
  description: "End-to-end turnkey thermal engineering: EATON SmartCFD, SolidWorks 3D CAD, 5-axis CNC machining, deep drilling, in-house FSW, and ISO 9001 testing.",
};

const capabilitiesList = [
  {
    num: "01",
    category: "PREDICTIVE CFD",
    title: "THERMAL SIMULATION (CFD)",
    explanation: "Predictive hydrodynamic and thermal modelling to validate cooling performance before cutting metal.",
    technicalDetails: "EATON SmartCFD (Qfin), iterative heat sink design, parametric sweeps, velocity & temperature distribution mapping.",
    application: "Extreme heat flux electronic enclosures, EV battery arrays, and telecommunication power units.",
    image: "/images/assets/analyze_thermal_simulation.png"
  },
  {
    num: "02",
    category: "MECHANICAL CAD",
    title: "IN-HOUSE 3D DESIGN & FEA",
    explanation: "Mechanical CAD solid modeling, assembly stack-ups, and static structural simulations for physical integrity.",
    technicalDetails: "SolidWorks 3D parametric CAD, GD&T drawings, structural FEA stress analysis under hydraulic pressure.",
    application: "Friction Stir Welded cold plates, high-aspect ratio heatsinks, and aerospace chassis assemblies.",
    image: "/images/assets/precision_milled_plate.png"
  },
  {
    num: "03",
    category: "SOLID-STATE JOINING",
    title: "IN-HOUSE FRICTION STIR WELDING",
    explanation: "High-integrity solid-state joining without melting the base material. Guarantees hermetic sealing and pure thermal conductivity.",
    technicalDetails: "Zero-porosity joints, distortion control, high fatigue life under thermal cycling, 100% parent metal strength.",
    application: "Leak-tight liquid cold plates for EV buses, military aircraft, and energy storage.",
    image: "/images/assets/machining_photo.png"
  },
  {
    num: "04",
    category: "PRECISION MACHINING",
    title: "5-AXIS CNC MACHINING & DEEP DRILLING",
    explanation: "Multi-axis precision milling and specialized deep hole gun drilling for monolithic internal cooling loops.",
    technicalDetails: "Haas VF-5XT 5-Axis, UMC-1000SS 5-Axis Mill, Mazak VC-Ez 26, Haas VF-6/40 high-capacity VMC.",
    application: "Complex 3D fluid channels, fine-pitch fin extrusions, and large format plates up to 57 inches.",
    image: "/images/assets/cnc_machined_tray.png"
  },
  {
    num: "05",
    category: "TWO-PHASE COOLING",
    title: "EMBEDDED HEAT PIPE INTEGRATION",
    explanation: "Precision radius routing and bonding of sintered copper heat pipes directly into base plates for fast heat spreading.",
    technicalDetails: "6mm, 8mm, 10mm sintered copper powder heat pipes, high-conductivity soldered joint, planar vapor chambers.",
    application: "Compact power electronics, RF amplifiers, satellite payloads with extreme localized heat flux.",
    image: "/images/assets/air_cooled/Embedded Heat Pipes.png"
  },
  {
    num: "06",
    category: "EXPERIMENTAL TESTING",
    title: "TESTING & PROTOTYPE EVALUATION",
    explanation: "Slide 39: We are experts in designing experiments to test and evaluate the thermal performance of products and system prototypes.",
    technicalDetails: "Thermal resistance calibration, thermocouple data logging, flow vs pressure drop testing, wind tunnel validation.",
    application: "Empirical qualification before volume production sign-off.",
    image: "/images/image126.png"
  },
  {
    num: "07",
    category: "QUALITY ASSURANCE",
    title: "ISO 9001:2015 & CGP / ITAR SYSTEM",
    explanation: "Certified Quality Management System guaranteeing full traceability, rigorous incoming QA, and defense compliance.",
    technicalDetails: "Certified Jan 17, 2021. AS9100 in progress. Trained in Canadian Controlled Goods Program (CGP / ITAR equivalent).",
    application: "Mission-critical commercial, aerospace, and defense applications.",
    image: "/images/assets/img_0006.jpg"
  },
  {
    num: "08",
    category: "OPERATIONS",
    title: "NORTH AMERICAN FACILITY + GLOBAL SCALE",
    explanation: "Vertically integrated domestic manufacturing in Guelph, Ontario paired with trusted Asian suppliers for high-volume programs.",
    technicalDetails: "6,000 sq ft manufacturing plant, 27 engineers & technicians, global procurement network.",
    application: "Rapid prototype iteration and cost-competitive mass production.",
    image: "/images/assets/img_0028.jpg"
  }
];

export default function CapabilitiesPage() {
  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden pt-32 pb-28">
      {/* Background glow */}
      <div className="absolute top-20 left-1/4 w-[800px] h-[500px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <section className="px-6 lg:px-12 mb-20 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-teal-400 font-mono text-xs tracking-[0.25em] uppercase">
            Slide 38–42 • Turnkey Capabilities & Expertise
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-8 max-w-5xl">
          FROM THERMAL CONCEPT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-gray-400">
            TO FINISHED HARDWARE.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl border-l-2 border-teal-400/50 pl-6 py-2 mb-10">
          Slide 39 highlights our combined 50+ years of engineering experience in the design, product development, manufacturing, and procurement of heat sinks and liquid cold plates.
        </p>

        {/* 4 Pillars Header Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#020617] border border-white/10 font-mono text-xs">
          <div>
            <span className="text-gray-500 block uppercase mb-1">CFD Simulation</span>
            <span className="text-white font-bold text-sm md:text-base">EATON SmartCFD (Qfin)</span>
          </div>
          <div>
            <span className="text-gray-500 block uppercase mb-1">Mechanical CAD</span>
            <span className="text-white font-bold text-sm md:text-base">SolidWorks 3D FEA</span>
          </div>
          <div>
            <span className="text-gray-500 block uppercase mb-1">Machining & FSW</span>
            <span className="text-white font-bold text-sm md:text-base">5-Axis + In-House FSW</span>
          </div>
          <div>
            <span className="text-gray-500 block uppercase mb-1">Quality Certified</span>
            <span className="text-teal-400 font-bold text-sm md:text-base">ISO 9001:2015</span>
          </div>
        </div>
      </section>

      {/* Slide 42: Complete 4-Step Workflow */}
      <section className="px-6 lg:px-12 mb-28 max-w-7xl mx-auto relative z-10">
        <div className="bg-[#020617] border border-white/15 p-8 lg:p-14">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="text-teal-400 font-mono text-xs uppercase tracking-widest block mb-2">
                Slide 42 • Workflow at ITS Cooling
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                THE 4-STEP DELIVERY LIFECYCLE.
              </h2>
            </div>
            <p className="text-sm font-mono text-gray-400 max-w-md">
              A disciplined, traceable development path from initial boundary conditions to finished production parts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-black/60 border border-white/10 p-6 flex flex-col justify-between hover:border-teal-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-teal-400 font-mono text-xl font-bold">0{step.step}</span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 bg-white/5 px-2 py-0.5 border border-white/10">
                      {step.phase}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-xs text-gray-300 font-light leading-relaxed mb-6">{step.details}</p>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs font-mono text-teal-400">
                  <span className="text-gray-500 block text-[10px] uppercase mb-0.5">Key Output:</span>
                  {step.deliverables}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Pipeline List */}
      <section className="px-6 lg:px-12 mb-28 max-w-7xl mx-auto space-y-12 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
          DEEP CAPABILITY BREAKDOWN.
        </h2>

        <div className="flex flex-col gap-px bg-white/10 border-y border-white/10">
          {capabilitiesList.map((cap) => (
            <div
              key={cap.num}
              className="bg-[#020617] p-8 lg:p-12 hover:bg-[#070D18] transition-colors grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden group"
            >
              <div className="lg:col-span-2">
                <span className="text-gray-600 font-mono text-4xl block mb-2 group-hover:text-teal-400 transition-colors">
                  {cap.num}
                </span>
                <span className="text-teal-400 font-mono text-[10px] uppercase tracking-widest border border-teal-500/30 px-2 py-1 inline-block">
                  {cap.category}
                </span>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-4">
                  {cap.explanation}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs font-mono">
                  <div>
                    <span className="text-gray-500 uppercase block text-[10px]">Technical Scope:</span>
                    <span className="text-gray-300">{cap.technicalDetails}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 uppercase block text-[10px]">Key Application:</span>
                    <span className="text-gray-300">{cap.application}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 relative aspect-[16/10] w-full bg-[#0F172A] border border-white/10 overflow-hidden">
                <Image src={cap.image} alt={cap.title} fill className="object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto relative z-10 text-center">
        <div className="bg-gradient-to-r from-[#0F172A] via-[#091E2B] to-[#0F172A] border border-teal-500/30 p-10 lg:p-14">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Engineer Your Solution?
          </h3>
          <p className="text-gray-300 font-light max-w-xl mx-auto text-sm leading-relaxed mb-8">
            Connect directly with lead mechanical engineer Sam Hemming or thermal specialist David Dawson to begin parametric studies and preliminary mechanical design.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-teal-400 text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
          >
            <span>Talk to a Thermal Engineer</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
