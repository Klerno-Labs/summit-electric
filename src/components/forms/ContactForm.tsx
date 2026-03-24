"use client";
import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      {isSuccess && <p className="text-green-500 mb-4">Thank you! We'll be in touch within 24 hours.</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <Input id="name" label="Name" type="text" required onChange={handleChange} />
      <Input id="email" label="Email" type="email" required onChange={handleChange} />
      <textarea
        id="message"
        name="message"
        placeholder="Your message"
        required
        className="w-full border border-slate-200 rounded-lg p-4 mb-4"
        onChange={handleChange}
      />
      <Button variant="primary" onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;