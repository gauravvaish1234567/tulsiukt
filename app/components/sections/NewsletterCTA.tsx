"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function NewsletterCTA() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic
  };

  return (
    <section className="bg-gray-50 py-10 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Main Wrapper (Maps to .newsletter) */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-4">
          
          {/* Left Content (Text) */}
          <div className="text-center xl:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 md:mb-4">
              Subscribe Our Newsletter
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-lg xl:max-w-md mx-auto xl:mx-0">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. 
              Phasellus imperdiet elit eu magna.
            </p>
          </div>

          {/* Right Content (Form & Social) */}
          <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-4xl xl:justify-end">
            
            {/* Input Group (Maps to .newsletter__input) */}
            <form onSubmit={handleSubmit} className="relative w-full max-w-[492px]">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full h-[52px] rounded-full border border-gray-100 bg-white px-6 py-3 text-gray-900 outline-none transition-all focus:border-green-300 hover:border-green-300 placeholder:text-gray-400"
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 h-full rounded-full bg-green-600 px-8 font-semibold text-white transition-colors hover:bg-green-700"
              >
                Subscribe
              </button>
            </form>

            {/* Social Icons (Maps to .newsletter__social-icon) */}
            <ul className="flex items-center gap-2">
              {[
                { id: "fb", icon: <Facebook size={18} />, href: "#" },
                { id: "tw", icon: <Twitter size={18} />, href: "#" },
                { id: "pt", icon: <PinterestIcon />, href: "#" },
                { id: "ig", icon: <Instagram size={18} />, href: "#" },
              ].map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition-all hover:bg-green-600 hover:text-white"
                  >
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Custom Pinterest Icon to match your SVGs
function PinterestIcon() {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.24471 0C3.31136 0 0.687744 3.16139 0.687744 6.60855C0.687744 8.20724 1.58103 10.2008 3.01097 10.8331C3.22811 10.931 3.34624 10.8894 3.39462 10.688C3.43737 10.535 3.62525 9.79807 3.71638 9.45042C3.74451 9.33904 3.72988 9.24229 3.63988 9.13766C3.16511 8.58864 2.78321 7.58847 2.78321 6.65017..." fill="currentColor" />
    </svg>
  );
}