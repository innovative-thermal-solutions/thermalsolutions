import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Wind, ShieldCheck, Layers, Cpu } from "lucide-react";
import { SubpageCta } from "@/components/common/SubpageCta";

export const metadata = {
  title: "Custom air-cooled heat sinks. | ITS Cooling",
  description:
    "Extruded, bonded-fin, copper, skived-fin and embedded heat-pipe solutions for passive and forced-air systems.",
};

export default function HeatSinksPage() {
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
                Product Family
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6">
              Custom air-cooled heat sinks.
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
              Extruded, bonded-fin, copper, skived-fin and embedded heat-pipe solutions for passive and forced-air systems.
            </p>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white flex items-center justify-center p-6">
            <Image
              src="/images/manufacturing/thermal-engineering.png"
              alt="Custom air-cooled heat sinks"
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
          {/* 01 Product approaches */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">01</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Approaches
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Product approaches
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal">
                  ITS supports multiple construction methods to balance thermal performance, size, weight and cost.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-3 font-semibold">
                  Manufacturing Constructions
                </span>
                <ul className="space-y-3">
                  {["Extruded", "Bonded fin", "Copper", "Skived fin", "Embedded heat pipe"].map((item) => (
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

          {/* 02 Design considerations */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">02</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Considerations
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Design considerations
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  Airflow, fin spacing, orientation, available pressure, base spreading, mounting and interface requirements are evaluated together.
                </p>
              </div>
              <div className="bg-sky-50/70 p-6 rounded-xl border border-sky-100 text-sm text-slate-700 space-y-2">
                <span className="text-xs uppercase font-mono tracking-wider text-sky-800 font-bold block">
                  Fin Aspect Ratio
                </span>
                <p>
                  While standard extrusions are limited to ~8:1 fin ratios, bonded-fin and skived methods allow up to 30:1 ratios, dramatically increasing convective area in constrained cross-sections.
                </p>
              </div>
            </div>
          </article>

          {/* 03 Materials */}
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
                  Materials
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  Common references include aluminium grades and Cu-110. Material selection is confirmed from thermal, structural and manufacturing requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-3 font-semibold">
                  Comparative Matrix
                </span>
                <div className="space-y-2 text-xs font-mono text-slate-700">
                  <div className="flex justify-between p-2 bg-slate-50 rounded">
                    <span>Copper (Cu-110 ETP)</span>
                    <strong className="text-slate-900">390 W/(m·K) · 8.9 g/cm³</strong>
                  </div>
                  <div className="flex justify-between p-2 bg-slate-50 rounded">
                    <span>Aluminium (Al-6063)</span>
                    <strong className="text-slate-900">209 W/(m·K) · 2.7 g/cm³</strong>
                  </div>
                  <div className="flex justify-between p-2 bg-slate-50 rounded">
                    <span>Aluminium (Al-6061)</span>
                    <strong className="text-slate-900">167 W/(m·K) · High Strength</strong>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Inline CTA */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <SubpageCta
          eyebrow="Air Cooling Architecture?"
          title="Let's engineer the solution."
          description="Connect directly with our thermal and mechanical engineering team in Guelph, Ontario to calculate volumetric thermal resistance and fin aspect ratios."
          primaryCtaText="Talk to a thermal engineer"
          primaryCtaHref="/contact"
        />
      </div>
    </main>
  );
}
