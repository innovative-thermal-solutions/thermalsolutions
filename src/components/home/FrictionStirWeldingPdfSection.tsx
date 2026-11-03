"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Gauge } from "lucide-react";

export function FrictionStirWeldingPdfSection() {
  const openFswModal = () => {
    window.dispatchEvent(
      new CustomEvent("its-reference-modal", {
        detail: { type: "open-fsw-detail" },
      })
    );
  };

  return (
    <section id="fsw-process" className="relative w-full py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto">
        {/* Exact Section Heading from Design.pdf Page 2 */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold text-sky-700 px-2.5 py-0.5 bg-sky-50 border border-sky-300 rounded shadow-xs">
              06 / SOLID-STATE JOINING
            </span>
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold">
              Hermetic Manufacturing
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-slate-950 uppercase leading-[1.02] mb-4">
            Friction Stir Welding
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Solid-state joining without melting the base metal: zero porosity, maximum parent metal tensile strength, and leak-proof internal channels for high-reliability liquid cold plates.
          </p>
        </div>

        {/* Split Layout Exactly Matching Design.pdf Page 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-50 border-2 border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-sm">
          {/* Left Column: Manufacturing / FSW Photograph */}
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-300 shadow-md">
            <Image
              src="/images/manufacturing/fsw-process-01.png"
              alt="Friction Stir Welding in-house precision machine milling cover onto liquid cold plate"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/75 backdrop-blur-md rounded border border-white/15 text-[10px] font-mono tracking-widest text-[#81e6d6]">
              IN-HOUSE CNC &amp; FSW / GUELPH, ONTARIO
            </div>
          </div>

          {/* Right Column: Exact Content from Design Reference */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="text-[11px] font-mono tracking-widest text-sky-700 uppercase mb-2 font-bold flex items-center gap-1.5">
              <span>IN-HOUSE MANUFACTURING</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight text-slate-950 uppercase leading-[0.98] mb-6">
              ENGINEERED. <br />
              MILLED. <br />
              WELDED. <br />
              <span className="text-sky-600">TESTED HERE.</span>
            </h3>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Turnkey engineering and in-house advanced thermal manufacturing executed under one roof in Guelph, Ontario. From custom channel CNC routing and Friction Stir Welding to CMM coordinate metrology and helium mass-spectrometer leak certification.
            </p>

            <div className="space-y-2.5 mb-8 text-xs font-mono text-slate-700 border-t border-slate-200 pt-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>ISO 9001:2015 Certified Quality Management System</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>6,000 sq ft dedicated advanced thermal machining &amp; FSW facility</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>North American supply-chain precision &amp; rapid prototyping</span>
              </div>
            </div>

            <div>
              <button
                onClick={openFswModal}
                className="px-7 py-3.5 bg-slate-950 hover:bg-sky-600 text-white font-bold text-xs font-mono uppercase tracking-wider rounded-md transition-colors inline-flex items-center gap-3 cursor-pointer shadow-md"
              >
                <span>INSIDE ITS MANUFACTURING</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
