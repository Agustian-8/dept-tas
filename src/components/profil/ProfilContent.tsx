'use client';

import React from 'react';
import Link from 'next/link';
import {
  Eye, Target, ArrowRight, CheckCircle2,
  ClipboardCheck, FileWarning, GraduationCap,
  CircleDot, Network, FileText,
} from 'lucide-react';
import { deptProfile } from '@/data/deptProfile';
import { onboardingSteps } from '@/data/onboardingSteps';

/* ============================================================
   Icon per layanan — sesuai konteks
   ============================================================ */
const SERVICE_ICONS: Record<string, React.ElementType> = {
  'Inspeksi Unit & Armada': ClipboardCheck,
  'Pelaporan Kendala': FileWarning,
  'Pelatihan Teknis': GraduationCap,
  'Perawatan Ban & Aki': CircleDot,
  'Koordinasi Lintas Dept': Network,
  'Dokumentasi SOP': FileText,
};

const FALLBACK_ICON = FileText;

export default function ProfilContent() {
  return (
    <>
      {/* ============================================================
          HEADER — Tentang Departemen
          ============================================================ */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-brand-soft px-3 py-1 text-[11px] font-bold text-brand">
            Profil Departemen
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Tentang {deptProfile.name}
          </h1>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
            {deptProfile.about}
          </p>
        </div>
      </section>

      {/* ============================================================
          VISI & MISI
          ============================================================ */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink">
            Visi & Misi
          </h2>
          <p className="mt-1 text-sm text-ink-soft">
            Arah dan komitmen departemen Technical After Sales.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Visi */}
          <div className="rounded-2xl border border-line bg-surface-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Eye className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <h3 className="text-[15px] font-bold text-ink">Visi</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              {deptProfile.visi}
            </p>
          </div>

          {/* Misi */}
          <div className="rounded-2xl border border-line bg-surface-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal-soft text-royal">
                <Target className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <h3 className="text-[15px] font-bold text-ink">Misi</h3>
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
              {deptProfile.misi.map((m, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================
          CAKUPAN KERJA
          ============================================================ */}
      <section className="border-t border-line bg-surface-2">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-ink">
              Cakupan Kerja
            </h2>
            <p className="mt-1 text-sm text-ink-soft">
              Fungsi dan layanan utama departemen Technical After Sales.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deptProfile.services.map((s, i) => {
              const Icon = SERVICE_ICONS[s.title] ?? FALLBACK_ICON;
              return (
                <div
                  key={i}
                  className="card-lift rounded-2xl border border-line bg-surface-card p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-ink">{s.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          ONBOARDING — hanya warna yang disesuaikan
          ============================================================ */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-royal" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                Untuk Karyawan Baru
              </span>
            </div>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Alur Onboarding
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-ink-soft">
              {onboardingSteps.length} tahap terstruktur agar cepat beradaptasi dengan standar operasional.
            </p>
          </div>

          <div className="relative">
            {onboardingSteps.map((step, idx) => {
              const isLast = idx === onboardingSteps.length - 1;
              return (
                <div key={step.id} className="relative flex gap-5 pb-8 last:pb-0">
                  {/* Step indicator + connector */}
                  <div className="relative flex flex-col items-center">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-black text-white">
                      {step.id}
                    </div>
                    {!isLast && (
                      <div className="mt-1 w-px flex-1 bg-line" aria-hidden="true" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <span className="inline-block rounded-full bg-brand-soft px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-brand">
                      {step.week}
                    </span>
                    <h3 className="mt-1.5 text-[15px] font-bold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-2xl border border-brand/20 bg-brand-soft p-6 text-center">
            <p className="text-sm font-semibold text-ink">
              Siap memulai orientasi?
            </p>
            <p className="mt-1 text-xs text-ink-soft">
              Buka materi wajib dan pelajari standar operasional departemen.
            </p>
            <Link
              href="/materi"
              className="focus-brand mt-4 inline-flex items-center gap-1.5 rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-royal"
            >
              Buka Materi Wajib
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}