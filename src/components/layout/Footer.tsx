import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

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
             <h3 className="font-heading font-bold text-2xl tracking-tight">
              SUMMIT <span className="text-accent">ELECTRIC</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for residential and commercial electrical services in Austin. Quality workmanship guaranteed.
            </p>
            <div className="flex gap-4 pt-2">
              <Link 
                href={siteConfig.links.facebook} 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={20} />
              </Link>
              <Link 
                href={siteConfig.links.instagram} 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-accent transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-accent transition-colors">Residential Wiring</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Panel Upgrades</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Lighting Installation</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">EV Charger Setup</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Emergency Repair</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-accent flex-shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300">Terms of Service</Link>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gray-400 hover:text-white"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </Button>
        </div>
      </div>
    </footer>
  );
}