import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CATEGORIES = [
  { id: 1, name: "Fresh Fruit", img: "image-fruits.png" },
  { id: 2, name: "Fresh Vegetables", img: "image-icon-vegitables.png" },
  { id: 3, name: "Meat & Fish", img: "image-meat.png" },
  { id: 4, name: "Snacks", img: "image-icon-snaks.png" },
  { id: 5, name: "Beverages", img: "img-12.png" },
  { id: 6, name: "Beauty & Health", img: "image-icon-beauty.png" },
  { id: 7, name: "Bread & Bakery", img: "image-icon-snaks2.png" },
  { id: 8, name: "Baking Needs", img: "img-06.png" },
  { id: 9, name: "Cooking", img: "img-07.png" },
  { id: 10, name: "Diabetic Food", img: "img-08.png" },
  { id: 11, name: "Dish Detergents", img: "image-soda.png" },
  { id: 12, name: "Oil", img: "image-oil.png" },
];

export default function PopularCategories() {
  return (
    <section className="py-10 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 capitalize">
            Popular Categories
          </h2>
          <Link 
            href="/shop" 
            className="flex items-center gap-3 text-green-600 font-medium hover:text-green-700 transition-colors"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Desktop Grid (Replaces .popular-categories__wrapper) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="group bg-white border border-gray-100 rounded-lg pt-0 pb-6 transition-all duration-300 hover:border-green-600 hover:shadow-[0_0_12px_rgba(32,181,38,0.32)] flex flex-col items-center"
            >
              {/* Image Wrapper (130px height from SCSS) */}
              <div className="relative w-full h-[130px] overflow-hidden">
                <Image
                  src={`/images/categories/${category.img}`}
                  alt={category.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title (font-body--xl-500) */}
              <h5 className="mt-4 text-gray-900 font-medium text-lg group-hover:text-green-600 transition-colors">
                {category.name}
              </h5>
            </Link>
          ))}
        </div>
        
        {/* Note: For the Mobile Slider (Swiper), 
           it is best practice in Next.js to use the 'swiper' npm package. 
           Tailwind handles the grid above excellently for mobile too 
           (grid-cols-2). 
        */}
      </div>
    </section>
  );
}