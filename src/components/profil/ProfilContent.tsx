'use client';

import React from 'react';
import Link from 'next/link';
import { Eye, Target, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';
import { deptProfile } from '@/data/deptProfile';
import { onboardingSteps } from '@/data/onboardingSteps';

export default function ProfilContent() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-line bg-surface py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
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

      {/* Visi & Misi */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Eye className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <h3 className="text-[15px] font-bold text-ink">Visi</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">{deptProfile.visi}</p>
          </div>

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

      {/* Layanan */}
      <section className="border-t border-line bg-surface-2">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-ink">Cakupan Kerja</h2>
            <p className="mt-1 text-sm text-ink-soft">
              Fungsi dan layanan utama departemen Technical After Sales.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deptProfile.services.map((s, i) => (
              <div key={i} className="rounded-2xl border border-line bg-surface-card p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <Wrench className="h-4 w-4" strokeWidth={2.2} />
                </div>
                <h3 className="mt-3 text-sm font-bold text-ink">{s.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="inline-block rounded-full bg-royal-soft px-3 py-1 text-[11px] font-bold text-royal">
            Untuk Karyawan Baru
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink">
            Alur Onboarding Karyawan Baru
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-ink-soft">
            Tahapan terstruktur agar cepat beradaptasi dengan standar operasional departemen.
          </p>
        </div>

        <div className="relative space-y-4">
          <span className="absolute left-[27px] top-8 bottom-8 hidden w-px bg-line sm:block" />

          {onboardingSteps.map((step) => (
            <div
              key={step.id}
              className="card-lift relative flex flex-col gap-4 rounded-2xl border border-line bg-surface-card p-5 sm:flex-row sm:items-start sm:gap-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-lg font-black text-brand ring-4 ring-surface">
                0{step.id}
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand">
                  {step.week}
                </span>
                <h3 className="mt-1 text-[15px] font-bold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/materi"
            className="focus-brand inline-flex items-center gap-1.5 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white hover:bg-royal"
          >
            Buka Materi Wajib
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}