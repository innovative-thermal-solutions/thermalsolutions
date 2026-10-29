import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { WORKFLOW_STEPS } from "@/data/companyContent";

export const metadata = {
  title: "Thermal CFD & Simulation | EATON SmartCFD & SolidWorks | ITS Cooling",
  description:
    "Advanced thermal simulation using EATON SmartCFD (Qfin) and SolidWorks 3D CAD modeling to eliminate thermal risk before physical manufacturing.",
};

export default function ThermalEngineeringPage() {
  return (
    <main id="main-content" className="w-full min-h-screen bg-slate-50 pt-28 pb-24">
      <section className="px-6 lg:px-12 mb-16 max-w-7xl mx-auto">
        <Link
          href="/technologies"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 hover:text-sky-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Technologies</span>
        </Link>

        <span className="text-sky-600 font-mono text-xs tracking-[0.25em] uppercase block mb-3 font-semibold">
          Predictive Simulation &amp; Design
        </span>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6 max-w-4xl">
          CFD thermal simulation &amp; 3D CAD modeling.
        </h1>

        <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-3xl font-normal mb-12">
          We believe in validating physics first. Our thermal engineers run advanced Computational Fluid Dynamics (CFD) in EATON SmartCFD (Qfin) and parametric mechanical modeling in SolidWorks to ensure optimal velocity distribution, minimum pressure drop, and reliable mechanical integrity.
        </p>

        {/* Software Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-xs flex flex-col justify-between">
            <div>
              <div className="relative aspect-video w-full bg-slate-50 border border-slate-200 rounded-xl mb-6 overflow-hidden flex items-center justify-center p-4">
                <Image
                  src="/images/assets/analyze_thermal_simulation.png"
                  alt="EATON SmartCFD Thermal Modeling"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-mono text-sky-600 uppercase tracking-widest block mb-2 font-semibold">
                Predictive Hydrodynamics
              </span>
              <h3 className="text-2xl font-bold text-slate-950 uppercase mb-3">EATON SmartCFD (Qfin) Modeling</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Full 3D conjugate heat transfer simulations. We model conduction through solid semiconductor interfaces, laminar/turbulent fluid flow, and heat convection into air or liquid coolants to predict junction temperatures with high accuracy.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-mono text-slate-700 space-y-1">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                <span>Hydrodynamic velocity field simulation</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                <span>Pressure drop (ΔP) vs Flow Rate (LPM) curves</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                <span>Peak junction temperature hotspot analysis</span>
              </p>
            </div>
          </div>

          <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-xs flex flex-col justify-between">
            <div>
              <div className="relative aspect-video w-full bg-slate-50 border border-slate-200 rounded-xl mb-6 overflow-hidden flex items-center justify-center p-4">
                <Image
                  src="/images/assets/precision_milled_plate.png"
                  alt="SolidWorks Mechanical CAD Modeling"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-mono text-sky-600 uppercase tracking-widest block mb-2 font-semibold">
                Parametric Modeling
              </span>
              <h3 className="text-2xl font-bold text-slate-950 uppercase mb-3">SolidWorks 3D Mechanical CAD</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Parametric solid modeling designed with manufacturing in mind. We configure pin tool clearances for friction stir welding, tool access for deep hole drilling, O-ring seal glands, and hydraulic thread standards.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-mono text-slate-700 space-y-1">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                <span>Full GD&amp;T drawings according to ASME Y14.5</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                <span>Structural FEA under high operating pressures</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                <span>Seamless export to STEP, IGES, and Parasolid</span>
              </p>
            </div>
          </div>
        </div>

        {/* CAD Models & Virtual Prototypes Showcase */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold text-sky-600 px-2 py-0.5 bg-white border border-slate-200 rounded-sm">
              CAD Models
            </span>
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold">
              Virtual Prototyping
            </span>
          </div>
          <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
            SolidWorks Digital Twin Modeling
          </h2>
          <p className="text-slate-600 text-base leading-relaxed max-w-3xl mb-8">
            Every cooling component is engineered virtually to inspect flow paths, check tool clearances, and prevent packaging interference before cutting metal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* LFA0073 CAD */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs p-5 flex flex-col justify-between">
              <div className="relative aspect-[4/3] w-full bg-slate-50 rounded-xl overflow-hidden mb-4 border border-slate-100 flex items-center justify-center p-3">
                <Image
                  src="/images/assets/user_showcase/LFA0073-cad.png"
                  alt="LFA0073 Liquid Cold Plate SolidWorks 3D CAD"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-sky-50 text-sky-700 rounded border border-sky-200 mb-1 inline-block">
                  LFA0073 SolidWorks
                </span>
                <h4 className="font-bold text-slate-900 text-sm uppercase mb-1">Cold Plate Geometry</h4>
                <p className="text-xs text-slate-500 font-mono">
                  Multi-pass fluid channel CAD model with integrated O-ring grooves and mounting holes.
                </p>
              </div>
            </div>

            {/* AFC0006 CAD */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs p-5 flex flex-col justify-between">
              <div className="relative aspect-[4/3] w-full bg-slate-50 rounded-xl overflow-hidden mb-4 border border-slate-100 flex items-center justify-center p-3">
                <Image
                  src="/images/assets/user_showcase/AFC0006-cad.png"
                  alt="AFC0006 Air Cooled Assembly 3D Solid Model"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-sky-50 text-sky-700 rounded border border-sky-200 mb-1 inline-block">
                  AFC0006 SolidWorks
                </span>
                <h4 className="font-bold text-slate-900 text-sm uppercase mb-1">Air-Cooled Assembly</h4>
                <p className="text-xs text-slate-500 font-mono">
                  Full 3D envelope model verifying fan duct clearance and fin aspect ratios.
                </p>
              </div>
            </div>

            {/* Air Cooled Thermal Concept */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs p-5 flex flex-col justify-between">
              <div className="relative aspect-[4/3] w-full bg-slate-900 rounded-xl overflow-hidden mb-4 border border-slate-800 flex items-center justify-center">
                <Image
                  src="/images/assets/user_showcase/air-cooled-concept.png"
                  alt="Thermal Dynamics Heat Sink Prototype"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-slate-100 text-slate-700 rounded border border-slate-200 mb-1 inline-block">
                  Physics Prototype
                </span>
                <h4 className="font-bold text-slate-900 text-sm uppercase mb-1">Aerodynamic Airflow</h4>
                <p className="text-xs text-slate-500 font-mono">
                  Parametric fin array airflow optimization balancing CFM through-flow and backpressure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-1">
              Ready to validate your cooling architecture?
            </h3>
            <p className="text-slate-300 text-sm">
              Send our engineers your 3D CAD models and thermal boundary conditions for a simulation consultation.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-sky-500 text-slate-950 hover:bg-white font-bold text-xs uppercase tracking-wider rounded-sm transition-colors whitespace-nowrap"
          >
            Request Simulation →
          </Link>
        </div>
      </section>
    </main>
  );
}
