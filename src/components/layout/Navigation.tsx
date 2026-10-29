"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PillNav, PillNavItem } from "@/components/ui/PillNav";

export function Navigation() {
  const pathname = usePathname();

  const navItems: PillNavItem[] = [
    { label: "Home", href: "/" },
    { label: "Technologies", href: "/technologies" },
    { label: "Products", href: "/products" },
    { label: "Capabilities", href: "/capabilities/cnc-machining" },
    { label: "Industries", href: "/industries" },
    { label: "Quality", href: "/quality" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const matchedItem = navItems.find((item) => {
    if (!item.href) return false;
    if (item.href === "/") return pathname === "/";
    return pathname.startsWith(item.href);
  });

  const activeHref = matchedItem ? matchedItem.href : pathname;

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 flex items-center justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto max-w-[1440px] flex items-center justify-center">
        <PillNav
          logo="/favicon.svg"
          logoAlt="Innovative Thermal Solutions"
          logoHref="/"
          items={navItems}
          activeHref={activeHref}
          linkComponent={Link}
          theme="light"
          layout="split"
          itemStyle="pill"
          hoverEffect="fill"
          indicator="dot"
          size="md"
          surface="glass"
          highlightColor="#0284c7"
          highlightTextColor="#ffffff"
        />
      </div>
    </header>
  );
}
