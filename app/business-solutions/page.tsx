'use client';

import { useState } from 'react';
import { Building, Shield, Zap, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, Wifi, Globe, Headphones, Network, Server, Router } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const plans = [
  {
    name: "Small Business",
    speed: "500 Mbps",
    price: "R1,499",
    features: ["Perfect for 5-20 employees", "Dedicated bandwidth", "Email & cloud apps", "Video conferencing", "Priority support", "Free installation"],
    popular: false
  },
  {
    name: "Growing Business",
    speed: "1 Gbps",
    price: "R2,999",
    features: ["Ideal for 20-50 employees", "Guaranteed speeds", "VPN capabilities", "Advanced security", "24/7 dedicated support", "Backup connection"],
    popular: true
  },
  {
    name: "Enterprise",
    speed: "10+ Gbps",
    price: "Custom",
    features: ["Unlimited scalability", "Redundant connections", "Custom solutions", "On-site support", "SLA guarantees", "Dedicated account manager"],
    popular: false
  }
];

const features = [
  {
    icon: Network,
    title: "Dedicated Bandwidth",
    description: "Guaranteed speeds with dedicated lines ensuring consistent performance during peak business hours.",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Advanced firewall protection, VPN capabilities, and threat monitoring to keep your business data secure.",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description: "24/7 business-grade support with dedicated account managers and faster response times.",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Server,
    title: "Scalable Infrastructure",
    description: "Easily scale your connection as your business grows without service interruption or downtime.",
    color: "from-orange-400 to-red-500"
  }
];

const industries = [
  {
    icon: Building,
    title: "Corporate Offices",
    description: "High-speed connectivity for multi-location businesses with seamless communication capabilities."
  },
  {
    icon: Users,
    title: "Co-working Spaces",
    description: "Reliable internet for shared workspaces with multiple users and varying bandwidth needs."
  },
  {
    icon: Globe,
    title: "Remote Teams",
    description: "Secure VPN solutions enabling remote work with office-grade connectivity and security."
  },
  {
    icon: Router,
    title: "IT Companies",
    description: "Ultra-fast speeds and low latency for software development, hosting, and cloud services."
  }
];

export default function BusinessSolutions() {
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
                <Building className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">BUSINESS SOLUTIONS</span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold mb-5 leading-tight">
                Enterprise-Grade
                <br />
                <span className="text-yellow-300">Connectivity</span>
                <br />
                for Your Business
              </h1>
              
              <p className="text-base text-white/90 mb-6 leading-relaxed">
                Power your business with reliable, high-speed internet solutions designed for 
                enterprise needs. Get dedicated bandwidth, priority support, and scalable infrastructure.
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
                  View Business Plans
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold">99.9%</div>
                  <div className="text-sm text-white/80">SLA Uptime</div>
                </div>
                <div>
                  <div className="text-xl font-bold">24/7</div>
                  <div className="text-sm text-white/80">Business Support</div>
                </div>
                <div>
                  <div className="text-xl font-bold">500+</div>
                  <div className="text-sm text-white/80">Business Clients</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-2">Network Performance</h3>
                  <p className="text-sm text-white/80">Real-time business metrics</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Upload Speed</span>
                    <span className="text-sm font-bold">950 Mbps</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Download Speed</span>
                    <span className="text-sm font-bold">980 Mbps</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Latency</span>
                    <span className="text-sm font-bold">2ms</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div className="text-center mt-6">
                  <div className="inline-flex items-center bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="font-medium text-xs">Optimal Performance</span>
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
              Why Businesses Choose <span className="text-primary-500">9G Speednet</span>?
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our business solutions are designed to meet the demanding needs of modern enterprises, 
              providing reliability, security, and performance you can count on.
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

      {/* Industries Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Trusted by <span className="text-primary-500">Every Industry</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From startups to large enterprises, our solutions adapt to your industry's 
              unique connectivity requirements and compliance needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-r from-primary-500 to-accent-purple w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{industry.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Business <span className="text-primary-500">Plans</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Scalable business solutions with dedicated support, guaranteed speeds, 
              and enterprise-grade security. All plans include free installation and setup.
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
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Choose Plan'}
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
            Ready to Power Your Business?
          </h2>
          <p className="text-base text-white/90 mb-8 leading-relaxed">
            Join hundreds of businesses that trust 9G Speednet for their critical connectivity needs. 
            Get a custom quote tailored to your business requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">(+27) 68 618 5224 - Business Sales</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">sales@9gspeed.co.za</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Get Business Quote
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