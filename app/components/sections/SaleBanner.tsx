import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SaleBanner() {
  return (
    <section className="py-10 md:py-20 pb-0">
      <div className="container mx-auto px-4">
        {/* Banner Image Wrapper */}
        <div className="relative w-full h-[400px] md:h-[358px] rounded-xl overflow-hidden group">
          {/* Main Background Image */}
          <Image
            src="/images/banner/banner-lg-16.jpg"
            alt="Summer Sale Banner"
            fill
            className="object-cover"
          />

          {/* Overlay Logic 
              Mobile: Solid Dark Green (rgba(0, 38, 3, 0.8))
              Desktop: Dark Linear Gradient (270deg)
          */}
          <div className="absolute inset-0 z-10 
            bg-[#002603]/80 
            lg:bg-transparent lg:bg-gradient-to-l lg:from-black/80 lg:to-black/10" 
          />

          {/* Text Content 
              Centred on Mobile, positioned at 60% left on Desktop
          */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6
            lg:items-start lg:justify-center lg:text-left lg:left-[60%] lg:w-[35%] lg:px-0">
            
            <h5 className="text-white uppercase tracking-wider text-sm md:text-base font-medium mb-3">
              Summer Sale
            </h5>
            
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-orange-400 leading-tight mb-4">
              37% <span className="text-white font-normal">OFF</span>
            </h2>
            
            <p className="text-white/70 text-sm md:text-base lg:text-lg mb-8 max-w-[440px]">
              Free on all your order, Free Shipping and 30 days money-back guarantee
            </p>

            <Link 
              href="#" 
              className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-3 rounded-full font-bold 
                         hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              Shop now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}