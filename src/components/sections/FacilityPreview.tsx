import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function FacilityPreview() {
  return (
    <section className="relative w-full py-32 px-6 lg:px-12 bg-[#020617] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10 order-2 lg:order-1">
          <span className="text-teal-accent font-mono text-sm tracking-[0.2em] uppercase mb-4 block">
            10 / Manufacturing Facility
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
            NORTH AMERICAN PRODUCTION.
          </h2>
          <p className="text-gray-300 font-light text-lg mb-8 max-w-lg">
            Our state-of-the-art facility features advanced 5-axis CNC machining, in-house friction stir welding, and precise quality inspection systems.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mb-12 border-l border-teal-accent/50 pl-6">
            <div>
              <span className="block text-2xl font-bold text-white mb-1">Haas VF-5XT</span>
              <span className="block text-xs font-mono uppercase text-gray-500">5-Axis Machining</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-white mb-1">UMC-1000SS</span>
              <span className="block text-xs font-mono uppercase text-gray-500">5-Axis Mill</span>
            </div>
          </div>

          <Link
            href="/facility"
            className="inline-flex items-center gap-3 bg-transparent border border-white text-white px-8 py-4 font-medium uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors"
          >
            Tour The Facility
          </Link>
        </div>

        <div className="relative z-10 order-1 lg:order-2 h-[400px] lg:h-[550px] bg-[#020617] border border-white/10 flex items-center justify-center group overflow-hidden shadow-2xl">
          <Image 
            src="/images/image135.png" 
            alt="ITS Facility CNC Machine Workshop" 
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
            <span className="text-teal-400 font-mono text-xs tracking-widest uppercase mb-1">Slide 36 Workshop Center</span>
            <span className="text-white font-bold text-lg">Haas VF-5XT 5-Axis & VC-Ez 26 Mazak</span>
          </div>
        </div>
      </div>
    </section>
  );
}
