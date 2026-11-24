"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Play, Pause } from "lucide-react";

interface RouteInfo {
  kicker: string;
  title: string;
  description: string;
  bring: string;
  work: string;
  image: string;
  alt: string;
  label: string;
  cta: string;
}

const ROUTE_DATA: Record<"new" | "existing", RouteInfo> = {
  new: {
    kicker: "DESIGN FROM THE GROUND UP",
    title: "Your challenge.<br />A purpose-built solution.",
    description:
      "Bring your thermal targets and packaging constraints. We can develop the cold plate from the starting requirements, working through the architecture, flow routing, interfaces and manufacturing approach.",
    bring: "Your application, heat loads, temperature targets and available space.",
    work: "Concept development, material and flow-path selection, mechanical integration and a manufacturing route.",
    image: "/images/showcase/machined.png",
    alt: "Custom machined aluminium cold plate",
    label: "FROM REQUIREMENTS TO A CUSTOM COLD PLATE",
    cta: "Discuss a new design",
  },
  existing: {
    kicker: "WORK WITH YOUR EXISTING DESIGN",
    title: "Your design.<br />Our engineering support.",
    description:
      "Already have CAD, drawings or a prototype? We can work with your existing design, review it against your requirements, and discuss manufacturing or targeted improvements without assuming a complete redesign.",
    bring:
      "Revision-controlled CAD and drawings, critical requirements, existing test data, and a clear list of what is fixed versus open to change.",
    work: "Design and manufacturability review, agreed improvements where needed, and planning for fabrication and project-specific verification.",
    image: "/images/showcase/existing-design-blueprint.jpg",
    alt: "Technical engineering CAD blueprint drawing of cold plate assembly with dimensions and tube routing",
    label: "FROM YOUR DRAWINGS TO THE NEXT ENGINEERING STEP",
    cta: "Discuss your existing design",
  },
};

const ARCHITECTURE_PRODUCTS = [
  {
    name: "FSW Cold Plates",
    desc: "Custom machined flow paths, sealed by friction stir welding.",
    image: "/images/showcase/hypercool.webp",
    alt: "HyperCool cold plate with exposed internal heat-transfer features",
    caption: "FSW Cold Plates · HyperCool example with internal geometry shown",
  },
  {
    name: "Copper Embedded Cold Plates",
    desc: "Copper tubing integrated into a metal base to carry coolant close to the heat source.",
    image: "/images/showcase/copper-embedded-cold-plate.webp",
    alt: "Cold plate with embedded copper tubing in a metal base",
    caption: "Copper Embedded Cold Plates · Integrated copper tube routing",
  },
  {
    name: "Brazed Cold Plates",
    desc: "Brazed construction for application-specific liquid-cooling designs.",
    image: "/images/showcase/copper-brazed.webp",
    alt: "Copper brazed cold plate mounted on an electronics assembly",
    caption: "Brazed Cold Plates · Copper construction example",
  },
];

