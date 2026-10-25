import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Droplets, ShieldCheck, FileCheck, Layers } from "lucide-react";
import { SubpageCta } from "@/components/common/SubpageCta";

export const metadata = {
  title: "Custom liquid cold plates. | ITS Cooling",
  description:
    "Pressed-in tube and machined-channel architectures for high thermal loads and application-specific packaging.",
};

export default function ColdPlatesPage() {
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
              Custom liquid cold plates.
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
              Pressed-in tube and machined-channel architectures for high thermal loads and application-specific packaging.
            </p>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white flex items-center justify-center p-6">
            <Image
              src="/images/products/custom-machined-cold-plate.png"
              alt="Custom liquid cold plates"
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
          {/* 01 Design options */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">01</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Design
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Design options
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal">
                  The appropriate architecture is selected from the application inputs rather than a fixed catalogue.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-3 font-semibold">
                  Engineering Options
                </span>
                <ul className="space-y-3">
                  {[
                    "Pressed-in tube channels",
                    "Machined internal channels",
                    "Custom fitting and mounting geometry",
                    "Aluminium and copper material options",
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

          {/* 02 Engineering inputs */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">02</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Inputs
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Engineering inputs
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  Useful project inputs include heat-source locations, power dissipation, temperature limits, available envelope, coolant conditions, flow limits, pressure limits and expected production volume.
                </p>
              </div>
              <div className="bg-sky-50/70 p-6 rounded-xl border border-sky-100 text-sm text-slate-700 space-y-2">
                <span className="text-xs uppercase font-mono tracking-wider text-sky-800 font-bold block">
                  Thermal Sizing Process
                </span>
                <p>
                  Our Guelph engineering team reviews STEP models, component heat maps, and fluid boundary constraints to calculate pressure drop and thermal resistance curves.
                </p>
              </div>
            </div>
          </article>

          {/* 03 Manufacturing methods */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">03</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Methods
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Manufacturing methods
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-normal mb-6">
                  Depending on the selected architecture, routes can include CNC machining, tube integration, friction stir welding, assembly, inspection and leak verification.
                </p>
                <Link
                  href="/capabilities/friction-stir-welding"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase text-sky-600 hover:text-sky-800 font-bold"
                >
                  <span>Learn about Friction Stir Welding</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-3 font-semibold">
                  Manufacturing Route Steps
                </span>
                <div className="space-y-2 text-xs font-mono text-slate-700">
                  <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                    <strong>1. Multi-Axis CNC Milling:</strong> High-speed internal fluid passages
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                    <strong>2. Solid-State FSW:</strong> Defect-free joining without filler metal
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                    <strong>3. Post-Weld Milling:</strong> Flatness &lt; 0.05 mm for TIM interfaces
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                    <strong>4. Helium Testing:</strong> Leak detection to &lt; 1×10⁻⁸ mbar·L/s
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* 04 Technical documents */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">04</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Deliverables
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Technical documents
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  Application-specific drawings, models and verification documents are supplied through the project process. Public ratings are intentionally not invented.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex items-center gap-4">
                <FileCheck className="w-10 h-10 text-emerald-600 shrink-0" />
                <div className="text-xs font-mono text-slate-600">
                  <span className="font-bold text-slate-900 block mb-1">Standard Package Includes:</span>
                  Full 3D CAD (.STEP / .IGES), 2D GD&amp;T drawings, CMM dimension report, and Certificate of Conformance (C of C).
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
          description="Connect directly with our thermal and mechanical engineering team in Guelph, Ontario to model your liquid cold plate CAD envelope."
          primaryCtaText="Talk to a thermal engineer"
          primaryCtaHref="/contact"
        />
      </div>
    </main>
  );
}
