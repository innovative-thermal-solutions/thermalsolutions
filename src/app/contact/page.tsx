"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ShieldCheck, CheckCircle2, Send, Clock, Building2 } from "lucide-react";
import { COMPANY_INFO, TEAM_MEMBERS } from "@/data/companyContent";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    stage: "Active Engineering Design",
    industry: "EV & Battery Systems",
    technology: "Friction Stir Welded Cold Plates",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden pt-32 pb-28">
      {/* Background glow */}
      <div className="absolute top-20 right-10 w-[700px] h-[500px] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <section className="px-6 lg:px-12 mb-16 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-teal-400 font-mono text-xs tracking-[0.25em] uppercase">
            Direct Engineering Inquiry & RFQ
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-8 max-w-4xl">
          CONNECT WITH OUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-gray-400">
            ENGINEERING TEAM.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl border-l-2 border-teal-400/50 pl-6 py-2">
          Discuss your thermal dissipation targets, submit 3D CAD step files, or request prototype manufacturing quotes. Our North American engineering center provides preliminary reviews within 24–48 hours.
        </p>
      </section>

      {/* Main Grid: Form + Detailed Contact Directory */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* Form Column */}
        <div className="lg:col-span-7">
          <div className="bg-[#020617] border border-white/10 p-8 lg:p-12 relative shadow-2xl">
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">Request Feasibility / RFQ</h2>
                <span className="text-xs font-mono text-gray-400">All submissions handled under strict NDA standards</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-teal-400 bg-teal-500/10 px-3 py-1.5 border border-teal-500/20">
                <Clock className="w-3.5 h-3.5" />
                <span>24–48hr Response</span>
              </div>
            </div>

            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-400 flex items-center justify-center text-teal-400 mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Inquiry Received</h3>
                <p className="text-gray-300 font-light max-w-md mx-auto mb-6">
                  Thank you, {formData.name || "Customer"}. Our technical sales and thermal engineering leads have received your details and will follow up promptly.
                </p>
                <div className="text-xs font-mono text-gray-400 p-4 bg-black/60 border border-white/10 max-w-md">
                  For urgent requirements, call directly: <span className="text-teal-400">{COMPANY_INFO.phone}</span> or email <span className="text-teal-400">{COMPANY_INFO.salesEmail}</span>.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-black border border-white/20 p-4 text-white placeholder-gray-600 focus:border-teal-400 outline-none transition-colors text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                      Company / Organization *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. CleanTech Systems"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-black border border-white/20 p-4 text-white placeholder-gray-600 focus:border-teal-400 outline-none transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                      Business Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-black border border-white/20 p-4 text-white placeholder-gray-600 focus:border-teal-400 outline-none transition-colors text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-black border border-white/20 p-4 text-white placeholder-gray-600 focus:border-teal-400 outline-none transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                      Industry Vertical
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="bg-black border border-white/20 p-4 text-white focus:border-teal-400 outline-none transition-colors text-sm appearance-none"
                    >
                      <option>EV & Battery Systems</option>
                      <option>Power Converters & Automation</option>
                      <option>Aerospace & Defense</option>
                      <option>Clean Energy & Inverters</option>
                      <option>Satellites & Telecommunications</option>
                      <option>Other High-Power Electronics</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                      Technology Focus
                    </label>
                    <select
                      value={formData.technology}
                      onChange={(e) => setFormData({ ...formData, technology: e.target.value })}
                      className="bg-black border border-white/20 p-4 text-white focus:border-teal-400 outline-none transition-colors text-sm appearance-none"
                    >
                      <option>Friction Stir Welded (FSW) Cold Plates</option>
                      <option>HyperCool Liquid Cold Plates</option>
                      <option>Copper Vacuum Brazed Cold Plates</option>
                      <option>Extruded Air-Cooled Heat Sinks</option>
                      <option>Skived Fin Heat Sinks</option>
                      <option>Embedded Heat Pipe Solutions</option>
                      <option>Custom BusBars & Structural Cooling</option>
                      <option>CFD Thermal Simulation & Design</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                    Project Stage
                  </label>
                  <select
                    value={formData.stage}
                    onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                    className="bg-black border border-white/20 p-4 text-white focus:border-teal-400 outline-none transition-colors text-sm appearance-none"
                  >
                    <option>Initial Conceptual / Feasibility</option>
                    <option>Active Engineering Design (CFD / CAD)</option>
                    <option>Prototyping & Experimental Validation</option>
                    <option>High-Volume Production Ramp</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                    Thermal Challenge Details / Boundary Conditions *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Provide details on: heat load (W), maximum junction temperature (°C), packaging dimensions, coolant type (water-glycol, etc.), flow rate (LPM), and target delivery timeframe..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-black border border-white/20 p-4 text-white placeholder-gray-600 focus:border-teal-400 outline-none transition-colors text-sm resize-none"
                  />
                </div>

                <div className="p-4 bg-black/40 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-white block mb-0.5">Attach Technical Drawings</span>
                    <span className="text-[11px] text-gray-400 font-mono">Upload STEP, IGES, PDF drawings (or send directly via email)</span>
                  </div>
                  <input
                    type="file"
                    className="text-xs text-gray-400 file:mr-3 file:py-2 file:px-3 file:border file:border-white/20 file:bg-white/10 file:text-white file:text-xs file:font-mono file:cursor-pointer hover:file:bg-teal-400 hover:file:text-black transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-teal-400 text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors inline-flex items-center justify-center gap-3 shadow-lg shadow-teal-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Engineering Request</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Directory & Headquarters Info Column */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Facility Card */}
          <div className="bg-[#020617] border border-white/10 p-8 shadow-xl">
            <div className="flex items-center gap-3 text-teal-400 mb-4">
              <Building2 className="w-5 h-5" />
              <span className="text-xs font-mono uppercase tracking-widest">Headquarters & Manufacturing</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Innovative Thermal Solutions Inc.</h3>
            
            <div className="space-y-2 text-sm text-gray-300 font-light mb-6">
              <p className="font-mono text-white">{COMPANY_INFO.address}</p>
              <p className="text-xs font-mono text-gray-400">6,000 sq ft Precision Manufacturing & Thermal Lab</p>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3 text-xs font-mono">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <div>
                  <span className="text-gray-500 block">Main Office:</span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-white hover:text-teal-400 transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <div>
                  <span className="text-gray-500 block">Mobile Hotline:</span>
                  <a href={`tel:${COMPANY_INFO.mobile}`} className="text-white hover:text-teal-400 transition-colors">
                    {COMPANY_INFO.mobile}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <div>
                  <span className="text-gray-500 block">General Mailbox:</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-teal-400 transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Department Direct Contacts */}
          <div className="bg-[#020617] border border-white/10 p-8 shadow-xl">
            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-4">
              Slide 46 & 47 • Direct Department Directory
            </span>

            <div className="space-y-6">
              {/* Sales Lead */}
              <div className="pb-4 border-b border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 block mb-1">
                  Technical & Sales Inquiries — North America
                </span>
                <h4 className="text-white font-bold text-base mb-1">Abdu Zaghlol</h4>
                <p className="text-xs text-gray-400 font-mono mb-2">Sales Manager</p>
                <div className="flex flex-col gap-1 text-xs font-mono">
                  <a href={`mailto:${COMPANY_INFO.salesEmail}`} className="text-gray-300 hover:text-teal-400 transition-colors">
                    {COMPANY_INFO.salesEmail}
                  </a>
                  <a href={`tel:${COMPANY_INFO.salesPhone}`} className="text-gray-300 hover:text-teal-400 transition-colors">
                    Cell: {COMPANY_INFO.salesPhone}
                  </a>
                </div>
              </div>

              {/* Engineering Direct */}
              <div className="pb-4 border-b border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 block mb-1">
                  Thermal & Mechanical Engineering
                </span>
                <h4 className="text-white font-bold text-base mb-1">Engineering Division</h4>
                <p className="text-xs text-gray-400 font-mono mb-2">CFD Analysis • SolidWorks CAD • Tooling</p>
                <div className="flex flex-col gap-1 text-xs font-mono">
                  <a href={`mailto:${COMPANY_INFO.engineeringEmail}`} className="text-gray-300 hover:text-teal-400 transition-colors">
                    {COMPANY_INFO.engineeringEmail}
                  </a>
                </div>
              </div>

              {/* Founder Direct */}
              <div className="pb-4 border-b border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 block mb-1">
                  Executive Office
                </span>
                <h4 className="text-white font-bold text-base mb-1">Ahmed Zaghlol, Ph.D., P.Eng.</h4>
                <p className="text-xs text-gray-400 font-mono mb-2">Founder & CEO</p>
                <div className="flex flex-col gap-1 text-xs font-mono">
                  <a href={`mailto:${COMPANY_INFO.ceoEmail}`} className="text-gray-300 hover:text-teal-400 transition-colors">
                    {COMPANY_INFO.ceoEmail}
                  </a>
                  <a href={`tel:${COMPANY_INFO.mobile}`} className="text-gray-300 hover:text-teal-400 transition-colors">
                    Mobile: {COMPANY_INFO.mobile}
                  </a>
                </div>
              </div>

              {/* Supply Chain */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 block mb-1">
                  Global Supply Chain & Procurement
                </span>
                <h4 className="text-white font-bold text-base mb-1">Nada Zaghlol</h4>
                <p className="text-xs text-gray-400 font-mono mb-2">Supply Chain Manager</p>
                <div className="flex flex-col gap-1 text-xs font-mono">
                  <a href={`mailto:${COMPANY_INFO.supplyChainEmail}`} className="text-gray-300 hover:text-teal-400 transition-colors">
                    {COMPANY_INFO.supplyChainEmail}
                  </a>
                  <a href={`tel:${COMPANY_INFO.supplyChainPhone}`} className="text-gray-300 hover:text-teal-400 transition-colors">
                    Cell: {COMPANY_INFO.supplyChainPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Assurance Card */}
          <div className="p-6 bg-teal-950/30 border border-teal-500/30 rounded-sm">
            <div className="flex items-center gap-3 text-teal-400 font-mono text-xs uppercase tracking-widest mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Quality System</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed font-light">
              Registered ISO 9001:2015 since January 17, 2021. Canadian Controlled Goods Program (CGP) & ITAR equivalent compliance active.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