export function ShowcaseLiquidCoolingView() {
  const [activeRoute, setActiveRoute] = useState<"new" | "existing">("new");
  const [activeArchIndex, setActiveArchIndex] = useState(0);
  const [isFlowPaused, setIsFlowPaused] = useState(false);

  const curRoute = ROUTE_DATA[activeRoute];
  const curArch = ARCHITECTURE_PRODUCTS[activeArchIndex];

  return (
    <div className="w-full bg-[#f8faf9] text-[#141f22] font-sans antialiased selection:bg-[#00747a] selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[640px] lg:min-h-[720px] grid grid-cols-1 lg:grid-cols-12 border-b border-[#d8dedf] bg-[#f8faf9] overflow-hidden pt-28 lg:pt-32">
        {/* Left Copy Column */}
        <div className="lg:col-span-6 px-6 sm:px-10 lg:px-14 py-12 lg:py-20 flex flex-col justify-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#00747a] font-bold mb-4">
            CUSTOM LIQUID COOLING / ENGINEER TO ENGINEER
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-serif font-medium tracking-tight text-[#141f22] leading-[0.98] sm:leading-[0.96] mb-6">
            Bring the heat.<br />
            <span className="text-[#00747a]">We’ll help<br />move it.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8 font-normal">
            Liquid cold plates that carry heat away from your electronics. Designed around your application—or built around the design you already have.
          </p>

          <div>
            <a
              href="#start"
              className="inline-flex items-center gap-6 px-7 py-4 bg-[#00747a] hover:bg-[#005d62] text-white font-mono text-xs uppercase tracking-wider font-bold rounded shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Find your starting point</span>
              <span className="text-sm">↘</span>
            </a>
          </div>
        </div>

        {/* Right Interactive Visual Column */}
        <div className="lg:col-span-6 relative bg-gradient-to-br from-[#e6eef0] to-[#d8e5e8] min-h-[420px] lg:min-h-full flex items-center justify-center p-8 sm:p-12 overflow-hidden border-t lg:border-t-0 lg:border-l border-[#d8dedf]">
          {/* Blueprint grid background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,116,122,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,116,122,0.12) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Top Label */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#5f6667] uppercase font-bold z-10">
            <span>THE HEAT SOURCE IS YOURS.</span>
            <span className="hidden sm:inline">THE SOLUTION IS CUSTOM.</span>
          </div>

          {/* Concentric Design Orbits */}
          <div className="absolute w-[80%] aspect-square rounded-full border border-[#00747a]/20 pointer-events-none" />
          <div className="absolute w-[98%] aspect-square rounded-full border border-dashed border-[#00747a]/25 pointer-events-none animate-spin-very-slow" />

          {/* Main Visual Image */}
          <div className="relative z-10 w-full max-w-lg aspect-square flex items-center justify-center">
            <Image
              src="/images/showcase/cnc-machined-aluminum-compartment-tray-clean.png"
              alt="CNC-machined aluminium compartment tray with partition walls and twin fluid ports"
              width={640}
              height={640}
              priority
              className="w-[92%] h-[92%] object-contain drop-shadow-[0_20px_25px_rgba(20,31,34,0.18)] transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Engineering Annotations */}
          <div className="absolute top-[28%] right-4 sm:right-8 z-20 bg-white/95 backdrop-blur-xs border border-[#d8dedf] px-3.5 py-2.5 rounded shadow-sm text-xs font-mono text-slate-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00747a]" />
            <span>Application-specific geometry</span>
          </div>

          <div className="absolute bottom-[22%] left-4 sm:left-8 z-20 bg-white/95 backdrop-blur-xs border border-[#d8dedf] px-3.5 py-2.5 rounded shadow-sm text-xs font-mono text-slate-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00747a]" />
            <span>Engineered thermal interface</span>
          </div>

          {/* Bottom Footer Telemetry */}
          <div className="absolute bottom-6 left-6 right-6 border-t border-[#00747a]/20 pt-3 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#5f6667] uppercase font-bold z-10">
            <span>LIQUID COLD PLATE</span>
            <span>01 / PRODUCT STUDY</span>
          </div>
        </div>
      </section>

      {/* 2. TWO WAYS TO START STRIP */}
      <section className="w-full bg-[#141f22] text-white border-b border-[#233134]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#233134]">
          <div className="md:col-span-4 px-6 lg:px-10 py-6 flex items-center text-xs font-mono tracking-wider text-slate-400">
            <div>
              <span className="block uppercase text-[11px] font-bold text-slate-400">ONE ENGINEERING PARTNER.</span>
              <strong className="text-white text-sm tracking-normal font-bold">TWO WAYS TO START.</strong>
            </div>
          </div>

          <button
            onClick={() => {
              setActiveRoute("new");
              const el = document.getElementById("start");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="md:col-span-4 px-6 lg:px-10 py-6 flex items-center justify-between hover:bg-[#1c2b2f] transition-colors text-left cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs font-bold text-[#00747a] group-hover:text-teal-400">01</span>
              <span className="text-sm sm:text-base font-semibold">Design from the ground up</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#00747a] group-hover:text-teal-400 transition-colors" />
          </button>

          <button
            onClick={() => {
              setActiveRoute("existing");
              const el = document.getElementById("start");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="md:col-span-4 px-6 lg:px-10 py-6 flex items-center justify-between hover:bg-[#1c2b2f] transition-colors text-left cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs font-bold text-[#00747a] group-hover:text-teal-400">02</span>
              <span className="text-sm sm:text-base font-semibold">Work with my existing design</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#00747a] group-hover:text-teal-400 transition-colors" />
          </button>
        </div>
      </section>

      {/* 3. UNDERSTAND THE TECHNOLOGY */}
      <section id="understand" className="w-full py-20 lg:py-28 px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#00747a] font-bold mb-3">
              01 / UNDERSTAND THE TECHNOLOGY
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-[#141f22] leading-tight">
              Heat doesn’t disappear.<br />Give it a way out.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A liquid cold plate is a metal component mounted against a heat-producing device. Heat passes through the contact interface into the plate, then into coolant flowing through it.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* SVG Animated Cooling Loop Diagram */}
          <div className="lg:col-span-7 bg-white border border-[#d8dedf] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between font-mono text-[11px] tracking-wider uppercase text-slate-700 font-bold mb-4 pb-3 border-b border-slate-100">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00747a]" />
                THE COOLING LOOP
              </span>
              <button
                type="button"
                onClick={() => setIsFlowPaused(!isFlowPaused)}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded font-mono text-[10px] transition-colors cursor-pointer"
                aria-pressed={isFlowPaused}
              >
                {isFlowPaused ? (
                  <>
                    <Play className="w-3 h-3 text-[#00747a]" />
                    <span>Resume flow ▶</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3 h-3 text-[#00747a]" />
                    <span>Pause flow Ⅱ</span>
                  </>
                )}
              </button>
            </div>

            <div className="w-full relative">
              <svg
                viewBox="0 0 700 380"
                className={`w-full h-auto ${isFlowPaused ? "showcase-paused" : ""}`}
                role="img"
                aria-label="Cooling loop: pump sends cooled fluid into the cold plate, warmed fluid goes to a heat exchanger, and cooled fluid returns to the pump."
              >
                <defs>
                  <linearGradient id="liquidTempGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00747a" />
                    <stop offset="100%" stopColor="#e85d38" />
                  </linearGradient>
                </defs>

                {/* Base Pipe Outline */}
                <path
                  d="M110 260 V160 H275 M425 160 H585 V260 H110"
                  fill="none"
                  stroke="#d8dedf"
                  strokeWidth="12"
                  strokeLinejoin="round"
                />

                {/* Flow Animation Overlay */}
                <path
                  d="M110 260 V160 H275 M425 160 H585 V260 H110"
                  fill="none"
                  stroke="#00747a"
                  strokeWidth="5"
                  strokeDasharray="4 16"
                  className="showcase-flow-stroke"
                />

                {/* Cold Plate Body */}
                <rect x="260" y="105" width="180" height="115" rx="12" fill="#e6eef0" stroke="#bcc5c6" strokeWidth="1.5" />

                {/* Internal Flow Channel */}
                <path
                  d="M275 160 H300 V130 H325 V190 H350 V130 H375 V190 H400 V160 H425"
                  fill="none"
                  stroke="url(#liquidTempGrad)"
                  strokeWidth="10"
                  strokeLinejoin="round"
                />

                {/* Heat Source */}
                <rect x="300" y="48" width="100" height="43" rx="4" fill="#e85d38" />
                <text x="350" y="74" textAnchor="middle" fill="#ffffff" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">
                  HEAT SOURCE
                </text>

                {/* Heat Conduction Rays */}
                <path d="M320 94 v20 m30 -20 v20 m30 -20 v20" stroke="#e85d38" strokeWidth="3" />

                {/* Pump */}
                <circle cx="110" cy="260" r="32" fill="#ffffff" stroke="#00747a" strokeWidth="3.5" />
                <path d="M100 245 L125 260 L100 275 Z" fill="#00747a" />
                <text x="110" y="318" textAnchor="middle" fill="#141f22" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">
                  PUMP
                </text>

                {/* Heat Exchanger */}
                <rect x="530" y="225" width="110" height="70" rx="8" fill="#ffffff" stroke="#bcc5c6" strokeWidth="2" />
                <path d="M548 238 v43 m18 -43 v43 m18 -43 v43 m18 -43 v43" stroke="#00747a" strokeWidth="2" strokeDasharray="3 3" />
                <text x="585" y="318" textAnchor="middle" fill="#141f22" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">
                  HEAT EXCHANGER
                </text>

                <text x="350" y="244" textAnchor="middle" fill="#141f22" fontSize="12" fontFamily="var(--font-serif)" fontWeight="600">
                  COLD PLATE
                </text>

                <text x="175" y="137" fill="#00747a" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">
                  COOLER IN →
                </text>
                <text x="455" y="137" fill="#e85d38" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">
                  WARMER OUT →
                </text>
              </svg>
            </div>

            <p className="text-[11px] font-mono text-slate-500 mt-4 text-center">
              Simplified system illustration. Loop components and routing depend on the application.
            </p>
          </div>

          {/* 3 Step Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <article className="flex items-start gap-5 p-5 bg-white border border-[#d8dedf] rounded-xl">
              <span className="font-mono text-xs font-bold text-[#00747a] bg-[#00747a]/10 px-2.5 py-1 rounded">01</span>
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">Collect heat at the source.</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  The contact surface and thermal interface help transfer heat from the device into the plate.
                </p>
              </div>
            </article>

            <article className="flex items-start gap-5 p-5 bg-white border border-[#d8dedf] rounded-xl">
              <span className="font-mono text-xs font-bold text-[#00747a] bg-[#00747a]/10 px-2.5 py-1 rounded">02</span>
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">Carry it away with coolant.</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Fluid moves through internal channels or tubing, absorbing heat as it flows.
                </p>
              </div>
            </article>

            <article className="flex items-start gap-5 p-5 bg-white border border-[#d8dedf] rounded-xl">
              <span className="font-mono text-xs font-bold text-[#00747a] bg-[#00747a]/10 px-2.5 py-1 rounded">03</span>
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">Reject heat from the system.</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  A heat exchanger or chiller removes heat elsewhere in the loop. The cold plate is one part of that complete system.
                </p>
              </div>
            </article>

            <div className="p-5 bg-[#e6f3f4] border border-[#00747a]/20 rounded-xl">
              <b className="block text-xs font-mono uppercase tracking-wider text-[#00747a] font-bold mb-1.5">
                When does liquid cooling make sense?
              </b>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                When heat density, temperature limits or packaging make air cooling difficult. The right choice depends on the entire thermal system—not just the plate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. START WHERE YOU ARE (Route Selector) */}
      <section id="start" className="w-full py-20 lg:py-28 bg-[#f4f7f6] border-y border-[#d8dedf]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#00747a] font-bold mb-3">
              02 / START WHERE YOU ARE
            </p>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-[#141f22] leading-tight mb-4">
              A blank sheet.<br />Or a finished drawing.<br />
              <em className="not-italic text-[#00747a]">We work with both.</em>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              You don’t need to restart your project to work with ITS. Choose the route that fits your stage.
            </p>
          </div>

          {/* Route Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 bg-white border border-[#d8dedf] rounded-xl shadow-xs" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={activeRoute === "new"}
                onClick={() => setActiveRoute("new")}
                className={`px-5 sm:px-8 py-3 rounded-lg text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeRoute === "new"
                    ? "bg-[#00747a] text-white shadow-sm"
                    : "text-slate-700 hover:text-[#00747a]"
                }`}
              >
                <span>01 / I need a new design</span>
                <span>↗</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeRoute === "existing"}
                onClick={() => setActiveRoute("existing")}
                className={`px-5 sm:px-8 py-3 rounded-lg text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeRoute === "existing"
                    ? "bg-[#00747a] text-white shadow-sm"
                    : "text-slate-700 hover:text-[#00747a]"
                }`}
              >
                <span>02 / I have an existing design</span>
                <span>↗</span>
              </button>
            </div>
          </div>

          {/* Route Panel Display */}
          <div className="bg-white border border-[#d8dedf] rounded-2xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto">
            {/* Visual Column */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#f8faf9] to-[#e6eef0] p-8 flex flex-col justify-between items-center relative border-b lg:border-b-0 lg:border-r border-[#d8dedf] min-h-[340px]">
              <div className="w-full flex justify-end">
                <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase font-bold">
                  ROUTE {activeRoute === "new" ? "01" : "02"}
                </span>
              </div>

              <div className="w-full flex-1 flex items-center justify-center p-4">
                <Image
                  key={curRoute.image}
                  src={curRoute.image}
                  alt={curRoute.alt}
                  width={420}
                  height={320}
                  className="max-h-56 object-contain drop-shadow-md animate-fade-in"
                />
              </div>

              <span className="text-[10px] font-mono tracking-wider text-slate-700 font-bold uppercase text-center mt-2">
                {curRoute.label}
              </span>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[#00747a] font-bold mb-2">
                  {curRoute.kicker}
                </p>
                <h3
                  className="text-2xl sm:text-3xl font-serif font-medium text-slate-900 tracking-tight leading-tight mb-4"
                  dangerouslySetInnerHTML={{ __html: curRoute.title }}
                />
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {curRoute.description}
                </p>

                <dl className="space-y-4 border-t border-slate-100 pt-5 mb-8">
                  <div>
                    <dt className="text-[11px] font-mono uppercase tracking-wider text-[#00747a] font-bold mb-1">
                      YOU BRING
                    </dt>
                    <dd className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {curRoute.bring}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-mono uppercase tracking-wider text-[#00747a] font-bold mb-1">
                      WE WORK THROUGH
                    </dt>
                    <dd className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {curRoute.work}
                    </dd>
                  </div>
                </dl>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 px-6 py-3.5 bg-[#00747a] hover:bg-[#005d62] text-white font-mono text-xs uppercase tracking-wider font-bold rounded shadow-sm hover:shadow-md transition-all"
                >
                  <span>{curRoute.cta}</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 text-xs font-mono text-slate-600">
            Not sure which route fits? <strong className="text-slate-900">Start with what you have. We’ll identify the gaps together.</strong>
          </div>
        </div>
      </section>

      {/* 5. THE HARDWARE ARCHITECTURES */}
      <section id="architectures" className="w-full py-20 lg:py-28 px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#00747a] font-bold mb-3">
            03 / THE HARDWARE
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-[#141f22] leading-tight mb-4">
            Different paths.<br />The same purpose.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Architecture follows the heat map, fluid conditions and mechanical requirements. Explore examples of the choices behind the hardware.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls List */}
          <div className="lg:col-span-5 space-y-3">
            {ARCHITECTURE_PRODUCTS.map((prod, idx) => {
              const active = idx === activeArchIndex;
              return (
                <button
                  key={prod.name}
                  type="button"
                  onClick={() => setActiveArchIndex(idx)}
                  className={`w-full p-6 rounded-xl border text-left transition-all flex items-start gap-4 cursor-pointer ${
                    active
                      ? "bg-[#00747a] text-white border-[#00747a] shadow-md"
                      : "bg-white text-slate-900 border-[#d8dedf] hover:border-[#00747a] hover:bg-[#f8faf9]"
                  }`}
                >
                  <span className={`font-mono text-xs font-bold ${active ? "text-teal-200" : "text-[#00747a]"}`}>
                    0{idx + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-bold leading-snug mb-1">
                      {prod.name}
                    </h3>
                    <p className={`text-xs leading-relaxed ${active ? "text-teal-100" : "text-slate-600"}`}>
                      {prod.desc}
                    </p>
                  </div>
                  <span className="text-sm">↗</span>
                </button>
              );
            })}
          </div>

          {/* Active Product Figure */}
          <div className="lg:col-span-7 bg-white border border-[#d8dedf] rounded-2xl p-6 sm:p-10 shadow-sm flex flex-col items-center justify-center">
            <div className="w-full h-80 sm:h-96 relative flex items-center justify-center bg-[#f8faf9] rounded-xl p-6 border border-slate-100">
              <Image
                key={curArch.image}
                src={curArch.image}
                alt={curArch.alt}
                width={520}
                height={380}
                className="max-h-72 w-auto object-contain drop-shadow-md animate-fade-in transition-all"
              />
            </div>
            <p className="mt-4 text-xs font-mono text-slate-600 tracking-wider text-center" aria-live="polite">
              {curArch.caption}
            </p>
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA BANNER */}
      <section className="w-full py-20 lg:py-24 bg-gradient-to-br from-[#00575c] via-[#00747a] to-[#0a8f97] text-white px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-200 font-bold mb-3">
              FROM THE FIRST QUESTION TO THE NEXT DESIGN REVIEW
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white leading-tight mb-3">
              New idea?<br />Existing design?<br />
              <span className="text-teal-200">Let’s move it forward.</span>
            </h2>
            <p className="text-teal-100/90 text-sm sm:text-base font-normal">
              Bring your requirements, drawings or the problem you’re trying to solve.
            </p>
          </div>

          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-8 py-4 bg-white hover:bg-slate-100 text-[#00747a] font-mono text-xs uppercase tracking-wider font-bold rounded shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Talk to a thermal engineer</span>
              <span className="text-sm">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

