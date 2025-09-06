'use client';

import { useState } from 'react';
import { Check, Wifi, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: 29,
    speed: "100 Mbps",
    icon: Wifi,
    popular: false,
    features: [
      "100 Mbps Download Speed",
      "50 Mbps Upload Speed",
      "Basic Router Included",
      "24/7 Customer Support",
      "No Data Caps",
      "1 Month Free Trial"
    ]
  },
  {
    name: "Pro",
    price: 49,
    speed: "500 Mbps",
    icon: Zap,
    popular: true,
    features: [
      "500 Mbps Download Speed",
      "200 Mbps Upload Speed",
      "Premium Router Included",
      "Priority Customer Support",
      "No Data Caps",
      "2 Months Free Trial",
      "Free Installation",
      "WiFi 6 Technology"
    ]
  },
  {
    name: "Ultra",
    price: 79,
    speed: "1000+ Mbps",
    icon: Crown,
    popular: false,
    features: [
      "1000+ Mbps Download Speed",
      "500 Mbps Upload Speed",
      "Enterprise Router Included",
      "VIP Customer Support",
      "No Data Caps",
      "3 Months Free Trial",
      "Free Installation",
      "WiFi 6E Technology",
      "Mesh Network Setup",
      "Static IP Address"
    ]
  }
];

export default function Services() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-primary-500">Speed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Select the perfect plan for your needs. All plans include unlimited data, 
            free installation, and our industry-leading customer support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative bg-white rounded-3xl shadow-xl border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
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
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                      plan.popular ? 'bg-primary-500' : 'bg-gray-100'
                    }`}>
                      <IconComponent className={`w-8 h-8 ${
                        plan.popular ? 'text-white' : 'text-gray-600'
                      }`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-primary-500">R{plan.price}</span>
                      <span className="text-gray-500 ml-2">/month</span>
                    </div>
                    <p className="text-lg text-gray-600 mt-2">{plan.speed}</p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-accent-green mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200 hover:border-primary-300'
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include free router, professional installation, and 30-day money-back guarantee.
          </p>
        </div>
      </div>
    </section>
  );
}