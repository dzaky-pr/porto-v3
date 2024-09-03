'use client';

import Link from 'next/link';
import React from 'react';

interface NotesTextProps {
  type: 'header';
  text: string;
  links: ReadonlyArray<{ href: string; text: string }>;
}

export const NotesText = ({ type, text, links }: NotesTextProps) => {
  return (
    <div className="flex flex-col mb-8 gap-y-2">
      {type === 'header' && <h2 className="text-xl font-bold">{text}</h2>}
      {links.map((link, index) => (
        <Link key={index} href={link.href || '#'} target="_blank" className="block cursor-alias w-fit">
          <p className="hover:underline font-regular text-md">{link.text}</p>
        </Link>
      ))}
    </div>
  );
};
