"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Plus, Check } from "lucide-react";
import { REFERENCE_PRODUCTS, SolutionProduct } from "@/components/ui/ReferenceInteractiveModals";

export function ReferenceSolutionsSection() {
  const [filter, setFilter] = useState<"all" | "air" | "liquid" | "busbar">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedToCompare, setSelectedToCompare] = useState<string[]>([]);

  const filteredProducts = REFERENCE_PRODUCTS.filter((p) => {
    const matchesFilter = filter === "all" || p.family === filter;
    const matchesSearch =
      searchQuery.trim() === "" ||
      `${p.name} ${p.material} ${p.short} ${p.description} ${p.tag}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const openDetail = (prod: SolutionProduct) => {
    window.dispatchEvent(
      new CustomEvent("its-reference-modal", {
        detail: { type: "open-product-detail", payload: { id: prod.id } },
      })
    );
  };

  const openFinder = () => {
    window.dispatchEvent(
      new CustomEvent("its-reference-modal", {
        detail: { type: "open-finder" },
      })
    );
  };

  const openCompare = () => {
    if (selectedToCompare.length < 2) return;
    window.dispatchEvent(
      new CustomEvent("its-reference-modal", {
        detail: { type: "open-compare", payload: { ids: selectedToCompare } },
      })
    );
  };

  const toggleCompare = (id: string) => {
    if (selectedToCompare.includes(id)) {
      setSelectedToCompare(selectedToCompare.filter((item) => item !== id));
    } else {
      if (selectedToCompare.length >= 3) {
        alert("You can select up to 3 solutions to compare.");
        return;
      }
      setSelectedToCompare([...selectedToCompare, id]);
    }
  };

  return (
    <section id="solutions" className="relative w-full py-24 px-6 sm:px-8 lg:px-12 bg-[#f8faf9] text-[#141f22] border-b border-[#d8dedf]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] font-mono tracking-widest text-[#00747a] uppercase mb-2 font-bold">
              01 / THE RIGHT SOLUTION
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-[#00747a] leading-[1.05]">
              Every thermal challenge. <br />
              <span className="text-[#141f22]">A better way to cool.</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed">
            Air. Liquid. Or a custom combination. <br />
            Explore the technologies that move heat out of the way of progress.
          </p>
        </div>

        {/* Toolbar: Filters & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-[#d8dedf] mb-8">
          <div className="flex flex-wrap items-center gap-3">
            {[
              { id: "all", label: "All solutions", count: String(REFERENCE_PRODUCTS.length).padStart(2, "0") },
              { id: "air", label: "Air cooled", count: String(REFERENCE_PRODUCTS.filter(p => p.family === "air").length).padStart(2, "0") },
              { id: "liquid", label: "Liquid cooled", count: String(REFERENCE_PRODUCTS.filter(p => p.family === "liquid").length).padStart(2, "0") },
              { id: "busbar", label: "Bus bar", count: String(REFERENCE_PRODUCTS.filter(p => p.family === "busbar").length).padStart(2, "0") },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-colors cursor-pointer ${
                  filter === tab.id
                    ? "bg-[#141f22] text-white font-bold"
                    : "bg-white text-slate-700 hover:bg-slate-200 border border-[#d8dedf]"
                }`}
              >
                <span>{tab.label}</span>
                {tab.count && <span className="ml-1.5 opacity-60">({tab.count})</span>}
              </button>
            ))}
          </div>

          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Find a solution (e.g. copper, FSW)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#d8dedf] rounded pl-9 pr-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00747a]"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {filteredProducts.map((p) => {
            const isCompared = selectedToCompare.includes(p.id);
            return (
              <div
                key={p.id}
                className="group bg-white border border-[#d8dedf] rounded overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div>
                  <button
                    onClick={() => openDetail(p)}
                    className="w-full h-48 bg-[#e9ece6] p-4 flex items-center justify-center cursor-pointer group-hover:bg-[#e2e7dd] transition-colors relative"
                    aria-label={`Explore ${p.name}`}
                  >
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={240}
                      height={160}
                      className="object-contain max-h-36 group-hover:scale-105 transition-transform"
                    />
                  </button>

                  <div className="p-5">
                    <span className="text-[10px] font-mono tracking-widest text-[#00747a] uppercase block mb-1 font-bold">
                      {p.tag}
                    </span>
                    <button
                      onClick={() => openDetail(p)}
                      className="text-left font-serif text-lg font-bold text-slate-900 hover:text-[#00747a] transition-colors flex items-center justify-between w-full mb-2 cursor-pointer"
                    >
                      <span>{p.name}</span>
                      <span className="text-sm">↗</span>
                    </button>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{p.short}</p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0 border-t border-slate-100 flex items-center justify-end mt-auto">
                  <button
                    onClick={() => openDetail(p)}
                    className="text-[11px] font-mono text-[#00747a] hover:underline cursor-pointer font-semibold flex items-center gap-1"
                  >
                    <span>View Specifications</span>
                    <span>↗</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="p-12 text-center bg-white rounded border border-[#d8dedf] my-8">
            <p className="text-sm text-slate-600 font-mono">
              No solutions match your search. Try searching for “copper”, “air”, “skived”, or “cold plate”.
            </p>
          </div>
        )}

        {/* Solution Help Banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-white border border-[#d8dedf] rounded">
          <div>
            <strong className="block text-sm font-serif text-slate-900 mb-1">
              Not sure where to begin?
            </strong>
            <p className="text-xs text-slate-600">
              Answer two quick questions about your fluid loop and heat constraints to see a tailored starting point.
            </p>
          </div>
          <button
            onClick={openFinder}
            className="px-5 py-2.5 bg-[#141f22] hover:bg-[#15515a] text-white text-xs font-mono uppercase tracking-wider font-bold rounded transition-colors inline-flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Find your cooling approach</span>
            <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}
