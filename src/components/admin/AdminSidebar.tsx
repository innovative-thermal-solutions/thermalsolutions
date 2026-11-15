"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Boxes,
  Image as ImageIcon,
  FolderKanban,
  Award,
  Users,
  Settings,
  HelpCircle,
  Phone,
  Compass,
  Building,
  CheckCircle2,
  ExternalLink,
  LogOut,
  Layers
} from "lucide-react";

const NAV_ITEMS = [
  { name: "Dashboard Overview", href: "/admin", icon: LayoutDashboard },
  { name: "Products & Catalog", href: "/admin/products", icon: Boxes },
  { name: "Product Portfolio", href: "/admin/portfolio", icon: FolderKanban },
  { name: "Capabilities (8 Chapters)", href: "/admin/capabilities", icon: Layers },
  { name: "Quality & Certifications", href: "/admin/quality", icon: Award },
  { name: "ITS Engineering Team", href: "/admin/team", icon: Users },
  { name: "Media Library", href: "/admin/media", icon: ImageIcon },
  { name: "Global Site Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#141f22] border-r border-white/10 text-white flex flex-col justify-between shrink-0 min-h-screen">
      <div>
        {/* Brand Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#01747A] flex items-center justify-center font-bold text-white font-mono text-sm shadow-sm">
              ITS
            </div>
            <div>
              <h1 className="font-serif font-bold text-sm tracking-wide">ITS COOLING</h1>
              <p className="text-[10px] font-mono text-teal-400 uppercase tracking-widest">Enterprise CMS</p>
            </div>
          </div>
        </div>

        {/* Navigation list */}
        <nav className="p-3 space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-mono tracking-wider transition-all ${
                  isActive
                    ? "bg-[#01747A] text-white font-bold shadow-sm"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-teal-400"}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer controls */}
      <div className="p-4 border-t border-white/10 space-y-2">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-mono transition-colors"
        >
          <span className="flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5 text-teal-400" />
            Live Website
          </span>
          <span className="text-[10px] text-teal-300 bg-teal-900/40 px-1.5 py-0.5 rounded">v1.0</span>
        </a>

        <div className="flex items-center justify-between px-3 py-2 text-[11px] font-mono text-slate-400">
          <span>Administrator</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Connected" />
        </div>
      </div>
    </aside>
  );
}

