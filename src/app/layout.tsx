import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | ITS Cooling",
    default: "ITS Cooling | Advanced Thermal Engineering & Manufacturing"
  },
  description: "Innovative Thermal Solutions (ITS) engineers the path from thermal challenge to finished hardware. Specializing in Friction Stir Welding, Liquid Cold Plates, and Heat Sinks for EV, Aerospace, and Industrial applications.",
  keywords: ["Thermal Engineering", "Liquid Cold Plates", "Friction Stir Welding", "Heat Sinks", "CNC Machining", "Thermal Simulation"],
  openGraph: {
    title: "ITS Cooling | Thermal Engineering",
    description: "Turnkey engineering and manufacturing partner for advanced cooling components.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white selection:bg-teal-900 selection:text-white`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
