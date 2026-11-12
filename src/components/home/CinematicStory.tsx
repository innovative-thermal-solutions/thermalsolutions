"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

const customSpotlight = {
  index: "01",
  titleLines: ["Every solution", "is custom built."],
  body: "There are no products on our shelves. Because every project has unique thermal requirements, we are a one-stop turnkey partner handling the entire process — from concept, thermal design & CFD simulation to prototyping and final manufacturing under one roof.",
  feature: "One-Stop Solution: Concept to Hardware",
  badge: "100% Application-Specific · Guelph, ON",
  secondaryCta: { text: "Bring Your Requirements", href: "/contact" },
  image: "/images/products/custom-machined-cold-plate.png",
  alt: "ITS Custom Machined Liquid Cold Plate",
};

export function CinematicStory() {
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
            {/* Title with High-Contrast Engineering Typography */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6">
              {current.titleLines.map((line, i) => (
                <span
                  key={i}
                  className={`block ${
                    line.includes("custom")
                      ? "text-[#00747a] drop-shadow-xs"
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
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#00747a]/10 border border-[#00747a]/30 text-[#00747a] rounded-md text-xs font-mono font-semibold">
                <span className="text-[#00747a]">⚡</span>
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
                href={current.secondaryCta.href}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#00747a] hover:bg-[#005d62] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-all group"
              >
                <span>{current.secondaryCta.text}</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
