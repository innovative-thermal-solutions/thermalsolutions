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
      "Bring your electrical requirements and available space. We can develop a bus bar from the starting concept, working through conductor geometry, terminal placement, insulation, thermal integration and manufacturing.",
    bring: "Your circuit architecture, electrical loads, insulation requirements and connection layout.",
    work: "Conductor and terminal layout, material and finish selection, insulation strategy, mechanical integration and a manufacturing route.",
    image: "/images/showcase/laminated-busbar.webp",
    alt: "Custom laminated bus bar assembly",
    label: "FROM ELECTRICAL REQUIREMENTS TO A CUSTOM BUS BAR",
    cta: "Discuss a new design",
  },
  existing: {
    kicker: "WORK WITH YOUR EXISTING DESIGN",
    title: "Your design.<br />Our engineering support.",
    description:
      "Already have a bus bar drawing, CAD model or prototype? We can work with your existing design, review the electrical and mechanical requirements, and discuss fabrication or agreed improvements without assuming a complete redesign.",
    bring:
      "Revision-controlled CAD, drawings, conductor stack-up or BOM, existing test data, and a clear list of what is fixed versus open to change.",
    work: "Design and manufacturability review, agreed improvements where needed, and planning for fabrication and project-specific verification.",
    image: "/images/showcase/copper-busbar.webp",
    alt: "Formed copper bus bar with bolted terminal holes",
    label: "FROM YOUR DRAWINGS TO THE NEXT ENGINEERING STEP",
    cta: "Discuss your existing design",
  },
};

const ARCHITECTURE_PRODUCTS = [
  {
    name: "Laminated Bus Bar",
    desc: "Layered conductors and insulation for integrated power distribution.",
    image: "/images/showcase/laminated-busbar.webp",
    alt: "Laminated bus bar assembly with multiple connection tabs",
    caption: "Laminated Bus Bar · Integrated conductor assembly",
  },
  {
    name: "Copper Bus Bar",
    desc: "Custom formed, plated and machined copper conductors.",
    image: "/images/showcase/copper-busbar.webp",
    alt: "Formed copper bus bar with bolted connection holes",
    caption: "Copper Bus Bar · Formed conductor and terminal geometry",
  },
];

