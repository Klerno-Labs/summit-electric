"use client";

import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Section: Socials */}
      <div className="border-b border-gray-800 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Summit Electric. All rights reserved.
          </div>
          <div className="flex gap-4">
            {siteConfig.links.social.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.name} page`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {social.name === "Facebook" && <Facebook size={20} />}
                {social.name === "Instagram" && <Instagram size={20} />}
                {social.name === "LinkedIn" && <Linkedin size={20} />}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">
                ⚡
              </div>
              <span className="text-xl font-heading font-bold tracking-tight">
                SUMMIT
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Trusted local service provider delivering quality workmanship and reliable home improvement solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {siteConfig.links.nav.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className={cn(
                  "flex items-center gap-3 hover:text-white transition-colors group",
                  !siteConfig.contact.phone && "opacity-50 cursor-not-allowed"
                )}
                aria-label="Call Summit Electric"
              >
                {siteConfig.contact.phone && (
                  <Phone size={18} className="group-hover:text-blue-400" />
                )}
                <span>{siteConfig.contact.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-white transition-colors flex items-center gap-3 group"
              >
                <ArrowUpRight size={18} className="group-hover:text-blue-400" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <p className="pt-2">{siteConfig.contact.address}</p>
              <p className="text-xs text-gray-500">
                Hours: {siteConfig.contact.hours}
              </p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Legal
            </h3>
            <div className="space-y-2 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label="Scroll to top"
      >
        <ArrowUpRight size={20} className="rotate-45" />
      </button>
    </footer>
  );
}