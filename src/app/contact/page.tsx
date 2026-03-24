"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-slate-900 py-20 md:py-32 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              Ready to improve your home? Reach out to us for a free estimate or
              to schedule a service.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">
                  Request a Quote
                </h2>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="electrical">Electrical Repair</option>
                      <option value="inspections">Safety Inspection</option>
                      <option value="maintenance">Home Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-4 px-6 rounded-lg font-semibold text-white transition-all",
                    isSubmitting
                      ? "bg-blue-600 cursor-not-allowed opacity-75"
                      : "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 hover:scale-[1.02]"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Request"}
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-slate-600 mb-6">
                  Thank you for contacting us. We&apos;ll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Our Location
                    </h3>
                    <p className="text-slate-600">{siteConfig.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Phone Number
                    </h3>
                    {siteConfig.contact.phone && (
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Email Address
                    </h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-slate-600">{siteConfig.contact.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl text-white">
              <h3 className="text-lg font-bold mb-4">Emergency Service</h3>
              <p className="text-slate-300 mb-6">
                Need help right away? We offer 24/7 emergency electrical services.
              </p>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="block w-full text-center bg-white text-slate-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}