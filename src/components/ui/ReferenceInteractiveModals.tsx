"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export interface SolutionProduct {
  id: string;
  name: string;
  family: "air" | "liquid";
  image: string;
  tag: string;
  short: string;
  description: string;
  material: string;
  construction: string;
  application: string;
  considerations: string;
}

export const REFERENCE_PRODUCTS: SolutionProduct[] = [
  {
    id: "extruded",
    name: "Extruded heat sinks",
    family: "air",
    image: "/assets/air-family.webp",
    tag: "AIR COOLED / EXTRUDED",
    short: "A practical foundation for everyday thermal challenges.",
    description: "Aluminum extrusion provides a cost-conscious starting point for air-cooled thermal designs. ITS develops the geometry, mounting features and finishing around the requirements of your assembly.",
    material: "Aluminum",
    construction: "Extruded profile with CNC finishing",
    application: "Power electronics and industrial equipment",
    considerations: "Airflow, fin geometry, mounting envelope and cost"
  },
  {
    id: "skived",
    name: "Skived fin heat sinks",
    family: "air",
    image: "/assets/extruded.webp",
    tag: "AIR COOLED / HIGH FIN DENSITY",
    short: "Dense fin structures for compact cooling designs.",
    description: "Skiving forms thin fins from a single block of aluminum or copper. ITS evaluates fin density and spacing together with the airflow and heat source layout to develop the design.",
    material: "Aluminum or copper",
    construction: "Fins formed from the base material",
    application: "Compact power electronic assemblies",
    considerations: "Fin spacing, pressure drop and thermal load"
  },
  {
    id: "heatpipe",
    name: "Embedded heat pipes",
    family: "air",
    image: "/assets/heat-pipe.webp",
    tag: "AIR COOLED / HEAT SPREADING",
    short: "Move heat away from concentrated hot spots.",
    description: "Heat pipes integrated into a heat sink help spread heat across the base. ITS uses this approach when concentrated heat sources make conventional heat sinks difficult to optimize.",
    material: "Aluminum heat sink with copper heat pipes",
    construction: "Heat pipes integrated into the heat sink",
    application: "RF amplifiers and concentrated heat sources",
    considerations: "Heat source placement, orientation and integration"
  },
  {
    id: "forged",
    name: "Fabricated & forged",
    family: "air",
    image: "/assets/forged.webp",
    tag: "AIR COOLED / CUSTOM GEOMETRY",
    short: "More design possibilities for your application.",
    description: "Fabricated air-cooled designs and cold-forged heat sinks provide additional options for fin geometry and assembly. ITS selects the process to fit the thermal and manufacturing requirements.",
    material: "Aluminum or copper, project dependent",
    construction: "Fabricated or cold-forged geometry",
    application: "Custom electronic cooling assemblies",
    considerations: "Fin geometry, production quantity and manufacturing process"
  },
  {
    id: "hypercool",
    name: "HyperCool cold plates",
    family: "liquid",
    image: "/assets/hypercool.webp",
    tag: "LIQUID COOLED / HYPERCOOL",
    short: "Custom flow paths. Precision thermal management.",
    description: "HyperCool cold plates use machined internal flow paths tailored to the heat source layout. Thermal and hydraulic modeling support the design, with friction stir welding available for leak-tight construction.",
    material: "Aluminum",
    construction: "Machined channels and friction stir welding",
    application: "Power electronics and converters",
    considerations: "Heat distribution, flow rate and pressure drop"
  },
  {
    id: "tube",
    name: "Pressed-in tube plates",
    family: "liquid",
    image: "/assets/pressed-tube.webp",
    tag: "LIQUID COOLED / EMBEDDED TUBE",
    short: "An economical route to liquid cooling.",
    description: "A tube pressed into a machined plate creates a simple fluid path for liquid cooling. ITS configures the tube route and plate features around component locations, system constraints and budget.",
    material: "Plate and tube materials selected for the project",
    construction: "Tube embedded into a machined plate",
    application: "Industrial equipment and electronic assemblies",
    considerations: "Tube diameter, coolant compatibility and fittings"
  },
  {
    id: "fsw",
    name: "Bus bar",
    family: "liquid",
    image: "/assets/fsw-plate.webp",
    tag: "LIQUID COOLED / BUS BAR & COLD PLATE",
    short: "Integrated bus bar assemblies & sealed channels for demanding cooling.",
    description: "Integrated power bus bar assemblies and solid-state joined cold plates. ITS engineers laminated and liquid-cooled bus bars alongside precision friction stir welded assemblies for battery systems and power conversion.",
    material: "Copper or Aluminum",
    construction: "Precision CNC machining with integrated bus bar & solid-state joining",
    application: "Battery packs, inverters and high-current power electronics",
    considerations: "Current carrying capacity, channel geometry, dielectric insulation and validation"
  },
  {
    id: "copper",
    name: "Copper brazed cold plates",
    family: "liquid",
    image: "/assets/copper-brazed.webp",
    tag: "LIQUID COOLED / COPPER",
    short: "Copper construction for demanding thermal designs.",
    description: "Copper vacuum-brazed cold plates are part of the ITS thermal solution portfolio. The appropriate construction is selected around the component layout, material requirements and system operating conditions.",
    material: "Copper",
    construction: "Vacuum-brazed cold plate assembly",
    application: "High-performance electronic systems",
    considerations: "Thermal load, fluid compatibility and assembly requirements"
  }
];

