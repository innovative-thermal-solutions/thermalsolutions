import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Droplets,
  Wind,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Zap,
  Gauge,
  Factory,
} from "lucide-react";
import { SubpageCta } from "@/components/common/SubpageCta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Cooling Hardware Engineered from Scratch | ITS Cooling",
  description:
    "Explore custom liquid cold plates, air-cooled heat sinks, and laminated busbars. No pre-made catalog parts — engineered precisely around your component's thermal load.",
};

const productCategories = [
  {
    id: "01",
    tag: "LIQUID COOLING ARCHITECTURES",
    name: "Liquid Cold Plates",
    slug: "/products/liquid-cold-plates",
    heroImage: "/images/showcase/cnc-machined-aluminum-compartment-tray-clean.png",
    alt: "CNC Machined Aluminum Liquid Cold Plate",
    badge: "Extreme Heat Flux",
    headline: "High-density thermal dissipation for next-gen silicon and power modules.",
    description:
      "When air cooling reaches its limits, our vacuum-brazed and friction stir welded (FSW) liquid cold plates provide unmatched heat transfer coefficients and ultra-low pressure drop across micro-channel passages.",
    specs: [
      { label: "Cooling Medium", value: "Water / Glycol / Dielectric" },
      { label: "Joining Technology", value: "FSW & Vacuum Brazed" },
      { label: "Thermal Capacity", value: "Up to 500+ W/cm²" },
    ],
    highlights: [
      "Friction stir welded (FSW) leak-tight channel geometries",
      "Custom pressed-in copper or stainless steel tube passages",
      "Integral manifolds and O-ring face seal porting",
      "Hydrostatically pressure tested to 100+ PSI",
    ],
    galleryItems: [
      { name: "FSW Micro-Channel", img: "/images/products/custom-machined-cold-plate.png" },
      { name: "Pressed Tube Plate", img: "/images/products/pressed-tube-cold-plate.png" },
      { name: "Copper Embedded", img: "/images/products/copper-embedded-liquid-cold-plate.png" },
    ],
  },
  {
    id: "02",
    tag: "AIR COOLING SYSTEMS",
    name: "Air-Cooled Heat Sinks",
    slug: "/products/air-cooled-heat-sinks",
    heroImage: "/images/showcase/air-cooling-hero-dsc09561-clean.png",
    alt: "High-Performance Air Cooled Heat Sink",
    badge: "Forced & Natural Convection",
    headline: "Engineered fin geometries maximize surface area within tight envelopes.",
    description:
      "From ultra-dense bonded fins to skived copper and embedded heat pipe assemblies, we tailor fin profiles, spacing, and base thickness to your airflow rate, fan static pressure, and thermal footprint.",
    specs: [
      { label: "Fin Technologies", value: "Bonded, Skived & Extruded" },
      { label: "Materials", value: "6063 Aluminum & C11000 Copper" },
      { label: "Airflow Integration", value: "Blower, Axial Fan & Ducted" },
    ],
    highlights: [
      "High aspect-ratio bonded fin assemblies for high airflow",
      "Skived fin architectures without thermal interface resistance",
      "Embedded heat pipe vapor chambers for rapid heat spreading",
      "Precision CNC fly-cut mounting surfaces (flatness within 0.05mm)",
    ],
    galleryItems: [
      { name: "Bonded Fin Sinks", img: "/images/products/bonded-heat-sink.png" },
      { name: "Skived Heat Sinks", img: "/images/showcase/skived.webp" },
      { name: "Heat Pipe Assisted", img: "/images/showcase/heat-pipe.webp" },
    ],
  },
  {
    id: "03",
    tag: "POWER DISTRIBUTION & INTERCONNECTS",
    name: "Laminated Busbars & Assemblies",
    slug: "/products/busbar",
    heroImage: "/images/showcase/laminated-busbar.webp",
    alt: "Precision Laminated Busbar Assembly",
    badge: "Low Inductance Power",
    headline: "Low-inductance, compact current distribution for high-voltage systems.",
    description:
      "Modern silicon carbide (SiC) and GaN switching circuits require minimal parasitic inductance. Our multi-layer laminated busbars combine precision-stamped copper conductors with high-dielectric insulation films.",
    specs: [
      { label: "Voltage Ratings", value: "Up to 1,500V+ DC" },
      { label: "Dielectric Layer", value: "Kapton, Mylar & Nomex" },
      { label: "Conductor Plating", value: "Tin, Nickel, Silver & Gold" },
    ],
    highlights: [
      "Ultra-low stray inductance to suppress switching voltage spikes",
      "Compact planar footprint replacing bulky, messy wire harnesses",
      "Direct integration with cold plates for active busbar cooling",
      "Full Hi-Pot and partial discharge testing in-house",
    ],
    galleryItems: [
      { name: "Multi-Layer Busbars", img: "/images/products/busbar/busbar.png" },
      { name: "Power Terminal Detail", img: "/images/products/busbar/busbar-detail.png" },
      { name: "Turnkey Power Module", img: "/images/products/busbar-assembly.png" },
    ],
  },
];

