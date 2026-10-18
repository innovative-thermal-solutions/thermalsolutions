import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Cog, Cpu, Wrench, CheckCircle2, Layers, MapPin } from "lucide-react";
import { MACHINERY_EQUIPMENT, COMPANY_INFO } from "@/data/companyContent";
import { SubpageCta } from "@/components/common/SubpageCta";

export const metadata = {
  title: "Manufacturing Facility & Machinery | ITS Cooling",
  description:
    "Advanced North American thermal manufacturing plant in Guelph, Ontario featuring multi-axis CNC machining, deep drilling, and Friction Stir Welding (FSW).",
};

export default function FacilityPage() {
  return (
    <main id="main-content" className="w-full min-h-screen bg-slate-50 pt-28 pb-24">
      {/* Header */}
      <section className="relative w-full bg-gradient-to-br from-white via-slate-50 to-sky-50 border-b border-slate-200 py-16 lg:py-24 px-6 lg:px-12 overflow-hidden mb-16">
        <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold text-sky-600 px-2 py-0.5 bg-white border border-slate-200 rounded-sm">
              ITS
            </span>
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold">
              North American Manufacturing Facility
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6 max-w-4xl">
            Precision workshop. Advanced machinery.
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-3xl font-normal mb-8">
            Headquartered in Guelph, Ontario, Canada. Operating from an expanding 6,000 sq ft vertically integrated facility staffed by a skilled team of 27 engineers, CNC specialists, and technicians.
          </p>

          {/* Facility Spec Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white border border-slate-200 rounded-xl shadow-xs font-mono text-xs max-w-4xl">
            <div>
              <span className="text-slate-400 block uppercase tracking-wider mb-1">Facility Footprint</span>
              <span className="text-slate-950 font-bold text-base md:text-lg">6,000 Sq Ft</span>
            </div>
            <div>
              <span className="text-slate-400 block uppercase tracking-wider mb-1">Location</span>
              <span className="text-slate-950 font-bold text-base md:text-lg">Guelph, ON, Canada</span>
            </div>
            <div>
              <span className="text-slate-400 block uppercase tracking-wider mb-1">Expert Team</span>
              <span className="text-slate-950 font-bold text-base md:text-lg">27 Technicians &amp; Eng</span>
            </div>
            <div>
              <span className="text-slate-400 block uppercase tracking-wider mb-1">Quality Status</span>
              <span className="text-emerald-700 font-bold text-base md:text-lg">ISO 9001:2015</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Machinery Roster Grid */}
      <section className="px-6 lg:px-12 max-w-[1440px] mx-auto mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="text-sky-600 font-mono text-xs tracking-widest uppercase block mb-1 font-semibold">
              Capital Equipment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950 uppercase">
              Production Machinery Roster
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-500 max-w-md">
            Heavy-duty vertical machining centers, dedicated FSW machine, and coordinate inspection equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MACHINERY_EQUIPMENT.map((mach) => (
            <div
              key={mach.name}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-sky-300 transition-all"
            >
              <div>
                <div className="w-full aspect-[4/3] bg-slate-100 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center p-4">
                  <Image
                    src={mach.image}
                    alt={mach.name}
                    width={360}
                    height={270}
                    className="object-contain max-h-[220px]"
                  />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-sky-600 uppercase tracking-widest font-semibold">
                    {mach.axis}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                    {mach.model}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-950 uppercase mb-3">
                  {mach.name}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {mach.purpose}
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded border border-slate-200 text-xs font-mono text-slate-700">
                <strong className="text-slate-900 block mb-0.5">Specifications:</strong>
                {mach.specs}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inline CTA */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <SubpageCta
          eyebrow="Domestic North American Supply Chain"
          title="Schedule a technical facility visit"
          description="Tour our 290 Southgate Drive plant in Guelph, Ontario and review live friction stir welding and 5-axis CNC routing runs in person."
          primaryCtaText="Arrange Facility Visit"
          primaryCtaHref="/contact"
        />
      </div>
    </main>
  );
}
