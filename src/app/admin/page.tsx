import Link from "next/link";
import {
  Boxes,
  Layers,
  Award,
  Users,
  Image as ImageIcon,
  Settings,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  FileCheck,
  Clock,
  Sparkles
} from "lucide-react";
import { getCMSProducts, getCMSCapabilities, getCMSTeam, getCMSMediaAssets, getCMSSiteSettings } from "@/lib/cms/store";

export default function AdminDashboardPage() {
  const products = getCMSProducts();
  const capabilities = getCMSCapabilities();
  const team = getCMSTeam();
  const media = getCMSMediaAssets();
  const settings = getCMSSiteSettings();

  const stats = [
    { label: "Active Products", value: products.length, icon: Boxes, href: "/admin/products", change: "+13 Catalog Items" },
    { label: "Capabilities", value: capabilities.length, icon: Layers, href: "/admin/capabilities", change: "8 Live Chapters" },
    { label: "Team Members", value: team.length, icon: Users, href: "/admin/team", change: "Full Engineering Roster" },
    { label: "Media Assets", value: media.length, icon: ImageIcon, href: "/admin/media", change: "Central Library" },
  ];

  return (
    <div className="p-8 lg:p-12 max-w-7xl mx-auto w-full space-y-10">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#01747A] font-bold">
            CENTRALIZED MANAGEMENT DASHBOARD
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-medium text-slate-900 mt-1">
            ITS Cooling Platform Control
          </h1>
          <p className="text-slate-600 text-sm mt-1 font-normal">
            Directly modify products, capabilities, team rosters, quality policies, and global site content.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-mono tracking-wider font-semibold shadow-xs transition-colors"
          >
            <span>View Live Site</span>
            <ArrowUpRight className="w-4 h-4 text-[#01747A]" />
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            <span>Database Connected</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.label}
              href={s.href}
              className="bg-white rounded-2xl border border-[#d8dedf] p-6 shadow-sm hover:shadow-md hover:border-[#01747A]/50 transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">{s.label}</span>
                <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-[#01747A]/10 text-[#01747A] flex items-center justify-center transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-slate-900 mb-1">{s.value}</div>
                <div className="text-xs font-mono text-teal-600 font-medium">{s.change}</div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Module Shortcuts */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-[#d8dedf] p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-lg font-serif font-medium text-slate-900">Content Management Modules</h2>
              <p className="text-xs text-slate-500 font-mono">Select a section below to update live website data</p>
            </div>
            <Sparkles className="w-5 h-5 text-[#01747A]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/admin/products"
              className="p-5 rounded-xl border border-slate-200 hover:border-[#01747A] hover:bg-[#f8faf9] transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#01747A] flex items-center justify-center shrink-0">
                <Boxes className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-medium text-slate-900 text-sm">Products &amp; Portfolio</h3>
                <p className="text-xs text-slate-500 mt-1">Manage 13 air &amp; liquid cooling solutions, CAD models, and specs.</p>
              </div>
            </Link>

            <Link
              href="/admin/capabilities"
              className="p-5 rounded-xl border border-slate-200 hover:border-[#01747A] hover:bg-[#f8faf9] transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#01747A] flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-medium text-slate-900 text-sm">Capabilities (8 Chapters)</h3>
                <p className="text-xs text-slate-500 mt-1">Edit simulation, CNC milling, FSW, quality inspection, and photos.</p>
              </div>
            </Link>

            <Link
              href="/admin/quality"
              className="p-5 rounded-xl border border-slate-200 hover:border-[#01747A] hover:bg-[#f8faf9] transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#01747A] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-medium text-slate-900 text-sm">Quality &amp; ISO 9001</h3>
                <p className="text-xs text-slate-500 mt-1">Update Quality Policy, CEO statements, and auditor credentials.</p>
              </div>
            </Link>

            <Link
              href="/admin/team"
              className="p-5 rounded-xl border border-slate-200 hover:border-[#01747A] hover:bg-[#f8faf9] transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#01747A] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-medium text-slate-900 text-sm">ITS Engineering Team</h3>
                <p className="text-xs text-slate-500 mt-1">Manage leadership bios, engineers, photos, and contact links.</p>
              </div>
            </Link>

            <Link
              href="/admin/media"
              className="p-5 rounded-xl border border-slate-200 hover:border-[#01747A] hover:bg-[#f8faf9] transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#01747A] flex items-center justify-center shrink-0">
                <ImageIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-medium text-slate-900 text-sm">Media Library</h3>
                <p className="text-xs text-slate-500 mt-1">Upload and replace images, diagrams, video assets, and documents.</p>
              </div>
            </Link>

            <Link
              href="/admin/settings"
              className="p-5 rounded-xl border border-slate-200 hover:border-[#01747A] hover:bg-[#f8faf9] transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#01747A] flex items-center justify-center shrink-0">
                <Settings className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-medium text-slate-900 text-sm">Global Settings</h3>
                <p className="text-xs text-slate-500 mt-1">Company address, phone, emails, top announcement, and CTA buttons.</p>
              </div>
            </Link>
          </div>
        </div>

        {/* System & Global Status */}
        <div className="bg-white rounded-2xl border border-[#d8dedf] p-8 shadow-sm space-y-6 flex flex-col justify-between">
          <div>
            <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-lg font-serif font-medium text-slate-900">Current Deployment</h2>
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>

            <div className="mt-6 space-y-4 text-xs font-mono">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 block mb-1 uppercase text-[10px]">Headquarters</span>
                <span className="text-slate-800 font-semibold">{settings.address}, {settings.city}, {settings.country}</span>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 block mb-1 uppercase text-[10px]">Top Bar Announcement</span>
                <span className="text-slate-800 font-semibold">{settings.announcementText}</span>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 block mb-1 uppercase text-[10px]">FSW Headline CTA</span>
                <span className="text-slate-800 font-semibold">{settings.fswHeroHeadline} &rarr; {settings.fswHeroButtonText}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <Link
              href="/admin/settings"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#01747A] hover:bg-[#004d52] text-white text-xs font-mono font-semibold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Edit Global Configuration</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
