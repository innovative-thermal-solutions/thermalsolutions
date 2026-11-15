'use client';

import React, { useState, useEffect } from 'react';
import { 
  Settings, Save, RefreshCw, X, Globe, Mail, Phone, MapPin, Share2
} from 'lucide-react';
import { CMSSiteSettings } from '@/lib/cms/types';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<CMSSiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    fetchSettings();
  }, []);

  async function fetchSettings() {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/settings');
      const data = await res.json();
      if (data.settings) {
        setSettings(data.settings);
      }
    } catch (err) {
      console.error('Failed to load settings', err);
    } finally {
      setLoading(false);
    }
  }

  function showNotification(type: 'success' | 'error', message: string) {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!settings) return;

    try {
      setSaving(true);
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ settings })
      });
      const data = await res.json();
      if (data.success) {
        showNotification('success', 'Global site settings saved successfully!');
      } else {
        showNotification('error', data.error || 'Failed to save settings');
      }
    } catch {
      showNotification('error', 'Network error');
    } finally {
      setSaving(false);
    }
  }

  if (loading || !settings) {
    return (
      <div className="py-20 text-center text-neutral-500 text-sm">
        <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-[#01747A]" />
        Loading settings...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#01747A] tracking-wider mb-1">
            <Settings className="w-3.5 h-3.5" />
            <span>Site Configuration</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Global Settings & Contact CMS</h1>
          <p className="text-sm text-neutral-400 mt-1">
            Configure announcement bar, phone numbers, Guelph facility address, and contact email.
          </p>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 px-5 py-2 bg-[#01747A] hover:bg-[#015f64] text-white text-sm font-medium rounded-lg shadow-sm transition disabled:opacity-50"
        >
          {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          <span>Save Settings</span>
        </button>
      </div>

      {notification && (
        <div className={`p-4 rounded-lg flex items-center justify-between text-sm ${
          notification.type === 'success' 
            ? 'bg-emerald-950/70 border border-emerald-500/40 text-emerald-200' 
            : 'bg-rose-950/70 border border-rose-500/40 text-rose-200'
        }`}>
          <span>{notification.message}</span>
          <button onClick={() => setNotification(null)} className="opacity-70 hover:opacity-100">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Announcement Bar */}
        <div className="bg-neutral-900/60 border border-white/10 rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-white flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#01747A]" />
              Top Announcement Bar
            </h2>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.announcementVisible}
                onChange={e => setSettings({
                  ...settings,
                  announcementVisible: e.target.checked
                })}
                className="rounded bg-neutral-950 border-neutral-800 text-[#01747A] focus:ring-0"
              />
              <span className="text-xs text-neutral-300">Visible</span>
            </label>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono uppercase text-neutral-400">Announcement Text</label>
            <input
              type="text"
              value={settings.announcementText || ''}
              onChange={e => setSettings({
                ...settings,
                announcementText: e.target.value
              })}
              className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-neutral-900/60 border border-white/10 rounded-xl p-6 space-y-4">
          <h2 className="text-base font-semibold text-white flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#01747A]" />
            Company & Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-neutral-400">Company Name</label>
              <input
                type="text"
                value={settings.companyName}
                onChange={e => setSettings({ ...settings, companyName: e.target.value })}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-neutral-400">Official Contact Email</label>
              <input
                type="email"
                value={settings.email}
                onChange={e => setSettings({ ...settings, email: e.target.value })}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-neutral-400">Telephone / Support Line</label>
              <input
                type="text"
                value={settings.phone}
                onChange={e => setSettings({ ...settings, phone: e.target.value })}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-neutral-400">Guelph Manufacturing Facility Address</label>
              <input
                type="text"
                value={settings.address}
                onChange={e => setSettings({ ...settings, address: e.target.value })}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
              />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-neutral-900/60 border border-white/10 rounded-xl p-6 space-y-4">
          <h2 className="text-base font-semibold text-white flex items-center gap-2">
            <Share2 className="w-4 h-4 text-[#01747A]" />
            Social & Media Channels
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-neutral-400">LinkedIn URL</label>
              <input
                type="text"
                value={settings.socialLinkedin || ''}
                onChange={e => setSettings({
                  ...settings,
                  socialLinkedin: e.target.value
                })}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-neutral-400">Twitter / X URL</label>
              <input
                type="text"
                value={settings.socialTwitter || ''}
                onChange={e => setSettings({
                  ...settings,
                  socialTwitter: e.target.value
                })}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
