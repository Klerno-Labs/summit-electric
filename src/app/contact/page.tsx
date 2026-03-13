import { EmergencyBanner } from "@/components/sections/EmergencyBanner";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card, CardContent } from "@/components/ui/Card";
import { siteConfig } from "@/config/site";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Summit Electric for a free quote or emergency service in Austin, TX.",
};

export default function ContactPage() {
  return (
    <>
      <EmergencyBanner />
      <Hero 
        variant="split-contact" 
        title="Contact Us"
        subtitle="Get in touch for a free quote or emergency service."
        imageKey="gallery-3"
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-bold text-2xl mb-6">Get In Touch</h2>
                <p className="text-muted leading-relaxed">
                  Have a question or need a quote? Fill out the form or reach out to us directly. We respond to all inquiries within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-full text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-text mb-1">Our Office</h3>
                    <p className="text-muted">{siteConfig.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-full text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-text mb-1">Phone</h3>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-muted hover:text-primary transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-full text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-text mb-1">Email</h3>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-muted hover:text-primary transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-full text-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-text mb-1">Hours</h3>
                    <p className="text-muted whitespace-pre-line">{siteConfig.contact.hours}</p>
                  </div>
                </div>
              </div>

              {/* Placeholder Map */}
              <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative">
                <iframe 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.039747434334!2d-97.74306008444422!3d30.307181181738624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644ca04a0a4e1e5%3A0x4c1f1f1f1f1f1f1f!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus">
                </iframe>
              </div>
            </div>

            {/* Form */}
            <div>
              <Card className="shadow-lg border-none sticky top-24">
                 <CardContent className="p-8 md:p-10">
                   <h2 className="font-heading font-bold text-2xl mb-6">Send a Message</h2>
                   <ContactForm />
                 </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}