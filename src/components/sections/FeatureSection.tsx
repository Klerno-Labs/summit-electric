import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { images } from "@/config/images";

export function FeatureSection() {
  const features = [
    "Upfront, transparent pricing",
    "Certified, master electricians",
    "Clean, respectful technicians",
    "Lifetime warranty on labor",
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-6">
              Why Choose Summit Electric?
            </h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              We understand that inviting an electrician into your home requires trust. That's why we go above and beyond to ensure your experience is seamless, safe, and satisfactory.
            </p>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary h-5 w-5 flex-shrink-0" />
                  <span className="font-medium text-text">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Visual */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-hover">
              <Image 
                src={images["about"].src}
                alt="Professional electrician reviewing plans"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}