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
      "Bring your thermal targets, ambient conditions and available space. We can develop a heat sink from the starting requirements, working through fin geometry, airflow, mounting interfaces and manufacturing.",
    bring: "Your application, heat map, temperature targets, available space and airflow conditions.",
    work: "Concept development, material and fin selection, airflow integration, mechanical interfaces and a manufacturing route.",
    image: "/images/showcase/bonded.png",
    alt: "Custom bonded-fin aluminium heat sink",
    label: "FROM THERMAL TARGETS TO A CUSTOM HEAT SINK",
    cta: "Discuss a new design",
  },
  existing: {
    kicker: "WORK WITH YOUR EXISTING DESIGN",
    title: "Your design.<br />Our engineering support.",
    description:
      "Already have a heat sink drawing, CAD model or prototype? We can work with your existing design, review thermal and mechanical requirements, and discuss fabrication or targeted improvements to the fins, base or airflow integration.",
    bring:
      "Revision-controlled CAD and drawings, critical requirements, existing test data, and a clear list of what is fixed versus open to change.",
    work: "Design and manufacturability review, agreed improvements where needed, and planning for fabrication and project-specific verification.",
    image: "/images/showcase/assembly.png",
    alt: "Existing forced-air heat sink assembly",
    label: "FROM YOUR DRAWINGS TO THE NEXT ENGINEERING STEP",
    cta: "Discuss your existing design",
  },
};

const ARCHITECTURE_PRODUCTS = [
  {
    name: "Extruded Heat Sinks",
    desc: "A practical foundation for a wide range of thermal applications.",
    image: "/images/showcase/air-family.webp",
    alt: "Collection of extruded heat sinks in different profiles",
    caption: "Extruded Heat Sinks · Profile and geometry examples",
  },
  {
    name: "Skived Heat Sinks",
    desc: "Dense fin structures for compact air-cooling designs.",
    image: "/images/showcase/skived.webp",
    alt: "Skived heat sink with a dense array of thin fins",
    caption: "Skived Heat Sinks · High-density fin structure",
  },
  {
    name: "Embedded Heat Pipes",
    desc: "Spread heat away from concentrated hot spots across the heat sink.",
    image: "/images/showcase/heat-pipe.webp",
    alt: "Heat sink with copper heat pipes embedded in the base",
    caption: "Embedded Heat Pipes · Integrated heat-spreading architecture",
  },
  {
    name: "Fabricated & Forged",
    desc: "Custom geometry options to suit your thermal and mechanical requirements.",
    image: "/images/showcase/forged.webp",
    alt: "Black pin-fin heat sink representing custom fabricated and forged geometries",
    caption: "Fabricated & Forged · Pin-fin product example",
  },
  {
    name: "Bonded Heat Sink",
    desc: "Bonded fin assemblies for application-specific heat rejection.",
    image: "/images/showcase/bonded-heat-sink.webp",
    alt: "Bonded-fin heat sink assembly with copper heat-spreading features",
    caption: "Bonded Heat Sink · Bonded-fin assembly example",
  },
];

