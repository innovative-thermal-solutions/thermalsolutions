import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, Award, Globe, Users, Sparkles, Building } from "lucide-react";
import { COMPANY_INFO, MILESTONES } from "@/data/companyContent";

export const metadata = {
  title: "About Us | Company Journey & Mission",
  description: "Learn about Innovative Thermal Solutions Inc. Our history from 2020 to 2026, 50 years of combined engineering experience, ISO 9001 certification, and our mission.",
};

export default function AboutPage() {
  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden pt-32 pb-28">
      {/* Background glow */}
      <div className="absolute top-20 right-1/4 w-[800px] h-[500px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <section className="px-6 lg:px-12 mb-24 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-teal-400 font-mono text-xs tracking-[0.25em] uppercase">
            Slide 1–3 • Company Profile & Story
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-8 max-w-5xl">
          INNOVATIVE THERMAL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-gray-400">
            SOLUTIONS INC.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl border-l-2 border-teal-400/50 pl-6 py-2 mb-12">
          Founded in 2020 with a single vision: deliver innovative thermal solutions through designing, manufacturing, and testing quality heat sink products on time for the global electronics industries.
        </p>

        {/* Vision & Mission Cards (Slide 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#020617] border border-white/10 p-8 lg:p-10 relative group hover:border-teal-500/40 transition-colors">
            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-4">
              Slide 2 • Corporate Vision
            </span>
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-lg text-gray-300 font-light leading-relaxed">
              "{COMPANY_INFO.vision}"
            </p>
          </div>

          <div className="bg-[#020617] border border-white/10 p-8 lg:p-10 relative group hover:border-teal-500/40 transition-colors">
            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-4">
              Slide 2 • Corporate Mission
            </span>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-lg text-gray-300 font-light leading-relaxed">
              "{COMPANY_INFO.mission}"
            </p>
          </div>
        </div>
      </section>

      {/* CEO Statement & Credentials (Slide 45) */}
      <section className="px-6 lg:px-12 mb-28 max-w-7xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-[#0F172A] to-[#020617] border border-white/15 p-8 lg:p-14 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
              <div className="w-full max-w-sm aspect-[4/5] bg-black border border-white/20 relative overflow-hidden group shadow-xl">
                <Image
                  src="/images/assets/founder/DSC00309 (1).JPG"
                  alt="Ahmed Zaghlol, PhD, PEng"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-mono text-teal-400 uppercase block mb-1">Founder & CEO</span>
                  <h4 className="text-xl font-bold text-white">Ahmed Zaghlol, Ph.D., P.Eng.</h4>
                </div>
              </div>

              <div className="w-full max-w-sm mt-4 grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-black/50 border border-white/10 p-3 text-center">
                  <span className="text-teal-400 font-bold block text-base">26</span>
                  <span className="text-gray-400 text-[10px] uppercase">Years In Industry</span>
                </div>
                <div className="bg-black/50 border border-white/10 p-3 text-center">
                  <span className="text-teal-400 font-bold block text-base">2</span>
                  <span className="text-gray-400 text-[10px] uppercase">Thermal Patents</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-4">
                Slide 45 • Leadership Statement
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                "Turnkey Engineering & Manufacturing Supplier Delivering On Time."
              </h3>
              
              <blockquote className="text-gray-300 font-light text-base lg:text-lg italic leading-relaxed mb-8 border-l-2 border-teal-400 pl-6 py-1">
                "{COMPANY_INFO.ceoQuote}"
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-light text-gray-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <span>Combined 50+ years of engineering experience across our technical staff.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <span>Experts in designing experiments to test and evaluate thermal prototypes.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values (Slide 3) */}
      <section className="px-6 lg:px-12 mb-28 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-teal-400 font-mono text-xs uppercase tracking-widest block mb-2">
              Slide 3 • Cultural Pillars
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              OUR GUIDING VALUES.
            </h2>
          </div>
          <p className="text-sm font-mono text-gray-400 max-w-md">
            Our commitments to our team members, global clients, local communities, and engineering excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_INFO.values.map((val, idx) => (
            <div
              key={val.title}
              className="bg-[#020617] border border-white/10 p-8 hover:border-teal-500/50 hover:bg-[#070D18] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-teal-400 font-mono text-xs mb-4 block">0{idx + 1}</span>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{val.title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comprehensive Company Milestones 2020–2026 (Slide 43) */}
      <section className="px-6 lg:px-12 mb-28 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-teal-400 font-mono text-xs uppercase tracking-widest block mb-2">
              Slide 43 • Company Milestones
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              OUR JOURNEY: 2020 TO TODAY.
            </h2>
          </div>
          <p className="text-sm font-mono text-gray-400 max-w-md">
            From our founding workshop to our expanding 6,000 sq ft manufacturing facility in Guelph with a team of 27.
          </p>
        </div>

        <div className="relative border-l border-white/20 pl-8 lg:pl-16 space-y-16 ml-4">
          {MILESTONES.map((ms) => (
            <div key={ms.year} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[41px] lg:-left-[73px] top-1.5 w-6 h-6 rounded-full bg-black border-2 border-teal-400 flex items-center justify-center group-hover:scale-125 transition-transform shadow-lg shadow-teal-400/20">
                <div className="w-2 h-2 rounded-full bg-teal-400" />
              </div>

              <div className="bg-[#020617] border border-white/10 p-8 lg:p-10 group-hover:border-teal-500/40 group-hover:bg-[#070D18] transition-all">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl md:text-4xl font-bold font-mono text-teal-400">
                      {ms.year}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 text-gray-300">
                      Milestone {ms.step}
                    </span>
                  </div>

                  {ms.facilitySize && (
                    <span className="text-xs font-mono text-gray-400 bg-black/60 px-3 py-1 border border-white/10">
                      {ms.facilitySize}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {ms.title}
                </h3>

                <p className="text-base text-gray-300 font-light leading-relaxed mb-6">
                  {ms.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {ms.highlights.map((hl) => (
                    <span
                      key={hl}
                      className="text-xs font-mono text-gray-300 bg-white/5 px-3 py-1 border border-white/10 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-teal-400" />
                      <span>{hl}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ongoing & Future Planning (Slide 44) */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <div className="bg-[#020617] border border-white/15 p-10 lg:p-14">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="text-teal-400 font-mono text-xs uppercase tracking-widest block mb-2">
                Slide 44 • Ongoing & Future Planning
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                CERTIFICATIONS & GLOBAL GROWTH.
              </h2>
            </div>
            <p className="text-sm font-mono text-gray-400 max-w-md">
              Committed to aerospace grade quality management, defense compliance, and expanding international service hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 01: ISO */}
            <div className="bg-black/60 border border-teal-500/40 p-6 flex flex-col justify-between">
              <div>
                <span className="text-teal-400 font-mono text-xs block mb-2">01 / CURRENT STATUS</span>
                <h4 className="text-xl font-bold text-white mb-2">ISO 9001:2015</h4>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  Certified January 17, 2021. Complete QMS auditing, strict incoming inspection, and full production traceability.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-mono text-teal-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Certified & Active</span>
              </span>
            </div>

            {/* 02: AS9100 */}
            <div className="bg-black/60 border border-white/10 p-6 flex flex-col justify-between">
              <div>
                <span className="text-amber-400 font-mono text-xs block mb-2">02 / AEROSPACE QUALITY</span>
                <h4 className="text-xl font-bold text-white mb-2">AS9100 Certification</h4>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  Aerospace Quality Management standard implementation in progress to support flight-critical defense and avionics hardware.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span>In Progress</span>
              </span>
            </div>

            {/* 03: CGP / ITAR */}
            <div className="bg-black/60 border border-white/10 p-6 flex flex-col justify-between">
              <div>
                <span className="text-blue-400 font-mono text-xs block mb-2">03 / DEFENSE COMPLIANCE</span>
                <h4 className="text-xl font-bold text-white mb-2">CGP & ITAR Equivalent</h4>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  Canadian Controlled Goods Program (CGP) trained and compliant, meeting ITAR security standards for defense applications.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span>In Progress</span>
              </span>
            </div>

            {/* 04: Expanding Locations */}
            <div className="bg-black/60 border border-white/10 p-6 flex flex-col justify-between">
              <div>
                <span className="text-purple-400 font-mono text-xs block mb-2">04 / GLOBAL EXPANSION</span>
                <h4 className="text-xl font-bold text-white mb-2">Expanding Locations</h4>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  Growing manufacturing capacity and regional client application support hubs to serve customers worldwide.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 font-semibold">
                <Globe className="w-4 h-4" />
                <span>Worldwide Reach</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
