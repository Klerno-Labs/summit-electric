"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setIsSuccess(false);

    const formData = new FormData(e.currentTarget);
    
    // Honeypot check
    if (formData.get("_gotcha")) {
      setIsSubmitting(false);
      return;
    }

    try {
      // In a real static export scenario, this fetch might point to an external service like Formspree.
      // Here we point to the local API route as requested, acknowledging static export limitations.
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: formData.get("service"),
          message: formData.get("message"),
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        e.currentTarget.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center">
        <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
        <p className="text-green-700">Thank you for contacting Summit Electric. We'll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-text">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            maxLength={50}
            className="w-full px-4 py-3 border border-gray-200 rounded-md text-text focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-semibold text-text">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            pattern="[0-9]{10}"
            className="w-full px-4 py-3 border border-gray-200 rounded-md text-text focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="(512) 555-0198"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-semibold text-text">Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-md text-text focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          placeholder="john@example.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-semibold text-text">Service Needed</label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 border border-gray-200 rounded-md text-text focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white"
        >
          <option value="">Select a service...</option>
          <option value="residential">Residential Repair</option>
          <option value="panel">Panel Upgrade</option>
          <option value="lighting">Lighting Installation</option>
          <option value="ev">EV Charger</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-text">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={500}
          className="w-full px-4 py-3 border border-gray-200 rounded-md text-text focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          placeholder="Tell us about your project..."
        />
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm font-medium">
          {error}
        </div>
      )}

      <Button 
        type="submit" 
        size="lg" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}