import { HeroVideoSection } from "@/components/home/HeroVideoSection";
import { CompanyIntroductionSection } from "@/components/home/CompanyIntroductionSection";
import { FourCoolingSolutionCards } from "@/components/home/FourCoolingSolutionCards";
import { TurnkeyProcessPdfSection } from "@/components/home/TurnkeyProcessPdfSection";
import { ThermalDesignSimulationSection } from "@/components/home/ThermalDesignSimulationSection";
import { MarketsWeServePdfSection } from "@/components/home/MarketsWeServePdfSection";
import { FrictionStirWeldingPdfSection } from "@/components/home/FrictionStirWeldingPdfSection";
import { FinalCta } from "@/components/home/FinalCta";
import { SupplementaryInformationSection } from "@/components/home/SupplementaryInformationSection";

export const metadata = {
  title: "Innovative Thermal Solutions | 100% Custom Thermal Management & Manufacturing",
  description:
    "Custom heat sinks, liquid cold plates and friction stir welding. Thermal engineering, testing and precision manufacturing from Guelph, Ontario.",
};

export default function HomePage() {
  return (
    <main id="main-content" className="relative w-full min-h-screen bg-slate-50">
      {/* =========================================================================
          MASTER MANDATORY HOMEPAGE SEQUENCE AS ORDERED IN DESIGN.PDF
          ========================================================================= */}

      {/* SECTION 01 — HERO VIDEO + PHOTOS */}
      <HeroVideoSection />

      {/* SECTION 02 — COMPANY INTRODUCTION: Description on what we do.. ( We design, we manufacture ) */}
      <CompanyIntroductionSection />

      {/* SECTION 03 — FOUR COOLING SOLUTION CARDS (Natural Convection, Forced Convection, Custom Liquid Cold Plate, Bus Bar) */}
      <FourCoolingSolutionCards />

      {/* SECTION 04 — THE TURNKEY PROCESS: Concept to Hardware Under One Roof */}
      <TurnkeyProcessPdfSection />

      {/* SECTION 05 — THERMAL DESIGN, SIMULATION & ENGINEERING (Prominent CFD image + Interactive Simulator) */}
      <ThermalDesignSimulationSection />

      {/* SECTION 06 — MARKETS WE SERVE IN (Industrial layout with multi-industry explorer) */}
      <MarketsWeServePdfSection />

      {/* SECTION 07 — FRICTION STIR WELDING (Engineered. Milled. Welded. Tested Here.) */}
      <FrictionStirWeldingPdfSection />

      {/* SECTION 08 — BRING US YOUR COOLING REQUIREMENTS (Final CTA with Talk to Engineer & Explore Technologies) */}
      <FinalCta />

      {/* =========================================================================
          SUPPLEMENTARY TECHNICAL ARCHIVE & REFERENCE EXTENSIONS
          (Preserves 100% of all technical datasheets, interactive sliders, FSW details,
           team modals, solution comparisons, full FAQ accordion, and deep-dive specs)
          ========================================================================= */}
      <SupplementaryInformationSection />
    </main>
  );
}
