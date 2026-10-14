import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingDown } from "lucide-react";

export function CaseStudiesPreview() {
  const caseStudies = [
    {
      title: "Wireless Solid-State Amplifier",
      metric: "20°C",
      metricLabel: "Peak Temp Reduction",
      image: "/images/image66.png",
      description: "Slide 17: Eliminated severe hotspot concentrations across high-power RF transistors through optimized fin geometry.",
      href: "/case-studies/wireless-amplifier",
    },
    {
      title: "Power Supply Heat Sink (Dual AC/DC)",
      metric: "82.3W",
      metricLabel: "AC Load Handled (6X)",
      image: "/images/image73.png",
      description: "Slide 19: Handled 12X DC modules (24W), 32W peak DC, and 6X AC modules (82.3W) with optimized fin pitch for low noise.",
      href: "/case-studies/power-supply",
    },
    {
      title: "Electric Bus Large-Format Cold Plate",
      metric: "57″ × 24″",
      metricLabel: "1450 mm FSW Cold Plate",
      image: "/images/image126.png",
      description: "Slide 33: Large-format battery cooling cold plate with uniform velocity distribution and zero-porosity FSW joints.",
      href: "/case-studies/electric-bus",
    }
  ];

  return (
    <section className="relative w-full py-32 px-6 lg:px-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <span className="text-teal-400 font-mono text-xs tracking-[0.2em] uppercase mb-4 block">
              09 / Proven Engineering Results
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              ENGINEERED CASE STUDIES.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="group flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-teal-400 hover:text-white transition-colors"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.title}
              href={study.href}
              className="group block bg-[#020617] border border-white/10 hover:border-teal-500/50 hover:bg-[#070D18] transition-all overflow-hidden flex flex-col justify-between shadow-xl"
            >
              <div className="relative aspect-video w-full bg-[#0F172A] border-b border-white/10 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-6 pb-6 border-b border-white/10 flex items-center justify-between">
                    <div>
                      <span className="block text-3xl font-bold font-mono tracking-tight text-teal-400">
                        {study.metric}
                      </span>
                      <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                        {study.metricLabel}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-gray-300 font-light text-xs leading-relaxed mb-6">
                    {study.description}
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 group-hover:text-white transition-colors">
                  <span>Read Full Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
