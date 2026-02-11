"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowRight, Tag, User, MessageCircle } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    category: "Food",
    author: "Admin",
    comments: 65,
    date: { day: "18", month: "Nov" },
    img: "/images/blogs/blog-01.png",
  },
  {
    id: 2,
    title: "Eget neque accumsan venenatis. Curabitur porttitor orci nunc fermentum.",
    category: "Food",
    author: "Admin",
    comments: 65,
    date: { day: "20", month: "Nov" },
    img: "/images/blogs/blog-02.png",
  },
  {
    id: 3,
    title: "Accumsan venenatis. Curabitur porttitor orci eget neque nunc fermentum.",
    category: "Food",
    author: "Admin",
    comments: 65,
    date: { day: "22", month: "Nov" },
    img: "/images/blogs/blog-03.png",
  },
];

export default function LatestNews() {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Head */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
            Latest News
          </h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14 news-slider"
        >
          {BLOG_POSTS.map((post) => (
            <SwiperSlide key={post.id}>
              {/* Blog Card Container (Maps to .cards-blog) */}
              <div className="group bg-transparent rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_7px_40px_rgba(0,0,0,0.1)]">
                
                {/* Image Wrapper */}
                <div className="relative h-[280px] md:h-[325px] overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Date Box (Maps to .date) */}
                  <div className="absolute left-6 bottom-6 w-[58px] h-[58px] bg-white/85 group-hover:bg-white rounded flex flex-col items-center justify-center transition-colors duration-300 z-10">
                    <h3 className="text-gray-900 font-bold text-xl leading-none">{post.date.day}</h3>
                    <span className="text-gray-500 text-[10px] uppercase font-medium">{post.date.month}</span>
                  </div>
                </div>

                {/* Info Block */}
                <div className="p-6 bg-white">
                  {/* Tags / Meta (Maps to .cards-blog__info-tags) */}
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <Tag size={16} className="text-green-600" />
                      <span>{post.category}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User size={16} className="text-green-600" />
                      <span>By {post.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle size={16} className="text-green-600" />
                      <span>{post.comments} Comments</span>
                    </div>
                  </div>

                  {/* Blog Title */}
                  <Link href={`/blog/${post.id}`}>
                    <h4 className="text-lg font-medium text-gray-900 leading-snug mb-4 group-hover:text-green-600 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                  </Link>

                  {/* Read More Link */}
                  <Link 
                    href={`/blog/${post.id}`} 
                    className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
                  >
                    Read More <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .news-slider .swiper-pagination-bullet-active {
          background: #16a34a !important; /* Tailwind Green-600 */
        }
      `}</style>
    </section>
  );
}