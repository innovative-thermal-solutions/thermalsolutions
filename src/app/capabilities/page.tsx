import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export const metadata = {
  title: "Integrated Engineering & Manufacturing Capabilities | Innovative Thermal Solutions",
  description:
    "Engineering, design, advanced manufacturing and quality—connected to develop thermal solutions for demanding applications.",
};

interface CapabilityChapter {
  id: string;
  num: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  alt: string;
  theme: "dark" | "light";
  reverse?: boolean;
}

const CHAPTERS: CapabilityChapter[] = [
  {
    id: "thermal-simulation",
    num: "01",
    category: "Engineering",
    title: "Thermal Simulation",
    subtitle: "Understand the thermal challenge before committing to hardware.",
    description:
      "In-house thermal analysis supports evaluation of heat transfer, temperature distribution, coolant strategy and system behaviour throughout development.",
    tags: ["Heat-transfer evaluation", "Flow-path development", "Design comparison"],
    image: "/images/capabilities/thermal-simulation.webp",
    alt: "Original technical sketch of a cold plate transitioning into a CFD-style thermal simulation",
    theme: "dark",
    reverse: false,
  },
  {
    id: "in-house-design",
    num: "02",
    category: "Engineering",
    title: "In-House Design",
    subtitle: "Design that understands how it will be built.",
    description:
      "Engineering and design are connected directly with manufacturing so thermal performance, geometry, manufacturability and assembly can be considered together.",
    tags: ["Thermal architecture", "Mechanical design", "Design for manufacturing"],
    image: "/images/capabilities/in-house-design.webp",
    alt: "Close-up 3D CAD modeling view of heat sink fins and liquid cold plate internal fluid routing",
    theme: "light",
    reverse: true,
  },
  {
    id: "friction-stir-welding",
    num: "03",
    category: "Manufacturing",
    title: "Friction Stir Welding",
    subtitle: "High-integrity joining without melting the base material.",
    description:
      "In-house friction stir welding enables solid-state joining for aluminium and copper liquid-cooling assemblies with complex internal channels.",
    tags: ["Solid-state joining", "Integrated cold-plate production", "Controlled weld path"],
    image: "/images/capabilities/fsw.webp",
    alt: "FSW tool shoulder and pin joining two metal plates along a seamless weld seam",
    theme: "dark",
    reverse: false,
  },
  {
    id: "five-axis-cnc",
    num: "04",
    category: "Manufacturing",
    title: "5-Axis CNC Milling",
    subtitle: "Complex geometry. Controlled precision.",
    description:
      "In-house machining supports complex aluminium components and thermal-management hardware from prototype development through production.",
    tags: ["Complex machining", "Cooling channels", "Prototype to production"],
    image: "/images/capabilities/five-axis.webp",
    alt: "High-speed 5-axis CNC milling spindle precisely machining cooling fluid channels",
    theme: "light",
    reverse: true,
  },
  {
    id: "embedded-heat-sink",
    num: "05",
    category: "Manufacturing",
    title: "Embedded Heat-Sink Manufacturing",
    subtitle: "Controlled force. Integrated assemblies.",
    description:
      "An in-house hydraulic press supports controlled manufacturing steps for embedded heat-sink and thermal assemblies, keeping critical alignment and assembly close to the engineering team.",
    tags: ["Controlled assembly", "Component alignment", "Repeatable process"],
    image: "/images/capabilities/hydraulic-press.webp",
    alt: "Precision hydraulic press assembling heat pipes into machined heat sink channels",
    theme: "dark",
    reverse: false,
  },
  {
    id: "quality-team",
    num: "06",
    category: "Quality",
    title: "In-House Quality Team",
    subtitle: "Quality is part of the process.",
    description:
      "A dedicated in-house quality team supports inspection and verification throughout manufacturing against defined engineering and customer requirements.",
    tags: ["Inspection", "Verification", "Traceability"],
    image: "/images/capabilities/quality.webp",
    alt: "Quality engineer operating a Coordinate Measuring Machine measuring a manufactured liquid plate",
    theme: "light",
    reverse: true,
  },
  {
    id: "iso-quality",
    num: "07",
    category: "Quality",
    title: "ISO 9001:2015 Certified",
    subtitle: "A structured system for controlled manufacturing.",
    description:
      "ITS operates under an ISO 9001:2015 certified Quality Management System supporting consistent quality, customer focus and continuous improvement.",
    tags: ["Quality management", "Process control", "Continuous improvement"],
    image: "/images/capabilities/iso-quality.webp",
    alt: "Formal ISO 9001 certification emblem with quality assurance schematic diagram",
    theme: "dark",
    reverse: false,
  },
  {
    id: "north-american-manufacturing",
    num: "08",
    category: "Location",
    title: "North American Manufacturing",
    subtitle: "Engineered here. Manufactured here. Guelph, Ontario.",
    description:
      "Engineering and manufacturing in Ontario support closer technical collaboration, production visibility and responsive execution for North American programs.",
    tags: ["Engineering proximity", "Manufacturing visibility", "Supply-chain responsiveness"],
    image: "/images/capabilities/guelph-manufacturing.webp",
    alt: "Architectural line graphic of the modern Guelph Ontario manufacturing facility",
    theme: "light",
    reverse: true,
  },
];

