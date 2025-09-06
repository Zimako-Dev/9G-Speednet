'use client';

import { useState } from 'react';
import { Wifi, Home, Shield, Zap, Clock, Users, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const plans = [
  {
    name: "Starter",
    speed: "100 Mbps",
    price: "R299",
    features: ["Perfect for small households", "Up to 3 devices", "Basic streaming", "Email & browsing", "24/7 support"],
    popular: false
  },
  {
    name: "Family",
    speed: "500 Mbps",
    price: "R599",
    features: ["Ideal for families", "Up to 8 devices", "4K streaming", "Gaming & work", "Priority support", "Free installation"],
    popular: true
  },
  {
    name: "Premium",
    speed: "1000+ Mbps",
    price: "R899",
    features: ["Ultra-fast for power users", "Unlimited devices", "8K streaming", "Heavy downloads", "Premium support", "Free router upgrade"],
    popular: false
  }
];

const features = [
  {
    icon: Zap,
    title: "Ultra-Fast Speeds",
    description: "Experience lightning-fast internet with speeds up to 1000+ Mbps for seamless streaming, gaming, and working from home.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Home,
    title: "Whole Home Coverage",
    description: "Advanced WiFi 6E technology ensures strong, reliable connection in every corner of your home.",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Secure Network",
    description: "Advanced security protocols protect your family's devices and personal data from online threats.",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Users,
    title: "Multiple Devices",
    description: "Connect all your smart devices without compromising speed - from phones to smart TVs and IoT devices.",
    color: "from-purple-400 to-pink-500"
  }
];

export default function ResidentialWiFi() {
  const [selectedPlan, setSelectedPlan] = useState(1);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-16 px-6 bg-gradient-to-br from-primary-500 via-accent-purple to-accent-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #FF69B4 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #8B5CF6 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-5">
                <Home className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">RESIDENTIAL SOLUTIONS</span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold mb-5 leading-tight">
                Premium WiFi for Your
                <br />
                <span className="text-yellow-300">Smart Home</span>
              </h1>
              
              <p className="text-base text-white/90 mb-6 leading-relaxed">
                Transform your home into a connected hub with our residential WiFi solutions. 
                Experience unparalleled speed, reliability, and coverage for all your family's needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button 
                  className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  onClick={() => {
                    const plansSection = document.getElementById('plans');
                    if (plansSection) {
                      plansSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  View Plans
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold">99.9%</div>
                  <div className="text-sm text-white/80">Uptime</div>
                </div>
                <div>
                  <div className="text-xl font-bold">24/7</div>
                  <div className="text-sm text-white/80">Support</div>
                </div>
                <div>
                  <div className="text-xl font-bold">10K+</div>
                  <div className="text-sm text-white/80">Happy Homes</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-2">Real-Time Speed Test</h3>
                  <p className="text-sm text-white/80">Live performance monitoring</p>
                </div>
                
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="6" />
                    <circle 
                      cx="50" cy="50" r="45" fill="none" stroke="#FFD700" strokeWidth="6" 
                      strokeLinecap="round" strokeDasharray="200 283" 
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">850</div>
                      <div className="text-xs text-white/80">Mbps</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="font-medium text-xs">Excellent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Why Choose Our <span className="text-primary-500">Residential WiFi</span>?
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Designed specifically for modern homes, our WiFi solutions deliver the performance, 
              coverage, and reliability your family needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Choose Your Perfect <span className="text-primary-500">Plan</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Flexible plans designed to fit every household's needs and budget. 
              All plans include free installation and 24/7 support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-primary-500 bg-primary-50 shadow-lg' 
                    : 'border-gray-200 bg-white hover:border-primary-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-1">{plan.price}</div>
                  <div className="text-sm text-gray-500">per month</div>
                  <div className="text-lg font-semibold text-gray-700 mt-2">{plan.speed}</div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary-500 text-white hover:bg-primary-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-primary-500 hover:text-white'
                  }`}
                >
                  Choose Plan
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
            Ready to Upgrade Your Home WiFi?
          </h2>
          <p className="text-base text-white/90 mb-8 leading-relaxed">
            Join thousands of satisfied customers who have transformed their homes with 9G Speednet. 
            Get started today with professional installation and 24/7 support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">(+27) 68 618 5224</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">info@9gspeed.co.za</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Get Free Quote
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