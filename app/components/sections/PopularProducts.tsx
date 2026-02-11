import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Eye, ShoppingBag, Star } from "lucide-react";

const PRODUCTS = [
  { id: 1, name: "Orange", price: 14.99, oldPrice: 20.99, rating: 4, sale: "50%", img: "img-02.png" },
  { id: 2, name: "Green Apple", price: 14.99, oldPrice: null, rating: 5, sale: null, img: "img-01.png" },
  { id: 3, name: "Chinese cabbage", price: 14.99, oldPrice: null, rating: 4, sale: null, img: "img-03.png" },
  { id: 4, name: "Green Lettuce", price: 14.99, oldPrice: null, rating: 4, sale: null, img: "img-04.png" },
  { id: 5, name: "Eggplant", price: 14.99, oldPrice: null, rating: 4, sale: null, img: "img-05.png" },
  { id: 6, name: "Big Potatoes", price: 14.99, oldPrice: null, rating: 5, sale: null, img: "img-06.png" },
  { id: 7, name: "Corn", price: 14.99, oldPrice: null, rating: 4, sale: null, img: "img-07.png" },
  { id: 8, name: "Fresh Cauliflower", price: 14.99, oldPrice: null, rating: 4, sale: null, img: "img-08.png" },
  { id: 9, name: "Green Chili", price: 14.99, oldPrice: null, rating: 5, sale: null, img: "img-09.png" },
  { id: 10, name: "Green Capsicum", price: 14.99, oldPrice: null, rating: 4, sale: null, img: "img-10.png" },
];

export default function PopularProducts() {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Popular Products</h2>
          <Link href="/shop" className="flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors">
            View All <ArrowRight size={18} />
          </Link>
        </div>

        {/* Product Grid (Maps SCSS grid-template-columns) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 border-t border-l border-gray-100">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-white border-b border-r border-gray-100 p-4 transition-all duration-300 hover:border-green-600 hover:shadow-[0_0_12px_rgba(32,181,38,0.32)] hover:z-10"
            >
              {/* Image Area */}
              <div className="relative aspect-square w-full mb-4 overflow-hidden">
                <Link href={`/product/${product.id}`}>
                  <Image
                    src={`/images/products/${product.img}`}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                {/* Sale Tag */}
                {product.sale && (
                  <span className="absolute top-0 left-0 bg-red-500 text-white text-[12px] px-2 py-1 rounded-md">
                    Sale {product.sale}
                  </span>
                )}

                {/* Hover Actions (Wishlist/QuickView) */}
                <div className="absolute top-0 right-0 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="p-2 bg-white border border-gray-100 rounded-full hover:bg-green-600 hover:text-white hover:border-green-600 transition-colors shadow-sm">
                    <Heart size={18} />
                  </button>
                  <button className="p-2 bg-white border border-gray-100 rounded-full hover:bg-green-600 hover:text-white hover:border-green-600 transition-colors shadow-sm">
                    <Eye size={18} />
                  </button>
                </div>
              </div>

              {/* Info Area */}
              <div className="flex justify-between items-end">
                <div className="flex-1">
                  <Link href={`/product/${product.id}`}>
                    <h6 className="text-gray-700 font-normal text-sm mb-1 group-hover:text-green-700 transition-colors">
                      {product.name}
                    </h6>
                  </Link>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-900 font-medium">${product.price}</span>
                    {product.oldPrice && (
                      <del className="text-gray-400 text-sm">${product.oldPrice}</del>
                    )}
                  </div>
                  {/* Rating Stars */}
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

                {/* Add to Cart Button */}
                <button className="p-3 rounded-full bg-gray-100 text-gray-900 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <ShoppingBag size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}