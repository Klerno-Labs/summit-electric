"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center h-20 px-6">
        <div className="text-xl font-bold">{siteConfig.name}</div>
        <nav className="hidden md:flex space-x-8 text-gray-900">
          <a href="/services" className="hover:underline">Services</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/gallery" className="hover:underline">Gallery</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Open menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className="hidden md:block">
          <a href={`tel:${siteConfig.phone}`} className="flex items-center space-x-2 text-gray-900">
            <Phone className="w-4 h-4" />
            <span>{siteConfig.phone}</span>
          </a>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="/services" className="hover:underline">Services</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/gallery" className="hover:underline">Gallery</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;