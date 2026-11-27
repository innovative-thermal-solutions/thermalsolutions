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
    <section id="contact" className="relative w-full bg-[#f8faf9] text-[#141f22] py-20 px-6 sm:px-8 lg:px-14 border-b border-[#d8dedf] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,116,122,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,116,122,0.12) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column Callout */}
        <div className="lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#00747a] font-bold mb-4">
            {contactData.badge}
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-medium tracking-tight leading-[0.98] mb-6 text-[#141f22]">
            Tell us what’s.<br />
            <span className="text-[#00747a]">Getting too hot.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mb-8 max-w-lg font-normal leading-relaxed">
            {contactData.subtitle}
          </p>
          <button
            onClick={openInquiry}
            className="px-8 py-4 bg-[#00747a] hover:bg-[#005d62] text-white font-bold text-xs font-mono uppercase tracking-wider rounded transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-4 cursor-pointer shadow-md hover:shadow-lg"
          >
            <span>{contactData.ctaText}</span>
            <span className="text-lg">↗</span>
          </button>
        </div>

        {/* Right Column Verified Contact Details */}
        <div className="lg:col-span-5 bg-white border border-[#d8dedf] p-8 sm:p-10 rounded-2xl shadow-lg flex flex-col justify-between space-y-6 text-xs font-mono">
          <div>
            <span className="text-[10px] tracking-widest text-[#00747a] uppercase block mb-3 font-bold">
              ENGINEERING &amp; SALES DESK
            </span>
            <a
              href={`mailto:${contactData.email}`}
              className="text-xl sm:text-2xl font-serif font-bold text-[#141f22] hover:text-[#00747a] transition-colors block mb-2"
            >
              {contactData.email} ↗
            </a>
            <a
              href={`tel:${contactData.phone.replace(/[^0-9+]/g, '')}`}
              className="text-lg font-mono text-[#00747a] hover:underline transition-colors block"
            >
              {contactData.phone} ↗
            </a>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <span className="text-[10px] tracking-widest text-slate-500 uppercase block mb-1">
              HEADQUARTERS &amp; MANUFACTURING PLANT
            </span>
            <p className="text-slate-800 text-xs font-sans leading-relaxed">
              {contactData.address}
            </p>
          </div>

          <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-slate-500 text-[11px]">
            <span>Production Hours</span>
            <span className="text-[#00747a] font-semibold">{contactData.hours}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
