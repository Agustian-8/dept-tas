'use client';

import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';
import { TeamMember } from '@/data/teamData';
import Avatar from './Avatar';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface-card transition-all hover:-translate-y-1 hover:border-brand hover:shadow-lg">
      {/* Foto */}
      <Avatar src={member.photo} initials={member.initials} name={member.name} />

      {/* Info */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[16px] font-bold leading-tight text-ink">{member.name}</h3>
        <p className="mt-0.5 text-[12px] font-semibold uppercase tracking-wider text-brand">
          {member.role}
        </p>
        {member.bio && (
          <p className="mt-2 line-clamp-2 flex-1 text-[13px] leading-relaxed text-ink-soft">
            {member.bio}
          </p>
        )}

        {/* Kontak */}
        <div className="mt-4 flex gap-2">
          <a
            href={`https://wa.me/${member.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-brand flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-brand-soft px-3 py-2 text-[11px] font-bold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            WhatsApp
          </a>
          <a
            href={`mailto:${member.email}`}
            className="focus-brand flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-surface-2 px-3 py-2 text-[11px] font-bold text-ink-soft transition-colors hover:text-ink"
          >
            <Mail className="h-3.5 w-3.5" />
            Email
          </a>
        </div>
      </div>
    </div>
  );
}