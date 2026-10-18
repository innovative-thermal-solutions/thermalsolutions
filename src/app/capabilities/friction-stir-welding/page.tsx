import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Wrench, Video, Activity } from "lucide-react";
import { SubpageCta } from "@/components/common/SubpageCta";

export const metadata = {
  title: "Friction stir welding for demanding cold plates. | ITS Cooling",
  description:
    "High-integrity solid-state joining for liquid cold plates. FSW prevents porosity, prevents coolant leaks, and maintains base-metal mechanical properties.",
};

export default function FrictionStirWeldingPage() {
  return (
    <main id="main-content" className="w-full min-h-screen bg-slate-50 pt-28 pb-20">
      {/* Detail Hero */}
      <section className="relative w-full bg-gradient-to-br from-white via-slate-50 to-sky-50 border-b border-slate-200 py-16 lg:py-24 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold text-sky-600 px-2 py-0.5 bg-white border border-slate-200 rounded-sm">
                ITS
              </span>
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold">
                Manufacturing Capability
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6">
              Friction stir welding for demanding cold plates.
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
              Solid-state joining without fusion melting. Eliminating porosity, preventing thermal distortion, and ensuring leak-proof sealing of high-pressure fluid channels.
            </p>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white flex items-center justify-center p-6">
            <Image
              src="/images/manufacturing/fsw-process-01.png"
              alt="Friction Stir Welding in Guelph"
              width={480}
              height={360}
              priority
              className="object-contain max-h-[300px] drop-shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Embedded Live Video Demo */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-16">
        <div className="rounded-2xl overflow-hidden border border-slate-300 bg-slate-950 shadow-xl max-w-4xl mx-auto aspect-[16/9] relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/manufacturing/fsw-process-01.png"
            className="w-full h-full object-cover"
          >
            <source src="/video/fsw-process.mp4" type="video/mp4" />
          </video>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-black/60 backdrop-blur-md px-4 py-2 rounded text-xs font-mono text-white">
            <span>ITS High-Torque FSW Spindle in Action</span>
            <span className="text-sky-400">Guelph, Ontario Facility</span>
          </div>
        </div>
      </section>

      {/* Detail Content Articles */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
        <div className="divide-y divide-slate-200">
          {/* 01 How the process works */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">01</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Process
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  How the process works
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  A rotating non-consumable tool engages the joint, generates frictional heat and moves plasticized material along the seam while the material remains below its melting point.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs text-sm text-slate-600 space-y-2">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block font-semibold">
                  Solid-State Advantages
                </span>
                <p>
                  Because the alloy does not liquefy, there are no solidification shrinkage cracks, no shielding gas entrapment, and mechanical strength approaches the parent metal baseline.
                </p>
              </div>
            </div>
          </article>

          {/* 02 Why it matters for cold plates */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">02</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Advantage
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Why it matters for cold plates
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  Machined internal channels must be closed with a controlled, repeatable joint. FSW supports high-integrity seams while limiting the distortion associated with fusion welding.
                </p>
              </div>
              <div className="bg-sky-50/70 p-6 rounded-xl border border-sky-100 text-sm text-slate-700 space-y-2">
                <span className="text-xs uppercase font-mono tracking-wider text-sky-800 font-bold block">
                  Flatness Retention
                </span>
                <p>
                  High surface flatness (&lt; 0.05 mm across the component mount zone) is preserved, avoiding post-weld warping and preserving critical thermal interface contacts.
                </p>
              </div>
            </div>
          </article>

          {/* 03 Integrated manufacturing */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">03</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Route
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Integrated manufacturing
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  Channel machining, weld planning, tooling, finishing and verification are coordinated as one manufacturing route.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-3 font-semibold">
                  Guelph In-House Infrastructure
                </span>
                <ul className="space-y-2 text-xs font-mono text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>Dedicated FSW fixture & anvil design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>Multi-axis CNC pin-tool path programming</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>Post-weld surface face milling</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* 04 Quality */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">04</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Quality
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Quality & Leak Verification
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  Joint and leak-verification requirements are established from the drawing, application and project quality plan. Ratings are not assumed or published without project data.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex items-center gap-4">
                <ShieldCheck className="w-10 h-10 text-emerald-600 shrink-0" />
                <div className="text-xs font-mono text-slate-600">
                  <strong className="text-slate-900 block mb-1">ISO 9001:2015 Traceability:</strong>
                  Helium mass spectrometer leak testing and hydrostatic burst pressure proofing performed on every production run.
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Inline CTA */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <SubpageCta
          eyebrow="FSW Joining Requirements?"
          title="Let's engineer the solution."
          description="Connect directly with our thermal and welding engineering specialists in Guelph, Ontario to evaluate joint design and proof pressure parameters."
          primaryCtaText="Talk to an FSW engineer"
          primaryCtaHref="/contact"
        />
      </div>
    </main>
  );
}
