import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-[100] p-4 flex justify-between items-center md:hidden border-t border-gray-200">
      <div>
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Emergency?</p>
        <p className="text-sm font-bold text-text">We're here to help.</p>
      </div>
      <Button size="sm" className="rounded-full shadow-lg flex items-center gap-2" asChild>
        <Link href={`tel:${siteConfig.contact.phone}`}>
          <Phone size={16} />
          Call Now
        </Link>
      </Button>
    </div>
  );
}