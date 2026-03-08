'use client';

import { useState } from 'react';
import Image from 'next/image';

export function ImageHover({ src, alt, children }: { src: string; alt: string; children: React.ReactNode }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <span className="underline cursor-pointer" onClick={() => setShow(true)}>
        {children}
      </span>
      {show && (
        <span
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setShow(false)}
        >
          <span className="relative max-w-lg w-full mx-4 rounded-lg overflow-hidden shadow-2xl">
            <Image src={src} alt={alt} width={800} height={600} className="w-full h-auto object-contain" />
          </span>
        </span>
      )}
    </>
  );
}
