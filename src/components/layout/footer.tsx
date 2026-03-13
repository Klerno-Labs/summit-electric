"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#0056b3] rounded flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="text-xl font-bold font-['Montserrat']">
                Summit Electric
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Trusted local service provider delivering quality workmanship and reliable home improvement solutions since 2010.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-['Montserrat']">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href={siteConfig.links.home} className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href={siteConfig.links.about} className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={siteConfig.links.services} className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href={siteConfig.links.contact} className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-['Montserrat']">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services#residential" className="hover:text-white transition-colors">Residential Wiring</Link></li>
              <li><Link href="/services#commercial" className="hover:text-white transition-colors">Commercial Services</Link></li>
              <li><Link href="/services#repair" className="hover:text-white transition-colors">Emergency Repairs</Link></li>
              <li><Link href="/services#panel" className="hover:text-white transition-colors">Panel Upgrades</Link></li>
              <li><Link href="/services#lighting" className="hover:text-white transition-colors">Lighting Installation</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-['Montserrat']">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#0056b3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">{siteConfig.contact.phone}</p>
                  <p className="text-xs mt-1">24/7 Emergency Line</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#0056b3] flex-shrink-0 mt-0.5" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0056b3] flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
          <button
            onClick={scrollToTop}
            className="p-2 bg-gray-800 rounded-full hover:bg-[#0056b3] transition-colors text-white"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}