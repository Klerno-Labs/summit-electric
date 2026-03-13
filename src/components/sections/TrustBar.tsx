import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function TrustBar({ className }: { className?: string }) {
  const items = [
    "Licensed & Insured",
    "Background Checked Techs",
    "Upfront Pricing",
    "Satisfaction Guaranteed",
  ];

  return (
    <div className={cn("border-y border-gray-100 bg-white py-6", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm font-bold text-gray-600">
              <CheckCircle className="w-5 h-5 text-primary" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}