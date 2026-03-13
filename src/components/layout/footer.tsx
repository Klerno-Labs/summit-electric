import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone, ArrowUp, Copyright } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  services: [
    { label: "Residential Electrical", href: "/services" },
    { label: "Commercial Wiring", href: "/services" },
    { label: "Panel Upgrades", href: "/services" },
    { label: "Emergency Repair", href: "/services" },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white text-[#0056b3] p-1.5 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none">Summit</span>
                <span className="text-xs font-medium text-gray-400 leading-tight">Electric</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Summit Electric is your trusted local partner for all residential and commercial electrical needs. Licensed, insured, and committed to safety.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#ff6b00] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#ff6b00] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ff6b00] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  1200 Main St, Building B<br />
                  Austin, TX 78701
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#ff6b00] flex-shrink-0" />
                <a href="tel:5125550199" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  (512) 555-0199
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#ff6b00] flex-shrink-0" />
                <a href="mailto:info@summitelectric.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  info@summitelectric.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            <Copyright className="w-3 h-3" />
            {new Date().getFullYear()} Summit Electric. All rights reserved.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-gray-400 hover:text-white"
            aria-label="Back to top"
          >
            Back to Top <ArrowUp className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </footer>
  );
}