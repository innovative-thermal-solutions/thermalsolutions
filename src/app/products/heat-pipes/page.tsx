import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/companyContent";

export const metadata = {
  title: "Embedded Heat Pipes & Vapor Chambers | ITS Cooling",
  description:
    "Two-phase thermal management solutions with embedded sintered copper heat pipes and vapor chambers for rapid heat spreading.",
};

export default function HeatPipesPage() {
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === "heat-pipes");

  return (
    <main id="main-content" className="w-full min-h-screen bg-slate-50 pt-28 pb-24">
      <section className="px-6 lg:px-12 mb-16 max-w-7xl mx-auto">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 hover:text-sky-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products</span>
        </Link>

        <span className="text-sky-600 font-mono text-xs tracking-[0.25em] uppercase block mb-3 font-semibold">
          Two-Phase Superconductors &amp; Heat Spreading
        </span>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6 max-w-4xl">
          Embedded heat pipes &amp; vapor chambers.
        </h1>

        <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-3xl font-normal mb-12">
          When solid metal conduction is too slow to prevent thermal hotspots, two-phase sintered heat pipes embedded directly into base plates deliver effective thermal conductivities exceeding 10,000 W/m·K.
        </p>

        <div className="space-y-12 mb-16">
          {category?.products.map((item, idx) => (
            <div
              key={item.name}
              className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs"
            >
              <div className="lg:col-span-5 relative aspect-[16/10] w-full bg-slate-50 border border-slate-200 rounded-xl overflow-hidden flex items-center justify-center p-4">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-sky-600 uppercase tracking-widest block mb-2 font-semibold">
                    Specification 0{idx + 1}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 uppercase mb-4">{item.name}</h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">{item.desc}</p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-700">
                  <span className="text-slate-500 uppercase block text-[10px] mb-1 font-bold">Key Technical Metrics:</span>
                  {item.specs}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-1">
              Need rapid heat spreading beneath localized high-wattage dies?
            </h3>
            <p className="text-slate-300 text-sm">
              Our engineering team models transient and steady-state vapor chamber and heat pipe solutions.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-sky-500 text-slate-950 hover:bg-white font-bold text-xs uppercase tracking-wider rounded-sm transition-colors whitespace-nowrap"
          >
            Consult an Engineer →
          </Link>
        </div>
      </section>
    </main>
  );
}
