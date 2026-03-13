import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">Our Electrical Services</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              From minor repairs to major installations, our certified electricians handle it all with precision and care.
            </p>
          </div>
          <ServicesGrid limit={3} />
        </div>
      </section>

      <FeatureSection />

      <section className="py-24 bg-secondary/50">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-6">
                Get a Free Quote
              </h2>
              <p className="text-muted text-lg mb-6">
                Fill out the form and one of our friendly staff members will get back to you shortly to discuss your electrical needs.
              </p>
              
              <Card className="bg-primary/5 border-primary/10 mb-6">
                <CardContent className="p-6 flex gap-4">
                  <div className="bg-primary text-white p-3 rounded-full h-fit">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-text">Prefer to Call?</h3>
                    <p className="text-muted text-sm mb-2">We are available during business hours for immediate assistance.</p>
                    <a href="tel:(512) 555-0198" className="text-primary font-bold hover:underline">(512) 555-0198</a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg border-none">
              <CardHeader>
                <CardTitle className="text-2xl">Request Service</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}