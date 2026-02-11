"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function PromoBanners() {
  // Simple countdown logic for the UI
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    // Set a dummy target date 5 days from now
    const target = new Date();
    target.setDate(target.getDate() + 5);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = target.getTime() - now;
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          
          {/* Card 1: Sale of the Month (Countdown) */}
          <div className="relative h-[450px] md:h-[536px] rounded-lg overflow-hidden group">
            <Image
              src="/images/banner/banner-sm-03.png"
              alt="Sale of the month"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 text-center text-white px-6">
              <h6 className="uppercase tracking-widest text-sm font-medium mb-3">Best Deals</h6>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Sale of the Month</h2>
              
              {/* Countdown UI */}
              <div className="flex gap-3 mb-8">
                {[
                  { label: "DAYS", value: timeLeft.days },
                  { label: "HOURS", value: timeLeft.hours },
                  { label: "MINS", value: timeLeft.mins },
                  { label: "SECS", value: timeLeft.secs }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-2xl md:text-3xl font-bold leading-none">{String(item.value).padStart(2, '0')}</span>
                    <span className="text-[10px] opacity-70 mt-1">{item.label}</span>
                  </div>
                ))}
              </div>

              <Link href="#" className="inline-flex items-center gap-3 bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all">
                Shop now <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Card 2: Low-Fat Meat (Start Price) */}
          <div className="relative h-[450px] md:h-[536px] rounded-lg overflow-hidden group">
            <Image
              src="/images/banner/banner-sm-01.png"
              alt="Low-fat meat"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 text-center text-white px-6">
              <h6 className="uppercase tracking-widest text-sm font-medium mb-3">85% Fat Free</h6>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Low-Fat Meat</h2>
              <div className="mb-8">
                <p className="text-lg">Started at <span className="text-orange-400 font-bold text-2xl ml-1">$79.99</span></p>
              </div>
              <Link href="#" className="inline-flex items-center gap-3 bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all">
                Shop now <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Card 3: Fresh Fruit (Dark Text / Badge) */}
          <div className="relative h-[450px] md:h-[536px] rounded-lg overflow-hidden group">
            <Image
              src="/images/banner/banner-sm-02.png"
              alt="Fresh fruit"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Maps to cards-ss--darktext */}
            <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 text-center text-gray-900 px-6">
              <h6 className="uppercase tracking-widest text-sm font-medium mb-3">Summer Sale</h6>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">100% Fresh Fruit</h2>
              <div className="mb-8 flex items-center gap-2">
                <p className="text-lg">Up to 
                  <span className="ml-2 bg-gray-900 text-yellow-400 px-3 py-1 rounded-md font-bold uppercase text-sm">
                    64% off
                  </span>
                </p>
              </div>
              <Link href="#" className="inline-flex items-center gap-3 bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all border border-gray-100">
                Shop now <ArrowRight size={18} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}