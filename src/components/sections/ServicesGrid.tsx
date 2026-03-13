import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { images } from "@/config/images";
import { Zap, Home, Wrench, Shield, Lightbulb, Plug } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Zap,
    title: "Panel Upgrades",
    description: "Increase your home's power capacity and safety with a modern electrical panel upgrade.",
    link: "/services",
  },
  {
    icon: Lightbulb,
    title: "Lighting Installation",
    description: "Indoor and outdoor lighting solutions to enhance your home's beauty and security.",
    link: "/services",
  },
  {
    icon: Plug,
    title: "EV Charger Install",
    description: "Professional installation of Level 2 electric vehicle chargers in your garage.",
    link: "/services",
  },
  {
    icon: Wrench,
    title: "Repairs & Troubleshooting",
    description: "Fast diagnosis and repair of outlets, switches, and circuit breakers.",
    link: "/services",
  },
  {
    icon: Shield,
    title: "Safety Inspections",
    description: "Comprehensive electrical safety inspections for real estate transactions and peace of mind.",
    link: "/services",
  },
  {
    icon: Home,
    title: "Rewiring Services",
    description: "Complete home rewiring for older homes to meet modern safety codes.",
    link: "/services",
  },
];

interface ServicesGridProps {
  limit?: number;
  className?: string;
}

export function ServicesGrid({ limit, className }: ServicesGridProps) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
      {displayServices.map((service, index) => (
        <Card key={index} className="group hover:-translate-y-1 transition-transform duration-300">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <service.icon className="w-6 h-6" />
            </div>
            <CardTitle className="text-xl">{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Link 
              href={service.link} 
              className="inline-flex items-center text-primary font-bold text-sm group-hover:underline"
            >
              Learn More
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}