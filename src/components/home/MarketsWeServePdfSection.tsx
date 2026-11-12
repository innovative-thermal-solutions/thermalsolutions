"use client";

import React, { useState } from "react";
import Image from "next/image";

const MARKETS = [
  {
    id: "power",
    label: "Power & automation",
    title: "More power. <br />Less thermal compromise.",
    description:
      "Custom heat sinks and cold plates for power converters, motor drives, UPS systems and industrial automation.",
    image: "/images/reference/power.webp",
    alt: "Power conversion and industrial automation applications",
    application: "Power & automation",
    stats: "Up to 120 W/cm² heat flux",
  },
  {
    id: "energy",
    label: "Clean energy",
    title: "Helping clean energy <br />keep its cool.",
    description:
      "Thermal solutions for inverters, renewable energy systems, power conversion and energy storage applications.",
    image: "/images/reference/energy.webp",
    alt: "Renewable clean energy infrastructure",
    application: "Clean energy",
    stats: "High cyclic endurance & IP67 hermetic sealing",
  },
  {
    id: "satellite",
    label: "Satellite & telecom",
    title: "Clear signals. <br />Controlled temperatures.",
    description:
      "Heat spreading and cooling solutions for RF generators, amplifiers and telecommunications electronics.",
    image: "/images/reference/satellite.webp",
    alt: "Satellite communications application",
    application: "Satellite & telecom",
    stats: "Up to 20°C drop in amplifier junction temps",
  },
  {
    id: "aerospace",
    label: "Aerospace & defense",
    title: "Precision for <br />demanding environments.",
    description:
      "Custom thermal engineering and precision manufacturing for aerospace and defense electronics. Project-specific quality and compliance requirements are reviewed with your team.",
    image: "/images/reference/aerospace.webp",
    alt: "Aerospace and defense applications",
    application: "Aerospace & defense",
    stats: "AS9100 initiative alignment & 100% helium leak verification",
  },
  {
    id: "ev",
    label: "EV & battery",
    title: "Engineered for <br />the road ahead.",
    description:
      "Cooling solutions for battery packs, charging infrastructure and power electronics, including large-format electric bus cold plates.",
    image: "/images/reference/ev.webp",
    alt: "Electric vehicle and battery applications",
    application: "EV & battery",
    stats: "Plates up to 1,450 mm length with balanced flow channels",
  },
];

export function MarketsWeServePdfSection() {
  const [activeMarket, setActiveMarket] = useState(MARKETS[0]);

  const openInquiry = (app: string) => {
    window.dispatchEvent(
      new CustomEvent("its-reference-modal", {
        detail: { type: "open-inquiry", payload: { application: app } },
      })
    );
  };

  return (
    <section id="markets-we-serve" className="relative w-full py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-[#0f1719] text-white border-b border-slate-800">
      <div className="max-w-[1440px] mx-auto">
        {/* Exact Section Heading from Design.pdf Page 2 */}
        <div className="mb-12">
          <p className="text-[11px] font-mono tracking-widest text-[#00747a] uppercase mb-2 font-bold">
            05 / APPLICATION DOMAINS
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white mb-2">
            Markets we serve in
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            From power conversion to electrification, thermal performance makes the difference.
          </p>
        </div>

        {/* Industrial Explorer Matching Design.pdf Page 2 */}
        <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#07191f] grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
          {/* Left: Navigation Menu */}
          <div className="lg:col-span-4 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-6 leading-tight">
                Behind the systems <br />
                <span className="text-[#9da8a9]">that move us forward.</span>
              </h3>

              <div className="space-y-2">
                {MARKETS.map((m) => {
                  const isActive = activeMarket.id === m.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setActiveMarket(m)}
                      className={`w-full text-left px-4 py-3 rounded-lg border text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? "bg-[#141f22] border-[#00747a] text-[#00747a] font-bold shadow-sm"
                          : "border-transparent hover:bg-white/5 text-slate-400 hover:text-white"
                      }`}
                    >
                      <span>{m.label}</span>
                      <span className="text-sm font-bold">{isActive ? "→" : "•"}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
              <span className="text-[#00747a]">Key Telemetry: </span>
              <span>{activeMarket.stats}</span>
            </div>
          </div>

          {/* Right: Selected Market Visual Banner */}
          <div className="lg:col-span-8 relative min-h-[380px] lg:min-h-[500px] flex flex-col justify-end p-8 sm:p-12">
            <Image
              src={activeMarket.image}
              alt={activeMarket.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1719] via-[#0f1719]/70 to-transparent" />

            <div className="relative z-10 max-w-xl">
              <span className="text-[10px] font-mono tracking-widest text-[#00747a] uppercase font-bold block mb-2">
                {activeMarket.label}
              </span>

              <h4
                className="text-2xl sm:text-4xl font-serif font-bold text-white mb-3 leading-tight"
                dangerouslySetInnerHTML={{ __html: activeMarket.title }}
              />

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                {activeMarket.description}
              </p>

              <button
                onClick={() => openInquiry(activeMarket.application)}
                className="px-6 py-3 bg-[#00747a] hover:bg-[#005d62] text-white font-bold text-xs font-mono uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 cursor-pointer shadow-lg"
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
