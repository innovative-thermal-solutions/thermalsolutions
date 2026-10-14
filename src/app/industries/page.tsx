import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Industries | ITS Cooling",
  description: "Thermal management solutions for Aerospace, Power Converters, Clean Energy, EV, and Telecommunications.",
};

import { INDUSTRIES } from "@/data/companyContent";

export default function IndustriesPage() {
  const industries = INDUSTRIES.map((ind) => ({
    title: ind.title,
    challenge: ind.challenges,
    approach: ind.itsApproach,
    path: `/industries/${ind.slug}`,
    image: ind.image,
    slideNumber: ind.slideNumber,
  }));

  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden pt-32 pb-24">
      <section className="px-6 lg:px-12 mb-24 max-w-7xl mx-auto">
        <span className="text-teal-accent font-mono text-sm tracking-[0.2em] uppercase mb-6 block">
          Industries Served
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-8 max-w-4xl">
          CRITICAL THERMAL APPLICATIONS.
        </h1>
        <p className="text-xl text-gray-400 font-light max-w-2xl border-l border-teal-accent/50 pl-6 py-2">
          From deep space satellites to high-power industrial automation, we engineer cooling systems for the world's most demanding environments.
        </p>
      </section>

      <section className="px-6 lg:px-12 max-w-7xl mx-auto flex flex-col gap-px bg-white/10 border-y border-white/10">
        {industries.map((industry, idx) => (
          <Link key={industry.title} href={industry.path} className="group bg-[#020617] hover:bg-[#0F172A] p-8 lg:p-12 transition-colors duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1E293B]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="lg:col-span-3 relative z-10 hidden lg:block h-36 w-full overflow-hidden border border-white/10 rounded-sm bg-[#0F172A] shadow-md">
              <Image 
                src={industry.image} 
                alt={industry.title} 
                fill 
                sizes="300px"
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
              />
            </div>
            
            <div className="lg:col-span-3 relative z-10 pl-0 lg:pl-4">
              <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest block mb-1">
                {industry.slideNumber}
              </span>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-teal-400 transition-colors">
                {industry.title}
              </h2>
            </div>
            
            <div className="lg:col-span-5 relative z-10 flex flex-col gap-3">
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-0.5">Thermal Challenge</span>
                <p className="text-xs text-gray-300 font-light leading-relaxed">{industry.challenge}</p>
              </div>
              <div>
                <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest block mb-0.5">ITS Approach</span>
                <p className="text-xs text-gray-300 font-light leading-relaxed">{industry.approach}</p>
              </div>
            </div>

            <div className="lg:col-span-1 flex justify-end relative z-10">
              <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-teal-400 group-hover:translate-x-2 transition-all duration-300" />
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
