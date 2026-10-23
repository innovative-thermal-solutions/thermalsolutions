"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Cpu, Activity, ShieldCheck, CheckCircle2, Droplets, Thermometer, Gauge } from "lucide-react";
import { motion } from "framer-motion";

const capabilities = [
  {
    index: "01",
    title: "Thermal Engineering & CFD",
    detail: "Collaborative thermal sizing, finite-element CFD fluid simulations, and high-heat flux channel topology optimization.",
    href: "/technologies/thermal-engineering",
    badge: "Ansys & SolidWorks Flow",
  },
  {
    index: "02",
    title: "In-House Precision CNC Machining",
    detail: "5-axis high-speed CNC milling of complex internal micro-fin arrays, fluid manifolds, and tight geometric tolerances.",
    href: "/capabilities/cnc-machining",
    badge: "± 0.025 mm Tolerances",
  },
  {
    index: "03",
    title: "Solid-State Friction Stir Welding",
    detail: "Hermetic, zero-porosity cover joining without filler metals. 100% parent metal strength for liquid cooling loops.",
    href: "/capabilities/friction-stir-welding",
    badge: "ASME Sec IX Validated",
  },
  {
    index: "04",
    title: "Metrology & Leak Testing",
    detail: "100% helium mass-spectrometer leak testing (< 1×10⁻⁸ mbar·L/s), hydrostatic pressure bursting, and CMM inspection.",
    href: "/quality",
    badge: "ISO 9001:2015 System",
  },
];

const sensors = [
  { id: "s1", name: "T_in (Fluid Inlet)", value: "30.0 °C", desc: "Chilled Glycol-Water Mixture", x: "12%", y: "65%" },
  { id: "s2", name: "T_peak (Thermal Core)", value: "105.0 °C", desc: "Concentrated IGBT Heat Source", x: "42%", y: "30%" },
  { id: "s3", name: "T_out (Fluid Outlet)", value: "47.2 °C", desc: "Rejected Thermal Energy", x: "88%", y: "42%" },
];

