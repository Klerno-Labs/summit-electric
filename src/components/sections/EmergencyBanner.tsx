import { AlertTriangle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function EmergencyBanner() {
  return (
    <div className="bg-accent text-white py-4 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3 font-bold text-lg">
          <AlertTriangle size={24} />
          <span>Electrical Emergency? We are available 24/7.</span>
        </div>
        <a 
          href={`tel:${siteConfig.contact.phone}`} 
          className="bg-white text-accent px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors"
        >
          Call {siteConfig.contact.phone}
        </a>
      </div>
    </div>
  );
}