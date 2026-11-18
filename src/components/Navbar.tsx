'use client';

import React from 'react';
import { Wrench, BookOpen, Home, PhoneCall } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NAV = [
  { id: 'beranda', label: 'Beranda & Modul', icon: Home },
  { id: 'onboarding', label: 'Onboarding', icon: BookOpen },
  { id: 'kontak', label: 'Alur & Kontak', icon: PhoneCall },
];

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white">
            <Wrench className="h-5 w-5" strokeWidth={2.2} />
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-surface" />
          </div>
          <div>
            <h1 className="text-[15px] font-bold leading-tight tracking-tight text-ink">
              Technical After Sales
            </h1>
            <p className="text-[11px] font-medium text-ink-soft">
              Portal Dokumen & Modul Internal
            </p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-1 overflow-x-auto rounded-xl bg-surface-2 p-1">
          {NAV.map(({ id, label, icon: Icon }) => {
            const active = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`focus-brand relative flex items-center gap-2 whitespace-nowrap rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors ${
                  active
                    ? 'bg-surface-card text-brand'
                    : 'text-ink-soft hover:text-ink'
                }`}
              >
                <Icon className="h-3.5 w-3.5" strokeWidth={2.2} />
                <span>{label}</span>
                {active && (
                  <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-brand" />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}