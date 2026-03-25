import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/FAQ";

export const metadata = {
  title: "FAQ | Summit Electric",
  description: "Find answers to common questions about our services.",
  openGraph: {
    title: "FAQ | Summit Electric",
    description: "Find answers to common questions about our services.",
    image: "/images/faq.jpg",
  },
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}