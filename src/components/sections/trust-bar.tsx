import React from "react";
import { Shield, Clock, Star, Users } from "lucide-react";

export function TrustBar() {
  const items = [
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Star, text: "5-Star Rated" },
    { icon: Users, text: "Background Checked" },
    { icon: Clock, text: "On-Time Guarantee" },
  ];

  return (
    <section className="bg-white py-8 border-y border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-gray-700 font-['Open_Sans'] font-medium">
              <item.icon className="w-6 h-6 text-[#0056b3]" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}