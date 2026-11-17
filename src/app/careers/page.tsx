import { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers & Job Opportunities | Innovative Thermal Solutions (ITS Cooling)",
  description:
    "Join the team at Innovative Thermal Solutions (ITS Cooling) in Guelph, Ontario. Explore engineering, CNC machining, quality assurance, and management career opportunities.",
};

export default function CareersPage() {
  return <CareersClient />;
}
