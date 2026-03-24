"use client";
import { images } from "@/config/images";
import Button from "@/components/ui/Button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0">
        <img src={images.hero.src} alt={images.hero.alt} className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1]">
            Trusted Local Partner for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Home Improvement</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
            Delivering quality workmanship and reliable electrical solutions. Your safety is our priority.
          </p>
          <div className="flex gap-4 pt-4">
            <Button variant="primary">Get a Free Estimate</Button>
            <Button variant="secondary">View Services</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;