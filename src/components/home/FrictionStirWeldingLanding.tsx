"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Play,
  Pause,
  Maximize2,
  Flame,
  Droplets,
  Layers,
  Sparkles,
  SlidersHorizontal,
  Check,
} from "lucide-react";
import { SubpageCta } from "@/components/common/SubpageCta";

const WHY_FSW_POINTS = [
  {
    num: "01",
    title: "Joint strength",
    desc: "The rotating tool mechanically mixes softened base metal to form the joint, yielding near parent-metal strength with zero heat-affected degradation.",
    metric: "100% Joint Efficiency",
    highlight: "Base-Metal Structural Integrity",
  },
  {
    num: "02",
    title: "Leak tightness",
    desc: "A continuous, hermetic solid-state seam seals complex coolant channels inside machined cold plates against severe hydraulic and vibration stress.",
    metric: "< 1×10⁻⁸ mbar·L/s",
    highlight: "Helium Mass-Spec Tested",
  },
  {
    num: "03",
    title: "Thermal conductivity",
    desc: "A direct metal-to-metal bond avoids introducing high-resistance filler alloys, braze fluxes, or interface barriers across the cooling loop.",
    metric: "Zero Thermal Barrier",
    highlight: "Pure Al / Cu Conduction",
  },
  {
    num: "04",
    title: "Corrosion resistance",
    desc: "Homogeneous parent-metal metallurgy prevents galvanic cell corrosion and flux entrapment, ensuring long-term coolant compatibility.",
    metric: "Zero Galvanic Cells",
    highlight: "Coolant Loop Reliability",
  },
  {
    num: "05",
    title: "Process control",
    desc: "Fully programmed CNC tool paths and continuous closed-loop monitoring of axial forge loads and spindle speeds deliver flawless repeatability.",
    metric: "Closed-Loop CNC",
    highlight: "Guelph Facility Automation",
  },
  {
    num: "06",
    title: "Fewer consumables",
    desc: "FSW is clean and solid-state. It requires zero filler metals, shield gases, or chemical post-weld flux cleaning baths under our roof.",
    metric: "100% Solid-State",
    highlight: "Green & Flux-Free Process",
  },
];

