import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Droplets, Layers, ShieldCheck, Cpu } from "lucide-react";
import { SubpageCta } from "@/components/common/SubpageCta";

export const metadata = {
  title: "Liquid cooling for high-power electronics. | ITS Cooling",
  description:
    "Custom liquid cold plates bring coolant close to concentrated heat sources. Flow paths, interfaces, fittings and joining strategy are considered together.",
};

export default function LiquidCoolingPage() {
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
                Liquid Cooling Technology
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6">
              Liquid cooling for high-power electronics.
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
              Direct-to-chip and surface cold plates engineered to transport extreme thermal loads away from sensitive power semiconductors and battery packs.
            </p>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white flex items-center justify-center p-6">
            <Image
              src="/images/products/custom-machined-cold-plate.png"
              alt="Liquid cold plate manufactured by Innovative Thermal Solutions"
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
          {/* 01 The cooling challenge */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">01</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Challenge
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  The cooling challenge
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  Liquid cooling moves heat from a component into a controlled fluid circuit when air cooling alone cannot meet the thermal requirement.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs text-sm text-slate-600 space-y-2">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block font-semibold">
                  Why Liquid?
                </span>
                <p>
                  Water and glycol-based coolants provide up to 25x higher heat transfer coefficients than air, permitting compact envelopes for high-density power modules.
                </p>
              </div>
            </div>
          </article>

          {/* 02 Cold plate architecture */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">02</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Architecture
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Cold plate architecture
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  ITS develops pressed-in tube and machined-channel cold plates. The selection depends on performance, cost, size, flow routing and manufacturing needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-3 font-semibold">
                  Available Formats
                </span>
                <ul className="space-y-3">
                  {[
                    "Pressed-in tube architecture",
                    "Hypercool machined flow paths",
                    "Custom overall geometry and mounting features",
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

          {/* 03 Performance considerations */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">03</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Inputs
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Performance considerations
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  Design inputs commonly include heat load, component map, allowable temperatures, coolant, flow rate, pressure-drop target, inlet temperature and space constraints.
                </p>
              </div>
              <div className="bg-sky-50/70 p-6 rounded-xl border border-sky-100 text-sm text-slate-700 space-y-2">
                <span className="text-xs uppercase font-mono tracking-wider text-sky-800 font-bold block">
                  Project Validation
                </span>
                <p>
                  Computational Fluid Dynamics (CFD) is performed concurrently to predict pressure drop (ΔP) and temperature uniformity across multiple discrete semiconductor dies.
                </p>
              </div>
            </div>
          </article>

          {/* 04 Materials and interfaces */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">04</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Materials
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Materials and interfaces
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  Common materials listed by ITS include Al-6061, Al-6063, Al-6360 and Cu-110. Connector type, tube diameter, surface requirements and joining method are confirmed for the application.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-3 font-semibold">
                  Alloy Specifications
                </span>
                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                    <strong className="block text-slate-900">Al-6061-T6</strong>
                    <span className="text-slate-500">Structural & FSW</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                    <strong className="block text-slate-900">Al-6063-T5</strong>
                    <span className="text-slate-500">High Conductivity</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                    <strong className="block text-slate-900">Cu-110 ETP</strong>
                    <span className="text-slate-500">390 W/(m·K)</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                    <strong className="block text-slate-900">Stainless Tubes</strong>
                    <span className="text-slate-500">High-Purity / DI Water</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* 05 Manufactured around the thermal design */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">05</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Integration
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Manufactured around the thermal design
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  CNC machining, friction stir welding, assembly and verification are integrated so the finished hardware reflects the intended thermal architecture.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs uppercase font-mono tracking-wider text-sky-700 block mb-2 font-bold">
                  Zero-Leakage Quality
                </span>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  100% of finished liquid cold plates undergo pressure proofing and helium mass spectrometer leak inspection prior to customer sign-off.
                </p>
                <Link
                  href="/capabilities/friction-stir-welding"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase text-sky-600 hover:text-sky-800 font-bold transition-colors"
                >
                  <span>Explore FSW Solid-State Joining</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Inline CTA */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <SubpageCta
          eyebrow="Liquid Cooling Project?"
          title="Let's engineer the solution."
          description="Connect directly with our thermal and mechanical engineering team in Guelph, Ontario to model your liquid cold plate CAD envelope."
          primaryCtaText="Talk to a thermal engineer"
          primaryCtaHref="/contact"
        />
      </div>
    </main>
  );
}
