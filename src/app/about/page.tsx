import { Hero } from "@/components/sections/Hero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Heading } from "@/components/ui/Heading";
import { Card, CardContent } from "@/components/ui/Card";
import { Zap, Shield, Users, Award } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { images } from "@/config/images";

export const metadata = {
  title: "About Us",
  description: "Learn about Summit Electric's history, values, and commitment to safety in Austin, TX.",
};

export default function AboutPage() {
  return (
    <>
      <Hero variant="centered" title="About Summit Electric" />
      
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Heading level={2} className="mb-6">Powering Austin Since 2008</Heading>
            <p className="text-muted text-lg mb-6 leading-relaxed">
              Summit Electric started with a simple mission: to provide Austin homeowners with electrical services they could truly trust. Over the last decade, we've grown from a single van operation to one of the most respected electrical contractors in Central Texas.
            </p>
            <p className="text-muted text-lg mb-6 leading-relaxed">
              We believe that an electrician should be more than just a technician; they should be a partner in maintaining your home's safety and efficiency. Every member of our team undergoes rigorous background checks and continuous training to ensure they meet our high standards.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Whether you need a simple outlet repair or a complete home rewiring, we treat your home with the same care and respect we would treat our own.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src={images["about"].src} 
              alt={images["about"].alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="gray">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center p-6">
            <CardContent className="pt-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">15+</div>
              <div className="text-sm text-muted">Years in Business</div>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent className="pt-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">5,000+</div>
              <div className="text-sm text-muted">Happy Customers</div>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent className="pt-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">100%</div>
              <div className="text-sm text-muted">Licensed & Insured</div>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent className="pt-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">4.9/5</div>
              <div className="text-sm text-muted">Average Rating</div>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Heading level={2} className="mb-4">Our Values</Heading>
          <p className="text-lg text-muted">The principles that guide every wire we connect.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-6">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Safety First</h3>
              <p className="text-muted">We never cut corners. Every job is performed to the strictest safety codes to protect your family and property.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-6">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-muted">Honest pricing and honest assessments. If a repair isn't necessary, we'll tell you.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-6">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted">We show up on time, clean up after ourselves, and stand behind our work with a solid warranty.</p>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}