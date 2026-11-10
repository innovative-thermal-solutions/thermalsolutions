"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Crosshair,
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

const customSpotlight = {
  index: "01",
  eyebrow: "100% Custom Engineering · No Catalogue Shelf Stock",
  titleLines: ["Every solution", "is custom built."],
  body: "There are no products on our shelves. Because every project has unique thermal requirements, we are a one-stop turnkey partner handling the entire process — from concept, thermal design & CFD simulation to prototyping and final manufacturing under one roof.",
  feature: "One-Stop Solution: Concept to Hardware",
  badge: "100% Application-Specific · Guelph, ON",
  cta: { text: "Custom Cooling Platforms", href: "#workflow" },
  secondaryCta: { text: "Bring Your Requirements", href: "/contact" },
  image: "/images/products/custom-machined-cold-plate.png",
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
};

export function CinematicStory() {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement | null>(null);

  const current = customSpotlight;

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
    <section id="custom-built" className="relative w-full min-h-[90vh] lg:min-h-[94vh] bg-gradient-to-br from-[#ffffff] via-[#f8fafc] to-[#f0f7ff] border-b border-slate-200 overflow-hidden flex flex-col justify-between pt-20 lg:pt-24">
      {/* Light Technical Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-70" />
      <div className="absolute inset-0 bg-mesh-hero pointer-events-none" />

      {/* Radiant Ambient Halos for Depth */}
      <div className="absolute top-16 right-10 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-cyan-100/50 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 lg:px-12 py-6 lg:py-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Narrative & Action Points */}
        <div className="lg:col-span-6 flex flex-col justify-center min-h-[420px]">
          <div className="flex flex-col">
            {/* Eyebrow & Live Mode Pill */}
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-bold text-sky-700 px-2.5 py-0.5 bg-sky-50 border border-sky-300 rounded shadow-xs">
                06 // DEEP DIVE 01
              </span>
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-ping" />
                {current.eyebrow}
              </span>
            </div>

            {/* Title with High-Contrast Engineering Typography */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6">
              {current.titleLines.map((line, i) => (
                <span
                  key={i}
                  className={`block ${
                    line.includes("custom")
                      ? "text-sky-600 drop-shadow-xs"
                      : "text-slate-950"
                  }`}
                >
                  {line}
                </span>
              ))}
            </h2>

            {/* Body */}
            <p className="text-base sm:text-lg text-slate-700 max-w-xl font-normal leading-relaxed mb-6">
              {current.body}
            </p>

            {/* Engineering Highlights / Badges */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sky-50 border border-sky-200 text-sky-900 rounded-md text-xs font-mono font-semibold">
                <span className="text-sky-600">⚡</span>
                {current.feature}
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-100 border border-slate-200 text-slate-700 rounded-md text-xs font-mono font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                {current.badge}
              </span>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={current.cta.href}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-slate-950 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg shadow-md hover:bg-slate-800 transition-all group"
              >
                <span>{current.cta.text}</span>
                <ArrowDown className="w-3.5 h-3.5 text-sky-400 group-hover:translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href={current.secondaryCta.href}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white border border-slate-300 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all group shadow-xs"
              >
                <span>{current.secondaryCta.text}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Precision Cold Plate Interactive Showcase */}
        <div
          ref={stageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="lg:col-span-6 relative flex items-center justify-center min-h-[480px] lg:min-h-[580px] select-none"
        >
          {/* Subtle Radar Targeting Reticle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full border border-sky-300/40 border-dashed animate-[spin_120s_linear_infinite]" />
            <div className="w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] rounded-full border border-slate-200/80" />
            <div className="w-[140px] h-[140px] rounded-full border border-sky-200/40" />
          </div>

          {/* Precision 3D Stage Platform */}
          <motion.div
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * -14}deg) rotateY(${mousePosition.x * 14}deg) scale3d(1, 1, 1)`,
              transformStyle: "preserve-3d",
            }}
            transition={{ type: "spring", stiffness: 220, damping: 25 }}
            className="relative w-full max-w-[540px] aspect-square flex items-center justify-center p-6"
          >
            {/* View Mode Tag */}
            <div className="absolute top-2 left-2 z-20 px-3 py-1 bg-white/90 backdrop-blur-md border border-slate-200 rounded-md text-[11px] font-mono text-slate-700 flex items-center gap-2 shadow-xs">
              <Crosshair className="w-3.5 h-3.5 text-sky-600 animate-spin" style={{ animationDuration: "8s" }} />
              <span className="font-semibold">{current.viewMode}</span>
            </div>

            {/* Product Rendering */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={current.image}
                alt={current.alt}
                width={540}
                height={540}
                priority
                className="w-full h-auto max-h-[480px] object-contain drop-shadow-[0_25px_35px_rgba(15,23,42,0.22)] filter contrast-[1.03]"
              />
            </div>

            {/* Interactive Hotspots with Tooltips */}
            <div className="absolute inset-0 pointer-events-auto">
              {current.hotspots.map((spot) => (
                <div
                  key={spot.id}
                  style={{ top: spot.y, left: spot.x }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group z-30 cursor-pointer"
                  onClick={() =>
                    setSelectedHotspot(selectedHotspot?.id === spot.id ? null : spot)
                  }
                >
                  {/* Ping Ring */}
                  <span className="absolute -inset-2 rounded-full bg-sky-400 opacity-60 animate-ping" />

                  {/* Hotspot Button */}
                  <div className="relative w-7 h-7 rounded-full bg-slate-900 border-2 border-white shadow-lg flex items-center justify-center text-white text-xs hover:scale-125 transition-transform">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                  </div>

                  {/* Tooltip Card */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-56 p-3 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-200 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-40">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-900">
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
            </div>

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
        </div>
      </div>

      {/* Engineering Badges (Bottom Telemetry Bar) */}
      <div className="relative z-20 w-full border-t border-slate-200 bg-white/90 backdrop-blur-xl py-3.5 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            <span>ARCHITECTURE SPECIFICATION · NO OFF-THE-SHELF COMPROMISES</span>
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
