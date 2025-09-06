'use client';

import { useEffect, useState } from 'react';
import { Wifi, Router, Smartphone, Home, Clock, Shield } from 'lucide-react';

const lteFeatures = [
  {
    icon: Router,
    title: "Professional Installation",
    description: "Our certified technicians will install and configure your Fixed LTE solution for optimal performance.",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Wifi,
    title: "High-Speed Connectivity",
    description: "Experience fast, reliable internet speeds suitable for streaming, gaming, and business applications.",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Management",
    description: "Monitor your data usage, manage your account, and get support through our mobile app.",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Home,
    title: "Perfect for Remote Areas",
    description: "Get connected in areas where traditional broadband isn't available or reliable.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Clock,
    title: "Quick Setup",
    description: "Get online fast with our rapid deployment process. Most installations completed within 24 hours.",
    color: "from-indigo-400 to-purple-500"
  },
  {
    icon: Shield,
    title: "Network Redundancy",
    description: "Automatic failover between network providers ensures maximum uptime and reliability.",
    color: "from-pink-400 to-rose-500"
  }
];

export default function LTEFeatures() {
  const [visibleFeatures, setVisibleFeatures] = useState<boolean[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleFeatures(lteFeatures.map(() => true));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="lte-features" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-primary-500">Fixed LTE</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fixed LTE provides reliable internet connectivity using cellular networks, 
            perfect for locations where traditional broadband isn't available or optimal.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {lteFeatures.map((feature, index) => {
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

        {/* Comparison Section */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Fixed LTE vs Traditional Internet
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Fixed LTE Advantages */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h4 className="text-xl font-semibold text-primary-500 mb-4 flex items-center">
                <Router className="w-5 h-5 mr-2" />
                Fixed LTE Benefits
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-green rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Available in remote locations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-green rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Quick installation process</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-green rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">No infrastructure required</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-green rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Multiple network redundancy</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-green rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Portable and flexible</span>
                </li>
              </ul>
            </div>

            {/* Use Cases */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h4 className="text-xl font-semibold text-primary-500 mb-4 flex items-center">
                <Home className="w-5 h-5 mr-2" />
                Perfect For
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Rural and remote properties</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Temporary office setups</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Backup internet connection</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Construction sites</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Areas without fibre coverage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary-500 via-accent-purple to-accent-blue rounded-3xl p-12 text-white">
          <h3 className="text-4xl font-bold mb-4">Ready to Get Connected?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've chosen Fixed LTE for reliable, 
            fast internet connectivity wherever they are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-500 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
              View Packages
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-primary-500 transition-all duration-300">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}