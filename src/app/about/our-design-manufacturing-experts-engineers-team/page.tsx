import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, ArrowRight, ShieldCheck, Award, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Manufacturing Experts & Engineers | ITS Cooling",
  description:
    "Meet the leadership, thermal experts, mechanical engineers, and supply chain specialists at Innovative Thermal Solutions in Guelph, Ontario.",
};

const teamMembers = [
  {
    name: "Cliff Weasner",
    title: "Director of Engineering",
    image: "/images/team/cliff-weasner.jpg",
  },
  {
    name: "Abdu Zaghlol",
    title: "Director of Sales",
    image: "/images/team/abdu-zaghlol.jpg",
  },
  {
    name: "Nada Zaghlol",
    title: "Supply Chain Manager",
    image: "/images/team/nada-zaghlol.jpg",
  },
  {
    name: "Sam Hemming, M.A.Sc.",
    title: "Lead Mechanical Engineer",
    image: "/images/team/sam-hemming.jpg",
  },
  {
    name: "Matt Galvez, B.A.Sc., EIT",
    title: "Mechanical Engineer",
    image: "/images/team/matt-galvez.jpg",
  },
  {
    name: "David Dawson, M.A.",
    title: "Thermal Engineer",
    image: "/images/team/david-dawson.jpg",
  },
];

