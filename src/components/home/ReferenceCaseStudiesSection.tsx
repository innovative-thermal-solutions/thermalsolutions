"use client";

import React, { useState } from "react";
import Image from "next/image";

export function ReferenceCaseStudiesSection() {
  const [sliderPos, setSliderPos] = useState(50);

  const openBusProject = () => {
    window.dispatchEvent(
      new CustomEvent("its-reference-modal", {
        detail: { type: "open-bus-detail" },
      })
    );
  };

  return (
    <section id="results" className="relative w-full py-24 px-6 sm:px-8 lg:px-12 bg-[#f2f4f0] text-[#0b252c] border-b border-[#d6deda]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[11px] font-mono tracking-widest text-[#087f83] uppercase mb-2 font-bold">
              04 / ENGINEERING IN ACTION
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight leading-[1.05]">
              Real challenges. <br />
              <span className="text-[#647475]">Measurable progress.</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed">
            A closer look at the thinking behind our thermal solutions.
          </p>
        </div>

        {/* Case Study 01: RF & Telecommunications with Interactive Slider */}
        <div className="bg-white border border-[#d6deda] rounded-lg p-6 sm:p-10 mb-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column Copy */}
            <div className="lg:col-span-5">
              <p className="text-[10px] font-mono tracking-widest text-[#087f83] uppercase font-bold mb-2">
                CASE STUDY / RF &amp; TELECOMMUNICATIONS
              </p>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight mb-4">
                Turning down the heat <br />
                on RF performance.
              </h3>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-6xl sm:text-7xl font-bold font-mono text-[#087f83]">20</span>
                <span className="text-2xl font-bold font-mono text-[#087f83]">°C</span>
                <p className="text-xs text-slate-600 ml-2 font-sans">
                  up to 20°C reduction <br />
                  in peak temperature
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                ITS’s embedded heat pipe design improved heat distribution in a wireless solid-state amplifier. Explore the thermal models to see the difference.
              </p>

              <span className="text-[10px] text-slate-400 font-mono block italic">
                Reported project result from the ITS company presentation. Results depend on application and operating conditions.
              </span>
            </div>

            {/* Right Column: Interactive Drag Comparison */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="relative w-full h-64 sm:h-80 rounded overflow-hidden select-none bg-[#f4f7f6] border border-[#d6deda]">
                {/* Base: ITS Solution (After) */}
                <div className="absolute inset-0 flex items-center justify-center p-3">
                  <div className="relative w-full h-full">
                    <Image
                      src="/assets/thermal-after.webp"
                      alt="Thermal model after the ITS heat pipe redesign"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                      priority
                    />
                  </div>
                  <span className="absolute top-3 right-3 px-2 py-1 bg-[#0b252c]/90 backdrop-blur-md rounded text-[9px] font-mono text-[#81e6d6] z-10 uppercase tracking-wider font-semibold shadow-sm">
                    ITS SOLUTION
                  </span>
                </div>

                {/* Overlay: Original Design (Before) with CSS clip-path to prevent zooming/stretching */}
                <div
                  className="absolute inset-0 flex items-center justify-center p-3 pointer-events-none"
                  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/assets/thermal-before.webp"
                      alt="Thermal model of the original amplifier cooling design"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                      priority
                    />
                  </div>
                  <span className="absolute top-3 left-3 px-2 py-1 bg-[#0b252c]/90 backdrop-blur-md rounded text-[9px] font-mono text-[#e2ece9] z-10 uppercase tracking-wider font-semibold shadow-sm">
                    ORIGINAL DESIGN
                  </span>
                </div>

                {/* Divider Line & Handle */}
                <div
                  className="absolute top-0 bottom-0 w-[2px] bg-[#087f83] shadow-[0_0_10px_rgba(8,127,131,0.5)] z-20 pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#81e6d6] text-[#0b252c] border-2 border-white flex items-center justify-center text-sm font-bold shadow-md">
                    ↔
                  </div>
                </div>
              </div>

              {/* Slider Input Control */}
              <div className="w-full mt-4 flex flex-col items-center gap-1.5">
                <div className="w-full max-w-md flex items-center justify-between text-xs font-mono text-slate-600">
                  <label
                    htmlFor="thermal-range"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <span>Drag to compare the thermal models</span>
                  </label>
                  <span className="text-[#087f83] font-bold">← →</span>
                </div>
                <input
                  id="thermal-range"
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="w-full max-w-md accent-[#087f83] cursor-ew-resize h-2 bg-[#d6deda] rounded-lg appearance-none"
                  aria-label="Compare original design with ITS solution"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 02: EV & Battery Large-Format Cold Plate */}
        <div className="bg-white border border-[#d6deda] rounded-lg p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="relative w-full md:w-56 h-40 shrink-0 flex items-center justify-center p-2 bg-[#e9ece6] rounded">
            <Image
              src="/assets/bus-plate.webp"
              alt="Large-format ITS electric bus aluminum battery cold plate"
              width={260}
              height={160}
              className="object-contain max-h-32"
            />
          </div>

          <div className="flex-1">
            <p className="text-[10px] font-mono tracking-widest text-[#087f83] uppercase font-bold mb-1">
              EV &amp; BATTERY
            </p>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-2">
              Big ambitions. <br className="hidden sm:inline" />
              Larger-format cooling.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              An aluminum cold plate developed for electric bus battery cooling, measuring 1,450 × 610 × 15 mm (57 × 24 × 0.6 in).
            </p>
            <button
              onClick={openBusProject}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#087f83] hover:underline cursor-pointer"
            >
              <span>Explore the project</span>
              <span>↗</span>
            </button>
          </div>

          <div className="md:border-l md:border-[#d6deda] md:pl-8 text-center md:text-left shrink-0">
            <span className="text-4xl sm:text-5xl font-mono font-bold text-slate-900 block">
              1,450<span className="text-base text-slate-500 font-sans ml-1">mm</span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#087f83] uppercase font-bold block mt-1">
              ENGINEERED AT SCALE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
