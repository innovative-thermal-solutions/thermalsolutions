import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { CASE_STUDIES } from "@/data/companyContent";

export const metadata = {
  title: "Power Supply Heat Sink Case Study | AC & DC Sides | ITS Cooling",
  description:
    "Detailed case study on optimizing fin spacing to balance dual AC/DC loads: 12X DC modules (24W), 32W peak DC, and 6X AC modules (82.3W).",
};

export default function PowerSupplyCaseStudyPage() {
  const study = CASE_STUDIES.find((c) => c.slug === "power-supply");

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
          Power Conversion &amp; Industrial Equipment Case Study
        </span>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6 max-w-4xl">
          Power supply heat sink: dual AC &amp; DC sides.
        </h1>

        <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-3xl font-normal mb-8">
          Managing asymmetric heat dissipation loads across multiple zones on a single shared heatsink while optimizing fin spacing for maximum thermal performance and lower acoustic fan noise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-xs font-mono">
            <span className="text-sky-600 text-xs block mb-1 font-semibold">12X DC Power Modules</span>
            <div className="text-3xl font-bold text-slate-950 mb-1">24W <span className="text-sm font-normal text-slate-500">Steady State</span></div>
            <p className="text-xs text-slate-500">Footprint: 2.51” × 0.9” (12 units arrayed)</p>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-xs font-mono">
            <span className="text-amber-600 text-xs block mb-1 font-semibold">Peak DC Power Module</span>
            <div className="text-3xl font-bold text-slate-950 mb-1">32W <span className="text-sm font-normal text-slate-500">Peak Load</span></div>
            <p className="text-xs text-slate-500">Footprint: 1.89” × 0.9” (High-density zone)</p>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-xs font-mono">
            <span className="text-emerald-700 text-xs block mb-1 font-semibold">6X AC Power Modules</span>
            <div className="text-3xl font-bold text-slate-950 mb-1">82.3W <span className="text-sm font-normal text-slate-500">AC Section</span></div>
            <p className="text-xs text-slate-500">Footprint: 3.86” × 1.34” (6 units arrayed)</p>
          </div>
        </div>

        {/* Challenge & Approach */}
        {study && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                The Engineering Challenge
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {study.challenge}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                Engineering Approach &amp; Results
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                {study.engineeringApproach}
              </p>
              <ul className="space-y-2">
                {study.results.map((r) => (
                  <li key={r} className="flex items-center gap-2 text-xs font-mono text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-1">
              Have a similar power supply thermal challenge?
            </h3>
            <p className="text-slate-300 text-sm">
              Our engineering team can evaluate your exact heat maps and model custom heatsink geometry.
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
