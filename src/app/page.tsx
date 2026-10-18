import { CinematicStory } from "@/components/home/CinematicStory";
import { ThermalSimulator } from "@/components/home/ThermalSimulator";
import { ProductFamily } from "@/components/home/ProductFamily";
import { IndustriesStory } from "@/components/home/IndustriesStory";
import { EngineeringProof } from "@/components/home/EngineeringProof";
import { ManufacturingStory } from "@/components/home/ManufacturingStory";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata = {
  title: "Innovative Thermal Solutions | Advanced Thermal Management",
  description:
    "Advanced liquid cold plates, heat sinks, friction stir welding and precision manufacturing for demanding power electronics in Guelph, Ontario.",
};

export default function HomePage() {
  return (
    <main id="main-content" className="relative w-full min-h-screen bg-white">
      {/* 01-06 Cinematic Story Chapters */}
      <CinematicStory />

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
