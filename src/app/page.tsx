import { images } from "@/config/images";
import HeroSection from "@/components/HeroSection";
import ServicesHub from "@/components/ServicesHub";
import TrustNarrative from "@/components/TrustNarrative";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Summit Electric | Trusted Local Home Services",
  description: "Your trusted partner for home improvement and electrical solutions in Texas.",
  openGraph: {
    title: "Summit Electric | Trusted Local Home Services",
    description: "Your trusted partner for home improvement and electrical solutions in Texas.",
    url: "https://example.com",
    images: [images.hero.src],
  },
};

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection
        heading="Trusted Local Partner for Home Improvement"
        subtext="Delivering quality workmanship and reliable electrical solutions. Your safety is our priority."
        ctaText="Get a Free Estimate"
        imageSrc={images.hero.src}
      />
      <ServicesHub />
      <TrustNarrative />
      <CTASection />
      <Testimonials />
      <Footer />
    </main>
  );
}