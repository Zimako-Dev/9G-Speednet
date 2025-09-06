'use client';

import { useEffect, useState } from 'react';
import { Wifi, Shield, Clock, Headphones, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Lightning Speed",
    description: "Experience blazing-fast internet speeds up to 1000+ Mbps for all your streaming, gaming, and work needs.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Shield,
    title: "99.9% Uptime",
    description: "Reliable connection you can count on. Our network infrastructure ensures maximum uptime and stability.",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical support from our expert team. We're always here when you need us.",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Wifi,
    title: "WiFi 6E Technology",
    description: "Latest wireless technology for maximum performance, coverage, and device connectivity.",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Globe,
    title: "Wide Coverage",
    description: "Extensive network coverage across the region with continuous expansion to serve more areas.",
    color: "from-indigo-400 to-purple-500"
  },
  {
    icon: Headphones,
    title: "Expert Installation",
    description: "Professional installation and setup by certified technicians at no additional cost.",
    color: "from-pink-400 to-rose-500"
  }
];

export default function Features() {
  const [visibleFeatures, setVisibleFeatures] = useState<boolean[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleFeatures(features.map(() => true));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-primary-500">9G Speednet</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver more than just internet. Experience premium features, 
            unmatched reliability, and exceptional service that sets us apart.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                  visibleFeatures[index] ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-500 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-full h-1 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-500 via-accent-purple to-accent-blue rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                50K+
              </div>
              <p className="text-lg text-white/90">Happy Customers</p>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                99.9%
              </div>
              <p className="text-lg text-white/90">Network Uptime</p>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <p className="text-lg text-white/90">Customer Support</p>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                1000+
              </div>
              <p className="text-lg text-white/90">Mbps Speeds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}