import { Shield, Clock, Award, Users } from "lucide-react";
import { siteConfig } from "@/config/site";

const badges = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: Clock, text: "24/7 Emergency Service" },
  { icon: Award, text: "5-Star Rated" },
  { icon: Users, text: "Background Checked" },
];

export function TrustBar() {
  return (
    <section className="bg-white border-y border-gray-100 py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-3 text-text/80 font-medium text-sm md:text-base">
              <badge.icon className="text-primary h-5 w-5 flex-shrink-0" />
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}