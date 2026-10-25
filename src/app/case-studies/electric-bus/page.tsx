import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { CASE_STUDIES } from "@/data/companyContent";

export const metadata = {
  title: "Electric Bus Aluminum Cold Plate Case Study | 57″ × 24″ | ITS Cooling",
  description:
    "Large-format Friction Stir Welded aluminum cold plate (57″ × 24″ / 1450 × 610 mm) for EV bus battery cooling with uniform velocity distribution.",
};

export default function ElectricBusCaseStudyPage() {
  const study = CASE_STUDIES.find((c) => c.slug === "electric-bus");

  return (
    <main id="main-content" className="w-full min-h-screen bg-slate-50 pt-28 pb-24">
      <section className="px-6 lg:px-12 mb-16 max-w-7xl mx-auto">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 hover:text-sky-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Case Studies</span>
        </Link>

        <span className="text-sky-600 font-mono text-xs tracking-[0.25em] uppercase block mb-3 font-semibold">
          EV &amp; Battery Thermal Management Case Study
        </span>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6 max-w-4xl">
          Electric bus cold plates: 57″ × 24″ battery cooling.
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl p-6 bg-white border border-slate-200 rounded-xl shadow-xs font-mono text-xs mb-12">
          <div>
            <span className="text-slate-400 block uppercase mb-1">Imperial Dimensions</span>
            <span className="text-2xl font-bold text-sky-600">57″ × 24″ × 0.6″</span>
          </div>
          <div>
            <span className="text-slate-400 block uppercase mb-1">Metric Dimensions</span>
            <span className="text-2xl font-bold text-slate-950">1450 × 610 × 15 mm</span>
          </div>
        </div>

        {/* Hydrodynamic Principle */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 shadow-xs">
          <div>
            <span className="text-xs font-mono text-sky-600 uppercase tracking-widest block mb-2 font-semibold">
              Hydrodynamic Principle
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 uppercase mb-4">
              Uniform Velocity Distribution Leads to Uniform Temperature Distribution
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              By carefully profiling the header manifold taper and channel bifurcation geometry, ITS engineers achieved less than 2.8°C thermal variance across the entire 1.45-meter active span, protecting battery cell health and preventing hot spots.
            </p>
            <div className="space-y-2 text-xs font-mono text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Solid-state FSW closure eliminates leak paths</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>CNC machined from monolithic 6061-T6 billet</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center p-6">
            <Image
              src="/images/products/custom-machined-cold-plate.png"
              alt="Electric Bus Cold Plate"
              width={420}
              height={300}
              className="object-contain max-h-[260px] drop-shadow-sm"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-1">
              Developing a large-format EV battery cooling plate?
            </h3>
            <p className="text-slate-300 text-sm">
              Connect with our Guelph engineering team to review large bed CNC envelope capabilities.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-sky-500 text-slate-950 hover:bg-white font-bold text-xs uppercase tracking-wider rounded-sm transition-colors whitespace-nowrap"
          >
            Consult an Engineer →
          </Link>
        </div>
      </section>
    </main>
  );
}
