import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-surface-2">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-bold text-ink">Technical After Sales</p>
            <p className="text-xs text-ink-soft">Portal Departemen Internal</p>
          </div>
          <p className="text-xs text-ink-soft">
            © 2026 Technical After Sales — Internal Use Only
          </p>
        </div>
      </div>
    </footer>
  );
}