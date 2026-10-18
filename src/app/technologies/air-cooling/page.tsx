import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Wind, Layers, Cpu } from "lucide-react";

export const metadata = {
  title: "Purpose-built heat sinks for reliable heat rejection. | ITS Cooling",
  description:
    "Passive and forced-air solutions balance surface area, pressure drop, thermal spreading, size and manufacturability for demanding electronics.",
};

export default function AirCoolingPage() {
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
                Air Cooling Technology
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6">
              Purpose-built heat sinks for reliable heat rejection.
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
              Balancing surface area, fin density, pressure drop, thermal spreading, and manufacturability for natural and forced convection environments.
            </p>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white flex items-center justify-center p-6">
            <Image
              src="/images/manufacturing/thermal-engineering.png"
              alt="Air-cooled heat sinks manufactured by Innovative Thermal Solutions"
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
          {/* 01 Air cooling architecture */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">01</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Architecture
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Air cooling architecture
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  Fin geometry, base thickness, airflow, spreading resistance and mechanical integration are balanced around the operating envelope.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs text-sm text-slate-600 space-y-2">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block font-semibold">
                  Airflow Optimization
                </span>
                <p>
                  Optimizing fin thickness and pitch minimizes system acoustic noise and fan power while ensuring adequate heat dissipation across the entire module.
                </p>
              </div>
            </div>
          </article>

          {/* 02 Available approaches */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">02</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Approaches
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Available approaches
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  ITS lists several air-cooled solution families for different thermal, size and production needs.
                </p>
                <Link
                  href="/products/heat-sinks"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-sky-600 hover:text-sky-800"
                >
                  <span>Explore Heat Sink Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-3 font-semibold">
                  Supported Methods
                </span>
                <ul className="space-y-3">
                  {[
                    "Extruded heat sinks",
                    "Bonded-fin heat sinks",
                    "Copper heat sinks",
                    "Skived-fin heat sinks",
                    "Embedded heat-pipe solutions",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <span className="w-5 h-5 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-xs shrink-0">
                        +
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          {/* 03 Common material references */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">03</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Materials
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Common material references
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  Material data sheets referenced by ITS include Al-1100, Al-6061, Al-6063, Al-6360 and Cu-110. Final selection is application-specific.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-3 font-semibold">
                  Standard Alloys
                </span>
                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                    <strong className="block text-slate-900">Al-6063-T5</strong>
                    <span className="text-slate-500">209 W/(m·K)</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                    <strong className="block text-slate-900">Al-6061-T6</strong>
                    <span className="text-slate-500">167 W/(m·K)</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                    <strong className="block text-slate-900">Al-1100</strong>
                    <span className="text-slate-500">Pure Aluminium Fins</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                    <strong className="block text-slate-900">Cu-110 ETP</strong>
                    <span className="text-slate-500">High Spreading</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Inline CTA */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-sky-400 block mb-2 font-semibold">
              Have an application to discuss?
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight">
              Let&#39;s engineer the solution.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-sky-500 text-slate-950 hover:bg-white font-bold text-xs uppercase tracking-[0.12em] rounded-sm transition-all whitespace-nowrap shadow-md group"
          >
            <span>Talk to a thermal engineer</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
