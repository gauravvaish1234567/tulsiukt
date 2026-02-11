import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white font-sans overflow-hidden">
      <div className="container mx-auto px-4">
        {/* --- Footer Top --- */}
        <div className="py-[66px]">
          <div className="flex flex-wrap -mx-4">
            
            {/* Brand Information (col-lg-4) */}
            <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
              <div className="flex flex-col gap-4">
                <Link href="/" className="relative w-40 h-10">
                  <Image 
                    src="/images/logo-nl-white.png" 
                    alt="logo" 
                    fill 
                    className="object-contain"
                  />
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[350px]">
                  Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                  <a href="tel:2195550114" className="flex items-center gap-2 group">
                    <span className="border-b border-green-600 pb-1 group-hover:text-green-600 group-hover:border-green-500 transition-all duration-300">
                      (219) 555-0114
                    </span>
                  </a>
                  <span className="text-gray-500">or</span>
                  <a href="mailto:Proxy@gmail.com" className="flex items-center gap-2 group">
                    <span className="border-b border-green-600 pb-1 group-hover:text-green-600 group-hover:border-green-500 transition-all duration-300">
                      Proxy@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Menus (Account, Help, Proxy, Categories) */}
            <div className="w-full lg:w-2/3 px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                
                {/* My Account */}
                <div>
                  <h2 className="text-lg font-medium mb-5 capitalize">My Account</h2>
                  <ul className="flex flex-col gap-3">
                    {["My Account", "Order History", "Shopping Cart", "Wishlist"].map((item) => (
                      <li key={item}>
                        <Link href="#" className="text-gray-400 text-sm capitalize hover:text-white transition-colors duration-300">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Helps */}
                <div>
                  <h2 className="text-lg font-medium mb-5 capitalize">Helps</h2>
                  <ul className="flex flex-col gap-3">
                    {["Contact", "FAQ", "Terms & Condition", "Privacy Policy"].map((item) => (
                      <li key={item}>
                        <Link href="#" className="text-gray-400 text-sm capitalize hover:text-white transition-colors duration-300">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Proxy */}
                <div>
                  <h2 className="text-lg font-medium mb-5 capitalize">Proxy</h2>
                  <ul className="flex flex-col gap-3">
                    {["About", "Shop", "Product", "Track Order"].map((item) => (
                      <li key={item}>
                        <Link href="#" className="text-gray-400 text-sm capitalize hover:text-white transition-colors duration-300">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Categories */}
                <div>
                  <h2 className="text-lg font-medium mb-5 capitalize">Categories</h2>
                  <ul className="flex flex-col gap-3">
                    {["Fruit & Vegetables", "Meat & Fish", "Bread & Bakery", "Beauty & Health"].map((item) => (
                      <li key={item}>
                        <Link href="#" className="text-gray-400 text-sm capitalize hover:text-white transition-colors duration-300">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* --- Footer Bottom --- */}
        <div className="py-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm order-2 md:order-1 text-center md:text-left">
            Shopery eCommerce © {currentYear}. All Rights Reserved
          </p>
          
          <div className="flex items-center gap-2 order-1 md:order-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="relative w-10 h-8">
                <Image 
                  src={`/images/brand-icon/img-0${num}.png`} 
                  alt={`Payment Method ${num}`} 
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}