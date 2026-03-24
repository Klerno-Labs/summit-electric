"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-slate-50 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.seo?.image || siteConfig.links.social[0].url || "/hero.jpg"}
          alt="Modern luxury home exterior"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-slate-50/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
            Summit Electric
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-[1.1]">
            Trusted Local Partner for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Home Improvement
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
            Delivering quality workmanship and reliable electrical solutions. Your
            safety is our priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
            >
              Get a Free Estimate
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/services"
              className="bg-white text-slate-900 border border-slate-200 px-8 py-3.5 rounded-lg font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              View Services
            </Link>
          </div>
          <div className="flex items-center gap-6 pt-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-blue-600" />
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-blue-600" />
              BBB A+ Rated
            </div>
          </div>
        </div>

        {/* Image / Graphic */}
        <div className="hidden md:block">
          <img
            src={siteConfig.seo?.image || "/hero.jpg"}
            alt="Electrician at work"
            className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowRight size={24} className="text-slate-400" />
      </div>
    </section>
  );
}