import { Hero } from "@/components/sections/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { CTASection } from "@/components/sections/CTASection";
import { Award, Users, Zap, ShieldCheck } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "15+" },
  { label: "Projects Completed", value: "2,500+" },
  { label: "Master Electricians", value: "12" },
  { label: "Satisfaction Rate", value: "100%" },
];

const values = [
  { icon: ShieldCheck, title: "Safety First", desc: "We adhere to the strictest safety codes to protect your home and family." },
  { icon: Users, title: "Community Focus", desc: "Proudly serving Austin homeowners with integrity and respect." },
  { icon: Award, title: "Quality Work", desc: "We don't cut corners. Every job is done right the first time." },
  { icon: Zap, title: "Efficiency", desc: "We value your time and ensure projects are completed on schedule." },
];

export const metadata = {
  title: "About Us",
  description: "Learn more about Summit Electric's history, values, and team of certified electricians.",
};

export default function AboutPage() {
  return (
    <>
      <Hero 
        variant="centered" 
        title="About Summit Electric" 
        subtitle="Building a brighter, safer Austin since 2008."
        imageKey="about"
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <h2 className="font-heading font-bold text-3xl text-text">Our Story</h2>
              <p className="text-muted text-lg leading-relaxed">
                Summit Electric was founded on a simple principle: treat every customer's home like it's your own. What started as a one-truck operation has grown into Austin's most trusted electrical service provider.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                We specialize in both residential and commercial projects, ranging from simple repairs to complete electrical system overhauls. Our team of master electricians is fully licensed, insured, and committed to ongoing education to stay ahead of industry standards.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <h3 className="font-heading font-bold text-3xl text-primary mb-2">{stat.value}</h3>
                  <p className="text-sm font-medium text-muted">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl text-text mb-4">Our Core Values</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              These principles guide every interaction we have with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                    <Icon size={32} />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted text-sm">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}