import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck, Phone, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyContent";
import { DitherWave } from "@/components/ui/DitherWave";

interface SubpageCtaProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function SubpageCta({
  eyebrow = "100% Custom Engineering · Zero Shelf Inventory",
  title = "Bring us your cooling requirements.",
  description = "We don't sell standard cooling products off shelves. Customers come to us with their thermal requirements, and we take care of the entire process — from concept to finished product under one roof.",
  primaryCtaText = "Submit Your Requirements",
  primaryCtaHref = "/contact",
  secondaryCtaText = "Explore Capabilities",
  secondaryCtaHref = "/capabilities",
}: SubpageCtaProps) {
  return (
    <section className="w-full my-12">
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white via-sky-50/80 to-blue-50/60 border-2 border-sky-200/90 p-8 sm:p-12 lg:p-14 shadow-lg text-slate-900">
        {/* Dynamic Dither Wave Background */}
        <DitherWave
          color1="#0284c7"
          color2="#38bdf8"
          speed={0.4}
          frequency={2.4}
          amplitude={0.3}
          ditherSize={2.0}
          opacity={0.18}
        />
        {/* Subtle blueprint grid */}
        <div className="absolute inset-0 bg-grid-blueprint opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold text-sky-700 px-2.5 py-0.5 bg-white border border-sky-300 rounded shadow-2xs">
                ITS GUELPH
              </span>
              <span className="text-xs uppercase font-mono tracking-widest text-slate-500 font-semibold">
                {eyebrow}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-slate-950 leading-tight mb-4">
              {title}
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal mb-6">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-600">
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-sky-700 font-bold transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-600" />
                <a href={`mailto:${COMPANY_INFO.salesEmail}`} className="hover:text-sky-700 font-bold transition-colors">
                  {COMPANY_INFO.salesEmail}
                </a>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href={primaryCtaHref}
              className="shine-sweep inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-950 text-white hover:bg-sky-600 font-bold text-xs uppercase tracking-[0.14em] rounded-md transition-all whitespace-nowrap shadow-md group"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {secondaryCtaText && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-800 hover:text-sky-700 font-bold text-xs uppercase tracking-[0.14em] rounded-md transition-colors border border-slate-300 shadow-2xs whitespace-nowrap"
              >
                <span>{secondaryCtaText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