const PROCESS_STEPS = [
  { num: "01", name: "Thermal challenge" },
  { num: "02", name: "Simulation" },
  { num: "03", name: "Design" },
  { num: "04", name: "5-axis machining" },
  { num: "05", name: "Joining & assembly" },
  { num: "06", name: "Quality" },
  { num: "07", name: "Finished solution" },
];

export default function CapabilitiesPage() {
  return (
    <main id="main-content" className="w-full min-h-screen bg-[#0f1719] text-[#f4f6ef] overflow-hidden">
      {/* 01 PAGE HERO */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] pt-36 sm:pt-44 lg:pt-52 pb-20 px-6 sm:px-8 lg:px-14 bg-[#0f1719] border-b border-slate-800 flex flex-col justify-end overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(117,185,181,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(117,185,181,0.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-[#00747a]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-[1440px] mx-auto relative z-10 flex-1 flex flex-col justify-end">
          <p className="text-[12px] font-mono tracking-[0.25em] text-[#00747a] uppercase font-bold mb-6">
            ENGINEERING + MANUFACTURING
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-serif font-medium tracking-tight text-[#f4f6ef] leading-[0.98] sm:leading-[0.94] max-w-5xl mb-12">
            FROM THERMAL CONCEPT TO FINISHED HARDWARE.
          </h1>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-8 border-t border-slate-800/80">
            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed font-light">
              Engineering, design, advanced manufacturing and quality—connected to develop thermal solutions for demanding applications.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="px-6 sm:px-8 py-3.5 bg-[#00747a] hover:bg-[#005d62] text-white font-bold text-xs sm:text-sm font-mono uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-[#00747a]/10"
              >
                <span>Discuss your application</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="#capability-process"
                className="text-xs sm:text-sm font-mono text-[#9da8a9] hover:text-white uppercase tracking-wider inline-flex items-center gap-2 py-3.5 px-4 transition-colors"
              >
                <span>Explore the process</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 02 CAPABILITY MANIFESTO */}
      <section className="relative w-full py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-14 bg-[#f8faf9] text-[#141f22] border-b border-[#d8dedf]">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-3">
            <p className="text-[12px] font-mono tracking-[0.2em] text-[#00747a] uppercase font-bold">
              ONE TEAM / ONE PATH
            </p>
          </div>
          <div className="lg:col-span-9">
            <p className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-serif font-light text-[#596a72] leading-[1.08] tracking-tight">
              We can <strong className="font-semibold text-[#0f1719]">analyze it.</strong> <br />
              We can <strong className="font-semibold text-[#0f1719]">design it.</strong> <br />
              We can <strong className="font-semibold text-[#0f1719]">manufacture it.</strong> <br />
              We can <strong className="font-semibold text-[#0f1719]">verify it.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 03 EIGHT CAPABILITY CHAPTERS */}
      {CHAPTERS.map((chapter) => {
        const isDark = chapter.theme === "dark";

        return (
          <section
            key={chapter.id}
            id={chapter.id}
            className={`relative w-full py-20 sm:py-28 lg:py-36 px-6 sm:px-8 lg:px-14 border-b transition-colors ${
              isDark
                ? "bg-[#0f1719] text-[#f4f6ef] border-slate-800"
                : "bg-[#f8faf9] text-[#141f22] border-[#d8dedf]"
            }`}
          >
            {/* Subtle dark grid background for dark sections */}
            {isDark && (
              <div
                className="absolute inset-0 pointer-events-none opacity-15"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(117,185,181,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(117,185,181,0.06) 1px, transparent 1px)",
                  backgroundSize: "64px 64px",
                }}
              />
            )}

            <div className="w-full max-w-[1440px] mx-auto relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* Artwork Frame */}
                <div
                  className={`lg:col-span-6 relative aspect-[3/2] w-full rounded-xl overflow-hidden shadow-2xl border ${
                    isDark ? "border-slate-800 bg-[#07191f]" : "border-[#d8dedf] bg-white"
                  } ${chapter.reverse ? "lg:order-2" : "lg:order-1"}`}
                >
                  <Image
                    src={chapter.image}
                    alt={chapter.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    className={`absolute inset-0 pointer-events-none ${
                      isDark
                        ? "bg-gradient-to-t from-[#0f1719]/40 via-transparent to-transparent"
                        : "bg-gradient-to-t from-black/10 via-transparent to-transparent"
                    }`}
                  />
                  {/* Artwork Index Number */}
                  <span
                    className={`absolute bottom-4 right-5 text-4xl sm:text-5xl font-mono font-bold tracking-tight opacity-35 select-none pointer-events-none ${
                      isDark ? "text-white" : "text-[#0f1719]"
                    }`}
                  >
                    {chapter.num}
                  </span>
                </div>

                {/* Copy Column */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    chapter.reverse ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <p
                    className={`text-[12px] font-mono tracking-[0.2em] uppercase font-bold mb-3 ${
                      isDark ? "text-[#00747a]" : "text-[#00747a]"
                    }`}
                  >
                    {chapter.num} / {chapter.category}
                  </p>

                  <h2
                    className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight mb-4 ${
                      isDark ? "text-white" : "text-[#0f1719]"
                    }`}
                  >
                    {chapter.title}
                  </h2>

                  <h3
                    className={`text-xl sm:text-2xl font-sans font-medium mb-5 leading-snug ${
                      isDark ? "text-[#b2ccc7]" : "text-[#3f5661]"
                    }`}
                  >
                    {chapter.subtitle}
                  </h3>

                  <p
                    className={`text-sm sm:text-base leading-relaxed mb-8 font-light ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {chapter.description}
                  </p>

                  {/* Bullet Tags */}
                  <ul className="flex flex-wrap gap-2 sm:gap-3">
                    {chapter.tags.map((tag) => (
                      <li
                        key={tag}
                        className={`text-xs font-mono py-1.5 px-3.5 rounded-full border tracking-wide ${
                          isDark
                            ? "bg-[#0c2831] border-[#1b4651] text-[#9da8a9]"
                            : "bg-white border-[#d8dedf] text-slate-700 shadow-sm"
                        }`}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* 04 COMPLETE ITS PROCESS RAIL */}
      <section id="capability-process" className="relative w-full py-24 sm:py-32 px-6 sm:px-8 lg:px-14 bg-[#0f1719] text-white border-b border-slate-800">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-[12px] font-mono tracking-[0.2em] text-[#00747a] uppercase font-bold mb-3">
                THE COMPLETE ITS PROCESS
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight leading-[1.08] text-white">
                One team. <br />
                One manufacturing path.
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base max-w-md leading-relaxed font-light">
              Capabilities are valuable because they connect. The same thermal problem stays visible from analysis through inspection.
            </p>
          </div>

          {/* Process Rail (7 Columns) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 border-t border-slate-800 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="relative pt-6 pb-8 px-4 sm:px-5 flex flex-col justify-between min-h-[160px] sm:min-h-[190px] group hover:bg-[#0c2831]/50 transition-colors"
              >
                {/* Node Indicator Dot */}
                <span className="w-2 h-2 rounded-full bg-[#00747a] shadow-[0_0_12px_#00747a] absolute -top-1 left-4 sm:left-5" />

                <span className="text-xs font-mono text-[#00747a] font-bold tracking-wider">
                  {step.num}
                </span>

                <strong className="text-sm sm:text-base font-serif font-medium text-white leading-snug">
                  {step.name}
                </strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 FINAL CALL TO ACTION */}
      <section className="relative w-full py-24 sm:py-32 px-6 sm:px-8 lg:px-14 bg-gradient-to-b from-[#0f1719] to-[#06171d] text-white text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <p className="text-[12px] font-mono tracking-[0.25em] text-[#00747a] uppercase font-bold mb-4">
            START WITH THE THERMAL CHALLENGE
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white mb-6 leading-tight">
            Bring us the application.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light mb-10 max-w-2xl">
            Engineering and manufacturing can develop the path from first model to finished thermal hardware.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#00747a] hover:bg-[#005d62] text-white font-bold text-xs sm:text-sm font-mono uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xl shadow-[#00747a]/10"
            >
              <span>Talk to a thermal engineer</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 border border-slate-700 hover:border-slate-500 bg-slate-900/40 text-white font-medium text-xs sm:text-sm font-mono uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore products</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
