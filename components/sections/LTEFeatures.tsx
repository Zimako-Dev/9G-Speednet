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
    <section id="lte-features" className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Why Choose <span className="text-primary-500">Fixed LTE</span>?
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fixed LTE provides reliable internet connectivity using cellular networks, 
            perfect for locations where traditional broadband isn't available or optimal.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {lteFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                  visibleFeatures[index] ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-full h-1 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Section */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Fixed LTE vs Traditional Internet
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Fixed LTE Advantages */}
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <h4 className="text-base font-semibold text-primary-500 mb-3 flex items-center">
                <Router className="w-4 h-4 mr-1" />
                Fixed LTE Benefits
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-1.5 mr-2"></div>
                  <span className="text-gray-700 text-sm">Available in remote locations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-1.5 mr-2"></div>
                  <span className="text-gray-700 text-sm">Quick installation process</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-1.5 mr-2"></div>
                  <span className="text-gray-700 text-sm">No infrastructure required</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-1.5 mr-2"></div>
                  <span className="text-gray-700 text-sm">Multiple network redundancy</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-1.5 mr-2"></div>
                  <span className="text-gray-700 text-sm">Portable and flexible</span>
                </li>
              </ul>
            </div>

            {/* Use Cases */}
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <h4 className="text-base font-semibold text-primary-500 mb-3 flex items-center">
                <Home className="w-4 h-4 mr-1" />
                Perfect For
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-1.5 mr-2"></div>
                  <span className="text-gray-700 text-sm">Rural and remote properties</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-1.5 mr-2"></div>
                  <span className="text-gray-700 text-sm">Temporary office setups</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-1.5 mr-2"></div>
                  <span className="text-gray-700 text-sm">Backup internet connection</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-1.5 mr-2"></div>
                  <span className="text-gray-700 text-sm">Construction sites</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-1.5 mr-2"></div>
                  <span className="text-gray-700 text-sm">Areas without fibre coverage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-500 text-white rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-xl font-bold mb-3">Ready to Get Connected?</h3>
          <p className="text-sm text-white/90 mb-5 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've chosen Fixed LTE for reliable,
            fast internet connectivity wherever they are.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              className="bg-white text-primary-500 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={() => {
                const packagesSection = document.getElementById('lte-packages');
                if (packagesSection) {
                  packagesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Packages
            </button>
            <button
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white hover:text-primary-500 transition-all duration-300"
              onClick={() => {
                window.dispatchEvent(
                  new CustomEvent('openPackageModalWithNetwork', {
                    detail: { network: 'Let 9G Recommended' },
                  })
                );
              }}
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}