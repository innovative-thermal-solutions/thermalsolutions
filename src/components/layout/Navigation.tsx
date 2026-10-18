"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  ShieldCheck,
  ChevronDown,
  ArrowUpRight,
  Mail,
  Cpu,
  Layers,
  Flame,
  Wind,
  Activity,
  Droplets,
  Factory,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY_INFO } from "@/data/companyContent";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const technologiesMenu = [
    {
      name: "Liquid Cooling",
      href: "/technologies/liquid-cooling",
      desc: "Micro-channel cold plates & direct flow cavities",
      icon: Droplets,
    },
    {
      name: "Air Cooling",
      href: "/technologies/air-cooling",
      desc: "Extruded, bonded-fin & skived heat sinks",
      icon: Wind,
    },
    {
      name: "Friction Stir Welding",
      href: "/capabilities/friction-stir-welding",
      desc: "Hermetic solid-state joints without filler metals",
      icon: Factory,
    },
    {
      name: "Thermal Engineering & CFD",
      href: "/technologies/thermal-engineering",
      desc: "Finite-element flow simulation & topology design",
      icon: Activity,
    },
  ];

  const productsMenu = [
    {
      name: "Liquid Cold Plates",
      href: "/products/cold-plates",
      desc: "Machined fin, pressed-tube & vacuum brazed",
      icon: Droplets,
    },
    {
      name: "Air-Cooled Heat Sinks",
      href: "/products/heat-sinks",
      desc: "High aspect-ratio bonded & skived arrays",
      icon: Wind,
    },
    {
      name: "Busbars & Power Interconnects",
      href: "/products/busbar",
      desc: "Laminated low-inductance bus conductors",
      icon: Cpu,
    },
    {
      name: "Embedded Heat Pipes",
      href: "/products/heat-pipes",
      desc: "Two-phase isothermal spreading assemblies",
      icon: Flame,
    },
  ];

  const mainLinks = [
    { name: "Capabilities", href: "/capabilities/cnc-machining" },
    { name: "Industries", href: "/industries" },
    { name: "Quality", href: "/quality" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Top Status & Telemetry Bar - Clean Light Engineering Theme */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 py-1.5 px-6 lg:px-12 text-[11px] font-mono border-b border-slate-800">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-sky-400 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>ISO 9001:2015 CERTIFIED</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 font-medium">GUELPH, ONTARIO, CANADA</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">TURNKEY ADVANCED THERMAL SYSTEMS</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-sky-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-600">•</span>
            <a
              href={`mailto:${COMPANY_INFO.salesEmail}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-sky-300 transition-colors"
            >
              <Mail className="w-3 h-3 text-sky-400" />
              <span>Sales: {COMPANY_INFO.salesEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl py-3 border-b border-slate-200/90 shadow-sm"
            : "bg-white/90 backdrop-blur-md py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex justify-between items-center gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3.5 group shrink-0">
            <div className="w-9 h-9 rounded-md bg-slate-950 text-white flex items-center justify-center font-extrabold text-sm tracking-tighter group-hover:bg-sky-600 transition-colors shadow-sm">
              ITS
            </div>
            <div className="flex flex-col border-l-2 border-slate-200 pl-3">
              <span className="font-extrabold text-xs uppercase tracking-[0.16em] text-slate-950 leading-tight">
                Innovative
              </span>
              <span className="text-[11px] uppercase tracking-[0.16em] text-slate-500 font-mono font-semibold leading-tight">
                Thermal Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links & Interactive Dropdowns */}
          <div className="hidden xl:flex items-center gap-5 2xl:gap-7">
            {/* Technologies Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("technologies")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/technologies"
                className={`flex items-center gap-1 text-xs uppercase tracking-[0.12em] font-semibold transition-colors py-2 ${
                  pathname.startsWith("/technologies") ? "text-sky-600" : "text-slate-700 hover:text-slate-950"
                }`}
              >
                <span>Technologies</span>
                <ChevronDown className="w-3 h-3" />
              </Link>

              <AnimatePresence>
                {activeDropdown === "technologies" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 w-80 p-3 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-xl shadow-xl z-50"
                  >
                    <div className="space-y-1">
                      {technologiesMenu.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                          >
                            <div className="p-2 rounded-md bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                                {item.name}
                              </div>
                              <div className="text-[11px] text-slate-500 leading-tight">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/products"
                className={`flex items-center gap-1 text-xs uppercase tracking-[0.12em] font-semibold transition-colors py-2 ${
                  pathname.startsWith("/products") ? "text-sky-600" : "text-slate-700 hover:text-slate-950"
                }`}
              >
                <span>Products</span>
                <ChevronDown className="w-3 h-3" />
              </Link>

              <AnimatePresence>
                {activeDropdown === "products" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 w-80 p-3 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-xl shadow-xl z-50"
                  >
                    <div className="space-y-1">
                      {productsMenu.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                          >
                            <div className="p-2 rounded-md bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                                {item.name}
                              </div>
                              <div className="text-[11px] text-slate-500 leading-tight">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Main Links */}
            {mainLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.12em] font-semibold transition-colors relative py-1 ${
                    isActive ? "text-sky-600" : "text-slate-700 hover:text-slate-950"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-sky-600"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="shine-sweep inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] px-5 py-2.5 bg-slate-950 text-white hover:bg-sky-600 transition-all rounded-md shadow-xs hover:shadow-md group"
            >
              <span>Talk to an Engineer</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 text-slate-800 hover:text-sky-600 transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-6 py-8 overflow-y-auto max-h-[85vh] shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                Navigation
              </span>
              <Link
                href="/technologies"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-slate-900 hover:text-sky-600"
              >
                Technologies
              </Link>
              <div className="pl-4 space-y-2 border-l border-slate-200">
                {technologiesMenu.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-slate-600 hover:text-sky-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-slate-900 hover:text-sky-600 pt-2"
              >
                Products
              </Link>
              <div className="pl-4 space-y-2 border-l border-slate-200">
                {productsMenu.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-slate-600 hover:text-sky-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {mainLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold text-slate-900 hover:text-sky-600 pt-1"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-6 border-t border-slate-200">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-slate-950 text-white font-bold text-xs uppercase tracking-wider rounded-md"
                >
                  <span>Talk to an Engineer</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
