"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronDown, ChevronUp, Layers, Cpu, ShieldCheck, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    index: "01",
    category: "Liquid Cooling Systems",
    name: "Liquid Cold Plates",
    tagline: "High Heat-Flux Semiconductor Management",
    description:
      "Custom flow architectures engineered specifically for demanding power electronics, EV traction inverters, and battery thermal management.",
    href: "/products/cold-plates",
    image: "/images/products/custom-machined-cold-plate.png",
    specs: [
      "Machined micro-channels (0.5mm fin pitch)",
      "Continuous pressed-in seamless copper/aluminum tubes",
      "Friction Stir Welded (FSW) solid-state cover",
      "100% Helium mass-spectrometer leak tested",
    ],
    details: {
      thermalResistance: "Down to 0.018 °C/W",
      pressureDrop: "< 25 kPa @ 6.0 LPM",
      materials: "Al-6061-T6, Al-6063, Cu-110",
      operatingFluid: "EGW (50/50), PGW, Dielectric Fluids",
      jointType: "FSW Solid-State / Vacuum Brazing",
      maxPressure: "15 bar proof pressure",
    },
  },
  {
    index: "02",
    category: "Air Cooling Systems",
    name: "Air-Cooled Heat Sinks",
    tagline: "Passive & Forced Convection Geometries",
    description:
      "Extruded, bonded-fin, skived-fin, folded fin, and embedded two-phase heat pipe assemblies for high-reliability electronics enclosures.",
    href: "/products/heat-sinks",
    image: "/images/products/bonded-heat-sink.png",
    specs: [
      "High aspect-ratio bonded fins (up to 40:1)",
      "Extruded & micro-skived fin configurations",
      "Embedded copper heat pipes & vapor chambers",
      "Precision CNC milled component mounting faces",
    ],
    details: {
      thermalResistance: "0.045 to 0.12 °C/W",
      finDensity: "Up to 80 fins per inch",
      materials: "Al-6063-T5, Cu-110, Al-1100",
      coolingMedium: "Natural & Forced Air Convection",
      jointType: "High-Conductivity Epoxy / Solder Bond",
      surfaceFinish: "Clear / Black Anodize, Chromate",
    },
  },
  {
    index: "03",
    category: "Turnkey Integrated Systems",
    name: "Thermal Assemblies & Busbars",
    tagline: "Turnkey Electromechanical Packaging",
    description:
      "Engineered cooling hardware carried from thermal sizing through multi-axis machining, joining, laminated busbar integration, and metrology.",
    href: "/products",
    image: "/images/products/busbar-assembly.png",
    specs: [
      "Laminated low-inductance busbars integrated",
      "Sub-assembly wire harnesses & thermal sensors",
      "SAE ORB & quick-disconnect hydraulic couplings",
      "Full CMM coordinate metrology inspection report",
    ],
    details: {
      voltageRating: "Up to 1500V DC Insulation",
      leakRate: "< 1×10⁻⁸ mbar·L/s Helium",
      materials: "Multiphase metals, G10/FR4, Kapton",
      testingSuite: "Pressure cycling, Thermal shock, HiPot",
      certification: "ISO 9001:2015 Traceability",
      assemblyClass: "Cleanroom Class 10,000 ready",
    },
  },
];

export function ProductFamily() {
  const [expandedIndex, setExpandedIndex] = useState<string | null>("01");

  const toggleExpand = (index: string) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="products" className="relative w-full py-24 px-6 lg:px-12 bg-transparent border-b border-slate-200/80 overflow-hidden">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none z-0" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-sky-700 px-2.5 py-0.5 bg-white border border-sky-300 rounded shadow-xs">
                01
              </span>
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold">
                Custom Platforms
              </span>
            </div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 uppercase leading-[0.92] mb-4">
              Custom Cooling Solutions, <br />
              <span className="text-sky-600 font-bold">Built for Your Specific Application.</span>
            </h2>
            <p className="text-slate-700 text-base sm:text-lg max-w-3xl font-normal leading-relaxed">
              We do not sell standard products on shelves. Because every customer has different thermal requirements, we work with you to develop and manufacture application-specific hardware — taking care of the entire process from concept to finished product under one roof.
            </p>
          </div>
        </div>

        {/* Product Cards Stack */}
        <div className="space-y-8">
          {products.map((product) => {
            const isExpanded = expandedIndex === product.index;

            return (
              <div
                key={product.index}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Main Card Grid */}
                <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left: Index & Category */}
                  <div className="lg:col-span-2 flex flex-col justify-start">
                    <span className="font-mono text-xs font-bold text-sky-700 mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                      PRODUCT {product.index}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
                      {product.category}
                    </span>
                  </div>

                  {/* Middle: Product Visual Stage */}
                  <div className="lg:col-span-5 relative w-full aspect-[4/3] max-h-[340px] flex items-center justify-center p-6 bg-gradient-to-tr from-slate-50 via-white to-sky-50/40 rounded-xl border border-slate-200 shadow-inner overflow-hidden group">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={460}
                      height={340}
                      className="object-contain max-h-[280px] group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_15px_25px_rgba(2,132,199,0.18)]"
                    />

                    <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-white/95 backdrop-blur-md border border-slate-200 rounded text-[11px] font-mono text-slate-700 flex items-center gap-1.5 shadow-2xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>100% Quality Inspected</span>
                    </div>
                  </div>

                  {/* Right: Content & Specs */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono text-sky-700 font-bold uppercase tracking-wider mb-1">
                        {product.tagline}
                      </div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 uppercase leading-tight mb-3">
                        {product.name}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                        {product.description}
                      </p>

                      {/* Feature Checklist */}
                      <div className="space-y-2 mb-6">
                        {product.specs.map((spec) => (
                          <div key={spec} className="flex items-start gap-2.5 text-xs font-mono text-slate-700">
                            <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions Row */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                      <button
                        onClick={() => toggleExpand(product.index)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-700 hover:text-sky-600 transition-colors cursor-pointer"
                      >
                        <span>{isExpanded ? "Hide Technical Datasheet" : "View Technical Datasheet"}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      <Link
                        href={product.href}
                        className="shine-sweep inline-flex items-center gap-2 px-5 py-2.5 bg-slate-950 text-white hover:bg-sky-600 font-bold text-xs uppercase tracking-wider rounded-md transition-all shadow-sm group"
                      >
                        <span>Explore Product</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Expandable Engineering Datasheet Drawer */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-200 bg-gradient-to-r from-sky-50/40 via-white to-slate-50/60 p-6 sm:p-8"
                    >
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-4 flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-sky-600" />
                        <span>Engineering Datasheet & Design Boundaries</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {Object.entries(product.details).map(([key, val]) => (
                          <div key={key} className="p-3 bg-white border border-slate-200 rounded-lg shadow-2xs">
                            <span className="block text-[10px] font-mono uppercase text-slate-400 mb-1">
                              {key.replace(/([A-Z])/g, " $1")}
                            </span>
                            <span className="text-xs font-mono font-bold text-slate-900 block leading-tight">
                              {val}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
