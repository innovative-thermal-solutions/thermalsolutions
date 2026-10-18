"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone, Mail, Clock, ShieldCheck, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyContent";

export function FinalCta() {
  return (
    <section className="relative w-full py-24 sm:py-28 px-6 lg:px-12 bg-gradient-to-br from-white via-sky-50/70 to-blue-50/60 border-t border-slate-200 text-slate-900 overflow-hidden">
      {/* Background blueprint grid & ambient cyan glow */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-sky-200/50 rounded-full blur-[100px] pointer-events-none" />

      {/* Right Column Cold Plate Render - Crisp Light Presentation */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-1/2 h-full opacity-20 lg:opacity-30 pointer-events-none flex items-center justify-end">
        <Image
          src="/images/products/hypercool-cold-plate.png"
          alt="ITS Liquid Cold Plate Engineering"
          width={700}
          height={700}
          className="object-contain max-h-[500px] scale-110 -rotate-6 drop-shadow-2xl"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs font-bold text-sky-700 px-2.5 py-0.5 bg-sky-50 border border-sky-300 rounded shadow-xs">
              11
            </span>
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Start a Conversation
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-950 uppercase leading-[0.9] mb-6">
            Bring Us Your <br />
            <span className="text-sky-600">Cooling Requirements.</span>
          </h2>

          <p className="text-slate-700 text-lg sm:text-xl font-normal leading-relaxed mb-8 max-w-2xl">
            We don’t sell standard cooling products off shelves. Customers bring their project thermal requirements to us, and we handle the entire process — from initial design and CFD simulation to prototyping and final manufacturing, all under one roof in Guelph, Ontario.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              href="/contact"
              className="shine-sweep inline-flex items-center gap-2 px-8 py-4 bg-slate-950 text-white hover:bg-sky-600 font-bold text-xs uppercase tracking-[0.14em] rounded-md transition-all shadow-md hover:shadow-xl group"
            >
              <span>Talk to a Thermal Engineer</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/technologies"
              className="inline-flex items-center gap-2 px-6 py-4 bg-white hover:bg-slate-50 text-slate-800 hover:text-sky-700 font-bold text-xs uppercase tracking-[0.14em] rounded-md transition-colors border border-slate-300 shadow-xs"
            >
              <span>Explore Technologies</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Direct Telemetry Contact Band */}
          <div className="pt-6 border-t border-slate-200/90 flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-mono text-slate-600">
            <span className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-sky-700 font-semibold transition-colors">
                {COMPANY_INFO.phone}
              </a>
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-sky-600" />
              <a href={`mailto:${COMPANY_INFO.salesEmail}`} className="hover:text-sky-700 font-semibold transition-colors">
                {COMPANY_INFO.salesEmail}
              </a>
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-2 text-slate-700 font-medium">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>RFQ response within 24 business hours</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
