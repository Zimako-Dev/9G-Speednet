'use client';

import { ShoppingBag, Truck, Shield, Headphones } from 'lucide-react';

export default function StoreHero() {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-blue/5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary-200/20 to-accent-green/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-accent-blue/10 to-primary-300/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-blue/20 rounded-full text-primary-700 font-medium text-sm mb-6 border border-primary-200/50">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Premium Networking Equipment
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-primary-600 to-accent-blue bg-clip-text text-transparent">
              9G Speednet
            </span>
            <br />
            <span className="text-gray-800">Store</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover premium routers, extenders, and networking equipment designed to maximize your internet experience. 
            Professional-grade hardware with expert support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-primary-600"
              onClick={() => {
                const productsSection = document.getElementById('products');
                if (productsSection) {
                  productsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Shop Now
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-primary-500 hover:text-primary-600 transition-all duration-300 hover:scale-105">
              View Catalog
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-green/20 to-accent-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Truck className="w-6 h-6 text-accent-green" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Delivery</h3>
            <p className="text-gray-600 text-sm">Fast and free delivery on all orders over R500. Get your equipment within 24-48 hours.</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-primary-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-primary-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">2-Year Warranty</h3>
            <p className="text-gray-600 text-sm">Comprehensive warranty coverage with free repairs and replacements on all products.</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-blue/20 to-accent-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Headphones className="w-6 h-6 text-accent-blue" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
            <p className="text-gray-600 text-sm">24/7 technical support and installation assistance from our certified technicians.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
