"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Cpu, Flame, Globe2 } from "lucide-react";

export function WhoWeAreSection() {
  const openInquiry = () => {
    window.dispatchEvent(
      new CustomEvent("its-reference-modal", {
        detail: { type: "open-inquiry" },
      })
    );
  };

  return (
    <section id="who-we-are" className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#091f26] text-white border-b border-slate-800 overflow-hidden">
      {/* Background blueprint subtle accents */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(rgba(117,185,181,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(117,185,181,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-[#19655a]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#81e6d6]" />
          <p className="text-[12px] font-mono tracking-[0.2em] text-[#81e6d6] uppercase font-semibold">
            ABOUT ITS COOLING
          </p>
        </div>

        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-[#f4f6ef] leading-[1.08]">
              Who We Are
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-center lg:justify-end">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#25505b] bg-[#0c2831]/80 backdrop-blur-sm text-xs font-mono text-[#a3c0bb]">
              <span className="w-2 h-2 rounded-full bg-[#81e6d6] animate-pulse" />
              <span>ONTARIO, CANADA & GLOBAL PARTNERS</span>
            </div>
          </div>
        </div>

        {/* Two-Column Editorial Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Column 1: Core Identity & Expertise */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-xl bg-gradient-to-br from-[#0c2831] to-[#07191f] border border-[#1b4651] flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#19655a]/30 border border-[#81e6d6]/30 flex items-center justify-center text-[#81e6d6] mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-white mb-5 leading-snug">
                Turnkey Engineering & 75+ Years Combined Expertise
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-6">
                Innovative Thermal Solutions is a leading turnkey engineering firm specializing in the design and manufacture of air-cooled heat sinks and liquid cold plates for power electronics, RF generators, and battery packs.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                Our team of seasoned engineers brings over 75 years of combined experience, working closely with clients to deliver tailored thermal management solutions.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1b4651]/80 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-2xl sm:text-3xl font-mono font-bold text-[#81e6d6]">75+</span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Years Combined Experience</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-mono font-bold text-white">100%</span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Tailored Engineering</span>
              </div>
            </div>
          </div>

          {/* Column 2: Manufacturing & Advanced FSW Technology */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-xl bg-gradient-to-br from-[#0c2831] to-[#07191f] border border-[#1b4651] flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#19655a]/30 border border-[#81e6d6]/30 flex items-center justify-center text-[#81e6d6] mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-white mb-5 leading-snug">
                Cutting-Edge Haas CNC & Advanced Friction Stir Welding
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-6">
                Operating from our state-of-the-art manufacturing facility in Ontario, Canada, we employ cutting-edge Haas CNC milling machines to produce high-quality products.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-6">
                Our advanced Friction Stir Welding (FSW) technology ensures the creation of leak-proof aluminum and copper liquid cold plates, setting us apart as one of the few North American companies utilizing this innovative technique for cooling battery systems and power electronics.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                Additionally, for high-volume and cost-effective production needs, we collaborate with trusted manufacturing partners in Asia.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1b4651]/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#81e6d6]">
                <Globe2 className="w-4 h-4 flex-shrink-0" />
                <span>North American FSW Leaders & Global Volume Partners</span>
              </div>
              <button
                onClick={openInquiry}
                className="group inline-flex items-center gap-2 text-xs font-mono font-bold text-white uppercase tracking-wider hover:text-[#81e6d6] transition-colors cursor-pointer"
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

