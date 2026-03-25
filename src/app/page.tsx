import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustStack from "@/components/sections/TrustStack";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Home | Summit Electric",
  description: "Expert home repairs you can trust. Get a free estimate today!",
  openGraph: {
    title: "Home | Summit Electric",
    description: "Expert home repairs you can trust. Get a free estimate today!",
    image: "/images/hero.jpg",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStack />
        <ServicesGrid />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}