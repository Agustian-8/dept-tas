'use client';

import React, { useEffect } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';
import { ModuleItem } from '@/data/modulesData';

interface PdfModalProps {
  module: ModuleItem | null;
  onClose: () => void;
}

export default function PdfModal({ module, onClose }: PdfModalProps) {
  useEffect(() => {
    if (!module) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [module, onClose]);

  if (!module) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-line bg-surface-card"
      >
        <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5">
          <div className="min-w-0">
            <span className="inline-block rounded-full bg-brand-soft px-2.5 py-0.5 text-[10px] font-bold text-brand">
              {module.category}
            </span>
            <h3 className="mt-1 truncate text-[15px] font-bold text-ink">{module.title}</h3>
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <a
              href={module.fileUrl}
              download
              className="focus-brand inline-flex items-center gap-1.5 rounded-lg bg-brand-soft px-3 py-2 text-xs font-bold text-brand transition-colors hover:bg-brand hover:text-white"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Unduh</span>
            </a>
            <a
              href={module.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-brand inline-flex items-center gap-1.5 rounded-lg bg-surface-2 px-3 py-2 text-xs font-bold text-ink-soft transition-colors hover:text-ink"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={onClose}
              className="focus-brand rounded-lg p-2 text-ink-soft transition-colors hover:bg-surface-2 hover:text-ink"
              aria-label="Tutup"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-surface-2 p-3">
          <iframe
            src={`${module.fileUrl}#view=FitH`}
            className="h-full w-full rounded-lg border border-line bg-white"
            title={module.title}
          />
        </div>
      </div>
    </div>
  );
}