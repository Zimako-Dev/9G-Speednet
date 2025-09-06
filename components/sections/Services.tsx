'use client';

import { useState } from 'react';
import { Check, Wifi, Zap, Crown, Radio, Satellite } from 'lucide-react';

const plans = [
  {
    name: "Fixed LTE",
    price: "Starting from R299",
    speed: "Up to 100 Mbps",
    icon: Radio,
    popular: false,
    features: [
      "Reliable 4G/LTE Connection",
      "No Data Caps on Selected Plans",
      "Quick Installation",
      "24/7 Customer Support",
      "Backup Power Options",
      "Perfect for Remote Areas",
      "Multiple Speed Options"
    ]
  },
  {
    name: "Fibre",
    price: "Starting from R399",
    speed: "Up to 1000 Mbps",
    icon: Zap,
    popular: true,
    features: [
      "Ultra-Fast Fibre Connection",
      "Unlimited Data",
      "Symmetrical Upload/Download",
      "Priority Customer Support",
      "Professional Installation",
      "99.9% Uptime Guarantee",
      "WiFi 6 Router Included",
      "Future-Proof Technology"
    ]
  },
  {
    name: "Microwave",
    price: "Starting from R599",
    speed: "Up to 500 Mbps",
    icon: Satellite,
    popular: false,
    features: [
      "Point-to-Point Connection",
      "Enterprise Grade Solution",
      "Low Latency Performance",
      "Dedicated Support Team",
      "Custom Installation",
      "Business SLA Available",
      "Scalable Bandwidth",
      "Weather Resistant Technology"
    ]
  }
];

export default function Services() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  return (
    <section id="services" className="py-16 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
            Our <span className="text-primary-500">Services</span>
          </h2>
          <div className="max-w-4xl mx-auto mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Backed by the best</h3>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              9G Speednet is powered by all major networks. Meaning that when you're with us, 
              you're backed by the best networks in South Africa. Enjoy massive coverage, 
              a robust infrastructure and technical expertise when you go 9G Speednet.
            </p>
            <p className="text-base text-primary-600 font-medium">
              We offer affordable service to everyone and everywhere
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-lg border transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-primary-500 shadow-primary-500/25' 
                    : 'border-gray-200 hover:border-primary-300'
                } ${
                  hoveredPlan === index ? 'transform scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-6">
                  {/* Plan Header */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 ${
                      plan.popular ? 'bg-primary-500' : 'bg-gray-100'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        plan.popular ? 'text-white' : 'text-gray-600'
                      }`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-2xl font-bold text-primary-500">{plan.price}</span>
                    </div>
                    <p className="text-base text-gray-600 mt-2">{plan.speed}</p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-4 h-4 text-accent-green mr-2.5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button 
                    className={`w-full py-3 rounded-xl font-semibold text-base transition-all duration-300 ${
                      plan.popular
                        ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-md hover:shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200 hover:border-primary-300'
                    }`}
                    onClick={() => {
                      if (plan.name === 'Fixed LTE') {
                        window.location.href = '/fixed-lte';
                      } else if (plan.name === 'Fibre') {
                        window.location.href = '/fibre';
                      } else if (plan.name === 'Microwave') {
                        window.location.href = '/microwave';
                      }
                    }}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-3 text-sm">
            All services include professional installation and 24/7 customer support.
          </p>
          <p className="text-xs text-gray-500">
            Pricing may vary based on location and specific requirements. Contact us for a custom quote.
          </p>
        </div>
      </div>
    </section>
  );
}