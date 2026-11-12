"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Search, Plus, Minus, Mail, Phone, SlidersHorizontal, Check } from "lucide-react";
import { PORTFOLIO_PRODUCTS, PortfolioItem } from "@/data/portfolioData";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "air" | "liquid" | "electrical">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openDetails, setOpenDetails] = useState<Record<string, boolean>>({});

  const toggleDetails = (id: string) => {
    setOpenDetails((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return PORTFOLIO_PRODUCTS.filter((item) => {
      const matchCat = activeCategory === "all" || item.family === activeCategory;
      if (!matchCat) return false;
      if (!q) return true;
      const haystack = [
        item.name,
        item.family,
        item.material,
        item.short,
        item.description || "",
        item.dimension || "",
        item.construction,
        item.application,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [activeCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    return {
      all: PORTFOLIO_PRODUCTS.length,
      air: PORTFOLIO_PRODUCTS.filter((p) => p.family === "air").length,
      liquid: PORTFOLIO_PRODUCTS.filter((p) => p.family === "liquid").length,
      electrical: PORTFOLIO_PRODUCTS.filter((p) => p.family === "electrical").length,
    };
  }, []);

  return (
    <main id="main-content" className="w-full min-h-screen bg-[#f8faf9] text-[#141f22]">
      {/* 01 PORTFOLIO HERO */}
      <section className="relative w-full pt-36 sm:pt-44 lg:pt-48 pb-20 px-6 sm:px-8 lg:px-14 bg-[#0f1719] text-[#f4f6ef] border-b border-[#233134] overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,116,122,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,116,122,0.12) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-[#00747a]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-[1440px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Intro Column */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00747a] shadow-[0_0_8px_#00747a]" />
              <span className="text-[12px] font-mono tracking-[0.25em] text-[#00747a] uppercase font-bold">
                THE ITS COOLING COLLECTION
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-medium tracking-tight text-white leading-[0.95] mb-8">
              Product <br />
              <em className="not-italic text-[#00747a]">portfolio.</em>
            </h1>

            <p className="text-[#bcc5c6] text-base sm:text-lg max-w-lg leading-relaxed mb-10 font-normal">
              From finned heat sinks to liquid cold plates and custom busbars. Find the construction, material and dimensions that fit your next design.
            </p>

            <a
              href="#catalog"
              className="inline-flex items-center gap-3 px-7 py-4 bg-[#00747a] hover:bg-[#005d62] text-white font-bold text-xs font-mono uppercase tracking-wider rounded transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#00747a]/20 cursor-pointer"
            >
              <span>Browse products</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>

          {/* Right Product Spotlight Hero Figure */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative p-6 sm:p-8 rounded-xl border border-[#233134] bg-gradient-to-br from-[#141f22] to-[#0f1719] shadow-2xl overflow-hidden group">
              {/* Radial glow backdrop */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,116,122,0.25)_0%,_transparent_70%)] pointer-events-none" />
              
              <div className="flex items-center justify-between text-[11px] font-mono text-[#7f7c7d] uppercase tracking-wider mb-4 relative z-10">
                <span className="text-[#00747a] font-bold">PRODUCT SPOTLIGHT / AIR COOLING</span>
                <span>01 / THERMAL HARDWARE</span>
              </div>

              <div className="relative w-full h-[280px] sm:h-[360px] flex items-center justify-center p-4 z-10">
                <Image
                  src="/images/portfolio/hero-heatsink.webp"
                  alt="Aluminum heat sink with embedded copper heat pipes"
                  width={600}
                  height={420}
                  priority
                  className="max-h-full w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="pt-4 border-t border-[#233134] flex items-center justify-between text-xs font-mono text-[#d8dedf] relative z-10">
                <span className="font-semibold">Embedded heat pipe assembly</span>
                <span className="text-[#7f7c7d]">High Heat Flux Spreading</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 PORTFOLIO CATALOG */}
      <section id="catalog" className="w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-14 border-b border-[#d8dedf]">
        <div className="max-w-[1440px] mx-auto">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#d8dedf] mb-10">
            <div>
              <p className="text-[11px] font-mono tracking-widest text-[#00747a] uppercase mb-2 font-bold">
                ENGINEERED PRODUCTS
              </p>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-[#141f22] leading-[1.05]">
                Explore the portfolio.
              </h2>
            </div>
            <p className="text-[#5f6667] text-sm sm:text-base max-w-md leading-relaxed">
              Products are sized to the application. Published dimensions refer to the documented examples shown.
            </p>
          </div>

          {/* Catalog Controls: Category Filters & Live Search */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 pb-6 border-b border-[#d8dedf] mb-8">
            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              {[
                { id: "all", label: "All products", count: categoryCounts.all },
                { id: "air", label: "Air cooled", count: categoryCounts.air },
                { id: "liquid", label: "Liquid cooled", count: categoryCounts.liquid },
                { id: "electrical", label: "Power distribution", count: categoryCounts.electrical },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider rounded transition-all cursor-pointer flex items-center gap-2 border ${
                    activeCategory === tab.id
                      ? "bg-[#00747a] text-white border-[#00747a] font-bold shadow-sm"
                      : "bg-white text-[#141f22] border-[#d8dedf] hover:border-[#00747a] hover:bg-[#f8faf9]"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${activeCategory === tab.id ? "bg-black/20 text-white" : "bg-slate-100 text-[#7f7c7d]"}`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-[#7f7c7d] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products (e.g. copper, FSW)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#d8dedf] rounded pl-10 pr-4 py-2.5 text-xs text-[#141f22] placeholder-[#7f7c7d] focus:outline-none focus:border-[#00747a] focus:ring-1 focus:ring-[#00747a] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[#7f7c7d] hover:text-[#141f22]"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Active Product Count Status */}
          <div className="flex items-center justify-between text-xs font-mono text-[#5f6667] mb-8">
            <span>
              Showing <strong className="text-[#141f22]">{filteredProducts.length}</strong> of {PORTFOLIO_PRODUCTS.length} products
            </span>
            {searchQuery && (
              <span className="text-[#00747a]">Filter query: &ldquo;{searchQuery}&rdquo;</span>
            )}
          </div>

          {/* 3-Column Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {filteredProducts.map((item, index) => {
              const isOpen = !!openDetails[item.id];
              return (
                <article
                  key={item.id}
                  id={item.id}
                  className="group bg-white border border-[#d8dedf] rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-[#00747a]/50 transition-all duration-300"
                >
                  <div>
                    {/* Image Area with Number Badge */}
                    <div className="relative aspect-[16/10] bg-gradient-to-b from-[#f8faf9] to-[#eef2f2] p-6 flex items-center justify-center border-b border-[#d8dedf] overflow-hidden">
                      <span className="absolute top-3.5 left-4 font-mono text-xs font-bold text-[#7f7c7d] tracking-wider z-10">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={340}
                          height={220}
                          className="max-h-[160px] w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-6">
                      {/* Category Badge */}
                      <div className="mb-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider font-bold ${
                            item.family === "liquid"
                              ? "bg-[#e0eef4] text-[#00747a]"
                              : item.family === "electrical"
                              ? "bg-[#f5ecdd] text-[#82531e]"
                              : "bg-[#eaf4f0] text-[#00747a]"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          {item.family === "liquid"
                            ? "Liquid Cooled"
                            : item.family === "electrical"
                            ? "Power Distribution"
                            : "Air Cooled"}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#141f22] tracking-tight mb-2 group-hover:text-[#00747a] transition-colors">
                        {item.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#5f6667] leading-relaxed mb-6">
                        {item.short}
                      </p>

                      {/* Specs Table */}
                      <dl className="border-t border-[#d8dedf] text-xs font-mono divide-y divide-[#d8dedf]">
                        <div className="py-2.5 grid grid-cols-12 gap-2">
                          <dt className="col-span-4 font-bold text-[#7f7c7d]">Material</dt>
                          <dd className="col-span-8 text-[#141f22] font-medium">{item.material}</dd>
                        </div>
                        <div className="py-2.5 grid grid-cols-12 gap-2">
                          <dt className="col-span-4 font-bold text-[#7f7c7d]">Dimensions</dt>
                          <dd className="col-span-8 text-[#141f22]">
                            <span className="font-medium">{item.dimension || "Sized to application"}</span>
                            {item.dimensionNote && (
                              <small className="block text-[10px] text-[#7f7c7d] mt-0.5">{item.dimensionNote}</small>
                            )}
                          </dd>
                        </div>
                      </dl>

                      {/* Expandable Technical Details */}
                      <div className="mt-4 pt-3 border-t border-[#d8dedf]">
                        <button
                          onClick={() => toggleDetails(item.id)}
                          className="w-full flex items-center justify-between text-xs font-mono font-bold text-[#141f22] hover:text-[#00747a] transition-colors cursor-pointer py-1"
                        >
                          <span>Technical details</span>
                          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </button>

                        {isOpen && (
                          <div className="pt-3 space-y-3 text-xs font-mono text-[#5f6667] animate-in fade-in duration-200">
                            <div>
                              <strong className="text-[#141f22] block mb-0.5">Construction:</strong>
                              <span>{item.construction}</span>
                            </div>
                            <div>
                              <strong className="text-[#141f22] block mb-0.5">Typical application:</strong>
                              <span>{item.application}</span>
                            </div>
                            {item.description && (
                              <div>
                                <strong className="text-[#141f22] block mb-0.5">Overview:</strong>
                                <span className="font-sans text-[11px] leading-relaxed block">{item.description}</span>
                              </div>
                            )}
                            <div className="pt-2">
                              <a
                                href={`mailto:Engineering@itscooling.com?subject=${encodeURIComponent(
                                  "Product inquiry: " + item.name
                                )}`}
                                className="inline-flex items-center gap-1 text-[#00747a] hover:underline font-bold"
                              >
                                <span>Ask about this product</span>
                                <ArrowUpRight className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Inquiry Button */}
                  <div className="p-6 pt-0 mt-auto">
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-between px-4 py-2.5 bg-[#f8faf9] hover:bg-[#00747a] hover:text-white border border-[#d8dedf] hover:border-[#00747a] text-[#141f22] text-xs font-mono uppercase tracking-wider rounded font-bold transition-all duration-200"
                    >
                      <span>Inquire for custom design</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="p-12 text-center bg-white rounded-lg border border-[#d8dedf] max-w-xl mx-auto my-12">
              <p className="text-base text-[#141f22] font-bold mb-2">No products match your search or filter.</p>
              <p className="text-xs text-[#5f6667] font-mono mb-6">
                Try searching for keywords like &ldquo;copper&rdquo;, &ldquo;cold plate&rdquo;, &ldquo;aluminum&rdquo;, or &ldquo;skived&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00747a] text-white rounded text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#005d62] transition-colors cursor-pointer"
              >
                <span>Reset all filters</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 03 CONTACT CALLOUT SECTION */}
      <section className="w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-14 bg-[#141f22] text-white border-b border-[#233134]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <p className="text-[11px] font-mono tracking-widest text-[#00747a] uppercase font-bold mb-3">
              DESIGNED TO FIT
            </p>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight mb-4">
              Working with a tight envelope?
            </h2>
            <p className="text-[#bcc5c6] text-base sm:text-lg max-w-xl leading-relaxed mb-8 font-normal">
              Share your available space, heat load and operating conditions with our engineering team. We deliver complete custom thermal assemblies from first simulation to machined hardware.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#00747a] hover:bg-[#005d62] text-white font-bold text-xs font-mono uppercase tracking-wider rounded transition-all shadow-lg shadow-[#00747a]/20 cursor-pointer"
            >
              <span>Discuss your project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-4 p-8 bg-[#0f1719] border border-[#233134] rounded-xl flex flex-col justify-center space-y-4 font-mono text-xs">
            <span className="text-[11px] text-[#7f7c7d] uppercase tracking-wider font-bold">
              ENGINEERING & SALES OFFICE
            </span>
            <div className="flex items-center gap-2 text-[#d8dedf]">
              <Mail className="w-4 h-4 text-[#00747a] shrink-0" />
              <a href="mailto:Engineering@itscooling.com" className="hover:text-white transition-colors">
                Engineering@itscooling.com ↗
              </a>
            </div>
            <div className="flex items-center gap-2 text-[#d8dedf]">
              <Phone className="w-4 h-4 text-[#00747a] shrink-0" />
              <a href="tel:+15197634454" className="hover:text-white transition-colors">
                +1 (519) 763-4454 ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

