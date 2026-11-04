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
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-45 brightness-95"
        >
          <source src="/videos/hero-workshop-bg.mp4" type="video/mp4" />
        </video>
        {/* Darkening / Tint gradient overlays to maintain high contrast text readability and brand teal tone */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#091f26]/90 via-[#091f26]/75 to-[#091f26]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#091f26] via-transparent to-[#091f26]/60" />
      </div>

      {/* Blueprint Grid with Ambient Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(117,185,181,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(117,185,181,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(90deg, transparent, #000 25%)",
        }}
      />
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-[#19655a]/20 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 pt-28 lg:pt-36 pb-20 relative z-10">
        <div className="max-w-3xl">
          {/* Main Hero Copy */}
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

          <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-2xl mb-8">
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
