'use client';

import React, { useState, useMemo } from 'react';
import {
  Search, FileText, ArrowRight, CheckCircle2, Download,
  Presentation, FileSpreadsheet, X,
} from 'lucide-react';
import { modulesData, ModuleItem } from '@/data/modulesData';
import PdfModal from './PdfModal';

const CATEGORIES = ['Semua', 'SOP', 'Teknis', 'Checklist', 'Katalog'];

export default function ModuleLibrary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activePdf, setActivePdf] = useState<ModuleItem | null>(null);

  const filteredModules = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return modulesData.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      const matchesCategory =
        selectedCategory === 'Semua' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleModuleClick = (item: ModuleItem) => {
    if (item.fileType === 'PDF') {
      setActivePdf(item);
      return;
    }
    const link = document.createElement('a');
    link.href = item.fileUrl;
    link.download = item.fileUrl.split('/').pop() || 'dokumen';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderFileIcon = (fileType: string) => {
    switch (fileType) {
      case 'PPT':
        return <Presentation className="h-3.5 w-3.5 text-accent" />;
      case 'EXCEL':
        return <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-600" />;
      default:
        return <FileText className="h-3.5 w-3.5 text-brand" />;
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header + Search */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-ink">
            Pusat Modul & Panduan Lapangan
          </h2>
          <p className="mt-1 text-sm text-ink-soft">
            Cari dan akses dokumen operasional Technical After Sales secara instan.
          </p>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
          <input
            type="text"
            placeholder="Cari judul modul atau kata kunci..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="focus-brand w-full rounded-xl border border-line bg-surface-card py-2.5 pl-10 pr-9 text-sm text-ink placeholder:text-ink-soft/60"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-ink-soft hover:text-ink"
              aria-label="Bersihkan pencarian"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => {
          const active = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`focus-brand rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                active
                  ? 'bg-brand text-white'
                  : 'bg-surface-2 text-ink-soft hover:bg-brand-soft hover:text-brand'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredModules.length > 0 ? (
          filteredModules.map((item) => (
            <article
              key={item.id}
              onClick={() => handleModuleClick(item)}
              className="card-lift group flex cursor-pointer flex-col justify-between rounded-2xl border border-line bg-surface-card p-5"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="rounded-lg bg-brand-soft px-2.5 py-1 text-[11px] font-bold text-brand">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 rounded-lg bg-surface-2 px-2 py-1 text-[10px] font-bold text-ink-soft">
                      {renderFileIcon(item.fileType)} {item.fileType}
                    </span>
                  </div>
                  {item.isOnboarding && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2 py-1 text-[10px] font-bold text-accent">
                      <CheckCircle2 className="h-3 w-3" /> Wajib
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-[15px] font-bold leading-snug text-ink transition-colors group-hover:text-brand">
                  {item.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-line pt-3.5 text-[11px] text-ink-soft">
                <span>{item.fileSize} · {item.lastUpdated}</span>
                <span className="flex items-center gap-1 font-bold text-brand transition-all group-hover:gap-2">
                  {item.fileType === 'PDF' ? (
                    <>Baca <ArrowRight className="h-3.5 w-3.5" /></>
                  ) : (
                    <>Unduh <Download className="h-3.5 w-3.5" /></>
                  )}
                </span>
              </div>
            </article>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center rounded-2xl border border-dashed border-line bg-surface-2/50 py-16 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-card">
              <FileText className="h-6 w-6 text-ink-soft" strokeWidth={1.5} />
            </div>
            <p className="mt-4 text-base font-semibold text-ink">Modul tidak ditemukan</p>
            <p className="mt-1 text-sm text-ink-soft">Coba kata kunci atau kategori lain.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Semua');
              }}
              className="focus-brand mt-4 rounded-lg bg-brand-soft px-3 py-1.5 text-xs font-bold text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>

      <PdfModal module={activePdf} onClose={() => setActivePdf(null)} />
    </section>
  );
}