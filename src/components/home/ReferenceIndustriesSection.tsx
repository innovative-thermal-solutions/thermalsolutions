"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface MarketItem {
  id: string;
  num: string;
  name: string;
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const REFERENCE_MARKETS: MarketItem[] = [
  {
    id: "power",
    num: "01",
    name: "Power & automation",
    label: "POWER & AUTOMATION",
    title: "More power. Less thermal compromise.",
    description:
      "Custom heat sinks and cold plates for power converters, motor drives, UPS systems and industrial automation.",
    image: "/assets/power.webp",
    alt: "Power conversion and industrial automation applications",
  },
  {
    id: "energy",
    num: "02",
    name: "Clean energy",
    label: "CLEAN ENERGY",
    title: "Helping clean energy keep its cool.",
    description:
      "Thermal solutions for inverters, renewable energy systems, power conversion and energy storage applications.",
    image: "/assets/energy.webp",
    alt: "Renewable clean energy infrastructure",
  },
  {
    id: "satellite",
    num: "03",
    name: "Satellite & telecom",
    label: "SATELLITE & TELECOM",
    title: "Clear signals. Controlled temperatures.",
    description:
      "Heat spreading and cooling solutions for RF generators, amplifiers and telecommunications electronics.",
    image: "/assets/satellite.webp",
    alt: "Satellite communications application",
  },
  {
    id: "aerospace",
    num: "04",
    name: "Aerospace & defense",
    label: "AEROSPACE & DEFENSE",
    title: "Precision for demanding environments.",
    description:
      "Custom thermal engineering and precision manufacturing for aerospace and defense electronics. Project-specific quality and compliance requirements are reviewed with your team.",
    image: "/assets/aerospace.webp",
    alt: "Aerospace and defense applications",
  },
  {
    id: "ev",
    num: "05",
    name: "EV & battery",
    label: "EV & BATTERY",
    title: "Engineered for the road ahead.",
    description:
      "Cooling solutions for battery packs, charging infrastructure and power electronics, including large-format electric bus cold plates.",
    image: "/assets/ev.webp",
    alt: "Electric vehicle and battery applications",
  },
];

export function ReferenceIndustriesSection() {
  // Default to aerospace & defense (04) to match the reference design directly
  const [activeMarket, setActiveMarket] = useState<MarketItem>(REFERENCE_MARKETS[3]);

  const openInquiry = (app: string) => {
    window.dispatchEvent(
      new CustomEvent("its-reference-modal", {
        detail: { type: "open-inquiry", payload: { application: app } },
      })
    );
  };

  return (
    <section id="industries" className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#12333b] text-white border-b border-[#1b4651]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <p className="text-[12px] font-mono tracking-[0.2em] text-[#6cb3af] uppercase mb-4 font-semibold">
              02 / BUILT FOR YOUR INDUSTRY
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold tracking-tight text-[#f4f7f5] leading-[1.08]">
              Behind the systems <br />
              that move us forward.
            </h2>
          </div>
          <p className="text-[#a5c3c0] text-sm sm:text-base max-w-sm leading-relaxed md:pt-10">
            From power conversion to electrification, thermal performance makes the difference.
          </p>
        </div>

        {/* Unified Framed Container matching the reference mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#25505b]/70 overflow-hidden">
          {/* Left Column: Numbered Industry List */}
          <div className="lg:col-span-4 flex flex-col divide-y divide-[#25505b]/70 bg-[#12333b]">
            {REFERENCE_MARKETS.map((m) => {
              const isActive = activeMarket.id === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveMarket(m)}
                  className={`w-full text-left py-7 px-8 transition-colors flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-[#183f49] text-white"
                      : "text-[#88b0ac] hover:bg-[#153a43]/70 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span className="text-[12px] font-mono text-[#6cb3af] font-medium tracking-wider">
                      {m.num}
                    </span>
                    <span
                      className={`text-base sm:text-lg font-sans transition-colors ${
                        isActive
                          ? "font-semibold text-white"
                          : "font-normal text-[#c6dbd9] group-hover:text-white"
                      }`}
                    >
                      {m.name}
                    </span>
                  </div>

                  {/* Arrow Indicator on Active Item */}
                  {isActive && (
                    <ArrowUpRight className="w-5 h-5 text-[#88e0d0] flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Panoramic Application Window */}
          <div className="lg:col-span-8 relative min-h-[460px] lg:min-h-[580px] bg-[#0c2328] flex flex-col justify-end p-8 sm:p-12 lg:p-14 overflow-hidden border-t lg:border-t-0 lg:border-l border-[#25505b]/70">
            {/* Background Image with smooth transition */}
            <Image
              src={activeMarket.image}
              alt={activeMarket.alt}
              fill
              key={activeMarket.id}
              className="object-cover object-center transition-all duration-700 ease-out"
              priority
            />

            {/* Gradient Overlay for crisp text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#102a31]/95 via-[#102a31]/60 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#102a31]/80 via-transparent to-transparent pointer-events-none" />

            {/* Overlay Content Box */}
            <div className="relative z-10 max-w-xl">
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#7de5d4] uppercase font-bold block mb-3">
                {activeMarket.label}
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-semibold text-white mb-4 leading-tight tracking-tight">
                {activeMarket.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#b8d4d1] leading-relaxed mb-6 font-normal">
                {activeMarket.description}
              </p>

              <button
                onClick={() => openInquiry(activeMarket.name)}
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-semibold text-white border-b border-white pb-1 hover:text-[#7de5d4] hover:border-[#7de5d4] transition-colors cursor-pointer"
              >
                <span>Discuss your application</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
