"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav className={cn("sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100")}>
      <div className="container mx-auto flex justify-between items-center h-20">
        <Link href="/" className="text-xl font-bold">Summit Electric</Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <Link href="tel:(713)555-1234" className="bg-accent text-white px-6 py-2 rounded-lg hover:scale-105 transition">Call Now</Link>
      </div>
    </nav>
  );
};

export default Navbar;