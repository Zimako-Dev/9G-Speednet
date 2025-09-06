'use client';

import { useState } from 'react';
import { Zap, TrendingUp, Gauge, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, Wifi, Download, Upload, Monitor, Smartphone, Tv } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const upgradeOptions = [
  {
    name: "Speed Boost",
    currentSpeed: "100 Mbps",
    newSpeed: "500 Mbps",
    price: "R300",
    additionalCost: "per month",
    features: ["5x faster downloads", "Better streaming quality", "Improved video calls", "Faster file uploads", "Same great support"],
    popular: false,
    speedIncrease: "5x faster"
  },
  {
    name: "Ultra Upgrade",
    currentSpeed: "500 Mbps",
    newSpeed: "1000+ Mbps",
    price: "R500",
    additionalCost: "per month",
    features: ["Ultra-fast downloads", "8K streaming ready", "Gaming optimization", "Multiple device support", "Priority bandwidth"],
    popular: true,
    speedIncrease: "2x faster"
  },
  {
    name: "Max Performance",
    currentSpeed: "Any Plan",
    newSpeed: "Custom",
    price: "Custom",
    additionalCost: "pricing",
    features: ["Dedicated bandwidth", "Enterprise-grade speeds", "Custom configuration", "24/7 priority support", "SLA guarantees"],
    popular: false,
    speedIncrease: "Unlimited"
  }
];

const benefits = [
  {
    icon: Download,
    title: "Faster Downloads",
    description: "Download large files, software updates, and media content in a fraction of the time.",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Monitor,
    title: "Better Streaming",
    description: "Enjoy 4K and 8K streaming without buffering on multiple devices simultaneously.",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Upload,
    title: "Quick Uploads",
    description: "Upload content, backup files, and share media with lightning-fast upload speeds.",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Gauge,
    title: "Low Latency Gaming",
    description: "Competitive gaming with ultra-low latency and consistent performance.",
    color: "from-orange-400 to-red-500"
  }
];

const devices = [
  {
    icon: Smartphone,
    title: "Mobile Devices",
    description: "Faster app downloads, seamless video calls, and instant social media uploads."
  },
  {
    icon: Monitor,
    title: "Computers & Laptops",
    description: "Rapid file transfers, quick software updates, and smooth video conferencing."
  },
  {
    icon: Tv,
    title: "Smart TVs & Streaming",
    description: "Buffer-free 4K/8K streaming, instant channel switching, and multiple streams."
  },
  {
    icon: Wifi,
    title: "Smart Home Devices",
    description: "Reliable connectivity for IoT devices, security cameras, and home automation."
  }
];

const speedComparison = [
  {
    activity: "Download 4K Movie (25GB)",
    speed100: "35 minutes",
    speed500: "7 minutes",
    speed1000: "3.5 minutes"
  },
  {
    activity: "Video Call (HD)",
    speed100: "Good quality",
    speed500: "Excellent quality",
    speed1000: "Ultra HD quality"
  },
  {
    activity: "Online Gaming",
    speed100: "30-50ms latency",
    speed500: "10-20ms latency",
    speed1000: "5-10ms latency"
  },
  {
    activity: "Multiple 4K Streams",
    speed100: "1-2 streams",
    speed500: "4-6 streams",
    speed1000: "8+ streams"
  }
];

export default function SpeedUpgrades() {
  const [selectedUpgrade, setSelectedUpgrade] = useState(1);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-16 px-6 bg-gradient-to-br from-primary-500 via-accent-purple to-accent-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #FFD700 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #FF69B4 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-5">
                <Zap className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">SPEED UPGRADES</span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold mb-5 leading-tight">
                Supercharge Your
                <br />
                <span className="text-yellow-300">Internet Speed</span>
                <br />
                Today
              </h1>
              
              <p className="text-base text-white/90 mb-6 leading-relaxed">
                Unlock the full potential of your internet connection with our speed upgrade options. 
                Experience faster downloads, smoother streaming, and better overall performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button 
                  className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  onClick={() => {
                    const upgradesSection = document.getElementById('upgrades');
                    if (upgradesSection) {
                      upgradesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  View Upgrades
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  Check My Speed
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold">10x</div>
                  <div className="text-sm text-white/80">Faster Downloads</div>
                </div>
                <div>
                  <div className="text-xl font-bold">8K</div>
                  <div className="text-sm text-white/80">Streaming Ready</div>
                </div>
                <div>
                  <div className="text-xl font-bold">&lt; 5ms</div>
                  <div className="text-sm text-white/80">Gaming Latency</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-2">Speed Comparison</h3>
                  <p className="text-sm text-white/80">See the difference upgrades make</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Current Plan</span>
                    <span className="text-sm font-bold">100 Mbps</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div className="bg-yellow-400 h-3 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">After Upgrade</span>
                    <span className="text-sm font-bold">1000 Mbps</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div className="bg-green-400 h-3 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <div className="text-2xl font-bold text-yellow-400">10x</div>
                    <div className="text-xs text-white/80">Speed Increase</div>
                  </div>
                </div>
                
                <div className="text-center mt-6">
                  <div className="inline-flex items-center bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    <span className="font-medium text-xs">Massive Performance Boost</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Why Upgrade Your <span className="text-primary-500">Speed</span>?
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the difference faster internet makes in your daily digital activities. 
              From work to entertainment, everything becomes more efficient and enjoyable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.color} p-3 mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Speed Comparison Table */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Speed <span className="text-primary-500">Comparison</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how different speeds perform with common internet activities. 
              Higher speeds mean better performance and more simultaneous activities.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Activity</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">100 Mbps</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">500 Mbps</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-primary-600">1000+ Mbps</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {speedComparison.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.activity}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{row.speed100}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{row.speed500}</td>
                      <td className="px-6 py-4 text-sm text-primary-600 text-center font-semibold">{row.speed1000}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Device Benefits */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Enhanced Performance for <span className="text-primary-500">All Devices</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Speed upgrades benefit every connected device in your home or office, 
              providing better performance across all your digital activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devices.map((device, index) => {
              const IconComponent = device.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-r from-primary-500 to-accent-purple w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{device.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{device.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upgrade Options */}
      <section id="upgrades" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Choose Your <span className="text-primary-500">Speed Upgrade</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Simple upgrades with instant activation. No installation required - just contact us 
              and we'll upgrade your connection remotely within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {upgradeOptions.map((option, index) => (
              <div 
                key={index}
                className={`relative rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
                  option.popular 
                    ? 'border-primary-500 bg-primary-50 shadow-lg' 
                    : 'border-gray-200 bg-white hover:border-primary-300'
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{option.name}</h3>
                  <div className="text-sm text-gray-500 mb-2">
                    From {option.currentSpeed} → {option.newSpeed}
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    {option.price}
                  </div>
                  <div className="text-sm text-gray-500">{option.additionalCost}</div>
                  <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mt-3">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {option.speedIncrease}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    option.popular
                      ? 'bg-primary-500 text-white hover:bg-primary-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-primary-500 hover:text-white'
                  }`}
                >
                  {option.price === 'Custom' ? 'Get Quote' : 'Upgrade Now'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary-500 to-accent-purple text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-5">
            Ready to Experience Lightning Speed?
          </h2>
          <p className="text-base text-white/90 mb-8 leading-relaxed">
            Upgrade your internet speed today and transform your digital experience. 
            Remote activation within 24 hours - no technician visit required!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">(+27) 68 618 5224 - Speed Upgrades</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">upgrades@9gspeed.co.za</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105">
              Upgrade My Speed
            </button>
            <Link href="/" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 inline-flex items-center justify-center">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}