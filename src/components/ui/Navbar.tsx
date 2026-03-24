"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold">Summit Electric</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/services" className="text-gray-800 hover:text-blue-600">Services</Link>
          <Link href="/about" className="text-gray-800 hover:text-blue-600">About</Link>
          <Link href="/gallery" className="text-gray-800 hover:text-blue-600">Gallery</Link>
          <Link href="/service-areas" className="text-gray-800 hover:text-blue-600">Service Areas</Link>
          <Link href="/faq" className="text-gray-800 hover:text-blue-600">FAQ</Link>
        </nav>
        <div className="flex items-center gap-4">
          <a href="tel:+15125551234" className="hidden lg:flex items-center text-gray-800">
            <Phone className="mr-1" /> (512) 555-1234
          </a>
          <button onClick={toggleMenu} className="md:hidden p-2 rounded-md focus:outline-none">
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800 mt-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800 mt-1"></span>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col p-4">
            <Link href="/services" className="py-2 text-gray-800 hover:text-blue-600">Services</Link>
            <Link href="/about" className="py-2 text-gray-800 hover:text-blue-600">About</Link>
            <Link href="/gallery" className="py-2 text-gray-800 hover:text-blue-600">Gallery</Link>
            <Link href="/service-areas" className="py-2 text-gray-800 hover:text-blue-600">Service Areas</Link>
            <Link href="/faq" className="py-2 text-gray-800 hover:text-blue-600">FAQ</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;