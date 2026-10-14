import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { WORKFLOW_STEPS } from "@/data/companyContent";

export const metadata = {
  title: "Thermal CFD & Simulation | EATON SmartCFD & SolidWorks",
  description: "Advanced thermal simulation using EATON SmartCFD (Qfin) and SolidWorks 3D CAD modeling to eliminate thermal risk before physical manufacturing.",
};

export default function ThermalEngineeringPage() {
  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden pt-32 pb-28">
      <div className="absolute top-20 right-10 w-[700px] h-[500px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

      <section className="px-6 lg:px-12 mb-16 max-w-7xl mx-auto relative z-10">
        <Link
          href="/technologies"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-teal-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Technologies</span>
        </Link>

        <span className="text-teal-400 font-mono text-xs tracking-[0.25em] uppercase block mb-4">
          Slide 40 & 42 • Predictive Simulation & Design
        </span>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-8 max-w-5xl">
          CFD THERMAL SIMULATION <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-gray-400">
            & 3D CAD MODELING.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl border-l-2 border-teal-400/50 pl-6 py-2 mb-10">
          We believe in validating physics first. Our thermal engineers run advanced Computational Fluid Dynamics (CFD) in EATON SmartCFD (Qfin) and parametric mechanical modeling in SolidWorks to ensure optimal velocity distribution, minimum pressure drop, and reliable mechanical integrity.
        </p>
      </section>

      {/* Software Focus (Slide 40) */}
      <section className="px-6 lg:px-12 mb-28 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div className="p-8 bg-[#020617] border border-white/10 flex flex-col justify-between">
          <div>
            <div className="relative aspect-video w-full bg-[#020617] border border-white/10 mb-6 overflow-hidden">
              <Image src="/images/assets/analyze_thermal_simulation.png" alt="EATON SmartCFD Thermal Modeling" fill className="object-cover" />
            </div>
            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-2">Slide 40</span>
            <h3 className="text-2xl font-bold text-white mb-3">EATON SmartCFD (Qfin) Modeling</h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
              Full 3D conjugate heat transfer simulations. We model conduction through solid semiconductor interfaces, laminar/turbulent fluid flow, and heat convection into air or liquid coolants to predict junction temperatures with high accuracy.
            </p>
          </div>
          <div className="pt-4 border-t border-white/10 text-xs font-mono text-gray-400 space-y-1">
            <p>• Hydrodynamic velocity field simulation</p>
            <p>• Pressure drop (ΔP) vs Flow Rate (LPM) curves</p>
            <p>• Peak junction temperature hotspot analysis</p>
          </div>
        </div>

        <div className="p-8 bg-[#020617] border border-white/10 flex flex-col justify-between">
          <div>
            <div className="relative aspect-video w-full bg-[#0F172A] border border-white/10 mb-6 overflow-hidden">
              <Image src="/images/assets/precision_milled_plate.png" alt="SolidWorks CAD Modeling" fill className="object-cover" />
            </div>
            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-2">Slide 40</span>
            <h3 className="text-2xl font-bold text-white mb-3">SolidWorks Mechanical CAD</h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
              Translating validated thermal geometries into production-ready assemblies. Complete with GD&T drawings, structural FEA stress reports under pressure, and toolpath programming for our 5-axis machining centers.
            </p>
          </div>
          <div className="pt-4 border-t border-white/10 text-xs font-mono text-gray-400 space-y-1">
            <p>• Parametric 3D solid modeling</p>
            <p>• Static structural simulation under fluid pressure</p>
            <p>• Tolerance stack-up and manufacturing drawings</p>
          </div>
        </div>
      </section>

      {/* 4-Step Engineering Workflow (Slide 42) */}
      <section className="px-6 lg:px-12 mb-28 max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
          THE 4-STEP ITS WORKFLOW.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((ws) => (
            <div key={ws.step} className="bg-[#020617] border border-white/10 p-6 flex flex-col justify-between">
              <div>
                <span className="text-teal-400 font-mono text-xs font-bold block mb-2">Phase {ws.step}</span>
                <span className="text-xs font-mono text-gray-500 uppercase block mb-1">{ws.phase}</span>
                <h3 className="text-lg font-bold text-white mb-3">{ws.title}</h3>
                <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">{ws.details}</p>
              </div>
              <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-teal-400">
                Deliverable: {ws.deliverables}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto relative z-10 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-teal-400 text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
        >
          <span>Submit Project CAD for Simulation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
