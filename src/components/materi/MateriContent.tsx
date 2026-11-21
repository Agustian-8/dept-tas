'use client';

import React, { useState, useMemo } from 'react';
import {
  Search, FileText, ArrowRight, CheckCircle2, Download,
  Presentation, FileSpreadsheet, X, BookOpen, ListChecks,
} from 'lucide-react';
import { modulesData, ModuleItem } from '@/data/modulesData';
import PdfModal from './PdfModal';

const CATEGORIES = ['Semua', 'SOP', 'Teknis', 'Checklist', 'Katalog'];
const FILE_TYPES = ['Semua', 'PDF', 'PPT', 'EXCEL'] as const;

export default function MateriContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedType, setSelectedType] = useState<string>('Semua');
  const [activePdf, setActivePdf] = useState<ModuleItem | null>(null);

  const filteredModules = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return modulesData.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
      const matchesType = selectedType === 'Semua' || item.fileType === selectedType;
      return matchesSearch && matchesCategory && matchesType;
    });
  }, [searchQuery, selectedCategory, selectedType]);

  const onboardingModules = filteredModules.filter((m) => m.isOnboarding);
  const regularModules = filteredModules.filter((m) => !m.isOnboarding);

  /* Klik card → PDF buka modal, lainnya langsung unduh */
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
        return <Presentation className="h-3.5 w-3.5 text-royal" />;
      case 'EXCEL':
        return <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-600" />;
      default:
        return <FileText className="h-3.5 w-3.5 text-brand" />;
    }
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('Semua');
    setSelectedType('Semua');
  };

  const hasActiveFilter =
    searchQuery || selectedCategory !== 'Semua' || selectedType !== 'Semua';

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* ============ HEADER ============ */}
      <div className="mb-8">
        <span className="inline-block rounded-full bg-brand-soft px-3 py-1 text-[11px] font-bold text-brand">
          Perpustakaan Departemen
        </span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink">
          Materi & Modul
        </h1>
        <p className="mt-1 max-w-2xl text-sm text-ink-soft">
          Cari dan unduh dokumen SOP, panduan teknis, checklist, dan katalog
          dalam satu tempat.
        </p>
      </div>

      {/* ============ SEARCH + FILTER BAR ============ */}
      <div className="mb-6 rounded-2xl border border-line bg-surface-card p-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
          <input
            type="text"
            placeholder="Cari judul modul atau kata kunci..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="focus-brand w-full rounded-xl border border-line bg-surface-2 py-3 pl-11 pr-10 text-sm text-ink placeholder:text-ink-soft/60"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-ink-soft hover:text-ink"
              aria-label="Bersihkan"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Filter row */}
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Kategori */}
          <div className="flex flex-wrap gap-1.5">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`focus-brand rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
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

          {/* Tipe file */}
          <div className="flex gap-1 rounded-lg bg-surface-2 p-1">
            {FILE_TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className={`focus-brand rounded-md px-2.5 py-1 text-[11px] font-semibold transition-colors ${
                  selectedType === t
                    ? 'bg-surface-card text-brand shadow-sm'
                    : 'text-ink-soft hover:text-ink'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ============ RESULT INFO — DIPERBAIKI ============ */}
      <div className="mb-6 flex items-center justify-between rounded-xl border border-line bg-surface-card px-4 py-3">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-brand" strokeWidth={2.2} />
          <span className="text-sm text-ink-soft">
            Menampilkan{' '}
            <span className="font-bold text-ink">{filteredModules.length}</span>{' '}
            modul
          </span>
        </div>
        {hasActiveFilter && (
          <button
            onClick={resetFilters}
            className="focus-brand flex items-center gap-1 rounded-lg bg-brand-soft px-2.5 py-1 text-xs font-bold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            <X className="h-3 w-3" />
            Reset Filter
          </button>
        )}
      </div>

      {/* ============ EMPTY STATE ============ */}
      {filteredModules.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-line bg-surface-2/50 py-20 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-card">
            <FileText className="h-7 w-7 text-ink-soft" strokeWidth={1.5} />
          </div>
          <p className="mt-4 text-base font-semibold text-ink">
            Modul tidak ditemukan
          </p>
          <p className="mt-1 text-sm text-ink-soft">
            Coba kata kunci atau filter lain.
          </p>
          <button
            onClick={resetFilters}
            className="focus-brand mt-5 rounded-lg bg-brand px-4 py-2 text-xs font-bold text-white hover:bg-royal"
          >
            Reset Semua Filter
          </button>
        </div>
      )}

      {/* ============ ONBOARDING BLOCK — DIPERBAIKI ============ */}
      {onboardingModules.length > 0 && (
        <div className="mb-10 overflow-hidden rounded-2xl border border-brand/15 bg-brand">
          {/* Header block — tegas, bukan badge kecil */}
          <div className="flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex items-center gap-4">
              {/* Angka besar — bukan badge kecil */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-2xl font-black text-white ring-1 ring-white/20">
                {onboardingModules.length}
              </div>
              <div>
                <div className="flex items-center gap-2 text-white/70">
                  <ListChecks className="h-3.5 w-3.5" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">
                    Wajib Dibaca
                  </span>
                </div>
                <h2 className="mt-1 text-lg font-bold text-white">
                  Karyawan Baru
                </h2>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/70">
              Baca modul ini di minggu pertama untuk memahami standar operasional
              departemen sebelum terjun ke lapangan.
            </p>
          </div>

          {/* Card grid di dalam block — background putih */}
          <div className="bg-surface-card px-4 py-5 sm:px-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {onboardingModules.map((item) => (
                <ModuleCard
                  key={item.id}
                  item={item}
                  onOpen={() => handleModuleClick(item)}
                  renderFileIcon={renderFileIcon}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============ REGULAR MODULES ============ */}
      {regularModules.length > 0 && (
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wider text-ink-soft">
              {onboardingModules.length > 0 ? 'Modul Lainnya' : 'Semua Modul'}
            </h2>
            <span className="text-xs text-ink-soft">
              {regularModules.length} modul
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {regularModules.map((item) => (
              <ModuleCard
                key={item.id}
                item={item}
                onOpen={() => handleModuleClick(item)}
                renderFileIcon={renderFileIcon}
              />
            ))}
          </div>
        </div>
      )}

      <PdfModal module={activePdf} onClose={() => setActivePdf(null)} />
    </section>
  );
}

