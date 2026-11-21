'use client';

import React, { useState } from 'react';

interface AvatarProps {
  src?: string;
  initials: string;
  name: string;
  size?: 'md' | 'lg';
}

export default function Avatar({ src, initials, name, size = 'md' }: AvatarProps) {
  const [imgError, setImgError] = useState(false);
  const showInitials = !src || imgError;

  const sizeClass =
    size === 'lg' ? 'h-20 w-20 text-2xl' : 'h-16 w-16 text-lg';

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full bg-brand ring-4 ring-surface-2 ${sizeClass}`}
    >
      {showInitials ? (
        <div className="flex h-full w-full items-center justify-center font-bold text-white">
          {initials}
        </div>
      ) : (
        <img
          src={src}
          alt={name}
          onError={() => setImgError(true)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}