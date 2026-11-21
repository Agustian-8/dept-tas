'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background-beranda.jpeg')" }}
        aria-hidden="true"
      />

      {/* Overlay — fokus kiri agar teks terbaca, kanan lebih transparan */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(100deg, rgba(15,14,14,0.88) 0%, rgba(15,14,14,0.60) 50%, rgba(15,14,14,0.20) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Konten */}
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-5">
          {/* Kiri — judul + tagline + tombol */}
          <div className="lg:col-span-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
              Portal Departemen Internal
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3rem]">
              Technical After Sales
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/85 sm:text-base">
              Mendukung Performa Armada melalui{' '}
              <span className="font-semibold text-white">Layanan Teknis Terintegrasi</span>.
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
                className="focus-brand inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Kenali Departemen
              </Link>
            </div>
          </div>

          {/* Kanan — card ringkasan (glassmorphism) */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md lg:col-span-2">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-white/70">
              Ringkasan Departemen
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
                <span className="text-white/85">
                  <strong className="text-white">Cakupan:</strong> Layanan purna jual teknis untuk armada & unit operasional.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
                <span className="text-white/85">
                  <strong className="text-white">Fokus:</strong> SOP, inspeksi unit, pelaporan kendala.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
                <span className="text-white/85">
                  <strong className="text-white">Akses:</strong> Terbuka untuk seluruh staff terkait.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}