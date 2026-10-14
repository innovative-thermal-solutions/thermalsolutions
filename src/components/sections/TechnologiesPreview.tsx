"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function TechnologiesPreview() {
  const technologies = [
    {
      title: "FRICTION STIR WELDING",
      category: "Solid-State Hermetic Joining",
      description: "Zero-porosity leak-tight welds without melting the parent aluminum. Retains 100% thermal conductivity and parent metal strength.",
      href: "/technologies/friction-stir-welding",
      stat: "8 Technical Factors"
    },
    {
      title: "LIQUID COOLING & HYPERCOOL",
      category: "High Heat Flux Dissipation",
      description: "Custom internal channel geometries optimized via CFD for uniform velocity distribution across EV battery packs and IGBT modules.",
      href: "/technologies/liquid-cooling",
      stat: "Up to 57″ (1450mm)"
    },
    {
      title: "AIR-COOLED HEAT SINKS",
      category: "Convective Optimization",
      description: "Extruded, skived, and fabricated fin arrays designed to minimize fan noise while maximizing thermal dissipation surface area.",
      href: "/technologies/air-cooling",
      stat: "Up to 24:1 Aspect Ratio"
    },
    {
      title: "THERMAL CFD & 3D CAD",
      category: "Slide 40 Design Software",
      description: "EATON SmartCFD (Qfin) flow simulation and SolidWorks 3D mechanical CAD modeling to validate performance before cutting metal.",
      href: "/technologies/thermal-engineering",
      stat: "SmartCFD + SolidWorks"
    },
  ];

  return (
    <section className="relative w-full py-32 px-6 lg:px-12 bg-[#050B14] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-teal-400 font-mono text-xs tracking-[0.2em] uppercase mb-4 block">
              03 / Core Technologies Roster
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              ADVANCED COOLING CAPABILITIES.
            </h2>
          </div>
          <Link
            href="/technologies"
            className="group flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-teal-400 hover:text-white transition-colors"
          >
            <span>Explore All Technologies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <Link
              href={tech.href}
              key={tech.title}
              className="group block relative bg-[#020617] border border-white/10 p-8 hover:border-teal-500/50 hover:bg-[#070D18] transition-all duration-300 min-h-[340px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-gray-500 font-mono text-sm">0{index + 1}</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400/80 bg-teal-500/10 px-2 py-0.5 border border-teal-500/20">
                    {tech.stat}
                  </span>
                </div>

                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block mb-1">
                  {tech.category}
                </span>

                <h3 className="text-xl font-bold tracking-tight text-white mb-4 group-hover:text-teal-400 transition-colors">
                  {tech.title}
                </h3>

                <p className="text-gray-300 font-light leading-relaxed text-xs">
                  {tech.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-teal-400 font-mono text-xs uppercase tracking-widest mt-8 group-hover:translate-x-1 transition-transform">
                <span>View Technology</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
