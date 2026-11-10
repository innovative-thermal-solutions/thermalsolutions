import { ReferenceHeroSection } from "@/components/home/ReferenceHeroSection";
import { ReferenceSolutionsSection } from "@/components/home/ReferenceSolutionsSection";
import { ReferenceIndustriesSection } from "@/components/home/ReferenceIndustriesSection";
import { ReferenceEngineeringProcess } from "@/components/home/ReferenceEngineeringProcess";
import { ManufacturingStory } from "@/components/home/ManufacturingStory";
import { ReferenceFswSection } from "@/components/home/ReferenceFswSection";
import { EngineeringProof } from "@/components/home/EngineeringProof";
import { CinematicStory } from "@/components/home/CinematicStory";
import { ReferenceCaseStudiesSection } from "@/components/home/ReferenceCaseStudiesSection";
import { ReferenceFaqSection } from "@/components/home/ReferenceFaqSection";
import { ReferenceContactSection } from "@/components/home/ReferenceContactSection";

export const metadata = {
  title: "ITS Cooling — Engineered for the heat ahead. | Innovative Thermal Solutions",
  description:
    "Custom heat sinks, liquid cold plates and friction stir welding. Thermal engineering, testing and precision manufacturing from Guelph, Ontario.",
};

export default function HomePage() {
  return (
    <main id="main-content" className="relative w-full min-h-screen bg-slate-50">
      {/* 01 REFERENCE HERO WITH WORKSHOP BACKGROUND VIDEO & TRUST STRIP */}
      <ReferenceHeroSection />

      {/* 02 COMPLETE REFERENCE COOLING SOLUTIONS (8 Products, Filters, Search, Compare, Finder) */}
      <ReferenceSolutionsSection />

      {/* 03 COMPLETE REFERENCE INDUSTRIES EXPLORER (5 Primary Sectors) */}
      <ReferenceIndustriesSection />

      {/* 04 COMPLETE REFERENCE 4-STAGE ENGINEERING PROCESS */}
      <ReferenceEngineeringProcess />

      {/* 05 IN-HOUSE PRECISION MANUFACTURING & CNC VIDEO HUD */}
      <ManufacturingStory />

      {/* 06 COMPLETE REFERENCE FRICTION STIR WELDING SHOWCASE */}
      <ReferenceFswSection />

      {/* 08 ENGINEERING PROOF, SENSORS & REAL-TIME CFD PHYSICS */}
      <EngineeringProof />

      {/* 09 INTERACTIVE HARDWARE ARCHITECTURE DEEP-DIVE */}
      <CinematicStory />

      {/* 10 COMPLETE REFERENCE CASE STUDIES & BEFORE/AFTER THERMAL COMPARISON SLIDER */}
      <ReferenceCaseStudiesSection />

      {/* 11 COMPLETE REFERENCE FAQ ACCORDION */}
      <ReferenceFaqSection />

      {/* 12 COMPLETE REFERENCE CONTACT & PROJECT BRIEF SECTION */}
      <ReferenceContactSection />
    </main>
  );
}
