"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, Upload, ShieldCheck, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyContent";
import { DitherWave } from "@/components/ui/DitherWave";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <main id="main-content" className="w-full min-h-screen bg-slate-50 pt-28 pb-20">
      {/* Detail Hero */}
      <section className="relative w-full bg-gradient-to-br from-white via-slate-50 to-sky-50 border-b border-slate-200 py-16 lg:py-24 px-6 lg:px-12 overflow-hidden">
        {/* Dynamic Dither Wave Background */}
        <DitherWave
          color1="#0284c7"
          color2="#38bdf8"
          speed={0.35}
          frequency={2.3}
          amplitude={0.28}
          ditherSize={2.0}
          opacity={0.16}
        />
        <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold text-sky-600 px-2 py-0.5 bg-white border border-slate-200 rounded-sm">
                ITS
              </span>
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold">
                Talk to a Thermal Engineer
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6">
              Bring us your cooling requirements.
            </h1>
            <p className="text-slate-700 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal mb-4">
              We don&apos;t sell standard cooling products off shelves. Everything is 100% custom engineered for your specific thermal envelope, flow rate, and packaging constraints.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-100/70 border border-sky-300 rounded-lg text-xs font-mono font-semibold text-sky-900">
              <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
              <span>One-Stop Turnkey Partner: Concept to Hardware Under One Roof in Guelph, ON</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Form & Aside */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Form (1.5fr) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm">
            {submitted ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-6 border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-3">
                  Engineering Request Received
                </h3>
                <p className="text-slate-600 text-base max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you for submitting your project specifications. A thermal engineering specialist from our Guelph, Ontario office will review your requirements and respond within 1 business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-slate-950 text-white font-mono text-xs uppercase tracking-wider rounded-sm hover:bg-sky-600 transition-colors"
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-2 font-semibold">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:border-sky-600 focus:bg-white transition-all font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-2 font-semibold">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Organization or institution"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:border-sky-600 focus:bg-white transition-all font-sans"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-2 font-semibold">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:border-sky-600 focus:bg-white transition-all font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-2 font-semibold flex justify-between">
                      <span>Phone Number</span>
                      <span className="text-slate-400 font-normal">Optional</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:border-sky-600 focus:bg-white transition-all font-sans"
                    />
                  </div>
                </div>

                {/* Application & Stage */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-2 font-semibold">
                      Application
                    </label>
                    <select
                      defaultValue=""
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:border-sky-600 focus:bg-white transition-all font-sans"
                    >
                      <option value="" disabled>Select application</option>
                      <option value="power">Power electronics</option>
                      <option value="ev">EV &amp; battery systems</option>
                      <option value="clean">Clean energy</option>
                      <option value="aerospace">Aerospace &amp; defence</option>
                      <option value="satellite">Satellite communications</option>
                      <option value="automation">Industrial automation</option>
                      <option value="other">Other specialized application</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-2 font-semibold">
                      Project Stage
                    </label>
                    <select
                      defaultValue=""
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:border-sky-600 focus:bg-white transition-all font-sans"
                    >
                      <option value="" disabled>Select stage</option>
                      <option value="concept">Concept / feasibility</option>
                      <option value="design">Design development</option>
                      <option value="prototype">Prototype build</option>
                      <option value="production">Volume production</option>
                    </select>
                  </div>
                </div>

                {/* Thermal Challenge */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-2 font-semibold">
                    Thermal Challenge &amp; Operating Conditions
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe heat dissipation (Watts), coolant type, flow constraints, space envelope, or target maximum junction temperature..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:border-sky-600 focus:bg-white transition-all font-sans resize-y"
                  />
                </div>

                {/* File Upload Dropzone */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-2 font-semibold flex justify-between">
                    <span>Supporting File</span>
                    <span className="text-slate-400 font-normal">Optional · PDF, STEP, drawing · 10 MB max</span>
                  </label>
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-sky-500 transition-colors bg-slate-50/50">
                    <input
                      type="file"
                      id="file-upload"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setSelectedFile(e.target.files[0].name);
                        }
                      }}
                    />
                    <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
                      <Upload className="w-8 h-8 text-sky-600 mb-2" />
                      <span className="text-sm font-medium text-slate-800">
                        {selectedFile ? `Selected: ${selectedFile}` : "Click to attach CAD or drawing specifications"}
                      </span>
                      <span className="text-xs text-slate-500 mt-1">
                        STEP, IGES, SLDPRT, DWG, PDF
                      </span>
                    </label>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>NDAs respected. Confidential engineering review.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-950 text-white hover:bg-sky-600 font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md cursor-pointer disabled:opacity-60"
                  >
                    <span>{loading ? "Transmitting..." : "Send Engineering Request"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Aside (0.5fr) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
              <span className="text-xs uppercase font-mono tracking-widest text-slate-400 block mb-2 font-semibold">
                Prefer to speak directly?
              </span>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-2xl sm:text-3xl font-bold font-mono text-slate-950 hover:text-sky-600 transition-colors block mb-4"
              >
                +1 (519) 763-4454
              </a>
              <div className="space-y-4 text-sm text-slate-600 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-1" />
                  <address className="not-italic leading-relaxed">
                    290 Southgate Drive, Unit #2,<br />
                    Guelph, ON N1G 4P5, Canada
                  </address>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.salesEmail}`} className="hover:text-sky-600 font-mono text-xs">
                    {COMPANY_INFO.salesEmail}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-sky-600 shrink-0" />
                  <span className="text-xs font-mono text-slate-500">
                    Mon - Fri: 8:00 AM - 5:00 PM EST
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-sky-50 rounded-2xl border border-sky-100 p-8">
              <h4 className="text-sm font-bold uppercase font-mono tracking-wider text-sky-950 mb-2">
                Engineering Proximity
              </h4>
              <p className="text-xs leading-relaxed text-slate-600 mb-4 font-mono">
                Located within Ontario&#39;s technological and manufacturing hub, providing rapid design turns, domestic prototyping, and secure North American supply chain confidence.
              </p>
              <div className="text-xs font-mono font-semibold text-sky-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>ISO 9001:2015 Registered Facility</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
