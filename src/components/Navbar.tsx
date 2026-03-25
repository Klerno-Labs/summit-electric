import React from 'react';
import { cn } from '@/utils/cn';
import { NavbarProps } from './types/NavbarProps'; // Importing NavbarProps

const Navbar: React.FC<NavbarProps> = ({ logoText, links, ctaLabel, hasTrustBadge }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="container mx-auto px-6 flex justify-between items-center h-20">
        <div className="text-xl font-bold">{logoText}</div>
        <nav className="hidden md:flex space-x-8 text-gray-800">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </a>
          ))}
        </nav>
        {hasTrustBadge && <span className="text-sm text-gray-600">Licensed & Insured</span>}
        <button className="bg-accent text-white px-6 py-2 rounded-lg hover:scale-105 transition">
          {ctaLabel}
        </button>
      </div>
    </header>
  );
};

export default Navbar;