import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Droplets, Wind, Settings2 } from "lucide-react";
import { SubpageCta } from "@/components/common/SubpageCta";

export const metadata = {
  title: "Thermal architecture starts with the application. | ITS Cooling",
  description:
    "ITS develops air-cooled and liquid-cooled solutions around heat load, geometry, operating environment and manufacturing requirements.",
};

export default function TechnologiesPage() {
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
                Cooling Technologies
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6">
              Thermal architecture starts with the application.
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
              ITS develops air-cooled and liquid-cooled solutions around heat load, geometry, operating environment and manufacturing requirements.
            </p>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white">
            <Image
              src="/images/manufacturing/thermal-engineering.png"
              alt="Cooling technologies at Innovative Thermal Solutions"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Detail Content Articles */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
        <div className="divide-y divide-slate-200">
          {/* 01 Liquid cooling */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">01</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Technology
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 uppercase tracking-tight mb-4 flex items-center gap-3">
                  <Droplets className="w-6 h-6 text-sky-600" />
                  Liquid cooling
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  Custom cold plates bring coolant close to concentrated heat sources. Flow paths, interfaces, fittings and joining strategy are considered together.
                </p>
                <Link
                  href="/technologies/liquid-cooling"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-sky-600 hover:text-sky-800"
                >
                  <span>Explore Liquid Cold Plates Deep-Dive</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-3 font-semibold">
                  Key Architectures
                </span>
                <ul className="space-y-3">
                  {[
                    "Pressed-in tube cold plates",
                    "Machined-channel cold plates",
                    "Application-specific flow routing",
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

          {/* 02 Air cooling */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">02</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Technology
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 uppercase tracking-tight mb-4 flex items-center gap-3">
                  <Wind className="w-6 h-6 text-sky-600" />
                  Air cooling
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  Passive and forced-air solutions balance surface area, pressure drop, thermal spreading, size and manufacturability.
                </p>
                <Link
                  href="/technologies/air-cooling"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-sky-600 hover:text-sky-800"
                >
                  <span>Explore Air-Cooled Heat Sinks Deep-Dive</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-3 font-semibold">
                  Manufacturing Methods
                </span>
                <ul className="space-y-3">
                  {[
                    "Extruded and bonded-fin heat sinks",
                    "Skived-fin and copper heat sinks",
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

          {/* 03 Engineering collaboration */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">03</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Process
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 uppercase tracking-tight mb-4 flex items-center gap-3">
                  <Settings2 className="w-6 h-6 text-sky-600" />
                  Engineering collaboration
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  The process begins with the thermal challenge—not a preselected product. Requirements are translated into a manufacturable architecture and verified against the agreed project plan.
                </p>
              </div>

              <div className="bg-sky-50/70 p-6 rounded-xl border border-sky-100 space-y-3 text-sm text-slate-700">
                <div className="font-mono text-xs uppercase tracking-wider text-sky-800 font-bold mb-2">
                  Our Engineering Commitments
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Direct communication with thermal specialists</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Comprehensive CFD & thermal simulations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Design for Manufacturability (DFM) feedback</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Inline CTA */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <SubpageCta
          eyebrow="Have an application to discuss?"
          title="Let's engineer the solution."
          description="Connect directly with our thermal engineering and CFD specialists in Guelph, Ontario to evaluate cooling architectures for your power electronics."
          primaryCtaText="Talk to a thermal engineer"
          primaryCtaHref="/contact"
        />
      </div>
    </main>
  );
}
