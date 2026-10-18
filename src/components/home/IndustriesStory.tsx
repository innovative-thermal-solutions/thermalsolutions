"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Zap, BatteryCharging, Sun, Plane, Radio, Factory, CheckCircle2 } from "lucide-react";

const industries = [
  {
    index: "01",
    total: "06",
    slug: "power-electronics",
    name: "Power Electronics",
    icon: Zap,
    tagline: "SiC & GaN High Heat-Flux Cooling",
    description: "Managing extreme, concentrated heat loads in compact power-conversion architectures, 800V silicon-carbide inverters, and high-frequency IGBT switches.",
    image: "/images/industries/power-electronics.webp",
    href: "/industries/power-electronics",
    metrics: "Up to 120 W/cm² heat flux",
    applications: "SiC & GaN motor drives, DC-DC buck/boost converters, solid-state transformers",
    achievements: ["< 0.02 °C/W thermal resistance", "Uniform junction temperature across all 6 switches", "Integrated laminated busbars"],
  },
  {
    index: "02",
    total: "06",
    slug: "ev-battery",
    name: "EV & Battery Systems",
    icon: BatteryCharging,
    tagline: "High-Rate Automotive & Heavy-Duty Traction",
    description: "Uniform thermal regulation for ultra-fast DC charging stations, automotive battery module ribbon chillers, and high-performance electric bus traction drives.",
    image: "/images/industries/ev-battery.webp",
    href: "/industries/ev-battery",
    metrics: "Uniform ΔT < 2.5°C across pack",
    applications: "Battery pack liquid cold plates, charging cable chillers, onboard traction inverters",
    achievements: ["Zero leak rate over 15-year lifecycle", "Corrosion-resistant Al-3003/6061 alloy", "Shock & vibration validated"],
  },
  {
    index: "03",
    total: "06",
    slug: "clean-energy",
    name: "Clean Energy",
    icon: Sun,
    tagline: "Utility-Scale Solar & Grid Energy Storage",
    description: "Rugged cooling hardware engineered for utility-scale solar central inverters, wind turbine megawatt converters, and continuous BESS battery storage modules.",
    image: "/images/industries/clean-energy.webp",
    href: "/industries/clean-energy",
    metrics: "25+ Year operating reliability",
    applications: "Utility solar inverters, grid BESS cold plates, megawatt wind power converters",
    achievements: ["IP67 hermetically sealed FSW seams", "Direct glycol-water or dielectric fluid", "Zero maintenance continuous duty"],
  },
  {
    index: "04",
    total: "06",
    slug: "aerospace",
    name: "Aerospace & Defence",
    icon: Plane,
    tagline: "Mission-Critical Severe Harsh Environments",
    description: "Engineered thermal hardware meeting stringent size, weight, power (SWaP) constraints for airborne radar, naval propulsion, and avionics flight enclosures.",
    image: "/images/industries/aerospace.webp",
    href: "/industries/aerospace",
    metrics: "DO-160 & MIL-STD validated joints",
    applications: "Active phased array radar chassis, avionics cold plates, missile guidance pods",
    achievements: ["Helium mass-spec tested < 1e-8 mbar·L/s", "5-axis micro-milled monolithic chassis", "High-altitude burst pressure certified"],
  },
  {
    index: "05",
    total: "06",
    slug: "satellite",
    name: "Satellite Communications",
    icon: Radio,
    tagline: "Zero-Gravity Spreading & Space Radiators",
    description: "High-conductance thermal spreading for high-power RF solid-state power amplifiers, LEO satellite transponders, and phased-array communication terminals.",
    image: "/images/industries/satellite.webp",
    href: "/industries/satellite",
    metrics: "Embedded two-phase heat pipe arrays",
    applications: "LEO satellite payload radiators, ground earth station amplifiers, Ka-band arrays",
    achievements: ["Zero gravity heat spreading", "Outgassing compliant NASA SP-R-0022A", "Monolithic diffusion bonded cold walls"],
  },
  {
    index: "06",
    total: "06",
    slug: "industrial",
    name: "Industrial Automation",
    icon: Factory,
    tagline: "Variable Frequency Drives & Motion Systems",
    description: "Durable, high-uptime cooling for industrial variable-frequency drives (VFD), CNC spindle motor drives, laser power supplies, and automated plant equipment.",
    image: "/images/manufacturing/precision-manufacturing.png",
    href: "/industries/industrial",
    metrics: "Continuous 24/7/365 production duty",
    applications: "Multi-axis servo drives, fiber laser chillers, robotics power enclosures",
    achievements: ["Compact extruded & bonded fin profiles", "High flow capacity with minimal backpressure", "Standard SAE/NPT port interfaces"],
  },
];

