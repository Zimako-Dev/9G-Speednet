'use client';

import { Wifi, Router, Signal, Zap, Shield, Settings } from 'lucide-react';

export default function StoreFeatures() {
  const categories = [
    {
      icon: Router,
      title: 'Premium Routers',
      description: 'High-performance routers for home and business use',
      color: 'from-primary-500 to-primary-600',
      bgColor: 'from-primary-50 to-primary-100/50',
    },
    {
      icon: Wifi,
      title: 'WiFi Extenders',
      description: 'Extend your coverage to every corner of your space',
      color: 'from-accent-blue to-accent-blue/80',
      bgColor: 'from-accent-blue/10 to-accent-blue/20',
    },
    {
      icon: Signal,
      title: 'Signal Boosters',
      description: 'Amplify weak signals for better connectivity',
      color: 'from-accent-green to-accent-green/80',
      bgColor: 'from-accent-green/10 to-accent-green/20',
    },
    {
      icon: Zap,
      title: 'Power Solutions',
      description: 'UPS and power backup for uninterrupted service',
      color: 'from-accent-purple to-accent-purple/80',
      bgColor: 'from-accent-purple/10 to-accent-purple/20',
    },
    {
      icon: Shield,
      title: 'Security Equipment',
      description: 'Firewalls and security appliances for protection',
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50 to-red-100/50',
    },
    {
      icon: Settings,
      title: 'Accessories',
      description: 'Cables, adapters, and networking accessories',
      color: 'from-gray-600 to-gray-700',
      bgColor: 'from-gray-50 to-gray-100/50',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
              Product Categories
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Explore our comprehensive range of networking equipment designed to enhance your internet experience
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative p-4 sm:p-6 lg:p-8 rounded-2xl bg-white border border-gray-200/50 hover:border-primary-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {category.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-4 sm:mt-5 lg:mt-6 flex items-center text-primary-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs sm:text-sm">Shop Now</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
