import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Download, ExternalLink, BookOpen, Layers } from "lucide-react";
import { SubpageCta } from "@/components/common/SubpageCta";

export const metadata = {
  title: "Technical thinking for real thermal challenges. | ITS Cooling",
  description:
    "Explore application examples, technical papers and engineering perspectives on liquid cold plates and heat sinks from Innovative Thermal Solutions.",
};

const papers = [
  {
    num: "01",
    title: "300 kW IGBT inverter thermal management",
    description:
      "A technical paper highlighted by ITS examines holistic thermal system design, testing and modelling for a 300 kW IGBT-based inverter operating in harsh utility duty cycles.",
    highlights: [
      "Custom serpentine fluid path balancing pressure drop and heat transfer coefficient",
      "CFD validation against experimental physical test-bench telemetry",
      "Friction Stir Welded cover sealing with 100% burst test compliance",
    ],
    tag: "Technical Paper",
    href: "/case-studies/power-supply",
  },
  {
    num: "02",
    title: "Power conversion system cold plate",
    description:
      "A case study addresses a liquid cold plate for a power conversion system used in utility-scale energy storage and battery arrays.",
    highlights: [
      "Multi-module mounting surface with sub-0.05 mm coplanarity",
      "Low pressure drop (< 3.5 PSI at 15 LPM) for high system energy efficiency",
      "Corrosion-inhibited aluminium alloy fluid interface",
    ],
    tag: "Application Case Study",
    href: "/case-studies/electric-bus",
  },
  {
    num: "03",
    title: "High-power RF amplifier",
    description:
      "An air-cooled heat-sink case study explores the thermal requirements of high-power RF hardware with extreme localized heat flux.",
    highlights: [
      "Embedded copper heat pipes in 6063-T5 aluminium base",
      "High aspect-ratio bonded fins maximizing convective surface",
      "Rapid lateral heat spreading eliminating local hotspot spikes",
    ],
    tag: "Thermal Architecture Study",
    href: "/case-studies/wireless-amplifier",
  },
  {
    num: "04",
    title: "Power quality equipment",
    description:
      "An application story covers an air-cooled solution developed for power-quality equipment, harmonic filters, and industrial drives.",
    highlights: [
      "Natural and forced convection dual-mode performance",
      "Custom CNC mounting brackets for compact NEMA cabinet integration",
      "Thermal cycling durability without interface grease pump-out",
    ],
    tag: "Field Application Story",
    href: "/case-studies/embedded-heat-pipe",
  },
];

export default function ResourcesPage() {
  return (
    <main id="main-content" className="w-full min-h-screen bg-slate-50 pt-28 pb-20">
      {/* Detail Hero */}
      <section className="relative w-full bg-gradient-to-br from-white via-slate-50 to-sky-50 border-b border-slate-200 py-16 lg:py-24 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold text-sky-600 px-2 py-0.5 bg-white border border-slate-200 rounded-sm">
                ITS
              </span>
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold">
                Technical Resources
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6">
              Technical thinking for real thermal challenges.
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
              Explore application examples and engineering perspectives from Innovative Thermal Solutions.
            </p>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white flex items-center justify-center p-6">
            <Image
              src="/images/products/pressed-tube-cold-plate.png"
              alt="Resources at Innovative Thermal Solutions"
              width={480}
              height={360}
              priority
              className="object-contain max-h-[300px] drop-shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Detail Content Articles */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
        <div className="divide-y divide-slate-200">
          {papers.map((paper) => (
            <article key={paper.num} className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-2">
                <span className="font-mono text-2xl font-bold text-sky-600">{paper.num}</span>
                <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                  {paper.tag}
                </span>
              </div>
              <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                    {paper.title}
                  </h2>
                  <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal">
                    {paper.description}
                  </p>
                  <Link
                    href={paper.href}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-950 text-white hover:bg-sky-600 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-3 font-semibold">
                    Key Technical Learnings
                  </span>
                  <ul className="space-y-3">
                    {paper.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs font-mono text-slate-700 leading-relaxed">
                        <span className="text-sky-600 font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Inline CTA */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <SubpageCta
          eyebrow="Have an application to discuss?"
          title="Let's engineer the solution."
          description="Connect directly with our engineering team in Guelph, Ontario to request customized thermal case studies or specific calculation notes."
          primaryCtaText="Talk to a thermal engineer"
          primaryCtaHref="/contact"
        />
      </div>
    </main>
  );
}
