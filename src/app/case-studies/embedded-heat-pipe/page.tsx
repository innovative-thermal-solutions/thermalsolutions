import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { CASE_STUDIES } from "@/data/companyContent";

export const metadata = {
  title: "Embedded Heat Pipe Case Study | Aerospace & High Flux",
  description: "Case study on embedding sintered copper heat pipes into aluminum base plates to handle localized high power dissipation.",
};

export default function EmbeddedHeatPipeCaseStudyPage() {
  const study = CASE_STUDIES.find((c) => c.slug === "embedded-heat-pipe");

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
          Slide 14 & 16 • Aerospace & Defense Case Study
        </span>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-8 max-w-5xl">
          EMBEDDED HEAT PIPE DESIGN: <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-gray-400">
            HIGH POWER DISSIPATION.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl border-l-2 border-teal-400/50 pl-6 py-2 mb-10">
          Integrating sintered copper heat pipes directly into CNC-machined base plates beneath high-flux microelectronics to rapidly disperse heat where traditional aluminum conduction is insufficient.
        </p>
      </section>

      <section className="px-6 lg:px-12 mb-28 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="bg-[#020617] border border-white/10 p-8 lg:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Thermal Challenge & Result</h2>
          <p className="text-gray-300 font-light text-base leading-relaxed mb-6">
            A compact 1.89” × 0.9” heat source generating 32W peak wattage was trapped within a tight electronic enclosure. The heat flux density caused localized hotspot spiking in baseline solid aluminum blocks.
          </p>
          <p className="text-gray-300 font-light text-base leading-relaxed mb-6">
            ITS embedded sintered copper heat pipes using high-precision CNC radius grooving and solder bonding. The two-phase fluid cycle rapidly transported latent heat outward to fin arrays, flattening the thermal gradient across the chassis.
          </p>
          <div className="space-y-2 text-xs font-mono text-teal-400">
            <p>• Over 4X effective thermal conductivity improvement</p>
            <p>• Maintained junction temperature within aerospace specs</p>
            <p>• Zero pump or moving parts required</p>
          </div>
        </div>

        <div className="relative aspect-video w-full bg-[#0F172A] border border-white/10 overflow-hidden">
          <Image
            src="/images/assets/air_cooled/Embedded Heat Pipes.png"
            alt="Embedded Heat Pipe Assembly"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto relative z-10 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-teal-400 text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
        >
          <span>Request Heat Pipe Assembly Design</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
