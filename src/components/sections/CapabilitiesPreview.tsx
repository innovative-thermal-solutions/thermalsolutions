import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CapabilitiesPreview() {
  const capabilities = [
    { num: "01", title: "THERMAL SIMULATION" },
    { num: "02", title: "IN-HOUSE DESIGN" },
    { num: "03", title: "FRICTION STIR WELDING" },
    { num: "04", title: "5-AXIS CNC MACHINING" },
    { num: "05", title: "QUALITY / INSPECTION" },
    { num: "06", title: "ISO 9001:2015 SYSTEM" }
  ];

  return (
    <section className="relative w-full py-32 px-6 lg:px-12 bg-[#020617] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="sticky top-32">
            <span className="text-teal-accent font-mono text-sm tracking-[0.2em] uppercase mb-4 block">
              04 / Capabilities
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8">
              FROM THERMAL CONCEPT TO FINISHED HARDWARE.
            </h2>
            <p className="text-gray-400 font-light text-lg mb-10 max-w-md">
              Our vertically integrated North American manufacturing facility allows us to control quality and lead time from initial CFD simulation to final 5-axis CNC machining.
            </p>
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-medium uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors"
            >
              See All Capabilities
            </Link>
          </div>
          
          <div className="flex flex-col gap-4">
            {capabilities.map((cap) => (
              <div key={cap.num} className="group border-b border-white/10 pb-6 flex items-baseline justify-between cursor-pointer hover:border-teal-accent/50 transition-colors">
                <div className="flex items-baseline gap-6">
                  <span className="text-gray-500 font-mono text-sm">{cap.num}</span>
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white group-hover:text-teal-accent transition-colors">
                    {cap.title}
                  </h3>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-600 group-hover:text-teal-accent group-hover:translate-x-2 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
