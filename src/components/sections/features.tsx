import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { images } from "@/config/images";

const features = [
  {
    title: "Upfront Pricing",
    description: "No surprises. We provide a detailed estimate before work begins, so you know exactly what you're paying for.",
    image: "service-2", // Using available image slot
    reversed: true
  },
  {
    title: "Same Day Service",
    description: "Need help now? We offer scheduling priority for urgent calls and aim for same-day resolution when possible.",
    image: "gallery-3", // Using available image slot (workshop/tools represents readiness)
    reversed: false
  }
];

export function Features() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${feature.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 mb-20 last:mb-0`}
          >
            {/* Content */}
            <div className="w-full lg:w-1/2">
              <div className="inline-block p-3 rounded-full bg-blue-50 text-[#0056b3] mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-[#1f2937] mb-4 font-['Montserrat']">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</div>
                  Licensed Master Electricians
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</div>
                  100% Satisfaction Guarantee
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</div>
                  Clean, Respectful Technicians
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 relative">
               <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={images[feature.image as keyof typeof images].src}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  />
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}