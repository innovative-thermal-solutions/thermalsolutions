import Link from "next/link";
import { ShieldCheck, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyContent";

export function Footer() {
  return (
    <footer className="w-full bg-[#050B14] pt-24 pb-12 px-6 lg:px-12 border-t border-white/10 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Col 1: Brand & Overview */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-sm bg-teal-500 flex items-center justify-center font-mono font-bold text-black text-sm tracking-tighter">
                ITS
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                INNOVATIVE <span className="text-teal-400">THERMAL</span> SOLUTIONS
              </span>
            </Link>
            
            <p className="text-gray-400 font-light text-sm max-w-md mb-8 leading-relaxed">
              Turnkey engineering and manufacturing partner delivering quality heat sink products, Friction Stir Welded cold plates, and thermal systems on time for mission-critical electronics.
            </p>

            <div className="space-y-3 text-xs font-mono text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone} (Office) • {COMPANY_INFO.mobile} (Mobile)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
          
          {/* Col 2: Technologies */}
          <div>
            <h4 className="text-white font-mono font-semibold tracking-wider uppercase text-xs mb-6 text-teal-400">
              Technologies
            </h4>
            <ul className="space-y-3 flex flex-col text-sm font-light">
              <li>
                <Link href="/technologies/friction-stir-welding" className="text-gray-400 hover:text-white transition-colors">
                  Friction Stir Welding (FSW)
                </Link>
              </li>
              <li>
                <Link href="/technologies/liquid-cooling" className="text-gray-400 hover:text-white transition-colors">
                  Liquid Cooling & HyperCool
                </Link>
              </li>
              <li>
                <Link href="/technologies/air-cooling" className="text-gray-400 hover:text-white transition-colors">
                  Air Cooling & Skived Fins
                </Link>
              </li>
              <li>
                <Link href="/technologies/thermal-engineering" className="text-gray-400 hover:text-white transition-colors">
                  CFD Thermal Simulation
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="text-gray-400 hover:text-white transition-colors">
                  5-Axis CNC & Deep Drilling
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div>
            <h4 className="text-white font-mono font-semibold tracking-wider uppercase text-xs mb-6 text-teal-400">
              Products
            </h4>
            <ul className="space-y-3 flex flex-col text-sm font-light">
              <li>
                <Link href="/products/liquid-cold-plates" className="text-gray-400 hover:text-white transition-colors">
                  Liquid Cold Plates
                </Link>
              </li>
              <li>
                <Link href="/products/air-cooled-heat-sinks" className="text-gray-400 hover:text-white transition-colors">
                  Air-Cooled Heat Sinks
                </Link>
              </li>
              <li>
                <Link href="/products/heat-pipes" className="text-gray-400 hover:text-white transition-colors">
                  Embedded Heat Pipes
                </Link>
              </li>
              <li>
                <Link href="/products/busbar" className="text-gray-400 hover:text-white transition-colors">
                  BusBars & Power Distribution
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">
                  Application Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quality & Compliance */}
          <div>
            <h4 className="text-white font-mono font-semibold tracking-wider uppercase text-xs mb-6 text-teal-400">
              Quality & Trust
            </h4>
            <div className="p-4 bg-black/60 border border-teal-500/30 rounded-sm mb-4">
              <div className="flex items-center gap-2 text-teal-400 text-xs font-mono font-semibold mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>ISO 9001:2015</span>
              </div>
              <p className="text-[11px] text-gray-400 leading-snug">
                Certified January 17, 2021. Full QMS traceability and process control.
              </p>
            </div>
            
            <div className="space-y-2 text-xs font-mono text-gray-400">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>AS9100 Aerospace (In Progress)</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>CGP / ITAR Compliant (In Progress)</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                <span>North American Manufacturing</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-500 font-mono gap-4">
          <p>© {new Date().getFullYear()} Innovative Thermal Solutions Inc. All rights reserved. Confidential.</p>
          
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/facility" className="hover:text-teal-400 transition-colors">Facility (Guelph)</Link>
            <Link href="/team" className="hover:text-teal-400 transition-colors">Engineering Team</Link>
            <Link href="/industries" className="hover:text-teal-400 transition-colors">Industries Served</Link>
            <Link href="/contact" className="hover:text-teal-400 transition-colors flex items-center gap-1">
              <span>Contact Us</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
