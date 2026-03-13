import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTASection } from "@/components/sections/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { CheckCircle2, Clock, Wrench } from "lucide-react";

export const metadata = {
  title: "Our Services",
  description: "Summit Electric offers a full range of electrical services including repairs, upgrades, and installations.",
};

const process = [
  { title: "1. Schedule", desc: "Book an appointment online or call us.", icon: Clock },
  { title: "2. Diagnosis", desc: "We assess the issue and provide a clear quote.", icon: Wrench },
  { title: "3. Execution", desc: "Our electricians complete the work efficiently.", icon: CheckCircle2 },
];

export default function ServicesPage() {
  return (
    <>
      <Hero 
        variant="split" 
        title="Our Electrical Services"
        subtitle="Comprehensive solutions for residential and commercial properties."
        imageKey="hero-alt"
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">What We Do</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              From routine maintenance to complex installations, we have the expertise to handle any electrical challenge.
            </p>
          </div>
          <ServicesGrid />
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl text-text mb-4">Our Process</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="border-none shadow-sm bg-white">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon size={24} />
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted">{step.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}