'use client';

import React, { useMemo } from 'react';
import { Users, UserCog, ShieldCheck, Wrench } from 'lucide-react';
import { teamData } from '@/data/teamData';
import TeamCard from './TeamCard';

export default function TimContent() {
  /* Kelompokkan per level */
  const stats = useMemo(() => {
    const managers = teamData.filter((m) =>
      m.role.toLowerCase().includes('manager')
    ).length;
    const admins = teamData.filter((m) =>
      m.role.toLowerCase().includes('admin') ||
      m.role.toLowerCase().includes('administrasi')
    ).length;
    const techs = teamData.length - managers - admins;
    return { managers, admins, techs, total: teamData.length };
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10">
        <span className="inline-block rounded-full bg-brand-soft px-3 py-1 text-[11px] font-bold text-brand">
          Struktur Organisasi
        </span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink">
          Tim Technical After Sales
        </h1>
        <p className="mt-1 max-w-2xl text-sm text-ink-soft">
          Kenali siapa saja anggota tim dan bagaimana Anda dapat menghubungi mereka
          untuk koordinasi maupun eskalasi.
        </p>
      </div>

      {/* Statistik ringkas */}
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatBox
          icon={Users}
          label="Total Anggota"
          value={stats.total}
          tone="brand"
        />
        <StatBox
          icon={UserCog}
          label="Pimpinan"
          value={stats.managers}
          tone="brand"
        />
        <StatBox
          icon={ShieldCheck}
          label="Administrasi"
          value={stats.admins}
          tone="royal"
        />
        <StatBox
          icon={Wrench}
          label="Technical Support"
          value={stats.techs}
          tone="neutral"
        />
      </div>

      {/* Grid card */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {teamData.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   Stat Box
   ============================================================ */
function StatBox({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  tone: 'brand' | 'royal' | 'neutral';
}) {
  const toneClass = {
    brand: { bg: 'bg-brand-soft', fg: 'text-brand' },
    royal: { bg: 'bg-royal-soft', fg: 'text-royal' },
    neutral: { bg: 'bg-surface-2', fg: 'text-ink-soft' },
  }[tone];

  return (
    <div className="rounded-xl border border-line bg-surface-card p-4">
      <div className="flex items-center gap-2">
        <div
          className={`flex h-7 w-7 items-center justify-center rounded-lg ${toneClass.bg} ${toneClass.fg}`}
        >
          <Icon className="h-3.5 w-3.5" strokeWidth={2.2} />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">
          {label}
        </span>
      </div>
      <p className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
        {value}
      </p>
    </div>
  );
}