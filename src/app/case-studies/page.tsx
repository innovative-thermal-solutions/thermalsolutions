import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, TrendingDown, Layers, Zap } from "lucide-react";
import { CASE_STUDIES } from "@/data/companyContent";

export const metadata = {
  title: "Case Studies | Real Thermal Engineering Results",
  description: "Proven thermal success stories from 20°C amplifier peak reduction to 57-inch electric bus cold plates and multi-zone AC/DC heatsinks.",
};

export default function CaseStudiesPage() {
  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden pt-32 pb-28">
      {/* Background glow */}
      <div className="absolute top-20 right-10 w-[800px] h-[500px] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <section className="px-6 lg:px-12 mb-20 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-teal-400 font-mono text-xs tracking-[0.25em] uppercase">
            Slide 15–21, 30–33 • Validated Engineering Results
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-8 max-w-5xl">
          PROVEN THERMAL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-gray-400">
            ENGINEERING RESULTS.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl border-l-2 border-teal-400/50 pl-6 py-2 mb-10">
          Documented engineering performance data from customer deployments. See exact boundary conditions, footprint dimensions, wattage loads, and measured temperature reductions.
        </p>

        {/* Quick Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#020617] border border-white/10 font-mono text-xs">
          <div>
            <span className="text-gray-500 block uppercase mb-1">Peak Temp Reduction</span>
            <span className="text-teal-400 font-bold text-lg md:text-xl">-20°C</span>
          </div>
          <div>
            <span className="text-gray-500 block uppercase mb-1">Max Plate Span</span>
            <span className="text-white font-bold text-lg md:text-xl">57″ (1450 mm)</span>
          </div>
          <div>
            <span className="text-gray-500 block uppercase mb-1">Handled AC Load</span>
            <span className="text-teal-400 font-bold text-lg md:text-xl">82.3W (6X)</span>
          </div>
          <div>
            <span className="text-gray-500 block uppercase mb-1">Joint Leak Tightness</span>
            <span className="text-white font-bold text-lg md:text-xl">FSW 100% Zero-Leak</span>
          </div>
        </div>
      </section>

      {/* Case Studies Cards */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto space-y-16 relative z-10">
        {CASE_STUDIES.map((cs, idx) => (
          <div
            key={cs.slug}
            className="bg-[#020617] border border-white/10 p-8 lg:p-14 relative group hover:border-teal-500/40 transition-all shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Media Column */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="relative aspect-[16/10] w-full bg-[#0F172A] border border-white/10 overflow-hidden shadow-xl">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 border border-white/10 text-[10px] font-mono text-teal-400 uppercase tracking-widest">
                    Case Study 0{idx + 1}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block">
                      {cs.industry}
                    </span>
                    <span className="text-white font-bold text-base">{cs.subtitle}</span>
                  </div>
                </div>

                {/* Hero Metric Card */}
                <div className="p-4 bg-black/60 border border-teal-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold font-mono text-teal-400">{cs.heroMetric}</span>
                    <span className="text-xs font-mono text-gray-400 block uppercase tracking-wider">{cs.metricLabel}</span>
                  </div>
                  <div className="text-right text-xs font-mono text-gray-400">
                    <span>Verified in Lab</span>
                  </div>
                </div>
              </div>

              {/* Information Column */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                    {cs.title}
                  </h2>

                  <p className="text-gray-300 font-light text-base leading-relaxed mb-6">
                    {cs.summary}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="p-4 bg-black/40 border border-white/10">
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-1">
                        Thermal Challenge:
                      </span>
                      <p className="text-sm text-gray-300 font-light leading-relaxed">{cs.challenge}</p>
                    </div>

                    <div className="p-4 bg-teal-950/20 border border-teal-500/20">
                      <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-1">
                        ITS Engineering Approach:
                      </span>
                      <p className="text-sm text-gray-300 font-light leading-relaxed">{cs.engineeringApproach}</p>
                    </div>
                  </div>

                  {/* Key Specifications Table */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-4 border-t border-white/10 text-xs font-mono">
                    {cs.specifications.slice(0, 4).map((spec) => (
                      <div key={spec.label} className="p-2.5 bg-black/40 border border-white/5">
                        <span className="text-gray-500 block text-[10px] uppercase">{spec.label}</span>
                        <span className="text-white font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-teal-400 text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors self-start"
                >
                  <span>Read Full Case Study Data</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 mt-28 max-w-7xl mx-auto relative z-10 text-center">
        <div className="bg-gradient-to-r from-[#0F172A] via-[#091E2B] to-[#0F172A] border border-teal-500/30 p-10 lg:p-14">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Similar Thermal Challenge?
          </h3>
          <p className="text-gray-300 font-light max-w-xl mx-auto text-sm leading-relaxed mb-8">
            Submit your footprint constraints and heat flux numbers. Our thermal simulation team will prepare an analysis and preliminary concept.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-teal-400 transition-colors"
          >
            <span>Request Thermal Feasibility Evaluation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
