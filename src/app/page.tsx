import { ReferenceHeroSection } from "@/components/home/ReferenceHeroSection";
import { HeroVideoSection } from "@/components/home/HeroVideoSection";
import { ReferenceSolutionsSection } from "@/components/home/ReferenceSolutionsSection";
import { ProductFamily } from "@/components/home/ProductFamily";
import { ReferenceIndustriesSection } from "@/components/home/ReferenceIndustriesSection";
import { IndustriesStory } from "@/components/home/IndustriesStory";
import { ReferenceEngineeringProcess } from "@/components/home/ReferenceEngineeringProcess";
import { ManufacturingStory } from "@/components/home/ManufacturingStory";
import { CustomPhilosophy } from "@/components/home/CustomPhilosophy";
import { ReferenceFswSection } from "@/components/home/ReferenceFswSection";
import { EngineeringProof } from "@/components/home/EngineeringProof";
import { ThermalSimulator } from "@/components/home/ThermalSimulator";
import { CinematicStory } from "@/components/home/CinematicStory";
import { ReferenceCaseStudiesSection } from "@/components/home/ReferenceCaseStudiesSection";
import { ReferenceFacilitySection } from "@/components/home/ReferenceFacilitySection";
import { ReferenceFaqSection } from "@/components/home/ReferenceFaqSection";
import { ReferenceContactSection } from "@/components/home/ReferenceContactSection";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata = {
  title: "ITS Cooling — Engineered for the heat ahead. | Innovative Thermal Solutions",
  description:
    "Custom heat sinks, liquid cold plates and friction stir welding. Thermal engineering, testing and precision manufacturing from Guelph, Ontario.",
};

export default function HomePage() {
  return (
    <main id="main-content" className="relative w-full min-h-screen bg-slate-50">
      {/* 01 AUTHORITATIVE REFERENCE HERO & TRUST STRIP */}
      <ReferenceHeroSection />

      {/* 02 LIVE WORKSHOP & PRECISION HERO VIDEO */}
      <HeroVideoSection />

      {/* 03 COMPLETE REFERENCE COOLING SOLUTIONS (Search, Filters, Compare, Finder) */}
      <ReferenceSolutionsSection />

      {/* 04 EXISTING DETAILED PRODUCT FAMILIES & SPECS */}
      <ProductFamily />

      {/* 05 COMPLETE REFERENCE INDUSTRIES EXPLORER (5 Primary Sectors) */}
      <ReferenceIndustriesSection />

      {/* 06 EXISTING DEEP-DIVE TARGET APPLICATIONS & METRICS */}
      <IndustriesStory />

      {/* 07 COMPLETE REFERENCE 4-STAGE ENGINEERING PROCESS */}
      <ReferenceEngineeringProcess />

      {/* 08 IN-HOUSE MANUFACTURING & LIVE TELEMETRY VIDEO */}
      <ManufacturingStory />

      {/* 09 TURNKEY PROCESS & 100% CUSTOM PHILOSOPHY */}
      <CustomPhilosophy />

      {/* 10 COMPLETE REFERENCE FRICTION STIR WELDING SHOWCASE */}
      <ReferenceFswSection />

      {/* 11 ENGINEERING PROOF, CFD PHYSICS & SENSOR TELEMETRY */}
      <EngineeringProof />

      {/* 12 INTERACTIVE CFD THERMAL SIMULATOR & LAB BENCH */}
      <ThermalSimulator />

      {/* 13 INTERACTIVE HARDWARE ARCHITECTURE DEEP-DIVE */}
      <CinematicStory />

      {/* 14 COMPLETE REFERENCE CASE STUDIES & BEFORE/AFTER THERMAL SLIDER */}
      <ReferenceCaseStudiesSection />

      {/* 15 COMPLETE REFERENCE FACILITY, TEAM & QUALITY INFO */}
      <ReferenceFacilitySection />

      {/* 16 COMPLETE REFERENCE FAQ ACCORDION */}
      <ReferenceFaqSection />

      {/* 17 COMPLETE REFERENCE CONTACT & PROJECT BRIEF SECTION */}
      <ReferenceContactSection />

      {/* 18 FINAL CONSULTATION CTA & CUSTOM COLD PLATE RENDER */}
      <FinalCta />
    </main>
  );
}
