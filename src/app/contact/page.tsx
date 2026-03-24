import ContactForm from "@/components/forms/ContactForm";
import Footer from "@/components/ui/Footer";

export default function ContactPage() {
  return (
    <main className="pt-20">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <ContactForm />
      <Footer />
    </main>
  );
}