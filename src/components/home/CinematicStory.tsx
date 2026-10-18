"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronRight,
  Layers,
  Flame,
  Wind,
  Activity,
  Play,
  Pause,
  Maximize2,
  Crosshair,
  Gauge,
  Cpu,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface Hotspot {
  id: string;
  x: string;
  y: string;
  title: string;
  subtitle: string;
  metric: string;
}

const chapters = [
  {
    index: "01",
    eyebrow: "100% Custom Engineering · No Catalogue Shelf Stock",
    titleLines: ["Every solution", "is custom built."],
    body: "There are no products on our shelves. Because every project has unique thermal requirements, we are a one-stop turnkey partner handling the entire process — from concept, thermal design & CFD simulation to prototyping and final manufacturing under one roof.",
    feature: "One-Stop Solution: Concept to Hardware",
    badge: "100% Application-Specific · Guelph, ON",
    cta: { text: "Custom Cooling Platforms", href: "#philosophy" },
    secondaryCta: { text: "Bring Your Requirements", href: "/contact" },
    image: "/images/products/hypercool-cold-plate.png",
    alt: "ITS Custom Machined Liquid Cold Plate",
    viewMode: "Custom Architecture",
    hotspots: [
      {
        id: "core",
        x: "48%",
        y: "50%",
        title: "Application-Specific Core",
        subtitle: "Micro-channels milled to match your exact semiconductor layout",
        metric: "Up to 150 W/cm²",
      },
      {
        id: "ports",
        x: "82%",
        y: "35%",
        title: "Custom Hydraulic Ports",
        subtitle: "Manifold placement oriented for your mechanical envelope",
        metric: "Low ΔP Target",
      },
      {
        id: "fsw",
        x: "24%",
        y: "75%",
        title: "Solid-State FSW Seam",
        subtitle: "Defect-free hermetic joining executed in our Guelph facility",
        metric: "100% Joint Efficiency",
      },
    ],
  },
  {
    index: "02",
    eyebrow: "Cold plate architecture",
    titleLines: ["Tailored to your", "heat footprint."],
    body: "We don't force you into catalogue dimensions. Internal channel geometry, fin matrices, and fluid paths are engineered from scratch around your specific power electronics layout.",
    feature: "Zero Shelf Stock · Made-to-Order",
    badge: "Custom Flow Cavities",
    cta: { text: "View Cold Plate Platforms", href: "/products/cold-plates" },
    secondaryCta: { text: "Thermal Simulator", href: "#simulator" },
    image: "/images/products/pressed-tube-cold-plate.png",
    alt: "ITS Precision Channel Geometry Cold Plate",
    viewMode: "Internal Channel Dynamics",
    hotspots: [
      {
        id: "channel",
        x: "50%",
        y: "45%",
        title: "Continuous Tube Circuit",
        subtitle: "Seamless copper or aluminum pressed-in loop for your envelope",
        metric: "Zero Leak Joint",
      },
      {
        id: "interface",
        x: "30%",
        y: "60%",
        title: "Semiconductor Interface",
        subtitle: "Precision milled mount surface flatness < 0.05mm",
        metric: "Ra < 0.8 µm",
      },
    ],
  },
  {
    index: "03",
    eyebrow: "Engineered coolant flow",
    titleLines: ["Targeted drop:", "105° → 47°C."],
    body: "Heat enters the plate and is carried away through an engineered liquid path. We calculate fluid velocity and pressure drop to match your exact pump loop and heat dissipation goals.",
    feature: "Heat Dissipation Rate: 85 W/cm²",
    badge: "ΔT Drop: 58°C Reduction",
    temperatures: ["105°C", "82°C", "61°C", "47°C"],
    cta: { text: "Explore Liquid Cooling", href: "/technologies/liquid-cooling" },
    secondaryCta: { text: "View Case Studies", href: "/case-studies" },
    image: "/images/products/liquid-cold-plate.png",
    alt: "Engineered Coolant Flow CFD Temperature Dissipation",
    viewMode: "CFD Thermal Dissipation",
    hotspots: [
      {
        id: "inlet",
        x: "18%",
        y: "40%",
        title: "Coolant Inlet",
        subtitle: "Sub-ambient chilled glycol-water mixture entering",
        metric: "30.0 °C",
      },
      {
        id: "hotspot",
        x: "52%",
        y: "48%",
        title: "Peak Flux Zone",
        subtitle: "Direct contact over high-power IGBT inverter modules",
        metric: "105.0 °C",
      },
      {
        id: "outlet",
        x: "82%",
        y: "62%",
        title: "Coolant Outlet",
        subtitle: "Absorbed thermal energy evacuated from housing",
        metric: "47.2 °C",
      },
    ],
  },
  {
    index: "04",
    eyebrow: "Turnkey one-stop solution",
    titleLines: ["Concept to hardware", "under one roof."],
    body: "Thermal simulation, mechanical design, 5-axis CNC routing, Friction Stir Welding, busbar integration, and helium leak testing — carried out in our single Guelph, Ontario plant.",
    feature: "Turnkey In-House Integration",
    badge: "Single-Source Accountability",
    cta: { text: "Engineering Capabilities", href: "/capabilities" },
    secondaryCta: { text: "Quality Standards", href: "/quality" },
    image: "/images/products/hypercool-cold-plate.png",
    alt: "Integrated Multi-Plate Thermal Assembly",
    viewMode: "Exploded Sub-Assembly",
    hotspots: [
      {
        id: "busbar",
        x: "65%",
        y: "28%",
        title: "Integrated Busbars",
        subtitle: "Direct laminated copper interconnects",
        metric: "High Amperage",
      },
      {
        id: "cmm",
        x: "38%",
        y: "70%",
        title: "Metrology Inspected",
        subtitle: "Full CMM verification across all datum points",
        metric: "± 0.025 mm",
      },
    ],
  },
  {
    index: "05",
    eyebrow: "Friction stir welding",
    titleLines: ["Hermetic joints", "without melting."],
    body: "Solid-state joining eliminates weld porosity, hot cracking, and filler metals. We produce hermetically sealed liquid-cooling assemblies with 100% parent metal strength.",
    feature: "In-House Solid-State FSW",
    badge: "ASME & ISO Standards",
    cta: { text: "Explore FSW Technology", href: "/capabilities/friction-stir-welding" },
    secondaryCta: { text: "Watch FSW Video", href: "#manufacturing" },
    image: "/images/manufacturing/fsw-process-01.png",
    alt: "ITS In-House Friction Stir Welding Process",
    viewMode: "Solid-State Weld Process",
    hotspots: [
      {
        id: "pin",
        x: "45%",
        y: "40%",
        title: "Rotating FSW Pin Tool",
        subtitle: "High-torque plasticizing tool creating solid-state bond",
        metric: "1800 RPM",
      },
      {
        id: "joint",
        x: "72%",
        y: "65%",
        title: "Hermetic Joint",
        subtitle: "100% parent metal strength, zero weld porosity",
        metric: "Helium Tested",
      },
    ],
  },
  {
    index: "06",
    eyebrow: "Advanced CNC machining",
    titleLines: ["Precision at", "every stage."],
    body: "Complex internal geometries, fine micro-fin pitches, and tight geometric tolerances manufactured directly inside our 6,000 sq ft facility in Guelph, Ontario.",
    feature: "5-Axis Micro-Tolerances",
    badge: "In-House CMM Inspection",
    cta: { text: "Inside CNC Machining", href: "/capabilities/cnc-machining" },
    secondaryCta: { text: "Facility Tour", href: "/facility" },
    image: "/images/manufacturing/precision-manufacturing.png",
    alt: "ITS 5-Axis High Precision CNC Machining Facility",
    viewMode: "5-Axis CNC Precision",
    hotspots: [
      {
        id: "spindle",
        x: "50%",
        y: "35%",
        title: "High-Speed Spindle",
        subtitle: "Micro-machining fine fluid fin arrays in Al-6061",
        metric: "24,000 RPM",
      },
      {
        id: "fin",
        x: "30%",
        y: "65%",
        title: "Fin Aspect Ratio",
        subtitle: "Thin-wall coolant channels with maximum surface area",
        metric: "12:1 Ratio",
      },
    ],
  },
];

