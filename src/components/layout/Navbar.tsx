"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-xs py-2 border-b border-gray-800">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <Phone size={14} />
              {siteConfig.contact.phone}
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href={siteConfig.links.social[0].url} className="hover:text-blue-400">
              Facebook
            </a>
            <span className="text-gray-600">|</span>
            <a href={siteConfig.links.social[1].url} className="hover:text-blue-400">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          "fixed top-[32px] w-full z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-md py-3"
            : "bg-transparent py-4 border-transparent"
        )}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">
                ⚡
              </div>
              <span className="text-xl font-heading font-bold text-gray-900 tracking-tight">
                SUMMIT
              </span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              {siteConfig.links.nav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
              <Link
                href="#contact"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {siteConfig.links.nav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-blue-600 font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[80px] md:h-[112px]" />
    </>
  );
}