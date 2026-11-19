import { Metadata } from "next";
import ThermalSimulationClient from "./ThermalSimulationClient";

export const metadata: Metadata = {
  title: "In-House Thermal Simulation & CFD Design | ITS Cooling",
  description:
    "In-house CFD thermal simulation for custom cold plates and heat sinks. See the heat and shape the solution before cutting metal.",
};

export default function ThermalSimulationPage() {
  return <ThermalSimulationClient />;
}
