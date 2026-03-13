import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface HeroProps {
  variant?: "split" | "centered" | "split-contact";
  title?: string;
  subtitle?: string;
  imageKey?: keyof typeof images;
}

export function Hero({ variant = "split", title, subtitle, imageKey = "hero" }: HeroProps) {
  const defaultTitle = variant === "split-contact" ? "Contact Summit Electric" : "Reliable Electrical Services in Austin";
  const defaultSubtitle = variant === "split-contact" 
    ? "Get in touch for a free quote or emergency service." 
    : "Professional residential and commercial electrical work you can trust. Licensed, insured, and available 24/7.";

  const isSplit = variant === "split" || variant === "split-contact";

  return (
    <section className={cn(
      "relative w-full overflow-hidden",
      isSplit ? "bg-white pt-32 pb-20 lg:pt-40 lg:pb-28" : "relative min-h-[80vh] flex items-center bg-gray-900"
    )}>
      <div className="max-w-[1200px] mx-auto px-4 w-full">
        <div className={cn(
          "grid gap-12 items-center",
          isSplit ? "lg:grid-cols-2" : "grid-cols-1 text-center"
        )}>
          
          {/* Content */}
          <div className={cn(
            "z-10 relative",
            !isSplit && "max-w-3xl mx-auto"
          )}>
            <h1 className={cn(
              "font-heading font-bold tracking-tight text-primary leading-tight mb-6",
              isSplit ? "text-4xl lg:text-[2.5rem]" : "text-4xl sm:text-5xl lg:text-6xl text-white"
            )}>
              {title || defaultTitle}
            </h1>
            <p className={cn(
              "text-lg mb-8 max-w-xl",
              isSplit ? "text-muted" : "text-gray-300 mx-auto"
            )}>
              {subtitle || defaultSubtitle}
            </p>
            
            <div className={cn(
              "flex flex-col sm:flex-row gap-4",
              !isSplit && "justify-center"
            )}>
              <Button size="lg" className="w-full sm:w-auto shadow-md">
                Schedule Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="accent" className="w-full sm:w-auto" asChild>
                 <a href={`tel:${siteConfig.contact.phone}`}>
                   Emergency? Call Now
                 </a>
              </Button>
            </div>

            {variant === "split" && (
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-primary h-4 w-4" />
                  Licensed & Insured
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-primary h-4 w-4" />
                  Same Day Service
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-primary h-4 w-4" />
                  100% Satisfaction
                </div>
              </div>
            )}
          </div>

          {/* Image */}
          {isSplit && (
            <div className="relative lg:h-[500px] flex justify-center lg:justify-end">
               <div className="relative w-full max-w-[500px] h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-hover">
                 <Image 
                   src={images[imageKey].src} 
                   alt={images[imageKey].alt}
                   fill
                   className="object-cover"
                   priority={true}
                 />
                 {/* Decorative Blob behind image on desktop */}
                 <div className="absolute -z-10 -top-10 -right-10 w-[120%] h-[120%] bg-primary/10 rounded-full blur-3xl" />
               </div>
            </div>
          )}
        </div>
      </div>

      {/* Dark Overlay for Centered Variant */}
      {!isSplit && (
        <div className="absolute inset-0 z-0">
           <Image 
              src={images[imageKey].src}
              alt={images[imageKey].alt}
              fill
              className="object-cover opacity-30"
              priority={true}
           />
           <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900" />
        </div>
      )}
    </section>
  );
}