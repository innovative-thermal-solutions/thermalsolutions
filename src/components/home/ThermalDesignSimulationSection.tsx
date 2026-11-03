"use client";

import React from "react";
import Image from "next/image";
import { Cpu, Activity, Thermometer, Layers, Droplets } from "lucide-react";
import { ThermalSimulator } from "@/components/home/ThermalSimulator";

export function ThermalDesignSimulationSection() {
  return (
    <section id="thermal-simulation" className="relative w-full py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto">
        {/* Exact Section Heading from Design.pdf Page 2 */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold text-sky-700 px-2.5 py-0.5 bg-sky-50 border border-sky-300 rounded shadow-xs">
              04 / PHYSICS &amp; MODELING
            </span>
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold">
              Computational Fluid Dynamics
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-slate-950 uppercase leading-[1.02] mb-4">
            Thermal Design, Simulation &amp; Engineering
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Every cooling architecture starts with deep physics modeling: temperature distribution, fluid velocity profiles, pressure drops, and localized heat flux dissipation across power semiconductors.
          </p>
        </div>

        {/* Primary Simulation Hero Graphic (Matching Design.pdf Page 2 Image) */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-slate-50 border-2 border-slate-200 p-6 sm:p-10 mb-12 flex flex-col items-center justify-center shadow-sm">
          <div className="w-full flex justify-between items-center text-xs font-mono text-slate-500 mb-6 pb-3 border-b border-slate-200">
            <span className="flex items-center gap-2 font-bold text-sky-700">
              <Activity className="w-4 h-4" />
              <span>FINITE-ELEMENT CFD TEMPERATURE MAPPING</span>
            </span>
            <span className="hidden sm:inline text-slate-400">
              SolidWorks Flow Simulation &amp; SmartCFD
            </span>
          </div>

          <div className="relative w-full max-w-3xl aspect-[16/9] flex items-center justify-center">
            <Image
              src="/images/assets/analyze_thermal_simulation.png"
              alt="Thermal Design, Simulation & Engineering Finite-Element CFD Model"
              width={900}
              height={520}
              className="object-contain max-h-full drop-shadow-xl"
            />
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 mt-6 border-t border-slate-200 text-xs font-mono text-slate-600">
            <div>
              <span className="text-slate-400 block text-[9px] uppercase">Core Heat Flux:</span>
              <span className="font-bold text-slate-900">Up to 120 W/cm²</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[9px] uppercase">Peak Junction Temp:</span>
              <span className="font-bold text-sky-700">&lt; 85°C Regulated</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[9px] uppercase">Allowable ΔP:</span>
              <span className="font-bold text-slate-900">&lt; 35 kPa at 6 LPM</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[9px] uppercase">Coolant Medium:</span>
              <span className="font-bold text-slate-900">50/50 EGW / PGW</span>
            </div>
          </div>
        </div>

        {/* Retain the Interactive CFD Simulator Component Here */}
        <div className="mt-8">
          <ThermalSimulator />
        </div>
      </div>
    </section>
  );
}
