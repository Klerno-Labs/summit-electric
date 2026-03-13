import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { images } from "@/config/images";
import { siteConfig as config } from "@/config/site"; // Renamed import to avoid conflict

export function Hero() {
  return (
    <section className="relative pt-20 lg:pt-0 overflow-hidden bg-white min-h-[90vh] flex items-center">
      <div className="max-w-[1200px] mx-auto px-4 py-12 lg:py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Content Left */}
        <div className="z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0056b3] text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0056b3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0056b3]"></span>
            </span>
            Available 24/7 for Emergencies
          </div>
          
          <h1 className="text-4xl lg:text-[2.75rem] font-bold text-[#1f2937] leading-tight mb-6 font-['Montserrat']">
            Reliable Electrical Services in Houston
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
            Professional, licensed electricians for your home and business. 
            Upfront pricing, quality workmanship, and we respect your property.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="h-12 px-8 text-base rounded-full shadow-lg hover:shadow-xl transition-all">
              <Link href="/contact">
                Schedule Service
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="accent" className="h-12 px-8 text-base rounded-full">
              <a href={`tel:${config.contact.phone}`}>
                <Phone className="mr-2 w-4 h-4" />
                Emergency? Call Now
              </a>
            </Button>
          </div>
          
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
            <div className="flex -space-x-2">
               {/* Placeholder avatars for trust */}
               <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
               <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
               <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
            </div>
            <span>5-Star Rated Locally</span>
          </div>
        </div>

        {/* Visual Right */}
        <div className="relative lg:h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-3xl transform rotate-2 opacity-50"></div>
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={images["hero"].src}
              alt={images["hero"].alt}
              width={images["hero"].width}
              height={images["hero"].height}
              priority
              className="object-cover w-full h-full"
            />
          </div>
          {/* Floating Card Decor */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl hidden lg:block animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">✓</div>
              <div>
                <p className="font-bold text-sm">Licensed & Insured</p>
                <p className="text-xs text-gray-500">TECL #12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}