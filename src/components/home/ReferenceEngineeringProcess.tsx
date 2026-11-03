"use client";

import React, { useState } from "react";
import Image from "next/image";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Define & discover",
    description:
      "Start with your heat load, temperature targets, available space and production goals. We turn the constraints into a clear design brief.",
    image: "/assets/temperature-model.webp",
    alt: "Thermal analysis of a liquid cold plate",
    caption: "SIMULATE. ITERATE. OPTIMIZE.",
  },
  {
    step: "02",
    title: "Design & simulate",
    description:
      "CFD, parametric studies and iterative optimization explore the thermal design. SolidWorks supports mechanical design and integration.",
    image: "/assets/velocity-model.webp",
    alt: "Liquid cold plate velocity distribution model",
    caption: "THERMAL & HYDRAULIC ANALYSIS.",
  },
  {
    step: "03",
    title: "Machine & manufacture",
    description:
      "Five-axis CNC machining and friction stir welding bring the design to life at our Ontario facility, with trusted partners for high-volume production.",
    image: "/assets/team-machining.webp",
    alt: "ITS team operating CNC manufacturing equipment",
    caption: "PRECISION MANUFACTURING. IN HOUSE.",
  },
  {
    step: "04",
    title: "Test & deliver",
    description:
      "Experiments and prototype evaluation check thermal performance against your project requirements before moving toward production.",
    image: "/assets/liquid-assembly.webp",
    alt: "Completed ITS liquid cold plate assembly",
    caption: "FROM PROTOTYPE TO PRODUCTION.",
  },
];

export function ReferenceEngineeringProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const current = PROCESS_STEPS[activeStep];

  return (
    <section id="engineering" className="relative w-full py-24 px-6 sm:px-8 lg:px-12 bg-[#f2f4f0] text-[#0b252c] border-b border-[#d6deda]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[11px] font-mono tracking-widest text-[#087f83] uppercase mb-2 font-bold">
              02 / HOW WE WORK
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight leading-[1.05]">
              From “what if” <br />
              <span className="text-[#647475]">to working hardware.</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed">
            Thermal and mechanical design, simulation, manufacturing and testing. <br />
            Connected from the very first conversation.
          </p>
        </div>

        {/* Process Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Stage Visual Window */}
          <div className="lg:col-span-6 bg-white border border-[#d6deda] rounded-lg p-6 flex flex-col justify-between shadow-sm min-h-[380px]">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 pb-3 border-b border-slate-100">
              <span className="text-[#087f83] font-bold">
                0{activeStep + 1} — 04 / PROCESS MILESTONE
              </span>
              <span>IN-HOUSE FACILITY GUELPH</span>
            </div>

            <div className="relative w-full h-64 sm:h-72 flex items-center justify-center p-2">
              <Image
                src={current.image}
                alt={current.alt}
                width={500}
                height={320}
                className="object-contain max-h-full transition-all duration-300"
              />
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-600">
              <span className="tracking-wider">{current.caption}</span>
              <span className="text-[#087f83] font-bold">ISO 9001:2015</span>
            </div>
          </div>

          {/* Right Column: 4 Expandable / Selectable Stages */}
          <div className="lg:col-span-6 space-y-3">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-lg border transition-all cursor-pointer ${
                    isActive
                      ? "bg-white border-[#087f83] shadow-md ring-1 ring-[#087f83]/20"
                      : "bg-[#e9ece6] border-transparent hover:bg-white/80 text-slate-700"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span
                        className={`text-sm font-mono font-bold px-2 py-0.5 rounded ${
                          isActive ? "bg-[#0b252c] text-[#81e6d6]" : "bg-white text-slate-500"
                        }`}
                      >
                        {step.step}
                      </span>
                      <div>
                        <h3 className="text-lg font-serif font-bold text-slate-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-lg font-mono text-[#087f83]">
                      {isActive ? "−" : "+"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
