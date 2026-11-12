import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  FileCheck,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  Sparkles,
  Target,
  TrendingUp,
  Cpu,
  Layers,
} from "lucide-react";
import type { Metadata } from "next";
import { CertificateCard } from "@/components/quality/CertificateModal";

export const metadata: Metadata = {
  title: "ITS Quality Policy | ISO 9001:2015 Certified | Innovative Thermal Solutions",
  description:
    "ITS is committed to dedication to quality, continual improvement, and customer satisfaction under our ISO 9001:2015 Certified Quality Management System in Guelph, Ontario.",
};

const qualityPrinciples = [
  {
    number: "01",
    title: "Customer Focus",
    description:
      "Understanding customer requirements and delivering solutions that meet or exceed expectations.",
    icon: Target,
  },
  {
    number: "02",
    title: "Continuous Improvement",
    description:
      "Improving our products, manufacturing processes, and operational efficiency.",
    icon: TrendingUp,
  },
  {
    number: "03",
    title: "Precision Manufacturing",
    description:
      "Producing high-quality thermal management solutions through controlled manufacturing processes.",
    icon: Cpu,
  },
  {
    number: "04",
    title: "Engineering Excellence",
    description:
      "Designing innovative thermal solutions for demanding applications across multiple industries.",
    icon: Sparkles,
  },
];

