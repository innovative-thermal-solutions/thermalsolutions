import { ScrollVideoIntro } from "@/components/home/ScrollVideoIntro";
import { ProductFamily } from "@/components/home/ProductFamily";
import { ManufacturingStory } from "@/components/home/ManufacturingStory";
import { CustomPhilosophy } from "@/components/home/CustomPhilosophy";
import { EngineeringProof } from "@/components/home/EngineeringProof";
import { ThermalSimulator } from "@/components/home/ThermalSimulator";
import { CinematicStory } from "@/components/home/CinematicStory";
import { IndustriesStory } from "@/components/home/IndustriesStory";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata = {
  title: "Innovative Thermal Solutions | 100% Custom Thermal Management",
  description:
    "We don't sell standard products off shelves. ITS Cooling designs and manufactures custom liquid cold plates and heat sinks from concept to finished hardware under one roof in Guelph, Ontario.",
};

export default function HomePage() {
  return (
    <main id="main-content" className="relative w-full min-h-screen bg-transparent">
      {/* 00 Cinematic Video Scroll Sequence (Above Fold Intro) */}
      <ScrollVideoIntro />

      {/* 01 Product Family (Directly after scroll video) */}
      <ProductFamily />

      {/* 02 In-House Manufacturing & Live Process Video */}
      <ManufacturingStory />

      {/* 03 The Turnkey Process & 100% Custom Philosophy */}
      <CustomPhilosophy />

      {/* 04 Engineering Proof, CFD Physics & Sensor Telemetry */}
      <EngineeringProof />

      {/* 05 Interactive Thermal Simulator & Lab Bench */}
      <ThermalSimulator />

      {/* 06 Interactive Hardware Architecture Deep-Dive */}
      <CinematicStory />

      {/* 07 Mission-Critical Target Applications & Industries */}
      <IndustriesStory />

      {/* 08 Start a Conversation Final Consultation CTA */}
      <FinalCta />
    </main>
  );
}
