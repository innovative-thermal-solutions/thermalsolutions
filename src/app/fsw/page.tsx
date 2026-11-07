import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ShieldCheck, Factory, CheckCircle2, ArrowRight } from "lucide-react";
import { SubpageCta } from "@/components/common/SubpageCta";

export const metadata = {
  title: "Friction Stir Welding (FSW) | In-House Solid-State Joining | ITS Cooling",
  description:
    "High-integrity solid-state joining for liquid cold plates in Guelph, Ontario. Friction Stir Welding eliminates porosity, ensures zero coolant leakage, and preserves base metal strength.",
};

export default function FswLandingPage() {
  return (
    <main id="main-content" className="w-full min-h-screen bg-[#f2f4f0] text-[#0b252c] pt-28 pb-20">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 hover:text-[#087f83] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
        <div className="border border-[#d6deda] bg-white rounded-2xl p-8 sm:p-14 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-bold text-[#087f83] px-2.5 py-1 bg-[#e9f5f4] rounded border border-[#81e6d6]/40 uppercase tracking-widest">
                IN-HOUSE / GUELPH, ONTARIO
              </span>
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold">
                Core Expertise
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#0b252c] leading-[0.98] mb-6">
              A stronger bond. <br />
              <span className="text-[#087f83]">A cooler future.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Friction Stir Welding (FSW) joins metal in the solid state without melting. For high-performance liquid cold plates, that means hermetically sealing complex internal fluid paths while eliminating porosity, slag, and thermal distortion.
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono text-[#0b252c] border-t border-[#d6deda] pt-6 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-[#087f83] font-bold text-sm">↗</span>
                <span>Zero joint porosity</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#087f83] font-bold text-sm">↗</span>
                <span>Leak-tight construction</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#087f83] font-bold text-sm">↗</span>
                <span>Preserved base-metal temper</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#087f83] font-bold text-sm">↗</span>
                <span>High process repeatability</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-[#01747A] hover:bg-[#015f64] text-white font-mono font-bold text-xs uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <span>Discuss FSW for your project</span>
                <span>↗</span>
              </Link>
              <Link
                href="/facility"
                className="px-6 py-3.5 bg-white hover:bg-slate-100 border border-[#d6deda] text-[#0b252c] font-mono font-bold text-xs uppercase tracking-wider rounded transition-colors"
              >
                Tour Guelph Facility
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden bg-[#091f26] border border-slate-700 shadow-md">
            <Image
              src="/assets/fsw-process.webp"
              alt="Friction stir welding tool machining cold plate workpiece"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/80 backdrop-blur-md rounded text-[10px] font-mono tracking-widest text-[#81e6d6]">
              FSW IN PROGRESS
            </div>
          </div>
        </div>
      </section>

      {/* Video Demonstration Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
        <div className="bg-white border border-[#d6deda] rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="max-w-2xl mb-8">
            <p className="text-[11px] font-mono tracking-widest text-[#087f83] uppercase mb-2 font-bold">
              PROCESS VALIDATION
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0b252c]">
              FSW High-Torque Spindle in Operation
            </h2>
          </div>

          <div className="rounded-xl overflow-hidden border border-slate-300 bg-slate-950 shadow-md aspect-[16/9] relative max-w-5xl mx-auto">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/manufacturing/fsw-process-01.png"
              className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05]"
            >
              <source src="/video/fsw-process.mp4" type="video/mp4" />
              Your browser does not support video playback.
            </video>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-black/75 backdrop-blur-md px-4 py-2 rounded text-xs font-mono text-white">
              <span>Spindle: 1,800 RPM · Downforce: 14.2 kN · Porosity: 0.0%</span>
              <span className="text-[#81e6d6]">Guelph, Ontario Facility</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Deep Dive: Why FSW is Superior */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-[#d6deda] rounded-xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-bold text-[#087f83] px-2 py-0.5 bg-[#e9f5f4] rounded block w-fit mb-4">
                01 / SOLID STATE
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#0b252c] mb-3">
                No Melting. No Slag.
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                By remaining below the melting temperature of aluminum or copper, FSW completely prevents solidification cracking, shielding gas entrapment, and spatter within internal micro-channels.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-[#d6deda] text-xs font-mono text-slate-500">
              Parent Metal Strength Retention: &gt;90%
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#d6deda] rounded-xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-bold text-[#087f83] px-2 py-0.5 bg-[#e9f5f4] rounded block w-fit mb-4">
                02 / FLUID INTEGRITY
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#0b252c] mb-3">
                100% Hermetic Seal
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                FSW welds produce monolithic joints capable of withstanding operating pressures above 10 bar without O-rings, gaskets, or adhesives that degrade over time.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-[#d6deda] text-xs font-mono text-slate-500">
              Helium Mass-Spec Verified: &lt; 1×10⁻⁸ std cc/s
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#d6deda] rounded-xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-bold text-[#087f83] px-2 py-0.5 bg-[#e9f5f4] rounded block w-fit mb-4">
                03 / MINIMAL DISTORTION
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#0b252c] mb-3">
                Sub-Millimeter Flatness
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Low heat input drastically limits post-weld angular distortion and residual stress, ensuring mounting surfaces meet strict coplanarity specs for IGBT and SiC semiconductor modules.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-[#d6deda] text-xs font-mono text-slate-500">
              Surface Flatness: &lt; 0.05 mm across component face
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Grid: FSW vs Vacuum Brazing vs Gaskets */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <div className="bg-white border border-[#d6deda] rounded-2xl p-8 sm:p-12 shadow-sm">
          <p className="text-[11px] font-mono tracking-widest text-[#087f83] uppercase mb-2 font-bold">
            PROCESS COMPARISON
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0b252c] mb-8">
            How FSW Compares for Liquid Cooling Hardware
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-[#d6deda] text-[#0b252c]">
                  <th className="py-3 px-4 font-bold">Joining Parameter</th>
                  <th className="py-3 px-4 text-[#087f83] font-bold bg-[#e9f5f4]">FSW (ITS In-House)</th>
                  <th className="py-3 px-4 text-slate-600">Vacuum Brazing</th>
                  <th className="py-3 px-4 text-slate-600">Gasket / Bolted</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d6deda] text-slate-700">
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#0b252c]">Joint Mechanism</td>
                  <td className="py-3.5 px-4 bg-[#e9f5f4] font-semibold text-[#087f83]">Solid-state plasticization</td>
                  <td className="py-3.5 px-4">Filler metal molten flux</td>
                  <td className="py-3.5 px-4">Mechanical compression</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#0b252c]">Porosity Risk</td>
                  <td className="py-3.5 px-4 bg-[#e9f5f4] font-semibold text-[#087f83]">Zero (no melting)</td>
                  <td className="py-3.5 px-4">Moderate (voids possible)</td>
                  <td className="py-3.5 px-4">N/A (degradation risk)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#0b252c]">Channel Clogging Risk</td>
                  <td className="py-3.5 px-4 bg-[#e9f5f4] font-semibold text-[#087f83]">Zero (no molten metal)</td>
                  <td className="py-3.5 px-4">Possible filler runout</td>
                  <td className="py-3.5 px-4">Gasket pinch risk</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#0b252c]">Thermal Distortion</td>
                  <td className="py-3.5 px-4 bg-[#e9f5f4] font-semibold text-[#087f83]">Extremely low</td>
                  <td className="py-3.5 px-4">Moderate oven soak</td>
                  <td className="py-3.5 px-4">None</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#0b252c]">Leak-Proof Lifespan</td>
                  <td className="py-3.5 px-4 bg-[#e9f5f4] font-semibold text-[#087f83]">Permanent solid metal</td>
                  <td className="py-3.5 px-4">Permanent braze</td>
                  <td className="py-3.5 px-4">Subject to elastomer aging</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SubpageCta
          eyebrow="FSW EXPERTISE IN GUELPH, ONTARIO"
          title="Ready to seal your liquid cold plates with FSW?"
          description="Send our team your 3D CAD step files and flow cavity specifications. We validate joint boundaries, fixture tooling, and deliver helium-certified prototypes."
          primaryCtaText="Start Your FSW Project"
          primaryCtaHref="/contact"
        />
      </div>
    </main>
  );
}
