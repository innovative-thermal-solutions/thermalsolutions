import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Droplets, Wind, Layers } from "lucide-react";
import { SubpageCta } from "@/components/common/SubpageCta";

export const metadata = {
  title: "Cooling hardware built around the heat source. | ITS Cooling",
  description:
    "Liquid cold plates, air-cooled heat sinks and integrated thermal assemblies engineered for demanding power electronics and harsh environments.",
};

export default function ProductsPage() {
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
                Thermal Products
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6">
              Cooling hardware built around the heat source.
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
              Liquid cold plates, air-cooled heat sinks and integrated thermal assemblies engineered for demanding power electronics and harsh environments.
            </p>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white flex items-center justify-center p-6">
            <Image
              src="/images/products/pressed-tube-cold-plate.png"
              alt="Thermal hardware by Innovative Thermal Solutions"
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
          {/* 01 Liquid cold plates */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">01</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Category
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 uppercase tracking-tight mb-4 flex items-center gap-3">
                  <Droplets className="w-6 h-6 text-sky-600" />
                  Liquid cold plates
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal">
                  Pressed-in tube and machined-channel architectures for high thermal loads and application-specific packaging.
                </p>
                <Link
                  href="/products/cold-plates"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-950 text-white hover:bg-sky-600 font-semibold text-xs uppercase tracking-wider rounded-sm transition-colors"
                >
                  <span>Explore Liquid Cold Plates</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="relative aspect-[4/3] bg-white rounded-xl border border-slate-200 p-6 flex items-center justify-center shadow-xs">
                <Image
                  src="/images/products/hypercool-cold-plate.png"
                  alt="Liquid cold plates"
                  width={380}
                  height={280}
                  className="object-contain max-h-[220px]"
                />
              </div>
            </div>
          </article>

          {/* 02 Air-cooled heat sinks */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">02</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Category
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 uppercase tracking-tight mb-4 flex items-center gap-3">
                  <Wind className="w-6 h-6 text-sky-600" />
                  Air-cooled heat sinks
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal">
                  Extruded, bonded-fin, copper, skived-fin and heat-pipe solutions for passive and forced-air systems.
                </p>
                <Link
                  href="/products/heat-sinks"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-950 text-white hover:bg-sky-600 font-semibold text-xs uppercase tracking-wider rounded-sm transition-colors"
                >
                  <span>Explore Air-Cooled Heat Sinks</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="relative aspect-[4/3] bg-white rounded-xl border border-slate-200 p-6 flex items-center justify-center shadow-xs">
                <Image
                  src="/images/manufacturing/thermal-engineering.png"
                  alt="Air-cooled heat sinks"
                  width={380}
                  height={280}
                  className="object-contain max-h-[220px]"
                />
              </div>
            </div>
          </article>

          {/* 03 Thermal assemblies */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">03</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Category
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 uppercase tracking-tight mb-4 flex items-center gap-3">
                  <Layers className="w-6 h-6 text-sky-600" />
                  Thermal assemblies
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal">
                  Integrated assemblies that connect engineering, machining, joining, interfaces and verification into a single turnkey solution.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/products/busbar"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 hover:border-slate-400 text-slate-800 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors bg-white"
                  >
                    <span>Laminated Busbars</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/products/heat-pipes"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 hover:border-slate-400 text-slate-800 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors bg-white"
                  >
                    <span>Embedded Heat Pipes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="relative aspect-[4/3] bg-white rounded-xl border border-slate-200 p-6 flex items-center justify-center shadow-xs">
                <Image
                  src="/images/manufacturing/precision-manufacturing.png"
                  alt="Thermal assemblies"
                  width={380}
                  height={280}
                  className="object-contain max-h-[220px]"
                />
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
          description="Connect directly with our thermal and mechanical engineering team in Guelph, Ontario to model your CAD envelope and optimize your cooling performance."
          primaryCtaText="Talk to a thermal engineer"
          primaryCtaHref="/contact"
        />
      </div>
    </main>
  );
}
