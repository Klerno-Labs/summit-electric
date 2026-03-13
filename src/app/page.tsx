import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Features } from "@/components/sections/features";
import { Testimonials } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta-section";
import { ContactForm } from "@/components/contact/contact-form";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Home",
  description: "Summit Electric provides top-tier electrical services in Houston. Residential, commercial, and 24/7 emergency repairs available.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <Features />
      <Testimonials />
      
      {/* Lead Capture Section */}
      <section className="py-20 lg:py-32 bg-[#f4f6f8]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-6 font-['Montserrat']">
                Get Your Free Quote Today
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Fill out the form below and one of our certified electricians will get back to you within 24 hours. For emergencies, please call us directly.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#0056b3] flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1f2937]">Fast Response</h4>
                    <p className="text-gray-600 text-sm">We value your time and respond quickly to inquiries.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#0056b3] flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1f2937]">Transparent Pricing</h4>
                    <p className="text-gray-600 text-sm">No hidden fees. You know the cost before we start.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}