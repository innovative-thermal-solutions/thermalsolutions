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
    <main id="main-content" className="w-full min-h-screen bg-slate-50 pt-28 pb-24">
      <section className="px-6 lg:px-12 mb-16 max-w-7xl mx-auto">
        <Link
          href="/industries"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 hover:text-sky-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Industries</span>
        </Link>

        <span className="text-sky-600 font-mono text-xs tracking-[0.25em] uppercase block mb-3 font-semibold">
          {industry.slideNumber} • Industry Applications
        </span>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6 max-w-4xl">
          {industry.title}.
        </h1>

        <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-3xl font-normal mb-12">
          {industry.subtitle}
        </p>

        {/* Main Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-5 relative aspect-[4/3] w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs flex items-center justify-center p-6">
            <Image src={industry.image} alt={industry.title} fill className="object-cover" />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
              <h2 className="text-2xl font-bold text-slate-950 uppercase mb-4">Thermal Requirements &amp; Approach</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {industry.description}
              </p>

              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                  Key Capabilities Deployed
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-700">
                  {industry.keySpecs.map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-1">
              Have a thermal challenge in {industry.title.toLowerCase()}?
            </h3>
            <p className="text-slate-300 text-sm">
              Our engineering team can evaluate your exact heat maps and model custom heatsink geometry.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-sky-500 text-slate-950 hover:bg-white font-bold text-xs uppercase tracking-wider rounded-sm transition-colors whitespace-nowrap"
          >
            Consult an Engineer →
          </Link>
        </div>
      </section>
    </main>
  );
}
