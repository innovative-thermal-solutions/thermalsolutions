"use client";

import { useState, useId } from "react";
import { motion } from "framer-motion";
import {
  Sliders,
  Cpu,
  Droplet,
  ArrowRight,
  CheckCircle2,
  RotateCcw,
  Gauge,
  Activity,
  Flame,
  Zap,
  Layers,
  Thermometer,
} from "lucide-react";
import Link from "next/link";

interface Preset {
  name: string;
  badge: string;
  power: number;
  flow: number;
  inlet: number;
  arch: "machined" | "tube" | "air";
}

const PRESETS: Preset[] = [
  {
    name: "800V EV Inverter",
    badge: "Automotive Traction",
    power: 2400,
    flow: 6.5,
    inlet: 45,
    arch: "machined",
  },
  {
    name: "GaN Radar Module",
    badge: "Aerospace RF",
    power: 850,
    flow: 3.5,
    inlet: 25,
    arch: "machined",
  },
  {
    name: "Grid Solar Convertor",
    badge: "Clean Energy",
    power: 1600,
    flow: 5.0,
    inlet: 35,
    arch: "tube",
  },
  {
    name: "BESS Chiller Loop",
    badge: "Battery Storage",
    power: 1100,
    flow: 4.0,
    inlet: 20,
    arch: "tube",
  },
];