export const REFERENCE_TEAM = [
  { img: "/assets/founder.webp", name: "Ahmed Zaghlol", role: "Founder & CEO" },
  { img: "/assets/sam.webp", name: "Sam Hemming", role: "Lead Mechanical Engineer" },
  { img: "/assets/david.webp", name: "David Dawson", role: "Thermal Engineer" },
  { img: "/assets/matthew.webp", name: "Matthew Galvez", role: "Mechanical Engineer" },
  { img: "/assets/abdu.webp", name: "Abdu Zaghlol", role: "Sales Manager" },
];

export function ReferenceInteractiveModals() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: "",
    email: "",
    company: "",
    application: "Power & automation",
    cooling: "Help me choose",
    stage: "Concept & feasibility",
    details: "",
  });
  const [inquiryStep, setInquiryStep] = useState<"form" | "review">("form");
  const [briefText, setBriefText] = useState("");
  const [copyStatus, setCopyStatus] = useState("");

  const [finderOpen, setFinderOpen] = useState(false);
  const [finderForm, setFinderForm] = useState({
    loop: "",
    challenge: "",
  });
  const [finderResult, setFinderResult] = useState<{
    title: string;
    description: string;
    cooling: string;
  } | null>(null);

  const [detailModal, setDetailModal] = useState<{
    open: boolean;
    type: "product" | "compare" | "fsw" | "team" | "sources" | "bus";
    product?: SolutionProduct;
    compareProducts?: SolutionProduct[];
  }>({ open: false, type: "product" });

  useEffect(() => {
    const handleTrigger = (e: any) => {
      const { type, payload } = e.detail || {};
      if (type === "open-inquiry") {
        if (payload?.cooling) setInquiryData((prev) => ({ ...prev, cooling: payload.cooling }));
        if (payload?.application) setInquiryData((prev) => ({ ...prev, application: payload.application }));
        setInquiryStep("form");
        setInquiryOpen(true);
      } else if (type === "open-finder") {
        setFinderResult(null);
        setFinderForm({ loop: "", challenge: "" });
        setFinderOpen(true);
      } else if (type === "open-product-detail") {
        const prod = REFERENCE_PRODUCTS.find((p) => p.id === payload?.id);
        if (prod) {
          setDetailModal({ open: true, type: "product", product: prod });
        }
      } else if (type === "open-bus-detail") {
        setDetailModal({ open: true, type: "bus" });
      } else if (type === "open-compare") {
        const prods = REFERENCE_PRODUCTS.filter((p) => payload?.ids?.includes(p.id));
        setDetailModal({ open: true, type: "compare", compareProducts: prods });
      } else if (type === "open-fsw-detail") {
        setDetailModal({ open: true, type: "fsw" });
      } else if (type === "open-team-detail") {
        setDetailModal({ open: true, type: "team" });
      } else if (type === "open-sources-detail") {
        setDetailModal({ open: true, type: "sources" });
      }
    };

    window.addEventListener("its-reference-modal", handleTrigger);
    return () => window.removeEventListener("its-reference-modal", handleTrigger);
  }, []);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const brief = `Hello ITS Engineering,\n\nI would like to discuss a thermal management project.\n\nName: ${inquiryData.name}\nWork email: ${inquiryData.email}\nCompany: ${inquiryData.company}\nApplication: ${inquiryData.application}\nCooling approach: ${inquiryData.cooling}\nProject stage: ${inquiryData.stage}\n\nProject details:\n${inquiryData.details}\n\nThank you,\n${inquiryData.name}`;
    setBriefText(brief);
    setInquiryStep("review");
    setCopyStatus("");
  };

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(briefText);
      setCopyStatus("Brief copied! Paste it into your email to Engineering@itscooling.com.");
    } catch {
      setCopyStatus("Select and copy the brief above, then paste it into your email client.");
    }
  };

  const handleFinderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!finderForm.loop || !finderForm.challenge) return;

    if (finderForm.loop === "unsure") {
      setFinderResult({
        title: "Explore both air and liquid cooling",
        description: "Your coolant infrastructure is still open, so ITS can help compare the tradeoffs between air and liquid cooling for your heat load and available space.",
        cooling: "Help me choose",
      });
      return;
    }

    let prodId = "extruded";
    if (finderForm.loop === "yes") {
      prodId = finderForm.challenge === "simple" ? "tube" : "hypercool";
    } else {
      prodId = finderForm.challenge === "hotspots" ? "heatpipe" : finderForm.challenge === "simple" ? "extruded" : "skived";
    }

    const prod = REFERENCE_PRODUCTS.find((p) => p.id === prodId) || REFERENCE_PRODUCTS[0];
    setFinderResult({
      title: prod.name,
      description: prod.description,
      cooling: prod.family === "air" ? "Air cooled heat sink" : "Liquid cold plate",
    });
  };

  return (
    <>
      {/* 1. INQUIRY MODAL */}
      {inquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#091f26] border border-white/20 text-[#f4f6ef] rounded-lg p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setInquiryOpen(false)}
              className="absolute top-4 right-4 text-2xl leading-none text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close project inquiry"
            >
              ×
            </button>

            <p className="text-[11px] font-mono tracking-widest text-[#81e6d6] uppercase mb-1">
              LET’S BUILD SOMETHING THAT PERFORMS
            </p>
            <h2 className="text-2xl sm:text-3xl font-serif font-medium tracking-tight mb-2">
              What are you working on?
            </h2>
            <p className="text-slate-300 text-sm mb-6">
              Build a project brief for our engineering team.
            </p>

            {inquiryStep === "form" ? (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono uppercase tracking-wider text-slate-300">
                  <label className="flex flex-col gap-1.5">
                    <span>Your name *</span>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={inquiryData.name}
                      onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                      className="w-full bg-[#0b252c] border border-slate-700 rounded px-3 py-2 text-white font-sans text-sm focus:border-[#81e6d6] outline-none"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span>Work email *</span>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={inquiryData.email}
                      onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                      className="w-full bg-[#0b252c] border border-slate-700 rounded px-3 py-2 text-white font-sans text-sm focus:border-[#81e6d6] outline-none"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span>Company *</span>
                    <input
                      type="text"
                      required
                      placeholder="Company name"
                      value={inquiryData.company}
                      onChange={(e) => setInquiryData({ ...inquiryData, company: e.target.value })}
                      className="w-full bg-[#0b252c] border border-slate-700 rounded px-3 py-2 text-white font-sans text-sm focus:border-[#81e6d6] outline-none"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span>Application</span>
                    <select
                      value={inquiryData.application}
                      onChange={(e) => setInquiryData({ ...inquiryData, application: e.target.value })}
                      className="w-full bg-[#0b252c] border border-slate-700 rounded px-3 py-2 text-white font-sans text-sm focus:border-[#81e6d6] outline-none"
                    >
                      <option>Power & automation</option>
                      <option>Clean energy</option>
                      <option>Satellite & telecom</option>
                      <option>Aerospace & defense</option>
                      <option>EV & battery</option>
                      <option>Other application</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span>Cooling approach</span>
                    <select
                      value={inquiryData.cooling}
                      onChange={(e) => setInquiryData({ ...inquiryData, cooling: e.target.value })}
                      className="w-full bg-[#0b252c] border border-slate-700 rounded px-3 py-2 text-white font-sans text-sm focus:border-[#81e6d6] outline-none"
                    >
                      <option>Help me choose</option>
                      <option>Air cooled heat sink</option>
                      <option>Liquid cold plate</option>
                      <option>Embedded heat pipes</option>
                      <option>Friction stir welding</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span>Project stage</span>
                    <select
                      value={inquiryData.stage}
                      onChange={(e) => setInquiryData({ ...inquiryData, stage: e.target.value })}
                      className="w-full bg-[#0b252c] border border-slate-700 rounded px-3 py-2 text-white font-sans text-sm focus:border-[#81e6d6] outline-none"
                    >
                      <option>Concept & feasibility</option>
                      <option>Design optimization</option>
                      <option>Prototype</option>
                      <option>Production</option>
                    </select>
                  </label>
                </div>

                <label className="flex flex-col gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-300">
                  <span>Tell us about your challenge *</span>
                  <textarea
                    required
                    rows={3}
                    placeholder="Heat load, temperature target, dimensions, quantity, timing…"
                    value={inquiryData.details}
                    onChange={(e) => setInquiryData({ ...inquiryData, details: e.target.value })}
                    className="w-full bg-[#0b252c] border border-slate-700 rounded px-3 py-2 text-white font-sans text-sm focus:border-[#81e6d6] outline-none"
                  />
                </label>

                <p className="text-xs text-slate-400">
                  The next step opens an email draft for you to review and send. Nothing is submitted automatically.
                </p>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-[#81e6d6] hover:bg-[#a4f5e7] text-[#091f26] font-bold text-xs uppercase tracking-wider rounded transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  Prepare project inquiry <span>↗</span>
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Your project brief is ready.</h3>
                <p className="text-sm text-slate-300">
                  Review your brief below, then open it in your email app or copy it into a message to{" "}
                  <a href="mailto:Engineering@itscooling.com" className="text-[#81e6d6] underline">
                    Engineering@itscooling.com
                  </a>
                  .
                </p>
                <pre className="p-4 bg-[#0b252c] border border-slate-700 rounded text-xs font-mono text-slate-200 whitespace-pre-wrap max-h-56 overflow-y-auto">
                  {briefText}
                </pre>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={`mailto:Engineering@itscooling.com?subject=${encodeURIComponent(
                      "Thermal project inquiry — " + inquiryData.company
                    )}&body=${encodeURIComponent(briefText)}`}
                    className="px-5 py-2.5 bg-[#81e6d6] hover:bg-[#a4f5e7] text-[#091f26] font-bold text-xs uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2"
                  >
                    Open email draft ↗
                  </a>
                  <button
                    onClick={copyBrief}
                    className="px-4 py-2.5 border border-slate-600 hover:border-slate-400 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
                  >
                    Copy brief
                  </button>
                  <button
                    onClick={() => setInquiryStep("form")}
                    className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                  >
                    Edit form
                  </button>
                </div>
                {copyStatus && <p className="text-xs text-[#81e6d6] mt-2 font-mono">{copyStatus}</p>}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. FINDER QUESTIONNAIRE MODAL */}
      {finderOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#091f26] border border-white/20 text-[#f4f6ef] rounded-lg p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setFinderOpen(false)}
              className="absolute top-4 right-4 text-2xl leading-none text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close solution finder"
            >
              ×
            </button>

            <p className="text-[11px] font-mono tracking-widest text-[#81e6d6] uppercase mb-1">
              A GOOD PLACE TO START
            </p>
            <h2 className="text-2xl sm:text-3xl font-serif font-medium tracking-tight mb-2">
              Find your cooling approach.
            </h2>
            <p className="text-slate-300 text-sm mb-6">
              Answer two questions to explore a starting point for a conversation with ITS.
            </p>

            {!finderResult ? (
              <form onSubmit={handleFinderSubmit} className="space-y-6">
                <fieldset className="space-y-2.5">
                  <legend className="text-sm font-semibold text-white mb-2">
                    Is a liquid cooling loop available in your system?
                  </legend>
                  {[
                    { val: "yes", label: "Yes, a coolant loop is available" },
                    { val: "no", label: "No, we use ambient or forced air" },
                    { val: "unsure", label: "We’re still exploring the options" },
                  ].map((opt) => (
                    <label
                      key={opt.val}
                      className="flex items-center gap-3 p-3 rounded bg-[#0b252c] border border-slate-800 hover:border-slate-600 cursor-pointer text-sm"
                    >
                      <input
                        type="radio"
                        name="loop"
                        value={opt.val}
                        required
                        checked={finderForm.loop === opt.val}
                        onChange={(e) => setFinderForm({ ...finderForm, loop: e.target.value })}
                        className="text-[#81e6d6] focus:ring-[#81e6d6]"
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </fieldset>

                <fieldset className="space-y-2.5">
                  <legend className="text-sm font-semibold text-white mb-2">
                    What is your main design challenge?
                  </legend>
                  {[
                    { val: "hotspots", label: "Concentrated hot spots" },
                    { val: "density", label: "High heat load in a compact space" },
                    { val: "simple", label: "A practical, cost-conscious cooling solution" },
                  ].map((opt) => (
                    <label
                      key={opt.val}
                      className="flex items-center gap-3 p-3 rounded bg-[#0b252c] border border-slate-800 hover:border-slate-600 cursor-pointer text-sm"
                    >
                      <input
                        type="radio"
                        name="challenge"
                        value={opt.val}
                        required
                        checked={finderForm.challenge === opt.val}
                        onChange={(e) => setFinderForm({ ...finderForm, challenge: e.target.value })}
                        className="text-[#81e6d6] focus:ring-[#81e6d6]"
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </fieldset>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-[#81e6d6] hover:bg-[#a4f5e7] text-[#091f26] font-bold text-xs uppercase tracking-wider rounded transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  Explore a starting point ↗
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <p className="text-[10px] font-mono tracking-widest text-[#81e6d6] uppercase">
                  YOUR STARTING POINT
                </p>
                <h3 className="text-2xl font-serif text-white">{finderResult.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{finderResult.description}</p>
                <p className="text-xs text-slate-400 italic">
                  This is a conversation starter, not a validated engineering recommendation. Final selection needs heat load, operating temperatures, airflow or coolant conditions, and mechanical constraints.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <button
                    onClick={() => {
                      setFinderOpen(false);
                      setInquiryData((prev) => ({ ...prev, cooling: finderResult.cooling }));
                      setInquiryStep("form");
                      setInquiryOpen(true);
                    }}
                    className="px-5 py-2.5 bg-[#81e6d6] hover:bg-[#a4f5e7] text-[#091f26] font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
                  >
                    Talk through your project ↗
                  </button>
                  <button
                    onClick={() => setFinderResult(null)}
                    className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                  >
                    Start again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. MULTI-PURPOSE DETAIL MODAL */}
      {detailModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#091f26] border border-white/20 text-[#f4f6ef] rounded-lg p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setDetailModal({ open: false, type: "product" })}
              className="absolute top-4 right-4 text-2xl leading-none text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close details"
            >
              ×
            </button>

            {detailModal.type === "product" && detailModal.product && (
              <div className="space-y-6">
                <p className="text-[11px] font-mono tracking-widest text-[#81e6d6] uppercase">
                  {detailModal.product.tag}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="relative h-56 rounded bg-[#0b252c] p-4 flex items-center justify-center border border-slate-800">
                    <Image
                      src={detailModal.product.image}
                      alt={detailModal.product.name}
                      width={320}
                      height={200}
                      className="object-contain max-h-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-serif text-white mb-2">{detailModal.product.name}</h2>
                    <p className="text-slate-300 text-sm leading-relaxed">{detailModal.product.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-800 pt-6 text-xs">
                  <div>
                    <strong className="block text-[10px] font-mono text-slate-400 tracking-wider uppercase mb-1">
                      MATERIAL
                    </strong>
                    <span className="text-white">{detailModal.product.material}</span>
                  </div>
                  <div>
                    <strong className="block text-[10px] font-mono text-slate-400 tracking-wider uppercase mb-1">
                      CONSTRUCTION
                    </strong>
                    <span className="text-white">{detailModal.product.construction}</span>
                  </div>
                  <div>
                    <strong className="block text-[10px] font-mono text-slate-400 tracking-wider uppercase mb-1">
                      APPLICATIONS
                    </strong>
                    <span className="text-white">{detailModal.product.application}</span>
                  </div>
                  <div>
                    <strong className="block text-[10px] font-mono text-slate-400 tracking-wider uppercase mb-1">
                      DESIGN CONSIDERATIONS
                    </strong>
                    <span className="text-white">{detailModal.product.considerations}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setDetailModal({ open: false, type: "product" });
                    setInquiryData((prev) => ({
                      ...prev,
                      cooling: detailModal.product?.family === "air" ? "Air cooled heat sink" : "Liquid cold plate",
                    }));
                    setInquiryStep("form");
                    setInquiryOpen(true);
                  }}
                  className="px-6 py-3 bg-[#81e6d6] hover:bg-[#a4f5e7] text-[#091f26] font-bold text-xs uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  Discuss this solution <span>↗</span>
                </button>
              </div>
            )}

            {detailModal.type === "bus" && (
              <div className="space-y-6">
                <p className="text-[11px] font-mono tracking-widest text-[#81e6d6] uppercase">
                  PROJECT SPOTLIGHT / EV & BATTERY
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="relative h-60 rounded bg-[#0b252c] p-4 flex items-center justify-center border border-slate-800">
                    <Image
                      src="/assets/bus-plate.webp"
                      alt="ITS electric bus battery cold plate"
                      width={360}
                      height={240}
                      className="object-contain max-h-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-serif text-white mb-2">Large-format battery cooling.</h2>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Aluminum cold plate developed for an electric bus battery pack. The company presentation documents a 1,450 × 610 × 15 mm plate designed for this application.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-800 pt-6 text-xs">
                  <div>
                    <strong className="block text-[10px] font-mono text-slate-400 tracking-wider uppercase mb-1">
                      PLATE SIZE
                    </strong>
                    <span className="text-white">57 × 24 × 0.6 in / 1,450 × 610 × 15 mm</span>
                  </div>
                  <div>
                    <strong className="block text-[10px] font-mono text-slate-400 tracking-wider uppercase mb-1">
                      APPLICATION
                    </strong>
                    <span className="text-white">Electric bus battery pack cooling</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setDetailModal({ open: false, type: "bus" });
                    setInquiryData((prev) => ({
                      ...prev,
                      cooling: "Liquid cold plate",
                      application: "EV & battery",
                    }));
                    setInquiryStep("form");
                    setInquiryOpen(true);
                  }}
                  className="px-6 py-3 bg-[#81e6d6] hover:bg-[#a4f5e7] text-[#091f26] font-bold text-xs uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  Discuss your battery project ↗
                </button>
              </div>
            )}

            {detailModal.type === "compare" && detailModal.compareProducts && (
              <div className="space-y-6">
                <p className="text-[11px] font-mono tracking-widest text-[#81e6d6] uppercase">
                  SIDE BY SIDE
                </p>
                <h2 className="text-2xl font-serif text-white">The right fit starts here.</h2>
                <p className="text-slate-300 text-sm">
                  Compare construction and design considerations. Final selection depends on your application and engineering review.
                </p>

                <div className="overflow-x-auto border border-slate-800 rounded">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="border-b border-slate-800 bg-[#0b252c]">
                        <th className="p-3 text-slate-400 font-mono">Solution</th>
                        {detailModal.compareProducts.map((p) => (
                          <th key={p.id} className="p-3 text-white font-medium">
                            <div className="flex items-center gap-2 mb-1">
                              <Image src={p.image} alt={p.name} width={40} height={30} className="object-contain" />
                              <span>{p.name}</span>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      <tr>
                        <th className="p-3 text-slate-400 font-mono">Cooling approach</th>
                        {detailModal.compareProducts.map((p) => (
                          <td key={p.id} className="p-3 text-slate-200">
                            {p.family === "air" ? "Air cooled" : "Liquid cooled"}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <th className="p-3 text-slate-400 font-mono">Material</th>
                        {detailModal.compareProducts.map((p) => (
                          <td key={p.id} className="p-3 text-slate-200">{p.material}</td>
                        ))}
                      </tr>
                      <tr>
                        <th className="p-3 text-slate-400 font-mono">Construction</th>
                        {detailModal.compareProducts.map((p) => (
                          <td key={p.id} className="p-3 text-slate-200">{p.construction}</td>
                        ))}
                      </tr>
                      <tr>
                        <th className="p-3 text-slate-400 font-mono">Applications</th>
                        {detailModal.compareProducts.map((p) => (
                          <td key={p.id} className="p-3 text-slate-200">{p.application}</td>
                        ))}
                      </tr>
                      <tr>
                        <th className="p-3 text-slate-400 font-mono">Considerations</th>
                        {detailModal.compareProducts.map((p) => (
                          <td key={p.id} className="p-3 text-slate-200">{p.considerations}</td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>

                <button
                  onClick={() => {
                    setDetailModal({ open: false, type: "compare" });
                    setInquiryStep("form");
                    setInquiryOpen(true);
                  }}
                  className="px-6 py-3 bg-[#81e6d6] hover:bg-[#a4f5e7] text-[#091f26] font-bold text-xs uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  Talk through the options ↗
                </button>
              </div>
            )}

            {detailModal.type === "fsw" && (
              <div className="space-y-6">
                <p className="text-[11px] font-mono tracking-widest text-[#81e6d6] uppercase">
                  FRICTION STIR WELDING / ITS COOLING
                </p>
                <h2 className="text-2xl font-serif text-white">Joined without melting.</h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  A rotating, non-consumable tool generates frictional heat and mechanically joins the workpieces in the solid state. ITS uses friction stir welding to close machined channels in thermal assemblies.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded bg-[#0b252c] p-3 border border-slate-800 text-center">
                    <Image
                      src="/assets/flow-channel.webp"
                      alt="Machined cold plate with internal fluid channels"
                      width={300}
                      height={180}
                      className="object-contain mx-auto max-h-40"
                    />
                    <span className="text-[11px] text-slate-400 mt-2 block font-mono">
                      Machined Internal Channels
                    </span>
                  </div>
                  <div className="rounded bg-[#0b252c] p-3 border border-slate-800 text-center">
                    <Image
                      src="/assets/fsw-plate.webp"
                      alt="Friction stir welded cold plate assembly"
                      width={300}
                      height={180}
                      className="object-contain mx-auto max-h-40"
                    />
                    <span className="text-[11px] text-slate-400 mt-2 block font-mono">
                      Solid-State Sealed Assembly
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-800 pt-6 text-xs">
                  <div>
                    <strong className="block text-[10px] font-mono text-slate-400 tracking-wider uppercase mb-1">
                      DESIGN
                    </strong>
                    <span className="text-white">Internal flow channels tailored to component locations</span>
                  </div>
                  <div>
                    <strong className="block text-[10px] font-mono text-slate-400 tracking-wider uppercase mb-1">
                      JOINING
                    </strong>
                    <span className="text-white">Solid-state process with controlled distortion</span>
                  </div>
                  <div>
                    <strong className="block text-[10px] font-mono text-slate-400 tracking-wider uppercase mb-1">
                      MATERIALS
                    </strong>
                    <span className="text-white">Aluminum and copper capabilities</span>
                  </div>
                  <div>
                    <strong className="block text-[10px] font-mono text-slate-400 tracking-wider uppercase mb-1">
                      APPLICATIONS
                    </strong>
                    <span className="text-white">Power electronics and battery cooling assemblies</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setDetailModal({ open: false, type: "fsw" });
                    setInquiryData((prev) => ({
                      ...prev,
                      cooling: "Friction stir welding",
                    }));
                    setInquiryStep("form");
                    setInquiryOpen(true);
                  }}
                  className="px-6 py-3 bg-[#81e6d6] hover:bg-[#a4f5e7] text-[#091f26] font-bold text-xs uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  Discuss FSW for your project ↗
                </button>
              </div>
            )}

            {detailModal.type === "team" && (
              <div className="space-y-6">
                <p className="text-[11px] font-mono tracking-widest text-[#81e6d6] uppercase">
                  THE TEAM BEHIND YOUR THERMAL SOLUTION
                </p>
                <h2 className="text-2xl font-serif text-white">Engineering is a team effort.</h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Led by founder and CEO Ahmed Zaghlol, Ph.D., P.Eng., ITS brings together thermal design, mechanical engineering, manufacturing and supply chain expertise.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {REFERENCE_TEAM.map((tm) => (
                    <div key={tm.name} className="text-center bg-[#0b252c] border border-slate-800 p-3 rounded">
                      <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden mb-2 bg-slate-800">
                        <Image src={tm.img} alt={tm.name} fill className="object-cover" />
                      </div>
                      <h4 className="font-bold text-xs text-white">{tm.name}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">{tm.role}</p>
                    </div>
                  ))}
                </div>

                <p className="text-[11px] text-slate-400">Team roles as listed in the supplied company presentation.</p>

                <button
                  onClick={() => {
                    setDetailModal({ open: false, type: "team" });
                    setInquiryStep("form");
                    setInquiryOpen(true);
                  }}
                  className="px-6 py-3 bg-[#81e6d6] hover:bg-[#a4f5e7] text-[#091f26] font-bold text-xs uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  Connect with our team ↗
                </button>
              </div>
            )}

            {detailModal.type === "sources" && (
              <div className="space-y-6">
                <p className="text-[11px] font-mono tracking-widest text-[#81e6d6] uppercase">
                  CONTENT & REFERENCES
                </p>
                <h2 className="text-2xl font-serif text-white">Built around ITS’s work.</h2>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
                  <li>
                    ITS Cooling Company Presentation — For Sharing: product imagery, case studies, manufacturing capabilities, company milestones and team information.
                  </li>
                  <li>
                    <a href="https://www.itscooling.com/" target="_blank" rel="noopener noreferrer" className="text-[#81e6d6] underline">
                      ITS Cooling website
                    </a>
                    : product categories, engineering services, markets and company contact information.
                  </li>
                  <li>
                    Visual direction inspired by{" "}
                    <a href="https://terminal-industries.com/markets/terminal-for-financial-decision-makers" target="_blank" rel="noopener noreferrer" className="text-[#81e6d6] underline">
                      Terminal Industries
                    </a>{" "}
                    and{" "}
                    <a href="https://www.amepower.com/" target="_blank" rel="noopener noreferrer" className="text-[#81e6d6] underline">
                      AmePower
                    </a>
                    . Their branding and commercial claims have not been reused.
                  </li>
                </ul>
                <p className="text-xs text-slate-400">
                  Product imagery and reported results belong to ITS. Product selection and performance are application-specific. The presentation lists ISO 9001:2015 as current and AS9100 and CGP / ITAR certification initiatives as in progress.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
