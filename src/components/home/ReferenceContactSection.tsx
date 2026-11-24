"use client";

import React from "react";
import { CMSHomePageContent } from "@/lib/cms/types";

interface Props {
  content?: CMSHomePageContent["contact"];
}

export function ReferenceContactSection({ content }: Props) {
  const contactData = content || {
    badge: "YOUR NEXT BREAKTHROUGH STARTS HERE",
    headline: "Tell us what’s getting too hot.",
    subtitle: "Bring us the challenge. Let’s engineer the solution.",
    ctaText: "Start your project",
    email: "Engineering@itscooling.com",
    phone: "+1 (519) 763-4454",
    address: "290 Southgate Drive, Unit #2, Guelph, ON N1G 4P5, Canada",
    hours: "MON–FRI / 8:30 AM–5:00 PM EASTERN",
  };

  const openInquiry = () => {
    window.dispatchEvent(
      new CustomEvent("its-reference-modal", {
        detail: { type: "open-inquiry" },
      })
    );
  };

  return (
    <section id="contact" className="relative w-full bg-gradient-to-br from-[#004d52] via-[#01747A] to-[#005a5f] text-white py-20 px-6 sm:px-8 lg:px-12 border-b border-[#015e63]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Callout */}
        <div className="lg:col-span-7">
          <p className="text-[11px] font-mono tracking-widest text-teal-200 uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-200 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            {contactData.badge}
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-medium tracking-tight leading-[0.98] mb-6 text-white">
            {contactData.headline}
          </h2>
          <p className="text-teal-50 text-base sm:text-lg mb-8 max-w-lg font-normal">
            {contactData.subtitle}
          </p>
          <button
            onClick={openInquiry}
            className="px-8 py-4 bg-white hover:bg-slate-100 text-[#01747A] font-bold text-xs font-mono uppercase tracking-wider rounded transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-4 cursor-pointer shadow-lg shadow-black/10"
          >
            <span>{contactData.ctaText}</span>
            <span className="text-lg">↗</span>
          </button>
        </div>

        {/* Right Column Verified Contact Details */}
        <div className="lg:col-span-5 bg-[#003b3e]/90 border border-white/20 p-8 rounded-lg flex flex-col justify-between space-y-6 text-xs font-mono">
          <div>
            <span className="text-[10px] tracking-widest text-teal-200 uppercase block mb-3 font-bold">
              ENGINEERING &amp; SALES
            </span>
            <a
              href={`mailto:${contactData.email}`}
              className="text-xl sm:text-2xl font-serif font-bold text-white hover:text-teal-200 transition-colors block mb-2"
            >
              {contactData.email} ↗
            </a>
            <a
              href={`tel:${contactData.phone.replace(/[^0-9+]/g, '')}`}
              className="text-lg font-mono text-teal-50 hover:text-white transition-colors block"
            >
              {contactData.phone} ↗
            </a>
          </div>

          <div className="border-t border-white/20 pt-6">
            <p className="text-teal-50 text-sm font-sans leading-relaxed mb-3 whitespace-pre-line">
              {contactData.address}
            </p>
            <span className="text-[11px] text-teal-200/80 tracking-wider">
              {contactData.hours}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
