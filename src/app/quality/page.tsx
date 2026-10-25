import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Award, FileCheck, Layers, Gauge } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyContent";
import { SubpageCta } from "@/components/common/SubpageCta";
import { DitherWave } from "@/components/ui/DitherWave";

export const metadata = {
  title: "Controlled improvement. Customer focus. Engineering discipline. | ITS Cooling",
  description:
    "ITS operates an ISO 9001:2015 certified quality management system with CMM coordinate verification, helium mass spectrometer leak testing, and AS9100 alignment.",
};

export default function QualityPage() {
  return (
    <main id="main-content" className="w-full min-h-screen bg-slate-50 pt-28 pb-20">
      {/* Detail Hero */}
      <section className="relative w-full bg-gradient-to-br from-white via-slate-50 to-sky-50 border-b border-slate-200 py-16 lg:py-24 px-6 lg:px-12 overflow-hidden">
        {/* Dynamic Dither Wave Background */}
        <DitherWave
          color1="#0284c7"
          color2="#38bdf8"
          speed={0.35}
          frequency={2.2}
          amplitude={0.28}
          ditherSize={2.0}
          opacity={0.16}
        />
        <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold text-sky-600 px-2 py-0.5 bg-white border border-slate-200 rounded-sm">
                ITS
              </span>
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold">
                Quality Commitment
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6">
              Controlled improvement. Customer focus. Engineering discipline.
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
              Operating under a formalized ISO 9001:2015 Quality Management System with certified internal auditors, precision CMM validation, and 100% helium leak testing.
            </p>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center mb-4 border border-sky-200">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-950 uppercase tracking-tight mb-2">
              ISO 9001:2015 Certified
            </h3>
            <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-4">
              Certificate Awarded: {COMPANY_INFO.isoCertifiedDate}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded text-xs font-mono">
              <Check className="w-3.5 h-3.5" />
              <span>Full QMS Traceability Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Content Articles */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
        <div className="divide-y divide-slate-200">
          {/* 01 Customer focus */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">01</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Pillar
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Customer focus
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  Understand customer needs and design thermal-management products to meet or exceed agreed requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs text-sm text-slate-600 space-y-2">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block font-semibold">
                  Client Collaboration
                </span>
                <p>
                  We operate as a direct extension of your thermal and mechanical engineering teams, establishing explicit design constraints and key quality milestones from day one.
                </p>
              </div>
            </div>
          </article>

          {/* 02 Continuous improvement */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">02</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Kaizen
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Continuous improvement
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  Seek opportunities to improve products, manufacturing methods, resources and operational effectiveness across all work centers.
                </p>
              </div>
              <div className="bg-sky-50/70 p-6 rounded-xl border border-sky-100 text-sm text-slate-700 space-y-2">
                <span className="text-xs uppercase font-mono tracking-wider text-sky-800 font-bold block">
                  Metrics Driven
                </span>
                <p>
                  Key performance indicators include First Pass Yield (FPY), spindle uptime, tool life optimization, and cycle time reductions on every production batch.
                </p>
              </div>
            </div>
          </article>

          {/* 03 Controlled manufacturing */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">03</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Process
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Controlled manufacturing
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  Use defined processes, inspection and project-specific verification to support consistent, reliable thermal hardware.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-3 font-semibold">
                  Verification Equipment
                </span>
                <div className="space-y-2 text-xs font-mono text-slate-700">
                  <div className="p-2 bg-slate-50 rounded">
                    <strong>Brown &amp; Sharpe CMM:</strong> Volumetric accuracy &lt; 0.003 mm
                  </div>
                  <div className="p-2 bg-slate-50 rounded">
                    <strong>Helium Mass Spectrometer:</strong> Leak rates &lt; 1×10⁻⁸ mbar·L/s
                  </div>
                  <div className="p-2 bg-slate-50 rounded">
                    <strong>Hydrostatic Pressure Testing:</strong> Up to 150 PSI proof pressure
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* 04 Quality system */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">04</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Standards
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Quality system
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-normal mb-4">
                  The current ITS website identifies the company as ISO 9001:2015 certified and notes internal auditor training in ISO 9001:2015 and ISO 19011:2018.
                </p>
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  Additionally, ITS maintains active roadmaps towards AS9100 Aerospace Certification and compliance with the Canadian Controlled Goods Program (CGP) &amp; ITAR.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block font-semibold">
                  Certification Milestones
                </span>
                <div className="flex items-center gap-2.5 text-xs font-mono text-emerald-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>ISO 9001:2015 Certified (Audited Annually)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-mono text-sky-700">
                  <Award className="w-4 h-4 text-sky-600" />
                  <span>ISO 19011:2018 Internal Auditor Qualifications</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-mono text-slate-600">
                  <Gauge className="w-4 h-4 text-slate-400" />
                  <span>AS9100 Aerospace Standards Alignment</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Inline CTA */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <SubpageCta
          eyebrow="ISO 9001:2015 Quality Program"
          title="Let's engineer the solution."
          description="Request quality documentation, CMM inspection sampling plans, and leak verification procedures directly from our quality assurance group in Guelph."
          primaryCtaText="Contact Quality Engineering"
          primaryCtaHref="/contact"
        />
      </div>
    </main>
  );
}
