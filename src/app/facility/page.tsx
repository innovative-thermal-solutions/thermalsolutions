import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Cog, Cpu, Wrench, CheckCircle2, Layers } from "lucide-react";
import { MACHINERY_EQUIPMENT, COMPANY_INFO } from "@/data/companyContent";

export const metadata = {
  title: "Manufacturing Facility & Machinery",
  description: "Advanced North American thermal manufacturing plant in Guelph, Ontario featuring 5-axis CNC machining, deep drilling, and Friction Stir Welding (FSW).",
};

export default function FacilityPage() {
  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden pt-32 pb-28">
      {/* Background glow */}
      <div className="absolute top-20 left-10 w-[700px] h-[500px] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <section className="px-6 lg:px-12 mb-20 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-teal-400 font-mono text-xs tracking-[0.25em] uppercase">
            Slide 35–38 • North American Manufacturing Facility
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-8 max-w-5xl">
          PRECISION WORKSHOP. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-gray-400">
            ADVANCED MACHINERY.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl border-l-2 border-teal-400/50 pl-6 py-2 mb-10">
          Headquartered in Guelph, Ontario, Canada. Operating from an expanding 6,000 sq ft vertically integrated facility staffed by a skilled team of 27 engineers, CNC specialists, and technicians.
        </p>

        {/* Facility Spec Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#020617] border border-white/10 font-mono text-xs">
          <div>
            <span className="text-gray-500 block uppercase tracking-wider mb-1">Facility Footprint</span>
            <span className="text-white font-bold text-base md:text-lg">6,000 Sq Ft</span>
          </div>
          <div>
            <span className="text-gray-500 block uppercase tracking-wider mb-1">Location</span>
            <span className="text-white font-bold text-base md:text-lg">Guelph, ON, Canada</span>
          </div>
          <div>
            <span className="text-gray-500 block uppercase tracking-wider mb-1">Expert Team</span>
            <span className="text-white font-bold text-base md:text-lg">27 Technicians & Engineers</span>
          </div>
          <div>
            <span className="text-gray-500 block uppercase tracking-wider mb-1">Quality Status</span>
            <span className="text-teal-400 font-bold text-base md:text-lg">ISO 9001:2015</span>
          </div>
        </div>
      </section>

      {/* Hero Facility Showcase Banner */}
      <section className="px-6 lg:px-12 mb-28 max-w-7xl mx-auto relative z-10">
        <div className="w-full h-[450px] lg:h-[620px] bg-[#020617] border border-white/15 relative overflow-hidden group shadow-2xl">
          <Image
            src="/images/assets/img_0006.jpg"
            alt="ITS Guelph Manufacturing Facility"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          {/* Overlay info badges */}
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 z-20">
            <div className="bg-black/85 backdrop-blur-md p-6 border border-white/10 max-w-xl">
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-2">
                Vertically Integrated Manufacturing
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                From Raw Billet to Tested Thermal Assemblies
              </h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                We control raw material selection, CNC program simulation, 5-axis milling, Friction Stir Welding, and leak verification in-house to protect schedules and guarantee thermal specs.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-teal-500/10 backdrop-blur-md border border-teal-500/30 px-5 py-3 text-teal-400 text-xs font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Jan 17, 2021 • North American Made</span>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Directory Grid */}
      <section className="px-6 lg:px-12 mb-28 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-teal-400 font-mono text-xs uppercase tracking-widest block mb-2">
              Slide 36–37 • Workshop Machinery Roster
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              CORE PRODUCTION CENTERS.
            </h2>
          </div>
          <p className="text-sm font-mono text-gray-400 max-w-md">
            Heavy-duty 5-axis milling centers, dedicated Friction Stir Welding stations, and high-precision deep gun drilling machines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MACHINERY_EQUIPMENT.map((mach, idx) => (
            <div
              key={mach.name}
              className="bg-[#020617] border border-white/10 p-8 flex flex-col justify-between group hover:border-teal-500/50 hover:bg-[#070D18] transition-all duration-300 relative overflow-hidden"
            >
              <div>
                {/* Photo container */}
                <div className="w-full aspect-[4/3] bg-[#0F172A] border border-white/10 mb-6 relative overflow-hidden">
                  <Image
                    src={mach.image}
                    alt={mach.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 bg-black/70 px-2.5 py-1 border border-white/10 text-[10px] font-mono text-teal-400 uppercase tracking-widest">
                    Machine 0{idx + 1}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-gray-300">
                    <span className="text-teal-400 font-semibold">{mach.axis}</span>
                  </div>
                </div>

                {/* Details */}
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">
                  {mach.name}
                </h3>
                <span className="text-xs font-mono text-gray-400 block mb-4 uppercase tracking-wider">
                  {mach.type}
                </span>

                <div className="mb-4 pb-4 border-b border-white/10">
                  <span className="text-[10px] font-mono uppercase text-gray-500 block mb-1">Key Specifications</span>
                  <p className="text-xs font-mono text-gray-300 leading-relaxed">{mach.specs}</p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-gray-500 block mb-1">Production Purpose</span>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">{mach.purpose}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-teal-400">
                <span>Active in Guelph Facility</span>
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Slide 38 Capabilities Spotlight: 5-Axis Deep Drilling & In-House FSW */}
      <section className="px-6 lg:px-12 mb-28 max-w-7xl mx-auto relative z-10">
        <div className="bg-[#020617] border border-white/15 p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-teal-400 font-mono text-xs uppercase tracking-widest block mb-3">
                Slide 38 Spotlight • Specialized CNC Capabilities
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                5-AXIS DEEP DRILLING & FRICTION STIR WELDING.
              </h2>
              <p className="text-gray-300 font-light text-base leading-relaxed mb-6">
                Our workshop is outfitted for precision deep hole drilling operations in simultaneous 5-axis CNC machining centers. This enables monolithic liquid cold plates with complex intersecting coolant galleries bored directly into solid aluminum billet, eliminating external weld joints.
              </p>

              <div className="space-y-4 border-l-2 border-teal-400/60 pl-6 py-2 mb-8">
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">Multi-Angle Gun Drilling</h4>
                  <p className="text-xs text-gray-400 font-mono">
                    High depth-to-diameter ratio bores with micron-level straightness for high-flow cooling channels.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">Solid-State FSW Hermetic Sealing</h4>
                  <p className="text-xs text-gray-400 font-mono">
                    Zero-porosity friction stir welding seals manifold covers and internal fins with 100% parent-metal strength.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">100% Pressure & Helium Testing</h4>
                  <p className="text-xs text-gray-400 font-mono">
                    Every manufactured cold plate undergoes pressure cycle testing and helium mass spectrometer leak verification.
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-teal-400 transition-colors"
              >
                <span>Request Facility Tour / Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative aspect-square w-full bg-[#0F172A] border border-white/20 overflow-hidden group">
              <Image
                src="/images/assets/precision_milled_plate.png"
                alt="5-Axis Deep Drilling and Machining"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-xs font-mono text-gray-300">
                <span className="text-teal-400 block mb-1">Precision-Milled Aerospace Chassis Plate</span>
                <span>Manufactured on our 5-axis machining center with deep bore channels and tight GD&T tolerances.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Advantage & Scalability (Slide 41 & 44) */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-400 font-mono text-xs uppercase tracking-widest block mb-2">
            Slide 41 & 44 • Strategic Model
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            NORTH AMERICAN PRODUCTION + GLOBAL SCALE.
          </h2>
          <p className="text-gray-400 font-light text-base">
            How ITS Cooling delivers high-mix rapid prototypes domestically and cost-competitive high-volume programs globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-[#020617] border border-white/10 hover:border-teal-500/40 transition-colors">
            <Cog className="w-8 h-8 text-teal-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">North American Precision</h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              Locally manufactured in Guelph, Ontario. Guarantees fast lead times, direct access to engineering staff, and controlled IP security under Canadian CGP regulations.
            </p>
          </div>

          <div className="p-8 bg-[#020617] border border-white/10 hover:border-teal-500/40 transition-colors">
            <Cpu className="w-8 h-8 text-teal-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">In-House FSW Specialty</h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              Dedicated Friction Stir Welding station inside our plant. We eliminate the quality risks of outsourcing critical joining steps to third-party vendors.
            </p>
          </div>

          <div className="p-8 bg-[#020617] border border-white/10 hover:border-teal-500/40 transition-colors">
            <Layers className="w-8 h-8 text-teal-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">Trusted Asian Supplier Network</h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              For ultra-high-volume automotive and mass electronic runs, we partner with vetted Asian suppliers to offer aggressive high-volume pricing backed by domestic Canadian QC inspection.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
