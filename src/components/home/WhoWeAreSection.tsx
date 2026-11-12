"use client";

import React from "react";
import { ArrowUpRight, Globe2 } from "lucide-react";

export function WhoWeAreSection() {
  const openInquiry = () => {
    window.dispatchEvent(
      new CustomEvent("its-reference-modal", {
        detail: { type: "open-inquiry" },
      })
    );
  };

  return (
    <section id="who-we-are" className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#f8faf9] text-[#141f22] border-b border-[#d8dedf] overflow-hidden">
      {/* Background blueprint subtle accents */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(8,127,131,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(8,127,131,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-[#00747a]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#00747a]" />
          <p className="text-[12px] font-mono tracking-[0.2em] text-[#00747a] uppercase font-bold">
            ABOUT ITS COOLING
          </p>
        </div>

        {/* Section Heading: Who We Are in Brand Color without Subheadings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-[#00747a] leading-[1.08]">
              Who We Are
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-center lg:justify-end">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#d8dedf] bg-white/90 backdrop-blur-sm text-xs font-mono text-[#00747a] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#00747a] animate-pulse" />
              <span className="font-semibold">ONTARIO, CANADA & GLOBAL PARTNERS</span>
            </div>
          </div>
        </div>

        {/* Two-Column Editorial Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Column 1: Core Identity & Expertise */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-xl bg-white border border-[#d8dedf] flex flex-col justify-between shadow-xs">
            <div>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-6">
                Innovative Thermal Solutions is a leading turnkey engineering firm specializing in the design and manufacture of air-cooled heat sinks and liquid cold plates for power electronics, RF generators, and battery packs.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Our team of seasoned engineers brings over 75 years of combined experience, working closely with clients to deliver tailored thermal management solutions.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#d8dedf] grid grid-cols-2 gap-4">
              <div>
                <span className="block text-2xl sm:text-3xl font-mono font-bold text-[#00747a]">75+</span>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-medium">Years Combined Experience</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-mono font-bold text-[#141f22]">100%</span>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-medium">Tailored Engineering</span>
              </div>
            </div>
          </div>

          {/* Column 2: Manufacturing & Advanced FSW Technology */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-xl bg-white border border-[#d8dedf] flex flex-col justify-between shadow-xs">
            <div>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-6">
                Operating from our state-of-the-art manufacturing facility in Ontario, Canada, we employ cutting-edge Haas CNC milling machines to produce high-quality products.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-6">
                Our advanced Friction Stir Welding (FSW) technology ensures the creation of leak-proof aluminum and copper liquid cold plates, setting us apart as one of the few North American companies utilizing this innovative technique for cooling battery systems and power electronics.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Additionally, for high-volume and cost-effective production needs, we collaborate with trusted manufacturing partners in Asia.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#d8dedf] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00747a] font-semibold">
                <Globe2 className="w-4 h-4 flex-shrink-0" />
                <span>North American FSW Leaders & Global Volume Partners</span>
              </div>
              <button
                onClick={openInquiry}
                className="group inline-flex items-center gap-2 text-xs font-mono font-bold text-[#141f22] uppercase tracking-wider hover:text-[#00747a] transition-colors cursor-pointer"
              >
                <span>Connect With Our Team</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
