"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowRight, Heart, Eye, ShoppingBag, Star } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const FEATURED_PRODUCTS = [
  { id: 1, name: "Green Apple", price: 14.99, rating: 4, img: "/images/products/img-01.png" },
  { id: 2, name: "Fresh Orange", price: 12.00, rating: 5, img: "/images/products/img-02.png", sale: "50%" },
  { id: 3, name: "Chinese Cabbage", price: 14.99, rating: 4, img: "/images/products/img-03.png" },
  { id: 4, name: "Green Lettuce", price: 14.99, rating: 4, img: "/images/products/img-04.png" },
  { id: 5, name: "Eggplant", price: 14.99, rating: 4, img: "/images/products/img-05.png" },
  { id: 6, name: "Big Potatoes", price: 14.99, rating: 5, img: "/images/products/img-06.png" },
];

export default function FeaturedProducts() {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Head */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 capitalize">
            Featured Products
          </h2>
          <Link 
            href="/shop" 
            className="flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
          >
            View All <ArrowRight size={18} />
          </Link>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={2}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="pb-12"
        >
          {FEATURED_PRODUCTS.map((product) => (
            <SwiperSlide key={product.id}>
              {/* Card Container (Maps to .cards-md) */}
              <div className="group relative bg-white border border-gray-100 rounded-md overflow-hidden transition-all duration-300 hover:border-green-600 hover:shadow-[0_0_12px_rgba(32,181,38,0.32)]">
                
                {/* Image Wrapper */}
                <div className="relative aspect-square w-full p-4 overflow-hidden">
                  <Link href={`/product/${product.id}`}>
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </Link>

                  {/* Badges */}
                  {product.sale && (
                    <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">
                      Sale {product.sale}
                    </span>
                  )}

                  {/* Hover Side Actions (Wishlist/QuickView) */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <button className="p-2 bg-white border border-gray-100 rounded-full hover:bg-green-600 hover:text-white transition-colors shadow-sm">
                      <Heart size={18} />
                    </button>
                    <button className="p-2 bg-white border border-gray-100 rounded-full hover:bg-green-600 hover:text-white transition-colors shadow-sm">
                      <Eye size={18} />
                    </button>
                  </div>
                </div>

                {/* Info Block */}
                <div className="p-4 pt-0 flex justify-between items-end">
                  <div className="flex flex-col gap-1">
                    <Link href={`/product/${product.id}`}>
                      <h6 className="text-gray-700 font-normal text-sm group-hover:text-green-700 transition-colors truncate max-w-[120px]">
                        {product.name}
                      </h6>
                    </Link>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-900 font-semibold">${product.price}</span>
                    </div>
                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={12} 
                          className={i < product.rating ? "fill-orange-400 text-orange-400" : "fill-gray-200 text-gray-200"} 
                        />
                      ))}
                    </div>
                  </div>

                  {/* Cart Action Button */}
                  <button className="p-3 bg-gray-100 text-gray-900 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300">
                    <ShoppingBag size={18} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}