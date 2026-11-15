'use client';

import React, { useState, useEffect } from 'react';
import { 
  FolderKanban, Plus, Search, Edit3, Trash2, Check, X,
  Image as ImageIcon, RefreshCw, TrendingDown, Layers
} from 'lucide-react';
import { CMSCaseStudy } from '@/lib/cms/types';

export default function AdminCaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CMSCaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState('');
  const [editingStudy, setEditingStudy] = useState<CMSCaseStudy | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  async function fetchCaseStudies() {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/case-studies');
      const data = await res.json();
      if (data.caseStudies) {
        setCaseStudies(data.caseStudies);
      }
    } catch (err) {
      console.error('Failed to load case studies', err);
    } finally {
      setLoading(false);
    }
  }

  function showNotification(type: 'success' | 'error', message: string) {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  }

  async function saveToServer(updated: CMSCaseStudy[]) {
    try {
      setSaving(true);
      const res = await fetch('/api/admin/case-studies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ caseStudies: updated })
      });
      const data = await res.json();
      if (data.success) {
        setCaseStudies(updated);
        showNotification('success', 'Case studies updated and published successfully!');
        setEditingStudy(null);
      } else {
        showNotification('error', data.error || 'Failed to save');
      }
    } catch {
      showNotification('error', 'Network error');
    } finally {
      setSaving(false);
    }
  }

  function handleSaveEdit(e: React.FormEvent) {
    e.preventDefault();
    if (!editingStudy) return;

    let updated: CMSCaseStudy[];
    const exists = caseStudies.some(c => c.id === editingStudy.id);
    if (exists) {
      updated = caseStudies.map(c => c.id === editingStudy.id ? editingStudy : c);
    } else {
      updated = [editingStudy, ...caseStudies];
    }
    saveToServer(updated);
  }

  function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this case study?')) return;
    const updated = caseStudies.filter(c => c.id !== id);
    saveToServer(updated);
  }

  function startCreate() {
    const newId = 'cs-' + Date.now();
    setEditingStudy({
      id: newId,
      slug: 'new-case-study-' + Date.now(),
      title: 'New Engineering Case Study',
      industry: 'Power Electronics',
      summary: 'Executive engineering overview...',
      challenge: 'Technical thermal bottleneck...',
      solution: 'Custom cooling implementation...',
      results: 'Key measured temperature improvements...',
      tempReduction: '15°C',
      heroImage: '/images/image66.png',
      status: 'published',
      updatedAt: new Date().toISOString()
    });
  }

  const filtered = caseStudies.filter(c => 
    c.title.toLowerCase().includes(search.toLowerCase()) ||
    c.industry.toLowerCase().includes(search.toLowerCase()) ||
    c.summary.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#01747A] tracking-wider mb-1">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Case Studies & Whitepapers</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Case Studies CMS</h1>
          <p className="text-sm text-neutral-400 mt-1">
            Manage validated engineering results, CFD thermal model comparison sliders, and customer deployments.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchCaseStudies}
            disabled={loading}
            className="p-2 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={startCreate}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#01747A] hover:bg-[#015f64] text-white text-sm font-medium rounded-lg shadow-sm transition"
          >
            <Plus className="w-4 h-4" />
            <span>Add Case Study</span>
          </button>
        </div>
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

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(study => (
          <div key={study.id} className="bg-neutral-900/60 border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-white/20 transition">
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-[#01747A] font-semibold">
                  {study.industry}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setEditingStudy({ ...study })}
                    className="p-1.5 text-neutral-400 hover:text-white bg-neutral-800/60 rounded border border-neutral-700/50 transition"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDelete(study.id)}
                    className="p-1.5 text-rose-400 hover:text-rose-300 bg-rose-950/30 rounded border border-rose-800/40 transition"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <h3 className="font-semibold text-white text-base mb-1">{study.title}</h3>
              {study.tempReduction && (
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 mb-2">
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span>{study.tempReduction} Peak Temperature Drop</span>
                </div>
              )}
              <p className="text-xs text-neutral-400 line-clamp-3 mb-4 leading-relaxed">
                {study.summary}
              </p>
            </div>

            <div className="h-28 rounded-lg bg-neutral-950 border border-neutral-800 overflow-hidden relative">
              {study.heroImage ? (
                <img src={study.heroImage} alt={study.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-neutral-600">
                  <ImageIcon className="w-6 h-6" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editingStudy && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-neutral-900 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <form onSubmit={handleSaveEdit} className="p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h3 className="text-base font-bold text-white">
                  {caseStudies.some(c => c.id === editingStudy.id) ? 'Edit Case Study' : 'Add Case Study'}
                </h3>
                <button
                  type="button"
                  onClick={() => setEditingStudy(null)}
                  className="p-1.5 text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Project Title</label>
                <input
                  type="text"
                  required
                  value={editingStudy.title}
                  onChange={e => setEditingStudy({ ...editingStudy, title: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-neutral-400">Industry</label>
                  <input
                    type="text"
                    required
                    value={editingStudy.industry}
                    onChange={e => setEditingStudy({ ...editingStudy, industry: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-neutral-400">Temp Reduction Metric</label>
                  <input
                    type="text"
                    value={editingStudy.tempReduction || ''}
                    onChange={e => setEditingStudy({ ...editingStudy, tempReduction: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                    placeholder="e.g. 20°C"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Summary</label>
                <textarea
                  rows={3}
                  required
                  value={editingStudy.summary}
                  onChange={e => setEditingStudy({ ...editingStudy, summary: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Engineering Challenge</label>
                <textarea
                  rows={3}
                  value={editingStudy.challenge}
                  onChange={e => setEditingStudy({ ...editingStudy, challenge: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Proposed Solution</label>
                <textarea
                  rows={3}
                  value={editingStudy.solution}
                  onChange={e => setEditingStudy({ ...editingStudy, solution: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Hero Image URL / Path</label>
                <input
                  type="text"
                  required
                  value={editingStudy.heroImage}
                  onChange={e => setEditingStudy({ ...editingStudy, heroImage: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setEditingStudy(null)}
                  className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-sm font-medium rounded-lg transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-2 px-5 py-2 bg-[#01747A] hover:bg-[#015f64] text-white text-sm font-medium rounded-lg shadow-sm transition disabled:opacity-50"
                >
                  {saving && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
                  <span>Save Case Study</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
