import Image from "next/image";
import { Instagram } from "lucide-react";

const INSTAGRAM_POSTS = [
  { id: 1, src: "/images/instagram/img-01.jpg" },
  { id: 2, src: "/images/instagram/img-02.png" },
  { id: 3, src: "/images/instagram/img-03.png" },
  { id: 4, src: "/images/instagram/img-04.png" },
  { id: 5, src: "/images/instagram/img-05.png" },
  { id: 6, src: "/images/instagram/img-06.png" },
];

export default function InstagramFeed() {
  return (
    <section className="py-10 md:py-20 lg:pb-0">
      <div className="container mx-auto px-4">
        {/* Section Head */}
        <div className="flex justify-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center capitalize">
            Follow us on Instagram
          </h2>
        </div>

        {/* Grid Layout (Maps to Bootstrap col-xl-2 col-sm-3 col-4) */}
        <div className="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6 justify-items-center">
          {INSTAGRAM_POSTS.map((post) => (
            <a 
              key={post.id} 
              href="#" 
              className="group relative block w-full max-w-[200px] aspect-square rounded-[10px] overflow-hidden"
            >
              {/* Image (Maps to cards-ig__img img) */}
              <Image
                src={post.src}
                alt={`Instagram post ${post.id}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay (Maps to cards-ig__overlay) */}
              <div className="absolute inset-0 bg-[#2b572e]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                <span className="text-white">
                  {/* Using standard Instagram SVG from your code */}
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 25 25" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 md:w-10 md:h-10"
                  >
                    <path 
                      d="M12.0027 24.0548C8.72269 24.0548 8.33602 24.0375 7.05602 23.9815C6.05785 23.9487 5.07259 23.7458 4.14269 23.3815C3.34693 23.0718 2.62426 22.6 2.02058 21.9961C1.4169 21.3922 0.945397 20.6694 0.636019 19.8735..." 
                      fill="currentColor" 
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}