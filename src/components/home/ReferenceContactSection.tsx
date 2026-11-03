"use client";

import React from "react";

export function ReferenceContactSection() {
  const openInquiry = () => {
    window.dispatchEvent(
      new CustomEvent("its-reference-modal", {
        detail: { type: "open-inquiry" },
      })
    );
  };

  return (
    <section id="contact" className="relative w-full bg-[#091f26] text-white py-20 px-6 sm:px-8 lg:px-12 border-b border-slate-800">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Callout */}
        <div className="lg:col-span-7">
          <p className="text-[11px] font-mono tracking-widest text-[#81e6d6] uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#81e6d6]" />
            YOUR NEXT BREAKTHROUGH STARTS HERE
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-medium tracking-tight leading-[0.98] mb-6">
            Tell us what’s <br />
            getting <em className="not-italic text-[#81e6d6]">too hot.</em>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-lg">
            Bring us the challenge. Let’s engineer the solution.
          </p>
          <button
            onClick={openInquiry}
            className="px-8 py-4 bg-[#81e6d6] hover:bg-[#a4f5e7] text-[#091f26] font-bold text-xs font-mono uppercase tracking-wider rounded transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-4 cursor-pointer"
          >
            <span>Start your project</span>
            <span className="text-lg">↗</span>
          </button>
        </div>

        {/* Right Column Verified Contact Details */}
        <div className="lg:col-span-5 bg-[#0b252c] border border-slate-700/80 p-8 rounded-lg flex flex-col justify-between space-y-6 text-xs font-mono">
          <div>
            <span className="text-[10px] tracking-widest text-[#81e6d6] uppercase block mb-3 font-bold">
              ENGINEERING &amp; SALES
            </span>
            <a
              href="mailto:Engineering@itscooling.com"
              className="text-xl sm:text-2xl font-serif font-bold text-white hover:text-[#81e6d6] transition-colors block mb-2"
            >
              Engineering@itscooling.com ↗
            </a>
            <a
              href="tel:+15197634454"
              className="text-lg font-mono text-slate-300 hover:text-white transition-colors block"
            >
              +1 (519) 763-4454 ↗
            </a>
          </div>

          <div className="border-t border-slate-700/80 pt-6">
            <p className="text-slate-300 text-sm font-sans leading-relaxed mb-3">
              290 Southgate Drive, Unit #2 <br />
              Guelph, ON N1G 4P5, Canada
            </p>
            <span className="text-[11px] text-slate-400 tracking-wider">
              MON–FRI / 8:30 AM–5:00 PM EASTERN
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
