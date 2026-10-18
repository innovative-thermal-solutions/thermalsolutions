import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, ShieldCheck, Award, FileText, ArrowRight } from "lucide-react";
import { TEAM_MEMBERS, COMPANY_INFO } from "@/data/companyContent";

export const metadata = {
  title: "Engineering Team & Leadership | ITS Cooling",
  description:
    "Meet the thermal engineers, mechanical designers, and leadership team behind Innovative Thermal Solutions Inc. in Guelph, Ontario.",
};

export default function TeamPage() {
  const leadership = TEAM_MEMBERS.find((m) => m.role === "Founder & CEO");
  const coreTeam = TEAM_MEMBERS.filter((m) => m.role !== "Founder & CEO");

  return (
    <main id="main-content" className="w-full min-h-screen bg-slate-50 pt-28 pb-24">
      {/* Header */}
      <section className="relative w-full bg-gradient-to-br from-white via-slate-50 to-sky-50 border-b border-slate-200 py-16 lg:py-24 px-6 lg:px-12 overflow-hidden mb-16">
        <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold text-sky-600 px-2 py-0.5 bg-white border border-slate-200 rounded-sm">
              ITS
            </span>
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold">
              Turnkey Engineering Leadership
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6 max-w-4xl">
            The experts behind advanced hardware.
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal mb-8">
            Decades of combined hands-on experience designing, testing, and manufacturing heat sinks, friction stir welded cold plates, and power distribution busbars.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200 max-w-3xl text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-slate-950 tracking-tight">75+</span>
              <span className="text-slate-600 leading-tight">Years Combined Thermal Experience</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-sky-600 tracking-tight">26</span>
              <span className="text-slate-600 leading-tight">Years CEO Industry Leadership</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-slate-950 tracking-tight">2</span>
              <span className="text-slate-600 leading-tight">Registered Thermal Patents</span>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Spotlight Section */}
      {leadership && (
        <section className="px-6 lg:px-12 mb-20 max-w-[1440px] mx-auto">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-14 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Photo & Badge */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
                <div className="w-full max-w-md aspect-[4/5] bg-slate-100 border border-slate-200 rounded-xl relative overflow-hidden shadow-md">
                  <Image
                    src={leadership.image}
                    alt={leadership.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-1">
                      Founder &amp; CEO
                    </span>
                    <h3 className="text-2xl font-bold">{leadership.name}</h3>
                  </div>
                </div>

                <div className="w-full max-w-md mt-4 grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="bg-slate-50 border border-slate-200 rounded p-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>26 Yrs in Industry</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded p-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>2 Patents Held</span>
                  </div>
                </div>
              </div>

              {/* Bio & Quote */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-800 text-xs font-mono uppercase tracking-widest rounded mb-4">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                    <span>Executive Leadership</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-6 tracking-tight">
                    {leadership.name}
                  </h2>

                  <p className="text-slate-600 text-base lg:text-lg leading-relaxed mb-6 font-normal">
                    {leadership.bio}
                  </p>

                  <div className="border-l-4 border-sky-600 pl-6 py-3 mb-8 bg-slate-50 rounded-r-lg">
                    <p className="text-slate-800 italic text-base leading-relaxed mb-2 font-normal">
                      &ldquo;{COMPANY_INFO.ceoQuote}&rdquo;
                    </p>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                      — Ahmed Zaghlol, PhD, PEng • President &amp; CEO
                    </span>
                  </div>
                </div>

                {/* Direct Contact Links */}
                <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-6 text-sm font-mono">
                  <a
                    href={`mailto:${leadership.email}`}
                    className="inline-flex items-center gap-2 text-slate-700 hover:text-sky-600 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-sky-600" />
                    <span>{leadership.email}</span>
                  </a>
                  {leadership.phone && (
                    <a
                      href={`tel:${leadership.phone}`}
                      className="inline-flex items-center gap-2 text-slate-700 hover:text-sky-600 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-sky-600" />
                      <span>Office: {leadership.phone}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Core Team Grid */}
      <section className="px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="text-sky-600 font-mono text-xs tracking-widest uppercase block mb-1 font-semibold">
              Engineering &amp; Operations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950 uppercase">
              Key Team Contacts
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-500 max-w-md">
            Directly collaborate with our thermal analysts, mechanical designers, and technical sales managers in Guelph.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreTeam.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-sky-300 transition-all"
            >
              <div>
                <div className="w-full aspect-[4/3] bg-slate-100 rounded-xl mb-6 relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <span className="text-xs font-mono text-sky-600 uppercase tracking-widest font-semibold block mb-1">
                  {member.role}
                </span>

                <h3 className="text-xl font-bold text-slate-950 mb-2">
                  {member.name}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-mono">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-slate-700 hover:text-sky-600 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-600" />
                  <span className="truncate">{member.email}</span>
                </a>
                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-2 text-slate-700 hover:text-sky-600 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-600" />
                    <span>{member.phone}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
