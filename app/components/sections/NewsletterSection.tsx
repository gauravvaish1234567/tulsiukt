import { Facebook, Twitter, Instagram, Youtube, Link } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 flex flex-wrap lg:flex-nowrap items-center justify-between gap-8">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold text-gray-900">Subscribe Our Newsletter</h2>
          <p className="text-gray-500 mt-2 text-sm max-w-md">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <form className="relative flex">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="w-full h-12 pl-4 pr-32 rounded-full border border-gray-200 outline-none focus:border-green-500"
            />
            <button className="absolute right-0 top-0 h-12 px-8 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors">
              Subscribe
            </button>
          </form>
          <div className="flex gap-4 text-gray-600 justify-center lg:justify-start">
             <Link href="#" className="hover:text-green-600"><Facebook size={20} /></Link>
             <Link href="#" className="hover:text-green-600"><Twitter size={20} /></Link>
             <Link href="#" className="hover:text-green-600"><Instagram size={20} /></Link>
             <Link href="#" className="hover:text-green-600"><Youtube size={20} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}