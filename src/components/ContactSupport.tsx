'use client';

import React from 'react';
import { UserCheck, AlertCircle, MessageCircle, ArrowUpRight, Phone } from 'lucide-react';

/* ============================================================
   GANTI NOMOR WA DI SINI
   Format: kode negara tanpa "+" dan tanpa spasi
   Contoh: 6281234567890 (62 = Indonesia, 8123... = nomor HP)
   ============================================================ */
const WA_PIC = '6281234567890';   // ← ganti nomor PIC
const WA_ADMIN = '6289876543210'; // ← ganti nomor Admin

const waLink = (phone: string, message: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

const CARDS = [
  {
    icon: UserCheck,
    tone: 'brand' as const,
    title: 'Penanggung Jawab Departemen',
    subtitle: 'Technical After Sales Manager',
    desc: 'Untuk persetujuan laporan khusus, kendala armada tingkat lanjut, atau koordinasi lintas departemen.',
    action: {
      label: 'Chat PIC via WhatsApp',
      href: waLink(
        WA_PIC,
        'Halo PIC Technical After Sales, saya ingin berkoordinasi terkait laporan teknis.'
      ),
      external: true,
    },
  },
  {
    icon: AlertCircle,
    tone: 'accent' as const,
    title: 'Alur Pelaporan Darurat',
    subtitle: 'Standar Respon Cepat',
    desc: 'Jika terjadi kendala mendesak di lapangan, pastikan mengisi form checklist terlebih dahulu sebelum meneruskan koordinasi via grup internal.',
    action: {
      label: 'Chat Admin via WhatsApp',
      href: waLink(
        WA_ADMIN,
        'Halo Admin Technical After Sales, saya ingin melaporkan kendala darurat di lapangan.'
      ),
      external: true,
    },
  },
];

const TONE = {
  brand: { bg: 'bg-brand-soft', fg: 'text-brand' },
  accent: { bg: 'bg-accent-soft', fg: 'text-accent' },
};

export default function ContactSupport() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-brand-soft px-3 py-1 text-[11px] font-bold text-brand">
          Koordinasi & Bantuan
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink">
          Alur Eskalasi & Kontak PIC Departemen
        </h2>
        <p className="mt-2 text-sm text-ink-soft">
          Pusat informasi penanggung jawab dan alur pelaporan kendala teknis di lapangan.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {CARDS.map((c) => {
          const tone = TONE[c.tone];
          const Icon = c.icon;
          return (
            <div
              key={c.title}
              className="group flex flex-col rounded-2xl border border-line bg-surface-card p-6 transition-colors hover:border-brand"
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${tone.bg} ${tone.fg}`}>
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-ink">{c.title}</h3>
                  <p className="text-[11px] font-medium text-ink-soft">{c.subtitle}</p>
                </div>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">{c.desc}</p>

              <a
                href={c.action.href}
                target={c.action.external ? '_blank' : undefined}
                rel={c.action.external ? 'noopener noreferrer' : undefined}
                className={`focus-brand mt-5 inline-flex items-center justify-center gap-1.5 rounded-lg ${tone.bg} px-3 py-2.5 text-xs font-bold ${tone.fg} transition-colors hover:opacity-90`}
              >
                <MessageCircle className="h-3.5 w-3.5" />
                {c.action.label}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          );
        })}
      </div>

      {/* Baris nomor telepon — info tambahan, biar jelas */}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <a
          href={`tel:+${WA_PIC}`}
          className="focus-brand flex items-center gap-3 rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-ink-soft transition-colors hover:border-brand hover:text-ink"
        >
          <Phone className="h-4 w-4 text-brand" />
          <span className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">PIC</span>
            <span className="font-semibold text-ink">+{WA_PIC}</span>
          </span>
        </a>
        <a
          href={`tel:+${WA_ADMIN}`}
          className="focus-brand flex items-center gap-3 rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-ink-soft transition-colors hover:border-brand hover:text-ink"
        >
          <Phone className="h-4 w-4 text-accent" />
          <span className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">Admin</span>
            <span className="font-semibold text-ink">+{WA_ADMIN}</span>
          </span>
        </a>
      </div>
    </section>
  );
}