export default function QualityPage() {
  return (
    <main id="main-content" className="w-full min-h-screen bg-[#f8faf9] text-[#141f22]">
      {/* 1. Header Banner */}
      <section className="relative w-full pt-36 sm:pt-44 lg:pt-48 pb-20 px-6 sm:px-8 lg:px-14 bg-gradient-to-br from-[#004d52] via-[#01747A] to-[#005a5f] text-white border-b border-[#015e63] overflow-hidden text-center">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-[0.2em] font-semibold bg-white/15 text-white px-4 py-1.5 rounded-full mb-6 border border-white/20 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-teal-200" />
            ISO 9001:2015 CERTIFIED QMS
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white mb-4 leading-tight">
            ITS Quality Policy
          </h1>

          <p className="text-teal-100 font-mono text-xs sm:text-sm tracking-widest uppercase mb-6 font-semibold">
            Thermal Engineering Firm in Guelph, Ontario
          </p>

          <p className="text-teal-50 text-base sm:text-lg max-w-3xl leading-relaxed font-normal">
            Innovative Thermal Solutions is dedicated to delivering superior value in products and engineering services through uncompromising quality, systematic continual improvement, and risk-based engineering discipline.
          </p>
        </div>
      </section>

      {/* 2. Quality Policy Statement & CEO Endorsement */}
      <section className="relative w-full py-16 lg:py-24 px-6 sm:px-8 lg:px-14 border-b border-[#d8dedf] bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#f8faf9] rounded-2xl border border-[#d8dedf] p-8 sm:p-12 lg:p-14 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-mono tracking-widest text-[#01747A] uppercase font-bold">
                OFFICIAL COMPANY POLICY
              </span>
            </div>

            <p className="text-slate-800 text-lg sm:text-xl font-serif leading-relaxed mb-8">
              &ldquo;ITS is committed to provide a high degree of value in products and services through dedication to quality, continual improvement and risk based thinking. To achieve these objectives, it is our policy to:&rdquo;
            </p>

            {/* Policy Bullet Directives */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#d8dedf]">
                <div className="w-6 h-6 rounded-full bg-[#01747A]/10 text-[#01747A] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  <strong>Understand customer needs</strong> and accordingly design products to meet or exceed customer’s requirements for heat sinks and thermal management products for electronics;
                </p>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#d8dedf]">
                <div className="w-6 h-6 rounded-full bg-[#01747A]/10 text-[#01747A] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  <strong>Extend excellent customer support</strong> and service at all times; and
                </p>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#d8dedf]">
                <div className="w-6 h-6 rounded-full bg-[#01747A]/10 text-[#01747A] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  <strong>Seek opportunities for development and improvement</strong> of products, manufacturing methods and resources.
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base italic mb-10 pb-8 border-b border-[#d8dedf]">
              We dedicated efforts and commitment of our employees toward fulfillment of the above.
            </p>

            {/* CEO Signature Block */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-2xl font-medium text-[#01747A]">
                  Ahmed Zaghlol
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  CEO · Innovative Thermal Solutions Inc
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-white px-3 py-1.5 rounded border border-[#d8dedf]">
                <MapPin className="w-3.5 h-3.5 text-[#01747A]" />
                <span>Guelph, Ontario, Canada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Quality Principles (4 Cards) */}
      <section className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-14 border-b border-[#d8dedf] bg-[#f8faf9]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-[#01747A] uppercase font-bold block mb-2">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-slate-900 mb-4">
              Our Quality Principles
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Every stage of design, validation, machining, friction stir welding, and thermal testing is anchored in our four core principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {qualityPrinciples.map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.number}
                  className="bg-white rounded-2xl border border-[#d8dedf] p-8 shadow-sm hover:shadow-md hover:border-[#01747A]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-bold text-[#01747A] bg-[#01747A]/10 px-2.5 py-1 rounded">
                        {principle.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#01747A] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-serif text-xl font-medium text-slate-900 mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-normal">
                      {principle.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-[#01747A]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified in Practice</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ISO 9001:2015 Certified Quality Management System */}
      <section className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-14 border-b border-[#d8dedf] bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <span className="text-xs font-mono tracking-widest text-[#01747A] uppercase font-bold block mb-2">
                ACCREDITED REGISTRATION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-slate-900 mb-6 leading-tight">
                ISO 9001:2015 Certified Quality Management System
              </h2>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                ITS Cooling operates under an ISO 9001:2015 certified Quality Management System, demonstrating our commitment to consistent quality, customer satisfaction, and continuous improvement throughout our engineering and manufacturing operations.
              </p>

              {/* Accredited Scope Box */}
              <div className="bg-[#f8faf9] rounded-xl border border-[#d8dedf] p-6 mb-8 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#d8dedf] text-xs font-mono">
                  <span className="text-slate-500 uppercase">Certificate No.</span>
                  <span className="font-bold text-slate-900">0181103</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#d8dedf] text-xs font-mono">
                  <span className="text-slate-500 uppercase">Accredited Registrar</span>
                  <span className="font-bold text-slate-900">Intertek Testing Services NA (ANAB)</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#d8dedf] text-xs font-mono">
                  <span className="text-slate-500 uppercase">Facility Location</span>
                  <span className="font-bold text-slate-900">Guelph, Ontario, Canada</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 uppercase block mb-1">
                    Certified Scope:
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed font-sans">
                    Design, manufacture and delivery of air cooled and liquid cooled heat sinks, and heat pipes, for the electronics industry.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/images/quality/iso-9001-cert-1.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#01747A] hover:bg-[#004d52] text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-lg transition-colors shadow-sm"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>View Official Certificate</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 text-xs font-mono uppercase tracking-wider font-semibold rounded-lg border border-[#d8dedf] transition-colors"
                >
                  <span>Request Quality Pack</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Certificate Card */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md">
                <CertificateCard
                  imageSrc="/images/quality/iso-9001-cert-1.png"
                  title="Intertek ISO 9001:2015 Certificate"
                  subtitle="Innovative Thermal Solutions Inc. · Guelph, Ontario"
                  badge="Official Registration"
                  metadata={[
                    { label: "Standard", value: "ISO 9001:2015" },
                    { label: "Cert #", value: "0181103" },
                    { label: "Accreditation", value: "ANAB / Intertek" },
                    { label: "Valid Through", value: "January 2027" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Certified Internal Quality Auditor Section */}
      <section className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-14 border-b border-[#d8dedf] bg-[#f8faf9]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-[#01747A] uppercase font-bold block mb-2">
              IN-HOUSE RIGOR
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-slate-900 mb-4">
              Certified Internal Quality Auditor
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              ITS Cooling is committed to maintaining the highest standards of quality throughout our engineering and manufacturing processes.
            </p>
          </div>

          {/* Qualification Highlights */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#d8dedf] p-8 sm:p-10 mb-16 shadow-sm">
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-slate-900 mb-3">
              Certified in ISO 9001:2015 Internal Auditor (TPECS)
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Our Internal Auditors are certified under BSI Training Academy and Exemplar Global, formally qualified in:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#d8dedf] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#01747A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-slate-900 mb-1">
                    Quality Management Systems
                  </h4>
                  <p className="text-xs text-slate-600">
                    ISO 9001:2015 Requirements (QM Module)
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#d8dedf] flex items-start gap-3">
                <Award className="w-5 h-5 text-[#01747A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-slate-900 mb-1">
                    Management Systems Auditing
                  </h4>
                  <p className="text-xs text-slate-600">
                    ISO 19011:2018 / ISO 19011:2026 (AU Module)
                  </p>
                </div>
              </div>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              This certification supports our continuous improvement initiatives and reinforces our commitment to delivering high-quality thermal management solutions to customers across North America.
            </p>
          </div>

          {/* Two Internal Auditor Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {/* Certificate 1: Inas Ibrahim Hassan */}
            <CertificateCard
              imageSrc="/images/quality/iso-auditor-badge.png"
              title="Inas Ibrahim Hassan"
              subtitle="Certificate of Competency · ISO 9001:2015 Internal Auditor (TPECS)"
              badge="BSI / Exemplar Global"
              metadata={[
                { label: "Competency", value: "QM & AU Modules" },
                { label: "Standard", value: "ISO 9001:2015 / ISO 19011" },
                { label: "Provider", value: "BSI Group Canada" },
                { label: "Cert #", value: "30008633-288174" },
              ]}
            />

            {/* Certificate 2: Bijin Thankachan */}
            <CertificateCard
              imageSrc="/images/quality/bijin-thankachan-auditor-cert.png"
              title="Bijin Thankachan"
              subtitle="Certificate of Competency · ISO 9001:2015 Internal Auditor (TPECS)"
              badge="BSI / Exemplar Global"
              aspectRatio="aspect-[4/3]"
              metadata={[
                { label: "Competency", value: "QM & ISO 19011 Auditing" },
                { label: "Standard", value: "ISO 9001:2015 / ISO 19011" },
                { label: "Provider", value: "BSI Training Academy" },
                { label: "Cert #", value: "30538528-315237" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 6. Industry Affiliation / ERA Member Badge */}
      <section className="relative w-full py-12 px-6 sm:px-8 lg:px-14 border-b border-[#d8dedf] bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-[#f8faf9] border border-[#d8dedf]">
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-14 bg-white p-2 rounded-lg border border-[#d8dedf] shrink-0 flex items-center justify-center">
              <Image
                src="/images/quality/era-registrar-logo.jpg"
                alt="Electronics Representatives Association (ERA) Member"
                fill
                className="object-contain p-1"
              />
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium text-slate-900">
                Electronics Representatives Association (ERA) Member
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-normal">
                Connecting professional manufacturers and engineering representatives across North America.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#01747A] hover:text-[#004d52]"
          >
            <span>Inquire About Representation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 7. Geographic Coverage Footer Banner */}
      <section className="relative w-full py-16 px-6 sm:px-8 lg:px-14 bg-[#141f22] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>North American Engineering &amp; Delivery</span>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-8 max-w-4xl mx-auto font-normal">
            Serving across Guelph, Toronto, Mississauga, Hamilton, Brampton, Vaughan, Kitchener, Markham, Oshawa, St. Catharines, Niagara Falls, Canada, New York, New Jersey, Pennsylvania, San Diego, San Jose, San Francisco, California, Seattle, Washington, Dallas, Austin, Houston, Texas, Detroit, Michigan, Milwaukee, Wisconsin, Phoenix, Arizona and every major city across North America.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif font-medium tracking-tight text-white mb-6">
            Contact Innovative Thermal Solutions in Guelph, Ontario
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#01747A] hover:bg-[#004d52] text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-lg transition-colors shadow-sm"
            >
              <span>Contact ITS Quality Engineering</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:engineering@itscooling.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-lg border border-white/20 transition-colors"
            >
              <Mail className="w-4 h-4 text-teal-300" />
              <span>engineering@itscooling.com</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