export function ShowcaseBusbarView() {
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
            CUSTOM BUS BARS / ENGINEER TO ENGINEER
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-serif font-medium tracking-tight text-[#141f22] leading-[0.98] sm:leading-[0.96] mb-6">
            Connect power.<br />
            <span className="text-[#00747a]">By design.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8 font-normal">
            Custom bus bars that connect power sources, converters and loads. Engineered from your requirements—or developed around the design you already have.
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
            <span>YOUR POWER ARCHITECTURE.</span>
            <span className="hidden sm:inline">YOUR CONNECTIONS. CUSTOM ENGINEERED.</span>
          </div>

          {/* Concentric Design Orbits */}
          <div className="absolute w-[80%] aspect-square rounded-full border border-[#00747a]/20 pointer-events-none" />
          <div className="absolute w-[98%] aspect-square rounded-full border border-dashed border-[#00747a]/25 pointer-events-none animate-spin-very-slow" />

          {/* Main Visual Image */}
          <div className="relative z-10 w-full max-w-lg aspect-square flex items-center justify-center">
            <Image
              src="/images/showcase/laminated-busbar.webp"
              alt="Custom laminated bus bar assembly with connection tabs"
              width={640}
              height={640}
              priority
              className="w-[92%] h-[92%] object-contain drop-shadow-[0_20px_25px_rgba(20,31,34,0.18)] transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Engineering Annotations */}
          <div className="absolute top-[28%] right-4 sm:right-8 z-20 bg-white/95 backdrop-blur-xs border border-[#d8dedf] px-3.5 py-2.5 rounded shadow-sm text-xs font-mono text-slate-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00747a]" />
            <span>Application-specific terminal layout</span>
          </div>

          <div className="absolute bottom-[22%] left-4 sm:left-8 z-20 bg-white/95 backdrop-blur-xs border border-[#d8dedf] px-3.5 py-2.5 rounded shadow-sm text-xs font-mono text-slate-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00747a]" />
            <span>Integrated conductor assembly</span>
          </div>

          {/* Bottom Footer Telemetry */}
          <div className="absolute bottom-6 left-6 right-6 border-t border-[#00747a]/20 pt-3 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#5f6667] uppercase font-bold z-10">
            <span>LAMINATED BUS BAR</span>
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
              A clear path<br />for electrical power.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A bus bar is a rigid conductor or conductor assembly that carries electrical power between components. Its geometry, terminals and insulation are designed around the circuit, packaging and operating conditions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* SVG Animated Power Distribution Path Diagram */}
          <div className="lg:col-span-7 bg-white border border-[#d8dedf] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between font-mono text-[11px] tracking-wider uppercase text-slate-700 font-bold mb-4 pb-3 border-b border-slate-100">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00747a]" />
                THE POWER DISTRIBUTION PATH
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
                    <span>Resume animation ▶</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3 h-3 text-[#00747a]" />
                    <span>Pause animation Ⅱ</span>
                  </>
                )}
              </button>
            </div>

            <div className="w-full relative">
              <svg
                viewBox="0 0 700 380"
                className={`w-full h-auto ${isFlowPaused ? "showcase-paused" : ""}`}
                role="img"
                aria-label="A source sends current through the supply bus bar to a load and returns through a separate return bus bar. Dielectric insulation separates the two conductors."
              >
                {/* DC Source Block */}
                <rect x="40" y="130" width="115" height="130" rx="8" fill="#ffffff" stroke="#bcc5c6" strokeWidth="2" />
                <text x="98" y="192" textAnchor="middle" fill="#141f22" fontSize="13" fontFamily="var(--font-mono)" fontWeight="700">
                  DC SOURCE
                </text>
                <text x="130" y="159" fill="#c4683c" fontSize="16" fontFamily="var(--font-mono)" fontWeight="700">
                  +
                </text>
                <text x="130" y="241" fill="#00747a" fontSize="16" fontFamily="var(--font-mono)" fontWeight="700">
                  −
                </text>

                {/* Load Block */}
                <rect x="545" y="130" width="115" height="130" rx="8" fill="#ffffff" stroke="#bcc5c6" strokeWidth="2" />
                <text x="603" y="192" textAnchor="middle" fill="#141f22" fontSize="13" fontFamily="var(--font-mono)" fontWeight="700">
                  LOAD
                </text>

                {/* Supply Conductor */}
                <rect x="210" y="140" width="280" height="28" rx="4" fill="#c4683c" />

                {/* Dielectric Insulation Layer */}
                <rect x="210" y="180" width="280" height="30" fill="#e9e0c7" stroke="#b8ae91" strokeDasharray="4 4" />

                {/* Return Conductor */}
                <rect x="210" y="222" width="280" height="28" rx="4" fill="#8f563e" />

                {/* Current Interconnect Wire Traces */}
                <path d="M155 154 H545 M545 236 H155" stroke="#d8dedf" strokeWidth="10" fill="none" />
                <path className="showcase-flow-stroke" strokeDasharray="4 16" d="M155 154 H545 M545 236 H155" fill="none" stroke="#00747a" strokeWidth="5" />

                <text x="350" y="115" textAnchor="middle" fill="#c4683c" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">
                  SUPPLY CONDUCTOR →
                </text>
                <text x="350" y="199" textAnchor="middle" fill="#6d603a" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">
                  DIELECTRIC INSULATION
                </text>
                <text x="350" y="282" textAnchor="middle" fill="#8f563e" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">
                  ← RETURN CONDUCTOR
                </text>
                <text x="350" y="332" textAnchor="middle" fill="#5f6667" fontSize="10" fontFamily="var(--font-mono)" fontWeight="600">
                  TERMINALS + CONDUCTORS + INSULATION
                </text>
              </svg>
            </div>

            <p className="text-[11px] font-mono text-slate-500 mt-4 text-center">
              Simplified DC circuit illustration. Dots indicate conventional current direction, not a simulated operating condition.
            </p>
          </div>

          {/* 3 Step Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <article className="flex items-start gap-5 p-5 bg-white border border-[#d8dedf] rounded-xl">
              <span className="font-mono text-xs font-bold text-[#00747a] bg-[#00747a]/10 px-2.5 py-1 rounded">01</span>
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">Connect the electrical system.</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Terminal locations connect the source, switching devices and loads. Mounting, contact area and assembly access are planned together.
                </p>
              </div>
            </article>

            <article className="flex items-start gap-5 p-5 bg-white border border-[#d8dedf] rounded-xl">
              <span className="font-mono text-xs font-bold text-[#00747a] bg-[#00747a]/10 px-2.5 py-1 rounded">02</span>
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">Control the current path.</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Conductor dimensions and connections affect resistance and temperature rise. The current waveform and duty cycle help define the design.
                </p>
              </div>
            </article>

            <article className="flex items-start gap-5 p-5 bg-white border border-[#d8dedf] rounded-xl">
              <span className="font-mono text-xs font-bold text-[#00747a] bg-[#00747a]/10 px-2.5 py-1 rounded">03</span>
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">Coordinate insulation and heat.</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Conductors generate heat as they carry current. Insulation, clearances, materials and cooling conditions must be assessed as part of the complete assembly.
                </p>
              </div>
            </article>

            <div className="p-5 bg-[#e6f3f4] border border-[#00747a]/20 rounded-xl">
              <b className="block text-xs font-mono uppercase tracking-wider text-[#00747a] font-bold mb-1.5">
                What does lamination add?
              </b>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                A laminated bus bar combines conductors and dielectric layers into a coordinated stack. Supply and return geometry can help reduce loop inductance; insulation and thermal requirements still govern the design.
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
            Two architectures.<br />Your power requirements.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Choose a product family to explore. Electrical loading, insulation, terminal geometry and manufacturing requirements determine the final architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls List (2 busbar products) */}
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
              FROM YOUR CIRCUIT TO YOUR NEXT DESIGN REVIEW
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white leading-tight mb-3">
              New idea?<br />Existing design?<br />
              <span className="text-teal-200">Let’s move it forward.</span>
            </h2>
            <p className="text-teal-100/90 text-sm sm:text-base font-normal">
              Bring your schematic, electrical requirements, CAD or existing bus bar drawing.
            </p>
          </div>

          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-8 py-4 bg-white hover:bg-slate-100 text-[#00747a] font-mono text-xs uppercase tracking-wider font-bold rounded shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Discuss your bus bar project</span>
              <span className="text-sm">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
