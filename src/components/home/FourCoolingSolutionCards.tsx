"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CARDS = [
  {
    title: "Natural Convection",
    description:
      "Optimized extruded, skived, and bonded fin geometries designed for passive airflow dissipation, silence, and long-term reliability in power conversion enclosures.",
    image: "/images/assets/air_cooled/Extruded.png",
    alt: "ITS Natural Convection Air Cooled Extruded Heat Sink",
    linkText: "Link to the next landing page ->",
    href: "/products/air-cooled-heat-sinks",
    tag: "PASSIVE / AIR COOLED",
  },
  {
    title: "Forced Convection",
    description:
      "High fin-density fan-sink assemblies, high-aspect ratio folded fins, and blower ducting engineered for demanding thermal densities with active air circulation.",
    image: "/images/assets/air_cooled/AFC0006 1600 x 926.png",
    alt: "ITS Forced Convection Active Air Cooled Heat Sink Assembly",
    linkText: "Link to the next landing page ->",
    href: "/products/heat-sinks",
    tag: "ACTIVE / HIGH DENSITY",
  },
  {
    title: "Custom Liquid Cold Plate",
    description:
      "Precision-machined internal micro-channels with Friction Stir Welded hermetic covers, optimized for SiC/GaN inverters, battery modules, and high heat-flux electronics.",
    image: "/images/assets/liquid_cooled/LFA0073.png",
    alt: "ITS Custom Machined Liquid Cold Plate with Internal Fluid Channels",
    linkText: "Link to the next landing page ->",
    href: "/products/liquid-cold-plates",
    tag: "LIQUID COOLED / FSW",
  },
  {
    title: "Bus Bar",
    description:
      "High-conductivity laminated and solid copper busbars with integrated thermal interface points, precision plating, and low inductance for power electronic modules.",
    image: "/images/assets/busbar/Bus Bar.png",
    alt: "ITS Precision Machined Power Busbar Assembly",
    linkText: "Link to the next landing page ->",
    href: "/products/busbar",
    tag: "POWER / THERMAL ASSEMBLY",
  },
];

export function FourCoolingSolutionCards() {
  return (
    <section id="solutions-overview" className="relative w-full py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] font-mono tracking-widest text-sky-700 uppercase mb-2 font-bold">
              02 / HARDWARE ARCHITECTURES
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-slate-950 uppercase leading-[1.02]">
              Primary Cooling Solutions
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed font-normal">
            From passive air-cooling geometries to active liquid-cooled plates and integrated busbars, explore our core hardware categories.
          </p>
        </div>

        {/* 2 x 2 Exact Grid As Specified in Design.pdf */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="group bg-white border-2 border-slate-200/90 hover:border-sky-500 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-widest text-sky-700 font-bold uppercase px-2 py-0.5 bg-sky-50 border border-sky-200 rounded">
                    {card.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400">100% CUSTOM</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mb-3 group-hover:text-sky-600 transition-colors">
                  {card.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {card.description}
                </p>

                {/* Product Image Window */}
                <div className="relative w-full h-56 sm:h-64 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-4 mb-6 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={400}
                    height={260}
                    className="object-contain max-h-full group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                  />
                </div>
              </div>

              {/* Functional CTA Link */}
              <div className="pt-4 border-t border-slate-100">
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-sky-700 hover:text-sky-900 group-hover:translate-x-1 transition-all"
                >
                  <span>{card.linkText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
