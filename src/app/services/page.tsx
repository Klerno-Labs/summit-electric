import { Hero } from "@/components/sections/Hero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Heading } from "@/components/ui/Heading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Zap, Home, Lightbulb, Plug, Wrench, Shield } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata = {
  title: "Our Services",
  description: "Summit Electric offers a full range of electrical services including panel upgrades, EV charging, lighting, and emergency repairs in Austin.",
};

const services = [
  {
    icon: Zap,
    title: "Panel Upgrades",
    description: "Modernize your home's electrical system with a new panel that meets today's energy demands. Perfect for older homes needing 200-amp upgrades.",
    price: "Starting at $2,500",
  },
  {
    icon: Plug,
    title: "EV Charger Installation",
    description: "Get your Tesla, Chevy, or Ford charging quickly at home. We install Level 2 chargers compatible with all major electric vehicle brands.",
    price: "Starting at $800",
  },
  {
    icon: Lightbulb,
    title: "Lighting Solutions",
    description: "From recessed lighting to landscape illumination, we design and install lighting systems that enhance your home's aesthetics and security.",
    price: "Custom Quotes",
  },
  {
    icon: Wrench,
    title: "Repair & Troubleshooting",
    description: "Flickering lights? Tripped breakers? Our expert technicians diagnose and fix issues fast to restore your power safely.",
    price: "Service Call $89",
  },
  {
    icon: Shield,
    title: "Safety Inspections",
    description: "Essential for home buyers and sellers. We provide a comprehensive report on the condition of your electrical system.",
    price: "Starting at $150",
  },
  {
    icon: Home,
    title: "Whole Home Rewiring",
    description: "Replace old, aluminum wiring with safe copper wiring. A major investment that increases your home's value and safety.",
    price: "Custom Quotes",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero variant="centered" title="Our Electrical Services" />
      
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading level={2}>Complete Electrical Solutions</Heading>
          <p className="text-lg text-muted mt-4">
            We handle projects of all sizes, from small fixes to major installations. All work is performed by licensed electricians and comes with a satisfaction guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-sm font-bold text-accent">{service.price}</span>
                <button className="text-primary font-semibold text-sm hover:underline">Request Quote</button>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="gray">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Heading level={2} className="mb-6">Request a Service</Heading>
            <p className="text-muted text-lg mb-6">
              Tell us what you need help with. We typically respond to quote requests within 2 hours during business hours.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <ContactForm />
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Choose Summit Electric?</h3>
              <ul className="space-y-3">
                {["Licensed Master Electricians on staff", "Fully insured for your protection", "Clean, respectful technicians", "Transparent pricing - no surprises", "Warranty on all labor and parts"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Maintenance Plan</h3>
              <p className="text-gray-100 mb-4">
                Join our annual maintenance plan and receive priority scheduling, discounted rates, and an annual safety inspection.
              </p>
              <button className="w-full bg-white text-primary font-bold py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}