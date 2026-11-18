'use client';

import React from 'react';
import Link from 'next/link';
import HeroHome from './HeroHome';
import { deptProfile } from '@/data/deptProfile';
import { BookOpen, Users, Layers, ArrowRight, PhoneCall, Building2 } from 'lucide-react';

const QUICK_ACTIONS = [
  {
    icon: BookOpen,
    title: 'Jelajahi Materi',
    desc: 'Akses seluruh SOP, panduan teknis, checklist, dan katalog dalam satu tempat.',
    href: '/materi',
  },
  {
    icon: Building2,
    title: 'Kenali Departemen',
    desc: 'Pelajari visi, misi, dan cakupan kerja Technical After Sales.',
    href: '/profil',
  },
  {
    icon: Users,
    title: 'Struktur Tim',
    desc: 'Lihat siapa saja anggota tim dan bagaimana Anda bisa menghubungi mereka.',
    href: '/tim',
  },
  {
    icon: PhoneCall,
    title: 'Kontak & Eskalasi',
    desc: 'Alur pelaporan kendala darurat dan kontak PIC departemen.',
    href: '/kontak',
  },
];

export default function HomeContent() {
  return (
    <>
      <HeroHome />

      {/* Stats */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4">
            <StatBlock label="Modul Tersedia" value={deptProfile.stats.modules} icon={BookOpen} />
            <StatBlock label="Kategori" value={deptProfile.stats.categories} icon={Layers} />
            <StatBlock label="Anggota Tim" value={deptProfile.stats.teamMembers} icon={Users} />
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink">
            Apa yang bisa Anda lakukan di sini?
          </h2>
          <p className="mt-1 text-sm text-ink-soft">
            Portal ini dirancang sebagai pintu masuk tunggal untuk seluruh kebutuhan informasi departemen.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK_ACTIONS.map(({ icon: Icon, title, desc, href }) => (
            <Link
              key={title}
              href={href}
              className="card-lift group flex flex-col items-start rounded-2xl border border-line bg-surface-card p-5 text-left"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <h3 className="mt-4 text-[15px] font-bold text-ink group-hover:text-brand">
                {title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-brand transition-all group-hover:gap-2">
                Buka <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Callout karyawan baru */}
      <section className="border-t border-line bg-surface-2">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-brand/20 bg-surface-card p-6 sm:flex-row sm:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-ink">Baru bergabung di departemen ini?</h3>
                <p className="mt-1 text-sm text-ink-soft">
                  Mulai dari panduan orientasi terstruktur untuk memahami alur kerja Technical After Sales.
                </p>
              </div>
            </div>
            <Link
              href="/profil"
              className="focus-brand inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-brand px-4 py-2.5 text-xs font-bold text-white hover:bg-royal"
            >
              Lihat Panduan Onboarding
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function StatBlock({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: number;
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-2xl border border-line bg-surface-card p-5">
      <div className="flex items-center gap-2 text-ink-soft">
        <Icon className="h-4 w-4 text-brand" strokeWidth={2.2} />
        <span className="text-[11px] font-semibold uppercase tracking-wider">{label}</span>
      </div>
      <p className="mt-2 text-3xl font-extrabold tracking-tight text-ink">{value}</p>
    </div>
  );
}