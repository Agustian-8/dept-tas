'use client';

import React from 'react';
import { Users } from 'lucide-react';
import { teamData } from '@/data/teamData';
import TeamCard from './TeamCard';

export default function TimContent() {
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

      {/* Ringkasan */}
      <div className="mb-8 flex items-center gap-2 text-sm text-ink-soft">
        <Users className="h-4 w-4 text-brand" strokeWidth={2.2} />
        <span>
          <strong className="text-ink">{teamData.length}</strong> anggota tim
        </span>
      </div>

      {/* Grid Card */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teamData.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}