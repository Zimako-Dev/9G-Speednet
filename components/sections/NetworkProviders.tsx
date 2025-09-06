'use client';

import { useState, useEffect } from 'react';
import { Signal, Shield, CheckCircle } from 'lucide-react';

const networkProviders = [
  {
    name: "Vodacom",
    logo: "/vodacom-logo.png", // You can replace with actual logo
    coverage: "98%",
    technology: "4G/LTE Advanced",
    speeds: "Up to 100 Mbps",
    color: "from-red-500 to-red-600",
    features: [
      "Excellent urban coverage",
      "Strong rural presence", 
      "Low latency performance",
      "Reliable data speeds"
    ]
  },
  {
    name: "MTN",
    logo: "/mtn-logo.png", // You can replace with actual logo
    coverage: "97%",
    technology: "4G/LTE Advanced", 
    speeds: "Up to 100 Mbps",
    color: "from-yellow-500 to-yellow-600",
    features: [
      "Wide national coverage",
      "Premium network quality",
      "Advanced technology",
      "Business-grade reliability"
    ]
  },
  {
    name: "Cell C",
    logo: "/cellc-logo.png", // You can replace with actual logo  
    coverage: "95%",
    technology: "4G/LTE",
    speeds: "Up to 75 Mbps", 
    color: "from-blue-500 to-blue-600",
    features: [
      "Competitive pricing",
      "Growing coverage area",
      "Reliable connections",
      "Good urban performance"
    ]
  },
  {
    name: "Telkom",
    logo: "/telkom-logo.png", // You can replace with actual logo
    coverage: "93%",
    technology: "4G/LTE",
    speeds: "Up to 75 Mbps",
    color: "from-purple-500 to-purple-600", 
    features: [
      "Integrated solutions",
      "Expanding 4G network",
      "Competitive data rates",
      "Business focus"
    ]
  }
];

export default function NetworkProviders() {
  const [selectedProvider, setSelectedProvider] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Auto-rotate providers every 4 seconds
    const interval = setInterval(() => {
      setSelectedProvider((prev) => (prev + 1) % networkProviders.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="network-providers" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Network <span className="text-primary-500">Providers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We partner with South Africa's leading mobile network operators to provide 
            you with the best coverage and performance. Choose your preferred network or 
            let us recommend the best option for your location.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Provider Selection */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Available Networks</h3>
            
            <div className="space-y-4">
              {networkProviders.map((provider, index) => (
                <div
                  key={provider.name}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedProvider === index
                      ? 'border-primary-500 bg-primary-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-md'
                  }`}
                  onClick={() => setSelectedProvider(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {/* Network Logo Placeholder */}
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${provider.color} flex items-center justify-center mr-4`}>
                        <Signal className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{provider.name}</h4>
                        <p className="text-gray-600">{provider.coverage} National Coverage</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-primary-500">{provider.speeds}</div>
                      <div className="text-sm text-gray-500">{provider.technology}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Network Selection Benefits */}
            <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 text-accent-green mr-2" />
                Multi-Network Advantage
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                  <span>Automatic best network selection</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                  <span>Failover to backup networks</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                  <span>Optimized for your location</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Provider Details */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
              {/* Selected Provider Header */}
              <div className="text-center mb-8">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${networkProviders[selectedProvider].color} flex items-center justify-center mx-auto mb-4`}>
                  <Signal className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {networkProviders[selectedProvider].name}
                </h3>
                <p className="text-gray-600">Network Details & Coverage</p>
              </div>

              {/* Network Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-primary-500 mb-1">
                    {networkProviders[selectedProvider].coverage}
                  </div>
                  <p className="text-gray-600">Coverage</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-primary-500 mb-1">
                    {networkProviders[selectedProvider].speeds.split(' ')[2]}
                  </div>
                  <p className="text-gray-600">Max Speed</p>
                </div>
              </div>

              {/* Technology Info */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technology</h4>
                <div className="bg-gradient-to-r from-primary-50 to-accent-blue/10 rounded-xl p-4">
                  <p className="text-primary-600 font-semibold">
                    {networkProviders[selectedProvider].technology}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {networkProviders[selectedProvider].features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent-green mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <button className="w-full bg-primary-500 text-white py-3 rounded-xl font-semibold hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Select {networkProviders[selectedProvider].name}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Map Placeholder */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Network Coverage Map</h3>
          <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <Signal className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Interactive coverage map coming soon</p>
              <p className="text-sm text-gray-400">Contact us for detailed coverage information in your area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}