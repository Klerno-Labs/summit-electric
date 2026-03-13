import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const testimonials = [
  {
    name: "Maria L.",
    role: "Homeowner",
    content: "Summit Electric saved the day! We lost power right before a family gathering. They arrived within an hour and fixed the issue professionally. Highly recommend!",
    rating: 5,
  },
  {
    name: "James T.",
    role: "Business Owner",
    content: "Honest pricing and excellent work. They upgraded our office lighting and the difference is night and day. The crew was punctual and cleaned up afterwards.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Property Manager",
    content: "I use Summit for all my rental properties. They are reliable, do quality work, and communicate well with tenants. A true partner in property maintenance.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 text-lg">Don't just take our word for it.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((review, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <div className="flex gap-1 text-accent mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <CardTitle className="text-lg font-heading font-semibold">
                  {review.name}
                </CardTitle>
                <p className="text-sm text-gray-400">{review.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 italic leading-relaxed">"{review.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}