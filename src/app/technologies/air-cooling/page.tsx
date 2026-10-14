import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Air-Cooled Heat Sinks | Extruded, Skived & Bonded",
  description: "Custom air-cooled heat sink solutions with optimized fin spacing, high aspect ratios, and two-phase heat pipe integration.",
};

export default function AirCoolingPage() {
  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden pt-32 pb-28">
      <div className="absolute top-20 left-10 w-[700px] h-[500px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

      <section className="px-6 lg:px-12 mb-16 max-w-7xl mx-auto relative z-10">
        <Link
          href="/technologies"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-teal-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Technologies</span>
        </Link>

        <span className="text-teal-400 font-mono text-xs tracking-[0.25em] uppercase block mb-4">
          Slide 10–14, 20 • Air Cooling Architecture
        </span>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-8 max-w-5xl">
          AIR-COOLED HEAT SINKS & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-gray-400">
            OPTIMIZED FIN GEOMETRY.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl border-l-2 border-teal-400/50 pl-6 py-2 mb-10">
          Slide 20 highlights our core air-cooling advantage: optimizing fin spacing and aspect ratio to maximize natural or forced convection heat transfer while reducing acoustic fan noise and air pressure drop.
        </p>
      </section>

      {/* Categories Grid */}
      <section className="px-6 lg:px-12 mb-28 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <div className="bg-[#020617] border border-white/10 p-8 flex flex-col justify-between">
          <div>
            <div className="relative aspect-video w-full bg-[#0F172A] border border-white/10 mb-6 overflow-hidden">
              <Image src="/images/assets/air_cooled/Extruded.png" alt="Extruded Heat Sinks" fill className="object-cover" />
            </div>
            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-2">Slide 10</span>
            <h3 className="text-2xl font-bold text-white mb-3">Extruded Heat Sinks</h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              High-efficiency aluminum alloy extrusions with high fin aspect ratios up to 24:1. Tailored fin pitch for natural and forced convection.
            </p>
          </div>
        </div>

        <div className="bg-[#020617] border border-white/10 p-8 flex flex-col justify-between">
          <div>
            <div className="relative aspect-video w-full bg-[#0F172A] border border-white/10 mb-6 overflow-hidden">
              <Image src="/images/assets/air_cooled/Skived.png" alt="Skived Fin Heat Sinks" fill className="object-cover" />
            </div>
            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-2">Slide 12–13</span>
            <h3 className="text-2xl font-bold text-white mb-3">Skived Fin Technology</h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              Fins shaved directly from monolithic copper or aluminum blocks. No interface thermal resistance between fins and base plate.
            </p>
          </div>
        </div>

        <div className="bg-[#020617] border border-white/10 p-8 flex flex-col justify-between">
          <div>
            <div className="relative aspect-video w-full bg-[#0F172A] border border-white/10 mb-6 overflow-hidden">
              <Image src="/images/assets/bonded_heat_sink.png" alt="Fabricated & Bonded Fin" fill className="object-cover" />
            </div>
            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-2">Slide 11</span>
            <h3 className="text-2xl font-bold text-white mb-3">Fabricated & Bonded Fins</h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              Tall individual fins bonded or brazed into grooved bases for high CFM tunnel forced-convection applications.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto relative z-10 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-teal-400 text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
        >
          <span>Request Air Cooling Sizing & Quote</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
