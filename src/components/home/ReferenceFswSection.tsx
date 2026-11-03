"use client";

import React from "react";
import Image from "next/image";

export function ReferenceFswSection() {
  const openFswModal = () => {
    window.dispatchEvent(
      new CustomEvent("its-reference-modal", {
        detail: { type: "open-fsw-detail" },
      })
    );
  };

  return (
    <section id="fsw-learn" className="relative w-full bg-[#091f26] text-white overflow-hidden border-b border-slate-800">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        {/* Left Half: Friction Stir Welding Tool Process Photo */}
        <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-full">
          <Image
            src="/images/reference/fsw-process.webp"
            alt="Friction stir welding tool machining a metal workpiece"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#091f26] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#091f26]" />
          <div className="absolute top-6 left-6 z-10 px-3 py-1 bg-black/60 backdrop-blur-md rounded border border-white/10 text-[10px] font-mono tracking-widest text-[#81e6d6]">
            IN-HOUSE / GUELPH, ONTARIO
          </div>
        </div>

        {/* Right Half: Engineering Content & Benefits */}
        <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <p className="text-[11px] font-mono tracking-widest text-[#81e6d6] uppercase mb-3 font-semibold">
            THE CONNECTION MAKES THE DIFFERENCE
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight leading-[1.04] mb-6">
            A stronger bond. <br />
            <span className="text-[#a3c0bb]">A cooler future.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            Friction stir welding joins metal without melting it. For liquid cold plates, that means a precise way to seal complex internal channels while limiting distortion.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8 text-xs font-mono text-slate-200">
            <div className="flex items-center gap-2">
              <span className="text-[#81e6d6]">↗</span>
              <span>Joint integrity</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#81e6d6]">↗</span>
              <span>Leak-tight construction</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#81e6d6]">↗</span>
              <span>Dimensional stability</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#81e6d6]">↗</span>
              <span>Process repeatability</span>
            </div>
          </div>

          <div>
            <button
              onClick={openFswModal}
              className="px-6 py-3.5 bg-white hover:bg-slate-100 text-[#091f26] font-bold text-xs font-mono uppercase tracking-wider rounded transition-colors inline-flex items-center gap-3 cursor-pointer"
            >
              <span>Explore the technology</span>
              <span>↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