export default function OurTeamPage() {
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
          <span className="inline-block text-xs uppercase font-mono tracking-[0.2em] font-semibold bg-white/15 text-white px-4 py-1.5 rounded-full mb-6 border border-white/20 shadow-xs">
            About ITS Team
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white mb-4 leading-tight">
            Design, Manufacturing Experts, &amp; Engineers in Guelph, Ontario
          </h1>

          <p className="text-teal-100 font-mono text-xs sm:text-sm tracking-widest uppercase mb-6 font-semibold">
            INNOVATIVE THERMAL SOLUTIONS · Engineered for Success
          </p>

          <p className="text-teal-50 text-base sm:text-lg max-w-3xl leading-relaxed font-normal">
            Innovative Thermal Solutions brings together the combined experience of a specialized team of professionals. Together, we excel at solving thermal management challenges on an industrial scale. We pair the optimal technical solution with carefully managed manufacturing to develop an action plan that allows your company to overcome challenges and continue to grow.
          </p>
        </div>
      </section>

      {/* 2. Founder & CEO Section */}
      <section className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-14 border-b border-[#d8dedf] bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest text-[#00747a] uppercase font-bold block mb-2">
              EXECUTIVE LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-slate-900">
              FOUNDER AND CEO
            </h2>
          </div>

          <div className="bg-[#f8faf9] rounded-2xl border border-[#d8dedf] p-8 lg:p-14 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* CEO Photo */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-xl overflow-hidden shadow-lg border border-[#d8dedf] bg-white">
                <Image
                  src="/images/team/ahmed-zaghlol.jpg"
                  alt="Ahmed Zaghlol, PHD, PEng - Founder and CEO at ITS Cooling"
                  fill
                  priority
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] font-mono tracking-widest text-teal-200 uppercase block mb-1">
                    FOUNDER &amp; CEO
                  </span>
                  <h3 className="text-2xl font-bold font-serif text-white">
                    Ahmed Zaghlol, PHD, PEng
                  </h3>
                </div>
              </div>

              <div className="w-full max-w-sm mt-4 grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-white border border-[#d8dedf] rounded-lg p-3 text-center">
                  <span className="block text-lg font-bold text-[#00747a]">22+</span>
                  <span className="text-slate-600">Years Experience</span>
                </div>
                <div className="bg-white border border-[#d8dedf] rounded-lg p-3 text-center">
                  <span className="block text-lg font-bold text-[#00747a]">3</span>
                  <span className="text-slate-600">Patent Innovations</span>
                </div>
              </div>
            </div>

            {/* CEO Bio */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="p-6 bg-white border-l-4 border-[#01747A] rounded-r-xl border-y border-r border-[#d8dedf] mb-8 shadow-xs">
                  <span className="text-xs font-mono tracking-wider uppercase text-[#01747A] font-bold block mb-2">
                    Our Core Value
                  </span>
                  <blockquote className="text-slate-800 text-sm sm:text-base italic leading-relaxed">
                    &ldquo;Innovative Thermal Solutions (ITS) is a turnkey engineering and manufacturing firm delivering quality heat sink products on time. We partner with our customers utilizing our 75 years of hands-on experience designing, engineering, testing and manufacturing heat sinks for a wide spectrum of simple to complex thermal challenges.&rdquo;
                  </blockquote>
                </div>

                <div className="text-slate-700 text-sm sm:text-base space-y-4 leading-relaxed font-normal">
                  <p>
                    Ahmed received his Ph.D. in Engineering Science from the University of Western Ontario, then he joined the Microelectronic Heat Transfer Laboratory (MHTL) at the University of Waterloo as a postdoctoral fellow.
                  </p>
                  <p>
                    Ahmed started his industrial career for R-Theta Thermal Solutions as Applications Engineering Manager solving hundreds of thermal management challenges and designed thousands of air cooled, heat pipe, phase change and liquid cooled heatsinks over the last 22 years.
                  </p>
                  <p>
                    Ahmed is a senior expert in thermal management with a proven track record of innovative solutions for power electronics cooling systems. Renowned expertise in two-phase thermosyphon systems proven with 3 pending patent innovations. Strong leadership skills in building, motivating and empowering teams to achieve common business goals as well as hiring and retaining a talented workforce.
                  </p>
                  <p>
                    Experienced Lecturer with a demonstrated history of working in the professional training &amp; coaching industry. Over the last 5 years of his career in a multinational corporation, Ahmed managed a 67,000 ft² facility designing, testing and manufacturing heat sinks. Ahmed is skilled in operations management, continuous improvement, research and development, and business development.
                  </p>
                  <p className="font-semibold text-slate-900">
                    Ahmed is a registered Professional Engineer in Ontario (PEO) and a member of ASME and IEEE.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center gap-4">
                <a
                  href="mailto:engineering@itscooling.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#01747A] hover:bg-[#005d62] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>EMAIL NOW</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Team Grid */}
      <section className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-14 bg-[#f8faf9] border-b border-[#d8dedf]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono tracking-widest text-[#00747a] uppercase font-bold block mb-2">
              DEDICATED SPECIALISTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-slate-900">
              Our Team
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mt-3">
              Specialized engineering, sales, and supply chain experts in Guelph, Ontario.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl border border-[#d8dedf] overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full bg-[#f2f6f6] overflow-hidden border-b border-[#d8dedf]">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.title}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <span className="text-[11px] font-mono tracking-widest text-[#01747A] uppercase font-bold block mb-1">
                      {member.title}
                    </span>
                    <h3 className="text-xl font-bold font-serif text-slate-900 group-hover:text-[#01747A] transition-colors">
                      {member.name}
                    </h3>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <a
                    href="mailto:engineering@itscooling.com"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 hover:text-[#01747A] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#01747A]" />
                    <span>Contact via Engineering</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Products & Services Callout */}
      <section className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-14 bg-gradient-to-br from-[#004d52] via-[#01747A] to-[#005a5f] text-white border-b border-[#015e63]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono tracking-widest text-teal-200 uppercase font-bold block mb-2">
              PRODUCTS &amp; SERVICES
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-white mb-4">
              Specialized tools for specialized challenges
            </h2>
            <p className="text-teal-50 text-base max-w-2xl mx-auto font-normal">
              Solving a wide range of challenges requires a wide range of answers. We utilize air cooled, liquid cooled, and two-phase solutions depending on the project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Air Cooling */}
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold font-serif text-white mb-2">AIR COOLING</h3>
                <p className="text-teal-50 text-sm mb-6">Recommended for general cooling needs</p>
              </div>
              <Link
                href="/products/heat-sinks"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-teal-200 transition-colors uppercase tracking-wider"
              >
                <span>Learn more...</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Liquid Cooling */}
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold font-serif text-white mb-2">LIQUID COOLING</h3>
                <p className="text-teal-50 text-sm mb-6">Recommended for advanced cooling needs</p>
              </div>
              <Link
                href="/products/cold-plates"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-teal-200 transition-colors uppercase tracking-wider"
              >
                <span>Learn more...</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact & Service Area */}
      <section className="relative w-full py-16 lg:py-20 px-6 sm:px-8 lg:px-14 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-4">
            Contact ITS for more information
          </h3>
          <p className="text-xs text-slate-500 font-mono leading-relaxed mb-6">
            Serving across Guelph, Toronto, Mississauga, Hamilton, Brampton, Vaughan, Kitchener, Markham, Oshawa, St. Catharines, Niagara Falls, Canada, New York, New Jersey, Pennsylvania, San Diego, San Jose, San Francisco, California, Seattle, Washington, Dallas, Austin, Houston, Texas, Detroit, Michigan, Milwaukee, Wisconsin, Phoenix, Arizona and every major city across North America.
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-700 bg-slate-100 px-4 py-2 rounded-full border border-slate-200">
            <MapPin className="w-3.5 h-3.5 text-[#00747a]" />
            <span>290 Southgate Drive, Unit #2, Guelph, ON N1G 4P5 Canada</span>
          </div>
        </div>
      </section>
    </main>
  );
}
