import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image 
          src={images["cta"].src}
          alt="Beautiful home exterior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
          Ready to Upgrade Your Home?
        </h2>
        <p className="text-lg mb-8 text-blue-50 max-w-2xl mx-auto">
          Get a free, no-obligation quote today. Our team is standing by to answer your questions and handle any electrical project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="accent" className="text-white px-8">
            Schedule Appointment
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
}