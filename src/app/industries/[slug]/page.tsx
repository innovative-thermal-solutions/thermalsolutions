import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { INDUSTRIES } from "@/data/companyContent";

export function generateStaticParams() {
  return INDUSTRIES.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return {};
  return {
    title: `${industry.title} | ITS Cooling`,
    description: industry.description,
  };
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden pt-32 pb-28">
      <div className="absolute top-20 left-10 w-[700px] h-[500px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

      <section className="px-6 lg:px-12 mb-16 max-w-7xl mx-auto relative z-10">
        <Link
          href="/industries"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-teal-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Industries</span>
        </Link>

        <span className="text-teal-400 font-mono text-xs tracking-[0.25em] uppercase block mb-4">
          {industry.slideNumber} • Industry Applications
        </span>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-8 max-w-5xl">
          {industry.title}.
        </h1>

        <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl border-l-2 border-teal-400/50 pl-6 py-2 mb-10">
          {industry.subtitle}
        </p>
      </section>

      {/* Main Breakdown */}
      <section className="px-6 lg:px-12 mb-28 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-5 relative aspect-[4/3] w-full bg-[#0F172A] border border-white/10 overflow-hidden shadow-2xl">
          <Image src={industry.image} alt={industry.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-teal-400">
            {industry.title} Thermal Management
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Application Overview</h2>
            <p className="text-gray-300 font-light text-base leading-relaxed mb-8">
              {industry.description}
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 bg-black/40 border border-white/10">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-1">
                  Thermal Challenge
                </span>
                <p className="text-sm text-gray-300 font-light">{industry.challenges}</p>
              </div>

              <div className="p-4 bg-teal-950/20 border border-teal-500/20">
                <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-1">
                  ITS Engineering Approach
                </span>
                <p className="text-sm text-gray-300 font-light">{industry.itsApproach}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-300">
              {industry.keySpecs.map((spec) => (
                <span key={spec} className="px-3 py-1 bg-white/5 border border-white/10 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                  <span>{spec}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto relative z-10 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-teal-400 text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
        >
          <span>Discuss {industry.title} Cooling Requirements</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