export function CinematicStory() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setActiveChapter((prev) => (prev + 1) % chapters.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const current = chapters[activeChapter];

  // 3D subtle mouse tilt effect on visual stage
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-[96vh] bg-gradient-to-br from-[#ffffff] via-[#f8fafc] to-[#f0f7ff] border-b border-slate-200 overflow-hidden flex flex-col justify-between pt-24 lg:pt-28">
      {/* Light Technical Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-70" />
      <div className="absolute inset-0 bg-mesh-hero pointer-events-none" />

      {/* Radiant Ambient Halos for Depth */}
      <div className="absolute top-16 right-10 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-[100px] pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-cyan-100/50 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 lg:px-12 py-6 lg:py-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Chapter Narrative & Controls */}
        <div className="lg:col-span-6 flex flex-col justify-center min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.index}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.38, ease: "easeOut" }}
              className="flex flex-col"
            >
              {/* Eyebrow & Live Mode Pill */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs font-bold text-sky-700 px-2.5 py-0.5 bg-sky-50 border border-sky-300 rounded shadow-xs">
                  STAGE {current.index} / 06
                </span>
                <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-ping" />
                  {current.eyebrow}
                </span>
              </div>

              {/* Title with High-Contrast Engineering Typography */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6">
                {current.titleLines.map((line, i) => (
                  <span
                    key={i}
                    className={`block ${
                      line.includes("cool") || line.includes("47°C")
                        ? "text-sky-600 drop-shadow-xs"
                        : "text-slate-950"
                    }`}
                  >
                    {line}
                  </span>
                ))}
              </h1>

              {/* Body */}
              <p className="text-base sm:text-lg text-slate-700 max-w-xl font-normal leading-relaxed mb-6">
                {current.body}
              </p>

              {/* Thermal Sequence Bar (for chapter 03 or general highlight) */}
              {current.temperatures ? (
                <div className="mb-8 p-4 bg-white/95 border border-sky-200 rounded-xl shadow-xs max-w-lg backdrop-blur-md">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-600 mb-2.5 flex justify-between items-center">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      Inlet Temp (High Heat-Flux)
                    </span>
                    <span className="text-sky-700 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-sky-500" />
                      Fluid Outlet (T_out)
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    {current.temperatures.map((temp, idx) => (
                      <div
                        key={temp}
                        className={`py-2 px-1 rounded-lg font-mono text-xs font-bold transition-transform hover:scale-105 ${
                          idx === 0
                            ? "bg-red-50 text-red-700 border border-red-300 shadow-xs"
                            : idx === 1
                            ? "bg-orange-50 text-orange-700 border border-orange-300 shadow-xs"
                            : idx === 2
                            ? "bg-amber-50 text-amber-700 border border-amber-300 shadow-xs"
                            : "bg-sky-100 text-sky-800 border-2 border-sky-400 ring-2 ring-sky-200 shadow-sm"
                        }`}
                      >
                        {temp}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mb-8 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-mono text-slate-800 shadow-xs">
                    <Activity className="w-3.5 h-3.5 text-sky-600" />
                    <span>{current.feature}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-50/90 border border-sky-300 rounded-md text-xs font-mono text-sky-900 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                    <span>{current.badge}</span>
                  </span>
                </div>
              )}

              {/* Action Buttons with High-Impact Sheen */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={current.cta.href}
                  className="shine-sweep inline-flex items-center gap-2 px-7 py-3.5 bg-slate-950 text-white hover:bg-sky-600 font-bold text-xs uppercase tracking-[0.14em] rounded-md transition-all shadow-md hover:shadow-xl group"
                >
                  <span>{current.cta.text}</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </Link>

                {current.secondaryCta && (
                  <Link
                    href={current.secondaryCta.href}
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-[0.14em] font-bold text-slate-800 hover:text-sky-700 transition-colors border border-slate-300 hover:border-sky-400 rounded-md bg-white/90 backdrop-blur-md shadow-xs hover:shadow-sm"
                  >
                    <span>{current.secondaryCta.text}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Visual Stage with 3D Tilt & Interactive Hotspots */}
        <div
          ref={stageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="lg:col-span-6 relative flex items-center justify-center min-h-[440px] lg:min-h-[540px] perspective-[1200px]"
        >
          {/* Circular Holographic Halo with Dual Orbit Rings */}
          <div className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] rounded-full border border-sky-300/70 bg-gradient-to-tr from-sky-100/40 via-white/80 to-cyan-50/60 shadow-[0_20px_50px_rgba(2,132,199,0.12)] flex items-center justify-center">
            {/* Outer dotted orbital ring */}
            <div className="w-[92%] h-[92%] rounded-full border border-dashed border-sky-400/50 animate-[spin_45s_linear_infinite]" />
            {/* Inner counter-rotating ring */}
            <div className="absolute w-[76%] h-[76%] rounded-full border border-slate-200/80 animate-[spin_30s_linear_infinite_reverse]" />
          </div>

          {/* Interactive Mode Badge */}
          <div className="absolute top-4 left-6 z-20 flex items-center gap-2 px-3 py-1 bg-white/95 backdrop-blur-md border border-slate-200 rounded-md shadow-xs text-[11px] font-mono text-slate-700">
            <Crosshair className="w-3.5 h-3.5 text-sky-600 animate-spin" />
            <span className="font-semibold text-slate-900">{current.viewMode}</span>
          </div>

          {/* 3D Moving Stage Container */}
          <motion.div
            style={{
              transform: `rotateX(${-mousePosition.y * 14}deg) rotateY(${mousePosition.x * 14}deg)`,
              transformStyle: "preserve-3d",
            }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="relative z-10 w-full max-w-[520px] aspect-square flex items-center justify-center p-4 cursor-crosshair"
          >
            {/* Active Product Render with Framer Motion Transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.image}
                initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.42, ease: "easeOut" }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <Image
                  src={current.image}
                  alt={current.alt}
                  width={560}
                  height={560}
                  priority
                  className="object-contain max-h-[440px] drop-shadow-[0_25px_40px_rgba(2,132,199,0.22)] transition-transform duration-300"
                />

                {/* Interactive Hotspot Pins on Cold Plate */}
                {current.hotspots?.map((spot) => (
                  <div
                    key={spot.id}
                    style={{ top: spot.y, left: spot.x }}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group"
                  >
                    {/* Pulsing Pin Button */}
                    <button
                      onClick={() => setSelectedHotspot(spot)}
                      onMouseEnter={() => setSelectedHotspot(spot)}
                      className="relative w-7 h-7 rounded-full bg-white border-2 border-sky-500 shadow-md flex items-center justify-center cursor-pointer transition-transform hover:scale-125 focus:outline-none"
                      aria-label={`Inspect ${spot.title}`}
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-600" />
                      <span className="absolute inset-0 rounded-full border border-sky-400 animate-ripple pointer-events-none" />
                    </button>

                    {/* Popover Tooltip */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-9 w-52 p-3 bg-white/95 backdrop-blur-xl border border-sky-300 rounded-lg shadow-xl text-left pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="font-bold text-xs text-slate-900 font-sans">
                          {spot.title}
                        </span>
                        <span className="text-[10px] font-mono text-sky-700 bg-sky-100 px-1.5 py-0.5 rounded font-bold">
                          {spot.metric}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-tight">
                        {spot.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Static Telemetry Badges around the Stage */}
            <div className="absolute -top-1 right-2 px-3 py-1.5 bg-white/95 backdrop-blur-md border border-slate-200 rounded-md shadow-xs text-[11px] font-mono text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>HELIUM LEAK TESTED: &lt; 1×10⁻⁸</span>
            </div>

            <div className="absolute bottom-2 left-2 px-3 py-1.5 bg-white/95 backdrop-blur-md border border-slate-200 rounded-md shadow-xs text-[11px] font-mono text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-600" />
              <span>AL-6061-T6 VACUUM BRAZED / FSW</span>
            </div>
          </motion.div>

          {/* Right Rail Stage Tracker */}
          <div className="hidden xl:flex flex-col items-center gap-3 absolute right-0 top-1/2 -translate-y-1/2 text-slate-400">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] [writing-mode:vertical-rl] rotate-180 font-bold text-slate-500">
              CHAPTER {current.index} OF 06
            </span>
            <div className="w-[3px] h-20 bg-slate-200 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute top-0 left-0 right-0 bg-sky-600 rounded-full"
                style={{ height: `${((activeChapter + 1) / chapters.length) * 100}%` }}
                transition={{ duration: 0.35 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Chapter Controls & Engineering Badges (Bottom Navigation Bar) */}
      <div className="relative z-20 w-full border-t border-slate-200 bg-white/90 backdrop-blur-xl py-3.5 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Chapter Selector Tabs & Autoplay Button */}
          <div className="flex items-center gap-2.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`p-2 rounded-md border text-xs flex items-center gap-1.5 cursor-pointer transition-colors ${
                isAutoPlay
                  ? "bg-sky-50 border-sky-300 text-sky-700 font-semibold"
                  : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900"
              }`}
              title={isAutoPlay ? "Pause autoplay" : "Start autoplay"}
            >
              {isAutoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="font-mono text-[11px] hidden sm:inline">
                {isAutoPlay ? "AUTO" : "PLAY"}
              </span>
            </button>

            {chapters.map((ch, idx) => (
              <button
                key={ch.index}
                onClick={() => setActiveChapter(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-mono transition-all whitespace-nowrap cursor-pointer border ${
                  activeChapter === idx
                    ? "bg-slate-950 text-white font-bold border-slate-950 shadow-sm"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-white hover:border-slate-300 hover:text-slate-950"
                }`}
              >
                <span className={activeChapter === idx ? "text-sky-400 font-bold" : "text-sky-600"}>
                  {ch.index}
                </span>
                <span className="hidden sm:inline text-[11px] font-sans font-medium">
                  {ch.eyebrow.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Telemetry Engineering Metrics Band */}
          <div className="flex items-center gap-6 text-[11px] font-mono text-slate-600 uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-sky-700 font-semibold">
              <span className="text-sky-500 font-extrabold">+</span> Engineered Flow Paths
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-700">
              <span className="text-sky-500 font-extrabold">+</span> Low Pressure Drop ΔP
            </span>
            <span className="flex items-center gap-1.5 text-slate-800 font-semibold">
              <span className="text-sky-500 font-extrabold">+</span> High Heat-Flux Dissipation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
