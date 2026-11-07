import Link from "next/link";
import { ArrowLeft, Cpu } from "lucide-react";
import { ThermalSimulator } from "@/components/home/ThermalSimulator";

export const metadata = {
  title: "Real-Time CFD Thermal Simulator | ITS Cooling",
  description:
    "Interactive hydrodynamic and thermal resistance modeling. Simulate cold plate performance, heat flux, flow rate, and junction temperatures in real time.",
};

export default function ThermalSimulationPage() {
  return (
    <main id="main-content" className="w-full min-h-screen bg-slate-50 pt-28 pb-24">
      {/* Page Header Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 hover:text-[#087f83] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Embedded Full Interactive Simulator */}
      <ThermalSimulator />

      {/* Bottom CTA Block */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12">
        <div className="rounded-2xl bg-[#0b252c] text-white p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg border border-slate-800">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-[#81e6d6] uppercase font-bold mb-2 block">
              READY TO VALIDATE YOUR COOLING ARCHITECTURE?
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
              Send us your 3D CAD models.
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Send our engineers your 3D CAD files and operating boundary conditions for a formal simulation and manufacturing consultation.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3.5 bg-[#81e6d6] text-[#0b252c] hover:bg-white font-mono font-bold text-xs uppercase tracking-wider rounded transition-colors whitespace-nowrap shadow-sm"
          >
            Request Custom CFD Design →
          </Link>
        </div>
      </div>
    </main>
  );
}

