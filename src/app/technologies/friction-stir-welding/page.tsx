import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { FSW_ADVANTAGES, COMPANY_INFO } from "@/data/companyContent";

export const metadata = {
  title: "Friction Stir Welding (FSW) | Solid-State Joining",
  description: "In-house Friction Stir Welding (FSW) technology for liquid cold plates. Solid-state zero porosity joints with uncompromised thermal conductivity.",
};

export default function FrictionStirWeldingPage() {
  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden pt-32 pb-28">
      {/* Background glow */}
      <div className="absolute top-20 left-10 w-[700px] h-[500px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

      <section className="px-6 lg:px-12 mb-16 max-w-7xl mx-auto relative z-10">
        <Link
          href="/technologies"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-teal-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Technologies</span>
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-teal-400 font-mono text-xs tracking-[0.25em] uppercase">
            Slide 26–29 • Core In-House Specialty
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-8 max-w-5xl">
          FRICTION STIR WELDING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-gray-400">
            FOR LEAK-TIGHT COLD PLATES.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl border-l-2 border-teal-400/50 pl-6 py-2 mb-10">
          FSW is a solid-state joining process where a non-consumable rotating tool plastically deforms and forges two pieces of aluminum together under high pressure. Because the base metal never melts, it eliminates casting voids, porosity, and thermal cracking.
        </p>
      </section>

      {/* Process visual banner */}
      <section className="px-6 lg:px-12 mb-24 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#020617] border border-white/15 p-8 lg:p-12">
          <div className="lg:col-span-6 relative aspect-[4/3] w-full bg-[#0F172A] border border-white/10 overflow-hidden group">
            <Image
              src="/images/assets/machining_photo.png"
              alt="Friction Stir Welding in Operation"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-gray-300">
              <span className="text-teal-400 block mb-1">In-House FSW Station</span>
              <span>Automated spindle force & plunge depth control inside our Guelph facility.</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-2">
                Slide 28 • Face 1 & Face 2 Final Product
              </span>
              <h2 className="text-3xl font-bold text-white mb-4">
                Monolithic Integrity with Zero Braze Flux
              </h2>
              <p className="text-gray-300 font-light text-base leading-relaxed mb-6">
                Unlike vacuum brazing or fusion welding, Friction Stir Welding requires no chemical flux, no filler alloy, and no shielding gases. The welded joint possesses 100% parent aluminum thermal conductivity and can withstand pressure cycles up to 300+ PSI without micro-leaks.
              </p>
            </div>

            <div className="space-y-3 border-t border-white/10 pt-6 text-xs font-mono text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Zero porosity hermetic seal verified by helium mass spectrometer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Extremely low distortion prevents cold plate mounting surface warpage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Compatible with high-strength structural 6000 and 5000 series aluminum</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 8 Technical Factors (Slide 27) */}
      <section className="px-6 lg:px-12 mb-28 max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
          THE 8 CRITICAL TECHNICAL FACTORS.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FSW_ADVANTAGES.map((adv) => (
            <div
              key={adv.num}
              className="p-6 bg-[#020617] border border-white/10 hover:border-teal-500/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-teal-400 font-mono text-xs font-bold block mb-3">
                  Factor 0{adv.num}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{adv.title}</h3>
                <p className="text-sm text-gray-300 font-light leading-relaxed">{adv.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <div className="bg-gradient-to-r from-[#0F172A] to-[#020617] border border-teal-500/30 p-10 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">
              Need FSW Cold Plates for Your Application?
            </h3>
            <p className="text-gray-300 font-light max-w-xl text-sm leading-relaxed">
              We engineer custom liquid channels and run prototype weld trials in our Guelph facility. Contact our sales lead Abdu Zaghlol for qualification.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-8 py-4 bg-teal-400 text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors shrink-0"
          >
            Request FSW Engineering Review
          </Link>
        </div>
      </section>
    </main>
  );
}
