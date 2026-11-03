import Link from "next/link";
import { ShieldCheck, MapPin, Phone, Mail, ArrowUpRight, Cpu } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyContent";

export function Footer() {
  return (
    <footer className="w-full bg-slate-50 text-slate-800 pt-20 pb-12 px-6 lg:px-12 border-t border-slate-200 relative overflow-hidden">
      {/* Light blueprint grid background */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-50 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Info (2 columns) */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3.5 mb-5 group">
              <div className="w-10 h-10 rounded-md bg-slate-950 text-white flex items-center justify-center font-bold text-base tracking-tight group-hover:bg-sky-600 transition-colors shadow-sm">
                ITS
              </div>
              <div>
                <span className="block font-extrabold text-lg tracking-tight text-slate-950 leading-tight">
                  INNOVATIVE THERMAL
                </span>
                <span className="block text-xs uppercase tracking-[0.2em] text-slate-500 font-mono font-semibold">
                  SOLUTIONS INC.
                </span>
              </div>
            </Link>

            <p className="text-slate-600 text-sm max-w-sm mb-6 leading-relaxed font-normal">
              100% custom-designed and manufactured liquid cold plates and heat sinks. A one-stop turnkey solution from concept to finished hardware under one roof in Guelph, Ontario. No shelf stock.
            </p>

            <div className="space-y-2.5 text-xs font-mono text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>290 Southgate Drive, Unit #2, Guelph, ON N1G 4P5, Canada</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-sky-700 font-bold transition-colors">
                  +1 (519) 763-4454
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.salesEmail}`} className="hover:text-sky-700 font-bold transition-colors">
                  {COMPANY_INFO.salesEmail}
                </a>
              </div>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-300 rounded-md text-xs font-mono text-slate-800 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>ISO 9001:2015 Certified System</span>
            </div>
          </div>

          {/* Col 1: Technologies */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-[0.18em] text-slate-900 mb-5 font-bold">
              Technologies
            </h4>
            <ul className="space-y-3 flex flex-col text-sm text-slate-600">
              <li>
                <Link href="/technologies/liquid-cooling" className="hover:text-sky-600 font-medium transition-colors">
                  Liquid Cooling
                </Link>
              </li>
              <li>
                <Link href="/technologies/air-cooling" className="hover:text-sky-600 font-medium transition-colors">
                  Air Cooling
                </Link>
              </li>
              <li>
                <Link href="/capabilities/friction-stir-welding" className="hover:text-sky-600 font-medium transition-colors">
                  Friction Stir Welding
                </Link>
              </li>
              <li>
                <Link href="/technologies/thermal-engineering" className="hover:text-sky-600 font-medium transition-colors">
                  Thermal Engineering & CFD
                </Link>
              </li>
              <li>
                <Link href="/capabilities/cnc-machining" className="hover:text-sky-600 font-medium transition-colors">
                  5-Axis CNC Machining
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Products */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-[0.18em] text-slate-900 mb-5 font-bold">
              Products
            </h4>
            <ul className="space-y-3 flex flex-col text-sm text-slate-600">
              <li>
                <Link href="/products/cold-plates" className="hover:text-sky-600 font-medium transition-colors">
                  Liquid Cold Plates
                </Link>
              </li>
              <li>
                <Link href="/products/liquid-cold-plates" className="hover:text-sky-600 font-medium transition-colors">
                  Machined Micro-Channel
                </Link>
              </li>
              <li>
                <Link href="/products/heat-sinks" className="hover:text-sky-600 font-medium transition-colors">
                  Air-Cooled Heat Sinks
                </Link>
              </li>
              <li>
                <Link href="/products/busbar" className="hover:text-sky-600 font-medium transition-colors">
                  Busbars & Interconnects
                </Link>
              </li>
              <li>
                <Link href="/products/heat-pipes" className="hover:text-sky-600 font-medium transition-colors">
                  Embedded Heat Pipes
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-[0.18em] text-slate-900 mb-5 font-bold">
              Industries
            </h4>
            <ul className="space-y-3 flex flex-col text-sm text-slate-600">
              <li>
                <Link href="/industries/power-electronics" className="hover:text-sky-600 font-medium transition-colors">
                  Power Electronics
                </Link>
              </li>
              <li>
                <Link href="/industries/ev-battery" className="hover:text-sky-600 font-medium transition-colors">
                  EV & Battery Systems
                </Link>
              </li>
              <li>
                <Link href="/industries/clean-energy" className="hover:text-sky-600 font-medium transition-colors">
                  Clean Energy & BESS
                </Link>
              </li>
              <li>
                <Link href="/industries/aerospace" className="hover:text-sky-600 font-medium transition-colors">
                  Aerospace & Defence
                </Link>
              </li>
              <li>
                <Link href="/industries/satellite" className="hover:text-sky-600 font-medium transition-colors">
                  Satellite Communications
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Quality */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-[0.18em] text-slate-900 mb-5 font-bold">
              Company
            </h4>
            <ul className="space-y-3 flex flex-col text-sm text-slate-600">
              <li>
                <Link href="/about" className="hover:text-sky-600 font-medium transition-colors">
                  About ITS
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-sky-600 font-medium transition-colors">
                  Engineering Team
                </Link>
              </li>
              <li>
                <Link href="/facility" className="hover:text-sky-600 font-medium transition-colors">
                  Guelph Facility
                </Link>
              </li>
              <li>
                <Link href="/quality" className="hover:text-sky-600 font-medium transition-colors">
                  Quality Management
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-sky-600 font-medium transition-colors">
                  Case Studies & Proof
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-600 font-medium transition-colors">
                  Contact / RFQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Coordinates & Copyright */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Innovative Thermal Solutions Inc. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Guelph, Ontario, Canada</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400 font-mono">43°30&apos;48.2&quot;N 80°13&apos;40.5&quot;W</span>
            <span className="text-slate-300">•</span>
            <span className="text-sky-700 font-bold">CANADIAN ADVANCED THERMAL MANUFACTURING</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
