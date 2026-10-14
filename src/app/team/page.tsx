import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, ShieldCheck, Award, FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import { TEAM_MEMBERS, COMPANY_INFO } from "@/data/companyContent";

export const metadata = {
  title: "Engineering Team & Leadership",
  description: "Meet the thermal engineers, mechanical designers, and leadership team behind Innovative Thermal Solutions Inc.",
};

export default function TeamPage() {
  const leadership = TEAM_MEMBERS.find((m) => m.role === "Founder & CEO");
  const coreTeam = TEAM_MEMBERS.filter((m) => m.role !== "Founder & CEO");

  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden pt-32 pb-28">
      {/* Background ambiance */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <section className="px-6 lg:px-12 mb-20 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-teal-400 font-mono text-xs tracking-[0.25em] uppercase">
            Turnkey Engineering Leadership
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-8 max-w-5xl">
          THE EXPERTS BEHIND <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-gray-400">
            ADVANCED HARDWARE.
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-white/10 max-w-4xl text-sm font-mono">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-white tracking-tight">50+</span>
            <span className="text-gray-400 leading-tight">Years Combined Engineering Experience</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-teal-400 tracking-tight">26</span>
            <span className="text-gray-400 leading-tight">Years CEO Industry Leadership</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-white tracking-tight">2</span>
            <span className="text-gray-400 leading-tight">Registered Thermal Patents</span>
          </div>
        </div>
      </section>

      {/* CEO Spotlight Section */}
      {leadership && (
        <section className="px-6 lg:px-12 mb-24 max-w-7xl mx-auto relative z-10">
          <div className="bg-gradient-to-br from-[#0F172A] to-[#020617] border border-white/15 p-8 lg:p-14 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Photo & Badge */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
                <div className="w-full max-w-md aspect-[4/5] bg-black/60 border border-white/20 relative overflow-hidden shadow-2xl group">
                  <Image
                    src={leadership.image}
                    alt={leadership.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-1">
                      Founder & CEO
                    </span>
                    <h3 className="text-2xl font-bold text-white">{leadership.name}</h3>
                  </div>
                </div>

                <div className="w-full max-w-md mt-6 grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="bg-black/40 border border-white/10 p-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>26 Yrs in Industry</span>
                  </div>
                  <div className="bg-black/40 border border-white/10 p-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>2 Patents Held</span>
                  </div>
                </div>
              </div>

              {/* Bio & Quote */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono uppercase tracking-widest mb-6">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Executive Leadership</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                    Ahmed Zaghlol, Ph.D., P.Eng.
                  </h2>

                  <p className="text-gray-300 font-light text-base lg:text-lg leading-relaxed mb-8">
                    {leadership.bio}
                  </p>

                  <div className="border-l-2 border-teal-400 pl-6 py-2 mb-8 bg-white/[0.02]">
                    <p className="text-gray-200 italic font-light text-base leading-relaxed mb-3">
                      "{COMPANY_INFO.ceoQuote}"
                    </p>
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block">
                      — Ahmed Zaghlol, PhD, PEng • President & CEO
                    </span>
                  </div>
                </div>

                {/* Direct Contact Links */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap gap-6 text-sm font-mono">
                  <a
                    href={`mailto:${leadership.email}`}
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-teal-400" />
                    <span>{leadership.email}</span>
                  </a>
                  {leadership.phone && (
                    <a
                      href={`tel:${leadership.phone}`}
                      className="inline-flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-teal-400" />
                      <span>Office: {leadership.phone}</span>
                    </a>
                  )}
                  {leadership.cell && (
                    <a
                      href={`tel:${leadership.cell}`}
                      className="inline-flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-teal-400" />
                      <span>Mobile: {leadership.cell}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Engineering, Sales & Operations Team Grid */}
      <section className="px-6 lg:px-12 mb-28 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="text-teal-400 font-mono text-xs tracking-widest uppercase block mb-2">
              Engineering & Operations
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              KEY TEAM CONTACTS.
            </h2>
          </div>
          <p className="text-sm font-mono text-gray-400 max-w-md">
            Directly collaborate with our thermal analysts, mechanical designers, and technical sales managers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreTeam.map((member) => (
            <div
              key={member.name}
              className="bg-[#020617] border border-white/10 p-8 flex flex-col justify-between group hover:border-teal-500/50 hover:bg-[#070D18] transition-all duration-300 relative overflow-hidden"
            >
              <div>
                {/* Photo */}
                <div className="w-full aspect-square bg-[#0F172A] border border-white/10 mb-6 relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest bg-black/60 px-2 py-0.5 border border-teal-500/30">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">
                  {member.name}
                </h3>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-4">
                  {member.title}
                </span>

                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                  {member.bio}
                </p>

                {member.experience && (
                  <div className="mb-6 pb-6 border-b border-white/10 text-xs font-mono text-teal-400/90 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-teal-400" />
                    <span>{member.experience}</span>
                  </div>
                )}
              </div>

              {/* Direct Inquiries */}
              <div className="pt-4 space-y-2 text-xs font-mono">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group/link"
                >
                  <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span className="truncate group-hover/link:underline">{member.email}</span>
                </a>
                {member.cell && (
                  <a
                    href={`tel:${member.cell}`}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Cell: {member.cell}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* General Technical & Sales Inquiries Banner */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <div className="bg-gradient-to-r from-[#0F172A] via-[#091E2B] to-[#0F172A] border border-teal-500/30 p-10 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-teal-400 font-mono text-xs uppercase tracking-widest block mb-2">
              Slide 47 • Technical and Sales Inquiries — North America
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">
              Need Engineering or Quote Assistance?
            </h3>
            <p className="text-gray-300 font-light max-w-xl text-sm leading-relaxed">
              Contact our sales lead Abdu Zaghlol or engineering directly at <span className="text-teal-400 font-mono">{COMPANY_INFO.engineeringEmail}</span>. We review drawings and boundary conditions within 24–48 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href={`mailto:${COMPANY_INFO.salesEmail}`}
              className="px-6 py-3.5 bg-teal-400 text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors text-center"
            >
              Email Sales Lead
            </a>
            <Link
              href="/contact"
              className="px-6 py-3.5 bg-white/10 border border-white/20 text-white font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              <span>Submit RFQ Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
