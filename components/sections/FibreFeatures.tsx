'use client';

import { useEffect, useState } from 'react';
import { Zap, Shield, Wifi, Globe, Clock, Users } from 'lucide-react';

const fibreFeatures = [
  {
    icon: Zap,
    title: "Symmetrical Speeds",
    description: "Equal upload and download speeds ensure optimal performance for video calls, file sharing, and cloud applications.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Shield,
    title: "99.9% Uptime Guarantee",
    description: "Industry-leading reliability with redundant network infrastructure and proactive monitoring.",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Wifi,
    title: "Advanced WiFi Technology",
    description: "Latest WiFi 6/6E routers included with extended range and support for multiple high-bandwidth devices.",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Globe,
    title: "Unlimited Data",
    description: "No data caps, fair usage policies, or throttling. Use as much data as you need, when you need it.",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Clock,
    title: "Low Latency",
    description: "Ultra-low latency for gaming, video conferencing, and real-time applications. Perfect for competitive gaming.",
    color: "from-indigo-400 to-purple-500"
  },
  {
    icon: Users,
    title: "Multi-Device Support",
    description: "Connect all your devices simultaneously without performance degradation. Perfect for modern households.",
    color: "from-pink-400 to-rose-500"
  }
];

export default function FibreFeatures() {
  const [visibleFeatures, setVisibleFeatures] = useState<boolean[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleFeatures(fibreFeatures.map(() => true));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="fibre-features" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-primary-500">Fibre</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fibre optic technology delivers unparalleled internet performance with consistent speeds, 
            unlimited data, and reliability that traditional broadband simply can't match.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {fibreFeatures.map((feature, index) => {
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

        {/* Speed Comparison */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Fibre vs Other Technologies
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Technology</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Max Speed</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Latency</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Reliability</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Data Limits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 bg-primary-50">
                  <td className="py-4 px-6 font-semibold text-primary-600">Fibre Optic</td>
                  <td className="text-center py-4 px-6 text-gray-900">1000+ Mbps</td>
                  <td className="text-center py-4 px-6 text-accent-green font-semibold">1-5ms</td>
                  <td className="text-center py-4 px-6 text-accent-green font-semibold">99.9%</td>
                  <td className="text-center py-4 px-6 text-accent-green font-semibold">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">ADSL</td>
                  <td className="text-center py-4 px-6 text-gray-700">24 Mbps</td>
                  <td className="text-center py-4 px-6 text-orange-600">20-50ms</td>
                  <td className="text-center py-4 px-6 text-orange-600">95%</td>
                  <td className="text-center py-4 px-6 text-orange-600">Limited</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">LTE</td>
                  <td className="text-center py-4 px-6 text-gray-700">100 Mbps</td>
                  <td className="text-center py-4 px-6 text-orange-600">20-40ms</td>
                  <td className="text-center py-4 px-6 text-orange-600">90-95%</td>
                  <td className="text-center py-4 px-6 text-red-600">Capped</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">Satellite</td>
                  <td className="text-center py-4 px-6 text-gray-700">50 Mbps</td>
                  <td className="text-center py-4 px-6 text-red-600">600ms+</td>
                  <td className="text-center py-4 px-6 text-orange-600">85-90%</td>
                  <td className="text-center py-4 px-6 text-red-600">Severely Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Use Cases */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Home Users */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="w-6 h-6 text-primary-500 mr-3" />
              Perfect for Homes
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent-green rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-900">4K/8K Streaming: </span>
                  <span className="text-gray-600">Multiple simultaneous streams without buffering</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent-green rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-900">Gaming: </span>
                  <span className="text-gray-600">Ultra-low latency for competitive online gaming</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent-green rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-900">Smart Home: </span>
                  <span className="text-gray-600">Support for IoT devices and home automation</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent-green rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-900">Work from Home: </span>
                  <span className="text-gray-600">HD video calls and large file uploads</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Business Users */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Globe className="w-6 h-6 text-primary-500 mr-3" />
              Perfect for Business
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-900">Cloud Applications: </span>
                  <span className="text-gray-600">Fast access to SaaS platforms and cloud storage</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-900">Video Conferencing: </span>
                  <span className="text-gray-600">Crystal clear HD meetings with multiple participants</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-900">File Sharing: </span>
                  <span className="text-gray-600">Rapid transfer of large files and backups</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-900">VoIP Systems: </span>
                  <span className="text-gray-600">High-quality voice communications</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary-500 via-accent-purple to-accent-blue rounded-3xl p-12 text-white">
          <h3 className="text-4xl font-bold mb-4">Ready for Fibre-Fast Internet?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying unlimited, lightning-fast internet 
            with our premium fibre solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-500 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
              Check Availability
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-primary-500 transition-all duration-300">
              View All Packages
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}