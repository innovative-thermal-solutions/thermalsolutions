import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, TrendingDown, Layers, Zap } from "lucide-react";
import { CASE_STUDIES } from "@/data/companyContent";
import { SubpageCta } from "@/components/common/SubpageCta";

export const metadata = {
  title: "Case Studies | Real Thermal Engineering Results | ITS Cooling",
  description:
    "Documented engineering success stories from 20°C amplifier peak reduction to 57-inch electric bus cold plates and multi-zone AC/DC heatsinks.",
};

export default function CaseStudiesPage() {
  return (
    <main id="main-content" className="w-full min-h-screen bg-slate-50 pt-28 pb-24">
      {/* Header */}
      <section className="relative w-full bg-gradient-to-br from-white via-slate-50 to-sky-50 border-b border-slate-200 py-16 lg:py-24 px-6 lg:px-12 overflow-hidden mb-16">
        <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold text-sky-600 px-2 py-0.5 bg-white border border-slate-200 rounded-sm">
              ITS
            </span>
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold">
              Validated Engineering Deployments
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6 max-w-4xl">
            Proven thermal engineering results.
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-3xl font-normal mb-8">
            Documented engineering performance data from customer deployments. See exact boundary conditions, footprint dimensions, wattage loads, and measured temperature reductions.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white border border-slate-200 rounded-xl shadow-xs font-mono text-xs max-w-4xl">
            <div>
              <span className="text-slate-400 block uppercase mb-1">Peak Temp Reduction</span>
              <span className="text-sky-600 font-bold text-lg md:text-xl">-20°C</span>
            </div>
            <div>
              <span className="text-slate-400 block uppercase mb-1">Max Plate Span</span>
              <span className="text-slate-950 font-bold text-lg md:text-xl">57″ (1450 mm)</span>
            </div>
            <div>
              <span className="text-slate-400 block uppercase mb-1">Handled AC Load</span>
              <span className="text-sky-600 font-bold text-lg md:text-xl">82.3W (6X)</span>
            </div>
            <div>
              <span className="text-slate-400 block uppercase mb-1">Joint Leak Tightness</span>
              <span className="text-emerald-700 font-bold text-lg md:text-xl">100% Zero-Leak</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Cards */}
      <section className="px-6 lg:px-12 max-w-[1440px] mx-auto space-y-12">
        {CASE_STUDIES.map((cs, idx) => (
          <div
            key={cs.slug}
            className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-12 shadow-xs hover:shadow-md transition-all flex flex-col lg:flex-row gap-10 items-center justify-between"
          >
            <div className="lg:w-7/12">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs font-bold text-sky-600 px-2 py-0.5 bg-sky-50 rounded border border-sky-200">
                  0{idx + 1}
                </span>
                <span className="text-xs uppercase font-mono tracking-widest text-slate-500">
                  {cs.industry}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 uppercase mb-3">
                {cs.title}
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {cs.summary}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {cs.specifications.slice(0, 3).map((spec) => (
                  <div key={spec.label} className="p-3 bg-slate-50 rounded border border-slate-200 text-xs font-mono">
                    <span className="text-slate-400 block mb-0.5">{spec.label}</span>
                    <strong className="text-slate-900">{spec.value}</strong>
                  </div>
                ))}
              </div>

              <Link
                href={`/case-studies/${cs.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-950 text-white hover:bg-sky-600 font-semibold text-xs uppercase tracking-wider rounded-sm transition-colors shadow-xs"
              >
                <span>Read Full Technical Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:w-5/12 w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-50 border border-slate-200 relative flex items-center justify-center p-6">
              <Image
                src={cs.image}
                alt={cs.title}
                width={400}
                height={300}
                className="object-contain max-h-[240px] drop-shadow-sm"
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/95 rounded-full border border-slate-200 text-xs font-mono font-bold text-sky-700 shadow-xs">
                {cs.heroMetric}
              </div>
            </div>
          </div>
        ))}

        {/* Subpage CTA */}
        <SubpageCta
          eyebrow="Have a Similar Thermal Challenge?"
          title="Let's engineer the solution."
          description="Bring your design parameters to our Guelph engineering team. We'll run comparative CFD models and prototype custom cold plates."
          primaryCtaText="Discuss Your Project"
          primaryCtaHref="/contact"
        />
      </section>
    </main>
  );
}
