import type { Metadata } from "next";
import { ShowcaseBusbarView } from "@/components/showcase/ShowcaseBusbarView";

export const metadata: Metadata = {
  title: "Bus Bars — Engineered Around Your System | Innovative Thermal Solutions",
  description:
    "Custom bus bars that connect power sources, converters and loads. Engineered from your requirements—or developed around the design you already have. Laminated and solid copper architectures.",
  openGraph: {
    title: "Bus Bars — Engineered Around Your System | ITS Cooling",
    description:
      "Custom laminated and machined copper bus bars for power distribution, inverters, and battery systems. Engineered and manufactured in Guelph, Ontario.",
  },
};

export default function BusbarPage() {
  return (
    <main id="main-content" className="w-full min-h-screen">
      <ShowcaseBusbarView />
    </main>
  );
}
