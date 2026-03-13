"use client";

import React from "react";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function MobileCTA() {
  return (
    <div className={cn("fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-[100] p-4 flex justify-between items-center md:hidden border-t border-gray-200")}>
      <div className="flex flex-col">
        <span className="text-xs text-gray-500 font-semibold">Emergency?</span>
        <span className="text-xs text-gray-400">We are here 24/7</span>
      </div>
      <a
        href={`tel:${siteConfig.contact.phone}`}
        className={cn("bg-[#ff6b00] text-white px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 text-sm")}
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
    </div>
  );
}