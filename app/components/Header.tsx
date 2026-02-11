"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  ChevronDown, 
  Search, 
  Heart, 
  ShoppingBag, 
  Phone, 
  Menu,
  X 
} from "lucide-react";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white font-sans overflow-x-hidden relative z-[100]">
        {/* --- Top Bar --- */}
        <div className="border-b border-gray-200 py-[13px] hidden md:block">
          <div className="container mx-auto px-4 flex items-center justify-between text-gray-500 text-xs">
            <div className="flex items-center gap-2">
              <MapPin size={16} strokeWidth={1.5} />
              <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex items-center border-r border-gray-200 pr-5 gap-4">
                <div className="relative group cursor-pointer flex items-center gap-1 text-gray-600">
                  Eng <ChevronDown size={14} />
                </div>
                <div className="relative group cursor-pointer flex items-center gap-1 text-gray-600">
                  USD <ChevronDown size={14} />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Link href="/sign-in" className="hover:underline">Sign in</Link>
                <span className="text-gray-300">/</span>
                <Link href="/sign-up" className="hover:underline">Sign up</Link>
              </div>
            </div>
          </div>
        </div>

        {/* --- Middle Bar --- */}
        <div className="py-6">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="lg:hidden text-gray-900" aria-label="Open Menu">
                <Menu size={24} strokeWidth={1.5} />
              </button>
              <Link href="/" className="shrink-0 relative w-32 h-8">
                <Image src="/images/logo.png" alt="brand-logo" fill className="object-contain" priority />
              </Link>
            </div>

            {/* Search Form */}
            <form action="#" className="hidden lg:block">
              <div className="relative w-[400px] xl:w-[498px] h-[45px]">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="w-full h-full border border-gray-200 rounded-md pl-11 pr-24 text-sm focus:border-green-400 outline-none transition-all"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-900">
                  <Search size={20} strokeWidth={1.5} />
                </span>
                <button type="submit" className="absolute right-0 top-0 h-full bg-green-600 text-white px-6 rounded-r-md font-medium text-sm hover:bg-green-700 transition-colors">
                  Search
                </button>
              </div>
            </form>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Link href="/wishlist" className="hover:text-green-600 transition-colors hidden sm:block">
                <Heart size={24} strokeWidth={1.5} className="text-gray-900" />
              </Link>
              <div className="h-8 w-[1px] bg-gray-200 hidden sm:block"></div>
              
              {/* Trigger for Cart */}
              <div 
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="relative transition-colors group-hover:text-green-600">
                  <ShoppingBag size={32} strokeWidth={1.2} />
                  <span className="absolute -top-0.5 -right-1 w-[18px] h-[18px] bg-green-700 text-white border border-white rounded-full flex items-center justify-center text-[10px] font-medium">
                    2
                  </span>
                </div>
                <div className="hidden sm:block">
                  <h5 className="text-[11px] text-gray-500 leading-none mb-1">Shopping cart:</h5>
                  <span className="text-sm font-semibold text-gray-900">$57.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Navigation Bar --- */}
        <div className="bg-gray-900 hidden lg:block">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <nav>
              <ul className="flex items-center">
                <li className="relative group py-5 mr-9">
                  <Link href="/" className="text-sm font-medium text-gray-400 flex items-center gap-1 group-hover:text-white transition-colors">
                    Home <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                  </Link>
                </li>
                {['Shop', 'Pages', 'Blog', 'About Us', 'Contact Us'].map((nav) => (
                  <li key={nav} className="py-5 mr-9">
                    <Link href={`/${nav.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                      {nav}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <a href="tel:2195550114" className="text-white flex items-center gap-2 text-sm font-medium">
              <Phone size={20} strokeWidth={1.5} /> (219) 555-0114
            </a>
          </div>
        </div>
      </header>

      {/* --- Shopping Cart Drawer --- */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

/* --- Cart Drawer Component --- */
function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      {/* Backdrop Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[9998] transition-opacity duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={onClose}
      />

      {/* Cart Container (Maps to .shopping-cart) */}
      <div className={`fixed top-0 right-0 h-full bg-white z-[9999] transition-all duration-500 transform 
        ${isOpen ? "translate-x-0 w-full sm:w-[455px]" : "translate-x-full w-[355px] sm:w-[455px]"} 
        flex flex-col p-6 sm:p-10 shadow-2xl`}
      >
        {/* Cart Header */}
        <div className="flex items-center justify-between mb-6">
          <h5 className="text-xl font-medium text-gray-900">Shopping Cart (2)</h5>
          <button onClick={onClose} className="p-1 hover:rotate-90 transition-transform duration-300">
             <X size={32} className="text-gray-900" strokeWidth={1.5} />
          </button>
        </div>

        {/* Product List (Maps to .shopping-cart__product-content) */}
        <div className="flex-1 overflow-y-auto space-y-4 py-4 scrollbar-hide">
          {[1, 2].map((item) => (
            <div key={item} className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center gap-4">
                <div className="relative w-24 h-20 bg-gray-50 rounded overflow-hidden">
                  <Image src="/images/products/img-01.png" alt="product" fill className="object-contain" />
                </div>
                <div>
                  <h6 className="text-sm text-gray-700 font-normal mb-1">Fresh Indian Orange</h6>
                  <p className="text-sm text-gray-400">1kg x <span className="text-gray-900 font-medium">12.00</span></p>
                </div>
              </div>
              <button className="text-gray-300 hover:text-red-500 transition-colors">
                <X size={20} className="border border-gray-200 rounded-full p-0.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Cart Bottom */}
        <div className="pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">2 Products</p>
            <span className="text-lg font-semibold text-gray-900">$26.00</span>
          </div>

          <div className="flex flex-col gap-3">
            <Link 
              href="/checkout" 
              className="w-full bg-green-600 text-white text-center py-4 rounded-full font-bold hover:bg-green-700 transition-colors"
            >
              Checkout
            </Link>
            <Link 
              href="/cart" 
              className="w-full bg-green-50 text-green-600 text-center py-4 rounded-full font-bold hover:bg-green-100 transition-colors"
            >
              Go To Cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}