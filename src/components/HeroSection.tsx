import React from 'react';
import { cn } from '@/utils/cn';
import { HeroProps } from './types/HeroProps'; // Importing HeroProps

const HeroSection: React.FC<HeroProps> = ({ headline, subtext, ctaPrimary, ctaSecondary }) => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-[url('/path/to/hero-image.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-white max-w-xl px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">{headline}</h1>
        <p className="text-xl sm:text-2xl font-semibold">{subtext}</p>
        <div className="mt-6">
          <a href={ctaPrimary.href} className="bg-primary text-white px-6 py-3 rounded-lg">
            {ctaPrimary.label}
          </a>
          <a href={ctaSecondary.href} className="border border-white text-white px-6 py-3 rounded-lg ml-4">
            {ctaSecondary.label}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;