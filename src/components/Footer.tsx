import React from 'react';
import { FaInstagram, FaTiktok, FaYoutube, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-surface-2">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Top section: brand + social */}
        <div className="flex flex-col items-center justify-between gap-6 border-b border-line pb-8 sm:flex-row">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold text-ink">Technical After Sales</p>
            <p className="text-xs text-ink-soft">Portal Departemen Internal</p>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-2">
            <SocialLink
              href="https://instagram.com/username"
              label="Instagram"
              icon={FaInstagram}
            />
            <SocialLink
              href="https://tiktok.com/@username"
              label="TikTok"
              icon={FaTiktok} 
            />
            <SocialLink
              href="https://youtube.com/@username"
              label="YouTube"
              icon={FaYoutube}
            />
            <SocialLink
              href="https://facebook.com/username"
              label="Facebook"
              icon={FaFacebook}
            />
          </div>
        </div>

        {/* Bottom section: copyright */}
        <div className="mt-6 text-center sm:text-left">
          <p className="text-xs text-ink-soft">
            © 2026 Technical After Sales — Internal Use Only
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   Komponen Social Link
   ============================================================ */
function SocialLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="focus-brand flex h-10 w-10 items-center justify-center rounded-xl bg-surface-card text-ink-soft transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-white hover:shadow-md"
    >
      <Icon className="h-4 w-4" strokeWidth={2} />
    </a>
  );
}