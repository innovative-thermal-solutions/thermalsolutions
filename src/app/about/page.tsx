import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  ArrowRight,
  FileSpreadsheet,
  Layers,
  Thermometer,
  Cpu,
  Cog,
  CheckCircle2,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Innovative Thermal Solutions (ITS Cooling)",
  description:
    "Innovative Thermal Solutions (ITS) designs and manufactures custom, high-performance thermal management solutions in North America, specializing in Friction Stir Welding (FSW) and advanced cooling technologies.",
};

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

const workflowSteps = [
  {
    step: "01",
    title: "Customer Inputs",
    description: "Project Requirements (eg. max temperature, heat sink envelope)",
    icon: Layers,
  },
  {
    step: "02",
    title: "Thermal",
    description: "CFD, iterative heat sink design, parametric studies, optimization",
    icon: Thermometer,
  },
  {
    step: "03",
    title: "Mechanical",
    description: "Solid modelling Dwgs, assemble modelling, static structural simulation",
    icon: Cpu,
  },
  {
    step: "04",
    title: "Manufacturing",
    description: "CNC machining, Friction stir welding, programming",
    icon: Cog,
  },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="w-full min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#00575c] via-[#00747a] to-[#0a8f97] text-white pt-32 pb-20 lg:pt-36 lg:pb-24 px-6 lg:px-12 text-center overflow-hidden">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="inline-block text-xs uppercase font-mono tracking-[0.2em] font-semibold bg-white/15 text-white px-4 py-1.5 rounded-full mb-6 border border-white/20 shadow-xs">
            About Us
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            About ITS Cooling
          </h1>

          <div className="text-base sm:text-lg text-emerald-50/95 leading-relaxed font-normal text-left sm:text-center space-y-4">
            <p>
              Innovative Thermal Solutions (ITS) designs and manufactures custom, high-performance thermal management solutions in North America, specializing in Friction Stir Welding (FSW) and advanced cooling technologies. Our solutions include air-cooled heat sinks, liquid-cooled cold plates, heat pipe assemblies, custom copper and aluminum bus bars, and complete air and liquid cooling systems engineered for demanding applications.
            </p>
            <p>
              From concept to production, we are your single-source thermal management partner. Our experienced engineering team combines advanced thermal analysis, simulation, design optimization, prototyping, and manufacturing to develop solutions tailored to each customer&apos;s performance, reliability, and application requirements. We serve a broad range of industries, including Power Electronics, Battery and Energy Storage, Aerospace and Defence, RF and Microwave, Satellite Communications, Laser and Photonics, Medical, and Data Centres.
            </p>
            <p>
              Headquartered in Guelph, Ontario, Canada, ITS brings engineering and manufacturing together under one roof. Our in-house capabilities, including Friction Stir Welding, precision CNC machining, brazing, assembly, and thermal testing, provide greater control over product quality, performance, and production. As an ISO 9001:2015 QMS certified company, we are committed to delivering reliable, high-quality thermal solutions while helping our customers simplify their supply chains, reduce development risks, and accelerate time to market. From thermal design to North American manufacturing, ITS delivers integrated cooling solutions built around your application.
            </p>
            <p className="pt-2 font-medium">
              If you have any inquiries about ITS&apos; capabilities or about how ITS can help you in your thermal solution needs, please contact us at:{" "}
              <a
                href="mailto:engineering@itscooling.com"
                className="underline underline-offset-4 decoration-emerald-200 hover:text-white font-semibold transition-colors inline-flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4 inline" />
                engineering@itscooling.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 2. Company Milestones (2020 – 2026) */}
      <section className="relative w-full py-20 lg:py-28 px-6 lg:px-12 bg-gradient-to-b from-[#0b8d95] via-[#00585d] to-[#003c40] text-white overflow-hidden">
        {/* Radial grid accent */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:22px_22px] pointer-events-none" />

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="text-center mb-14 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
              Company Milestones
            </h2>
            <span className="inline-block text-xs uppercase font-mono tracking-widest font-semibold bg-white/12 border border-white/25 text-[#e6f6f7] px-4 py-1.5 rounded-full">
              2020 – 2026
            </span>
          </div>

          {/* Desktop alternating timeline (>= 1024px) */}
          <div className="hidden lg:block relative pb-4">
            {/* Horizontal timeline connecting beam */}
            <div className="absolute left-[3%] right-[3%] top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-white/20 via-[#7fe0e6] to-white/20 shadow-[0_0_16px_rgba(127,224,230,0.6)] z-0 rounded-full" />

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
                        <div className="relative bg-white text-slate-900 rounded-xl p-5 shadow-xl border-t-4 border-[#0b8d95] group-hover:-translate-y-1.5 transition-transform duration-300">
                          {/* Pointer line downwards to center circle */}
                          <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-0.5 h-4 bg-[#7fe0e6]" />
                          <span className="inline-block bg-[#00747a] text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded-full mb-2">
                            {item.step}
                          </span>
                          <h3 className="text-sm font-bold text-[#00585d] mb-1.5 leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Middle Year Badge */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white to-[#d9f3f4] text-[#00585d] font-extrabold text-base flex items-center justify-center shadow-[0_0_0_6px_rgba(255,255,255,0.15),0_0_24px_rgba(127,224,230,0.7)] group-hover:scale-110 transition-transform duration-300 my-2 z-20">
                      {item.year}
                    </div>

                    {/* Bottom slot: even items place card here */}
                    <div className="h-[230px] w-full flex flex-col justify-start pt-4">
                      {isEven && (
                        <div className="relative bg-white text-slate-900 rounded-xl p-5 shadow-xl border-t-4 border-[#0b8d95] group-hover:translate-y-1.5 transition-transform duration-300">
                          {/* Pointer line upwards to center circle */}
                          <div className="absolute left-1/2 -top-4 -translate-x-1/2 w-0.5 h-4 bg-[#7fe0e6]" />
                          <span className="inline-block bg-[#00747a] text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded-full mb-2">
                            {item.step}
                          </span>
                          <h3 className="text-sm font-bold text-[#00585d] mb-1.5 leading-snug">
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
            <div className="absolute left-8 top-6 bottom-6 w-1 bg-gradient-to-b from-[#7fe0e6] to-[#00747a] rounded-full z-0" />

            {milestones.map((item) => (
              <div key={item.year} className="relative flex items-start gap-5 z-10">
                <div className="shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-white to-[#d9f3f4] text-[#00585d] font-bold text-sm flex items-center justify-center shadow-[0_0_0_4px_rgba(255,255,255,0.2)]">
                  {item.year}
                </div>
                <div className="flex-1 bg-white text-slate-900 rounded-xl p-5 shadow-xl border-l-4 border-[#00747a]">
                  <span className="inline-block bg-[#00747a] text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded-full mb-1.5">
                    {item.step}
                  </span>
                  <h3 className="text-base font-bold text-[#00585d] mb-1">
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

      {/* 3. Workflow at ITS Cooling */}
      <section className="relative w-full py-20 lg:py-28 px-6 lg:px-12 bg-[#f2f8f8] border-b border-[#d8dedf]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d3b3e] mb-3">
              Workflow at ITS Cooling
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              Customer Inputs → Thermal → Mechanical → Manufacturing
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="relative bg-white rounded-2xl p-7 text-center shadow-[0_6px_22px_rgba(0,60,64,0.07)] border border-slate-200/80 hover:shadow-lg transition-shadow flex flex-col items-center"
                >
                  {/* Step Icon */}
                  <div className="w-20 h-20 rounded-full bg-[#00747a] flex items-center justify-center text-white shadow-[0_0_0_7px_#d4eaec] mb-4">
                    <Icon className="w-9 h-9 stroke-[1.8]" />
                  </div>

                  <span className="text-xs uppercase font-mono tracking-widest font-bold text-[#00747a] mb-1">
                    {step.step}
                  </span>

                  <h3 className="text-xl font-bold text-[#00747a] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow for desktop connecting cards */}
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-[#00747a] text-[#00747a] shadow-xs flex items-center justify-center">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Have a thermal management project? CTA */}
      <section className="relative w-full py-16 lg:py-24 px-6 lg:px-12 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0d3b3e] mb-8">
            Have a thermal management project?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#00747a] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg shadow-md hover:bg-[#005d62] transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border-2 border-[#00747a] text-[#00747a] font-mono text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#00747a] hover:text-white transition-colors"
            >
              Design Form
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
