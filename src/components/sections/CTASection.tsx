import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";

export function CTASection() {
  return (
    <section className="relative py-20 md:py-24 flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={images["cta"].src}
          alt={images["cta"].alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
          Ready to Upgrade Your Home?
        </h2>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
          Whether it's a quick repair or a major renovation, Summit Electric is ready to help. Get a free quote today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="accent" size="lg" className="px-8">
            Schedule Service
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-primary px-8">
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
}