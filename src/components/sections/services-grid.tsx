import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap, Home, Briefcase, Wrench, Lightbulb, Fan } from "lucide-react";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";

const services = [
  { title: "Residential Wiring", icon: Home, desc: "Complete wiring for new homes, renovations, and additions.", link: "/services" },
  { title: "Panel Upgrades", icon: Zap, desc: "Increase your power capacity and safety with modern panels.", link: "/services" },
  { title: "Commercial Services", icon: Briefcase, desc: "Reliable electrical solutions for offices and retail spaces.", link: "/services" },
  { title: "Emergency Repairs", icon: Wrench, desc: "24/7 rapid response for power outages and electrical faults.", link: "/services" },
  { title: "Lighting Design", icon: Lightbulb, desc: "Indoor and outdoor lighting installation and upgrades.", link: "/services" },
  { title: "HVAC Electrical", icon: Fan, desc: "Wiring and maintenance for air conditioning and heating systems.", link: "/services" },
];

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-32 bg-[#f8f9fa]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4 font-['Montserrat']">
            Our Electrical Services
          </h2>
          <p className="text-lg text-gray-600">
            From minor repairs to major installations, our certified electricians handle it all with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[8px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 group flex flex-col"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#0056b3] mb-6 group-hover:bg-[#0056b3] group-hover:text-white transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3 font-['Montserrat']">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.desc}</p>
              <Link 
                href={service.link} 
                className="inline-flex items-center text-[#0056b3] font-semibold hover:underline mt-auto"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href={siteConfig.links.services}>
             <div className="inline-block border-2 border-[#0056b3] text-[#0056b3] hover:bg-[#0056b3] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
               View All Services
             </div>
          </Link>
        </div>
      </div>
    </section>
  );
}