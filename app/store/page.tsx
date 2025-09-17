import Navbar from '@/components/sections/Navbar';
import StoreHero from '@/components/sections/StoreHero';
import ProductGrid from '@/components/sections/ProductGrid';
import StoreFeatures from '@/components/sections/StoreFeatures';

export const metadata = {
  title: 'Store - 9G Speednet | Premium Networking Equipment',
  description: 'Shop premium routers, extenders, and networking equipment from 9G Speednet. Fast delivery, expert support, and competitive prices.',
  keywords: 'routers, wifi extenders, networking equipment, 9G Speednet store, internet hardware',
};

export default function StorePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
        <StoreHero />
        <StoreFeatures />
        <ProductGrid />
      </main>
    </>
  );
}
