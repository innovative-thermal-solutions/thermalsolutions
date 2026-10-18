import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Wrench, Layers } from "lucide-react";
import { SubpageCta } from "@/components/common/SubpageCta";

export const metadata = {
  title: "Precision machining that enables thermal performance. | ITS Cooling",
  description:
    "Machining is used to create the internal and external geometry required by the thermal design—not as a standalone capability story.",
};

export default function CncMachiningPage() {
  return (
    <main id="main-content" className="w-full min-h-screen bg-slate-50 pt-28 pb-20">
      {/* Detail Hero */}
      <section className="relative w-full bg-gradient-to-br from-white via-slate-50 to-sky-50 border-b border-slate-200 py-16 lg:py-24 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold text-sky-600 px-2 py-0.5 bg-white border border-slate-200 rounded-sm">
                ITS
              </span>
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold">
                Manufacturing Capability
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6">
              Precision machining that enables thermal performance.
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
              Internal fluid channel routing, tight flatness tolerances, and multi-axis complex profiles milled directly from solid aluminium and copper billets.
            </p>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white flex items-center justify-center p-6">
            <Image
              src="/images/manufacturing/precision-manufacturing.png"
              alt="Precision CNC Machining at Innovative Thermal Solutions"
              width={480}
              height={360}
              priority
              className="object-contain max-h-[300px] drop-shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Detail Content Articles */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
        <div className="divide-y divide-slate-200">
          {/* 01 Geometry with a purpose */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">01</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Geometry
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Geometry with a purpose
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  Machining is used to create the internal and external geometry required by the thermal design—not as a standalone capability story.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs text-sm text-slate-600 space-y-2">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block font-semibold">
                  Purpose-Built Milling
                </span>
                <p>
                  Every pass of the cutter is optimized to create precise serpentine or parallel channel depths, pin-fin turbulence turbulators, and O-ring sealing grooves without excess material removal.
                </p>
              </div>
            </div>
          </article>

          {/* 02 Integrated route */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">02</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Coordination
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Integrated route
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  Machining strategy is coordinated with friction stir welding, assembly, inspection and downstream finishing so critical features remain controlled.
                </p>
              </div>
              <div className="bg-sky-50/70 p-6 rounded-xl border border-sky-100 text-sm text-slate-700 space-y-2">
                <span className="text-xs uppercase font-mono tracking-wider text-sky-800 font-bold block">
                  Fixture &amp; Datum Alignment
                </span>
                <p>
                  Unified datums are maintained from raw stock machining through FSW welding and final post-weld surface skim cutting, guaranteeing geometric alignment across tight bolt hole patterns.
                </p>
              </div>
            </div>
          </article>

          {/* 03 Production confidence */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">03</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Controls
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Production confidence
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  Workholding, in-process controls and documented inspection support repeatable hardware from prototype through managed production.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-3 font-semibold">
                  Facility Capabilities (Guelph, ON)
                </span>
                <ul className="space-y-2 text-xs font-mono text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>Haas VF-6 50-Taper High-Torque VMC</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>Multiple Haas VF-4SS Super-Speed 4-Axis VMCs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>Brown &amp; Sharpe CMM Coordinate Measuring Inspection</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Inline CTA */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <SubpageCta
          eyebrow="Precision Machining Requirements?"
          title="Let's engineer the solution."
          description="Connect directly with our manufacturing engineering team in Guelph, Ontario to review your 3D CAD models and tight geometric tolerance callouts."
          primaryCtaText="Talk to a manufacturing engineer"
          primaryCtaHref="/contact"
        />
      </div>
    </main>
  );
}
