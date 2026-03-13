import Link from "next/link";
import { Zap, Home, Wrench, Settings, Lightbulb, Plug } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";

const allServices = [
  {
    title: "Residential Electrical",
    description: "Complete home wiring, outlet repair, and safety inspections for your peace of mind.",
    icon: Home,
    link: "/services",
    imageKey: "service-1" as keyof typeof images,
  },
  {
    title: "Panel Upgrades",
    description: "Increase your home's capacity and safety with a modern electrical panel upgrade.",
    icon: Settings,
    link: "/services",
    imageKey: "service-2" as keyof typeof images,
  },
  {
    title: "Emergency Repairs",
    description: "Fast response times for power outages, wiring faults, and electrical hazards.",
    icon: Zap,
    link: "/services",
    imageKey: "service-3" as keyof typeof images,
  },
  {
    title: "Lighting Installation",
    description: "Indoor and outdoor lighting solutions to enhance your home's beauty and security.",
    icon: Lightbulb,
    link: "/services",
    imageKey: "gallery-1" as keyof typeof images,
  },
  {
    title: "EV Charger Install",
    description: "Professional installation of Tesla and other Level 2 electric vehicle chargers.",
    icon: Plug,
    link: "/services",
    imageKey: "gallery-2" as keyof typeof images,
  },
  {
    title: "Commercial Services",
    description: "Reliable electrical maintenance and installation for local businesses.",
    icon: Wrench,
    link: "/services",
    imageKey: "gallery-4" as keyof typeof images,
  },
];

interface ServicesGridProps {
  limit?: number;
}

export function ServicesGrid({ limit }: ServicesGridProps) {
  const services = limit ? allServices.slice(0, limit) : allServices;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <Card 
            key={index} 
            className="group hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-primary/20"
          >
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardHeader>
            <div className="px-6 pb-6">
              <Link href={service.link} className="inline-flex items-center text-primary font-semibold text-sm hover:underline">
                Learn More
              </Link>
            </div>
          </Card>
        );
      })}
    </div>
  );
}