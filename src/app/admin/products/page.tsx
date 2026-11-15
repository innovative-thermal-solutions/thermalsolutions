'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Package, Plus, Search, Edit3, Trash2, Eye, EyeOff, Check, X,
  ExternalLink, Image as ImageIcon, Layers, RefreshCw
} from 'lucide-react';
import { CMSProduct } from '@/lib/cms/types';

export default function AdminProductsPage() {
  const [products, setProducts] = useState<CMSProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [editingProduct, setEditingProduct] = useState<CMSProduct | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/products');
      const data = await res.json();
      if (data.products) {
        setProducts(data.products);
      }
    } catch (err) {
      console.error('Failed to load products', err);
    } finally {
      setLoading(false);
    }
  }

  function showNotification(type: 'success' | 'error', message: string) {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  }

  async function saveProductsToServer(updated: CMSProduct[]) {
    try {
      setSaving(true);
      const res = await fetch('/api/admin/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ products: updated })
      });
      const data = await res.json();
      if (data.success) {
        setProducts(updated);
        showNotification('success', 'Products saved and published successfully!');
        setEditingProduct(null);
      } else {
        showNotification('error', data.error || 'Failed to save products');
      }
    } catch {
      showNotification('error', 'Network error while saving products');
    } finally {
      setSaving(false);
    }
  }

  function handleSaveEdit(e: React.FormEvent) {
    e.preventDefault();
    if (!editingProduct) return;

    let updated: CMSProduct[];
    const exists = products.some(p => p.id === editingProduct.id);
    if (exists) {
      updated = products.map(p => p.id === editingProduct.id ? editingProduct : p);
    } else {
      updated = [editingProduct, ...products];
    }
    saveProductsToServer(updated);
  }

  function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this product?')) return;
    const updated = products.filter(p => p.id !== id);
    saveProductsToServer(updated);
  }

  function handleTogglePublished(id: string) {
    const updated = products.map(p => {
      if (p.id === id) {
        const next = p.published !== false ? false : true;
        return { ...p, published: next };
      }
      return p;
    });
    saveProductsToServer(updated);
  }

  function startCreate() {
    const newId = 'prod-' + Date.now();
    setEditingProduct({
      id: newId,
      name: 'New Cooling Product',
      category: 'Air Cooled',
      shortDescription: 'Product description here...',
      image: '/images/products/air-cooled-heat-sinks.png',
      galleryImages: [],
      material: 'Aluminum 6063-T5',
      dimensions: 'Custom specifications',
      manufacturingProcess: 'CNC Machining / Extrusion',
      applications: ['Power Electronics', 'Industrial Drives'],
      specs: { 'Thermal Resistance': '0.12 °C/W' },
      published: true
    });
  }

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category).filter(Boolean)))];

  const filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                          (p.shortDescription && p.shortDescription.toLowerCase().includes(search.toLowerCase())) ||
                          (p.category && p.category.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = categoryFilter === 'All' || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#01747A] tracking-wider mb-1">
            <Package className="w-3.5 h-3.5" />
            <span>Product Catalog CMS</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Product & Portfolio Manager</h1>
          <p className="text-sm text-neutral-400 mt-1">
            Manage all portfolio products, specs, high-resolution CAD images, materials, and categories.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchProducts}
            disabled={loading}
            className="p-2 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition"
            title="Refresh list"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={startCreate}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#01747A] hover:bg-[#015f64] text-white text-sm font-medium rounded-lg shadow-sm transition"
          >
            <Plus className="w-4 h-4" />
            <span>Add Product</span>
          </button>
        </div>
      </div>

      {/* Notification banner */}
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

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
          <input
            type="text"
            placeholder="Search products by name, category, or description..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-[#01747A]"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                categoryFilter === cat
                  ? 'bg-[#01747A] text-white'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-neutral-900/60 border border-white/10 rounded-xl overflow-hidden shadow-sm">
        {loading ? (
          <div className="py-20 text-center text-neutral-500 text-sm">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-[#01747A]" />
            Loading catalog data...
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-16 text-center text-neutral-500 text-sm">
            No products found matching your filter criteria.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-neutral-950/60 border-b border-white/10 text-neutral-400 uppercase font-mono tracking-wider">
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Material / Specs</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.map(product => (
                  <tr key={product.id} className="hover:bg-white/[0.02] transition">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-neutral-950 border border-neutral-800 overflow-hidden flex items-center justify-center shrink-0">
                          {product.image ? (
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                          ) : (
                            <ImageIcon className="w-5 h-5 text-neutral-600" />
                          )}
                        </div>
                        <div>
                          <div className="font-semibold text-white text-sm">{product.name}</div>
                          <div className="text-neutral-400 text-xs line-clamp-1 max-w-sm mt-0.5">
                            {product.shortDescription}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-block px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 font-medium">
                        {product.category}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-neutral-400">
                      <div>{product.material || 'Standard Alloy'}</div>
                      <div className="text-[11px] text-neutral-500">{product.dimensions || 'Custom specs'}</div>
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => handleTogglePublished(product.id)}
                        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium transition ${
                          product.published !== false
                            ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40'
                            : 'bg-neutral-800 text-neutral-400 border border-neutral-700'
                        }`}
                      >
                        {product.published !== false ? (
                          <>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            Published
                          </>
                        ) : (
                          <>
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500"></span>
                            Draft
                          </>
                        )}
                      </button>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="inline-flex items-center gap-2">
                        <button
                          onClick={() => setEditingProduct({ ...product })}
                          className="p-1.5 text-neutral-400 hover:text-white bg-neutral-800/50 hover:bg-neutral-800 rounded border border-neutral-700/50 transition"
                          title="Edit product"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="p-1.5 text-rose-400 hover:text-rose-300 bg-rose-950/30 hover:bg-rose-950/60 rounded border border-rose-800/40 transition"
                          title="Delete product"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Edit / Create Modal */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-neutral-900 border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <form onSubmit={handleSaveEdit} className="p-6 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {products.some(p => p.id === editingProduct.id) ? 'Edit Product' : 'Add New Product'}
                  </h3>
                  <p className="text-xs text-neutral-400">All changes update both the portfolio and individual detail pages.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="p-2 text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-xs font-mono uppercase text-neutral-400">Product Name</label>
                  <input
                    type="text"
                    required
                    value={editingProduct.name}
                    onChange={e => setEditingProduct({ ...editingProduct, name: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-neutral-400">Category</label>
                  <input
                    type="text"
                    required
                    value={editingProduct.category}
                    onChange={e => setEditingProduct({ ...editingProduct, category: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                    placeholder="e.g. Air Cooled, Liquid Cold Plates"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-neutral-400">Material</label>
                  <input
                    type="text"
                    value={editingProduct.material || ''}
                    onChange={e => setEditingProduct({ ...editingProduct, material: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                    placeholder="e.g. Aluminum 6063-T5 / Copper C11000"
                  />
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-xs font-mono uppercase text-neutral-400">Short Description</label>
                  <textarea
                    rows={2}
                    value={editingProduct.shortDescription || ''}
                    onChange={e => setEditingProduct({ ...editingProduct, shortDescription: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                  />
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-xs font-mono uppercase text-neutral-400">Primary Image URL or Upload Path</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      required
                      value={editingProduct.image}
                      onChange={e => setEditingProduct({ ...editingProduct, image: e.target.value })}
                      className="flex-1 px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                    />
                    {editingProduct.image && (
                      <div className="w-10 h-10 rounded border border-neutral-700 overflow-hidden bg-neutral-950 shrink-0">
                        <img src={editingProduct.image} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                  <p className="text-[11px] text-neutral-500">
                    Tip: You can upload new images in the Media Library (/admin/media) and paste the path here.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-neutral-400">Dimensions</label>
                  <input
                    type="text"
                    value={editingProduct.dimensions || ''}
                    onChange={e => setEditingProduct({ ...editingProduct, dimensions: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                    placeholder="e.g. Custom up to 600mm x 400mm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-neutral-400">Manufacturing Process</label>
                  <input
                    type="text"
                    value={editingProduct.manufacturingProcess || ''}
                    onChange={e => setEditingProduct({ ...editingProduct, manufacturingProcess: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                    placeholder="e.g. Friction Stir Welding & 5-Axis CNC"
                  />
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-xs font-mono uppercase text-neutral-400">Applications (comma-separated)</label>
                  <input
                    type="text"
                    value={(editingProduct.applications || []).join(', ')}
                    onChange={e => setEditingProduct({ 
                      ...editingProduct, 
                      applications: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                    })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                    placeholder="e.g. EV Inverters, Traction Motors, Grid Energy Storage"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editingProduct.published !== false}
                    onChange={e => setEditingProduct({ ...editingProduct, published: e.target.checked })}
                    className="rounded bg-neutral-950 border-neutral-800 text-[#01747A] focus:ring-0"
                  />
                  <span className="text-xs text-neutral-300 font-medium">Published on live website</span>
                </label>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setEditingProduct(null)}
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
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
