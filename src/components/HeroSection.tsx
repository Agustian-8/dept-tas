'use client';

import React from 'react';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="border-b border-line bg-surface py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Info Utama */}
          <div className="lg:col-span-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand-soft px-3 py-1 text-[11px] font-semibold text-brand">
              <Sparkles className="h-3 w-3" />
              Pusat Informasi & Pengetahuan
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Portal Operasional &{' '}
              <span className="text-brand">Modul Pembelajaran</span>{' '}
              Lapangan
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
              Selamat datang di portal mandiri Technical After Sales. Seluruh dokumen SOP,
              panduan teknis ban/unit, serta formulir laporan lapangan kini terpusat di satu
              tautan agar mudah diakses kapan saja oleh tim internal maupun karyawan baru.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium text-ink-soft">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-brand" /> SOP Terpusat
              </span>
              <span className="h-1 w-1 rounded-full bg-line" />
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-brand" /> Akses Kapan Saja
              </span>
              <span className="h-1 w-1 rounded-full bg-line" />
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-brand" /> Ramah Pemula
              </span>
            </div>
          </div>

          {/* Panduan Karyawan Baru */}
          <div className="flex flex-col justify-center rounded-2xl border border-line bg-surface-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-ink-soft">
                Panduan Karyawan Baru
              </h3>
              <ArrowUpRight className="h-4 w-4 text-accent" />
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-[10px] font-bold text-brand">
                  1
                </span>
                <span className="text-ink-soft">
                  Baca dokumen berlabel{' '}
                  <strong className="text-ink">Wajib Karyawan Baru</strong> pada daftar modul.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-[10px] font-bold text-brand">
                  2
                </span>
                <span className="text-ink-soft">
                  Pahami alur inspeksi dan lembar kerja teknis harian.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}