"use client";

import React from "react";

const FAQS = [
  {
    q: "Air cooling or liquid cooling: where do I start?",
    a: "Start with heat load, maximum component temperature, ambient conditions and space. Available airflow and coolant infrastructure also matter. ITS can evaluate these together and recommend an approach for your application.",
  },
  {
    q: "Can you work with our existing design?",
    a: "Yes. The ITS team collaborates with customers on product development, simulation and manufacturing. Share your current design, constraints and performance targets to begin the discussion.",
  },
  {
    q: "Do you manufacture in North America?",
    a: "ITS engineers and manufactures in Guelph, Ontario, with in-house CNC machining and friction stir welding. Trusted manufacturing partners in Asia support high-volume and cost-sensitive production requirements.",
  },
  {
    q: "What should I include in a project inquiry?",
    a: "Include your application, heat load, temperature limits, mounting envelope, quantities and timing. For liquid cooling, add coolant type, inlet temperature, flow rate and pressure-drop limits if available.",
  },
  {
    q: "How long will my project take?",
    a: "Timing depends on design complexity, materials, tooling, machining, fittings and validation requirements. Contact ITS with your scope and target date for a project-specific schedule.",
  },
];

export function ReferenceFaqSection() {
  const openInquiry = () => {
    window.dispatchEvent(
      new CustomEvent("its-reference-modal", {
        detail: { type: "open-inquiry" },
      })
    );
  };

  return (
    <section className="relative w-full py-24 px-6 sm:px-8 lg:px-12 bg-[#f8faf9] text-[#141f22] border-b border-[#d8dedf]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column Heading */}
          <div className="lg:col-span-5">
            <p className="text-[11px] font-mono tracking-widest text-[#00747a] uppercase mb-2 font-bold">
              A FEW GOOD QUESTIONS
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight leading-[1.05] mb-6">
              Let’s clear <br />
              <span className="text-[#7f7c7d]">the air.</span>
            </h2>
            <button
              onClick={openInquiry}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#00747a] hover:underline cursor-pointer"
            >
              <span>Ask our engineers</span>
              <span>↗</span>
            </button>
          </div>

          {/* Right Column: Expandable Details Accordion */}
          <div className="lg:col-span-7 divide-y divide-[#d8dedf] border-y border-[#d8dedf]">
            {FAQS.map((item, i) => (
              <details key={i} className="group py-5 cursor-pointer">
                <summary className="flex items-center justify-between text-base sm:text-lg font-serif font-bold text-slate-900 group-hover:text-[#00747a] transition-colors list-none">
                  <span>{item.q}</span>
                  <span className="text-xl font-mono text-[#00747a] ml-4 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans pr-8">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