/* ============================================================
   Module Card — tombol "Baca" untuk PDF, "Unduh" untuk lainnya
   ============================================================ */
function ModuleCard({
  item,
  onOpen,
  renderFileIcon,
}: {
  item: ModuleItem;
  onOpen: () => void;
  renderFileIcon: (fileType: string) => React.ReactNode;
}) {
  return (
    <article
      onClick={onOpen}
      className="card-lift group flex cursor-pointer flex-col justify-between rounded-xl border border-line bg-surface-card p-5"
    >
      <div>
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="rounded-lg bg-brand-soft px-2.5 py-1 text-[11px] font-bold text-brand">
            {item.category}
          </span>
          <span className="flex items-center gap-1 rounded-lg bg-surface-2 px-2 py-1 text-[10px] font-bold text-ink-soft">
            {renderFileIcon(item.fileType)} {item.fileType}
          </span>
          {item.isOnboarding && (
            <span className="inline-flex items-center gap-1 rounded-full bg-royal-soft px-2 py-1 text-[10px] font-bold text-royal">
              <CheckCircle2 className="h-3 w-3" /> Wajib
            </span>
          )}
        </div>

        <h3 className="mt-3.5 text-[15px] font-bold leading-snug text-ink transition-colors group-hover:text-brand">
          {item.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-soft">
          {item.description}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-line pt-3.5 text-[11px] text-ink-soft">
        <span>{item.fileSize} · {item.lastUpdated}</span>
        <span className="flex items-center gap-1 font-bold text-brand transition-all group-hover:gap-2">
          {item.fileType === 'PDF' ? (
            <>
              <BookOpen className="h-3.5 w-3.5" /> Baca
            </>
          ) : (
            <>
              <Download className="h-3.5 w-3.5" /> Unduh
            </>
          )}
        </span>
      </div>
    </article>
  );
}