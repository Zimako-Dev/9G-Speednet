'use client';

import { useState } from 'react';
import { Headphones, Clock, MessageCircle, Phone, Mail, Users, CheckCircle, ArrowRight, Search, Book, Video, Download, AlertCircle, HelpCircle, Settings } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const supportOptions = [
  {
    name: "Live Chat Support",
    responseTime: "Instant",
    availability: "24/7",
    description: "Get immediate help from our technical experts through live chat",
    features: ["Real-time assistance", "Screen sharing available", "Technical troubleshooting", "Account management", "Instant responses"],
    icon: MessageCircle,
    color: "from-blue-500 to-cyan-600",
    popular: true
  },
  {
    name: "Phone Support",
    responseTime: "< 2 minutes",
    availability: "24/7",
    description: "Speak directly with our technical support specialists",
    features: ["Voice support", "Complex issue resolution", "Hardware diagnostics", "Network optimization", "Priority queue"],
    icon: Phone,
    color: "from-green-500 to-emerald-600",
    popular: false
  },
  {
    name: "Email Support",
    responseTime: "< 4 hours",
    availability: "24/7",
    description: "Submit detailed technical queries via email for comprehensive solutions",
    features: ["Detailed responses", "File attachments", "Follow-up support", "Technical documentation", "Case tracking"],
    icon: Mail,
    color: "from-purple-500 to-pink-600",
    popular: false
  }
];

const supportCategories = [
  {
    icon: Settings,
    title: "Network Issues",
    description: "Connection problems, slow speeds, Wi-Fi troubleshooting, and network optimization.",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: AlertCircle,
    title: "Hardware Support",
    description: "Router setup, modem issues, equipment replacement, and hardware diagnostics.",
    color: "from-red-400 to-orange-500"
  },
  {
    icon: Users,
    title: "Account Management",
    description: "Billing inquiries, plan changes, account settings, and service modifications.",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: HelpCircle,
    title: "General Inquiries",
    description: "Service information, technical questions, and general assistance needs.",
    color: "from-purple-400 to-pink-500"
  }
];

const resources = [
  {
    icon: Book,
    title: "Knowledge Base",
    description: "Comprehensive guides and tutorials for common issues and setup procedures.",
    link: "#"
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides for router setup, troubleshooting, and optimization.",
    link: "#"
  },
  {
    icon: Download,
    title: "Downloads",
    description: "Router firmware, software tools, and configuration files for your devices.",
    link: "#"
  },
  {
    icon: Search,
    title: "FAQ",
    description: "Frequently asked questions with instant answers to common support queries.",
    link: "#"
  }
];

const commonIssues = [
  {
    issue: "Slow Internet Speed",
    solution: "Check for interference, restart router, run speed test, contact support if issues persist."
  },
  {
    issue: "Wi-Fi Connection Drops",
    solution: "Update device drivers, check router placement, verify password, restart network adapter."
  },
  {
    issue: "Can't Connect to Wi-Fi",
    solution: "Verify network name and password, restart device, forget and reconnect to network."
  },
  {
    issue: "No Internet Access",
    solution: "Check cable connections, restart modem and router, verify account status, contact support."
  }
];

export default function TechnicalSupport() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-16 px-6 bg-gradient-to-br from-primary-500 via-accent-purple to-accent-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #00FFFF 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #FF69B4 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-5">
                <Headphones className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">TECHNICAL SUPPORT</span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold mb-5 leading-tight">
                Expert Technical
                <br />
                <span className="text-cyan-300">Support</span>
                <br />
                When You Need It
              </h1>
              
              <p className="text-base text-white/90 mb-6 leading-relaxed">
                Get professional technical assistance 24/7 from our certified support specialists. 
                We're here to resolve your issues quickly and keep you connected.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button 
                  className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  onClick={() => {
                    const supportSection = document.getElementById('support-options');
                    if (supportSection) {
                      supportSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get Help Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  Browse Resources
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold">24/7</div>
                  <div className="text-sm text-white/80">Support Available</div>
                </div>
                <div>
                  <div className="text-xl font-bold">{'< 2min'}</div>
                  <div className="text-sm text-white/80">Response Time</div>
                </div>
                <div>
                  <div className="text-xl font-bold">98%</div>
                  <div className="text-sm text-white/80">First Call Resolution</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-2">Support Status</h3>
                  <p className="text-sm text-white/80">Real-time support availability</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Live Chat</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-bold text-green-400">Online</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Phone Support</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-bold text-green-400">Available</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Email Support</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-bold text-green-400">Active</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Current Queue</span>
                    <span className="text-sm font-bold">0 minutes</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div className="text-center mt-6">
                  <div className="inline-flex items-center bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="font-medium text-xs">All Systems Operational</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section id="support-options" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Choose Your <span className="text-primary-500">Support Method</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Multiple ways to get the technical help you need. Our certified support specialists 
              are available 24/7 through your preferred communication channel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {supportOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
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
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${option.color} p-4 mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{option.name}</h3>
                    <div className="text-sm text-gray-500 mb-1">Response: {option.responseTime}</div>
                    <div className="text-sm text-gray-500">Available: {option.availability}</div>
                    <p className="text-sm text-gray-600 mt-3">{option.description}</p>
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
                    Start {option.name.split(' ')[0]}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Support <span className="text-primary-500">Categories</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our technical support covers all aspects of your internet service. 
              Get specialized help for your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} p-3 mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Self-Help Resources */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Self-Help <span className="text-primary-500">Resources</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find instant solutions with our comprehensive self-help resources. 
              Available 24/7 for immediate assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-r from-primary-500 to-accent-purple w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{resource.description}</p>
                  <a href={resource.link} className="text-primary-500 hover:text-primary-600 font-semibold text-sm">
                    Access Resource →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Solutions */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Quick <span className="text-primary-500">Solutions</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Common issues and their solutions. Try these steps before contacting support 
              for faster resolution.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-200">
              {commonIssues.map((item, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.issue}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary-500 to-accent-purple text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-5">
            Need Immediate Assistance?
          </h2>
          <p className="text-base text-white/90 mb-8 leading-relaxed">
            Our technical support team is standing by 24/7 to help resolve your issues. 
            Choose your preferred method to get connected with an expert immediately.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <MessageCircle className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Live Chat</h3>
                <p className="text-sm text-white/80">Instant help available</p>
                <button className="mt-3 bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Chat
                </button>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Call Support</h3>
                <p className="text-sm text-white/80">(+27) 68 618 5224</p>
                <p className="text-xs text-white/70">Technical Support Line</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <Mail className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Email Support</h3>
                <p className="text-sm text-white/80">support@9gspeed.co.za</p>
                <p className="text-xs text-white/70">24/7 Technical Support</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300 hover:scale-105">
              Contact Support Now
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