export function ThermalSimulator() {
  const [heatLoad, setHeatLoad] = useState<number>(1400); // Watts
  const [flowRate, setFlowRate] = useState<number>(5.0); // L/min
  const [inletTemp, setInletTemp] = useState<number>(30); // °C
  const [architecture, setArchitecture] = useState<"machined" | "tube" | "air">("machined");

  const heatLoadInputId = useId();
  const flowRateInputId = useId();
  const inletTempInputId = useId();

  // Thermal modeling physics:
  // Water-Glycol 50/50: Cp ≈ 3500 J/(kg·K), density ≈ 1060 kg/m³
  const massFlowKgSec = (flowRate * 1.06) / 60;
  const cp = 3500;
  const fluidDeltaT = heatLoad / (massFlowKgSec * cp);
  const outletTemp = Math.round((inletTemp + fluidDeltaT) * 10) / 10;

  // Base thermal resistance
  const baseRth =
    architecture === "machined" ? 0.022 : architecture === "tube" ? 0.038 : 0.088;
  const flowFactor = Math.pow(4.0 / flowRate, 0.35);
  const effectiveRth = Math.round(baseRth * flowFactor * 1000) / 1000;

  // Junction / surface temperature
  const junctionTemp = Math.round((inletTemp + fluidDeltaT * 0.5 + heatLoad * effectiveRth) * 10) / 10;

  // Estimated hydraulic pressure drop in kPa
  const pressureDrop = Math.round((architecture === "machined" ? 1.8 : 0.9) * Math.pow(flowRate, 1.75) * 10) / 10;

  // Heat flux across 25 cm² footprint
  const heatFlux = Math.round(heatLoad / 25);

  const applyPreset = (p: Preset) => {
    setHeatLoad(p.power);
    setFlowRate(p.flow);
    setInletTemp(p.inlet);
    setArchitecture(p.arch);
  };

  // Determine core glow color based on junction temp
  const getHeatIntensityColor = (temp: number) => {
    if (temp < 50) return "from-sky-500 to-cyan-400";
    if (temp < 75) return "from-amber-500 to-orange-400";
    return "from-red-600 via-rose-500 to-orange-400";
  };

  return (
    <section id="simulator" className="relative w-full py-24 px-6 lg:px-12 bg-white border-b border-slate-200 overflow-hidden">
      {/* Background blueprint grid overlay */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 border border-sky-300 rounded shadow-xs">
              LAB BENCH
            </span>
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Interactive CFD Thermal Engine
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 uppercase leading-[0.92] mb-4">
            Model Your Cold Plate <br />
            <span className="text-sky-600">Performance in Real Time.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Test how semiconductor heat load (Q), coolant flow velocity, and micro-channel geometry interact to govern operating temperatures and pressure drop.
          </p>
        </div>

        {/* Quick Industry Presets Bar */}
        <div className="mb-10 p-4 bg-slate-50/90 border border-slate-200 rounded-xl shadow-xs backdrop-blur-md">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>Load Quick Application Preset:</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {PRESETS.map((preset) => (
              <button
                key={preset.name}
                onClick={() => applyPreset(preset)}
                className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                  heatLoad === preset.power && flowRate === preset.flow
                    ? "bg-white border-sky-500 shadow-sm ring-1 ring-sky-300"
                    : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <div className="text-xs font-bold text-slate-900">{preset.name}</div>
                <div className="text-[10px] font-mono text-slate-500 flex justify-between mt-0.5">
                  <span>{preset.badge}</span>
                  <span className="text-sky-600 font-bold">{preset.power} W</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column (Left) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-50 to-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <span className="text-xs uppercase font-mono tracking-wider font-bold text-slate-900 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-sky-600" />
                  Boundary Conditions
                </span>
                <button
                  onClick={() => {
                    setHeatLoad(1400);
                    setFlowRate(5.0);
                    setInletTemp(30);
                    setArchitecture("machined");
                  }}
                  className="text-xs font-mono text-slate-500 hover:text-slate-950 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset Defaults
                </button>
              </div>

              {/* Architecture Selector */}
              <div className="mb-6">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2.5">
                  1. Cooling Architecture & Geometry
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "machined", label: "Hypercool Fin", rth: "0.022 °C/W", badge: "Max Flux" },
                    { id: "tube", label: "Pressed Tube", rth: "0.038 °C/W", badge: "Continuous" },
                    { id: "air", label: "Air Heat Sink", rth: "0.088 °C/W", badge: "Convection" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setArchitecture(item.id as "machined" | "tube" | "air")}
                      className={`p-2.5 rounded-lg text-xs font-mono text-center transition-all cursor-pointer border ${
                        architecture === item.id
                          ? "bg-slate-950 text-white border-slate-950 font-bold shadow-sm"
                          : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="font-sans font-semibold">{item.label}</div>
                      <div className={`text-[10px] mt-0.5 ${architecture === item.id ? "text-sky-300" : "text-sky-600 font-bold"}`}>
                        {item.rth}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 1: Heat Load */}
              <div className="mb-6 bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <label htmlFor={heatLoadInputId} className="text-slate-800 font-bold flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-red-500" />
                    Heat Dissipation (Q)
                  </label>
                  <span className="font-bold text-slate-950 px-2.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-xs font-mono">
                    {heatLoad} Watts
                  </span>
                </div>
                <input
                  id={heatLoadInputId}
                  type="range"
                  min={200}
                  max={3000}
                  step={50}
                  value={heatLoad}
                  onChange={(e) => setHeatLoad(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1.5">
                  <span>200 W (Module)</span>
                  <span>1500 W</span>
                  <span>3000 W (Traction Inverter)</span>
                </div>
              </div>

              {/* Slider 2: Coolant Flow Rate */}
              <div className="mb-6 bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <label htmlFor={flowRateInputId} className="text-slate-800 font-bold flex items-center gap-1.5">
                    <Droplet className="w-3.5 h-3.5 text-sky-500" />
                    Coolant Flow Rate
                  </label>
                  <span className="font-bold text-slate-950 px-2.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-xs font-mono">
                    {flowRate.toFixed(1)} L/min
                  </span>
                </div>
                <input
                  id={flowRateInputId}
                  type="range"
                  min={1.0}
                  max={12.0}
                  step={0.5}
                  value={flowRate}
                  onChange={(e) => setFlowRate(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1.5">
                  <span>1.0 LPM (Laminar)</span>
                  <span>6.0 LPM</span>
                  <span>12.0 LPM (Turbulent)</span>
                </div>
              </div>

              {/* Slider 3: Inlet Temp */}
              <div className="mb-6 bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <label htmlFor={inletTempInputId} className="text-slate-800 font-bold flex items-center gap-1.5">
                    <Thermometer className="w-3.5 h-3.5 text-sky-600" />
                    Coolant Inlet Temp (T_in)
                  </label>
                  <span className="font-bold text-slate-950 px-2.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-xs font-mono">
                    {inletTemp} °C
                  </span>
                </div>
                <input
                  id={inletTempInputId}
                  type="range"
                  min={15}
                  max={65}
                  step={1}
                  value={inletTemp}
                  onChange={(e) => setInletTemp(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1.5">
                  <span>15 °C (Chilled)</span>
                  <span>35 °C (Ambient)</span>
                  <span>65 °C (Automotive loop)</span>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-600 bg-sky-50/80 p-3 rounded-lg border border-sky-200 flex items-center gap-2 mt-2">
              <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />
              <span>Calculated with 50/50 Water-Glycol fluid properties at 1 atm.</span>
            </div>
          </div>

          {/* Telemetry Output Station (Right) - Pure Light Engineering Bench */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-md border-2 border-slate-200 flex flex-col justify-between relative overflow-hidden">
            {/* Top Engineering Telemetry Header */}
            <div>
              <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-200 mb-6 gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-600 animate-ping" />
                  <span className="text-xs uppercase font-mono tracking-wider font-extrabold text-slate-900 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-sky-600" />
                    CFD Solution Output
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono">
                  <span className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded border border-slate-200">
                    R_th: <strong className="text-sky-700 font-bold">{effectiveRth} °C/W</strong>
                  </span>
                  <span className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded border border-slate-200">
                    ΔP: <strong className="text-slate-900 font-bold">{pressureDrop} kPa</strong>
                  </span>
                </div>
              </div>

              {/* 3 Primary Metric Digital Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {/* Surface Temp Card */}
                <div className="p-4 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl shadow-xs">
                  <span className="block text-[11px] font-mono uppercase text-slate-500 mb-1">
                    Peak Surface Temp
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-mono">
                    {junctionTemp} <span className="text-base text-slate-400">°C</span>
                  </div>
                  <span
                    className={`text-[11px] font-mono mt-1.5 block font-semibold ${
                      junctionTemp < 80
                        ? "text-emerald-700"
                        : junctionTemp < 95
                        ? "text-amber-700"
                        : "text-red-600"
                    }`}
                  >
                    {junctionTemp < 80
                      ? "✓ Safe operating margin"
                      : junctionTemp < 95
                      ? "⚠ Approaching limit"
                      : "✕ Thermal throttling"}
                  </span>
                </div>

                {/* Outlet Temp Card */}
                <div className="p-4 bg-gradient-to-br from-sky-50/60 to-white border border-sky-200 rounded-xl shadow-xs">
                  <span className="block text-[11px] font-mono uppercase text-sky-800 mb-1">
                    Coolant Outlet (T_out)
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-sky-700 font-mono">
                    {outletTemp} <span className="text-base text-sky-400">°C</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-600 mt-1.5 block">
                    ΔT Rise: <strong className="text-sky-800">+{(outletTemp - inletTemp).toFixed(1)} °C</strong>
                  </span>
                </div>

                {/* Heat Flux Card */}
                <div className="p-4 bg-gradient-to-br from-amber-50/60 to-white border border-amber-200 rounded-xl shadow-xs">
                  <span className="block text-[11px] font-mono uppercase text-amber-800 mb-1">
                    Heat Flux Density
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-amber-700 font-mono">
                    {heatFlux} <span className="text-base text-amber-400">W/cm²</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-600 mt-1.5 block">
                    High heat concentration
                  </span>
                </div>
              </div>

              {/* Dynamic Fluid Channel Schematic Visualization */}
              <div className="mb-6 p-5 bg-slate-950 text-white rounded-xl border border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

                <div className="flex justify-between items-center text-xs font-mono mb-3 relative z-10">
                  <span className="flex items-center gap-1.5 text-sky-400">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                    Coolant In: {inletTemp}°C
                  </span>
                  <span className="text-slate-400 font-bold uppercase tracking-wider">
                    Serpentine Fluid Cavity
                  </span>
                  <span className="text-amber-400">
                    Coolant Out: {outletTemp}°C
                  </span>
                </div>

                {/* Animated Channel Cross-Section */}
                <div className="relative h-20 w-full rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center overflow-hidden">
                  {/* Dynamic Heat Core Glowing on Top */}
                  <div
                    className={`absolute top-0 inset-x-12 h-6 rounded-b-xl bg-gradient-to-b ${getHeatIntensityColor(
                      junctionTemp
                    )} opacity-80 blur-[6px] transition-colors duration-500 pointer-events-none`}
                  />

                  {/* Flow Path Vector with Animated Coolant Stream */}
                  <svg
                    viewBox="0 0 600 80"
                    className="w-full h-full pointer-events-none"
                    role="img"
                    aria-label="Liquid coolant velocity stream"
                  >
                    <path
                      d="M 20 40 Q 150 10 300 40 T 580 40"
                      fill="none"
                      stroke="#0284c7"
                      strokeWidth="12"
                      strokeLinecap="round"
                      opacity="0.3"
                    />
                    <path
                      d="M 20 40 Q 150 10 300 40 T 580 40"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="5"
                      strokeDasharray="16 20"
                      className="animate-flow-dash"
                      strokeLinecap="round"
                    />
                  </svg>

                  <div className="absolute z-10 flex items-center gap-2 px-3 py-1 bg-black/70 backdrop-blur-sm rounded border border-white/20 text-[11px] font-mono text-white">
                    <span>Q = {heatLoad} W</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-sky-400">{flowRate} LPM</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mt-2.5">
                  <span>Laminar Boundary Layer</span>
                  <span>Turbulent Core Mixing</span>
                  <span>Heat Evacuated</span>
                </div>
              </div>

              {/* Temperature Gradient Bar */}
              <div className="mb-2">
                <div className="flex justify-between text-xs font-mono text-slate-600 mb-1.5">
                  <span>Fluid In: {inletTemp}°C</span>
                  <span className="font-bold text-slate-900">ΔT Gradient</span>
                  <span>Peak Plate: {junctionTemp}°C</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-200 relative overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: "100%",
                      background:
                        "linear-gradient(90deg, #0284c7 0%, #38bdf8 35%, #f59e0b 70%, #ef4444 100%)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Consultation Fast-Track */}
            <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-600">
                Need proprietary custom channel geometry for your power electronics CAD file?
              </p>
              <Link
                href="/contact"
                className="shine-sweep inline-flex items-center gap-2 px-6 py-3 bg-slate-950 text-white hover:bg-sky-600 font-bold text-xs uppercase tracking-wider rounded-md transition-colors whitespace-nowrap shadow-sm group"
              >
                <span>Request Custom CFD Design</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
