'use client';

import { useState } from 'react';
import { Check, Radio, Zap, Crown, Wifi, Download } from 'lucide-react';

const ltePackages = [
  {
    name: "LTE Starter",
    price: 299,
    data: "50GB",
    speed: "Up to 20 Mbps",
    icon: Radio,
    popular: false,
    features: [
      "50GB Monthly Data",
      "Up to 20 Mbps Speed",
      "Free Router Rental",
      "24/7 Customer Support",
      "Quick Installation",
      "No Contract Required"
    ]
  },
  {
    name: "LTE Standard",
    price: 449,
    data: "100GB",
    speed: "Up to 50 Mbps",
    icon: Wifi,
    popular: true,
    features: [
      "100GB Monthly Data",
      "Up to 50 Mbps Speed",
      "Premium Router Included",
      "Priority Customer Support",
      "Professional Installation",
      "30-Day Money Back Guarantee",
      "Multi-Device Connection",
      "Mobile App Management"
    ]
  },
  {
    name: "LTE Premium",
    price: 699,
    data: "200GB",
    speed: "Up to 100 Mbps",
    icon: Zap,
    popular: false,
    features: [
      "200GB Monthly Data",
      "Up to 100 Mbps Speed",
      "Advanced Router Included",
      "VIP Customer Support",
      "Same-Day Installation",
      "90-Day Money Back Guarantee",
      "External Antenna Included",
      "Business SLA Available",
      "Static IP Option"
    ]
  },
  {
    name: "LTE Unlimited",
    price: 999,
    data: "Unlimited",
    speed: "Up to 100 Mbps",
    icon: Crown,
    popular: false,
    features: [
      "Unlimited Data*",
      "Up to 100 Mbps Speed",
      "Enterprise Router Included",
      "Dedicated Account Manager",
      "Priority Installation",
      "Custom Configuration",
      "Backup Connection Option",
      "Advanced Monitoring",
      "24/7 Technical Support",
      "*Fair Usage Policy Applies"
    ]
  }
];

export default function LTEPackages() {
  const [hoveredPackage, setHoveredPackage] = useState<number | null>(null);

  return (
    <section id="lte-packages" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Fixed LTE <span className="text-primary-500">Packages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our range of Fixed LTE packages designed to meet your connectivity needs. 
            All packages include professional installation and access to multiple network providers.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ltePackages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div
                key={pkg.name}
                className={`relative bg-white rounded-3xl shadow-xl border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  pkg.popular 
                    ? 'border-primary-500 shadow-primary-500/25 ring-2 ring-primary-500/20' 
                    : 'border-gray-200 hover:border-primary-300'
                } ${
                  hoveredPackage === index ? 'transform scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredPackage(index)}
                onMouseLeave={() => setHoveredPackage(null)}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-6">
                  {/* Package Header */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                      pkg.popular ? 'bg-primary-500' : 'bg-gray-100'
                    }`}>
                      <IconComponent className={`w-8 h-8 ${
                        pkg.popular ? 'text-white' : 'text-gray-600'
                      }`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-primary-500">R{pkg.price}</span>
                      <span className="text-gray-500 ml-2">/month</span>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        <span>{pkg.data}</span>
                      </div>
                      <div className="flex items-center">
                        <Zap className="w-4 h-4 mr-1" />
                        <span>{pkg.speed}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-4 h-4 text-accent-green mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full py-3 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200 hover:border-primary-300'
                  }`}>
                    Choose Package
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer tailored Fixed LTE solutions for businesses with specific requirements. 
            Contact our team for custom data allowances, dedicated support, and enterprise features.
          </p>
          <button className="bg-primary-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}