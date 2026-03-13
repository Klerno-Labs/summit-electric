import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Clock, Star, Zap, Wrench, Home, CheckCircle2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/contact/contact-form";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      {/* Hero Section (Type A: Split) */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0056b3] text-sm font-semibold mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0056b3] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0056b3]"></span>
              </span>
              Available 24/7 for Emergencies
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Reliable Electrical Services in <span className="text-[#0056b3]">Austin, TX</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              From emergency repairs to complete panel upgrades, our licensed electricians deliver quality workmanship and upfront pricing. Trusted by homeowners since 2010.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="primary" asChild className="text-lg">
                <Link href="/contact">Schedule Service</Link>
              </Button>
              <Button size="lg" variant="accent" asChild className="text-lg">
                <a href="tel:5125550199">Emergency? Call Now</a>
              </Button>
            </div>
            <div className="pt-6 flex items-center gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9/5 Rating</div>
              <div className="flex items-center gap-2"><Shield className="w-4 h-4" /> Licensed & Insured</div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in-up delay-200">
            <div className="absolute inset-0 bg-[#e0f2fe] rounded-full blur-3xl opacity-50 z-0"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                width={images.hero.width}
                height={images.hero.height}
                priority
                className="object-cover w-full h-full"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 max-w-xs hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 text-green-600 p-2 rounded-full">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Same Day Service</p>
                  <p className="text-xs text-gray-500">Available in most areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-gray-100 bg-slate-50 py-6">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-gray-400 font-medium text-sm uppercase tracking-wider">
            <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-[#0056b3]" /> Fully Licensed</span>
            <span className="flex items-center gap-2"><Users className="w-5 h-5 text-[#0056b3]" /> Background Checked</span>
            <span className="flex items-center gap-2"><Star className="w-5 h-5 text-[#0056b3]" /> 5-Star Rated</span>
            <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-[#0056b3]" /> Insured</span>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Section id="services" variant="gray">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our Electrical Services</h2>
          <p className="text-lg text-gray-600">Whether you need a quick repair or a major installation, our team has the expertise to get the job done right.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Residential Repair", desc: "Troubleshooting, outlet repair, and fixture installation for your home.", icon: Home },
            { title: "Panel Upgrades", desc: "Increase your electrical capacity and safety with a modern panel.", icon: Zap },
            { title: "Commercial Wiring", desc: "Reliable power solutions for offices, retail spaces, and warehouses.", icon: Wrench },
          ].map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
              <div className="w-12 h-12 bg-blue-50 text-[#0056b3] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0056b3] group-hover:text-white transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
              <Link href="/services" className="inline-flex items-center font-semibold text-[#0056b3] hover:text-[#004494] transition-colors">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us (Z-Pattern) */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-xl h-[400px]">
            <Image src={images.about.src} alt={images.about.alt} fill className="object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2>Why Choose Summit Electric?</h2>
            <p className="text-lg text-gray-600">We aren't just electricians; we are your neighbors. We treat every home with the respect and care it deserves.</p>
            
            <ul className="space-y-4 mt-4">
              {[
                "Upfront pricing with no hidden fees",
                "100% satisfaction guarantee",
                "Clean, respectful technicians",
                "Latest tools and technology"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" size="lg" className="mt-4" asChild>
              <Link href="/about">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section variant="dark" className="relative overflow-hidden">
         {/* Background Image with Overlay */}
         <div className="absolute inset-0 z-0 opacity-10">
            <Image src={images["testimonial-bg"].src} alt={images["testimonial-bg"].alt} fill className="object-cover" />
         </div>
         
         <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-white">What Our Neighbors Say</h2>
               <p className="text-lg text-gray-300">Real reviews from real customers in Austin.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                  { name: "Maria L.", role: "Homeowner", text: "Summit Electric saved the day! Our power went out before a big party, and they arrived within an hour. Professional and friendly." },
                  { name: "James T.", role: "Business Owner", text: "They handled a complex rewiring job for our office with minimal disruption. The team was punctual and cleaned up perfectly." },
                  { name: "Sarah K.", role: "Homeowner", text: "Finally, an electrician I trust. The pricing was exactly what they quoted, no surprises. Highly recommend for panel upgrades." }
               ].map((review, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl">
                     <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                     </div>
                     <p className="text-gray-200 italic mb-6">"{review.text}"</p>
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0056b3] to-blue-300 flex items-center justify-center text-white font-bold">
                           {review.name[0]}
                        </div>
                        <div>
                           <p className="text-white font-bold">{review.name}</p>
                           <p className="text-gray-400 text-sm">{review.role}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </Section>

      {/* CTA / Lead Capture */}
      <Section className="bg-[#0056b3] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-6">
            <h2 className="text-white">Get a Free Quote Today</h2>
            <p className="text-blue-100 text-lg">Fill out the form and our team will get back to you within 1 hour during business hours.</p>
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full">
                 <Phone className="w-6 h-6" />
              </div>
              <div>
                 <p className="text-sm text-blue-200">Call us directly</p>
                 <p className="text-2xl font-bold">(512) 555-0199</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-2xl text-gray-900">
             <ContactForm submitLabel="Get My Quote" />
          </div>
        </div>
      </Section>
    </>
  );
}