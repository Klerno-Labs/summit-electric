import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Star } from "lucide-react";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Michael R.",
    role: "Homeowner",
    rating: 5,
    text: "Summit Electric saved the day! Our power went out right before a party, and they had a technician at our door within an hour. Professional, clean, and incredibly efficient.",
  },
  {
    name: "Sarah Jenkins",
    role: "Small Business Owner",
    rating: 5,
    text: "I've used Summit for my office wiring and for my home. Their consistency in quality is unmatched. The team respects your time and property.",
  },
  {
    name: "David Chen",
    role: "Homeowner",
    rating: 5,
    text: "We needed a full panel upgrade and EV charger installation. The crew explained everything perfectly, and the pricing was exactly what they quoted.",
  },
];

export function Testimonials({ className }: { className?: string }) {
  return (
    <section className={cn("py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden", className)}>
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading level={2} className="text-white mb-4">What Your Neighbors Say</Heading>
          <p className="text-gray-300 text-lg">
            We take pride in every job. Here is what our customers have to say about our service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 text-white shadow-none">
              <CardHeader className="pb-3">
                <div className="flex gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.text}"</p>
              </CardHeader>
              <CardContent className="pt-0 border-t border-gray-700 mt-4">
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}