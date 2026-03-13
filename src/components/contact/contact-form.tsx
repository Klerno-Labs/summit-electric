"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// Zod Schema for Validation
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Phone number must be at least 10 digits."),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
  _gotcha: z.string().optional(), // Honeypot
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  submitLabel?: string;
  className?: string;
}

export function ContactForm({ submitLabel = "Send Message", className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Honeypot check
    if (data._gotcha) {
      console.log("Bot detected");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
      } else {
        const result = await response.json();
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={cn("text-center p-8 bg-green-50 border border-green-200 rounded-xl", className)}>
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600">Thank you for reaching out. A member of our team will contact you within 24 hours.</p>
        <Button
          variant="outline"
          className="mt-6 border-green-600 text-green-700 hover:bg-green-50"
          onClick={() => setIsSuccess(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-6", className)}>
      {/* Honeypot */}
      <input type="text" {...register("_gotcha")} className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-gray-900">Full Name <span className="text-red-500">*</span></label>
          <Input id="name" placeholder="John Doe" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name && <p className="text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-semibold text-gray-900">Phone Number <span className="text-red-500">*</span></label>
          <Input id="phone" type="tel" placeholder="(512) 555-0123" {...register("phone")} aria-invalid={!!errors.phone} />
          {errors.phone && <p className="text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-semibold text-gray-900">Email Address <span className="text-red-500">*</span></label>
        <Input id="email" type="email" placeholder="john@example.com" {...register("email")} aria-invalid={!!errors.email} />
        {errors.email && <p className="text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-semibold text-gray-900">Service Needed</label>
        <select
          id="service"
          {...register("service")}
          className="flex h-11 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:border-[#0056b3] focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20"
        >
          <option value="">Select a service...</option>
          <option value="residential">Residential Repair</option>
          <option value="panel">Panel Upgrade</option>
          <option value="commercial">Commercial Wiring</option>
          <option value="lighting">Lighting Installation</option>
          <option value="emergency">Emergency Service</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-gray-900">Message <span className="text-red-500">*</span></label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className="flex min-h-[120px] w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#0056b3] focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
          placeholder="Describe your electrical issue or project..."
          aria-invalid={!!errors.message}
        ></textarea>
        {errors.message && <p className="text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message.message}</p>}
      </div>

      {error && (
        <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm flex items-center gap-2 border border-red-200">
          <AlertCircle className="w-4 h-4" /> {error}
        </div>
      )}

      <Button type="submit" size="lg" className="w-full text-lg" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
          </>
        ) : (
          submitLabel
        )}
      </Button>
      
      <p className="text-xs text-center text-gray-500">
        By submitting this form, you agree to our privacy policy. We never share your data.
      </p>
    </form>
  );
}