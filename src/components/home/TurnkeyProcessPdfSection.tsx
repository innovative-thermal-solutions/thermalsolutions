"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Factory, CheckCircle2 } from "lucide-react";

const WORKFLOW_STEPS = [
  {
    step: "01",
    phase: "REQUIREMENTS",
    title: "YOUR THERMAL ENVELOPE",
    detail:
      "You bring the challenge: heat dissipation load (Watts), coolant flow rate (LPM), allowable pressure drop, and physical space packaging.",
    outcome: "Design specifications & boundary targets",
  },
  {
    step: "02",
    phase: "ENGINEERING",
    title: "THERMAL DESIGN & CFD",
    detail:
      "Our Guelph team runs finite-element CFD simulations to optimize micro-channel topologies, boundary layers and internal fluid pathways.",
    outcome: "CFD heat map & pressure drop curves",
  },
  {
    step: "03",
    phase: "PROTOTYPING",
    title: "RAPID PROTOTYPING",
    detail:
      "Precision CNC machining, custom manifold routing, and tube-bending to deliver functional engineering evaluation prototypes rapidly.",
    outcome: "Physical test articles for bench validation",
  },
  {
    step: "04",
    phase: "MANUFACTURING",
    title: "PRODUCTION UNDER ONE ROOF",
    detail:
      "High-integrity Friction Stir Welding (FSW), CMM dimensional verification, and 100% helium mass-spectrometer leak certification.",
    outcome: "Production-ready, serial hardware",
  },
];

export function TurnkeyProcessPdfSection() {
  const openInquiry = () => {
    window.dispatchEvent(
      new CustomEvent("its-reference-modal", {
        detail: { type: "open-inquiry" },
      })
    );
  };

  return (
    <section id="turnkey" className="relative w-full py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto">
        {/* Exact Main Heading from Design.pdf */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold text-sky-700 px-2.5 py-0.5 bg-sky-50 border border-sky-300 rounded shadow-xs">
              03 / WORKFLOW
            </span>
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold">
              End-to-End Execution
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-slate-950 uppercase leading-[1.05] mb-4">
            The Turnkey Process: Concept to Hardware Under One Roof
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            We don’t sell standard cooling products off shelves. Customers bring their project thermal requirements to us, and we handle the entire process — from concept and simulation to serial production in Ontario.
          </p>
        </div>

        {/* 4 Cards Exactly Matching Design.pdf Page 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {WORKFLOW_STEPS.map((s) => (
            <div
              key={s.step}
              className="bg-white border-2 border-slate-200/90 hover:border-sky-500 rounded-xl p-6 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xl font-extrabold text-sky-600">
                    {s.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 bg-slate-100 text-slate-600 rounded font-bold">
                    {s.phase}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-950 uppercase tracking-tight mb-3">
                  {s.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {s.detail}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-sky-800 bg-sky-50/70 p-3 rounded-lg border border-sky-100">
                <span className="text-slate-400 block text-[9px] uppercase tracking-wider mb-0.5">
                  Deliverable:
                </span>
                <span className="font-semibold block">{s.outcome}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Strip */}
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="text-xs sm:text-sm text-slate-700 font-sans">
              Have a specific heat load or CAD envelope ready for evaluation?
            </span>
          </div>
          <button
            onClick={openInquiry}
            className="px-6 py-3 bg-slate-950 hover:bg-sky-600 text-white font-bold text-xs font-mono uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Submit Your Requirements</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
