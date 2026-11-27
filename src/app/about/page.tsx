import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  ArrowRight,
  FileSpreadsheet,
  CheckCircle2,
  Eye,
  Target,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Innovative Thermal Solutions (ITS Cooling)",
  description:
    "Innovative Thermal Solutions (ITS) designs and manufactures custom, high-performance thermal management solutions in North America, specializing in Friction Stir Welding (FSW) and advanced cooling technologies.",
};

export const dynamic = "force-dynamic";

const milestones = [
  {
    year: "2020",
    step: "01",
    title: "ITS Cooling Founded",
    description: "Started with a vision to engineer high-performance thermal solutions.",
  },
  {
    year: "2021",
    step: "02",
    title: "First Facility & Machine",
    description: "1200 sq ft space with our first CNC machine (Haas VF-5) and FSW.",
  },
  {
    year: "2022",
    step: "03",
    title: "Expansion Begins",
    description: "Added second machine (Haas VF-6) and moved to a 2,300 sq ft facility.",
  },
  {
    year: "2023",
    step: "04",
    title: "Tradeshow Expansion Begins",
    description:
      "Our 1st tradeshow we exhibited at was the Thermal Management Expo in Michigan. That was the start of expanding our sales at trade shows.",
  },
  {
    year: "2024",
    step: "05",
    title: "Scaling Operations",
    description:
      "Expanded production capacity and strengthened engineering capabilities. Moved to a 6,000 sq ft facility.",
  },
  {
    year: "2025",
    step: "06",
    title: "Advanced Capabilities",
    description:
      "Introduced Mazak and UMC-1000, 5-axis machines to expand manufacturing.",
  },
  {
    year: "2026",
    step: "07",
    title: "Where We Are Today",
    description: "Operating from a 6,000 sq ft facility with a growing team of 27.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="w-full min-h-screen bg-[#f8faf9] text-[#141f22]">
      {/* 1. Hero Section - Styled consistently with Portfolio & Capabilities */}
      <section className="relative w-full min-h-[540px] lg:min-h-[620px] border-b border-[#d8dedf] bg-[#f8faf9] overflow-hidden pt-28 lg:pt-32 flex flex-col justify-end">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,116,122,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,116,122,0.12) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 py-12 lg:py-16 relative z-10 flex-1 flex flex-col justify-end">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#00747a] font-bold mb-4">
            ABOUT INNOVATIVE THERMAL SOLUTIONS · GUELPH, ONTARIO
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-serif font-medium tracking-tight text-[#141f22] leading-[0.98] sm:leading-[0.96] max-w-4xl mb-6">
            Engineering.<br />
            <span className="text-[#00747a]">From the core.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-8 font-normal">
            Innovative Thermal Solutions (ITS) designs and manufactures custom, high-performance thermal management solutions under one roof in Guelph, Ontario—specializing in in-house Friction Stir Welding (FSW), precision CNC machining, and advanced liquid cooling.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-7 py-4 bg-[#00747a] hover:bg-[#005d62] text-white font-mono text-xs uppercase tracking-wider font-bold rounded shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Talk to an Engineer</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
            <a
              href="#story"
              className="inline-flex items-center gap-2 px-6 py-4 border border-slate-300 hover:border-slate-400 bg-white text-slate-800 font-mono text-xs uppercase tracking-wider font-bold rounded transition-colors shadow-2xs"
            >
              <span>Our Story</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Vision and Mission Cards */}
      <section className="relative w-full py-12 sm:py-16 px-6 sm:px-8 lg:px-14 bg-gradient-to-b from-[#f0f6f6] to-[#f8faf9] border-b border-[#d8dedf]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Vision Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-[#cbe4e6] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="w-16 h-16 rounded-full bg-[#00747a] flex items-center justify-center text-white mb-6 shadow-md shadow-[#00747a]/20 group-hover:scale-105 transition-transform">
                <Eye className="w-8 h-8 text-white" strokeWidth={2.2} />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#00747a] mb-4">
                Vision
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans font-normal">
                To be the leader in designing, manufacturing and testing quality heat sink products for the electronics industries.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-[#cbe4e6] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="w-16 h-16 rounded-full bg-[#00747a] flex items-center justify-center text-white mb-6 shadow-md shadow-[#00747a]/20 group-hover:scale-105 transition-transform">
                <Target className="w-8 h-8 text-white" strokeWidth={2.2} />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#00747a] mb-4">
                Mission
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans font-normal">
                We pride ourselves in delivering innovative solutions through designing and manufacturing quality heat sink products on time for the electronics industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Company Overview & Value Proposition (Structured Editorial Cards) */}
      <section id="story" className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-14 border-b border-[#d8dedf]">
        <div className="max-w-[1440px] mx-auto">
          {/* Top section headline */}
          <div className="max-w-3xl mb-16">
            <p className="text-[11px] font-mono tracking-widest text-[#00747a] uppercase mb-2 font-bold">
              SINGLE-SOURCE THERMAL MANAGEMENT PARTNER
            </p>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-slate-900 leading-[1.08]">
              From concept to finished hardware. <br />
              <span className="text-[#00747a]">Engineered here in North America.</span>
            </h2>
          </div>

          {/* 3 Editorial Story Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 border border-[#d8dedf] shadow-sm flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-lg bg-[#00747a]/10 text-[#00747a] flex items-center justify-center font-mono font-bold text-sm mb-6">
                  01
                </span>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                  Custom Engineering &amp; Solutions
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  ITS designs and manufactures custom, high-performance thermal management solutions specializing in Friction Stir Welding (FSW) and advanced liquid cooling. Our solutions include air-cooled heat sinks, liquid cold plates, heat pipe assemblies, laminated copper bus bars, and complete air-to-liquid systems tailored to demanding thermal envelopes.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-[#00747a] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#00747a]" />
                <span>100% Custom Tailored</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 border border-[#d8dedf] shadow-sm flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-lg bg-[#00747a]/10 text-[#00747a] flex items-center justify-center font-mono font-bold text-sm mb-6">
                  02
                </span>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                  Connected Workflow Under One Roof
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  From first simulation to machined hardware, our engineering team combines CFD flow modeling, FEA structural stress simulation, and rapid prototyping with 5-axis CNC machining, brazing, and in-house Friction Stir Welding. By controlling the complete manufacturing loop, we eliminate handoff friction and reduce development cycle times.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-[#00747a] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#00747a]" />
                <span>Zero Outsourcing Risk</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 border border-[#d8dedf] shadow-sm flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-lg bg-[#00747a]/10 text-[#00747a] flex items-center justify-center font-mono font-bold text-sm mb-6">
                  03
                </span>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                  Quality &amp; Supply Chain Resilience
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  Operating under an ISO 9001:2015 certified Quality Management System in Guelph, Ontario, ITS helps North American OEM customers de-risk their supply chain. Every liquid cold plate and heat sink assembly undergoes rigorous leak-testing, thermal verification, and CMM dimensional inspection before shipment.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-[#00747a] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#00747a]" />
                <span>ISO 9001:2015 Certified</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-[#f2f6f6] rounded-xl border border-[#d8dedf]">
            <div>
              <span className="block text-3xl sm:text-4xl font-mono font-bold text-[#00747a]">2020</span>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-600 mt-1 block">Year Founded</span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-mono font-bold text-[#00747a]">6,000</span>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-600 mt-1 block">Sq Ft Facility</span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-mono font-bold text-[#00747a]">27</span>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-600 mt-1 block">Team Members</span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-mono font-bold text-[#00747a]">100%</span>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-600 mt-1 block">Custom Production</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Company Milestones (2020 – 2026) */}
      <section className="relative w-full py-20 lg:py-28 px-6 lg:px-12 bg-gradient-to-br from-[#004d52] via-[#01747A] to-[#005a5f] text-white border-b border-[#015e63] overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="text-center mb-14 lg:mb-20">
            <span className="inline-block text-xs uppercase font-mono tracking-widest font-bold bg-white/15 border border-white/25 text-teal-100 px-4 py-1.5 rounded-full mb-3 shadow-xs">
              2020 – 2026
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white">
              Company Milestones
            </h2>
            <p className="text-teal-50 text-sm sm:text-base max-w-xl mx-auto mt-3 font-normal">
              From our first Haas CNC and FSW cell in 2020 to advanced 5-axis manufacturing today.
            </p>
          </div>

          {/* Desktop alternating timeline (>= 1024px) */}
          <div className="hidden lg:block relative pb-4">
            {/* Horizontal timeline connecting beam */}
            <div className="absolute left-[3%] right-[3%] top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-white/20 via-teal-200 to-white/20 shadow-[0_0_16px_rgba(255,255,255,0.6)] z-0 rounded-full" />

            <div className="grid grid-cols-7 gap-4 relative z-10">
              {milestones.map((item, index) => {
                const isEven = index % 2 === 1; // 0-based: 1, 3, 5 are even in UI
                return (
                  <div
                    key={item.year}
                    className="flex flex-col items-center group"
                  >
                    {/* Top slot: odd items place card here */}
                    <div className="h-[230px] w-full flex flex-col justify-end pb-4">
                      {!isEven && (
                        <div className="relative bg-white text-slate-900 rounded-xl p-5 shadow-xl border-t-4 border-[#01747A] group-hover:-translate-y-1.5 transition-transform duration-300">
                          {/* Pointer line downwards to center circle */}
                          <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-0.5 h-4 bg-teal-200" />
                          <span className="inline-block bg-[#01747A] text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded-full mb-2">
                            {item.step}
                          </span>
                          <h3 className="text-sm font-bold text-[#01747A] mb-1.5 leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Middle Year Badge */}
                    <div className="w-20 h-20 rounded-full bg-white text-[#01747A] font-extrabold text-base flex items-center justify-center shadow-[0_0_0_6px_rgba(255,255,255,0.25),0_0_24px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-300 my-2 z-20 font-mono">
                      {item.year}
                    </div>

                    {/* Bottom slot: even items place card here */}
                    <div className="h-[230px] w-full flex flex-col justify-start pt-4">
                      {isEven && (
                        <div className="relative bg-white text-slate-900 rounded-xl p-5 shadow-xl border-t-4 border-[#01747A] group-hover:translate-y-1.5 transition-transform duration-300">
                          {/* Pointer line upwards to center circle */}
                          <div className="absolute left-1/2 -top-4 -translate-x-1/2 w-0.5 h-4 bg-teal-200" />
                          <span className="inline-block bg-[#01747A] text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded-full mb-2">
                            {item.step}
                          </span>
                          <h3 className="text-sm font-bold text-[#01747A] mb-1.5 leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile / Tablet vertical timeline (< 1024px) */}
          <div className="lg:hidden relative max-w-xl mx-auto space-y-6">
            {/* Vertical connector line */}
            <div className="absolute left-8 top-6 bottom-6 w-1 bg-gradient-to-b from-white/40 to-white/10 rounded-full z-0" />

            {milestones.map((item) => (
              <div key={item.year} className="relative flex items-start gap-5 z-10">
                <div className="shrink-0 w-16 h-16 rounded-full bg-white text-[#01747A] font-bold text-sm flex items-center justify-center shadow-[0_0_0_4px_rgba(255,255,255,0.2)] font-mono">
                  {item.year}
                </div>
                <div className="flex-1 bg-white text-slate-900 rounded-xl p-5 shadow-xl border-l-4 border-[#01747A]">
                  <span className="inline-block bg-[#01747A] text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded-full mb-1.5">
                    {item.step}
                  </span>
                  <h3 className="text-base font-bold text-[#01747A] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Have a thermal management project? CTA */}
      <section className="relative w-full py-20 lg:py-28 px-6 lg:px-12 bg-gradient-to-br from-[#004d52] via-[#01747A] to-[#005a5f] text-white text-center border-b border-[#015e63]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] font-mono tracking-widest text-teal-200 uppercase mb-3 font-bold">
            LET&apos;S SOLVE IT TOGETHER
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white mb-6">
            Have a thermal management project?
          </h2>
          <p className="text-teal-50 text-base sm:text-lg mb-8 max-w-xl mx-auto font-normal">
            Whether you need rapid CFD simulation, custom friction stir welding, or complete liquid cold plates, our engineering team is ready.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#01747A] font-mono text-xs font-bold uppercase tracking-wider rounded transition-all transform hover:-translate-y-0.5 shadow-lg shadow-black/10 cursor-pointer"
            >
              <span>Contact an Engineer</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#01747A]" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 text-white font-mono text-xs font-medium uppercase tracking-wider rounded hover:bg-white/10 transition-colors"
            >
              <span>View Product Portfolio</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. ERA Logo Section */}
      <section className="w-full py-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto px-6 text-center flex flex-col items-center justify-center">
          <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-2xs inline-block">
            <Image
              src="/images/certifications/ERA.jpg"
              alt="ERA Certification Logo"
              width={160}
              height={80}
              className="h-auto w-auto max-h-16 object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
