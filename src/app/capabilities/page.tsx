import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2, Cog, Cpu, Wrench, Layers, TestTube } from "lucide-react";
import { WORKFLOW_STEPS, COMPANY_INFO } from "@/data/companyContent";
import { SubpageCta } from "@/components/common/SubpageCta";

export const metadata = {
  title: "Manufacturing & Engineering Capabilities | ITS Cooling",
  description:
    "End-to-end turnkey thermal engineering: CFD simulation, SolidWorks 3D CAD, 5-axis CNC machining, Friction Stir Welding, and ISO 9001 certified testing in Guelph, Ontario.",
};

const capabilitiesList = [
  {
    num: "01",
    category: "SOLID-STATE JOINING",
    title: "FRICTION STIR WELDING (FSW)",
    explanation: "High-integrity solid-state joining without melting the base material. Guarantees hermetic sealing and pure thermal conductivity.",
    technicalDetails: "Zero-porosity joints, distortion control, high fatigue life under thermal cycling, 100% parent metal strength.",
    href: "/capabilities/friction-stir-welding",
    image: "/images/manufacturing/fsw-process-01.png",
  },
  {
    num: "02",
    category: "PRECISION MACHINING",
    title: "5-AXIS CNC MACHINING & MILLING",
    explanation: "Multi-axis precision milling and deep-hole drilling for monolithic internal cooling loops and intricate fin geometries.",
    technicalDetails: "Haas VF-6 50-Taper, Haas VF-4SS, and Mazak VMCs for large format plates up to 57 inches.",
    href: "/capabilities/cnc-machining",
    image: "/images/manufacturing/precision-manufacturing.png",
  },
  {
    num: "03",
    category: "PREDICTIVE CFD",
    title: "THERMAL SIMULATION (CFD)",
    explanation: "Predictive hydrodynamic and thermal modelling to validate cooling performance before cutting metal.",
    technicalDetails: "Iterative heat sink design, parametric sweeps, velocity & temperature distribution mapping.",
    href: "/technologies",
    image: "/images/manufacturing/thermal-engineering.png",
  },
  {
    num: "04",
    category: "EXPERIMENTAL TESTING",
    title: "QUALITY & LEAK VERIFICATION",
    explanation: "Rigorous quality inspection, CMM reporting, helium mass spectrometry, and hydrostatic burst proofing.",
    technicalDetails: "Brown & Sharpe CMM, Alcatel helium leak detector (< 1×10⁻⁸ mbar·L/s), calibrated thermal test bench.",
    href: "/quality",
    image: "/images/products/pressed-tube-cold-plate.png",
  },
];

export default function CapabilitiesPage() {
  return (
    <main id="main-content" className="w-full min-h-screen bg-slate-50 pt-28 pb-20">
      {/* Detail Hero */}
      <section className="relative w-full bg-gradient-to-br from-white via-slate-50 to-sky-50 border-b border-slate-200 py-16 lg:py-24 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold text-sky-600 px-2 py-0.5 bg-white border border-slate-200 rounded-sm">
                ITS
              </span>
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold">
                Manufacturing &amp; Engineering
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6">
              Turnkey capabilities from CAD to finished hardware.
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
              Integrated in-house manufacturing under one roof in Guelph, Ontario. CNC routing, Friction Stir Welding, CMM inspection, and precision assembly.
            </p>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white flex items-center justify-center p-6">
            <Image
              src="/images/manufacturing/fsw-process-02.png"
              alt="FSW Manufacturing in Guelph"
              width={480}
              height={360}
              priority
              className="object-contain max-h-[300px] drop-shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {capabilitiesList.map((cap) => (
            <div
              key={cap.num}
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-sky-600 px-2.5 py-1 bg-sky-50 rounded border border-sky-200">
                    {cap.num} // {cap.category}
                  </span>
                  <Link
                    href={cap.href}
                    className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-950 hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-slate-50 border border-slate-100 flex items-center justify-center p-4">
                  <Image
                    src={cap.image}
                    alt={cap.title}
                    width={400}
                    height={225}
                    className="object-contain max-h-[180px] drop-shadow-sm"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-950 uppercase tracking-tight mb-3">
                  {cap.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {cap.explanation}
                </p>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs font-mono text-slate-700 mb-6">
                  <strong className="text-slate-900 block mb-1">Technical Parameters:</strong>
                  {cap.technicalDetails}
                </div>
              </div>

              <Link
                href={cap.href}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-sky-600 hover:text-sky-800 transition-colors"
              >
                <span>Explore capability details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Guelph Facility Callout */}
        <SubpageCta
          eyebrow="ISO 9001:2015 Certified Guelph Facility"
          title="Visit our 6,000 sq ft manufacturing shop"
          description="Equipped with heavy CNC vertical machining centers, dedicated FSW machine, ultrasonic washing, clean room assembly, and coordinate measuring metrology."
          primaryCtaText="Tour Facility & Machinery"
          primaryCtaHref="/facility"
          secondaryCtaText="Request a Quote"
          secondaryCtaHref="/contact"
        />
      </section>
    </main>
  );
}