const turnkeySteps = [
  {
    num: "01",
    title: "Thermal Modeling & CFD",
    desc: "Predict temperature gradients, hotspot distribution, and fluid pressure drop before any metal is cut.",
    icon: Gauge,
  },
  {
    num: "02",
    title: "5-Axis CNC Precision",
    desc: "In-house multi-axis machining ensures tight geometric tolerances and micro-surface flatness.",
    icon: Factory,
  },
  {
    num: "03",
    title: "FSW & Joining",
    desc: "Advanced friction stir welding creates seamless, monolithic joints with zero flux contamination.",
    icon: Zap,
  },
  {
    num: "04",
    title: "Quality & Helium Leak Test",
    desc: "Every cold plate undergoes coordinate measuring (CMM) and 100% helium mass-spec leak verification.",
    icon: ShieldCheck,
  },
];

export default function ProductsPage() {
  return (
    <main id="main-content" className="w-full min-h-screen bg-[#f8faf9] text-[#141f22]">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[640px] lg:min-h-[700px] border-b border-[#d8dedf] bg-[#f8faf9] overflow-hidden pt-28 lg:pt-32">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#00747a] font-bold mb-4">
              CUSTOM THERMAL HARDWARE · NO CATALOG STOCK
            </p>

            <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-serif font-medium tracking-tight text-[#141f22] leading-[0.98] sm:leading-[0.96] mb-6">
              Engineered around your heat source.<br />
              <span className="text-[#00747a]">Built to your CAD envelope.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal">
              Every thermal challenge is unique. We do not sell off-the-shelf catalog products. Instead, our engineers design and manufacture custom liquid cold plates, air-cooled heat sinks, and laminated busbars built from the ground up for your power profile and mechanical constraints.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-7 py-4 bg-[#00747a] hover:bg-[#005d62] text-white font-mono text-xs uppercase tracking-wider font-bold rounded shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request Custom Quote &amp; Review</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
              <a
                href="#categories"
                className="inline-flex items-center gap-2 px-6 py-4 border border-slate-300 hover:border-slate-400 bg-white text-slate-800 font-mono text-xs uppercase tracking-wider font-bold rounded transition-colors shadow-2xs"
              >
                <span>Browse Technologies ↓</span>
              </a>
            </div>

            <div className="pt-8 mt-10 border-t border-[#d8dedf] grid grid-cols-3 gap-6 text-left">
              <div>
                <strong className="block text-2xl sm:text-3xl font-serif font-bold text-[#141f22]">100%</strong>
                <span className="text-[11px] font-mono tracking-wider text-slate-500 uppercase">Custom Geometries</span>
              </div>
              <div>
                <strong className="block text-2xl sm:text-3xl font-serif font-bold text-[#141f22]">&lt;0.05mm</strong>
                <span className="text-[11px] font-mono tracking-wider text-slate-500 uppercase">Surface Flatness</span>
              </div>
              <div>
                <strong className="block text-2xl sm:text-3xl font-serif font-bold text-[#141f22]">100+ PSI</strong>
                <span className="text-[11px] font-mono tracking-wider text-slate-500 uppercase">Pressure Tested</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Preview Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#e6eef0] to-[#d8e5e8] border border-[#d8dedf] p-8 sm:p-12 shadow-xl flex flex-col items-center justify-center min-h-[420px] overflow-hidden group">
              {/* Blueprint grid */}
              <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,116,122,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,116,122,0.15) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />
              <div className="absolute w-[85%] aspect-square rounded-full border border-[#00747a]/20 pointer-events-none" />
              <div className="absolute w-[98%] aspect-square rounded-full border border-dashed border-[#00747a]/25 pointer-events-none animate-spin-very-slow" />

              <div className="relative z-10 w-full aspect-square max-w-[340px] flex items-center justify-center">
                <Image
                  src="/images/showcase/cnc-machined-aluminum-compartment-tray-clean.png"
                  alt="Custom Machined Liquid Cold Plate"
                  width={520}
                  height={520}
                  priority
                  className="w-full h-full object-contain drop-shadow-[0_20px_25px_rgba(20,31,34,0.18)] transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#5f6667] uppercase font-bold z-10">
                <span>ITS · ENGINEERING PROTOTYPE</span>
                <span>ISO 9001:2015</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION STRIP */}
      <section className="w-full bg-[#141f22] text-white border-b border-[#233134]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#233134]">
          <div className="px-8 py-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5 text-teal-300" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-['Space_Grotesk']">Zero Shelf Limitations</h4>
              <p className="text-xs text-slate-400 mt-0.5">Custom fin spacing, manifold routing, and mounting patterns.</p>
            </div>
          </div>

          <div className="px-8 py-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-teal-300" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-['Space_Grotesk']">Single Turnkey Facility</h4>
              <p className="text-xs text-slate-400 mt-0.5">Simulation, CNC machining, FSW, and testing all under one roof.</p>
            </div>
          </div>

          <div className="px-8 py-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-teal-300" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-['Space_Grotesk']">Rigorous Verification</h4>
              <p className="text-xs text-slate-400 mt-0.5">100% pressure, flow rate, and coordinate-measuring validation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT SHOWCASE CATEGORIES */}
      <section id="categories" className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 py-20 lg:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#00747a] font-bold block mb-3">
            CORE HARDWARE DISCIPLINES
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-[#141f22]">
            Engineered hardware categories.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Click into each product category to explore specific architectures, manufacturing methods, and interactive design paths.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {productCategories.map((cat, idx) => (
            <article
              key={cat.id}
              className="rounded-3xl bg-white border border-[#d8dedf] p-8 sm:p-12 lg:p-14 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Left Visual Preview with Blueprint styling */}
                <div
                  className={`lg:col-span-6 relative rounded-2xl bg-gradient-to-br from-[#e6eef0] to-[#d8e5e8] border border-[#00747a]/20 p-6 sm:p-10 flex items-center justify-center min-h-[360px] overflow-hidden group ${
                    idx % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  {/* Blueprint Grid */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-30"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(0,116,122,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,116,122,0.12) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <div className="absolute w-[85%] aspect-square rounded-full border border-[#00747a]/20 pointer-events-none" />

                  {/* Hero Product Image */}
                  <div className="relative z-10 w-full aspect-square max-w-[380px] flex items-center justify-center">
                    <Image
                      src={cat.heroImage}
                      alt={cat.alt}
                      width={560}
                      height={560}
                      className="w-[95%] h-[95%] object-contain drop-shadow-[0_20px_25px_rgba(20,31,34,0.18)] transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Corner Badges */}
                  <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-xs border border-[#d8dedf] px-3 py-1.5 rounded shadow-xs text-[11px] font-mono text-[#00747a] font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00747a]" />
                    <span>{cat.badge}</span>
                  </div>

                  <div className="absolute bottom-4 right-4 z-20 text-[10px] font-mono text-[#5f6667] font-bold uppercase tracking-wider">
                    {cat.tag}
                  </div>
                </div>

                {/* Right Details */}
                <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-[#00747a] bg-[#00747a]/10 px-3 py-1 rounded-sm">
                      {cat.id}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
                      {cat.tag}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#141f22]">
                    {cat.name}
                  </h3>

                  <p className="text-base font-semibold text-slate-800 leading-snug">
                    {cat.headline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Spec Sheet Table */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-[#f8faf9] rounded-xl border border-slate-200 text-xs font-mono">
                    {cat.specs.map((spec) => (
                      <div key={spec.label}>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">{spec.label}</span>
                        <strong className="text-slate-800 block mt-0.5">{spec.value}</strong>
                      </div>
                    ))}
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2.5 pt-2">
                    {cat.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#00747a] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Sub-gallery mini pills */}
                  <div className="pt-2">
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                      Popular Implementations:
                    </span>
                    <div className="grid grid-cols-3 gap-3">
                      {cat.galleryItems.map((item) => (
                        <div
                          key={item.name}
                          className="bg-[#f8faf9] border border-slate-200 rounded-lg p-2.5 flex flex-col items-center text-center group/item hover:border-[#00747a] transition-colors"
                        >
                          <div className="relative w-full aspect-square max-h-16 mb-1.5 flex items-center justify-center">
                            <Image
                              src={item.img}
                              alt={item.name}
                              fill
                              className="object-contain p-1"
                            />
                          </div>
                          <span className="text-[10px] font-mono text-slate-700 font-semibold leading-tight line-clamp-1">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct Link CTA */}
                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      href={cat.slug}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#00747a] hover:bg-[#005a5f] text-white font-mono font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md transform hover:-translate-y-0.5"
                    >
                      <span>Explore {cat.name} Page</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. TURNKEY MANUFACTURING PROCESS */}
      <section className="w-full bg-[#f1f6f5] border-y border-[#d8dedf] py-20 lg:py-24 px-6 sm:px-8 lg:px-14">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#00747a] font-bold block mb-3">
              THE TURNKEY WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-[#141f22]">
              From your 3D CAD to verified hardware.
            </h2>
            <p className="text-slate-600 text-base mt-3">
              We keep the entire lifecycle inside our Guelph, Ontario engineering and manufacturing facility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {turnkeySteps.map((step) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-8 rounded-2xl bg-white border border-[#d8dedf] hover:border-[#00747a] shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-serif font-bold text-[#00747a]">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#e6f3f4] flex items-center justify-center text-[#00747a] group-hover:bg-[#00747a] group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold font-['Space_Grotesk'] text-[#141f22] mb-2 group-hover:text-[#00747a] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. INLINE CTA */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <SubpageCta
          eyebrow="READY TO VALIDATE YOUR HARDWARE ENVELOPE?"
          title="Send your CAD files for an engineering review."
          description="Connect directly with our thermal and mechanical engineering team in Guelph, Ontario to model your CAD envelope and optimize your cooling performance."
          primaryCtaText="Discuss your thermal challenge"
          primaryCtaHref="/contact"
        />
      </div>
    </main>
  );
}
