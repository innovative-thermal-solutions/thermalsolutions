import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Liquid Cooling & HyperCool | ITS Cooling",
  description: "High-performance liquid cold plates engineered for extreme power density, EV battery packs, and inverters.",
};

export default function LiquidCoolingPage() {
  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden pt-32 pb-28">
      <div className="absolute top-20 right-10 w-[700px] h-[500px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

      <section className="px-6 lg:px-12 mb-16 max-w-7xl mx-auto relative z-10">
        <Link
          href="/technologies"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-teal-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Technologies</span>
        </Link>

        <span className="text-teal-400 font-mono text-xs tracking-[0.25em] uppercase block mb-4">
          Slide 22–25, 31–34 • Liquid Cold Plates
        </span>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-8 max-w-5xl">
          LIQUID COOLING & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-gray-400">
            HYPERCOOL TECHNOLOGY.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl border-l-2 border-teal-400/50 pl-6 py-2 mb-10">
          When air cooling reaches its thermodynamic limit, liquid cooling provides the thermal transfer capacity needed for high-power IGBT inverters, silicon carbide (SiC) power modules, and electric vehicle battery packs.
        </p>
      </section>

      {/* Showcase Grid */}
      <section className="px-6 lg:px-12 mb-28 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div className="bg-[#020617] border border-white/10 p-8 flex flex-col justify-between">
          <div>
            <div className="relative aspect-video w-full bg-[#0F172A] border border-white/10 mb-6 overflow-hidden">
              <Image
                src="/images/assets/cold_plate.webp"
                alt="HyperCool Aluminum Liquid Cold Plate"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-2">Slide 25</span>
            <h3 className="text-2xl font-bold text-white mb-3">HyperCool Series Cold Plates</h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
              Engineered with optimized micro-channel profiles and low hydraulic resistance. Slide 31 proves that uniform velocity distribution across parallel channels leads to uniform surface temperatures across sensitive power semiconductor dies.
            </p>
          </div>
          <div className="pt-4 border-t border-white/10 text-xs font-mono text-gray-400 space-y-1">
            <p>• Optimized flow velocity balancing</p>
            <p>• Pressure drop minimized via CFD</p>
            <p>• Solid-state FSW leak-tight perimeter</p>
          </div>
        </div>

        <div className="bg-[#020617] border border-white/10 p-8 flex flex-col justify-between">
          <div>
            <div className="relative aspect-video w-full bg-[#0F172A] border border-white/10 mb-6 overflow-hidden">
              <Image
                src="/images/image126.png"
                alt="Electric Bus Large Format Cold Plate"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-2">Slide 33</span>
            <h3 className="text-2xl font-bold text-white mb-3">Large-Format Bus Battery Cold Plates</h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
              Manufactured up to 57″ × 24″ × 0.6″ (1450 mm × 610 mm × 15 mm). Built to withstand commercial transit vibration and continuous thermal cycling with zero maintenance.
            </p>
          </div>
          <div className="pt-4 border-t border-white/10 text-xs font-mono text-gray-400 space-y-1">
            <p>• 1450 mm span with balanced multi-pass</p>
            <p>• Hydrostatic pressure proofed at 300+ PSI</p>
            <p>• In-house 5-axis CNC & FSW manufacturing</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto relative z-10 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-teal-400 text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
        >
          <span>Discuss Liquid Cooling Requirements</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
