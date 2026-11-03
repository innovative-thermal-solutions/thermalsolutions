"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Factory, Cpu, Layers, ShieldCheck, CheckCircle2 } from "lucide-react";

export function CompanyIntroductionSection() {
  const openInquiry = () => {
    window.dispatchEvent(
      new CustomEvent("its-reference-modal", {
        detail: { type: "open-inquiry" },
      })
    );
  };

  return (
    <section id="about-intro" className="relative w-full py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto">
        {/* Eyebrow & Main Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold text-sky-700 px-2.5 py-0.5 bg-sky-50 border border-sky-300 rounded shadow-xs">
                ITS GUELPH
              </span>
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold">
                What We Do • We Design. We Manufacture.
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-slate-950 uppercase leading-[0.98] mb-6">
              Thermal Engineering. <br />
              <span className="text-sky-600">Manufactured for Peak Performance.</span>
            </h2>

            <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-3xl mb-6">
              Innovative Thermal Solutions (ITS Cooling) designs and manufactures custom heat sinks, liquid cold plates, and high-performance bus bars tailored strictly to our customers’ thermal envelopes. We operate as a <strong>true one-stop turnkey solution</strong>: handling thermal analysis, CFD simulation, 5-axis CNC machining, friction stir welding, and helium leak testing entirely under one roof in Guelph, Ontario.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 lg:pt-10">
            <button
              onClick={openInquiry}
              className="px-6 py-4 bg-slate-950 hover:bg-sky-600 text-white font-bold text-xs font-mono uppercase tracking-wider rounded-md transition-colors flex items-center justify-between cursor-pointer shadow-md"
            >
              <span>Talk to a Thermal Engineer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/technologies"
              className="px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs font-mono uppercase tracking-wider rounded-md transition-colors flex items-center justify-between border border-slate-200"
            >
              <span>Explore Capabilities</span>
              <span className="text-sm font-mono">↗</span>
            </Link>
          </div>
        </div>

        {/* 4 Core In-House Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-slate-100">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <Cpu className="w-6 h-6 text-sky-600 mb-3" />
            <h3 className="font-bold text-sm uppercase text-slate-950 mb-1">Custom Thermal Sizing &amp; CFD</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Finite-element fluid flow and boundary-layer CFD modeling to eliminate hot spots without catalogue compromises.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <Factory className="w-6 h-6 text-sky-600 mb-3" />
            <h3 className="font-bold text-sm uppercase text-slate-950 mb-1">5-Axis High-Precision CNC</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              In-house Haas VF-6 and UMC-1000SS machining high-aspect ratio micro-fin channels to ±0.025 mm tolerances.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <Layers className="w-6 h-6 text-sky-600 mb-3" />
            <h3 className="font-bold text-sm uppercase text-slate-950 mb-1">Solid-State Friction Stir Welding</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Joining metal plates without melting, creating hermetic, zero-porosity joints with 100% parent metal strength.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <ShieldCheck className="w-6 h-6 text-sky-600 mb-3" />
            <h3 className="font-bold text-sm uppercase text-slate-950 mb-1">ISO 9001:2015 Quality &amp; Leak Testing</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              100% helium mass-spectrometer leak certification (&lt; 1×10⁻⁸ mbar·L/s) and CMM coordinate dimensional inspection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
