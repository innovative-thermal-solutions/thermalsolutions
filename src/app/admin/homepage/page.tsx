'use client';

import React, { useState, useEffect } from 'react';
import { 
  Home, Save, RefreshCw, X, Play, FileText, Settings, 
  Layers, Factory, Phone, Eye, ExternalLink, CheckCircle2 
} from 'lucide-react';
import { CMSHomePageContent } from '@/lib/cms/types';

export default function AdminHomepageCMSPage() {
  const [data, setData] = useState<CMSHomePageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<'hero' | 'whoWeAre' | 'workflow' | 'manufacturing' | 'contact'>('hero');
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    fetchHomepageData();
  }, []);

  async function fetchHomepageData() {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/homepage');
      const json = await res.json();
      if (json.homepage) {
        setData(json.homepage);
      }
    } catch (err) {
      console.error('Failed to load homepage CMS data', err);
    } finally {
      setLoading(false);
    }
  }

  function showNotification(type: 'success' | 'error', message: string) {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  }

  async function handleSave(e?: React.FormEvent) {
    if (e) e.preventDefault();
    if (!data) return;

    try {
      setSaving(true);
      const res = await fetch('/api/admin/homepage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ homepage: data }),
      });
      const resData = await res.json();
      if (resData.success) {
        setData(resData.homepage);
        showNotification('success', 'Homepage content updated and published successfully!');
      } else {
        showNotification('error', resData.error || 'Failed to save homepage changes');
      }
    } catch {
      showNotification('error', 'Network error while saving homepage');
    } finally {
      setSaving(false);
    }
  }

  if (loading || !data) {
    return (
      <div className="py-24 text-center text-neutral-500 text-sm">
        <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-3 text-[#01747A]" />
        Loading homepage content manager...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#01747A] tracking-wider mb-1">
            <Home className="w-3.5 h-3.5" />
            <span>Homepage Section Manager</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Homepage Content CMS</h1>
          <p className="text-sm text-neutral-400 mt-1">
            Edit live texts, badges, headlines, video links and call-to-actions across the main landing page.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 text-xs font-mono uppercase tracking-wider rounded-lg transition"
          >
            <Eye className="w-3.5 h-3.5 text-teal-400" />
            <span>Preview Live</span>
          </a>
          <button
            onClick={() => handleSave()}
            disabled={saving}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#01747A] hover:bg-[#015f64] text-white text-xs font-mono uppercase font-bold tracking-wider rounded-lg shadow-sm transition disabled:opacity-50"
          >
            {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            <span>Save All Changes</span>
          </button>
        </div>
      </div>

      {notification && (
        <div
          className={`p-4 rounded-lg flex items-center justify-between text-sm ${
            notification.type === 'success'
              ? 'bg-emerald-950/70 border border-emerald-500/40 text-emerald-200'
              : 'bg-rose-950/70 border border-rose-500/40 text-rose-200'
          }`}
        >
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            {notification.message}
          </span>
          <button onClick={() => setNotification(null)} className="opacity-70 hover:opacity-100">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-neutral-900/60 border border-white/10 rounded-xl">
        <button
          onClick={() => setActiveTab('hero')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition ${
            activeTab === 'hero' ? 'bg-[#01747A] text-white font-bold' : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Play className="w-3.5 h-3.5" />
          <span>1. Hero Section</span>
        </button>
        <button
          onClick={() => setActiveTab('whoWeAre')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition ${
            activeTab === 'whoWeAre' ? 'bg-[#01747A] text-white font-bold' : 'text-neutral-400 hover:text-white'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>2. Who We Are</span>
        </button>
        <button
          onClick={() => setActiveTab('workflow')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition ${
            activeTab === 'workflow' ? 'bg-[#01747A] text-white font-bold' : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>3. 4-Stage Workflow</span>
        </button>
        <button
          onClick={() => setActiveTab('manufacturing')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition ${
            activeTab === 'manufacturing' ? 'bg-[#01747A] text-white font-bold' : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Factory className="w-3.5 h-3.5" />
          <span>4. Manufacturing &amp; FSW</span>
        </button>
        <button
          onClick={() => setActiveTab('contact')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition ${
            activeTab === 'contact' ? 'bg-[#01747A] text-white font-bold' : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Phone className="w-3.5 h-3.5" />
          <span>5. Contact &amp; Footer Callout</span>
        </button>
      </div>

      {/* Tab Panels */}
      <form onSubmit={handleSave} className="space-y-6">
        {/* 1. HERO TAB */}
        {activeTab === 'hero' && (
          <div className="bg-neutral-900/60 border border-white/10 rounded-xl p-6 space-y-5">
            <h2 className="text-base font-semibold text-white flex items-center gap-2">
              <Play className="w-4 h-4 text-[#01747A]" />
              Hero Section (Video Background + Headlines)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-mono uppercase text-neutral-400">Badge Text</label>
                <input
                  type="text"
                  value={data.hero.badge}
                  onChange={e => setData({ ...data, hero: { ...data.hero, badge: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Title Line 1</label>
                <input
                  type="text"
                  value={data.hero.titleLine1}
                  onChange={e => setData({ ...data, hero: { ...data.hero, titleLine1: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Title Line 2 (Highlighted)</label>
                <input
                  type="text"
                  value={data.hero.titleLine2}
                  onChange={e => setData({ ...data, hero: { ...data.hero, titleLine2: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-mono uppercase text-neutral-400">Hero Subtitle</label>
                <input
                  type="text"
                  value={data.hero.subtitle}
                  onChange={e => setData({ ...data, hero: { ...data.hero, subtitle: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Primary Button Label</label>
                <input
                  type="text"
                  value={data.hero.primaryCtaText}
                  onChange={e => setData({ ...data, hero: { ...data.hero, primaryCtaText: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Primary Button Target / Anchor</label>
                <input
                  type="text"
                  value={data.hero.primaryCtaHref}
                  onChange={e => setData({ ...data, hero: { ...data.hero, primaryCtaHref: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-mono uppercase text-neutral-400">Secondary Modal Button Label</label>
                <input
                  type="text"
                  value={data.hero.secondaryCtaText}
                  onChange={e => setData({ ...data, hero: { ...data.hero, secondaryCtaText: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-mono uppercase text-neutral-400">Background Video URL / Path</label>
                <input
                  type="text"
                  value={data.hero.videoUrl || ''}
                  onChange={e => setData({ ...data, hero: { ...data.hero, videoUrl: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                  placeholder="/videos/hero-sequence-loop.mp4"
                />
              </div>
            </div>
          </div>
        )}

        {/* 2. WHO WE ARE TAB */}
        {activeTab === 'whoWeAre' && (
          <div className="bg-neutral-900/60 border border-white/10 rounded-xl p-6 space-y-5">
            <h2 className="text-base font-semibold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#01747A]" />
              Who We Are Editorial Section
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Badge Text</label>
                <input
                  type="text"
                  value={data.whoWeAre.badge}
                  onChange={e => setData({ ...data, whoWeAre: { ...data.whoWeAre, badge: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Location Tag Badge</label>
                <input
                  type="text"
                  value={data.whoWeAre.locationBadge}
                  onChange={e => setData({ ...data, whoWeAre: { ...data.whoWeAre, locationBadge: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-mono uppercase text-neutral-400">Section Headline</label>
                <input
                  type="text"
                  value={data.whoWeAre.headline}
                  onChange={e => setData({ ...data, whoWeAre: { ...data.whoWeAre, headline: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-mono uppercase text-neutral-400">Editorial Paragraph 1</label>
                <textarea
                  rows={3}
                  value={data.whoWeAre.paragraph1}
                  onChange={e => setData({ ...data, whoWeAre: { ...data.whoWeAre, paragraph1: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-mono uppercase text-neutral-400">Editorial Paragraph 2</label>
                <textarea
                  rows={3}
                  value={data.whoWeAre.paragraph2}
                  onChange={e => setData({ ...data, whoWeAre: { ...data.whoWeAre, paragraph2: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">CTA Button Text</label>
                <input
                  type="text"
                  value={data.whoWeAre.ctaText}
                  onChange={e => setData({ ...data, whoWeAre: { ...data.whoWeAre, ctaText: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">CTA Button Link</label>
                <input
                  type="text"
                  value={data.whoWeAre.ctaHref}
                  onChange={e => setData({ ...data, whoWeAre: { ...data.whoWeAre, ctaHref: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>
            </div>
          </div>
        )}

        {/* 3. WORKFLOW TAB */}
        {activeTab === 'workflow' && (
          <div className="bg-neutral-900/60 border border-white/10 rounded-xl p-6 space-y-6">
            <h2 className="text-base font-semibold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#01747A]" />
              4-Stage Engineering Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Section Tag Badge</label>
                <input
                  type="text"
                  value={data.workflow.badge}
                  onChange={e => setData({ ...data, workflow: { ...data.workflow, badge: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Headline</label>
                <input
                  type="text"
                  value={data.workflow.headline}
                  onChange={e => setData({ ...data, workflow: { ...data.workflow, headline: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Headline Highlight</label>
                <input
                  type="text"
                  value={data.workflow.headlineHighlight}
                  onChange={e => setData({ ...data, workflow: { ...data.workflow, headlineHighlight: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Section Subtitle</label>
                <input
                  type="text"
                  value={data.workflow.description}
                  onChange={e => setData({ ...data, workflow: { ...data.workflow, description: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <h3 className="text-xs font-mono uppercase tracking-wider text-teal-300 font-bold mb-4">
                Milestone Steps (01–04)
              </h3>
              <div className="space-y-4">
                {data.workflow.steps.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#01747A] font-bold">
                      <span>STEP {step.step}</span>
                      <span>Card #{idx + 1}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] font-mono uppercase text-neutral-400">Step Title</label>
                        <input
                          type="text"
                          value={step.title}
                          onChange={e => {
                            const updatedSteps = [...data.workflow.steps];
                            updatedSteps[idx] = { ...updatedSteps[idx], title: e.target.value };
                            setData({ ...data, workflow: { ...data.workflow, steps: updatedSteps } });
                          }}
                          className="w-full px-2.5 py-1.5 bg-neutral-900 border border-neutral-700 rounded text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-mono uppercase text-neutral-400">Image Caption</label>
                        <input
                          type="text"
                          value={step.caption}
                          onChange={e => {
                            const updatedSteps = [...data.workflow.steps];
                            updatedSteps[idx] = { ...updatedSteps[idx], caption: e.target.value };
                            setData({ ...data, workflow: { ...data.workflow, steps: updatedSteps } });
                          }}
                          className="w-full px-2.5 py-1.5 bg-neutral-900 border border-neutral-700 rounded text-xs text-white"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-[10px] font-mono uppercase text-neutral-400">Description</label>
                        <textarea
                          rows={2}
                          value={step.description}
                          onChange={e => {
                            const updatedSteps = [...data.workflow.steps];
                            updatedSteps[idx] = { ...updatedSteps[idx], description: e.target.value };
                            setData({ ...data, workflow: { ...data.workflow, steps: updatedSteps } });
                          }}
                          className="w-full px-2.5 py-1.5 bg-neutral-900 border border-neutral-700 rounded text-xs text-white"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4. MANUFACTURING & FSW TAB */}
        {activeTab === 'manufacturing' && (
          <div className="bg-neutral-900/60 border border-white/10 rounded-xl p-6 space-y-5">
            <h2 className="text-base font-semibold text-white flex items-center gap-2">
              <Factory className="w-4 h-4 text-[#01747A]" />
              In-House Friction Stir Welding Video Section
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Title Line 1</label>
                <input
                  type="text"
                  value={data.manufacturing.line1}
                  onChange={e => setData({ ...data, manufacturing: { ...data.manufacturing, line1: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Title Line 2</label>
                <input
                  type="text"
                  value={data.manufacturing.line2}
                  onChange={e => setData({ ...data, manufacturing: { ...data.manufacturing, line2: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Title Line 3</label>
                <input
                  type="text"
                  value={data.manufacturing.line3}
                  onChange={e => setData({ ...data, manufacturing: { ...data.manufacturing, line3: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Title Line 4 (Highlighted)</label>
                <input
                  type="text"
                  value={data.manufacturing.line4}
                  onChange={e => setData({ ...data, manufacturing: { ...data.manufacturing, line4: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-mono uppercase text-neutral-400">Subtitle Description</label>
                <textarea
                  rows={2}
                  value={data.manufacturing.subtitle}
                  onChange={e => setData({ ...data, manufacturing: { ...data.manufacturing, subtitle: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">CTA Button Text</label>
                <input
                  type="text"
                  value={data.manufacturing.ctaText}
                  onChange={e => setData({ ...data, manufacturing: { ...data.manufacturing, ctaText: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">CTA Button Link</label>
                <input
                  type="text"
                  value={data.manufacturing.ctaHref}
                  onChange={e => setData({ ...data, manufacturing: { ...data.manufacturing, ctaHref: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-mono uppercase text-neutral-400">Background Video URL / Path</label>
                <input
                  type="text"
                  value={data.manufacturing.videoUrl || ''}
                  onChange={e => setData({ ...data, manufacturing: { ...data.manufacturing, videoUrl: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white"
                  placeholder="/videos/designed-built-tested-loop.mp4"
                />
              </div>
            </div>
          </div>
        )}

        {/* 5. CONTACT TAB */}
        {activeTab === 'contact' && (
          <div className="bg-neutral-900/60 border border-white/10 rounded-xl p-6 space-y-5">
            <h2 className="text-base font-semibold text-white flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#01747A]" />
              Homepage Contact &amp; Next Breakthrough Callout
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-mono uppercase text-neutral-400">Callout Badge</label>
                <input
                  type="text"
                  value={data.contact.badge}
                  onChange={e => setData({ ...data, contact: { ...data.contact, badge: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Headline</label>
                <input
                  type="text"
                  value={data.contact.headline}
                  onChange={e => setData({ ...data, contact: { ...data.contact, headline: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Subtitle</label>
                <input
                  type="text"
                  value={data.contact.subtitle}
                  onChange={e => setData({ ...data, contact: { ...data.contact, subtitle: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">CTA Button Text</label>
                <input
                  type="text"
                  value={data.contact.ctaText}
                  onChange={e => setData({ ...data, contact: { ...data.contact, ctaText: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Direct Email</label>
                <input
                  type="text"
                  value={data.contact.email}
                  onChange={e => setData({ ...data, contact: { ...data.contact, email: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Direct Phone</label>
                <input
                  type="text"
                  value={data.contact.phone}
                  onChange={e => setData({ ...data, contact: { ...data.contact, phone: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Facility Operating Hours</label>
                <input
                  type="text"
                  value={data.contact.hours}
                  onChange={e => setData({ ...data, contact: { ...data.contact, hours: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-mono uppercase text-neutral-400">Guelph Address</label>
                <input
                  type="text"
                  value={data.contact.address}
                  onChange={e => setData({ ...data, contact: { ...data.contact, address: e.target.value } })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#01747A] hover:bg-[#015f64] text-white text-xs font-mono uppercase font-bold tracking-wider rounded-lg shadow-sm transition disabled:opacity-50"
          >
            {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            <span>Save All Homepage Sections</span>
          </button>
        </div>
      </form>
    </div>
  );
}
