'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { deptProfile } from '@/data/deptProfile';

export default function HeroHome() {
  return (
    <section className="border-b border-line bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand-soft px-3 py-1 text-[11px] font-semibold text-brand">
              Portal Departemen Internal
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-[3rem] lg:leading-[1.1]">
              {deptProfile.name}
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft sm:text-base">
              {deptProfile.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/materi"
                className="focus-brand inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-royal"
              >
                <BookOpen className="h-4 w-4" />
                Jelajahi Materi
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/profil"
                className="focus-brand inline-flex items-center gap-2 rounded-xl border border-line bg-surface-card px-5 py-3 text-sm font-bold text-ink transition-colors hover:border-brand hover:text-brand"
              >
                Kenali Departemen
              </Link>
            </div>
          </div>

          {/* Card ringkas */}
          <div className="rounded-2xl border border-line bg-surface-card p-6 lg:col-span-2">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-ink-soft">
              Ringkasan Departemen
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span className="text-ink-soft">
                  <strong className="text-ink">Cakupan:</strong> {deptProfile.tagline}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span className="text-ink-soft">
                  <strong className="text-ink">Fokus:</strong> SOP, inspeksi unit, pelaporan kendala.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span className="text-ink-soft">
                  <strong className="text-ink">Akses:</strong> Terbuka untuk seluruh staff terkait.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}