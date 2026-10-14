import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/companyContent";

export const metadata = {
  title: "Thermal Hardware & Products | ITS Cooling",
  description: "Explore our precision engineered thermal hardware: Friction Stir Welded cold plates, HyperCool aluminum plates, skived heatsinks, embedded heat pipes, and busbars.",
};

export default function ProductsPage() {
  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden pt-32 pb-28">
      {/* Background glow */}
      <div className="absolute top-20 right-10 w-[800px] h-[500px] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <section className="px-6 lg:px-12 mb-20 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-teal-400 font-mono text-xs tracking-[0.25em] uppercase">
            Slide 9–14, 22–25 • Product Catalog
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-8 max-w-5xl">
          PRECISION ENGINEERED <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-gray-400">
            THERMAL HARDWARE.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl border-l-2 border-teal-400/50 pl-6 py-2 mb-10">
          From large-format 57-inch EV bus liquid cold plates to high-flux sintered copper heat pipes and custom busbars. Engineered to zero-failure tolerances and manufactured in our ISO 9001:2015 certified facility.
        </p>
      </section>

      {/* Product Categories Sections */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto space-y-20 relative z-10">
        {PRODUCT_CATEGORIES.map((cat, idx) => (
          <div
            key={cat.slug}
            className="bg-[#020617] border border-white/10 p-8 lg:p-14 relative group hover:border-teal-500/40 transition-all shadow-2xl"
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 pb-8 border-b border-white/10">
              <div className="max-w-2xl">
                <span className="text-teal-400 font-mono text-xs uppercase tracking-widest block mb-2">
                  Category 0{idx + 1} • {cat.subtitle}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                  {cat.title}
                </h2>
                <p className="text-gray-300 font-light text-base leading-relaxed">
                  {cat.heroDescription}
                </p>
              </div>

              <Link
                href={`/products/${cat.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-mono text-xs uppercase tracking-widest hover:bg-teal-400 hover:text-black transition-colors shrink-0"
              >
                <span>View Full Specifications</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Product Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cat.products.map((item) => (
                <div
                  key={item.name}
                  className="bg-black/60 border border-white/10 p-6 flex flex-col justify-between group/item hover:border-teal-500/50 hover:bg-[#070D18] transition-all"
                >
                  <div>
                    <div className="relative aspect-video w-full bg-[#0F172A] border border-white/10 mb-5 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover opacity-80 group-hover/item:opacity-100 group-hover/item:scale-105 transition-all duration-500"
                      />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover/item:text-teal-400 transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-teal-400/90">
                    <span className="text-gray-500 block text-[9px] uppercase">Highlights:</span>
                    {item.specs}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 mt-28 max-w-7xl mx-auto relative z-10 text-center">
        <div className="bg-gradient-to-r from-[#0F172A] via-[#091E2B] to-[#0F172A] border border-teal-500/30 p-10 lg:p-14">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Custom Hardware Geometries Engineered on Demand
          </h3>
          <p className="text-gray-300 font-light max-w-2xl mx-auto text-sm leading-relaxed mb-8">
            Do your electronic packages have unique space, flow, or pressure requirements? Our engineering team designs custom liquid cold plates, heatsinks, and busbars tailored directly to your system envelopes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-teal-400 text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
          >
            <span>Talk to a Thermal Specialist</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
