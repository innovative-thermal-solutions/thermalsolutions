"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  ArrowRight,
  ArrowUpRight,
  Download,
  Mail,
  Phone,
  HelpCircle,
  ChevronDown,
  CheckCircle2,
  Activity,
  Layers,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function ThermalSimulationClient() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <main id="main-content" className="w-full min-h-screen bg-[#f8faf9] text-[#141f22]">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[640px] lg:min-h-[700px] border-b border-[#d8dedf] bg-[#f8faf9] overflow-hidden pt-28 lg:pt-32">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Hero Copy */}
          <div className="lg:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#00747a] font-bold mb-4">
              IN-HOUSE THERMAL SIMULATION · ADVANCED CFD MODELING
            </p>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-serif font-medium tracking-tight text-[#141f22] leading-[0.98] sm:leading-[0.95] mb-6">
              See the heat.<br />
              <span className="text-[#00747a]">Shape the solution.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8 font-normal">
              At ITS, we perform CFD simulations in-house on both the cooling solutions we design and designs supplied by our customers. By seeing how air or liquid moves and carries heat away, we can spot cooling problems and improve a design before it is built.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#start"
                className="inline-flex items-center gap-3 px-7 py-4 bg-[#00747a] hover:bg-[#005d62] text-white font-mono text-xs uppercase tracking-wider font-bold rounded shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Discuss your thermal challenge</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
            </div>

            <div className="pt-6 border-t border-[#d8dedf] flex flex-wrap gap-8 text-[11px] font-mono tracking-wider text-[#00747a] uppercase font-bold">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00747a]" />
                SIMULATIONS DONE IN-HOUSE
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00747a]" />
                DESIGNED AROUND YOUR PRODUCT
              </span>
            </div>
          </div>

          {/* Hero Art / Video Card */}
          <div className="lg:col-span-6" id="simulation">
            <div className="rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden text-[#141f22]">
              {/* Viewer Head */}
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs font-mono uppercase tracking-wider font-bold text-slate-700">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00747a] animate-pulse" />
                  AIRFLOW VECTOR PLOT
                </span>
                <span className="text-[#00747a]">HEAT SINK</span>
              </div>

              {/* Video Player */}
              <div className="relative bg-black aspect-[4/3] flex items-center justify-center overflow-hidden">
                <video
                  ref={videoRef}
                  id="hero-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Heat sink flow visualization"
                  className="w-full h-full object-contain"
                >
                  <source src="/videos/heatsink_flow.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Viewer Foot */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4 text-xs font-mono text-slate-600">
                <span>Arrows show the direction of airflow.</span>
                <button
                  type="button"
                  id="play-toggle"
                  onClick={togglePlay}
                  aria-label="Pause flow animation"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold transition-colors cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-[#00747a]" />
                      <span>Pause animation Ⅱ</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-[#00747a]" />
                      <span>Play animation ▶</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION NAV STRIP */}
      <nav className="w-full bg-[#141f22] text-white border-b border-[#233134] sticky top-[72px] z-30 px-6 sm:px-8 lg:px-14 py-3.5 shadow-md">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between flex-wrap gap-4 text-xs font-mono">
          <span className="text-teal-300 font-bold tracking-widest uppercase">
            THERMAL SIMULATION
          </span>
          <div className="flex items-center gap-6 sm:gap-8">
            <a href="#start" className="text-slate-300 hover:text-white transition-colors">
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* 3. WHAT IS CFD & WHY IS CFD IMPORTANT */}
      <section id="approach" className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 border-b border-slate-200">
          <div className="lg:col-span-6">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#00747a] font-bold block mb-3">
              CFD, EXPLAINED SIMPLY
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-[#141f22]">
              What is CFD?
            </h2>
          </div>
          <div className="lg:col-span-6 text-slate-700 text-base sm:text-lg leading-relaxed space-y-4">
            <p>
              CFD stands for Computational Fluid Dynamics. Think of it as a virtual experiment: a computer predicts how air or liquid moves around your product. For cooling design, it also helps us understand how heat moves and where temperatures may rise.
            </p>
          </div>
        </div>

        <div className="py-12 border-b border-slate-200">
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#141f22] mb-3">
              Why is CFD important?
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Too much heat can affect how a product works and how long it lasts. CFD helps us understand the cooling needs early, when design changes are easier to make.
            </p>
          </div>
        </div>

        {/* 3 Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          <article className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#00747a] shadow-sm hover:shadow-lg transition-all duration-300 group">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00747a] font-bold block mb-4">
              SPOT PROBLEMS EARLY
            </span>
            <h3 className="text-xl font-bold font-['Space_Grotesk'] text-[#141f22] mb-3 group-hover:text-[#00747a] transition-colors">
              See where heat builds up.
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Find areas that may get too hot before committing to a physical design. This helps us focus cooling where your product needs it most.
            </p>
          </article>

          <article className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#00747a] shadow-sm hover:shadow-lg transition-all duration-300 group">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00747a] font-bold block mb-4">
              MAKE BETTER DESIGN CHOICES
            </span>
            <h3 className="text-xl font-bold font-['Space_Grotesk'] text-[#141f22] mb-3 group-hover:text-[#00747a] transition-colors">
              Compare ideas on screen.
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Explore changes to the heat sink, airflow or liquid cooling layout. Compare the options before deciding which design to build and test.
            </p>
          </article>

          <article className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#00747a] shadow-sm hover:shadow-lg transition-all duration-300 group">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00747a] font-bold block mb-4">
              REDUCE TRIAL AND ERROR
            </span>
            <h3 className="text-xl font-bold font-['Space_Grotesk'] text-[#141f22] mb-3 group-hover:text-[#00747a] transition-colors">
              Build with more confidence.
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Early insights can reduce avoidable redesigns and repeated prototypes. They help guide development time and budget toward the most promising cooling approach.
            </p>
          </article>
        </div>
      </section>

      {/* 4. PROCESS SECTION (01 - 04) */}
      <section id="process" className="w-full bg-[#f1f6f5] border-y border-slate-200 py-20 px-6 sm:px-8 lg:px-14">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#00747a] font-bold block mb-3">
                SIMULATED IN-HOUSE AT ITS
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-[#141f22]">
                Our engineers. <br />
                Your cooling challenge.
              </h2>
            </div>
            <div className="lg:col-span-6 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                Whether we are developing a new cooling solution from scratch or reviewing a customer’s existing design, our engineers use in-house CFD simulations to guide the work. We compare ideas, improve the design and explain the results in practical terms.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#00747a] shadow-sm transition-all duration-300">
              <span className="text-2xl font-serif font-bold text-[#00747a] block mb-4">
                01
              </span>
              <h3 className="text-lg font-bold font-['Space_Grotesk'] text-[#141f22] mb-2">
                Understand your product
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tell us what gets hot, where the product will be used and how much room there is for cooling.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#00747a] shadow-sm transition-all duration-300">
              <span className="text-2xl font-serif font-bold text-[#00747a] block mb-4">
                02
              </span>
              <h3 className="text-lg font-bold font-['Space_Grotesk'] text-[#141f22] mb-2">
                Create a virtual version
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We create a computer model of a cooling solution designed by ITS or use a design you provide. The model includes the heat sources and the conditions around the product.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#00747a] shadow-sm transition-all duration-300">
              <span className="text-2xl font-serif font-bold text-[#00747a] block mb-4">
                03
              </span>
              <h3 className="text-lg font-bold font-['Space_Grotesk'] text-[#141f22] mb-2">
                Simulate and improve
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We study the predicted temperatures and flow, then compare changes that could improve cooling.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#00747a] shadow-sm transition-all duration-300">
              <span className="text-2xl font-serif font-bold text-[#00747a] block mb-4">
                04
              </span>
              <h3 className="text-lg font-bold font-['Space_Grotesk'] text-[#141f22] mb-2">
                Build and check
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                The findings guide the physical design. Prototype testing helps check how it performs in real conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. START / CHECKLIST SECTION */}
      <section id="start" className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 py-20">
        <div className="rounded-3xl bg-gradient-to-br from-[#eaf4f2] via-[#e2edea] to-[#d8e6e3] border border-[#00747a]/20 p-8 sm:p-14 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left CTA */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00747a] font-bold block">
              LET’S DEFINE YOUR NEXT STEP
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-medium tracking-tight text-[#141f22] leading-[1.05]">
              What’s getting <br />
              <em className="not-italic text-[#00747a]">too hot?</em>
            </h2>
            <p className="text-slate-700 text-base leading-relaxed">
              You do not need to be a simulation expert. Tell us about your product and our engineers will help define the next step.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="mailto:Engineering@itscooling.com?subject=Thermal%20simulation%20project%20inquiry"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded bg-[#00747a] hover:bg-[#005a5f] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-md transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email our engineering team</span>
              </a>
              <a
                href="tel:+15197634454"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#141f22] hover:text-[#00747a] transition-colors py-3 px-2"
              >
                <Phone className="w-4 h-4 text-[#00747a]" />
                <span>+1 (519) 763-4454</span>
              </a>
            </div>
          </div>

          {/* Right Checklist */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#141f22] mb-1">
                A useful starting point
              </h3>
              <p className="text-sm text-slate-600">
                Start with what you know. We will help identify any missing information.
              </p>
            </div>

            <ul className="space-y-4 pt-2">
              <li className="pb-3 border-b border-slate-100 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00747a] shrink-0 mt-0.5" />
                <div>
                  <b className="block text-sm font-semibold text-[#141f22]">
                    Your product and available space
                  </b>
                  <span className="text-xs text-slate-500 font-mono">
                    Drawings, a 3D design or a description
                  </span>
                </div>
              </li>

              <li className="pb-3 border-b border-slate-100 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00747a] shrink-0 mt-0.5" />
                <div>
                  <b className="block text-sm font-semibold text-[#141f22]">
                    What gets hot
                  </b>
                  <span className="text-xs text-slate-500 font-mono">
                    Heat sources and temperature limits, if known
                  </span>
                </div>
              </li>

              <li className="pb-3 border-b border-slate-100 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00747a] shrink-0 mt-0.5" />
                <div>
                  <b className="block text-sm font-semibold text-[#141f22]">
                    Where it will be used
                  </b>
                  <span className="text-xs text-slate-500 font-mono">
                    Surrounding temperatures and how it is cooled
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00747a] shrink-0 mt-0.5" />
                <div>
                  <b className="block text-sm font-semibold text-[#141f22]">
                    What matters to your project
                  </b>
                  <span className="text-xs text-slate-500 font-mono">
                    Size, timing, cost and production needs
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#00747a] font-bold block mb-3">
              A FEW GOOD QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-[#141f22]">
              Before we begin.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <details className="group rounded-2xl bg-white border border-slate-200 p-6 open:shadow-md transition-all">
              <summary className="font-['Space_Grotesk'] font-bold text-base sm:text-lg text-[#141f22] cursor-pointer list-none flex items-center justify-between gap-4">
                <span>Do you simulate your own designs as well as customer designs?</span>
                <ChevronDown className="w-5 h-5 text-[#00747a] group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                Yes. We use CFD throughout the development of our own cooling designs. We also simulate customer-supplied designs to investigate cooling problems and explore improvements.
              </p>
            </details>

            <details className="group rounded-2xl bg-white border border-slate-200 p-6 open:shadow-md transition-all">
              <summary className="font-['Space_Grotesk'] font-bold text-base sm:text-lg text-[#141f22] cursor-pointer list-none flex items-center justify-between gap-4">
                <span>Does simulation replace physical testing?</span>
                <ChevronDown className="w-5 h-5 text-[#00747a] group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                No. CFD predicts what may happen using the information entered into the model. Testing a physical prototype helps confirm how the product actually behaves.
              </p>
            </details>

            <details className="group rounded-2xl bg-white border border-slate-200 p-6 open:shadow-md transition-all">
              <summary className="font-['Space_Grotesk'] font-bold text-base sm:text-lg text-[#141f22] cursor-pointer list-none flex items-center justify-between gap-4">
                <span>Do I need a complete design to start?</span>
                <ChevronDown className="w-5 h-5 text-[#00747a] group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                No. Tell us what your product needs and our engineers can develop a cooling design and simulate it in-house. If you already have a design, we can start from that instead.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
