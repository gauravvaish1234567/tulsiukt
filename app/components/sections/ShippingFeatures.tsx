import { Truck, Headphones, ShieldCheck, RotateCcw } from "lucide-react";

export default function ShippingFeatures() {
  const features = [
    {
      icon: <Truck size={40} className="text-green-600" />,
      title: "Free Shipping",
      desc: "Free shipping on all your order",
    },
    {
      icon: <Headphones size={40} className="text-green-600" />,
      title: "Customer Support 24/7",
      desc: "Instant access to Support",
    },
    {
      icon: <ShieldCheck size={40} className="text-green-600" />,
      title: "100% Secure Payment",
      desc: "We ensure your money is save",
    },
    {
      icon: <RotateCcw size={40} className="text-green-600" />,
      title: "Money-Back Guarantee",
      desc: "30 Days Money-Back Guarantee",
    },
  ];

  return (
    <section className="py-10 md:py-16 pt-0">
      <div className="container mx-auto px-4">
        {/* Card Wrapper - Maps to .cards-ship */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white shadow-[0px_8px_40px_rgba(0,0,0,0.08)] rounded-xl p-8">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 group cursor-default"
            >
              {/* Icon Container */}
              <div className="shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Text Info */}
              <div className="flex flex-col">
                <h2 className="text-gray-900 font-semibold text-base md:text-lg leading-tight">
                  {item.title}
                </h2>
                <p className="text-gray-500 text-sm mt-1 font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}