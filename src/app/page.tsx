import { ScrollVideoIntro } from "@/components/home/ScrollVideoIntro";
import { CinematicStory } from "@/components/home/CinematicStory";
import { CustomPhilosophy } from "@/components/home/CustomPhilosophy";
import { ThermalSimulator } from "@/components/home/ThermalSimulator";
import { ProductFamily } from "@/components/home/ProductFamily";
import { IndustriesStory } from "@/components/home/IndustriesStory";
import { EngineeringProof } from "@/components/home/EngineeringProof";
import { ManufacturingStory } from "@/components/home/ManufacturingStory";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata = {
  title: "Innovative Thermal Solutions | 100% Custom Thermal Management",
  description:
    "We don't sell standard products off shelves. ITS Cooling designs and manufactures custom liquid cold plates and heat sinks from concept to finished hardware under one roof in Guelph, Ontario.",
};

export default function HomePage() {
  return (
    <main id="main-content" className="relative w-full min-h-screen bg-white">
      {/* 00 Cinematic Video Scroll Sequence (Above Hero) */}
      <ScrollVideoIntro />

      {/* 01-06 Cinematic Story Chapters (Hero Section) */}
      <CinematicStory />

      {/* What We Do: 100% Custom Cooling Solutions & Turnkey Workflow */}
      <CustomPhilosophy />

      {/* Interactive Thermal Simulator */}
      <ThermalSimulator />

      {/* 07 Product Family */}
      <ProductFamily />

      {/* 08 Applications / Industries */}
      <IndustriesStory />

      {/* 09 Engineering Proof & Flow Visualizer + Metrics Band */}
      <EngineeringProof />

      {/* 10 Real Manufacturing Video Story */}
      <ManufacturingStory />

      {/* 11 Start a Conversation Final CTA */}
      <FinalCta />
    </main>
  );
}
