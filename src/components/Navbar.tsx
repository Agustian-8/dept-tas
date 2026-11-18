'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Wrench, Home, Building2, BookOpen, Users, PhoneCall, Menu, X } from 'lucide-react';

const NAV = [
  { href: '/', label: 'Beranda', icon: Home },
  { href: '/profil', label: 'Profil', icon: Building2 },
  { href: '/materi', label: 'Materi', icon: BookOpen },
  { href: '/tim', label: 'Tim', icon: Users },
  { href: '/kontak', label: 'Kontak', icon: PhoneCall },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="focus-brand flex items-center gap-3 text-left"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white">
            <Wrench className="h-5 w-5" strokeWidth={2.2} />
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-royal ring-2 ring-surface" />
          </div>
          <div>
            <h1 className="text-[15px] font-bold leading-tight tracking-tight text-ink">
              Technical After Sales
            </h1>
            <p className="text-[11px] font-medium text-ink-soft">
              Portal Departemen Internal
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 rounded-xl bg-surface-2 p-1 md:flex">
          {NAV.map(({ href, label, icon: Icon }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
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
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="focus-brand rounded-lg p-2 text-ink-soft hover:bg-surface-2 md:hidden"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav className="border-t border-line bg-surface p-3 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map(({ href, label, icon: Icon }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`focus-brand flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                    active
                      ? 'bg-brand-soft text-brand'
                      : 'text-ink-soft hover:bg-surface-2 hover:text-ink'
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={2.2} />
                  <span>{label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}