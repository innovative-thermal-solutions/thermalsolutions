import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { GlobalMicroSlatsBackground } from "@/components/ui/GlobalMicroSlatsBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
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
        className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#f8fafc] text-[#090e17] selection:bg-sky-600 selection:text-white min-h-screen flex flex-col relative`}
      >
        {/* Fullsite Interactive MicroSlats Thermal/Fluid Wave Background Effect Across All Pages */}
        <GlobalMicroSlatsBackground
          preset="swell"
          color="#0284c7"
          glintColor="#38bdf8"
          backgroundColor="transparent"
          slatWidth={10}
          slatHeight={26}
          gap={3}
          roundness={0.75}
          scale={1.4}
          speed={0.55}
          direction={250}
          chop={0.45}
          stretch={0.18}
          glint={0.9}
          contrast={1.4}
          perspective={0.6}
          fog={0.3}
          interactive={true}
          cursorStrength={1.5}
          cursorSize={50}
          swirl={0.2}
          trail={1.6}
          lean={0.25}
          intro={true}
          introDuration={1.5}
          opacity={0.65}
          fixed={true}
        />

        <Navigation />
        <div className="flex-1 w-full relative z-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

