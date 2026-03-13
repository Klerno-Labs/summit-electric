"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100" : "bg-white"
        )}
      >
        {/* Top Bar */}
        <div className="hidden md:flex bg-primary text-white text-xs py-2 px-4 justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-3 h-3" /> {siteConfig.contact.phone}
            </span>
            <span>{siteConfig.contact.hours}</span>
          </div>
          <div className="flex gap-4">
            <Link href={`tel:${siteConfig.contact.phone}`} className="hover:text-gray-200 transition-colors">
              Emergency Service
            </Link>
          </div>
        </div>

        {/* Main Nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary text-white p-1.5 rounded-lg">
              <span className="font-heading font-bold text-xl">SE</span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground tracking-tight">
              Summit<span className="text-primary">Electric</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-primary relative group",
                  pathname === item.href ? "text-primary" : "text-foreground"
                )}
              >
                {item.title}
                {pathname === item.href && (
                  <span className="absolute -bottom-6 left-0 w-full h-0.5 bg-primary" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl flex flex-col p-6 transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center mb-8">
              <span className="font-heading font-bold text-lg">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-500 hover:text-foreground transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-4">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-base font-medium py-2 border-b border-gray-100 last:border-0",
                    pathname === item.href ? "text-primary" : "text-foreground"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <div className="mt-auto space-y-4">
              <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 text-primary font-bold">
                <Phone className="w-4 h-4" /> {siteConfig.contact.phone}
              </a>
              <Button variant="primary" className="w-full" asChild>
                <Link href="/contact" onClick={() => setIsOpen(false)}>Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}