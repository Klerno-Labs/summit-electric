import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import QuoteWizard from "@/components/forms/QuoteWizard";

export const metadata = {
  title: "Contact Us | Summit Electric",
  description: "Request a quote for our electrical services.",
  openGraph: {
    title: "Contact Us | Summit Electric",
    description: "Request a quote for our electrical services.",
    image: "/images/contact.jpg",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <QuoteWizard />
      </main>
      <Footer />
    </>
  );
}