"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Wrench,
  CheckCircle2,
  PackageX,
  Factory,
  Compass,
  Zap,
} from "lucide-react";

const workflowSteps = [
  {
    step: "01",
    phase: "REQUIREMENTS",
    title: "Your Thermal Envelope",
    detail:
      "You bring the challenge: heat dissipation load (Watts), coolant flow rate (LPM), allowable pressure drop, and physical space packaging.",
    deliverable: "Design specifications & boundary targets",
  },
  {
    step: "02",
    phase: "ENGINEERING",
    title: "Thermal Design & CFD",
    detail:
      "Our Guelph team runs finite-element CFD simulations to optimize micro-channel topologies, boundary layers, and internal fluid pathways.",
    deliverable: "CFD heat map & pressure drop curves",
  },
  {
    step: "03",
    phase: "PROTOTYPING",
    title: "Rapid Prototyping",
    detail:
      "Precision CNC machining, custom manifold routing, and tube-bending to deliver functional engineering evaluation prototypes rapidly.",
    deliverable: "Physical test articles for bench validation",
  },
  {
    step: "04",
    phase: "MANUFACTURING",
    title: "Production Under One Roof",
    detail:
      "High-integrity Friction Stir Welding (FSW), CMM dimensional verification, and 100% helium mass-spectrometer leak certification.",
    deliverable: "Production-ready, serial hardware",
  },
];

export function CustomPhilosophy() {
  return (
    <section id="philosophy" className="relative w-full py-24 px-6 lg:px-12 bg-white border-b border-slate-200 overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Main Concept Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold text-sky-700 px-2.5 py-0.5 bg-sky-50 border border-sky-300 rounded shadow-xs">
                WHAT WE DO AT ITS COOLING
              </span>
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Custom By Design
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6">
              No products on shelves. <br />
              <span className="text-sky-600">Every solution is 100% custom.</span>
            </h2>

            <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-3xl mb-6">
              ITS Cooling designs and manufactures custom heat sinks and liquid cold plates based on our customers’ specific requirements. We are a <strong>one-stop solution</strong> for thermal management needs, handling everything from initial design and engineering to prototyping and final manufacturing.
            </p>

            <p className="text-slate-600 text-base leading-relaxed max-w-3xl font-normal">
              We don’t just sell standard cooling products. We work with customers to develop and manufacture cooling solutions that fit their applications. Different projects have different thermal constraints — <strong>hence, a new part all the time</strong>.
            </p>
          </div>

          {/* Quick Highlight Banner */}
          <div className="lg:col-span-4 bg-gradient-to-br from-slate-50 to-sky-50/60 border-2 border-sky-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-800 uppercase tracking-wider mb-3">
              <PackageX className="w-4 h-4 text-sky-600" />
              <span>Zero Shelf Inventory</span>
            </div>
            <h3 className="text-lg font-bold text-slate-950 uppercase leading-snug mb-3">
              Nobody purchases off a shelf. Everything is engineered to order.
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
              You bring your cooling requirements, and we take care of the entire process — from concept to finished product, all under one roof in Guelph, Ontario.
            </p>
            <Link
              href="/contact"
              className="shine-sweep inline-flex items-center gap-2 w-full justify-center px-5 py-3 bg-slate-950 text-white hover:bg-sky-600 font-bold text-xs uppercase tracking-wider rounded-md transition-all shadow-sm group"
            >
              <span>Submit Your Requirements</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 4-Step Under One Roof Workflow */}
        <div className="mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-6 flex items-center gap-2">
            <Factory className="w-4 h-4 text-sky-600" />
            <span>The Turnkey Process: Concept to Hardware Under One Roof</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white border-2 border-slate-200/90 rounded-2xl p-6 shadow-xs hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xl font-extrabold text-sky-600">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 bg-slate-100 text-slate-600 rounded font-bold">
                      {step.phase}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-950 uppercase mb-2">
                    {step.title}
                  </h4>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {step.detail}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-sky-800 bg-sky-50/60 p-2.5 rounded-lg border border-sky-100">
                  <span className="text-slate-400 block text-[9px] uppercase">Outcome:</span>
                  <span className="font-semibold">{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Key Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="block text-xs font-bold font-sans uppercase text-slate-900">
                100% Application-Specific
              </span>
              <span className="text-xs text-slate-500 font-mono">
                No catalogue compromises. Built strictly for your heat load.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="block text-xs font-bold font-sans uppercase text-slate-900">
                One-Stop Accountability
              </span>
              <span className="text-xs text-slate-500 font-mono">
                Design, simulation, machining &amp; FSW under one roof.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="block text-xs font-bold font-sans uppercase text-slate-900">
                Guelph, Ontario Facility
              </span>
              <span className="text-xs text-slate-500 font-mono">
                Domestic Canadian manufacturing &amp; rapid collaboration.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="block text-xs font-bold font-sans uppercase text-slate-900">
                Zero-Leakage Assurance
              </span>
              <span className="text-xs text-slate-500 font-mono">
                ISO 9001:2015 certified &amp; 100% helium mass-spec tested.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
