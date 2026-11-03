"use client";

import React, { useState } from "react";
import Image from "next/image";

const REFERENCE_MARKETS = [
  {
    id: "power",
    label: "POWER & AUTOMATION",
    title: "More power. <br />Less thermal compromise.",
    description:
      "Custom heat sinks and cold plates for power converters, motor drives, UPS systems and industrial automation.",
    image: "/images/reference/power.webp",
    alt: "Power conversion and industrial automation applications",
    application: "Power & automation",
  },
  {
    id: "energy",
    label: "CLEAN ENERGY",
    title: "Helping clean energy <br />keep its cool.",
    description:
      "Thermal solutions for inverters, renewable energy systems, power conversion and energy storage applications.",
    image: "/images/reference/energy.webp",
    alt: "Renewable clean energy infrastructure",
    application: "Clean energy",
  },
  {
    id: "satellite",
    label: "SATELLITE & TELECOM",
    title: "Clear signals. <br />Controlled temperatures.",
    description:
      "Heat spreading and cooling solutions for RF generators, amplifiers and telecommunications electronics.",
    image: "/images/reference/satellite.webp",
    alt: "Satellite communications application",
    application: "Satellite & telecom",
  },
  {
    id: "aerospace",
    label: "AEROSPACE & DEFENSE",
    title: "Precision for <br />demanding environments.",
    description:
      "Custom thermal engineering and precision manufacturing for aerospace and defense electronics. Project-specific quality and compliance requirements are reviewed with your team.",
    image: "/images/reference/aerospace.webp",
    alt: "Aerospace and defense applications",
    application: "Aerospace & defense",
  },
  {
    id: "ev",
    label: "EV & BATTERY",
    title: "Engineered for <br />the road ahead.",
    description:
      "Cooling solutions for battery packs, charging infrastructure and power electronics, including large-format electric bus cold plates.",
    image: "/images/reference/ev.webp",
    alt: "Electric vehicle and battery applications",
    application: "EV & battery",
  },
];

export function ReferenceIndustriesSection() {
  const [activeMarket, setActiveMarket] = useState(REFERENCE_MARKETS[0]);

  const openInquiry = (app: string) => {
    window.dispatchEvent(
      new CustomEvent("its-reference-modal", {
        detail: { type: "open-inquiry", payload: { application: app } },
      })
    );
  };

  return (
    <section id="industries" className="relative w-full py-24 px-6 sm:px-8 lg:px-12 bg-[#091f26] text-white border-b border-slate-800">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] font-mono tracking-widest text-[#81e6d6] uppercase mb-2 font-bold">
              03 / SECTORS WE SERVE
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight leading-[1.05]">
              Behind the systems <br />
              <span className="text-[#a3c0bb]">that move us forward.</span>
            </h2>
          </div>
          <p className="text-slate-300 text-sm sm:text-base max-w-md leading-relaxed">
            From power conversion to electrification, thermal performance makes the difference.
          </p>
        </div>

        {/* Industry Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Navigation Tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-2 lg:pb-0">
            {REFERENCE_MARKETS.map((m) => {
              const isActive = activeMarket.id === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveMarket(m)}
                  className={`text-left p-4 sm:p-5 rounded-lg border transition-all cursor-pointer flex-shrink-0 lg:flex-shrink w-64 lg:w-full ${
                    isActive
                      ? "bg-[#0b252c] border-[#81e6d6] shadow-md"
                      : "bg-[#07191f] border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white"
                  }`}
                >
                  <span className="text-[10px] font-mono tracking-widest block uppercase mb-1 font-bold text-[#81e6d6]">
                    {m.label}
                  </span>
                  <span className="text-sm sm:text-base font-serif font-bold text-white block">
                    {m.application}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Visual Window */}
          <div className="lg:col-span-8 relative min-h-[380px] lg:min-h-[460px] rounded-lg overflow-hidden border border-slate-800 bg-[#07191f] flex flex-col justify-end p-6 sm:p-10">
            <Image
              src={activeMarket.image}
              alt={activeMarket.alt}
              fill
              className="object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#091f26] via-[#091f26]/60 to-transparent" />

            <div className="relative z-10 max-w-xl">
              <span className="text-[10px] font-mono tracking-widest text-[#81e6d6] uppercase font-bold block mb-2">
                {activeMarket.label}
              </span>
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-3 leading-tight"
                dangerouslySetInnerHTML={{ __html: activeMarket.title }}
              />
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {activeMarket.description}
              </p>
              <button
                onClick={() => openInquiry(activeMarket.application)}
                className="px-6 py-3 bg-[#81e6d6] hover:bg-[#a4f5e7] text-[#091f26] font-bold text-xs font-mono uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Discuss your application</span>
                <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
