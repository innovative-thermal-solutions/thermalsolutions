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
    template: "%s | Innovative Thermal Solutions",
    default: "Innovative Thermal Solutions | Advanced Thermal Management & Precision Manufacturing",
  },
  description:
    "Advanced liquid cold plates, heat sinks, friction stir welding and precision manufacturing for demanding power electronics in Guelph, Ontario.",
  keywords: [
    "Thermal Engineering",
    "Liquid Cold Plates",
    "Friction Stir Welding",
    "Heat Sinks",
    "CNC Machining",
    "Thermal Simulation",
    "Power Electronics Cooling",
    "EV Battery Cooling",
  ],
  authors: [{ name: "Innovative Thermal Solutions Inc." }],
  openGraph: {
    title: "Innovative Thermal Solutions | Advanced Thermal Management",
    description:
      "Advanced liquid cold plates, heat sinks, friction stir welding and precision manufacturing for demanding power electronics in Guelph, Ontario.",
    type: "website",
    locale: "en_CA",
    siteName: "Innovative Thermal Solutions Inc.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-[#f8fafc] text-[#090e17] selection:bg-sky-600 selection:text-white min-h-screen flex flex-col`}
      >
        <Navigation />
        <div className="flex-1 w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
