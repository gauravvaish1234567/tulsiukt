import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BannerSection() {
  return (
    <section className="my-6 md:mb-3">
      <div className="container mx-auto px-4">
        {/* Banner Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Large Slider Area (col-lg-8) */}
          <div className="lg:col-span-8">
            {/* Swiper Container Logic */}
            <div className="relative w-full h-[300px] md:h-[600px] rounded-[10px] overflow-hidden group">
              <Image
                src="/images/banner/banner-lg-03.jpg"
                alt="Fresh & Healthy Organic Food"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient Overlay from SCSS &--img-01::after */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-[1]" />

              {/* Text Content */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-16 z-10">
                <h2 className="text-2xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight md:w-[70%]">
                  Fresh & Healthy Organic Food
                </h2>
                
                {/* Sale Off Box */}
                <div className="my-4 md:my-8 pl-3 border-l-2 border-green-400">
                  <h5 className="text-white text-lg md:text-2xl font-medium mb-2 flex items-center gap-2">
                    Sale up to 
                    <span className="bg-orange-500 text-white text-xs md:text-sm px-3 py-1 rounded-[5px] uppercase font-bold">
                      30% off
                    </span>
                  </h5>
                  <p className="text-gray-300 text-sm md:text-base">
                    Free shipping on all your orders.
                  </p>
                </div>

                <Link href="#" className="inline-flex items-center gap-3 bg-white text-green-600 px-6 md:px-10 py-3 rounded-full font-bold hover:bg-gray-100 transition-all">
                  Shop now <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side Small Banners (col-lg-4) */}
          <div className="lg:col-span-4 flex flex-col md:flex-row lg:flex-col gap-6">
            
            {/* Top Small Banner */}
            <div className="relative w-full h-[288px] rounded-[10px] overflow-hidden flex-1">
              <Image
                src="/images/banner/banner-sm-05.png"
                alt="Summer Sale"
                fill
                className="object-cover"
              />
              <div className="absolute top-8 left-8 z-10">
                <h5 className="text-gray-900 uppercase tracking-wider text-sm font-semibold mb-2">
                  Summer Sale
                </h5>
                <h2 className="text-3xl font-bold text-gray-900 uppercase mb-3">
                  75% off
                </h2>
                <p className="text-gray-600 text-sm mb-6">Only Fruit & Vegetable</p>
                <Link href="#" className="inline-flex items-center gap-2 text-green-600 font-bold hover:gap-3 transition-all p-0">
                  Shop now <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Bottom Small Banner */}
            <div className="relative w-full h-[288px] rounded-[10px] overflow-hidden flex-1">
              <Image
                src="/images/banner/banner-sm-04.png"
                alt="Best Deal"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                <h5 className="text-white uppercase text-sm font-semibold mb-3">
                  Best Deal
                </h5>
                <h2 className="text-2xl font-bold text-white mb-6 max-w-[80%] leading-snug">
                  Special Products Deal of the Month
                </h2>
                <Link href="#" className="inline-flex items-center gap-2 text-green-400 font-bold hover:gap-3 transition-all p-0">
                  Shop now <ArrowRight size={18} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}