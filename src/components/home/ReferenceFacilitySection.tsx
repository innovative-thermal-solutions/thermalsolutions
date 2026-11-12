"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export function ReferenceFacilitySection() {
  const openTeamModal = () => {
    window.dispatchEvent(
      new CustomEvent("its-reference-modal", {
        detail: { type: "open-team-detail" },
      })
    );
  };

  return (
    <section id="about" className="relative w-full bg-gradient-to-br from-[#004d52] via-[#01747A] to-[#005a5f] text-white overflow-hidden border-b border-[#015e63]">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
        {/* Left: Manufacturing Facility Workshop Photo */}
        <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-full">
          <Image
            src="/assets/workshop.webp"
            alt="Innovative Thermal Solutions manufacturing facility in Guelph, Ontario"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003b3e] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#004d52]" />
          <div className="absolute top-6 left-6 z-10 px-3 py-1 bg-black/60 backdrop-blur-md rounded border border-white/20 text-[10px] font-mono tracking-widest text-teal-200">
            GUELPH, ONTARIO / HQ &amp; MANUFACTURING
          </div>
        </div>

        {/* Right: Company Stats & Quality Commitment */}
        <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <p className="text-[11px] font-mono tracking-widest text-teal-200 uppercase mb-3 font-semibold">
            05 / PEOPLE. PRECISION. PARTNERSHIP.
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight leading-[1.04] mb-6 text-white">
            Small enough to listen. <br />
            <span className="text-teal-200">Equipped to deliver.</span>
          </h2>
          <p className="text-teal-50 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-normal">
            Founded in 2020, Innovative Thermal Solutions brings engineering and manufacturing together under one roof. We work alongside your team to solve cooling challenges, from a single prototype to production.
          </p>

          {/* Three Key Metrics */}
          <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-white/20">
            <div>
              <span className="text-3xl sm:text-4xl font-mono font-bold text-white block">
                6,000
              </span>
              <span className="text-xs text-teal-100 font-sans block mt-1">sq ft facility</span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-mono font-bold text-white block">
                27
              </span>
              <span className="text-xs text-teal-100 font-sans block mt-1">team members</span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-mono font-bold text-white block">
                2020
              </span>
              <span className="text-xs text-teal-100 font-sans block mt-1">year founded</span>
            </div>
          </div>

          <p className="text-[11px] text-teal-200/80 font-mono mb-6">
            Facility and team figures from the 2026 company presentation.
          </p>

          {/* Quality Row */}
          <div className="flex items-start gap-3 p-4 bg-[#003b3e]/90 border border-white/20 rounded mb-8">
            <div className="w-5 h-5 rounded-full bg-white text-[#01747A] flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <div className="text-xs">
              <strong className="text-white block font-sans mb-0.5">
                Quality built into the process.
              </strong>
              <p className="text-teal-50 font-sans leading-relaxed">
                ISO 9001:2015 certified. AS9100 and CGP / ITAR certification initiatives are in progress, as described in the company presentation.
              </p>
            </div>
          </div>

          <div>
            <button
              onClick={openTeamModal}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-teal-200 underline cursor-pointer"
            >
              <span>Meet the people behind ITS</span>
              <span>↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
