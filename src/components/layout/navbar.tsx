"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: siteConfig.links.home, label: "Home" },
    { href: siteConfig.links.about, label: "About" },
    { href: siteConfig.links.services, label: "Services" },
    { href: siteConfig.links.contact, label: "Contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:flex bg-[#0056b3] text-white text-xs py-2 px-4 justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Phone className="w-3 h-3" /> {siteConfig.contact.phone}
          </span>
          <span>{siteConfig.contact.hours}</span>
        </div>
        <div className="flex gap-3 opacity-90">
          {/* Placeholders for social links if needed, or removed per clean design */}
          <span>Serving Houston & Greater Area</span>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 bg-white border-b border-gray-100",
          isScrolled ? "shadow-md bg-white/95 backdrop-blur-lg" : "bg-white"
        )}
      >
        <div className="max-w-[1200px] mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-10">
            <div className="w-10 h-10 bg-[#0056b3] rounded-lg flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <span className="text-xl font-bold text-[#1f2937] font-['Montserrat']">
              Summit Electric
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-[#0056b3] font-['Open_Sans']",
                  pathname === link.href ? "text-[#0056b3]" : "text-[#1f2937]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="primary" asChild className="rounded-full">
              <Link href={siteConfig.links.contact}>Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-xl transform transition-transform duration-300 z-50 flex flex-col p-6">
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-lg">Menu</span>
              <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                <X />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-gray-900 hover:text-[#0056b3]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2 text-[#0056b3] font-bold mb-4"
                >
                  <Phone className="w-4 h-4" /> {siteConfig.contact.phone}
                </a>
                <Button asChild className="w-full rounded-full">
                  <Link href={siteConfig.links.contact}>Get a Quote</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
        
        {/* Mobile Menu Backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </header>
    </>
  );
}