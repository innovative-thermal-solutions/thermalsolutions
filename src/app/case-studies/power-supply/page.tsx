import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { CASE_STUDIES } from "@/data/companyContent";

export const metadata = {
  title: "Power Supply Heat Sink Case Study | AC & DC Sides",
  description: "Detailed case study on optimizing fin spacing to balance dual AC/DC loads: 12X DC modules (24W), 32W peak DC, and 6X AC modules (82.3W).",
};

export default function PowerSupplyCaseStudyPage() {
  const study = CASE_STUDIES.find((c) => c.slug === "power-supply");

  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden pt-32 pb-28">
      <div className="absolute top-20 left-10 w-[700px] h-[500px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

      <section className="px-6 lg:px-12 mb-16 max-w-7xl mx-auto relative z-10">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-teal-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Case Studies</span>
        </Link>

        <span className="text-teal-400 font-mono text-xs tracking-[0.25em] uppercase block mb-4">
          Slide 18–21 • Power Conversion / Automation
        </span>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-8 max-w-5xl">
          POWER SUPPLY HEAT SINK: <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-gray-400">
            DUAL AC & DC SIDES.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl border-l-2 border-teal-400/50 pl-6 py-2 mb-10">
          Managing asymmetric heat dissipation loads across multiple zones on a single shared heatsink while optimizing fin spacing for maximum thermal performance and lower acoustic fan noise.
        </p>
      </section>

      {/* Slide 19: Exact Dissipation Loads */}
      <section className="px-6 lg:px-12 mb-24 max-w-7xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
          Slide 19 • Asymmetric Heat Dissipation Load
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#020617] border border-white/10 font-mono">
            <span className="text-teal-400 text-xs block mb-1">12X DC Power Modules</span>
            <div className="text-3xl font-bold text-white mb-2">24W <span className="text-sm font-normal text-gray-400">Steady State</span></div>
            <p className="text-xs text-gray-400">Footprint: 2.51” × 0.9” (12 units arrayed)</p>
          </div>

          <div className="p-6 bg-[#020617] border border-white/10 font-mono">
            <span className="text-amber-400 text-xs block mb-1">Peak DC Power Module</span>
            <div className="text-3xl font-bold text-white mb-2">32W <span className="text-sm font-normal text-gray-400">Peak Load</span></div>
            <p className="text-xs text-gray-400">Footprint: 1.89” × 0.9” (High-density zone)</p>
          </div>

          <div className="p-6 bg-[#020617] border border-white/10 font-mono">
            <span className="text-blue-400 text-xs block mb-1">6X AC Power Modules</span>
            <div className="text-3xl font-bold text-white mb-2">82.3W <span className="text-sm font-normal text-gray-400">Heat Load Each</span></div>
            <p className="text-xs text-gray-400">Footprint: 3.30” × 7.84” (Heavy wattage)</p>
          </div>
        </div>
      </section>

      {/* Slide 20: Optimization */}
      <section className="px-6 lg:px-12 mb-28 max-w-7xl mx-auto relative z-10">
        <div className="bg-[#020617] border border-white/10 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-2">
              Slide 20 • Engineering Principle
            </span>
            <h3 className="text-3xl font-bold text-white mb-4">
              Fin Spacing Optimization for Lower Noise & Peak Convection
            </h3>
            <p className="text-gray-300 font-light text-base leading-relaxed mb-6">
              A heatsink that is overly dense creates severe flow choking and requires loud, high-RPM cooling fans. By executing CFD parametric sweeps, ITS established the ideal balance between fin pitch, height, and air velocity, preventing thermal buildup while lowering acoustic noise.
            </p>
            <div className="space-y-2 text-xs font-mono text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Simultaneous thermal balance across 82.3W AC and 24W DC zones</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Reduced acoustic decibels without exceeding junction limits</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-video w-full bg-[#0F172A] border border-white/10 overflow-hidden">
            <Image
              src="/images/image73.png"
              alt="Power Supply Heat Sink Thermal Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto relative z-10 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-teal-400 text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
        >
          <span>Request Custom Power Supply Heat Sink Review</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
