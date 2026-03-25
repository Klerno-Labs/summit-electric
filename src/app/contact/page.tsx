"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

const ContactPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.message) {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          setIsSuccess(true);
        } else {
          setError("Something went wrong. Please try again.");
        }
      } catch {
        setError("Network error. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4")}>
      <input type="text" name="name" placeholder="Your Name" required onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input type="email" name="email" placeholder="Your Email" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="tel" name="phone" placeholder="Your Phone" required onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
      <textarea name="message" placeholder="Your Message" required onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
      <button type="submit" className={cn("bg-primary text-white px-6 py-2 rounded-lg")}>Send Message</button>
      {isSuccess && <p className="text-green-500">Thank you! We'll be in touch within 24 hours.</p>}
      {error && <p className="text-red-500">{error}</p>}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
    </form>
  );
};

export default ContactPage;