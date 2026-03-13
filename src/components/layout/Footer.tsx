"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Facebook, Instagram, Linkedin, Twitter, ArrowUp, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 text-white">
              <div className="bg-primary text-white p-1.5 rounded-lg">
                <span className="font-heading font-bold text-xl">SE</span>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                Summit<span className="text-primary">Electric</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Summit Electric has been providing Austin residents with safe, reliable, and affordable electrical solutions for over 15 years.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href={siteConfig.links.facebook || "#"} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Visit our Facebook page"
                className="hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig.links.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Visit our Instagram page"
                className="hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig.links.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Visit our Twitter page"
                className="hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig.links.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Visit our LinkedIn page"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="text-sm hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>Residential Wiring</li>
              <li>Panel Upgrades</li>
              <li>Lighting Design</li>
              <li>EV Charger Installation</li>
              <li>Emergency Repairs</li>
              <li>Commercial Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="text-sm hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-sm hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            Back to top <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}