'use client';

import React, { useState, useEffect } from 'react';
import { 
  Briefcase, Plus, Edit3, Trash2, Check, X, RefreshCw, 
  ExternalLink, Building2, MapPin, Eye, FileText, ChevronDown, ChevronUp, Save
} from 'lucide-react';
import { CMSCareersContent, CMSJobOpportunity, CMSJobSection } from '@/lib/cms/types';

export default function AdminCareersPage() {
  const [activeTab, setActiveTab] = useState<'openings' | 'intro'>('openings');
  const [careersData, setCareersData] = useState<CMSCareersContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingJob, setEditingJob] = useState<CMSJobOpportunity | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Form helper for editing sections in raw text or structured
  const [jobSectionsText, setJobSectionsText] = useState('');

  useEffect(() => {
    fetchCareers();
  }, []);

  async function fetchCareers() {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/careers');
      const data = await res.json();
      if (data.careers) {
        setCareersData(data.careers);
      }
    } catch (err) {
      console.error('Failed to load careers', err);
    } finally {
      setLoading(false);
    }
  }

  function showNotification(type: 'success' | 'error', message: string) {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  }

  async function saveCareersToServer(updated: CMSCareersContent) {
    try {
      setSaving(true);
      const res = await fetch('/api/admin/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ careers: updated })
      });
      const data = await res.json();
      if (data.success) {
        setCareersData(updated);
        showNotification('success', 'Careers content saved successfully!');
      } else {
        showNotification('error', data.error || 'Failed to save');
      }
    } catch {
      showNotification('error', 'Network error saving careers');
    } finally {
      setSaving(false);
    }
  }

  function handleOpenJobModal(job?: CMSJobOpportunity) {
    if (job) {
      setEditingJob({ ...job });
      // Convert sections to readable formatted text for easy editing
      const text = job.sections
        .map(sec => {
          const body = sec.content
            .map(c => {
              if (c.type === 'ul' && c.items) {
                return c.items.map(it => `- ${it}`).join('\n');
              }
              return c.text || '';
            })
            .join('\n\n');
          return `### ${sec.title}\n${body}`;
        })
        .join('\n\n---\n\n');
      setJobSectionsText(text);
    } else {
      const newId = `job-${Date.now()}`;
      setEditingJob({
        id: newId,
        title: '',
        companyLocation: 'Guelph, Ontario',
        employmentType: 'Full-time',
        workArrangement: 'On-site',
        status: 'published',
        sections: [
          {
            title: 'The Role',
            content: [{ type: 'p', text: 'Describe the position responsibilities and impact.' }]
          },
          {
            title: 'What You Bring',
            content: [{ type: 'ul', items: ['Key qualification 1', 'Key qualification 2'] }]
          }
        ]
      });
      setJobSectionsText(`### The Role\nDescribe the position responsibilities and impact.\n\n---\n\n### What You Bring\n- Key qualification 1\n- Key qualification 2`);
    }
  }

  function parseSectionsText(raw: string): CMSJobSection[] {
    const blocks = raw.split(/\n\s*---\s*\n/);
    const sections: CMSJobSection[] = [];

    for (const b of blocks) {
      const trimmed = b.trim();
      if (!trimmed) continue;
      const lines = trimmed.split('\n');
      let title = 'Details';
      const contentLines: string[] = [];

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (i === 0 && line.startsWith('### ')) {
          title = line.replace('### ', '').trim();
        } else {
          contentLines.push(line);
        }
      }

      // Parse bullet points vs paragraphs
      const bodyRaw = contentLines.join('\n').trim();
      const chunks = bodyRaw.split(/\n\n+/);
      const contentItems: any[] = [];

      for (const chunk of chunks) {
        const cLines = chunk.split('\n').map(l => l.trim()).filter(Boolean);
        const isBulletList = cLines.every(l => l.startsWith('- ') || l.startsWith('* '));
        if (isBulletList && cLines.length > 0) {
          contentItems.push({
            type: 'ul',
            items: cLines.map(l => l.replace(/^[-*]\s+/, ''))
          });
        } else {
          contentItems.push({
            type: 'p',
            text: chunk.replace(/\n/g, ' ')
          });
        }
      }

      sections.push({
        title,
        content: contentItems.length ? contentItems : [{ type: 'p', text: bodyRaw }]
      });
    }

    return sections;
  }

  function handleSaveJobModal() {
    if (!editingJob || !careersData) return;
    if (!editingJob.title.trim()) {
      alert('Please provide a job title.');
      return;
    }

    const parsedSections = parseSectionsText(jobSectionsText);
    const updatedJob: CMSJobOpportunity = {
      ...editingJob,
      sections: parsedSections.length ? parsedSections : editingJob.sections,
      updatedAt: new Date().toISOString()
    };

    const exists = careersData.openings.some(j => j.id === updatedJob.id);
    const updatedOpenings = exists
      ? careersData.openings.map(j => (j.id === updatedJob.id ? updatedJob : j))
      : [updatedJob, ...careersData.openings];

    const updatedCareers = {
      ...careersData,
      openings: updatedOpenings
    };

    saveCareersToServer(updatedCareers);
    setEditingJob(null);
  }

  function handleDeleteJob(id: string) {
    if (!careersData) return;
    if (!confirm('Are you sure you want to remove this job opportunity?')) return;

    const updatedOpenings = careersData.openings.filter(j => j.id !== id);
    const updatedCareers = {
      ...careersData,
      openings: updatedOpenings
    };
    saveCareersToServer(updatedCareers);
  }

  function handleSaveIntro(e: React.FormEvent) {
    e.preventDefault();
    if (!careersData) return;
    saveCareersToServer(careersData);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[500px]">
        <RefreshCw className="w-8 h-8 text-[#01747A] animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#01747A] font-bold">
              Talent & Recruitment
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-xs font-mono text-slate-400">Careers CMS</span>
          </div>
          <h1 className="text-2xl font-bold font-serif text-white mt-1">
            Careers & Job Opportunities Manager
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Manage open job listings, role requirements, and facility overview shown on the /careers page.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/careers"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Eye className="w-4 h-4 text-teal-400" />
            <span>View Live Page</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
          <button
            onClick={() => handleOpenJobModal()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#01747A] hover:bg-[#015f64] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Post New Job</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {notification && (
        <div
          className={`p-4 rounded-lg flex items-center justify-between text-sm ${
            notification.type === 'success'
              ? 'bg-teal-900/30 border border-teal-500 text-teal-200'
              : 'bg-red-900/30 border border-red-500 text-red-200'
          }`}
        >
          <span>{notification.message}</span>
          <button onClick={() => setNotification(null)} className="text-white/60 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="flex items-center gap-2 border-b border-white/10">
        <button
          onClick={() => setActiveTab('openings')}
          className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider font-bold border-b-2 transition-all ${
            activeTab === 'openings'
              ? 'border-[#01747A] text-[#01747A]'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          Job Openings ({careersData?.openings.length || 0})
        </button>
        <button
          onClick={() => setActiveTab('intro')}
          className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider font-bold border-b-2 transition-all ${
            activeTab === 'intro'
              ? 'border-[#01747A] text-[#01747A]'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          Page Intro & Facility Stats
        </button>
      </div>

      {/* TAB 1: Job Openings */}
      {activeTab === 'openings' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {careersData?.openings.map((job) => (
              <div
                key={job.id}
                className="bg-[#141f22] border border-white/10 rounded-xl p-6 hover:border-teal-500/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-teal-500/10 text-teal-400 border border-teal-500/20">
                      {job.id}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {job.status || 'published'}
                    </span>
                    {job.companyLocation && (
                      <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-teal-500" />
                        {job.companyLocation}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white font-serif tracking-wide">
                    {job.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2">
                    {job.sections[0]?.content[0]?.text ||
                      job.sections[0]?.content[0]?.items?.join(', ') ||
                      'Job responsibilities and details'}
                  </p>

                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-[11px] font-mono text-slate-500">
                      Sections: {job.sections.length} ({job.sections.map((s) => s.title).join(', ')})
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleOpenJobModal(job)}
                    className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5 text-xs font-mono"
                  >
                    <Edit3 className="w-4 h-4 text-teal-400" />
                    <span>Edit Role</span>
                  </button>
                  <button
                    onClick={() => handleDeleteJob(job.id)}
                    className="p-2.5 rounded-lg bg-red-950/20 border border-red-500/20 text-red-400 hover:bg-red-900/30 hover:text-red-200 transition-colors flex items-center gap-1.5 text-xs font-mono"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: Page Intro & Stats */}
      {activeTab === 'intro' && careersData && (
        <form onSubmit={handleSaveIntro} className="bg-[#141f22] border border-white/10 rounded-xl p-6 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h2 className="text-base font-bold text-white font-serif">Page Intro Content</h2>
              <p className="text-xs text-slate-400">Headings and paragraphs displayed at the top of the careers page.</p>
            </div>
            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#01747A] hover:bg-[#015f64] text-white text-xs font-bold uppercase tracking-wider transition-colors disabled:opacity-50 shadow-sm"
            >
              <Save className="w-4 h-4" />
              <span>{saving ? 'Saving...' : 'Save Changes'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Badge Text</label>
              <input
                type="text"
                value={careersData.intro.badge}
                onChange={(e) =>
                  setCareersData({
                    ...careersData,
                    intro: { ...careersData.intro, badge: e.target.value }
                  })
                }
                className="w-full bg-[#1b272a] border border-white/10 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-teal-500"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Page Heading</label>
              <input
                type="text"
                value={careersData.intro.heading}
                onChange={(e) =>
                  setCareersData({
                    ...careersData,
                    intro: { ...careersData.intro, heading: e.target.value }
                  })
                }
                className="w-full bg-[#1b272a] border border-white/10 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1">Subheading</label>
            <input
              type="text"
              value={careersData.intro.subheading}
              onChange={(e) =>
                setCareersData({
                  ...careersData,
                  intro: { ...careersData.intro, subheading: e.target.value }
                })
              }
              className="w-full bg-[#1b272a] border border-white/10 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-teal-500"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1">
              Intro Paragraphs (one per block or separated by new lines)
            </label>
            <textarea
              rows={6}
              value={careersData.intro.descriptionParagraphs.join('\n\n')}
              onChange={(e) =>
                setCareersData({
                  ...careersData,
                  intro: {
                    ...careersData.intro,
                    descriptionParagraphs: e.target.value.split(/\n\n+/).filter(Boolean)
                  }
                })
              }
              className="w-full bg-[#1b272a] border border-white/10 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-teal-500 font-sans"
            />
          </div>

          <div className="pt-4 border-t border-white/10">
            <h3 className="text-sm font-bold text-white mb-3 font-mono uppercase tracking-wider">
              Facility Stats Badges
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {careersData.intro.facilityStats.map((stat, idx) => (
                <div key={idx} className="bg-[#1b272a] border border-white/10 rounded-lg p-3 space-y-2">
                  <input
                    type="text"
                    value={stat.label}
                    onChange={(e) => {
                      const updated = [...careersData.intro.facilityStats];
                      updated[idx].label = e.target.value;
                      setCareersData({
                        ...careersData,
                        intro: { ...careersData.intro, facilityStats: updated }
                      });
                    }}
                    placeholder="Label"
                    className="w-full bg-black/20 border border-white/5 rounded px-2 py-1 text-xs text-slate-300 font-mono"
                  />
                  <input
                    type="text"
                    value={stat.value}
                    onChange={(e) => {
                      const updated = [...careersData.intro.facilityStats];
                      updated[idx].value = e.target.value;
                      setCareersData({
                        ...careersData,
                        intro: { ...careersData.intro, facilityStats: updated }
                      });
                    }}
                    placeholder="Value"
                    className="w-full bg-black/20 border border-white/5 rounded px-2 py-1 text-xs text-teal-400 font-bold"
                  />
                </div>
              ))}
            </div>
          </div>
        </form>
      )}

      {/* Job Edit / Create Modal */}
      {editingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#141f22] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold font-serif text-white">
                  {careersData?.openings.some(j => j.id === editingJob.id) ? 'Edit Job Opening' : 'Post New Job Opening'}
                </h2>
                <p className="text-xs text-slate-400 mt-1">ID: {editingJob.id}</p>
              </div>
              <button
                onClick={() => setEditingJob(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4 overflow-y-auto flex-1 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Job Title *</label>
                  <input
                    type="text"
                    value={editingJob.title}
                    onChange={(e) => setEditingJob({ ...editingJob, title: e.target.value })}
                    placeholder="e.g. Senior Thermal Engineer"
                    className="w-full bg-[#1b272a] border border-white/10 rounded-lg px-3.5 py-2 text-white focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Location</label>
                  <input
                    type="text"
                    value={editingJob.companyLocation || ''}
                    onChange={(e) => setEditingJob({ ...editingJob, companyLocation: e.target.value })}
                    placeholder="Guelph, Ontario, Canada"
                    className="w-full bg-[#1b272a] border border-white/10 rounded-lg px-3.5 py-2 text-white focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Employment Type</label>
                  <input
                    type="text"
                    value={editingJob.employmentType || ''}
                    onChange={(e) => setEditingJob({ ...editingJob, employmentType: e.target.value })}
                    placeholder="Full-time / Co-op"
                    className="w-full bg-[#1b272a] border border-white/10 rounded-lg px-3.5 py-2 text-white focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Work Arrangement</label>
                  <input
                    type="text"
                    value={editingJob.workArrangement || ''}
                    onChange={(e) => setEditingJob({ ...editingJob, workArrangement: e.target.value })}
                    placeholder="On-site / Hybrid"
                    className="w-full bg-[#1b272a] border border-white/10 rounded-lg px-3.5 py-2 text-white focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Status</label>
                  <select
                    value={editingJob.status || 'published'}
                    onChange={(e) => setEditingJob({ ...editingJob, status: e.target.value as any })}
                    className="w-full bg-[#1b272a] border border-white/10 rounded-lg px-3.5 py-2 text-white focus:outline-none focus:border-teal-500 font-mono text-xs"
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-mono text-slate-400">
                    Role Sections & Details (Markdown formatted)
                  </label>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Use &apos;### Section Title&apos; and &apos;---&apos; between sections
                  </span>
                </div>
                <p className="text-[11px] text-teal-400/80 mb-2 font-mono">
                  Tip: Start a section with <code>### The Role</code> or <code>### What You Bring</code>, write bullet points with <code>- </code>, and separate sections with <code>---</code>.
                </p>
                <textarea
                  rows={12}
                  value={jobSectionsText}
                  onChange={(e) => setJobSectionsText(e.target.value)}
                  className="w-full bg-[#1b272a] border border-white/10 rounded-lg p-3 text-xs text-white font-mono leading-relaxed focus:outline-none focus:border-teal-500"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                onClick={() => setEditingJob(null)}
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-mono"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveJobModal}
                disabled={saving}
                className="px-5 py-2 rounded-lg bg-[#01747A] hover:bg-[#015f64] text-white text-xs font-bold uppercase tracking-wider font-mono disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Save Job Opening'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
