"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Wrench, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function ServicesHub() {
  const services = [
    {
      icon: Zap,
      title: "Electrical Services",
      description:
        "Complete electrical solutions for your home and business, from repairs to full rewires.",
    },
    {
      icon: Wrench,
      title: "Home Maintenance",
      description:
        "Preventive maintenance plans to keep your systems running smoothly year-round.",
    },
    {
      icon: ShieldCheck,
      title: "Safety Inspections",
      description:
        "Comprehensive inspections to ensure your home meets the latest safety codes.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Comprehensive Home Improvement
          </h2>
          <p className="text-lg text-slate-600">
            We handle every aspect of your home's electrical needs with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-sm mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 mb-6 leading-relaxed line-clamp-3">
                {service.description}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all"
              >
                Learn More
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}