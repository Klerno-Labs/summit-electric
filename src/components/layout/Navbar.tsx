"use client";

import { useState } from 'react';
import { images } from '@/config/images';
import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <div className="flex items-center">
          <img src={images["menu-1"].src} alt="Summit Electric Logo" className="h-8" />
          <span className="ml-2 text-xl font-bold">Summit Electric</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-700 hover:text-primary">Home</a>
          <a href="/services" className="text-gray-700 hover:text-primary">Services</a>
          <a href="/about" className="text-gray-700 hover:text-primary">About</a>
          <a href="/gallery" className="text-gray-700 hover:text-primary">Gallery</a>
          <a href="/contact" className="text-gray-700 hover:text-primary">Contact</a>
        </div>
        <div className="hidden md:flex items-center">
          <Phone className="text-primary" />
          <span className="ml-1 text-gray-700">(512) 555-1234</span>
        </div>
        <button onClick={toggleMenu} className="md:hidden p-2">
          <span className="sr-only">Open menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col bg-white shadow-lg">
            <a href="/" className="p-4 hover:bg-gray-100">Home</a>
            <a href="/services" className="p-4 hover:bg-gray-100">Services</a>
            <a href="/about" className="p-4 hover:bg-gray-100">About</a>
            <a href="/gallery" className="p-4 hover:bg-gray-100">Gallery</a>
            <a href="/contact" className="p-4 hover:bg-gray-100">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;