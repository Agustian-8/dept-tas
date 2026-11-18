'use client';

import React, { useState } from 'react';

interface AvatarProps {
  src?: string;
  initials: string;
  name: string;
}

export default function Avatar({ src, initials, name }: AvatarProps) {
  const [imgError, setImgError] = useState(false);
  const showInitials = !src || imgError;

  return (
    <div className="relative aspect-square w-full overflow-hidden bg-brand">
      {showInitials ? (
        <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-white">
          {initials}
        </div>
      ) : (
        <img
          src={src}
          alt={name}
          onError={() => setImgError(true)}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}
    </div>
  );
}