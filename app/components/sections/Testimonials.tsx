"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";

const TESTIMONIALS = [
  {
    id: 1,
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    name: "Robert Fox",
    role: "Customer",
    rating: 5,
    img: "/images/user/img-01.png",
  },
  {
    id: 2,
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    name: "Dianne Russell",
    role: "Customer",
    rating: 5,
    img: "/images/user/img-02.png",
  },
  {
    id: 3,
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    name: "Eleanor Pena",
    role: "Customer",
    rating: 5,
    img: "/images/user/img-03.png",
  },
];

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-10 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Head with Custom Navigation */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Client Testimonials
          </h2>
          
          <div className="flex gap-3">
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-3 rounded-full border border-gray-200 bg-white hover:bg-green-600 hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="p-3 rounded-full border border-gray-200 bg-white hover:bg-green-600 hover:text-white transition-all shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-slider"
        >
          {TESTIMONIALS.map((item) => (
            <SwiperSlide key={item.id}>
              {/* Testimonial Card (Maps to .cards-tm) */}
              <div className="relative bg-white p-6 rounded-lg shadow-[0px_10px_20px_rgba(0,0,0,0.03)] border border-transparent hover:border-green-600 transition-all duration-300 group h-full">
                
                {/* Quote Icon (Absolute Positioned) */}
                <Quote 
                  className="absolute top-6 left-6 text-green-600 opacity-20" 
                  size={32} 
                  fill="currentColor"
                />

                {/* Testimonial Text */}
                <p className="mt-10 mb-6 text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.text}
                </p>

                {/* User Info Block */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium text-lg leading-none mb-1">
                        {item.name}
                      </h4>
                      <span className="text-gray-400 text-sm">{item.role}</span>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className="fill-orange-400 text-orange-400" 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}