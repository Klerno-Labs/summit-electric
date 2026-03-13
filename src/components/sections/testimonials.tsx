import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { images } from "@/config/images";

const testimonials = [
  {
    name: "Maria L.",
    role: "Homeowner",
    content: "Summit Electric saved the day! We lost power right before a party and they were there within an hour. Professional, clean, and friendly.",
    rating: 5
  },
  {
    name: "James T.",
    role: "Business Owner",
    content: "Best electrical contractor in Houston. They handled our office rewiring with minimal downtime to our operations. Highly recommend.",
    rating: 5
  },
  {
    name: "Sarah K.",
    role: "Homeowner",
    content: "The upfront pricing was a lifesaver. No hidden fees like other companies. The technician explained everything clearly.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-[#1f2937] text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src={images["testimonial-bg"].src}
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Montserrat']">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300">
            Don't just take our word for it. Here is what your neighbors have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#ff6b00] text-[#ff6b00]" />
                ))}
              </div>
              <p className="text-gray-200 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}