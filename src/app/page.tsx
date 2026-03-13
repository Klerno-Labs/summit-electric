import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { ContactForm } from "@/components/forms/ContactForm";
import { Heading } from "@/components/ui/Heading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Home",
  description: "Professional electrical services in Austin. Summit Electric provides residential and commercial wiring, repairs, and 24/7 emergency support.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading level={2}>Our Services</Heading>
          <p className="text-muted text-lg mt-4">
            From minor repairs to major installations, our certified electricians handle it all with precision and care.
          </p>
        </div>
        <ServicesGrid limit={3} />
      </SectionWrapper>

      <FeatureSection />

      <SectionWrapper background="gray">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading level={2}>Customer Testimonials</Heading>
          <p className="text-muted text-lg mt-4">
            Don&apos;t just take our word for it. See why your neighbors trust Summit Electric.
          </p>
        </div>
        <Testimonials />
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Heading level={2}>Get A Free Quote</Heading>
            <p className="text-lg text-muted">
              Ready to start your project? Fill out the form, and we&apos;ll get back to you with a transparent estimate within 24 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-foreground">Call Us</p>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-primary font-medium">{siteConfig.contact.phone}</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-foreground">Email Us</p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-primary font-medium">{siteConfig.contact.email}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}