"use client";

import Image from "next/image";
import Link from "next/link";
import { TechnologiesPreview } from "@/components/sections/TechnologiesPreview";
import { CapabilitiesPreview } from "@/components/sections/CapabilitiesPreview";
import { ProductsGallery } from "@/components/sections/ProductsGallery";
import { FacilityPreview } from "@/components/sections/FacilityPreview";
import { CaseStudiesPreview } from "@/components/sections/CaseStudiesPreview";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Award,
  Cpu,
  Layers,
  Wrench,
  Globe,
  TrendingDown
} from "lucide-react";
import { COMPANY_INFO, FSW_ADVANTAGES, WORKFLOW_STEPS } from "@/data/companyContent";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col pt-24">
      {/* 01 HERO SECTION */}
      <section
        ref={containerRef}
        className="relative w-full min-h-[92vh] flex items-center justify-center px-6 lg:px-12 overflow-hidden pb-16"
      >
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          {/* Cinematic lighting / vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-[#020617] z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/15 via-transparent to-transparent z-10" />

          <div className="w-full h-full bg-[#0F172A] relative">
            <Image
              src="/images/assets/cold_plate.webp"
              alt="ITS Liquid Cold Plate"
              fill
              sizes="100vw"
              priority
              className="object-cover object-center opacity-60 mix-blend-luminosity scale-105"
            />
          </div>
        </motion.div>

        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col justify-center pt-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-3 px-3 py-1.5 bg-teal-500/10 border border-teal-500/30 rounded-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-teal-400 text-xs font-mono uppercase tracking-[0.2em]">
                Turnkey Engineering & Manufacturing • ISO 9001:2015
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tighter text-white mb-8 drop-shadow-2xl"
            >
              ENGINEERED <br />
              TO CONTROL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-gray-400">
                HEAT.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl font-light mb-10 border-l-2 border-teal-400/60 pl-6 py-2 leading-relaxed"
            >
              We engineer the path from thermal challenge to finished hardware. Specializing in Friction Stir Welded (FSW) liquid cold plates, CFD thermal simulation, and 5-axis CNC machining in Guelph, Ontario.
            </motion.p>

            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center gap-4 mb-14"
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-teal-400 text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors inline-flex items-center gap-3 shadow-xl shadow-teal-500/20"
              >
                <span>Talk to a Thermal Engineer</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/technologies"
                className="px-8 py-4 bg-white/10 border border-white/20 text-white font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors inline-flex items-center gap-3"
              >
                <span>Explore Core Technologies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Telemetry Stats Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-black/70 backdrop-blur-md border border-white/10 font-mono text-xs"
            >
              <div>
                <span className="text-gray-500 block uppercase text-[10px]">Combined Experience</span>
                <span className="text-white font-bold text-sm md:text-base">50+ Years</span>
              </div>
              <div>
                <span className="text-gray-500 block uppercase text-[10px]">CEO Industry Leadership</span>
                <span className="text-teal-400 font-bold text-sm md:text-base">26 Yrs • 2 Patents</span>
              </div>
              <div>
                <span className="text-gray-500 block uppercase text-[10px]">Manufacturing Facility</span>
                <span className="text-white font-bold text-sm md:text-base">6,000 Sq Ft (Guelph)</span>
              </div>
              <div>
                <span className="text-gray-500 block uppercase text-[10px]">Quality Management</span>
                <span className="text-teal-400 font-bold text-sm md:text-base">ISO 9001:2015</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 02 STRATEGIC ADVANTAGES (Slide 41) */}
      <section className="relative w-full py-28 px-6 lg:px-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
            <div>
              <span className="text-teal-400 font-mono text-xs uppercase tracking-widest block mb-2">
                Slide 41 • Why ITS Cooling?
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                THE NORTH AMERICAN THERMAL PARTNER.
              </h2>
            </div>
            <p className="text-sm font-mono text-gray-400 max-w-md">
              Combining domestic agility and Canadian IP protection with global supply chain scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-[#020617] border border-white/10 p-6 flex flex-col justify-between hover:border-teal-500/40 transition-colors">
              <div>
                <Wrench className="w-6 h-6 text-teal-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">North American Production</h3>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  Locally manufactures precision engineered products in Guelph, Ontario with rapid turnarounds.
                </p>
              </div>
            </div>

            <div className="bg-[#020617] border border-white/10 p-6 flex flex-col justify-between hover:border-teal-500/40 transition-colors">
              <div>
                <Cpu className="w-6 h-6 text-teal-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">In-House FSW Specialty</h3>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  We specialize in Friction Stir Welding technology for high-performance, leak-free liquid cold plates.
                </p>
              </div>
            </div>

            <div className="bg-[#020617] border border-white/10 p-6 flex flex-col justify-between hover:border-teal-500/40 transition-colors">
              <div>
                <Award className="w-6 h-6 text-teal-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">50 Years Combined Experience</h3>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  Decades of engineering mastery in design, CFD modeling, fabrication, and thermal testing.
                </p>
              </div>
            </div>

            <div className="bg-[#020617] border border-white/10 p-6 flex flex-col justify-between hover:border-teal-500/40 transition-colors">
              <div>
                <Layers className="w-6 h-6 text-teal-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Great Local Talent</h3>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  Growing team of 27 expert technicians, thermal analysts, and precision CNC machinists.
                </p>
              </div>
            </div>

            <div className="bg-[#020617] border border-white/10 p-6 flex flex-col justify-between hover:border-teal-500/40 transition-colors">
              <div>
                <Globe className="w-6 h-6 text-teal-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Trusted Asian Suppliers</h3>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  Trusted Asian manufacturing suppliers provide cost-competitive pricing for high-volume programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 4-STEP WORKFLOW LIFECYCLE (Slide 42) */}
      <section className="relative w-full py-28 px-6 lg:px-12 bg-[#050B14] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
            <div>
              <span className="text-teal-400 font-mono text-xs uppercase tracking-widest block mb-2">
                Slide 42 • Workflow at ITS Cooling
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                THE 4-STEP DELIVERY WORKFLOW.
              </h2>
            </div>
            <Link
              href="/capabilities"
              className="text-xs font-mono uppercase tracking-widest text-teal-400 hover:text-white transition-colors inline-flex items-center gap-2"
            >
              <span>Explore Full Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((ws) => (
              <div
                key={ws.step}
                className="bg-[#020617] border border-white/10 p-6 flex flex-col justify-between hover:border-teal-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-teal-400 font-mono text-xl font-bold">0{ws.step}</span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 bg-white/5 px-2 py-0.5 border border-white/10">
                      {ws.phase}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{ws.title}</h3>
                  <p className="text-xs text-gray-300 font-light leading-relaxed mb-6">{ws.details}</p>
                </div>

                <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-teal-400">
                  <span className="text-gray-500 block text-[9px] uppercase mb-0.5">Deliverable:</span>
                  {ws.deliverables}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 CORE TECHNOLOGIES & CAPABILITIES */}
      <TechnologiesPreview />
      <CapabilitiesPreview />

      {/* 05 FSW 8 TECHNICAL FACTORS SPOTLIGHT (Slide 27) */}
      <section className="relative w-full py-28 px-6 lg:px-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <span className="text-teal-400 font-mono text-xs uppercase tracking-widest block mb-2">
              Slide 27 Spotlight • Friction Stir Welding (FSW)
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              WHY FRICTION STIR WELDING?
            </h2>
            <p className="text-gray-300 font-light text-base leading-relaxed">
              Solid-state joining without melting the parent aluminum guarantees leak tightness, eliminates casting voids, and retains pure thermal conductivity across the joint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FSW_ADVANTAGES.map((adv) => (
              <div
                key={adv.num}
                className="bg-[#020617] border border-white/10 p-6 hover:border-teal-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-teal-400 font-mono text-xs font-bold block mb-2">
                    Factor {adv.num}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{adv.title}</h3>
                  <p className="text-xs text-gray-300 font-light leading-relaxed">{adv.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 PRODUCTS */}
      <ProductsGallery />

      {/* 07 CASE STUDIES */}
      <CaseStudiesPreview />

      {/* 08 FACILITY */}
      <FacilityPreview />

      {/* 09 CEO TESTIMONIAL & CERTIFICATION BADGE (Slide 45) */}
      <section className="relative w-full py-28 px-6 lg:px-12 bg-[#020617] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#0F172A] to-[#020617] border border-white/15 p-8 lg:p-14 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
                <div className="w-full max-w-sm aspect-[4/5] bg-black border border-white/20 relative overflow-hidden group shadow-xl">
                  <Image
                    src="/images/assets/founder/DSC00309 (1).JPG"
                    alt="Ahmed Zaghlol, PhD, PEng"
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest block mb-1">
                      President & CEO
                    </span>
                    <h4 className="text-xl font-bold text-white">Ahmed Zaghlol, Ph.D., P.Eng.</h4>
                  </div>
                </div>

                <div className="w-full max-w-sm mt-3 grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="bg-black/50 border border-white/10 p-2.5 text-center">
                    <span className="text-teal-400 font-bold block text-sm">26 Yrs</span>
                    <span className="text-gray-400 text-[10px] uppercase">Industry Experience</span>
                  </div>
                  <div className="bg-black/50 border border-white/10 p-2.5 text-center">
                    <span className="text-teal-400 font-bold block text-sm">2 Patents</span>
                    <span className="text-gray-400 text-[10px] uppercase">Thermal Inventions</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono uppercase tracking-widest mb-6">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Slide 45 • Executive Leadership Statement</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                    "Turnkey Engineering & Manufacturing Delivering On Time."
                  </h3>

                  <blockquote className="text-gray-300 font-light text-base lg:text-lg italic leading-relaxed mb-8 border-l-2 border-teal-400 pl-6 py-1">
                    "{COMPANY_INFO.ceoQuote}"
                  </blockquote>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 text-xs font-mono">
                  <a
                    href={`mailto:${COMPANY_INFO.ceoEmail}`}
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    Direct: {COMPANY_INFO.ceoEmail}
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    Office: {COMPANY_INFO.phone}
                  </a>
                  <Link
                    href="/team"
                    className="inline-flex items-center gap-1.5 text-teal-400 hover:text-white transition-colors ml-auto"
                  >
                    <span>Meet the Full Engineering Team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
