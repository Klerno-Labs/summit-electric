import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-32 flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src={images["cta"].src}
          alt={images["cta"].alt}
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-[#0056b3]/90 mix-blend-multiply"></div>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-4 relative z-10 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-['Montserrat']">
          Ready to Upgrade Your Home?
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
          Get a free quote for your next electrical project. Fast, friendly, and professional service guaranteed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="accent" className="h-12 px-8 text-base rounded-full shadow-xl">
            <a href={`tel:${siteConfig.contact.phone}`}>
              Call (713) 555-0199
            </a>
          </Button>
          <Button asChild className="h-12 px-8 text-base rounded-full bg-white text-[#0056b3] hover:bg-gray-100 shadow-xl">
             <Link href={siteConfig.links.contact}>
               Request Quote Online
             </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}