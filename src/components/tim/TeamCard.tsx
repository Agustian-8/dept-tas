'use client';

import React from 'react';
import { Mail, BadgeCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { TeamMember } from '@/data/teamData';
import Avatar from './Avatar';

interface TeamCardProps {
  member: TeamMember;
}

/* ============================================================
   Tentukan tone berdasarkan role
   ============================================================ */
function getRoleTone(role: string) {
  const r = role.toLowerCase();

  if (r.includes('manager')) {
    return {
      isManager: true,
      badgeBg: 'bg-brand',
      badgeText: 'text-white',
      roleText: 'text-brand',
    };
  }

  if (r.includes('admin') || r.includes('administrasi')) {
    return {
      isManager: false,
      badgeBg: 'bg-royal-soft',
      badgeText: 'text-royal',
      roleText: 'text-royal',
    };
  }

  return {
    isManager: false,
    badgeBg: 'bg-surface-2',
    badgeText: 'text-ink-soft',
    roleText: 'text-ink-soft',
  };
}

/* ============================================================
   Main Component
   ============================================================ */
export default function TeamCard({ member }: TeamCardProps) {
  const tone = getRoleTone(member.role);
  const cleanPhone = member.whatsapp.replace(/\D/g, '');

  return (
    <div
      className={`card-lift group flex flex-col rounded-2xl border bg-surface-card p-5 transition-all ${
        tone.isManager
          ? 'border-brand/30 ring-1 ring-brand/10'
          : 'border-line hover:border-brand'
      }`}
    >
      {/* ============ TOP: Avatar + Info ============ */}
      <div className="flex items-start gap-4">
        <Avatar
          src={member.photo}
          initials={member.initials}
          name={member.name}
          size={tone.isManager ? 'lg' : 'md'}
        />

        <div className="min-w-0 flex-1 pt-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="truncate text-[15px] font-bold leading-tight text-ink">
                {member.name}
              </h3>
              <p
                className={`mt-1 text-[11px] font-bold uppercase tracking-wider ${tone.roleText}`}
              >
                {member.role}
              </p>
            </div>

            {/* Badge Pimpinan — hanya untuk Manager */}
            {tone.isManager && (
              <span
                className={`flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-[10px] font-bold ${tone.badgeBg} ${tone.badgeText}`}
              >
                <BadgeCheck className="h-3 w-3" />
                Pimpinan
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ============ BIO — 2 baris ============ */}
      {member.bio && (
        <p
          className="mt-3 line-clamp-2 text-[12px] leading-relaxed text-ink-soft"
          title={member.bio}
        >
          {member.bio}
        </p>
      )}

      {/* ============ DIVIDER ============ */}
      <div className="mt-4 border-t border-line" />

      {/* ============ KONTAK — Icon WA + Email ============ */}
      <div className="mt-3 flex items-center justify-end gap-1.5">
        {/* WhatsApp — icon asli, hover hijau WA */}
        <a
          href={`https://wa.me/${cleanPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`WhatsApp ${member.name}`}
          title="WhatsApp"
          className="focus-brand flex h-8 w-8 items-center justify-center rounded-lg bg-brand-soft text-brand transition-colors hover:bg-[#25D366] hover:text-white"
        >
          <FaWhatsapp className="h-4 w-4" />
        </a>

        {/* Email */}
        <a
          href={`mailto:${member.email}`}
          aria-label={`Email ${member.name}`}
          title="Email"
          className="focus-brand flex h-8 w-8 items-center justify-center rounded-lg bg-surface-2 text-ink-soft transition-colors hover:bg-ink-soft hover:text-white"
        >
          <Mail className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}