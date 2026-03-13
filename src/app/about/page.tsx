import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Users, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "About Us | Summit Electric",
  description: "Learn about Summit Electric's history, our team of licensed electricians, and our commitment to safety and quality in Austin, TX.",
  openGraph: {
    title: "About Summit Electric",
    description: "Your trusted local electrical experts since 2010.",
  },
};

const stats = [
  { value: "14+", label: "Years Experience" },
  { value: "5k+", label: "Jobs Completed" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Support Available" },
];

const team = [
  { name: "David Miller", role: "Master Electrician", bio: "David leads our team with over 20 years of industry experience." },
  { name: "Sarah Jenkins", role: "Service Manager", bio: "Sarah ensures every customer interaction exceeds expectations." },
  { name: "Mike Ross", role: "Lead Technician", bio: "Mike specializes in complex commercial wiring and panel upgrades." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Type B */}
      <section className="relative py-32 bg-gray-900 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image src={images["hero-alt"].src} alt={images["hero-alt"].alt} fill className="object-cover opacity-40" priority />
        </div>
        <div className="container-custom relative z-10 max-w-4xl">
          <h1 className="mb-6 text-white">Meet Summit Electric</h1>
          <p className="text-xl text-gray-300">We are a family-owned business dedicated to powering Austin safely and efficiently.</p>
        </div>
      </section>

      {/* Story Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2>Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2010, Summit Electric started with a simple mission: provide honest, high-quality electrical work to our community in Austin. What began as a single van operation has grown into a team of certified professionals serving both residential and commercial clients.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that electrical work is not just about wires and circuits—it's about the safety and comfort of your family or business. That's why we never cut corners and always adhere to the strictest safety codes.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {stats.map((stat, i) => (
               <div key={i} className="bg-slate-50 p-6 rounded-xl text-center border border-gray-100">
                 <p className="text-3xl font-bold text-[#0056b3] mb-1">{stat.value}</p>
                 <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{stat.label}</p>
               </div>
             ))}
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section variant="gray">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2>Our Core Values</h2>
          <p className="text-lg text-gray-600">The principles that guide every wire we connect.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "Safety First", desc: "We prioritize the safety of our technicians and clients above all else." },
            { icon: Users, title: "Integrity", desc: "Honest assessments and upfront pricing—no hidden fees ever." },
            { icon: Target, title: "Excellence", desc: "We take pride in a job well done and won't leave until you're satisfied." },
          ].map((item, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="w-16 h-16 bg-white text-[#0056b3] rounded-2xl shadow-sm flex items-center justify-center mx-auto">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team Grid */}
      <Section id="team">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2>Meet The Team</h2>
          <p className="text-lg text-gray-600">The friendly faces behind the toolbelts.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 bg-gray-200 relative">
                 <Image 
                   src={`https://i.pravatar.cc/400?u=${i}`} 
                   alt={member.name} 
                   fill 
                   className="object-cover"
                   sizes="(max-width: 768px) 100vw, 400px"
                 />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-[#0056b3] font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Banner */}
      <section className="bg-gray-900 py-20 text-center">
        <div className="container-custom">
          <Award className="w-12 h-12 text-[#ff6b00] mx-auto mb-6" />
          <h2 className="text-white mb-4">Ready to Work with the Best?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers in Austin. Experience the Summit Electric difference today.</p>
          <div className="flex justify-center gap-4">
             <Button size="lg" variant="accent" asChild>
                <Link href="/contact">Contact Us</Link>
             </Button>
             <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
                <Link href="/services">View Services</Link>
             </Button>
          </div>
        </div>
      </section>
    </>
  );
}