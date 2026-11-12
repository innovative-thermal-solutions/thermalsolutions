"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Upload,
  ShieldCheck,
  Building2,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const localSalesReps = [
  {
    name: "Centre Frequency Technical Marketing, LLC",
    url: "https://www.cf-tm.com/index.html",
    logo: "/images/reps/centre-frequency.webp",
  },
  {
    name: "Meritage Sales, Inc",
    url: "https://www.meritagesales.com",
    logo: "/images/reps/meritage-sales.webp",
  },
  {
    name: "Quadrep-Ferrari Technologies, Inc",
    url: "https://quadrep-ferrari.com",
    logo: "/images/reps/quadrep-ferrari.webp",
  },
  {
    name: "Excelsior Sales",
    url: "https://www.excelsiorsales.com",
    logo: "/images/reps/excelsior-sales.webp",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    address: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <main id="main-content" className="w-full min-h-screen bg-[#f8faf9]">
      {/* 1. Header Banner */}
      <section className="relative w-full bg-gradient-to-br from-[#00575c] via-[#00747a] to-[#0a8f97] text-white pt-32 pb-20 lg:pt-36 lg:pb-24 px-6 lg:px-12 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block text-xs uppercase font-mono tracking-[0.2em] font-semibold bg-white/15 text-white px-4 py-1.5 rounded-full mb-6 border border-white/20 shadow-xs">
            Contact ITS Cooling
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Tell us what is getting too hot.
          </h1>

          <p className="text-lg sm:text-xl text-teal-50 font-medium max-w-3xl mx-auto mb-3">
            Heat Sink &amp; Cold Plate Manufacturers &amp; Engineers in Guelph, Ontario
          </p>

          <p className="text-sm sm:text-base text-teal-100/90 max-w-2xl mx-auto font-normal">
            Designing, engineering, testing, and manufacturing custom heat sinks and liquid cold plates for a wide spectrum of simple to complex thermal challenges.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Form & Direct Details Grid */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#d8dedf] p-8 sm:p-12 shadow-sm">
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00747a] font-bold block mb-2">
                Turnkey Engineering Inquiry
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                Send Us Your Project Requirements
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Have a thermal challenge, mechanical envelope, or 3D CAD to review? Submit your details below for direct engineering evaluation.
              </p>
            </div>

            {submitted ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-6 border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 uppercase tracking-tight mb-2">
                  Inquiry Received
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you for contacting Innovative Thermal Solutions. An engineering specialist from our Guelph facility will review your thermal constraints and respond promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                      organization: "",
                      address: "",
                      message: "",
                    });
                    setFileName(null);
                  }}
                  className="px-6 py-3 bg-[#00747a] text-white font-mono text-xs uppercase tracking-wider rounded-lg hover:bg-[#005d62] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#00747a] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#00747a] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#00747a] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2">
                      Cell Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (xxx) xxx-xxxx"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#00747a] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2">
                      Your Organization (if Any) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Company or institution"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({ ...formData, organization: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#00747a] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2">
                      Organization Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="City, State/Province, Country"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#00747a] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2">
                    Message / Thermal Project Specifications
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about heat load, target temperatures, flow rates, cooling type (air vs liquid), or packaging restrictions..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#00747a] focus:bg-white transition-all"
                  />
                </div>

                {/* Optional CAD / Drawing Upload */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2 flex items-center justify-between">
                    <span>Attach CAD / Drawings (Optional)</span>
                    <span className="text-slate-400 font-normal">STEP, IGES, SLDPRT, PDF (10MB max)</span>
                  </label>
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-5 text-center hover:border-[#00747a] transition-colors bg-slate-50/60">
                    <input
                      type="file"
                      id="cad-upload"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setFileName(e.target.files[0].name);
                        }
                      }}
                    />
                    <label
                      htmlFor="cad-upload"
                      className="cursor-pointer flex flex-col items-center"
                    >
                      <Upload className="w-6 h-6 text-[#00747a] mb-1.5" />
                      <span className="text-xs font-semibold text-slate-800">
                        {fileName ? `Attached: ${fileName}` : "Click to attach 3D model or technical drawings"}
                      </span>
                    </label>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Confidentiality &amp; NDAs respected.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#00747a] hover:bg-[#005d62] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-all disabled:opacity-50 cursor-pointer"
                  >
                    <span>{loading ? "Submitting..." : "Submit Inquiry"}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details & Google Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Info Card */}
            <div className="bg-white rounded-2xl border border-[#d8dedf] p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950 mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#00747a]" />
                <span>Headquarters &amp; Facility</span>
              </h3>

              <div className="space-y-6 text-sm text-slate-700">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#00747a]/10 text-[#00747a] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-slate-900 mb-1">
                      Facility Address
                    </h4>
                    <p className="leading-relaxed">
                      290 Southgate Drive, Unit #2,<br />
                      Guelph, ON N1G 4P5, Canada
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#00747a]/10 text-[#00747a] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-slate-900 mb-1">
                      Contact Number
                    </h4>
                    <a
                      href="tel:+15197634454"
                      className="text-base font-bold font-mono text-[#00747a] hover:underline"
                    >
                      +1 (519) 763-4454
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#00747a]/10 text-[#00747a] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-slate-900 mb-1">
                      Direct Email
                    </h4>
                    <a
                      href="mailto:Engineering@itscooling.com"
                      className="text-sm font-semibold font-mono text-[#00747a] hover:underline"
                    >
                      Engineering@itscooling.com
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#00747a]/10 text-[#00747a] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-slate-900 mb-1">
                      Business Hours
                    </h4>
                    <p className="text-slate-600 font-mono text-xs">
                      Monday – Friday: 8:30 AM – 5:00 PM EST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white rounded-2xl border border-[#d8dedf] overflow-hidden shadow-sm">
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-slate-700">
                  Guelph, Ontario Facility Map
                </span>
                <a
                  href="https://maps.google.com/?q=290+Southgate+Dr+%232,+Guelph,+ON+N1G+4P5,+Canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#00747a] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="w-full h-[260px] relative">
                <iframe
                  title="ITS Cooling Guelph Facility Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.0461131315838!2d-80.21957602383121!3d43.501373571109745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b84e9390700e9%3A0xe7d72b3808c2f82a!2s290%20Southgate%20Dr%20%232%2C%20Guelph%2C%20ON%20N1G%204P5%2C%20Canada!5e0!3m2!1sen!2sin!4v1737412757091!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Local Sales Representatives Section */}
      <section className="w-full py-16 lg:py-24 bg-white border-t border-[#d8dedf]">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-mono tracking-widest text-[#00747a] font-bold block mb-2">
              North American Network
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
              Local Sales Representatives
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto mt-2">
              Dedicated regional technical sales representation providing direct, in-person consultation across key manufacturing and defense regions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {localSalesReps.map((rep) => (
              <a
                key={rep.name}
                href={rep.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-between p-6 bg-[#f8faf9] rounded-xl border border-[#d8dedf] hover:border-[#00747a] hover:shadow-md transition-all text-center"
              >
                <div className="h-24 w-full flex items-center justify-center mb-4 p-2 bg-white rounded-lg border border-slate-100">
                  <Image
                    src={rep.logo}
                    alt={rep.name}
                    width={220}
                    height={100}
                    className="max-h-16 w-auto object-contain transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-800 group-hover:text-[#00747a] transition-colors">
                  <span>{rep.name}</span>
                  <ExternalLink className="w-3 h-3 shrink-0 opacity-60 group-hover:opacity-100" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
