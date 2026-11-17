import type { Metadata } from "next";
import { ShowcaseLiquidCoolingView } from "@/components/showcase/ShowcaseLiquidCoolingView";

export const metadata: Metadata = {
  title: "Liquid Cooling — Engineered Around You | Innovative Thermal Solutions",
  description:
    "Liquid cold plates that carry heat away from your electronics. Designed around your application—or built around the design you already have. FSW, copper-embedded, and vacuum brazed architectures.",
  openGraph: {
    title: "Liquid Cooling — Engineered Around You | ITS Cooling",
    description:
      "Custom liquid cold plates that carry heat away from high-power electronics. From ground-up thermal modeling to in-house manufacturing in Guelph, Ontario.",
  },
};

export default function LiquidCoolingTechPage() {
  return (
    <main id="main-content" className="w-full min-h-screen">
      <ShowcaseLiquidCoolingView />
    </main>
  );
}
