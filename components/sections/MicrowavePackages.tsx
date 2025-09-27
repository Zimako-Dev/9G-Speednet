'use client';

import { useState } from 'react';
import { Check, Building2, Globe, Zap, Shield, Home } from 'lucide-react';
import MicrowaveQuoteForm from './MicrowaveQuoteForm';

const homePackages = [
  {
    name: 'Home Starter',
    speed: '30/30 Mbps',
    price: 'R350',
    period: '/month',
    description: 'Perfect for small households and basic internet needs',
    features: [
      'Symmetrical 30Mbps up/down',
      'Point-to-point dedicated link',
      '99.9% uptime guarantee',
      'Basic support',
      'Installation fee R1750',
      'Equipment rental included'
    ],
    popular: false,
    icon: Home,
    color: 'bg-blue-500'
  },
  {
    name: 'Home Plus',
    speed: '50/50 Mbps',
    price: 'R500',
    period: '/month',
    description: 'Ideal for families with multiple devices and streaming needs',
    features: [
      'Symmetrical 50Mbps up/down',
      'Point-to-point dedicated link',
      '99.9% uptime guarantee',
      'Standard support',
      'Installation fee R1750',
      'Equipment rental included'
    ],
    popular: true,
    icon: Home,
    color: 'bg-primary-500'
  },
  {
    name: 'Home Premium',
    speed: '100/100 Mbps',
    price: 'R750',
    period: '/month',
    description: 'Maximum performance for power users and large households',
    features: [
      'Symmetrical 100Mbps up/down',
      'Point-to-point dedicated link',
      '99.95% uptime guarantee',
      'Priority support',
      'Installation fee R1750',
      'Premium equipment included'
    ],
    popular: false,
    icon: Home,
    color: 'bg-purple-500'
  }
];

const businessPackages = [
  {
    name: 'Business Basic',
    speed: '50/50 Mbps',
    price: 'R925',
    period: '/month',
    description: 'Perfect for small businesses with basic connectivity needs',
    features: [
      'Symmetrical 50Mbps up/down',
      'Point-to-point dedicated link',
      '99.9% uptime guarantee',
      'Business hours support',
      'Installation fee R3750',
      'Equipment rental included'
    ],
    popular: false,
    icon: Building2,
    color: 'bg-blue-500'
  },
  {
    name: 'Business Pro',
    speed: '100/100 Mbps',
    price: 'R1,350',
    period: '/month',
    description: 'Ideal for growing businesses with higher bandwidth requirements',
    features: [
      'Symmetrical 100Mbps up/down',
      'Point-to-point dedicated link',
      '99.95% uptime guarantee',
      'Extended support hours',
      'Installation fee R3750',
      'Managed equipment service'
    ],
    popular: true,
    icon: Building2,
    color: 'bg-primary-500'
  },
  {
    name: 'Business Elite',
    speed: '200/200 Mbps',
    price: 'R2,750',
    period: '/month',
    description: 'Maximum performance for enterprise operations',
    features: [
      'Symmetrical 200Mbps up/down',
      'Point-to-point dedicated link',
      '99.99% uptime guarantee',
      '24/7 priority support',
      'Installation fee R3750',
      'Premium equipment included',
      'Dedicated account manager'
    ],
    popular: false,
    icon: Building2,
    color: 'bg-purple-500'
  }
];

export default function MicrowavePackages() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{
    name: string;
    speed: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    packageType: 'home' | 'business';
  } | null>(null);

  const handleGetQuote = (pkg: any, packageType: 'home' | 'business') => {
    setSelectedPackage({
      name: pkg.name,
      speed: pkg.speed,
      price: pkg.price,
      period: pkg.period,
      description: pkg.description,
      features: pkg.features,
      packageType,
    });
    setIsFormOpen(true);
  };

  return (
    <section className="py-12 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Microwave <span className="text-primary-500">Packages</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade point-to-point microwave links designed for businesses 
            that demand reliability, speed, and dedicated connectivity.
          </p>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Microwave <span className="text-primary-500">Home Packages</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            High-speed microwave internet solutions designed for residential use with 
            reliability and performance at affordable prices.
          </p>
        </div>

        {/* Home Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {homePackages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div
                key={`home-${index}`}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                  pkg.popular ? 'ring-4 ring-primary-500 ring-opacity-50' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-primary-500 text-white text-center py-2 px-4">
                      <p className="font-semibold">Most Popular</p>
                    </div>
                  </div>
                )}

                <div className="p-5">
                  {/* Package Icon & Header */}
                  <div className="text-center mb-4">
                    <div className={`inline-flex p-2 rounded-xl ${pkg.color} mb-2`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm">{pkg.description}</p>
                  </div>

                  {/* Speed Display */}
                  <div className="text-center mb-4">
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="text-2xl font-bold text-primary-500 mb-1">
                        {pkg.speed}
                      </div>
                      <div className="text-xs text-gray-500">Symmetrical Speed</div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                      <span className="text-base text-gray-500 ml-2">{pkg.period}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Excluding VAT</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0">
                          <Check className="w-3 h-3 text-green-500 mt-0.5" />
                        </div>
                        <span className="ml-2 text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Business Packages Header */}
        <div className="text-center mb-8 mt-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Microwave <span className="text-primary-500">Business Packages</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade point-to-point microwave links designed for businesses 
            that demand reliability, speed, and dedicated connectivity.
          </p>
        </div>

        {/* Installation Time Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center bg-primary-500 text-white px-4 py-2 rounded-full">
            <Building2 className="w-5 h-5 mr-2" />
            <span className="font-semibold">Microwave total installation time: 5 days</span>
          </div>
        </div>

        {/* Business Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {businessPackages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div
                key={`business-${index}`}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                  pkg.popular ? 'ring-4 ring-primary-500 ring-opacity-50' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-primary-500 text-white text-center py-2 px-4">
                      <p className="font-semibold">Most Popular</p>
                    </div>
                  </div>
                )}

                <div className="p-5">
                  {/* Package Icon & Header */}
                  <div className="text-center mb-4">
                    <div className={`inline-flex p-2 rounded-xl ${pkg.color} mb-2`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm">{pkg.description}</p>
                  </div>

                  {/* Speed Display */}
                  <div className="text-center mb-4">
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="text-2xl font-bold text-primary-500 mb-1">
                        {pkg.speed}
                      </div>
                      <div className="text-xs text-gray-500">Symmetrical Speed</div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                      <span className="text-base text-gray-500 ml-2">{pkg.period}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Excluding VAT</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0">
                          <Check className="w-3 h-3 text-green-500 mt-0.5" />
                        </div>
                        <span className="ml-2 text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Why Choose Microwave Connectivity?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Shield className="w-4 h-4 text-primary-500 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Dedicated Bandwidth</h4>
                    <p className="text-gray-600 text-sm">
                      Unlike shared connections, microwave links provide dedicated bandwidth 
                      exclusively for your business.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-4 h-4 text-primary-500 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Ultra-Low Latency</h4>
                    <p className="text-gray-600 text-sm">
                      Direct point-to-point transmission ensures minimal latency, 
                      perfect for real-time applications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Building2 className="w-4 h-4 text-primary-500 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Quick Deployment</h4>
                    <p className="text-gray-600 text-sm">
                      No digging required. Microwave links can be installed quickly 
                      in locations where fiber is not available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl p-4 text-white">
                <h4 className="text-lg font-bold mb-2">Need a Custom Solution?</h4>
                <p className="mb-3 text-sm">
                  We design bespoke microwave networks for enterprise clients 
                  with specific requirements.
                </p>
                <button className="bg-white text-primary-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}