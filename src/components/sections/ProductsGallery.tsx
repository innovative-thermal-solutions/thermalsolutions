import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function ProductsGallery() {
  const products = [
    {
      category: "LIQUID COOLING",
      title: "Liquid Cold Plates",
      description: "Friction Stir Welded and vacuum-brazed aluminum/copper cold plates with CFD-optimized micro-channels.",
      image: "/images/assets/cold_plate.webp",
      href: "/products/liquid-cold-plates",
    },
    {
      category: "AIR COOLED",
      title: "Extruded & Skived Heat Sinks",
      description: "Precision engineered fin arrays with optimized pitch for forced tunnel or natural convection.",
      image: "/images/assets/air_cooled/Extruded.png",
      href: "/products/air-cooled-heat-sinks",
    },
    {
      category: "TWO-PHASE",
      title: "Embedded Heat Pipe Solutions",
      description: "Sintered copper heat pipes embedded directly into base plates for ultra-fast lateral heat spreading.",
      image: "/images/assets/air_cooled/Embedded Heat Pipes.png",
      href: "/products/heat-pipes",
    },
    {
      category: "POWER DISTRIBUTION",
      title: "Thermally-Coupled BusBars",
      description: "High-current copper and aluminum laminated busbars engineered for direct mounting onto liquid plates.",
      image: "/images/assets/busbar/Bus Bar.png",
      href: "/products/busbar",
    },
  ];

  return (
    <section className="relative w-full py-32 px-6 lg:px-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <span className="text-teal-400 font-mono text-xs tracking-[0.2em] uppercase mb-4 block">
              05 / Engineered Products Catalog
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              PRECISION THERMAL HARDWARE.
            </h2>
          </div>
          <Link
            href="/products"
            className="group flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-teal-400 hover:text-white transition-colors"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, idx) => (
            <Link
              key={product.title}
              href={product.href}
              className="bg-[#020617] border border-white/10 p-8 lg:p-10 group hover:border-teal-500/50 hover:bg-[#070D18] transition-all relative flex flex-col justify-between min-h-[380px] overflow-hidden shadow-xl"
            >
              <div className="flex justify-between items-start mb-6 relative z-10">
                <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest border border-teal-500/30 px-2.5 py-1">
                  {product.category}
                </span>
                <span className="text-gray-500 font-mono text-xs">0{idx + 1}</span>
              </div>

              <div className="relative aspect-video w-full bg-[#0F172A] border border-white/10 mb-6 overflow-hidden z-10">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-teal-400 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-300 font-light text-xs leading-relaxed mb-6">
                  {product.description}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 group-hover:text-white transition-colors">
                  <span>Explore Technical Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
