import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

interface FeatureProps {
  reverse?: boolean;
  title: string;
  description: string;
  imageKey: keyof typeof images;
  features: string[];
}

function FeatureBlock({ reverse, title, description, imageKey, features }: FeatureProps) {
  return (
    <div className={cn(
      "flex flex-col lg:flex-row items-center gap-12 lg:gap-16",
      reverse && "lg:flex-row-reverse"
    )}>
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl font-heading font-bold text-foreground">{title}</h2>
        <p className="text-lg text-muted leading-relaxed">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
        <Image
          src={images[imageKey].src}
          alt={images[imageKey].alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

export function FeatureSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          <FeatureBlock
            title="Upfront, Transparent Pricing"
            description="We believe in honesty. Before we start any work, we provide a detailed written quote so you know exactly what to expect. No hidden fees, no surprises."
            imageKey="service-2"
            features={[
              "Free written estimates",
              "Approval required before extra work",
              "Multiple financing options available",
              "Price-match guarantee on written quotes"
            ]}
          />
          <FeatureBlock
            reverse
            title="Emergency Service When You Need It"
            description="Electrical problems don't wait for business hours. Our team is available 24/7 for urgent repairs and safety concerns."
            imageKey="service-3"
            features={[
              "24/7 dispatch availability",
              "Rapid response times in Austin area",
              "Fully stocked service vans",
              "Priority scheduling for maintenance members"
            ]}
          />
        </div>
      </div>
    </section>
  );
}