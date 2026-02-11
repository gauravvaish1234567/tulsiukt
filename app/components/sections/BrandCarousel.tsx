"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const BRANDS = [
  { id: 1, name: "Steps", svg: <BrandLogo1 /> },
  { id: 2, name: "Mango", svg: <BrandLogo2 /> },
  { id: 3, name: "Food", svg: <BrandLogo3 /> },
  { id: 4, name: "BookFood", svg: <BrandLogo4 /> },
  { id: 5, name: "Series", svg: <BrandLogo5 /> },
  { id: 6, name: "Steps", svg: <BrandLogo1 /> }, // Duplicate or different brands as needed
];

export default function BrandCarousel() {
  return (
    <section className="py-10 md:py-20 pb-0 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0} // We use borders for separation
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className="brand-swiper"
        >
          {BRANDS.map((brand) => (
            <SwiperSlide key={brand.id}>
              {/* Brand Wrapper (Maps to .brand-name__icon) */}
              <div className="group flex items-center justify-center h-12 px-6 border-r border-gray-200 last:border-r-0 text-gray-300 hover:text-green-600 transition-all duration-500 cursor-pointer">
                <div className="w-full max-w-[100px] flex justify-center">
                  {brand.svg}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

// --- Simplified SVG Components from your HTML ---

function BrandLogo1() {
  return (
    <svg width="82" height="32" viewBox="0 0 82 32" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M8.00036 8.70355..." fill="currentColor" /> {/* Path truncated for brevity */}
       {/* Use your full path here */}
    </svg>
  );
}

function BrandLogo2() {
  return (
    <svg width="67" height="32" viewBox="0 0 67 32" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M1.50477 4.43062..." fill="currentColor" />
    </svg>
  );
}

function BrandLogo3() {
    return (
      <svg width="61" height="32" viewBox="0 0 61 32" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M26.1014 27.7551..." fill="currentColor" />
      </svg>
    );
}

function BrandLogo4() {
    return (
      <svg width="84" height="32" viewBox="0 0 84 32" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M73.5415 18.3893..." fill="currentColor" />
      </svg>
    );
}

function BrandLogo5() {
    return (
      <svg width="96" height="32" viewBox="0 0 96 32" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M1.83049 25.5529..." fill="currentColor" />
      </svg>
    );
}