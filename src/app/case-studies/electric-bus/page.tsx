import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { CASE_STUDIES } from "@/data/companyContent";

export const metadata = {
  title: "Electric Bus Aluminum Cold Plate Case Study | 57″ × 24″",
  description: "Large-format Friction Stir Welded aluminum cold plate (57″ × 24″ / 1450 × 610 mm) for EV bus battery cooling with uniform velocity distribution.",
};

export default function ElectricBusCaseStudyPage() {
  const study = CASE_STUDIES.find((c) => c.slug === "electric-bus");

  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden pt-32 pb-28">
      <div className="absolute top-20 right-10 w-[700px] h-[500px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

      <section className="px-6 lg:px-12 mb-16 max-w-7xl mx-auto relative z-10">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-teal-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Case Studies</span>
        </Link>

        <span className="text-teal-400 font-mono text-xs tracking-[0.25em] uppercase block mb-4">
          Slide 31 & 33 • EV & Battery Systems
        </span>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-8 max-w-5xl">
          ELECTRIC BUS COLD PLATES: <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-gray-400">
            57″ × 24″ BATTERY COOLING.
          </span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl p-6 bg-[#020617] border border-teal-500/30 font-mono text-xs">
          <div>
            <span className="text-gray-500 block uppercase">Imperial Dimensions:</span>
            <span className="text-2xl font-bold text-teal-400">57″ × 24″ × 0.6″</span>
          </div>
          <div>
            <span className="text-gray-500 block uppercase">Metric Dimensions:</span>
            <span className="text-2xl font-bold text-white">1450 × 610 × 15 mm</span>
          </div>
        </div>
      </section>

      {/* Slide 31: Hydrodynamic Principle */}
      <section className="px-6 lg:px-12 mb-28 max-w-7xl mx-auto relative z-10">
        <div className="bg-[#020617] border border-white/10 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-2">
              Slide 31 • Hydrodynamic Principle
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">
              Uniform Velocity Distribution Leads to Uniform Temperature Distribution
            </h2>
            <p className="text-gray-300 font-light text-base leading-relaxed mb-6">
              When cooling large lithium-ion battery modules spanning nearly 1.5 meters, any maldistribution in coolant velocity will cause temperature gradients between battery cells, accelerating degradation in hotter cells.
            </p>
            <p className="text-gray-300 font-light text-base leading-relaxed mb-6">
              ITS engineered multi-pass internal hydraulic channels using CFD to guarantee perfectly balanced fluid velocities across every parallel flow passage.
            </p>
            <div className="space-y-2 text-xs font-mono text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Isothermal cell temperatures prolong battery pack lifespan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Zero-porosity Friction Stir Welded perimeter withstands road shock</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-video w-full bg-[#0F172A] border border-white/10 overflow-hidden">
            <Image
              src="/images/image126.png"
              alt="Electric Bus Aluminum Cold Plate"
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
          <span>Discuss EV Battery Cold Plate Requirements</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
