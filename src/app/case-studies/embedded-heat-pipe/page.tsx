import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { CASE_STUDIES } from "@/data/companyContent";

export const metadata = {
  title: "Embedded Heat Pipe Case Study | Aerospace & High Flux | ITS Cooling",
  description:
    "Case study on embedding sintered copper heat pipes into aluminum base plates to handle localized high power dissipation.",
};

export default function EmbeddedHeatPipeCaseStudyPage() {
  const study = CASE_STUDIES.find((c) => c.slug === "embedded-heat-pipe");

  return (
    <main id="main-content" className="w-full min-h-screen bg-slate-50 pt-28 pb-24">
      <section className="px-6 lg:px-12 mb-16 max-w-7xl mx-auto">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 hover:text-sky-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Case Studies</span>
        </Link>

        <span className="text-sky-600 font-mono text-xs tracking-[0.25em] uppercase block mb-3 font-semibold">
          Aerospace &amp; Defense Thermal Case Study
        </span>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6 max-w-4xl">
          Embedded heat pipe design: high power dissipation.
        </h1>

        <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-3xl font-normal mb-12">
          Integrating sintered copper heat pipes directly into CNC-machined base plates beneath high-flux microelectronics to rapidly disperse heat where traditional aluminum conduction is insufficient.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-12 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 uppercase mb-4">
              Thermal Challenge &amp; Solution
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4 font-normal">
              A compact 1.89” × 0.9” heat source generating 32W peak wattage was trapped within a tight electronic enclosure. The heat flux density caused localized hotspot spiking in baseline solid aluminum blocks.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              ITS embedded sintered copper heat pipes using high-precision CNC radius grooving and solder bonding. The two-phase fluid cycle rapidly transported latent heat outward to fin arrays, flattening the thermal gradient across the chassis.
            </p>
            <div className="space-y-2 text-xs font-mono text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Over 4X effective thermal conductivity improvement</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Maintained junction temperature within aerospace specs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero pump or moving parts required</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] bg-white rounded-2xl border border-slate-200 p-6 flex items-center justify-center shadow-xs">
            <Image
              src="/images/assets/air_cooled/Embedded Heat Pipes.png"
              alt="Embedded Heat Pipe Assembly"
              width={420}
              height={300}
              className="object-contain max-h-[260px] drop-shadow-sm"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-1">
              Have a high heat-flux aerospace application?
            </h3>
            <p className="text-slate-300 text-sm">
              Our engineering team can evaluate your exact heat maps and model custom heat pipe geometry.
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
