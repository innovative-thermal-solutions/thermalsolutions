"use client";

import React from "react";
import { ReferenceSolutionsSection } from "@/components/home/ReferenceSolutionsSection";
import { ProductFamily } from "@/components/home/ProductFamily";
import { IndustriesStory } from "@/components/home/IndustriesStory";
import { ReferenceEngineeringProcess } from "@/components/home/ReferenceEngineeringProcess";
import { ManufacturingStory } from "@/components/home/ManufacturingStory";
import { EngineeringProof } from "@/components/home/EngineeringProof";
import { CinematicStory } from "@/components/home/CinematicStory";
import { ReferenceCaseStudiesSection } from "@/components/home/ReferenceCaseStudiesSection";
import { ReferenceFacilitySection } from "@/components/home/ReferenceFacilitySection";
import { ReferenceFaqSection } from "@/components/home/ReferenceFaqSection";
import { ReferenceContactSection } from "@/components/home/ReferenceContactSection";

export function SupplementaryInformationSection() {
  return (
    <div id="extended-technical-hub" className="relative w-full border-t border-slate-300">
      {/* 01. Complete Reference Solution Explorer, Filters, Search & Questionnaire */}
      <ReferenceSolutionsSection />

      {/* 02. In-Depth Product Family Technical Specifications & Dimensional Drawings */}
      <ProductFamily />

      {/* 03. High-Telemetry Manufacturing Video & Precision Milling */}
      <ManufacturingStory />

      {/* 04. Detailed Engineering Proof & Sensor Bench Telemetry */}
      <EngineeringProof />

      {/* 05. Interactive 3D Cinematic Hardware Architecture Deep-Dive */}
      <CinematicStory />

      {/* 06. Detailed Reference 4-Stage Engineering Process Flow */}
      <ReferenceEngineeringProcess />

      {/* 07. Extended Multi-Industry Telemetry & Deep Dives */}
      <IndustriesStory />

      {/* 08. Complete Case Studies & Interactive Thermal Slider (RF amplifier & Bus Cold Plate) */}
      <ReferenceCaseStudiesSection />

      {/* 09. Facility Profile, Team Members & Quality Certification Standards */}
      <ReferenceFacilitySection />

      {/* 10. Expandable FAQ Accordion */}
      <ReferenceFaqSection />

      {/* 11. Reference Direct Project Brief Preparation & Contact Details */}
      <ReferenceContactSection />
    </div>
  );
}