export function FrictionStirWeldingLanding() {
  const [activeFace, setActiveFace] = useState<"face1" | "face2">("face1");
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(true);

  return (
    <main id="main-content" className="w-full min-h-screen bg-[#f2f4f0] text-[#0b252c] pt-24 lg:pt-28 pb-20 selection:bg-[#81e6d6] selection:text-[#091f26]">
      {/* Breadcrumb Navigation */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <Link href="/" className="hover:text-[#087f83] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/capabilities" className="hover:text-[#087f83] transition-colors">
            In-house capabilities
          </Link>
          <span>/</span>
          <span className="text-[#087f83] font-semibold">Friction stir welding</span>
        </div>
      </div>

      {/* 01 HERO SECTION: FSW Explanation */}
      <section className="relative max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Technical Explanation */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#087f83] animate-pulse" />
              <span className="font-mono text-xs font-bold text-[#087f83] tracking-[0.2em] uppercase">
                IN-HOUSE SOLID-STATE JOINING · GUELPH, ONTARIO
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-[#0b252c] leading-[1.02] mb-6">
              Friction stir <br />
              <span className="text-[#087f83]">welding.</span>
            </h1>

            <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
              <p>
                At <strong className="text-[#0b252c] font-semibold">ITS Cooling</strong>, we use friction stir welding (FSW) to seal internal fluid channels in custom liquid cold plates and advanced cooling assemblies. The solid-state process joins the cover to the body without melting the base material.
              </p>
              <p className="text-slate-600 text-sm sm:text-base">
                For applications where joint strength, dimensional stability, leak-tight performance, and repeatability are critical, we evaluate the alloy, geometry, and joint design for aluminum and copper assemblies.
              </p>
            </div>

            {/* Quick Action Pill Bar */}
            <div className="mt-8 pt-8 border-t border-[#d6deda] flex flex-wrap items-center gap-4">
              <a
                href="#why-fsw"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#087f83] hover:bg-[#0c6c70] text-white text-xs font-mono font-bold uppercase tracking-wider rounded transition-all shadow-sm group"
              >
                <span>Why FSW Technology</span>
                <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
              </a>
              <a
                href="#cold-plate-example"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-100 text-[#0b252c] border border-[#d6deda] text-xs font-mono font-bold uppercase tracking-wider rounded transition-all shadow-xs"
              >
                <span>See Cold Plate Example</span>
                <span>↓</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Video Demonstration Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#d6deda] bg-[#091f26] shadow-xl group">
              {/* Header Telemetry Badge */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-[11px] font-mono text-[#81e6d6] bg-[#091f26]/85 backdrop-blur-md px-3.5 py-2 rounded-lg border border-[#ffffff15]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#81e6d6] animate-ping" />
                  <span className="font-semibold uppercase tracking-wider">FSW Tool Path in Action</span>
                </div>
                <span className="text-[#cfdbd8]/70">Guelph CNC Cell</span>
              </div>

              {/* Loop Video */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/assets/fsw-demonstration-poster.webp"
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/fsw-demonstration.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#091f26]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom Captions */}
              <div className="p-5 bg-[#091f26] text-white border-t border-[#ffffff15]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono text-[#81e6d6] uppercase tracking-wider font-semibold">
                      Hermetic Fluid Seam
                    </div>
                    <div className="text-sm font-medium text-slate-200 mt-0.5">
                      Tool traversing 3D serpentine channel path
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-[#143239] border border-[#81e6d6]/30 rounded text-[11px] font-mono text-[#81e6d6]">
                    ISO 9001:2015
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 WHY FSW SECTION: Brought Right After FSW Explanation */}
      <section id="why-fsw" className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white border-y border-[#d6deda]">
        <div className="max-w-[1440px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-[11px] font-mono tracking-widest text-[#087f83] uppercase mb-2 font-bold">
                02 / WHY FRICTION STIR WELDING
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-[#0b252c] leading-[1.05]">
                Built around <br />
                <span className="text-[#087f83]">the joint.</span>
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed">
              Why engineers choose FSW over conventional fusion welding or brazing for liquid-cooled electronics and structural battery enclosures.
            </p>
          </div>

          {/* 6 Core Engineering Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {WHY_FSW_POINTS.map((pt) => (
              <div
                key={pt.num}
                className="group p-8 rounded-xl bg-[#f7f8f4] border border-[#d6deda] hover:border-[#087f83] transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm font-bold text-[#087f83] bg-white px-3 py-1 rounded border border-[#d6deda]">
                      {pt.num}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 font-semibold uppercase tracking-wider">
                      {pt.metric}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-medium text-[#0b252c] mb-3 group-hover:text-[#087f83] transition-colors">
                    {pt.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {pt.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#d6deda] flex items-center gap-2 text-xs font-mono text-[#087f83] font-semibold">
                  <Check className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{pt.highlight}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Callout: FSW vs Brazing */}
          <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-[#091f26] text-white border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-lg">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-mono tracking-widest text-[#81e6d6] uppercase font-bold block mb-2">
                JOINING METHODS COMPARISON
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-white leading-snug">
                Friction stir welding vs. brazing
              </h3>
            </div>
            <div className="lg:col-span-8 text-sm sm:text-base text-[#cfdbd8] leading-relaxed space-y-4 font-normal">
              <p>
                <strong className="text-white font-semibold">FSW uses a rotating tool to soften and stir base metal</strong> along the joint in the solid state. Brazing melts a filler metal that flows into the joint while base metals remain solid.
              </p>
              <p className="text-slate-300">
                For cold plates with accessible weld paths, FSW limits distortion by concentrating heat strictly along the seam without oven-baking the entire assembly. It yields 100% joint efficiency, avoids costly flux baths, and ensures zero galvanic corrosion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 COLD PLATE EXAMPLE: Two Faces, Video & Interactive Before/After Machined Slider */}
      <section id="cold-plate-example" className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#f2f4f0]">
        <div className="max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-[11px] font-mono tracking-widest text-[#087f83] uppercase mb-2 font-bold">
                03 / INSIDE THE HARDWARE
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-[#0b252c] leading-[1.05]">
                One cold plate. <br />
                <span className="text-[#087f83]">Two faces.</span>
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed">
              See the internal micro-channels and discrete components before welding, follow the live tool path in the machine, and examine the seamless finished surface.
            </p>
          </div>

          {/* Sub-Stage 1: Internal Component Disassembly (Face 1 & Face 2) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Face 1 Card */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#d6deda] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-4 pb-3 border-b border-slate-100">
                  <span className="text-[#087f83] font-bold">FACE 01 / BEFORE WELDING</span>
                  <span>BODY &amp; COVER PLATE</span>
                </div>
                <h3 className="text-2xl font-serif font-medium text-[#0b252c] mb-2">
                  Body &amp; cover plate
                </h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  The separate cover precisely matches the profile of the open coolant channel, ready for hermetic solid-state stirring.
                </p>

                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#eef2f0] border border-[#d6deda] flex items-center justify-center p-4">
                  <Image
                    src="/assets/fsw-face-1.webp"
                    alt="Face 1 cold plate body with open channel and cover plate"
                    width={800}
                    height={500}
                    className="object-contain max-h-full drop-shadow-sm"
                  />
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-600">
                <span>Direct Open Flow Cavity</span>
                <span className="text-[#087f83] font-bold">CNC Pre-Milled</span>
              </div>
            </div>

            {/* Face 2 Card */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#d6deda] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-4 pb-3 border-b border-slate-100">
                  <span className="text-[#087f83] font-bold">FACE 02 / BEFORE WELDING</span>
                  <span>BODY, COVER &amp; PIN-FIN INSERT</span>
                </div>
                <h3 className="text-2xl font-serif font-medium text-[#0b252c] mb-2">
                  Body, cover plate &amp; pin-fin insert
                </h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  This face features an intricate serpentine channel and high surface-area pin-fin insert for extreme heat flux zones.
                </p>

                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#eef2f0] border border-[#d6deda] flex items-center justify-center p-4">
                  <Image
                    src="/assets/fsw-face-2.webp"
                    alt="Face 2 cold plate body with serpentine channels and pin-fin insert"
                    width={800}
                    height={500}
                    className="object-contain max-h-full drop-shadow-sm"
                  />
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-600">
                <span>Serpentine Channel + Pin-Fin</span>
                <span className="text-[#087f83] font-bold">Multi-Component FSW</span>
              </div>
            </div>
          </div>

          {/* Sub-Stage 2: Interactive Before & After Machining Comparison Slider */}
          <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#d6deda] shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-mono text-[#087f83] uppercase tracking-wider font-bold mb-1">
                  03 // WELDED TO FINISHED HARDWARE
                </p>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#0b252c]">
                  From weld seam to machined surface.
                </h3>
              </div>

              {/* Face Switcher Tabs */}
              <div className="inline-flex rounded-lg border border-[#d6deda] p-1 bg-[#f7f8f4] self-start sm:self-auto">
                <button
                  onClick={() => setActiveFace("face1")}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-colors cursor-pointer ${
                    activeFace === "face1"
                      ? "bg-[#0b252c] text-white font-bold"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  Face 01
                </button>
                <button
                  onClick={() => setActiveFace("face2")}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-colors cursor-pointer ${
                    activeFace === "face2"
                      ? "bg-[#0b252c] text-white font-bold"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  Face 02
                </button>
              </div>
            </div>

            {/* Before/After Interactive Comparison Stage */}
            <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-[#d6deda] bg-[#0c2328] select-none">
              {/* After Image (Right/Underneath) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={
                    activeFace === "face1"
                      ? "/assets/fsw-face-1-machined.webp"
                      : "/assets/fsw-face-2-machined.webp"
                  }
                  alt="Cold plate after final CNC machining"
                  fill
                  className="object-contain p-4"
                />
                <span className="absolute top-4 right-4 z-10 font-mono text-xs font-bold text-white bg-[#0b252c]/90 px-3 py-1.5 rounded border border-white/20 backdrop-blur-md">
                  AFTER FINAL MACHINING
                </span>
              </div>

              {/* Before Image (Left/Clipped) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src={
                    activeFace === "face1"
                      ? "/assets/fsw-face-1-welded.webp"
                      : "/assets/fsw-face-2-welded.webp"
                  }
                  alt="Cold plate immediately after friction stir welding"
                  fill
                  className="object-contain p-4"
                />
                <span className="absolute top-4 left-4 z-10 font-mono text-xs font-bold text-[#81e6d6] bg-[#091f26]/90 px-3 py-1.5 rounded border border-[#81e6d6]/30 backdrop-blur-md">
                  AFTER WELDING (AS-WELDED SEAM)
                </span>
              </div>

              {/* Vertical Divider Slider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-[#81e6d6] cursor-ew-resize z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0b252c] border-2 border-[#81e6d6] flex items-center justify-center text-white shadow-lg">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#81e6d6]" />
                </div>
              </div>

              {/* Slider Input overlay */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Drag to compare as-welded seam vs final machined surface"
              />
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-slate-500 mt-4 max-w-4xl mx-auto">
              <span>← Drag left for Finished CNC Surface</span>
              <span>Drag right for As-Welded Seam →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Global Bottom CTA */}
      <SubpageCta
        eyebrow="START YOUR FSW COLD PLATE"
        title="Ready to eliminate leak risks in your liquid cooling loop?"
        description="Connect directly with our engineering team in Guelph, Ontario. We will evaluate your fluid channel routing, mechanical tolerances, and alloy selection for Friction Stir Welding."
        primaryCtaText="Discuss Your Cold Plate Brief"
        primaryCtaHref="/contact"
        secondaryCtaText="Explore Capabilities"
        secondaryCtaHref="/capabilities"
      />
    </main>
  );
}
