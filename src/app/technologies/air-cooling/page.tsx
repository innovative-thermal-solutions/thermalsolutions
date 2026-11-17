import type { Metadata } from "next";
import { ShowcaseAirCoolingView } from "@/components/showcase/ShowcaseAirCoolingView";

export const metadata: Metadata = {
  title: "Air Cooling — Engineered Around You | Innovative Thermal Solutions",
  description:
    "Custom heat sinks that transfer heat from your electronics to the surrounding air. Designed from the ground up—or developed around your existing design. Extruded, skived, bonded, and heat pipe architectures.",
  openGraph: {
    title: "Air Cooling — Engineered Around You | ITS Cooling",
    description:
      "Custom heat sinks that transfer heat from your electronics to surrounding air. Purpose-built air cooling engineering and precision manufacturing in Guelph, Ontario.",
  },
};

export default function AirCoolingTechPage() {
  return (
    <main id="main-content" className="w-full min-h-screen">
      <ShowcaseAirCoolingView />
    </main>
  );
}
