"use client";

import Link from "next/link";
import { ShieldCheck, MapPin, Phone, Mail, ArrowUpRight, Cpu } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyContent";

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#003b3e] via-[#01747A] to-[#002f32] text-white pt-20 pb-12 px-6 lg:px-12 border-t border-[#015e63] relative overflow-hidden">
      {/* Subtle blueprint grid background */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none" 
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Info (2 columns) */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3.5 mb-6 group">
              <img
                src="/images/logo/its-logo-tight.svg"
                alt="Innovative Thermal Solutions - ITS Cooling Logo"
                className="h-16 sm:h-20 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
              />
            </Link>

            <p className="text-teal-50 text-sm max-w-sm mb-6 leading-relaxed font-normal">
              100% custom-designed and manufactured liquid cold plates and heat sinks. A one-stop turnkey solution from concept to finished hardware under one roof in Guelph, Ontario. No shelf stock.
            </p>

            <div className="space-y-2.5 text-xs font-mono text-teal-100">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-200 shrink-0 mt-0.5" />
                <span>290 Southgate Drive, Unit #2, Guelph, ON N1G 4P5, Canada</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-200 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white font-bold transition-colors">
                  +1 (519) 763-4454
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-200 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.salesEmail}`} className="hover:text-white font-bold transition-colors">
                  {COMPANY_INFO.salesEmail}
                </a>
              </div>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#002f32]/80 border border-white/20 rounded-md text-xs font-mono text-white shadow-xs">
              <ShieldCheck className="w-4 h-4 text-teal-200" />
              <span>ISO 9001:2015 Certified System</span>
            </div>
          </div>

          {/* Col 1: Technologies */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-[0.18em] text-white mb-5 font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-200" />
              Technologies
            </h4>
            <ul className="space-y-3 flex flex-col text-sm text-teal-100">
              <li>
                <Link href="/technologies/liquid-cooling" className="hover:text-white font-medium transition-colors">
                  Liquid Cooling
                </Link>
              </li>
              <li>
                <Link href="/technologies/air-cooling" className="hover:text-white font-medium transition-colors">
                  Air Cooling
                </Link>
              </li>
              <li>
                <Link href="/capabilities/friction-stir-welding" className="hover:text-white font-medium transition-colors">
                  Friction Stir Welding
                </Link>
              </li>
              <li>
                <Link href="/technologies/thermal-engineering" className="hover:text-white font-medium transition-colors">
                  Thermal Engineering &amp; CFD
                </Link>
              </li>
              <li>
                <Link href="/thermal-simulation" className="hover:text-white font-medium transition-colors">
                  CFD Thermal Simulator
                </Link>
              </li>
              <li>
                <Link href="/capabilities/cnc-machining" className="hover:text-white font-medium transition-colors">
                  5-Axis CNC Machining
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Products */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-[0.18em] text-white mb-5 font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-200" />
              Products &amp; Portfolio
            </h4>
            <ul className="space-y-3 flex flex-col text-sm text-teal-100">
              <li>
                <Link href="/portfolio" className="text-white font-bold hover:text-teal-200 transition-colors flex items-center gap-1.5">
                  <span>Product Portfolio</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 bg-white text-[#01747A] font-bold rounded">New</span>
                </Link>
              </li>
              <li>
                <Link href="/products/cold-plates" className="hover:text-white font-medium transition-colors">
                  Liquid Cold Plates
                </Link>
              </li>
              <li>
                <Link href="/products/liquid-cold-plates" className="hover:text-white font-medium transition-colors">
                  Machined Micro-Channel
                </Link>
              </li>
              <li>
                <Link href="/products/heat-sinks" className="hover:text-white font-medium transition-colors">
                  Air-Cooled Heat Sinks
                </Link>
              </li>
              <li>
                <Link href="/products/busbar" className="hover:text-white font-medium transition-colors">
                  Busbars &amp; Interconnects
                </Link>
              </li>
              <li>
                <Link href="/products/heat-pipes" className="hover:text-white font-medium transition-colors">
                  Embedded Heat Pipes
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-[0.18em] text-white mb-5 font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00747a]" />
              Industries
            </h4>
            <ul className="space-y-3 flex flex-col text-sm text-[#9da8a9]">
              <li>
                <Link href="/industries/power-electronics" className="hover:text-white font-medium transition-colors">
                  Power Electronics
                </Link>
              </li>
              <li>
                <Link href="/industries/ev-battery" className="hover:text-white font-medium transition-colors">
                  EV & Battery Systems
                </Link>
              </li>
              <li>
                <Link href="/industries/clean-energy" className="hover:text-white font-medium transition-colors">
                  Clean Energy & BESS
                </Link>
              </li>
              <li>
                <Link href="/industries/aerospace" className="hover:text-white font-medium transition-colors">
                  Aerospace & Defence
                </Link>
              </li>
              <li>
                <Link href="/industries/satellite" className="hover:text-white font-medium transition-colors">
                  Satellite Communications
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Quality */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-[0.18em] text-white mb-5 font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00747a]" />
              Company
            </h4>
            <ul className="space-y-3 flex flex-col text-sm text-[#9da8a9]">
              <li>
                <Link href="/about" className="hover:text-white font-medium transition-colors">
                  About ITS
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white font-medium transition-colors">
                  Engineering Team
                </Link>
              </li>
              <li>
                <Link href="/facility" className="hover:text-white font-medium transition-colors">
                  Guelph Facility
                </Link>
              </li>
              <li>
                <Link href="/quality" className="hover:text-white font-medium transition-colors">
                  Quality Management
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white font-medium transition-colors">
                  Case Studies & Proof
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white font-medium transition-colors">
                  Contact / RFQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Coordinates, Source modal trigger & Copyright */}
        <div className="pt-8 border-t border-[#233134] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7f7c7d]">
          <div className="flex items-center gap-3">
            <span>© 2026 Innovative Thermal Solutions Inc. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline text-[#9da8a9]">Guelph, Ontario, Canada</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(
                    new CustomEvent("its-reference-modal", {
                      detail: { type: "open-sources-detail" },
                    })
                  );
                }
              }}
              className="text-[#00747a] hover:text-white hover:underline font-bold cursor-pointer"
            >
              Content sources ↗
            </button>
            <span className="text-slate-700">•</span>
            <a href="https://www.itscooling.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              itscooling.com ↗
            </a>
            <span className="text-slate-700">•</span>
            <a href="#home" className="hover:text-white transition-colors">
              Back to top ↑
            </a>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="text-[#9da8a9] font-mono hidden sm:inline">43.51° N / 80.21° W</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
