"use client";

import { useState } from "react";
import { Zap, Home, Building, Hammer, Lightbulb, Plug, Fan, Settings, Shield } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact/contact-form";
import Link from "next/link";
import { cn } from "@/lib/utils";


type Category = "residential" | "commercial" | "repair";

const servicesData: Record<Category, { title: string; items: { title: string; desc: string; icon: any }[] }> = {
  residential: {
    title: "Residential Services",
    items: [
      { title: "Panel Upgrades", desc: "Upgrade your old fuse box to a modern circuit breaker panel for safety.", icon: Zap },
      { title: "Lighting Installation", desc: "Recessed lighting, chandeliers, and outdoor landscape lighting.", icon: Lightbulb },
      { title: "EV Charger Installation", desc: "Install a Level 2 charger for your electric vehicle at home.", icon: Plug },
      { title: "Rewiring & Remodels", desc: "Complete wiring for kitchen renovations, additions, and basements.", icon: Home },
    ],
  },
  commercial: {
    title: "Commercial Services",
    items: [
      { title: "Office Wiring", desc: "Data cabling, power drops, and lighting for office environments.", icon: Building },
      { title: "Retail Lighting", desc: "Energy-efficient lighting solutions to showcase your products.", icon: Lightbulb },
      { title: "Maintenance Contracts", desc: "Regular inspections and maintenance to prevent costly downtime.", icon: Settings },
      { title: "Tenant Improvements", desc: "Fast turnaround for build-outs and tenant finish work.", icon: Hammer },
    ],
  },
  repair: {
    title: "Emergency & Repair",
    items: [
      { title: "Troubleshooting", desc: "Quickly diagnose and fix flickering lights, outlets, and breakers.", icon: Settings },
      { title: "Storm Damage Repair", desc: "Assessment and repair of damage caused by weather events.", icon: Zap },
      { title: "Surge Protection", desc: "Whole-home surge protection to safeguard your electronics.", icon: Shield },
      { title: "24/7 Emergency Service", desc: "Available around the clock for urgent electrical issues.", icon: Fan },
    ],
  },
};

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<Category>("residential");

  return (
    <>
      <section className="bg-gray-900 py-20 text-center text-white">
        <div className="container-custom">
          <h1 className="text-white mb-4">Our Electrical Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">From fixing a broken outlet to wiring a new commercial building, we do it all.</p>
        </div>
      </section>

      <Section>
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(["residential", "commercial", "repair"] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all",
                activeTab === cat
                  ? "bg-[#0056b3] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {servicesData[activeTab].items.map((item, i) => (
            <div key={i} className="flex gap-6 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow bg-white">
               <div className="w-12 h-12 bg-blue-50 text-[#0056b3] rounded-lg flex-shrink-0 flex items-center justify-center">
                  <item.icon className="w-6 h-6" />
               </div>
               <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                  <Link href="/contact" className="text-[#0056b3] font-semibold text-sm hover:underline">Request this service &rarr;</Link>
               </div>
            </div>
          ))}
        </div>

        {/* Sidebar / Form Area */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
             <h2>Service Area</h2>
             <p className="text-lg text-gray-600">We proudly serve Austin, West Lake Hills, Round Rock, Cedar Park, and surrounding areas within a 30-mile radius.</p>
             
             <div className="bg-slate-50 p-8 rounded-xl border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Why Professional Installation Matters</h3>
                <p className="text-gray-600 mb-4">DIY electrical work is dangerous and often violates local building codes. Improper wiring is a leading cause of house fires.</p>
                <ul className="space-y-2">
                   <li className="flex items-center gap-2 text-gray-700"><span className="text-green-500 font-bold">✓</span> Ensures insurance coverage</li>
                   <li className="flex items-center gap-2 text-gray-700"><span className="text-green-500 font-bold">✓</span> Meets NEC safety standards</li>
                   <li className="flex items-center gap-2 text-gray-700"><span className="text-green-500 font-bold">✓</span> Increases home value</li>
                </ul>
             </div>
          </div>

          <div className="lg:col-span-1">
             <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-28">
                <h3 className="text-2xl font-bold mb-2">Get a Quote</h3>
                <p className="text-sm text-gray-500 mb-6">Tell us what you need help with.</p>
                <ContactForm />
             </div>
          </div>
        </div>
      </Section>
    </>
  );
}