export function IndustriesStory() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx((curr) => (curr === 0 ? industries.length - 1 : curr - 1));
  const next = () => setActiveIdx((curr) => (curr === industries.length - 1 ? 0 : curr + 1));

  const current = industries[activeIdx];
  const IconComponent = current.icon;

  return (
    <section className="relative w-full py-24 px-6 lg:px-12 bg-white border-b border-slate-200 overflow-hidden">
      {/* Blueprint Grid Lines */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-sky-700 px-2.5 py-0.5 bg-sky-50 border border-sky-300 rounded shadow-xs">
                08
              </span>
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold">
                Target Applications
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 uppercase leading-[0.92]">
              Where Heat <br />
              <span className="text-sky-600">Becomes Critical.</span>
            </h2>
          </div>

          {/* Nav arrows & progress */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-slate-500">
              <strong className="text-slate-950 font-bold">{current.index}</strong> / {current.total}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous industry"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-colors shadow-xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next industry"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-colors shadow-xs cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-slate-200">
          {industries.map((ind, idx) => {
            const TabIcon = ind.icon;
            const isActive = activeIdx === idx;
            return (
              <button
                key={ind.name}
                onClick={() => setActiveIdx(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono whitespace-nowrap transition-all cursor-pointer border ${
                  isActive
                    ? "bg-slate-950 text-white font-bold border-slate-950 shadow-md"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                <TabIcon className={`w-3.5 h-3.5 ${isActive ? "text-sky-400" : "text-sky-600"}`} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase Stage */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950 min-h-[500px] lg:min-h-[560px] flex flex-col justify-end">
          {/* Background Image with Zoom & Smooth Crossfade */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="absolute inset-0 z-0"
            >
              <Image
                src={current.image}
                alt={current.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1440px"
                className="object-cover object-center filter brightness-[0.72] contrast-[1.08]"
              />
              {/* Refined gradient scrim for readable typography */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Panel Telemetry Content */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="font-mono text-xs text-sky-400 font-bold tracking-widest px-2.5 py-0.5 bg-black/60 backdrop-blur-md rounded border border-white/20">
                INDUSTRY {current.index} / {current.total}
              </span>
              <span className="text-white/40">•</span>
              <span className="text-xs uppercase font-mono tracking-wider text-slate-300 font-semibold">
                {current.metrics}
              </span>
            </div>

            <div className="text-xs font-mono text-sky-400 uppercase tracking-widest font-bold mb-1">
              {current.tagline}
            </div>

            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight mb-4">
              {current.name}
            </h3>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6 font-normal max-w-3xl">
              {current.description}
            </p>

            {/* Engineering Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {current.achievements.map((item) => (
                <div key={item} className="flex items-center gap-2 p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/10 text-xs font-mono text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/20">
              <div className="text-xs font-mono text-slate-300">
                <span className="text-slate-400 block mb-0.5">Typical Applications:</span>
                <span className="text-white font-medium">{current.applications}</span>
              </div>

              <Link
                href={current.href}
                className="shine-sweep inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-950 hover:bg-sky-400 font-bold text-xs uppercase tracking-wider rounded-md transition-all whitespace-nowrap shadow-md group"
              >
                <span>View {current.name} Solutions</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
