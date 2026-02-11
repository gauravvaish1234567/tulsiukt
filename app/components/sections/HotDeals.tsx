"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Eye, ShoppingBag, Star } from "lucide-react";

const SMALL_PRODUCTS = [
  { id: 2, name: "Orange", price: 14.99, oldPrice: 20.99, rating: 4, sale: "50%", img: "img-02.png" },
  { id: 3, name: "Chinese cabbage", price: 14.99, oldPrice: null, rating: 4, sale: null, img: "img-03.png" },
  { id: 4, name: "Green Lettuce", price: 14.99, oldPrice: null, rating: 4, sale: null, img: "img-04.png" },
  { id: 5, name: "Eggplant", price: 14.99, oldPrice: null, rating: 4, sale: null, img: "img-05.png" },
  { id: 6, name: "Big Potatoes", price: 14.99, oldPrice: null, rating: 5, sale: null, img: "img-06.png" },
  { id: 7, name: "Corn", price: 14.99, oldPrice: null, rating: 4, sale: null, img: "img-07.png" },
  { id: 8, name: "Fresh Cauliflower", price: 14.99, oldPrice: null, rating: 4, sale: null, img: "img-08.png" },
  { id: 9, name: "Green Chili", price: 14.99, oldPrice: null, rating: 5, sale: null, img: "img-09.png" },
];

export default function HotDeals() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const target = new Date().getTime() + 86400000 * 2; // 2 days from now
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const d = target - now;
      setTimeLeft({
        days: Math.floor(d / (1000 * 60 * 60 * 24)),
        hours: Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((d % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((d % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-50 py-10 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Hot Deals</h2>
          <Link href="/shop" className="flex items-center gap-2 text-green-600 font-medium hover:text-green-700">
            View All <ArrowRight size={18} />
          </Link>
        </div>

        {/* Main Grid Logic (Maps to deals-products__wrapper) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 bg-white border-l border-t border-gray-100">
          
          {/* Large Featured Deal Card (Spans 2 columns and 2 rows on XL) */}
          <div className="xl:col-span-2 xl:row-span-2 border-b border-r border-gray-100 p-6 group relative hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:z-10 transition-all">
            <div className="relative aspect-square w-full mb-6">
              <Image src="/images/products/img-12.png" alt="Featured Product" fill className="object-contain" />
              <div className="absolute top-0 left-0 flex flex-col gap-2">
                <span className="bg-red-500 text-white text-xs px-3 py-1 rounded">Sale 50%</span>
                <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded">Best Sale</span>
              </div>
              
              {/* Large Card Hover Actions */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-3 bg-gray-100 rounded-full hover:bg-green-600 hover:text-white transition-colors">
                  <Heart size={20} />
                </button>
                <button className="bg-green-600 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-green-700 transition-colors">
                  Add to cart <ShoppingBag size={18} />
                </button>
                <button className="p-3 bg-gray-100 rounded-full hover:bg-green-600 hover:text-white transition-colors">
                  <Eye size={20} />
                </button>
              </div>
            </div>

            <div className="text-center">
              <h6 className="text-xl text-gray-900 mb-2">Chinese Cabbage</h6>
              <div className="flex justify-center items-center gap-2 mb-3">
                <span className="text-2xl font-bold text-gray-900">$14.99</span>
                <del className="text-gray-400 text-lg">$24.99</del>
              </div>
              
              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-400 text-orange-400" />
                ))}
                <span className="text-gray-400 text-sm ml-2">(524 feedback)</span>
              </div>

              {/* Large Card Countdown */}
              <div className="border-t border-gray-100 pt-6">
                <p className="text-gray-500 text-sm uppercase tracking-wide mb-4 font-medium">Hurry up! Offer ends In:</p>
                <div className="flex justify-center gap-4">
                  {[
                    { v: timeLeft.days, l: "DAYS" },
                    { v: timeLeft.hours, l: "HRS" },
                    { v: timeLeft.mins, l: "MINS" },
                    { v: timeLeft.secs, l: "SECS" }
                  ].map((t, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-2xl font-bold text-gray-900 leading-none">{String(t.v).padStart(2, '0')}</span>
                      <span className="text-[10px] text-gray-400 mt-1">{t.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Small Cards Loop */}
          {SMALL_PRODUCTS.map((product) => (
            <div 
              key={product.id}
              className="group border-b border-r border-gray-100 p-4 relative hover:border-green-600 hover:shadow-[0_0_15px_rgba(32,181,38,0.2)] hover:z-10 transition-all bg-white"
            >
              <div className="relative aspect-square w-full mb-4">
                <Image src={`/images/products/${product.img}`} alt={product.name} fill className="object-contain" />
                
                {/* Sale Tag */}
                {product.sale && (
                   <span className="absolute top-0 left-0 bg-red-500 text-white text-[10px] px-2 py-1 rounded">
                    Sale {product.sale}
                   </span>
                )}

                {/* Small Card Side Hover Actions */}
                <div className="absolute top-0 right-0 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="p-2 bg-white border border-gray-100 rounded-full hover:bg-green-600 hover:text-white transition-colors">
                    <Heart size={16} />
                  </button>
                  <button className="p-2 bg-white border border-gray-100 rounded-full hover:bg-green-600 hover:text-white transition-colors">
                    <Eye size={16} />
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <h6 className="text-gray-600 group-hover:text-green-700 transition-colors text-sm mb-1">{product.name}</h6>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-900 font-bold">${product.price}</span>
                    {product.oldPrice && <del className="text-gray-400 text-xs">${product.oldPrice}</del>}
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className={i < product.rating ? "fill-orange-400 text-orange-400" : "fill-gray-200 text-gray-200"} />
                    ))}
                  </div>
                </div>
                <button className="p-2.5 bg-gray-100 rounded-full group-hover:bg-green-600 group-hover:text-white transition-all">
                  <ShoppingBag size={18} />
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}