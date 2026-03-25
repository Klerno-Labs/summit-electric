import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";

export const metadata = {
  title: "About Us | Summit Electric",
  description: "Learn more about our team and our commitment to quality service.",
  openGraph: {
    title: "About Us | Summit Electric",
    description: "Learn more about our team and our commitment to quality service.",
    image: "/images/about.jpg",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}