export function ShowcaseAirCoolingView() {
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
            CUSTOM AIR COOLING / ENGINEER TO ENGINEER
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-serif font-medium tracking-tight text-[#141f22] leading-[0.98] sm:leading-[0.96] mb-6">
            Give heat<br />
            <span className="text-[#00747a]">room<br />to leave.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8 font-normal">
            Custom heat sinks that transfer heat from your electronics to the surrounding air. Designed from the ground up—or developed around your existing design.
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
            <span>YOUR THERMAL CHALLENGE.</span>
            <span className="hidden sm:inline">OUR NEXT DESIGN REVIEW.</span>
          </div>

          {/* Concentric Design Orbits */}
          <div className="absolute w-[80%] aspect-square rounded-full border border-[#00747a]/20 pointer-events-none" />
          <div className="absolute w-[98%] aspect-square rounded-full border border-dashed border-[#00747a]/25 pointer-events-none animate-spin-very-slow" />

          {/* Main Visual Image */}
          <div className="relative z-10 w-full max-w-lg aspect-square flex items-center justify-center">
            <Image
              src="/images/showcase/air-cooling-hero-dsc09561.jpg"
              alt="Black finned heat sink with long parallel fins and mounting holes"
              width={640}
              height={640}
              priority
              className="w-[92%] h-[92%] object-contain drop-shadow-[0_20px_25px_rgba(20,31,34,0.18)] transition-transform duration-700 hover:scale-105 rounded-xl"
            />
          </div>

          {/* Engineering Annotations */}
          <div className="absolute top-[28%] right-4 sm:right-8 z-20 bg-white/95 backdrop-blur-xs border border-[#d8dedf] px-3.5 py-2.5 rounded shadow-sm text-xs font-mono text-slate-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00747a]" />
            <span>Application-specific fin geometry</span>
          </div>

          <div className="absolute bottom-[22%] left-4 sm:left-8 z-20 bg-white/95 backdrop-blur-xs border border-[#d8dedf] px-3.5 py-2.5 rounded shadow-sm text-xs font-mono text-slate-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00747a]" />
            <span>Controlled component interface</span>
          </div>

          {/* Bottom Footer Telemetry */}
          <div className="absolute bottom-6 left-6 right-6 border-t border-[#00747a]/20 pt-3 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#5f6667] uppercase font-bold z-10">
            <span>AIR-COOLED HEAT SINK</span>
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
              From the component.<br />Through the fins. Into air.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A heat sink conducts heat away from a component into a metal base and fins. The fins expose more surface area to the surrounding air, which carries heat away by natural or forced convection.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* SVG Animated Air Cooling Path Diagram */}
          <div className="lg:col-span-7 bg-white border border-[#d8dedf] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between font-mono text-[11px] tracking-wider uppercase text-slate-700 font-bold mb-4 pb-3 border-b border-slate-100">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00747a]" />
                THE AIR-COOLING PATH
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
                    <span>Resume airflow ▶</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3 h-3 text-[#00747a]" />
                    <span>Pause airflow Ⅱ</span>
                  </>
                )}
              </button>
            </div>

            <div className="w-full relative">
              <svg
                viewBox="0 0 700 380"
                className={`w-full h-auto ${isFlowPaused ? "showcase-paused" : ""}`}
                role="img"
                aria-label="Air cooling: heat enters the base from a component; fins spread the heat; a fan moves cooler inlet air across fins and warmer air leaves the enclosure."
              >
                <defs>
                  <linearGradient id="airTempGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00747a" />
                    <stop offset="100%" stopColor="#e85d38" />
                  </linearGradient>
                </defs>

                {/* Heat Source */}
                <rect x="280" y="270" width="150" height="45" rx="4" fill="#e85d38" />
                <text x="355" y="297" textAnchor="middle" fill="#ffffff" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">
                  HEAT SOURCE
                </text>

                {/* Heat Sink Base Plate */}
                <rect x="240" y="238" width="240" height="22" rx="3" fill="#525051" />

                {/* Vertical Heat Sink Fins */}
                <g fill="#bcc5c6" stroke="#9da8a9">
                  <rect x="250" y="100" width="12" height="138" rx="2" />
                  <rect x="280" y="100" width="12" height="138" rx="2" />
                  <rect x="310" y="100" width="12" height="138" rx="2" />
                  <rect x="340" y="100" width="12" height="138" rx="2" />
                  <rect x="370" y="100" width="12" height="138" rx="2" />
                  <rect x="400" y="100" width="12" height="138" rx="2" />
                  <rect x="430" y="100" width="12" height="138" rx="2" />
                  <rect x="460" y="100" width="12" height="138" rx="2" />
                </g>

                {/* Fan / Blower */}
                <circle cx="105" cy="175" r="42" fill="#ffffff" stroke="#00747a" strokeWidth="3" />
                <path
                  d="M105 175 Q58 150 95 140 Q125 138 105 175 Q135 130 145 170 Q145 195 105 175 Q140 215 100 215 Q75 208 105 175 Q60 205 65 165 Q75 145 105 175"
                  fill="#99ced2"
                />

                {/* Airflow Flow Lines */}
                <g fill="none" stroke="url(#airTempGrad)" strokeWidth="5">
                  <path className="showcase-flow-stroke" strokeDasharray="3 18" d="M165 135 H620" />
                  <path className="showcase-flow-stroke" strokeDasharray="3 18" d="M165 175 H620" />
                  <path className="showcase-flow-stroke" strokeDasharray="3 18" d="M165 215 H620" />
                </g>

                <text x="105" y="246" textAnchor="middle" fill="#141f22" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">
                  FAN / BLOWER
                </text>
                <text x="355" y="76" textAnchor="middle" fill="#141f22" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">
                  HEAT SINK FINS
                </text>
                <text x="179" y="116" fill="#00747a" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">
                  COOLER AIR →
                </text>
                <text x="500" y="116" fill="#e85d38" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">
                  WARMER AIR →
                </text>
                <text x="355" y="345" textAnchor="middle" fill="#5f6667" fontSize="10" fontFamily="var(--font-mono)" fontWeight="600">
                  HEAT FLOWS FROM COMPONENT TO BASE TO FINS
                </text>
              </svg>
            </div>

            <p className="text-[11px] font-mono text-slate-500 mt-4 text-center">
              Simplified forced-air illustration. Fin spacing, airflow direction and enclosure design are application-specific.
            </p>
          </div>

          {/* 3 Step Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <article className="flex items-start gap-5 p-5 bg-white border border-[#d8dedf] rounded-xl">
              <span className="font-mono text-xs font-bold text-[#00747a] bg-[#00747a]/10 px-2.5 py-1 rounded">01</span>
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">Transfer heat into the base.</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  The mounting surface and thermal interface transfer heat from the component into the heat sink base.
                </p>
              </div>
            </article>

            <article className="flex items-start gap-5 p-5 bg-white border border-[#d8dedf] rounded-xl">
              <span className="font-mono text-xs font-bold text-[#00747a] bg-[#00747a]/10 px-2.5 py-1 rounded">02</span>
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">Spread heat across the fins.</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  The base spreads heat into the fin structure. Material, base thickness and source location affect how well that area is used.
                </p>
              </div>
            </article>

            <article className="flex items-start gap-5 p-5 bg-white border border-[#d8dedf] rounded-xl">
              <span className="font-mono text-xs font-bold text-[#00747a] bg-[#00747a]/10 px-2.5 py-1 rounded">03</span>
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">Move warmed air away.</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Air absorbs heat from the fins. Natural convection relies on buoyancy; forced convection uses a fan or blower. The enclosure must let warmed air escape.
                </p>
              </div>
            </article>

            <div className="p-5 bg-[#e6f3f4] border border-[#00747a]/20 rounded-xl">
              <b className="block text-xs font-mono uppercase tracking-wider text-[#00747a] font-bold mb-1.5">
                Natural or forced convection?
              </b>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Natural convection avoids a fan but depends on orientation and clear airflow paths. Forced convection can increase heat transfer, with fan power, noise and airflow resistance to consider.
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
            Surface area is only<br />part of the story.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Fin design, base spreading and actual airflow work together. Explore five heat-sink approaches and the details behind the hardware.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls List (5 air products) */}
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

