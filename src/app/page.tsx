import Hero from '@/components/sections/Hero';
import TrustStack from '@/components/sections/TrustStack';
import ServicesGrid from '@/components/sections/ServicesGrid';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStack />
      <ServicesGrid />
      <Testimonials />
      <CTA />
    </>
  );
}