"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-white border-b border-transparent"
        )}
      >
        {/* Top Bar */}
        <div className="hidden md:flex bg-[#0056b3] text-white text-xs py-2 px-6 justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-3 h-3" />
              <strong>(512) 555-0199</strong>
            </span>
            <span>Mon-Fri: 8am-6pm | Sat: 9am-2pm</span>
          </div>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-gray-200 transition-colors">Get a Quote</Link>
            <span>|</span>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">Facebook</a>
          </div>
        </div>

        {/* Main Nav */}
        <div className="container-custom flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-[#0056b3] text-white p-2 rounded-lg group-hover:bg-[#004494] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-heading text-gray-900 leading-none">Summit</span>
              <span className="text-xs font-semibold text-[#0056b3] tracking-wider uppercase leading-tight">Electric</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold uppercase tracking-wide transition-colors hover:text-[#0056b3]",
                  pathname === link.href ? "text-[#0056b3]" : "text-gray-600"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="accent" size="sm" asChild>
              <a href="tel:5125550199">Call Now</a>
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-[#0056b3] focus:outline-none focus:ring-2 focus:ring-[#0056b3] rounded-md"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu Slide-out */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
             <span className="text-xl font-bold font-heading text-gray-900">Menu</span>
             <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-600 hover:text-[#0056b3] rounded-md"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-semibold transition-colors",
                  pathname === link.href ? "text-[#0056b3]" : "text-gray-600"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto">
            <Button variant="accent" className="w-full justify-center" asChild>
              <a href="tel:5125550199">Call (512) 555-0199</a>
            </Button>
            <p className="text-xs text-center text-gray-500 mt-4">Emergency Service Available 24/7</p>
          </div>
        </div>
      </div>
    </>
  );
}