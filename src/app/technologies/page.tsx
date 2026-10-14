import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, Cpu, Wrench, Layers, Wind } from "lucide-react";
import { FSW_ADVANTAGES } from "@/data/companyContent";

export const metadata = {
  title: "Core Technologies | FSW, Liquid & Air Cooling",
  description: "Advanced thermal management technologies including Friction Stir Welding (FSW), Liquid Cold Plates, Air Cooling, and CFD Simulation.",
};

export default function TechnologiesPage() {
  const technologies = [
    {
      slug: "friction-stir-welding",
      title: "FRICTION STIR WELDING (FSW)",
      category: "Solid-State Joining",
      subtitle: "High-integrity solid-state joining producing zero-porosity hermetic cold plates without melting the parent aluminum.",
      features: [
        "Zero-porosity leak-tight joints",
        "100% parent metal strength",
        "Uninterrupted thermal conductivity",
        "Minimal thermal distortion"
      ],
      image: "/images/assets/machining_photo.png",
      badge: "In-House Specialty"
    },
    {
      slug: "liquid-cooling",
      title: "LIQUID COOLING & HYPERCOOL",
      category: "High Heat Flux Dissipation",
      subtitle: "Custom internal channel geometries engineered for extreme heat flux in EV battery modules, inverters, and high-power radar.",
      features: [
        "Friction Stir Welded Aluminum",
        "HyperCool Series for Power Modules",
        "Copper Vacuum Brazed Assemblies",
        "Deep 5-Axis Gun Drilled Channels"
      ],
      image: "/images/assets/liquid_cooled/LFA0073.png",
      badge: "Up to 1450mm Length"
    },
    {
      slug: "air-cooling",
      title: "AIR-COOLED HEAT SINKS",
      category: "Convective Thermal Control",
      subtitle: "Precision engineered extruded, skived, and fabricated fin geometries optimized for natural and forced air convection.",
      features: [
        "High aspect-ratio extrusions (up to 24:1)",
        "Skived ultra-dense micro fins",
        "Bonded & fabricated tall fins",
        "Cold forged pin-fin arrays"
      ],
      image: "/images/assets/air_cooled/Skived.png",
      badge: "Optimized Fin Spacing"
    },
    {
      slug: "thermal-engineering",
      title: "THERMAL CFD & CAD DESIGN",
      category: "Predictive Engineering",
      subtitle: "Comprehensive fluid dynamics and thermal modeling using EATON SmartCFD (Qfin) and SolidWorks 3D CAD before cutting metal.",
      features: [
        "EATON SmartCFD (Qfin) Modeling",
        "Velocity & Temperature Profiling",
        "SolidWorks 3D Parametric CAD",
        "Static Structural FEA Simulation"
      ],
      image: "/images/assets/analyze_thermal_simulation.png",
      badge: "Slide 40 Design Tools"
    }
  ];

  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden pt-32 pb-28">
      {/* Background glow */}
      <div className="absolute top-20 left-1/4 w-[800px] h-[500px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <section className="px-6 lg:px-12 mb-20 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-teal-400 font-mono text-xs tracking-[0.25em] uppercase">
            Engineering Platforms & Technologies
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-8 max-w-5xl">
          ADVANCED THERMAL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-gray-400">
            TECHNOLOGIES.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl border-l-2 border-teal-400/50 pl-6 py-2">
          From solid-state Friction Stir Welding (FSW) to multi-phase embedded heat pipes and EATON SmartCFD simulation. We match the thermal transfer physics precisely to your application boundary conditions.
        </p>
      </section>

      {/* Main Technology Cards */}
      <section className="px-6 lg:px-12 mb-28 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {technologies.map((tech, idx) => (
          <Link
            key={tech.slug}
            href={`/technologies/${tech.slug}`}
            className="group block bg-[#020617] border border-white/10 hover:border-teal-500/50 transition-all duration-500 relative overflow-hidden shadow-xl"
          >
            {/* Visual Header */}
            <div className="w-full h-72 bg-[#020617] relative overflow-hidden border-b border-white/10">
              <Image
                src={tech.image}
                alt={tech.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-black/30" />

              <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 border border-white/15 text-[10px] font-mono text-teal-400 uppercase tracking-widest">
                Platform 0{idx + 1}
              </div>

              <div className="absolute top-4 right-4 bg-teal-500/10 px-3 py-1 border border-teal-500/30 text-[10px] font-mono text-teal-400 uppercase tracking-widest">
                {tech.badge}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-2">
                {tech.category}
              </span>

              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                {tech.title}
              </h2>

              <p className="text-gray-300 font-light text-sm leading-relaxed mb-6">
                {tech.subtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 pt-4 border-t border-white/10 text-xs font-mono text-gray-400">
                {tech.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 group-hover:text-white transition-colors">
                <span>View In-Depth Technical Specification</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Slide 27: 8 Technical Factors of Friction Stir Welding */}
      <section className="px-6 lg:px-12 mb-28 max-w-7xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-[#0F172A] to-[#020617] border border-white/15 p-8 lg:p-14 shadow-2xl">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-5 h-5 text-teal-400" />
              <span className="text-teal-400 font-mono text-xs uppercase tracking-widest">
                Slide 27 Deep-Dive • Solid-State Joining
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              WHY FRICTION STIR WELDING (FSW)?
            </h2>
            <p className="text-gray-300 font-light text-base leading-relaxed">
              Friction Stir Welding is a solid-state joining process using a non-consumable rotating tool to generate frictional heat and mechanical plastic deformation. The metal never reaches its melting point, yielding extraordinary mechanical and thermal advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FSW_ADVANTAGES.map((adv) => (
              <div
                key={adv.num}
                className="bg-black/60 border border-white/10 p-6 hover:border-teal-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-teal-400 font-mono text-xs font-bold block mb-3">
                    Factor {adv.num}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{adv.title}</h3>
                  <p className="text-xs text-gray-300 font-light leading-relaxed">{adv.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Machine photo banner */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-2">
                Slide 28 • Finished Cold Plate After CNC Machining
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                Face 1 & Face 2 Dual-Sided Precision Milling
              </h3>
              <p className="text-xs text-gray-400 font-mono leading-relaxed">
                After FSW solid-state joining, the cold plate is indexed into our 5-axis CNC machining center for final skim milling, O-ring gasket groove generation, and threaded mounting hole drilling.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href="/technologies/friction-stir-welding"
                className="px-6 py-3.5 bg-teal-400 text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
              >
                Explore FSW Technical Specs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 40: Leading Thermal Simulation & CAD Design Tools */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <div className="bg-[#020617] border border-white/10 p-8 lg:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <span className="text-teal-400 font-mono text-xs uppercase tracking-widest block mb-2">
                Slide 40 • Leading Edge Design Software
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                THERMAL SIMULATION & CAD TOOLS.
              </h2>
            </div>
            <p className="text-xs font-mono text-gray-400 max-w-md">
              Experts in using industry standard electronics cooling CFD & 3D solid modeling software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-black/60 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-400 font-mono font-bold text-xs">
                  CFD
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">EATON SmartCFD (Qfin)</h4>
                  <span className="text-[11px] font-mono text-teal-400">Computational Fluid Dynamics</span>
                </div>
              </div>
              <p className="text-sm text-gray-300 font-light leading-relaxed mb-4">
                Specialized hydrodynamic and heat transfer CFD software for electronic packages. Used to model fluid velocity profiles, pressure drop through micro-channels, and identify hotspot concentration before cutting metal.
              </p>
              <div className="text-xs font-mono text-gray-400 space-y-1">
                <p>• Velocity & Temperature distribution analysis</p>
                <p>• Iterative fin spacing optimization</p>
                <p>• Multi-phase heat transfer studies</p>
              </div>
            </div>

            <div className="p-6 bg-black/60 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400 font-mono font-bold text-xs">
                  CAD
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">SolidWorks 3D CAD</h4>
                  <span className="text-[11px] font-mono text-blue-400">Mechanical Design & FEA</span>
                </div>
              </div>
              <p className="text-sm text-gray-300 font-light leading-relaxed mb-4">
                Parametric mechanical solid modeling, assembly stack-ups, manufacturing drawing generation (GD&T), and static structural FEA to guarantee mechanical integrity under pressure and vibration.
              </p>
              <div className="text-xs font-mono text-gray-400 space-y-1">
                <p>• 3D assembly design & interference checking</p>
                <p>• Static structural stress simulation</p>
                <p>• CAM toolpath generation for 5-axis machines</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
