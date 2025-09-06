'use client';

import { useState } from 'react';
import { Check, Zap, Crown, Wifi, Download, Upload, Users, Building } from 'lucide-react';

const fibrePackages = [
  {
    name: "Fibre Essential",
    price: 399,
    downloadSpeed: "25 Mbps",
    uploadSpeed: "25 Mbps",
    icon: Wifi,
    popular: false,
    category: "Residential",
    features: [
      "25/25 Mbps Symmetrical",
      "Unlimited Data",
      "WiFi 6 Router Included",
      "24/7 Customer Support",
      "Professional Installation",
      "99.9% Uptime Guarantee",
      "Perfect for Streaming & Browsing"
    ]
  },
  {
    name: "Fibre Standard",
    price: 599,
    downloadSpeed: "50 Mbps",
    uploadSpeed: "50 Mbps", 
    icon: Zap,
    popular: true,
    category: "Residential",
    features: [
      "50/50 Mbps Symmetrical",
      "Unlimited Data",
      "Premium WiFi 6 Router",
      "Priority Customer Support",
      "Free Professional Installation", 
      "99.9% Uptime Guarantee",
      "Multiple Device Support",
      "Perfect for Work from Home",
      "4K Streaming Ready"
    ]
  },
  {
    name: "Fibre Premium",
    price: 899,
    downloadSpeed: "100 Mbps",
    uploadSpeed: "100 Mbps",
    icon: Crown,
    popular: false,
    category: "Residential",
    features: [
      "100/100 Mbps Symmetrical",
      "Unlimited Data",
      "Advanced WiFi 6E Router",
      "VIP Customer Support",
      "Same-Day Installation",
      "99.9% Uptime Guarantee",
      "Gaming Optimized",
      "Multiple 4K Streams",
      "Large File Transfers",
      "Smart Home Ready"
    ]
  },
  {
    name: "Fibre Ultra",
    price: 1299,
    downloadSpeed: "200 Mbps", 
    uploadSpeed: "200 Mbps",
    icon: Building,
    popular: false,
    category: "Residential/Business",
    features: [
      "200/200 Mbps Symmetrical",
      "Unlimited Data",
      "Enterprise WiFi 6E Router",
      "Dedicated Account Manager",
      "Priority Installation",
      "99.9% Uptime SLA",
      "Static IP Available",
      "Business Support Hours",
      "Advanced Security Features",
      "Multi-Location Support"
    ]
  },
  {
    name: "Fibre Business",
    price: 1899,
    downloadSpeed: "500 Mbps",
    uploadSpeed: "500 Mbps",
    icon: Users,
    popular: false,
    category: "Business",
    features: [
      "500/500 Mbps Symmetrical",
      "Unlimited Data",
      "Enterprise Network Equipment",
      "24/7 Business Support",
      "Guaranteed Installation Date",
      "99.95% Uptime SLA",
      "Multiple Static IPs",
      "Backup Connection Option",
      "Advanced Monitoring",
      "Custom Configuration"
    ]
  },
  {
    name: "Fibre Enterprise",
    price: 2999,
    downloadSpeed: "1000 Mbps",
    uploadSpeed: "1000 Mbps",
    icon: Building,
    popular: false,
    category: "Enterprise",
    features: [
      "1000/1000 Mbps Symmetrical",
      "Unlimited Data",
      "Dedicated Network Infrastructure",
      "Dedicated Support Team",
      "Custom Installation Timeline",
      "99.99% Uptime SLA",
      "Subnet of Static IPs",
      "Redundant Connection",
      "Real-time Monitoring",
      "Custom SLA Agreement",
      "Managed Services Available"
    ]
  }
];

export default function FibrePackages() {
  const [hoveredPackage, setHoveredPackage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Residential", "Business", "Enterprise"];
  
  const filteredPackages = selectedCategory === "All" 
    ? fibrePackages 
    : fibrePackages.filter(pkg => pkg.category.includes(selectedCategory));

  return (
    <section id="fibre-packages" className="py-16 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Fibre <span className="text-primary-500">Packages</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Choose from our range of high-speed fibre packages designed for homes and businesses. 
            All packages include unlimited data and symmetrical upload/download speeds.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-full font-semibold text-xs transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-primary-300 hover:text-primary-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {filteredPackages.map((pkg, index) => {
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

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                    {pkg.category}
                  </span>
                </div>

                <div className="p-4">
                  {/* Package Header */}
                  <div className="text-center mb-4">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-2 ${
                      pkg.popular ? 'bg-primary-500' : 'bg-gray-100'
                    }`}>
                      <IconComponent className={`w-5 h-5 ${
                        pkg.popular ? 'text-white' : 'text-gray-600'
                      }`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{pkg.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-xl font-bold text-primary-500">R{pkg.price}</span>
                      <span className="text-gray-500 ml-1 text-xs">/month</span>
                    </div>
                    
                    {/* Speed Info */}
                    <div className="bg-gradient-to-r from-gray-50 to-primary-50 rounded-md p-2 mb-2">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex items-center justify-center">
                          <Download className="w-2.5 h-2.5 text-accent-green mr-0.5" />
                          <span className="text-gray-600">Down: </span>
                          <span className="font-semibold text-gray-900 ml-0.5">{pkg.downloadSpeed}</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <Upload className="w-2.5 h-2.5 text-accent-purple mr-0.5" />
                          <span className="text-gray-600">Up: </span>
                          <span className="font-semibold text-gray-900 ml-0.5">{pkg.uploadSpeed}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-1.5 mb-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-2.5 h-2.5 text-accent-green mr-1.5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
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

        {/* Custom Solutions */}
        <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Need Higher Speeds?</h3>
          <p className="text-gray-600 mb-3 max-w-2xl mx-auto text-xs">
            We offer custom fibre solutions with speeds up to 10 Gbps for enterprises with demanding requirements. 
            Contact our team for dedicated circuits and managed services.
          </p>
          <button className="bg-primary-500 text-white px-5 py-2 rounded-md font-semibold text-xs hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Request Enterprise Quote
          </button>
        </div>
      </div>
    </section>
  );
}