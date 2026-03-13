import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] border-t border-gray-200 p-3 flex items-center justify-between gap-4">
      <div className="flex flex-col">
        <span className="text-xs font-bold text-gray-900">Need Help Now?</span>
        <span className="text-xs text-gray-500">24/7 Emergency Service</span>
      </div>
      <a
        href={`tel:${siteConfig.contact.phone}`}
        className="flex items-center justify-center bg-accent text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-accent/90 transition-colors flex-1 max-w-[160px]"
      >
        <Phone className="w-4 h-4 mr-2" /> Call Now
      </a>
    </div>
  );
}