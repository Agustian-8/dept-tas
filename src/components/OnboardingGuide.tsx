'use client';

import React from 'react';

const STEPS = [
  {
    week: 'Minggu Pertama · Hari 1–3',
    title: 'Pengenalan Ruang Lingkup & Struktur Departemen',
    desc: 'Membaca profil departemen Technical After Sales, memahami hierarki koordinasi kerja, dan berkenalan dengan anggota tim senior di lapangan.',
  },
  {
    week: 'Minggu Pertama · Hari 4–7',
    title: 'Wajib Baca SOP Utama & Standar Keselamatan',
    desc: 'Mempelajari dokumen bertanda khusus "Wajib Karyawan Baru" di menu Beranda, khususnya prosedur inspeksi unit dan standar penanganan ban/baterai.',
  },
  {
    week: 'Minggu Kedua',
    title: 'Praktik Lapangan & Penggunaan Form Checklist',
    desc: 'Ikut serta mendampingi senior melakukan inspeksi unit, mencoba mengisi lembar kerja digital/formulir laporan harian, serta memahami alur pelaporan data.',
  },
];

export default function OnboardingGuide() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-[11px] font-bold text-accent">
          Panduan Orientasi
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink">
          Alur Onboarding Karyawan Baru
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-ink-soft">
          Tahapan terstruktur bagi anggota baru agar cepat beradaptasi dengan standar
          operasional departemen.
        </p>
      </div>

      <div className="relative space-y-4">
        {/* Connector — garis solid, bukan gradient */}
        <span className="absolute left-[27px] top-8 bottom-8 hidden w-px bg-line sm:block" />

        {STEPS.map((item, idx) => (
          <div
            key={idx}
            className="card-lift relative flex flex-col gap-4 rounded-2xl border border-line bg-surface-card p-5 sm:flex-row sm:items-start sm:gap-5"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-lg font-black text-brand ring-4 ring-surface">
              0{idx + 1}
            </div>
            <div className="flex-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand">
                {item.week}
              </span>
              <h3 className="mt-1 text-[15px] font-bold text-ink">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}