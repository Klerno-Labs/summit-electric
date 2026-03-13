"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white text-xs py-2 px-4 hidden md:flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <Phone size={12} />
            {siteConfig.contact.phone}
          </span>
          <span>{siteConfig.contact.hours}</span>
        </div>
        <div className="flex gap-4">
          <Link href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            Facebook
          </Link>
          <Link href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            Instagram
          </Link>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b border-gray-100 transition-all duration-300",
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
        )}
      >
        <div className="max-w-[1200px] mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-heading font-bold text-2xl text-primary tracking-tight">
            SUMMIT <span className="text-accent">ELECTRIC</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-semibold hover:text-primary transition-colors",
                  pathname === item.href ? "text-primary" : "text-text"
                )}
              >
                {item.title}
              </Link>
            ))}
            <Button variant="primary" size="sm" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-text"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden flex flex-col pt-24 px-6 space-y-6 shadow-xl animate-in slide-in-from-right">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl font-semibold text-text hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <Button size="lg" className="w-full" asChild>
             <Link href="/contact" onClick={() => setIsOpen(false)}>Get a Quote</Link>
          </Button>
          <div className="pt-4 border-t border-gray-100 text-sm text-muted">
             <p>{siteConfig.contact.phone}</p>
             <p>{siteConfig.contact.hours}</p>
          </div>
        </div>
      )}
    </>
  );
}