export function EngineeringProof() {
  const [activeSensor, setActiveSensor] = useState(sensors[1]);

  return (
    <section id="capabilities" className="relative w-full py-24 px-6 lg:px-12 bg-slate-50/70 border-b border-slate-200 overflow-hidden">
      {/* Blueprint Grid Lines */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-sky-700 px-2.5 py-0.5 bg-white border border-sky-300 rounded shadow-xs">
                04
              </span>
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold">
                Engineering Capabilities
              </span>
            </div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 uppercase leading-[0.92] mb-4">
              From Thermal Model <br />
              <span className="text-sky-600">to Finished Hardware.</span>
            </h2>
            <p className="text-slate-700 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              Thermal simulations remain tightly connected to the precision manufacturing processes that transform them into dependable, leak-proof cooling hardware.
            </p>
          </div>
        </div>

        {/* Proof Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
          {/* Left: Luminous Light Laboratory Flow & Heat Source Visualization */}
          <div className="w-full min-w-0 relative rounded-2xl bg-white border-2 border-slate-200 p-6 sm:p-8 overflow-hidden shadow-md flex flex-col justify-between min-h-[460px]">
            {/* Subtle Technical Grid Lines */}
            <div className="absolute inset-0 bg-grid-blueprint opacity-50 pointer-events-none" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

            {/* Top Telemetry Header */}
            <div className="relative z-10 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-800 rounded-md border border-sky-200 shadow-2xs">
                <Droplets className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
                <span>ACTIVE FLUID CIRCUIT: 5.5 LPM</span>
              </div>
              <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded border border-slate-200">
                P_in: <strong>2.4 bar</strong> | ΔP: <strong>0.3 bar</strong>
              </span>
            </div>

            {/* Central Animated Fluid Circuit & Thermal Core */}
            <div className="relative w-full min-h-[280px] flex items-center justify-center my-4">
              {/* Radiating Heat Core (Active Hotspot) */}
              <div className="absolute top-[32%] left-[42%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                {/* Concentric pulsing heat waves */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-red-500/30 via-orange-400/20 to-amber-300/10 animate-ripple pointer-events-none" />
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-red-500 via-orange-500 to-amber-400 opacity-90 blur-sm pointer-events-none shadow-[0_0_30px_rgba(239,68,68,0.4)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[11px] font-mono font-bold text-white px-2 py-0.5 bg-slate-950/80 rounded backdrop-blur-xs border border-red-500/60 shadow-sm">
                    Q = 1400 W
                  </span>
                </div>
              </div>

              {/* Vector Coolant Path SVG */}
              <svg
                viewBox="0 0 720 480"
                className="absolute inset-0 w-full h-full pointer-events-none"
                role="img"
                aria-label="Engineered coolant route carrying heat away"
              >
                {/* Channel Guide Casing */}
                <path
                  d="M 50 340 C 160 340 160 150 290 150 S 420 370 550 370 S 600 200 680 200"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="24"
                  strokeLinecap="round"
                />
                {/* Fluid Inner Channel */}
                <path
                  d="M 50 340 C 160 340 160 150 290 150 S 420 370 550 370 S 600 200 680 200"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="8"
                  opacity="0.3"
                  strokeLinecap="round"
                />
                {/* Fluid Velocity Flow Dash Stream */}
                <path
                  d="M 50 340 C 160 340 160 150 290 150 S 420 370 550 370 S 600 200 680 200"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="6"
                  strokeDasharray="18 24"
                  className="animate-flow-dash"
                  strokeLinecap="round"
                />
              </svg>

              {/* Interactive Sensor Probes */}
              {sensors.map((sensor) => (
                <div
                  key={sensor.id}
                  style={{ top: sensor.y, left: sensor.x }}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                >
                  <button
                    onClick={() => setActiveSensor(sensor)}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold transition-all cursor-pointer shadow-sm border ${
                      activeSensor.id === sensor.id
                        ? "bg-slate-950 text-white border-slate-950 scale-110 ring-2 ring-sky-300"
                        : "bg-white text-slate-800 border-slate-300 hover:border-sky-400"
                    }`}
                  >
                    <span>{sensor.value}</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Active Sensor Live Reading Bar */}
            <div className="relative z-10 p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Thermometer className="w-4 h-4 text-sky-600" />
                <span className="text-xs font-mono text-slate-700">
                  Selected Sensor: <strong className="text-slate-950">{activeSensor.name}</strong>
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded">
                {activeSensor.desc}
              </span>
            </div>
          </div>

          {/* Right: Technical Capabilities List */}
          <div className="w-full min-w-0 flex flex-col justify-between divide-y divide-slate-200 border-t border-slate-200">
            {capabilities.map((item) => (
              <Link
                key={item.index}
                href={item.href}
                className="group block py-5 sm:py-6 hover:bg-white px-4 -mx-4 rounded-xl transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-sky-700 font-bold mt-1 px-2 py-0.5 bg-sky-50 border border-sky-200 rounded">
                      {item.index}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 uppercase tracking-tight group-hover:text-sky-600 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-2">
                        {item.detail}
                      </p>
                      <span className="inline-block text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all shrink-0 mt-1 shadow-2xs">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Metrics Band */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white border border-slate-200 rounded-2xl shadow-xs">
          {[
            { label: "Cooling Architecture", value: "Application-Specific CAD" },
            { label: "Machining Metallurgy", value: "Al-6061 · Cu-110 · Al-6063" },
            { label: "Fluid Joint Integrity", value: "FSW Solid-State Hermetic" },
            { label: "Metrology Standard", value: "ISO 9001:2015 / CMM Traceable" },
          ].map((metric) => (
            <div key={metric.label} className="border-l-2 border-sky-500 pl-4">
              <span className="block text-[11px] font-mono uppercase text-slate-500 mb-0.5">
                {metric.label}
              </span>
              <span className="block text-sm sm:text-base font-extrabold text-slate-900 font-sans">
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
