"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, RotateCw, Check } from "lucide-react";

export function ReferenceHeroSection() {
  const [liquidHero, setLiquidHero] = useState(false);

  const openInquiry = (cooling?: string) => {
    window.dispatchEvent(
      new CustomEvent("its-reference-modal", {
        detail: { type: "open-inquiry", payload: { cooling } },
      })
    );
  };

  return (
    <section id="home" className="relative w-full bg-[#091f26] text-[#f4f6ef] overflow-hidden border-b border-slate-800">
      {/* Blueprint Grid with Ambient Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(117,185,181,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(117,185,181,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(90deg, transparent, #000 25%)",
        }}
      />
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-[#19655a]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 pt-28 lg:pt-36 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Positioning Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#81e6d6] shadow-[0_0_8px_#81e6d6]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#a3c0bb] font-semibold">
                THERMAL ENGINEERING. WITHOUT LIMITS.
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-[84px] font-serif font-medium tracking-tight text-white leading-[0.98] mb-6">
              Power ahead. <br />
              Keep your <em className="not-italic text-[#81e6d6]">cool.</em>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              When performance creates heat, we create possibilities. Custom thermal solutions, engineered and manufactured for your next breakthrough.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10">
              <a
                href="#solutions"
                className="inline-flex items-center justify-between gap-6 px-7 py-4 bg-[#81e6d6] hover:bg-[#a4f5e7] text-[#091f26] font-bold text-xs uppercase tracking-wider rounded transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore our solutions</span>
                <span className="text-lg">↗</span>
              </a>

              <button
                onClick={() => openInquiry()}
                className="inline-flex items-center gap-3 text-sm font-medium text-white hover:text-[#81e6d6] transition-colors cursor-pointer"
              >
                <span>Talk to an engineer</span>
                <span className="text-lg">↗</span>
              </button>
            </div>

            {/* Verification Proof Strip */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-800 text-xs font-mono text-[#a9bfb9]">
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#0b252c] border border-slate-700 rounded">
                <Check className="w-3.5 h-3.5 text-[#81e6d6]" />
                <span>ISO 9001:2015 certified</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="tracking-wider">Made in Ontario. Built for your world.</span>
            </div>
          </div>

          {/* Right Column: Hero Interactive Product Display */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[380px]">
            {/* Technical top label */}
            <div className="w-full flex justify-between items-center mb-2 text-[10px] font-mono tracking-widest text-[#7eaaa1]">
              <span>01 / ENGINEERED TO PERFORM</span>
              <span>43.51° N / 80.21° W</span>
            </div>

            {/* Circular Orbit graphic backdrop */}
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#8ac8bd]/20 -rotate-12 pointer-events-none" />
              <div className="absolute inset-6 rounded-full border border-dashed border-[#8ac8bd]/25 rotate-45 pointer-events-none" />

              <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                <Image
                  src={liquidHero ? "/assets/hypercool.webp" : "/assets/hero-heatsink.webp"}
                  alt={liquidHero ? "ITS HyperCool liquid cold plate" : "ITS aluminum heat sink with embedded copper heat pipes"}
                  width={460}
                  height={380}
                  priority
                  className="object-contain max-h-[320px] drop-shadow-[0_30px_35px_rgba(0,0,0,0.6)] transition-all duration-500 hover:scale-105"
                />
              </div>

              {/* Product toggle tag */}
              <div className="absolute bottom-2 left-4 z-20 flex items-center gap-3 px-3.5 py-2 rounded bg-[#0b252c]/90 border border-slate-700 backdrop-blur-md text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#81e6d6]" />
                <span className="text-slate-200">
                  {liquidHero ? "HyperCool liquid cold plate" : "Embedded heat pipe technology"}
                </span>
                <button
                  onClick={() => setLiquidHero(!liquidHero)}
                  className="ml-1 p-1 hover:bg-white/10 rounded text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Switch between air cooling and liquid cooling showcase"
                  aria-label="Switch product preview"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Bottom technical label */}
            <div className="w-full flex justify-between items-center mt-3 text-[10px] font-mono tracking-widest text-[#7eaaa1]">
              <span>PRECISION IN EVERY DETAIL</span>
              <span>+ IN-HOUSE FSW & CNC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="w-full bg-[#07191f] border-t border-slate-800/80 py-6 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold font-mono text-[#81e6d6]">75+</span>
            <span className="text-slate-300 font-sans">
              years of combined <br />
              <strong>engineering experience</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold font-mono text-[#81e6d6]">5-axis</span>
            <span className="text-slate-300 font-sans">
              precision CNC <br />
              <strong>manufacturing in-house</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xl font-bold font-mono text-[#81e6d6]">In-house</span>
            <span className="text-slate-300 font-sans">
              friction stir welding <br />
              <strong>solid-state technology</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-base font-bold font-mono text-[#81e6d6]">North America</span>
            <span className="text-slate-300 font-sans">
              engineering &amp; manufacturing <br />
              <strong>with global production partners</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
