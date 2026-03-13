import { Metadata } from "next";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Contact Us | Summit Electric",
  description: "Contact Summit Electric for a free quote. Call us at (512) 555-0199 or visit our office in Austin, TX.",
  openGraph: {
    title: "Contact Summit Electric",
    description: "Get in touch for reliable electrical services.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-[#ff6b00] text-white text-center py-3 font-semibold">
        Need an Electrician Now? Call <a href="tel:5125550199" className="underline hover:no-underline font-bold">(512) 555-0199</a>
      </div>

      {/* Hero Split */}
      <Section className="pt-20">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
               <h1 className="mb-4">Get in Touch</h1>
               <p className="text-lg text-gray-600">
                  Ready to start your project or need emergency repairs? Fill out the form or give us a call. We respond to all inquiries within 1 hour during business hours.
               </p>
            </div>
            
            <div className="space-y-6">
               <InfoRow icon={<Phone className="w-5 h-5" />} label="Phone" value="(512) 555-0199" link="tel:5125550199" />
               <InfoRow icon={<Mail className="w-5 h-5" />} label="Email" value="info@summitelectric.com" link="mailto:info@summitelectric.com" />
               <InfoRow icon={<MapPin className="w-5 h-5" />} label="Office" value="1200 Main St, Building B, Austin, TX 78701" />
               <InfoRow 
                 icon={<Clock className="w-5 h-5" />} 
                 label="Hours" 
                 value="Mon-Fri: 8am-6pm, Sat: 9am-2pm, Sun: Closed" 
               />
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative">
               <iframe 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 loading="lazy" 
                 allowFullScreen 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.844448718733!2d-97.7431!3d30.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE2JzAxLjkiTiA5N8KwNDQnMzUuMiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
               ></iframe>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
             <ContactForm submitLabel="Send Message" />
          </div>
        </div>
      </Section>
    </>
  );
}

function InfoRow({ icon, label, value, link }: { icon: React.ReactNode; label: string; value: string; link?: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-[#0056b3] text-white rounded-lg flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">{label}</p>
        {link ? (
          <a href={link} className="text-lg font-semibold text-gray-900 hover:text-[#0056b3] transition-colors">
            {value}
          </a>
        ) : (
          <p className="text-lg font-semibold text-gray-900">{value}</p>
        )}
      </div>
    </div>
  );
}