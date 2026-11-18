'use client';

import React from 'react';
import { MessageCircle, Phone, AlertCircle, UserCheck } from 'lucide-react';
import { teamData } from '@/data/teamData';

const STEPS = [
  {
    id: 1,
    title: 'Isi Form Checklist',
    desc: 'Sebelum melaporkan, pastikan form checklist inspeksi sudah terisi lengkap.',
  },
  {
    id: 2,
    title: 'Hubungi Admin via WhatsApp',
    desc: 'Kirim ringkasan kendala + lampiran form ke Admin departemen.',
  },
  {
    id: 3,
    title: 'Eskalasi ke Manager',
    desc: 'Jika kendala belum tertangani dalam 24 jam, hubungi Manager langsung.',
  },
];

export default function KontakContent() {
  // ✅ Identifikasi berdasarkan role, bukan level
  const manager = teamData.find((m) =>
    m.role.toLowerCase().includes('manager')
  );

  const admin = teamData.find((m) =>
    m.role.toLowerCase().includes('admin') ||
    m.role.toLowerCase().includes('administrasi')
  );

  const teknis = teamData.filter((m) =>
    m.role.toLowerCase().includes('technical support')
  );

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10">
        <span className="inline-block rounded-full bg-brand-soft px-3 py-1 text-[11px] font-bold text-brand">
          Kontak & Eskalasi
        </span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink">
          Alur Pelaporan & Kontak PIC
        </h1>
        <p className="mt-1 text-sm text-ink-soft">
          Panduan komunikasi dan eskalasi kendala teknis di lapangan.
        </p>
      </div>

      {/* Alur Pelaporan */}
      <div className="mb-10 rounded-2xl border border-line bg-surface-card p-6">
        <div className="mb-5 flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-brand" strokeWidth={2.2} />
          <h2 className="text-sm font-bold uppercase tracking-wider text-ink-soft">
            Alur Pelaporan Darurat
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.id} className="rounded-xl border border-line bg-surface-2 p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-xs font-bold text-white">
                {s.id}
              </div>
              <h3 className="mt-3 text-sm font-bold text-ink">{s.title}</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Kartu PIC */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {manager && (
          <ContactCard
            title="PIC Departemen"
            subtitle={manager.role}
            name={manager.name}
            whatsapp={manager.whatsapp}
            icon={UserCheck}
            tone="brand"
          />
        )}
        {admin && (
          <ContactCard
            title="Admin & Koordinasi"
            subtitle={admin.role}
            name={admin.name}
            whatsapp={admin.whatsapp}
            icon={AlertCircle}
            tone="royal"
          />
        )}
      </div>

      {/* Tim Teknis */}
      {teknis.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-ink-soft">
            Tim Technical Support
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {teknis.map((t) => (
              <a
                key={t.id}
                href={`https://wa.me/${sanitizePhone(t.whatsapp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-brand flex items-center justify-between rounded-xl border border-line bg-surface-card px-4 py-3 transition-colors hover:border-brand"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-xs font-bold text-brand">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink">{t.name}</p>
                    <p className="text-[11px] text-ink-soft">{t.role}</p>
                  </div>
                </div>
                <MessageCircle className="h-4 w-4 text-brand" />
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

/* ============================================================
   Helper: sanitasi nomor telepon
   - hapus semua karakter non-digit
   - hapus leading '+' kalau ada
   ============================================================ */
function sanitizePhone(phone: string): string {
  return phone.replace(/\D/g, '');
}

/* ============================================================
   ContactCard
   ============================================================ */
function ContactCard({
  title,
  subtitle,
  name,
  whatsapp,
  icon: Icon,
  tone,
}: {
  title: string;
  subtitle: string;
  name: string;
  whatsapp: string;
  icon: React.ElementType;
  tone: 'brand' | 'royal';
}) {
  const styles =
    tone === 'brand'
      ? { bg: 'bg-brand-soft', fg: 'text-brand' }
      : { bg: 'bg-royal-soft', fg: 'text-royal' };

  const cleanPhone = sanitizePhone(whatsapp);

  return (
    <div className="rounded-2xl border border-line bg-surface-card p-6 transition-colors hover:border-brand">
      <div className="flex items-center gap-3">
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${styles.bg} ${styles.fg}`}>
          <Icon className="h-5 w-5" strokeWidth={2.2} />
        </div>
        <div>
          <h3 className="text-[15px] font-bold text-ink">{title}</h3>
          <p className="text-[11px] font-medium text-ink-soft">{subtitle}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-ink-soft">
        <strong className="text-ink">{name}</strong>
      </p>
      <div className="mt-4 flex gap-2">
        <a
          href={`https://wa.me/${cleanPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-brand flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-brand px-3 py-2.5 text-xs font-bold text-white transition-colors hover:bg-royal"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          WhatsApp
        </a>
        <a
          href={`tel:+${cleanPhone}`}
          className="focus-brand flex items-center justify-center gap-1.5 rounded-lg bg-surface-2 px-3 py-2.5 text-xs font-bold text-ink-soft transition-colors hover:text-ink"
        >
          <Phone className="h-3.5 w-3.5" />
          Telepon
        </a>
      </div>
    </div>
  );
}