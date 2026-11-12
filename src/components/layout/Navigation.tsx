"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
    { name: "Industries", href: "/industries" },
    { name: "Quality", href: "/quality" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Top Status & Telemetry Bar */}
      <div className="hidden lg:block bg-[#0f1719] text-[#00747a] py-2 px-6 lg:px-12 text-[11px] font-mono border-b border-[#ffffff16]">
        <div className="max-w-[1450px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#00747a] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00747a]" />
              <span>ISO 9001:2015 CERTIFIED</span>
            </span>
            <span className="text-[#00747a]/60">•</span>
            <span className="text-[#00747a] font-medium">GUELPH, ONTARIO, CANADA</span>
            <span className="text-[#00747a]/60">•</span>
            <span className="text-[#00747a] font-semibold">100% CUSTOM · ZERO SHELF INVENTORY</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 text-[#00747a] hover:text-white transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-[#00747a]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-[#00747a]/60">•</span>
            <a
              href={`mailto:${COMPANY_INFO.salesEmail}`}
              className="flex items-center gap-1.5 text-[#00747a] hover:text-white transition-colors font-medium"
            >
              <Mail className="w-3 h-3 text-[#00747a]" />
              <span>Sales: {COMPANY_INFO.salesEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Reference Themed Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0f1719]/98 backdrop-blur-xl py-3 border-b border-[#ffffff19] shadow-md text-[#e9f0ef]"
            : "bg-[#0f1719] py-4 border-b border-[#ffffff16] text-[#e9f0ef]"
        }`}
      >
        <div className="max-w-[1450px] mx-auto px-6 lg:px-10 flex justify-between items-center gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3.5 group shrink-0 py-1">
            <Image
              src="/images/logo/its-logo-navbar.svg"
              alt="Innovative Thermal Solutions - ITS Cooling Logo"
              width={260}
              height={70}
              priority
              className="h-14 sm:h-16 lg:h-16 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
            />
          </Link>

          {/* Desktop Nav Links & Interactive Dropdowns */}
          <div className="hidden xl:flex items-center gap-6 2xl:gap-8 text-[13px] font-sans">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/products"
                className={`flex items-center gap-1 text-[13px] font-semibold transition-colors py-2 ${
                  pathname.startsWith("/products") ? "text-[#00747a]" : "text-[#00747a] hover:text-white"
                }`}
              >
                <span>Products</span>
                <ChevronDown className="w-3 h-3 text-[#00747a]" />
              </Link>

              <AnimatePresence>
                {activeDropdown === "products" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 w-80 p-3 bg-[#182427] border border-[#ffffff22] rounded-lg shadow-xl z-50 text-[#e9f0ef]"
                  >
                    <div className="space-y-1">
                      {productsMenu.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-start gap-3 p-2.5 rounded-md hover:bg-[#1f2e32] transition-colors group"
                          >
                            <div className="p-2 rounded bg-[#0f1719] text-[#00747a] group-hover:bg-[#00747a] group-hover:text-[#0f1719] transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-white group-hover:text-[#00747a] transition-colors">
                                {item.name}
                              </div>
                              <div className="text-[11px] text-[#9da8a9] leading-tight">
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

            {/* Portfolio Link */}
            <Link
              href="/portfolio"
              className={`text-[13px] font-semibold transition-colors relative py-1 ${
                pathname.startsWith("/portfolio") ? "text-[#00747a]" : "text-[#00747a] hover:text-white"
              }`}
            >
              Portfolio
              {pathname.startsWith("/portfolio") && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00747a]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {/* Capabilities Link */}
            <Link
              href="/capabilities"
              className={`text-[13px] font-semibold transition-colors relative py-1 ${
                pathname.startsWith("/capabilities") ? "text-[#00747a]" : "text-[#00747a] hover:text-white"
              }`}
            >
              Capabilities
              {pathname.startsWith("/capabilities") && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00747a]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {/* Technologies Dropdown (Moved after Capabilities) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("technologies")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/technologies"
                className={`flex items-center gap-1 text-[13px] font-semibold transition-colors py-2 ${
                  pathname.startsWith("/technologies") ? "text-[#00747a]" : "text-[#00747a] hover:text-white"
                }`}
              >
                <span>Technologies</span>
                <ChevronDown className="w-3 h-3 text-[#00747a]" />
              </Link>

              <AnimatePresence>
                {activeDropdown === "technologies" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 w-80 p-3 bg-[#182427] border border-[#ffffff22] rounded-lg shadow-xl z-50 text-[#e9f0ef]"
                  >
                    <div className="space-y-1">
                      {technologiesMenu.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-start gap-3 p-2.5 rounded-md hover:bg-[#1f2e32] transition-colors group"
                          >
                            <div className="p-2 rounded bg-[#0f1719] text-[#00747a] group-hover:bg-[#00747a] group-hover:text-[#0f1719] transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-white group-hover:text-[#00747a] transition-colors">
                                {item.name}
                              </div>
                              <div className="text-[11px] text-[#9da8a9] leading-tight">
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

            {/* Remaining Main Links: Industries, Quality, Case Studies, About */}
            {mainLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] font-semibold transition-colors relative py-1 ${
                    isActive ? "text-[#00747a]" : "text-[#00747a] hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00747a]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right CTA matching .btn of reference */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-between gap-3 px-5 py-2.5 bg-[#00747a] hover:bg-[#005d62] text-white text-[13px] font-semibold tracking-normal rounded-[3px] transition-all transform hover:-translate-y-0.5 shadow-sm"
            >
              <span>Talk to an Engineer</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 text-[#cfdbd8] hover:text-[#00747a] transition-colors cursor-pointer"
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
            className="xl:hidden bg-[#182427] border-b border-[#ffffff22] px-6 py-8 overflow-y-auto max-h-[85vh] shadow-2xl text-[#e9f0ef]"
          >
            <div className="flex flex-col space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                Navigation
              </span>
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-slate-900 hover:text-sky-600"
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

              <Link
                href="/portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-slate-900 hover:text-sky-600 pt-1"
              >
                Portfolio
              </Link>

              <Link
                href="/capabilities"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-slate-900 hover:text-sky-600 pt-1"
              >
                Capabilities
              </Link>

              <Link
                href="/technologies"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-slate-900 hover:text-sky-600 pt-1"
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
