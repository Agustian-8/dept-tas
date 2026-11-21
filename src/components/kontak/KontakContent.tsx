'use client';

import React, { useState, useMemo } from 'react';
import {
  Phone, AlertCircle, UserCheck, Search,
  ChevronDown, HelpCircle, X, Mail,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { teamData } from '@/data/teamData';
import { faqData, FaqItem } from '@/data/faqData';

/* ============================================================
   Alur Eskalasi
   ============================================================ */
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

/* ============================================================
   Helper: sanitasi nomor telepon
   ============================================================ */
function sanitizePhone(phone: string): string {
  return phone.replace(/\D/g, '');
}

/* ============================================================
   Main Component
   ============================================================ */
export default function KontakContent() {
  const manager = teamData.find((m) =>
    m.role.toLowerCase().includes('manager')
  );
  const admin = teamData.find((m) =>
    m.role.toLowerCase().includes('admin') ||
    m.role.toLowerCase().includes('administrasi')
  );

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* ============ HEADER ============ */}
      <div className="mb-10">
        <span className="inline-block rounded-full bg-brand-soft px-3 py-1 text-[11px] font-bold text-brand">
          Kontak & Bantuan
        </span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink">
          Alur Pelaporan & Kontak PIC
        </h1>
        <p className="mt-1 max-w-2xl text-sm text-ink-soft">
          Panduan komunikasi, eskalasi kendala teknis, dan pertanyaan yang sering diajukan.
        </p>
      </div>

      {/* ============ ALUR ESKALASI ============ */}
      <div className="mb-10 rounded-2xl border border-line bg-surface-card p-6">
        <div className="mb-5 flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-brand" strokeWidth={2.2} />
          <h2 className="text-sm font-bold uppercase tracking-wider text-ink-soft">
            Alur Pelaporan Darurat
          </h2>
        </div>

        <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STEPS.map((s, idx) => (
            <div key={s.id} className="relative">
              {/* Connector line (desktop) */}
              {idx < STEPS.length - 1 && (
                <div className="absolute left-full top-4 hidden h-px w-4 -translate-y-1/2 bg-line sm:block" />
              )}

              <div className="rounded-xl border border-line bg-surface-2 p-4 transition-colors hover:border-brand">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-xs font-bold text-white">
                  {s.id}
                </div>
                <h3 className="mt-3 text-sm font-bold text-ink">{s.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============ KONTAK PIC ============ */}
      <div className="mb-10">
        <div className="mb-4 flex items-center gap-2">
          <UserCheck className="h-4 w-4 text-brand" strokeWidth={2.2} />
          <h2 className="text-sm font-bold uppercase tracking-wider text-ink-soft">
            Kontak PIC
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {manager && (
            <ContactCard
              title="PIC Departemen"
              role={manager.role}
              name={manager.name}
              photo={manager.photo}
              initials={manager.initials}
              whatsapp={manager.whatsapp}
              email={manager.email}
              tone="brand"
            />
          )}
          {admin && (
            <ContactCard
              title="Admin & Koordinasi"
              role={admin.role}
              name={admin.name}
              photo={admin.photo}
              initials={admin.initials}
              whatsapp={admin.whatsapp}
              email={admin.email}
              tone="royal"
            />
          )}
        </div>
      </div>

      {/* ============ FAQ ============ */}
      <FaqSection />
    </section>
  );
}

/* ============================================================
   Contact Card — dengan foto & icon WA asli
   ============================================================ */
function ContactCard({
  title,
  role,
  name,
  photo,
  initials,
  whatsapp,
  email,
  tone,
}: {
  title: string;
  role: string;
  name: string;
  photo?: string;
  initials: string;
  whatsapp: string;
  email: string;
  tone: 'brand' | 'royal';
}) {
  const [imgError, setImgError] = useState(false);
  const styles =
    tone === 'brand'
      ? { bg: 'bg-brand-soft', fg: 'text-brand', btn: 'bg-brand hover:bg-[#25D366]' }
      : { bg: 'bg-royal-soft', fg: 'text-royal', btn: 'bg-royal hover:bg-[#25D366]' };

  const cleanPhone = sanitizePhone(whatsapp);
  const showInitials = !photo || imgError;

  return (
    <div className="rounded-2xl border border-line bg-surface-card p-6 transition-colors hover:border-brand">
      <div className="flex items-center gap-4">
        {/* Foto */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand text-base font-bold text-white ring-4 ring-surface-card">
          {showInitials ? (
            <span>{initials}</span>
          ) : (
            <img
              src={photo}
              alt={name}
              onError={() => setImgError(true)}
              className="h-full w-full object-cover"
            />
          )}
        </div>

        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-wider text-ink-soft">
            {title}
          </p>
          <p className="mt-0.5 truncate text-[15px] font-bold text-ink">{name}</p>
          <p className="truncate text-[12px] text-ink-soft">{role}</p>
        </div>
      </div>

      {/* Kontak buttons */}
      <div className="mt-5 flex gap-2">
        {/* WhatsApp — icon asli, hover hijau */}
        <a
          href={`https://wa.me/${cleanPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`focus-brand flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 text-xs font-bold text-white transition-colors ${styles.btn}`}
        >
          <FaWhatsapp className="h-4 w-4" />
          WhatsApp
        </a>

        {/* Email — hover abu gelap */}
        <a
          href={`mailto:${email}`}
          className="focus-brand flex items-center justify-center gap-1.5 rounded-lg bg-surface-2 px-3 py-2.5 text-xs font-bold text-ink-soft transition-colors hover:bg-ink-soft hover:text-white"
        >
          <Mail className="h-3.5 w-3.5" />
          Email
        </a>
      </div>
    </div>
  );
}

/* ============================================================
   FAQ Section
   ============================================================ */
function FaqSection() {
  const [search, setSearch] = useState('');
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    if (!q) return faqData;
    return faqData.filter(
      (f) =>
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <HelpCircle className="h-4 w-4 text-brand" strokeWidth={2.2} />
        <h2 className="text-sm font-bold uppercase tracking-wider text-ink-soft">
          Pertanyaan yang Sering Diajukan
        </h2>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
        <input
          type="text"
          placeholder="Cari pertanyaan..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="focus-brand w-full rounded-xl border border-line bg-surface-card py-2.5 pl-10 pr-9 text-sm text-ink placeholder:text-ink-soft/60"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-ink-soft hover:text-ink"
            aria-label="Bersihkan"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* FAQ List */}
      {filtered.length > 0 ? (
        <div className="space-y-2">
          {filtered.map((item) => (
            <FaqAccordion
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-line bg-surface-2/50 py-12 text-center">
          <HelpCircle className="mx-auto h-8 w-8 text-ink-soft" strokeWidth={1.5} />
          <p className="mt-3 text-sm font-semibold text-ink">
            Pertanyaan tidak ditemukan
          </p>
          <p className="mt-1 text-xs text-ink-soft">Coba kata kunci lain.</p>
        </div>
      )}

      {/* CTA bawah */}
      <div className="mt-6 rounded-2xl border border-line bg-surface-2 p-5 text-center">
        <p className="text-sm font-semibold text-ink">
          Pertanyaan Anda belum terjawab?
        </p>
        <p className="mt-1 text-xs text-ink-soft">
          Hubungi Admin departemen via WhatsApp untuk bantuan lebih lanjut.
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   FAQ Accordion Item
   ============================================================ */
function FaqAccordion({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border transition-colors ${
        isOpen
          ? 'border-brand bg-surface-card'
          : 'border-line bg-surface-card hover:border-brand/50'
      }`}
    >
      <button
        onClick={onToggle}
        className="focus-brand flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3">
          <span className="mt-0.5 inline-block shrink-0 rounded-full bg-brand-soft px-2 py-0.5 text-[10px] font-bold text-brand">
            {item.category}
          </span>
          <span className="text-sm font-semibold text-ink">{item.question}</span>
        </div>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-ink-soft transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-brand' : ''
          }`}
          strokeWidth={2.2}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-line px-4 py-3.5 text-[13px] leading-relaxed text-ink-soft">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}