'use client';

import React, { useState, useEffect } from 'react';
import { 
  Image as ImageIcon, Upload, Copy, Check, Trash2, RefreshCw, FileText
} from 'lucide-react';
import { MediaAsset } from '@/lib/cms/types';

export default function AdminMediaPage() {
  const [media, setMedia] = useState<MediaAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  useEffect(() => {
    fetchMedia();
  }, []);

  async function fetchMedia() {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/media');
      const data = await res.json();
      if (data.media) {
        setMedia(data.media);
      }
    } catch (err) {
      console.error('Failed to load media', err);
    } finally {
      setLoading(false);
    }
  }

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('category', 'general');

      const res = await fetch('/api/admin/media', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data.success && data.asset) {
        setMedia([data.asset, ...media]);
      }
    } catch (err) {
      console.error('Upload failed', err);
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  }

  function handleCopy(url: string) {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2500);
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#01747A] tracking-wider mb-1">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Digital Assets</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Media Library</h1>
          <p className="text-sm text-neutral-400 mt-1">
            Upload images, diagrams, technical drawings, and copy paths for use across products and pages.
          </p>
        </div>

        <label className="inline-flex items-center gap-2 px-4 py-2 bg-[#01747A] hover:bg-[#015f64] text-white text-sm font-medium rounded-lg shadow-sm transition cursor-pointer">
          {uploading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
          <span>{uploading ? 'Uploading...' : 'Upload Asset'}</span>
          <input
            type="file"
            accept="image/*,application/pdf"
            className="hidden"
            onChange={handleFileUpload}
            disabled={uploading}
          />
        </label>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="py-20 text-center text-neutral-500 text-sm">
          <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-[#01747A]" />
          Loading media assets...
        </div>
      ) : media.length === 0 ? (
        <div className="py-16 text-center text-neutral-500 text-sm bg-neutral-900/40 border border-white/5 rounded-xl">
          <ImageIcon className="w-10 h-10 mx-auto mb-3 text-neutral-600" />
          No uploads yet. Click &ldquo;Upload Asset&rdquo; above to upload your first image or technical PDF.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {media.map((asset) => (
            <div key={asset.id} className="bg-neutral-900/60 border border-white/10 rounded-xl overflow-hidden group hover:border-[#01747A]/50 transition flex flex-col justify-between">
              <div className="h-32 bg-neutral-950 flex items-center justify-center overflow-hidden relative">
                {asset.mimeType?.startsWith('image/') ? (
                  <img src={asset.url} alt={asset.fileName} className="w-full h-full object-cover" />
                ) : (
                  <FileText className="w-10 h-10 text-neutral-500" />
                )}

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                  <button
                    onClick={() => handleCopy(asset.url)}
                    className="p-1.5 bg-neutral-800 text-white rounded hover:bg-[#01747A] transition"
                    title="Copy Image URL"
                  >
                    {copiedUrl === asset.url ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="p-2.5">
                <div className="text-xs text-white truncate font-medium">{asset.fileName}</div>
                <div className="text-[10px] text-neutral-500 font-mono mt-0.5">
                  {(asset.size / 1024).toFixed(1)} KB
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
