import { EmergencyBanner } from "@/components/sections/EmergencyBanner";
import { Hero } from "@/components/sections/Hero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ContactForm } from "@/components/forms/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { images } from "@/config/images";

export const metadata = {
  title: "Contact Us",
  description: "Contact Summit Electric for electrical services in Austin, TX. Call us 24/7 or fill out our form for a free quote.",
};

export default function ContactPage() {
  return (
    <>
      <EmergencyBanner />
      <div className="bg-gray-50 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-heading font-bold mb-2">Send us a Message</h2>
              <p className="text-muted mb-6">Fill out the form below and we&apos;ll get back to you shortly.</p>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Phone</h3>
                      <a href={`tel:${siteConfig.contact.phone}`} className="text-lg font-bold text-primary hover:underline">
                        {siteConfig.contact.phone}
                      </a>
                      <p className="text-sm text-muted">Available 24/7 for emergencies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Email</h3>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Office</h3>
                      <p className="text-foreground">{siteConfig.contact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Hours</h3>
                      <p className="text-foreground">{siteConfig.contact.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                 <Image 
                  src={images["hero-alt"].src}
                  alt="Map Placeholder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center p-6 text-center text-white">
                  <p className="font-bold text-lg">Serving Greater Austin & Surrounding Areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}