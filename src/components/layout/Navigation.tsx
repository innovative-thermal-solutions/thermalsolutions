"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ShieldCheck, ChevronRight, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY_INFO } from "@/data/companyContent";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Technologies", href: "/technologies" },
    { name: "Products", href: "/products" },
    { name: "Capabilities", href: "/capabilities" },
    { name: "Facility", href: "/facility" },
    { name: "Industries", href: "/industries" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Team", href: "/team" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Top Telemetry Bar */}
      <div className="hidden lg:block bg-black/90 border-b border-white/5 py-1.5 px-6 lg:px-12 text-[11px] font-mono text-gray-400">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-teal-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ISO 9001:2015 CERTIFIED</span>
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-300">GUELPH, ONTARIO, CANADA</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400">50+ YRS COMBINED ENGINEERING EXP</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3 h-3 text-teal-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-gray-500">•</span>
            <a href={`mailto:${COMPANY_INFO.salesEmail}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3 h-3 text-teal-400" />
              <span>Sales: {COMPANY_INFO.salesEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl py-3.5 border-b border-white/10 shadow-2xl"
            : "bg-gradient-to-b from-black/90 to-transparent py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex justify-between items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-teal-500 to-teal-800 flex items-center justify-center font-mono font-bold text-black text-sm tracking-tighter shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform">
              ITS
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl tracking-tight text-white leading-tight">
                INNOVATIVE <span className="text-teal-400">THERMAL</span>
              </span>
              <span className="text-[10px] font-mono tracking-[0.25em] text-gray-400 uppercase leading-none">
                SOLUTIONS INC.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-5 2xl:gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] 2xl:text-xs uppercase tracking-[0.14em] font-medium transition-colors relative py-1 whitespace-nowrap ${
                    isActive ? "text-teal-400 font-semibold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-teal-400"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest px-4 py-2.5 2xl:px-5 bg-white text-black hover:bg-teal-400 transition-colors shadow-lg hover:shadow-teal-400/20 whitespace-nowrap"
            >
              <span>Talk to an Engineer</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 text-white hover:text-teal-400 transition-colors"
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
            className="xl:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 px-6 py-8 flex flex-col gap-5 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base uppercase tracking-widest py-2 border-b border-white/5 transition-colors ${
                      isActive ? "text-teal-400 font-bold" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3 text-xs font-mono text-gray-400">
              <div className="flex items-center gap-2 text-teal-400">
                <ShieldCheck className="w-4 h-4" />
                <span>ISO 9001:2015 Certified Manufacturing</span>
              </div>
              <p>Direct: {COMPANY_INFO.phone}</p>
              <p>Sales: {COMPANY_INFO.salesEmail}</p>
              <p>Engineering: {COMPANY_INFO.engineeringEmail}</p>
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center text-xs font-mono font-bold uppercase tracking-widest py-3.5 bg-teal-400 text-black hover:bg-white transition-colors"
            >
              Talk to an Engineer
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
