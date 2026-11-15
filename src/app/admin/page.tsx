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
  Sparkles,
  Factory,
  HelpCircle,
  Compass
} from "lucide-react";
import { 
  getCMSProducts, 
  getCMSCapabilities, 
  getCMSTeam, 
  getCMSMediaAssets, 
  getCMSSiteSettings,
  getCMSCaseStudies 
} from "@/lib/cms/store";

export default function AdminDashboardPage() {
  const products = getCMSProducts();
  const capabilities = getCMSCapabilities();
  const team = getCMSTeam();
  const media = getCMSMediaAssets();
  const settings = getCMSSiteSettings();
  const caseStudies = getCMSCaseStudies();

  const stats = [
    { label: "Active Products", value: products.length, icon: Boxes, href: "/admin/products", change: "+13 Catalog Items" },
    { label: "Capabilities", value: capabilities.length, icon: Layers, href: "/admin/capabilities", change: "8 Live Chapters" },
    { label: "Team Members", value: team.length, icon: Users, href: "/admin/team", change: "Full Engineering Roster" },
    { label: "Media Assets", value: media.length, icon: ImageIcon, href: "/admin/media", change: "Central Library" },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto w-full">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#01747A] font-bold">
            CENTRALIZED MANAGEMENT DASHBOARD
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-1">
            ITS Cooling Platform Control
          </h1>
          <p className="text-neutral-400 text-sm mt-1 font-normal">
            Directly modify products, capabilities, team rosters, quality policies, and global site content.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs font-mono tracking-wider font-semibold shadow-xs transition-colors"
          >
            <span>View Live Site</span>
            <ArrowUpRight className="w-4 h-4 text-[#01747A]" />
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 text-xs font-mono font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            <span>Database Connected</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.label}
              href={s.href}
              className="bg-neutral-900/60 rounded-xl border border-white/10 p-5 shadow-sm hover:border-[#01747A] hover:bg-neutral-900 transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">{s.label}</span>
                <div className="w-9 h-9 rounded-lg bg-neutral-800 text-[#01747A] group-hover:bg-[#01747A] group-hover:text-white flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-xs font-mono text-teal-400 font-medium">{s.change}</div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Module Shortcuts */}
        <div className="lg:col-span-2 bg-neutral-900/60 rounded-xl border border-white/10 p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h2 className="text-base font-bold text-white">Content Management Modules</h2>
              <p className="text-xs text-neutral-400 font-mono">Select a section below to update live website data</p>
            </div>
            <Sparkles className="w-4 h-4 text-[#01747A]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/admin/products"
              className="p-4 rounded-xl border border-white/5 bg-neutral-950/60 hover:border-[#01747A] hover:bg-neutral-900 transition-all flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-800 text-[#01747A] flex items-center justify-center shrink-0">
                <Boxes className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Products &amp; Portfolio</h3>
                <p className="text-xs text-neutral-400 mt-0.5">Manage 13 air &amp; liquid cooling solutions, CAD models, and specs.</p>
              </div>
            </Link>

            <Link
              href="/admin/capabilities"
              className="p-4 rounded-xl border border-white/5 bg-neutral-950/60 hover:border-[#01747A] hover:bg-neutral-900 transition-all flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-800 text-[#01747A] flex items-center justify-center shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Capabilities (8 Chapters)</h3>
                <p className="text-xs text-neutral-400 mt-0.5">Edit simulation, CNC milling, FSW, quality inspection, and photos.</p>
              </div>
            </Link>

            <Link
              href="/admin/quality"
              className="p-4 rounded-xl border border-white/5 bg-neutral-950/60 hover:border-[#01747A] hover:bg-neutral-900 transition-all flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-800 text-[#01747A] flex items-center justify-center shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Quality &amp; ISO 9001</h3>
                <p className="text-xs text-neutral-400 mt-0.5">Update Quality Policy, CEO statements, and auditor credentials.</p>
              </div>
            </Link>

            <Link
              href="/admin/case-studies"
              className="p-4 rounded-xl border border-white/5 bg-neutral-950/60 hover:border-[#01747A] hover:bg-neutral-900 transition-all flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-800 text-[#01747A] flex items-center justify-center shrink-0">
                <FileCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Case Studies</h3>
                <p className="text-xs text-neutral-400 mt-0.5">Edit documented engineering metrics, temp drops, and CFD models.</p>
              </div>
            </Link>

            <Link
              href="/admin/industries"
              className="p-4 rounded-xl border border-white/5 bg-neutral-950/60 hover:border-[#01747A] hover:bg-neutral-900 transition-all flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-800 text-[#01747A] flex items-center justify-center shrink-0">
                <Factory className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Industries Manager</h3>
                <p className="text-xs text-neutral-400 mt-0.5">Manage 5 industry solutions, technical challenges, and approaches.</p>
              </div>
            </Link>

            <Link
              href="/admin/team"
              className="p-4 rounded-xl border border-white/5 bg-neutral-950/60 hover:border-[#01747A] hover:bg-neutral-900 transition-all flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-800 text-[#01747A] flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">ITS Engineering Team</h3>
                <p className="text-xs text-neutral-400 mt-0.5">Manage leadership bios, engineers, photos, and contact links.</p>
              </div>
            </Link>

            <Link
              href="/admin/faqs"
              className="p-4 rounded-xl border border-white/5 bg-neutral-950/60 hover:border-[#01747A] hover:bg-neutral-900 transition-all flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-800 text-[#01747A] flex items-center justify-center shrink-0">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">FAQ Manager</h3>
                <p className="text-xs text-neutral-400 mt-0.5">Update frequently asked technical questions and engineering answers.</p>
              </div>
            </Link>

            <Link
              href="/admin/navigation"
              className="p-4 rounded-xl border border-white/5 bg-neutral-950/60 hover:border-[#01747A] hover:bg-neutral-900 transition-all flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-800 text-[#01747A] flex items-center justify-center shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Navigation Manager</h3>
                <p className="text-xs text-neutral-400 mt-0.5">Update header links, menu ordering, and dropdown items.</p>
              </div>
            </Link>

            <Link
              href="/admin/media"
              className="p-4 rounded-xl border border-white/5 bg-neutral-950/60 hover:border-[#01747A] hover:bg-neutral-900 transition-all flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-800 text-[#01747A] flex items-center justify-center shrink-0">
                <ImageIcon className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Media Library</h3>
                <p className="text-xs text-neutral-400 mt-0.5">Upload and replace images, diagrams, video assets, and documents.</p>
              </div>
            </Link>

            <Link
              href="/admin/settings"
              className="p-4 rounded-xl border border-white/5 bg-neutral-950/60 hover:border-[#01747A] hover:bg-neutral-900 transition-all flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-800 text-[#01747A] flex items-center justify-center shrink-0">
                <Settings className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Global Settings</h3>
                <p className="text-xs text-neutral-400 mt-0.5">Company address, phone, emails, top announcement, and CTA buttons.</p>
              </div>
            </Link>
          </div>
        </div>

        {/* System Deployment Panel */}
        <div className="space-y-4">
          <div className="bg-neutral-900/60 rounded-xl border border-white/10 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h2 className="text-sm font-bold text-white">Current Deployment</h2>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-neutral-950 border border-white/5">
                <span className="text-neutral-500 block font-mono text-[10px] uppercase">Headquarters</span>
                <span className="font-medium text-neutral-200 mt-0.5 block">{settings.address}, {settings.city}, {settings.country}</span>
              </div>

              <div className="p-3 rounded-lg bg-neutral-950 border border-white/5">
                <span className="text-neutral-500 block font-mono text-[10px] uppercase">Top Bar Announcement</span>
                <span className="font-medium text-neutral-200 mt-0.5 block font-mono text-[11px]">{settings.announcementText}</span>
              </div>

              <div className="p-3 rounded-lg bg-neutral-950 border border-white/5">
                <span className="text-neutral-500 block font-mono text-[10px] uppercase">FSW Headline CTA</span>
                <span className="font-medium text-neutral-200 mt-0.5 block font-mono text-[11px]">{settings.fswHeroHeadline} &rarr; {settings.fswHeroButtonText}</span>
              </div>
            </div>

            <Link
              href="/admin/settings"
              className="w-full py-2 px-3 bg-[#01747A] hover:bg-[#015f64] text-white text-xs font-mono tracking-wider font-semibold rounded-lg text-center block transition-colors"
            >
              EDIT GLOBAL CONFIGURATION
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
