import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

interface HeroProps {
  variant?: "split" | "centered" | "contact";
  title?: string;
  subtitle?: string;
  className?: string;
}

export function Hero({ variant = "split", title, subtitle, className }: HeroProps) {
  const defaultTitle = "Reliable Electrical Services in Austin";
  const defaultSubtitle = "Licensed, insured, and dedicated to keeping your home safe and powered. Schedule your service today.";

  return (
    <section className={cn(
      "relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[600px] flex items-center",
      variant === "split" && "bg-white",
      variant === "centered" && "bg-gray-900",
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {variant === "split" && (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <Heading level={1}>
                {title || defaultTitle}
              </Heading>
              <p className="text-lg text-muted leading-relaxed max-w-xl">
                {subtitle || defaultSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/contact">
                    Schedule Service
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="accent" size="lg" asChild>
                  <a href={`tel:${siteConfig.contact.phone}`}>
                    Emergency? Call Now
                  </a>
                </Button>
              </div>
              <div className="pt-4 flex items-center gap-6 text-sm text-muted font-medium">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" /> Licensed & Insured
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" /> 24/7 Emergency
                </span>
              </div>
            </div>
            <div className="relative lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={images["hero"].src}
                alt={images["hero"].alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        )}

        {variant === "centered" && (
          <div className="relative text-center max-w-4xl mx-auto">
            <div className="absolute inset-0 z-0">
              <Image
                src={images["about"].src}
                alt={images["about"].alt}
                fill
                priority
                className="object-cover opacity-20"
                sizes="100vw"
              />
            </div>
            <div className="relative z-10 space-y-8 text-white animate-fade-in-up">
              <Heading level={1} className="text-white">
                {title || "Meet Summit Electric"}
              </Heading>
              <p className="text-xl text-gray-200 leading-relaxed">
                {subtitle || "Your trusted local partner for all residential and commercial electrical needs."}
              </p>
              <Button variant="accent" size="lg" className="mx-auto">
                Contact Us Today
              </Button>
            </div>
          </div>
        )}

        {variant === "contact" && (
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Heading level={1}>Contact Us</Heading>
              <p className="text-lg text-muted">
                Have an electrical issue or need a quote? Fill out the form and our team will get back to you immediately.
              </p>
              <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-md">
                <p className="font-bold text-primary">Electrical Emergency?</p>
                <p className="text-sm text-muted">Call us directly at <a href={`tel:${siteConfig.contact.phone}`} className="font-bold text-foreground">{siteConfig.contact.phone}</a> for immediate 24/7 assistance.</p>
              </div>
            </div>
            {/* Form is handled by the page composition */}
          </div>
        )}
      </div>
    </section>
  );
}