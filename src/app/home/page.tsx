import HeroSection from "@/components/sections/HeroSection";
import ServicesHub from "@/components/sections/ServicesHub";
import TrustNarrative from "@/components/sections/TrustNarrative";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="pt-20">
      <HeroSection />
      <ServicesHub />
      <TrustNarrative />
      <CTASection />
      <Footer />
    </main>
  );
}