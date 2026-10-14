import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/companyContent";

export const metadata = {
  title: "Air-Cooled Heat Sinks | Extruded, Skived & Bonded",
  description: "Comprehensive air-cooled heatsink solutions with custom fin profiles for industrial drives, power supplies, and electronics.",
};

export default function AirCooledHeatSinksPage() {
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === "air-cooled-heat-sinks");

  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden pt-32 pb-28">
      <div className="absolute top-20 right-10 w-[700px] h-[500px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

      <section className="px-6 lg:px-12 mb-16 max-w-7xl mx-auto relative z-10">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-teal-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products</span>
        </Link>

        <span className="text-teal-400 font-mono text-xs tracking-[0.25em] uppercase block mb-4">
          Slide 10–14, 20 • Convective Heat Transfer
        </span>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-8 max-w-5xl">
          AIR-COOLED HEAT SINKS.
        </h1>

        <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl border-l-2 border-teal-400/50 pl-6 py-2 mb-10">
          Tailored fin geometries engineered for natural convection and forced-air tunnel configurations. We optimize fin pitch to minimize fan noise while dissipating maximum thermal wattage.
        </p>
      </section>

      <section className="px-6 lg:px-12 mb-28 max-w-7xl mx-auto space-y-12 relative z-10">
        {category?.products.map((item, idx) => (
          <div
            key={item.name}
            className="bg-[#020617] border border-white/10 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-5 relative aspect-[16/10] w-full bg-[#0F172A] border border-white/10 overflow-hidden">
              <Image src={item.image} alt={item.name} fill className="object-cover" />
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-2">
                  Specification 0{idx + 1}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{item.name}</h2>
                <p className="text-gray-300 font-light text-base leading-relaxed mb-6">{item.desc}</p>
              </div>

              <div className="p-4 bg-black/60 border border-white/10 text-xs font-mono text-teal-400">
                <span className="text-gray-400 uppercase block text-[10px] mb-1">Key Technical Metrics:</span>
                {item.specs}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="px-6 lg:px-12 max-w-7xl mx-auto relative z-10 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-teal-400 text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
        >
          <span>Request Heatsink Geometry Feasibility</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
