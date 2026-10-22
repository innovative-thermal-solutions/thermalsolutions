import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Factory,
  Layers,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { INDUSTRIES } from "@/data/companyContent";

const ALIAS_MAP: Record<string, string> = {
  "power-converters": "power-electronics",
  "electric-vehicles": "ev-battery",
  "aerospace-defense": "aerospace",
  "telecommunications": "satellite",
  "industrial-automation": "industrial",
};

export function getIndustryBySlug(slug: string) {
  const normalized = ALIAS_MAP[slug] || slug;
  return INDUSTRIES.find((i) => i.slug === normalized || i.slug === slug);
}

export function generateStaticParams() {
  const primary = INDUSTRIES.map((ind) => ({ slug: ind.slug }));
  const aliases = Object.keys(ALIAS_MAP).map((slug) => ({ slug }));
  return [...primary, ...aliases];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: `${industry.title} Thermal Management | ITS Cooling`,
    description: industry.description,
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const otherIndustries = INDUSTRIES.filter((i) => i.slug !== industry.slug);

  return (
    <main id="main-content" className="w-full min-h-screen bg-slate-50 pt-28 pb-24">
      {/* Header & Breadcrumb */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-8">
          <Link
            href="/industries"
            className="hover:text-sky-600 transition-colors inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Industries</span>
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">{industry.title}</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-sky-600 font-mono text-xs tracking-[0.25em] uppercase font-bold px-2.5 py-1 bg-sky-50 border border-sky-200 rounded">
            {industry.slideNumber} • Industry Applications
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-slate-200 rounded text-xs font-mono text-slate-700">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>ISO 9001:2015 Certified</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-slate-200 rounded text-xs font-mono text-slate-700">
            <Factory className="w-3.5 h-3.5 text-sky-600" />
            <span>Guelph, Ontario In-House Facility</span>
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6 max-w-5xl">
          {industry.title}.
        </h1>

        <p className="text-slate-600 text-lg sm:text-2xl leading-relaxed max-w-4xl font-normal mb-8">
          {industry.subtitle}
        </p>
      </section>

      {/* Main Breakdown Section */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-12">
          {/* Industry Visual with Technical Overlay */}
          <div className="lg:col-span-5 relative min-h-[380px] bg-slate-900 border border-slate-200 rounded-3xl overflow-hidden shadow-md flex items-center justify-center p-4 group">
            <Image
              src={industry.image}
              alt={industry.title}
              fill
              priority
              className="object-cover filter brightness-[0.9] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white">
              <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 block mb-1">
                Custom Engineering Architecture
              </span>
              <p className="text-xs font-mono text-slate-300">
                100% custom-designed cold plates &amp; heat sinks machined to customer envelope.
              </p>
            </div>
          </div>

          {/* Core Approach & Overview */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xs flex-1">
              <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-bold block mb-2">
                APPLICATION OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 uppercase mb-4 tracking-tight">
                Thermal Requirements &amp; Approach
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 font-normal">
                {industry.description}
              </p>

              {/* Technical Specifications */}
              <div className="pt-6 border-t border-slate-100">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block font-bold mb-4">
                  KEY CAPABILITIES &amp; BENCHMARKS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-mono text-slate-800">
                  {industry.keySpecs.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span className="font-medium text-xs sm:text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Deep Dive: Challenges vs ITS Approach */}
        {(industry.challenges || industry.itsApproach) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {industry.challenges && (
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900">
                    Primary Thermal Challenges
                  </span>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {industry.challenges}
                </p>
              </div>
            )}
            {industry.itsApproach && (
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-600" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900">
                    ITS Engineering Methodology
                  </span>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {industry.itsApproach}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Consultation Callout */}
        <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl relative overflow-hidden mb-20">
          <div className="absolute inset-0 bg-grid-blueprint opacity-20 pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <span className="text-sky-400 font-mono text-xs uppercase tracking-widest block mb-2 font-bold">
              100% CUSTOM THERMAL ARCHITECTURE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mb-3">
              Have a thermal challenge in {industry.title.toLowerCase()}?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every cooling design is built to order from your CAD envelope, heat maps, and fluid conditions under one roof in Guelph, Ontario.
            </p>
          </div>
          <Link
            href="/contact"
            className="relative z-10 px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-400 hover:to-cyan-300 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-cyan-500/20 whitespace-nowrap cursor-pointer hover:scale-105"
          >
            Consult an Engineer →
          </Link>
        </div>

        {/* Explore Other Industries */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-sky-600 font-bold block mb-1">
                EXPLORE APPLICATIONS
              </span>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-slate-950">
                Other Industries Served
              </h3>
            </div>
            <Link
              href="/industries"
              className="text-xs font-mono uppercase tracking-wider text-slate-500 hover:text-sky-600 inline-flex items-center gap-1 font-semibold"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherIndustries.slice(0, 3).map((other) => (
              <Link
                key={other.slug}
                href={`/industries/${other.slug}`}
                className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-slate-900 border border-slate-200">
                    <Image
                      src={other.image}
                      alt={other.title}
                      fill
                      className="object-cover filter brightness-[0.85] group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="font-mono text-[11px] text-sky-600 font-bold uppercase tracking-wider block mb-1">
                    {other.slideNumber}
                  </span>
                  <h4 className="text-lg font-bold text-slate-950 uppercase tracking-tight mb-2 group-hover:text-sky-600 transition-colors">
                    {other.title}
                  </h4>
                  <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">
                    {other.subtitle}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-sky-600 font-bold">
                  <span>Explore Solution</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
