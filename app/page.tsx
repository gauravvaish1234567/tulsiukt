import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/sections/HeroSection";
import ShippingFeatures from "./components/sections/ShippingFeatures";
import PopularCategories from "./components/sections/PopularCategories";
import PopularProducts from "./components/sections/PopularProducts";
import PromoBanners from "./components/sections/PromoBanners";
import HotDeals from "./components/sections/HotDeals";
import SaleBanner from "./components/sections/SaleBanner";
import FeaturedProducts from "./components/sections/FeaturedProducts";
import LatestNews from "./components/sections/LatestNews";
import Testimonials from "./components/sections/Testimonials";
import BrandCarousel from "./components/sections/BrandCarousel";
import InstagramFeed from "./components/sections/InstagramFeed";
import NewsletterCTA from "./components/sections/NewsletterCTA";

export default function Home() {
  return (
    <>
    <Header />
    <HeroSection />
    <ShippingFeatures />
    <PopularCategories />
    <PopularProducts />
    <PromoBanners/>
    <HotDeals />
    <SaleBanner />
    <FeaturedProducts />
    <LatestNews />
    <Testimonials />
    <BrandCarousel />
    <InstagramFeed />
    <NewsletterCTA />
    <Footer />
    </>
  );
}
