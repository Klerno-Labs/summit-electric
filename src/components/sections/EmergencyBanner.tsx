import { siteConfig } from "@/config/site";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export function EmergencyBanner() {
  return (
    <div className="bg-accent text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center sm:text-left">
        <div className="flex items-center gap-2 font-bold">
          <AlertTriangle className="w-5 h-5 animate-pulse" />
          Electrical Emergency?
        </div>
        <p className="text-sm font-medium">
          We are available 24/7. Call us now:{" "}
          <Link href={`tel:${siteConfig.contact.phone}`} className="underline font-bold hover:text-gray-100">
            {siteConfig.contact.phone}
          </Link>
        </p>
      </div>
    </div>
  );
}