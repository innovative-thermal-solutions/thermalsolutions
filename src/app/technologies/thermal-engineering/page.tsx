import { Metadata } from "next";
import ThermalSimulationClient from "@/app/thermal-simulation/ThermalSimulationClient";

export const metadata: Metadata = {
  title: "CFD Thermal Simulation & 3D CAD Modeling | Innovative Thermal Solutions",
  description:
    "In-house CFD thermal simulation for custom cold plates and heat sinks. See the heat and shape the solution before cutting metal.",
};

export default function ThermalEngineeringPage() {
  return <ThermalSimulationClient />;
}
