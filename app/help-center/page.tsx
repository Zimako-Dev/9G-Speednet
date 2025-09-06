'use client';

import { useState } from 'react';
import { Search, Book, Video, Download, MessageCircle, Phone, Mail, ChevronDown, ChevronRight, HelpCircle, Settings, Wifi, CreditCard, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const helpCategories = [
  {
    icon: Settings,
    title: "Getting Started",
    description: "Setup guides, installation instructions, and initial configuration help",
    articles: [
      "How to set up your router",
      "Initial network configuration",
      "Creating your Wi-Fi password",
      "Connecting devices to your network",
      "Router placement best practices"
    ],
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Wifi,
    title: "Network & Connection",
    description: "Wi-Fi issues, connection problems, and network optimization",
    articles: [
      "Troubleshooting connection issues",
      "Improving Wi-Fi signal strength",
      "Speed optimization tips",
      "Network security settings",
      "Multiple device management"
    ],
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: CreditCard,
    title: "Billing & Account",
    description: "Account management, billing questions, and plan information",
    articles: [
      "Understanding your bill",
      "Payment methods and options",
      "Plan upgrades and downgrades",
      "Account settings management",
      "Auto-pay setup guide"
    ],
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "Network security, privacy settings, and protection features",
    articles: [
      "Setting up network security",
      "Parental controls configuration",
      "Guest network setup",
      "Password protection best practices",
      "Privacy settings guide"
    ],
    color: "from-red-500 to-orange-600"
  }
];

const quickHelp = [
  {
    question: "How do I reset my router?",
    answer: "Locate the reset button on your router (usually a small recessed button). Press and hold it for 10-15 seconds while the router is powered on. The lights will flash, indicating the reset is complete."
  },
  {
    question: "Why is my internet slow?",
    answer: "Several factors can affect speed: distance from router, interference from other devices, network congestion, or outdated equipment. Try moving closer to the router, restarting your devices, or contacting support for a speed test."
  },
  {
    question: "How do I change my Wi-Fi password?",
    answer: "Access your router's admin panel by typing 192.168.1.1 in your browser. Log in with your admin credentials, navigate to Wi-Fi settings, and update your network password. Remember to reconnect all your devices."
  },
  {
    question: "What should I do if my internet is not working?",
    answer: "First, check all cable connections. Restart your modem and router by unplugging them for 30 seconds. If the issue persists, check for service outages in your area or contact our support team."
  }
];

const resources = [
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides for common tasks and troubleshooting",
    count: "25+ videos",
    link: "#"
  },
  {
    icon: Download,
    title: "Downloads",
    description: "Router manuals, software tools, and configuration files",
    count: "15+ resources",
    link: "#"
  },
  {
    icon: Book,
    title: "User Manuals",
    description: "Comprehensive guides for all our equipment and services",
    count: "10+ manuals",
    link: "#"
  }
];

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-16 px-6 bg-gradient-to-br from-primary-500 via-accent-purple to-accent-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #FFD700 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #00FFFF 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-5">
            <HelpCircle className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">HELP CENTER</span>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold mb-5 leading-tight">
            How Can We
            <br />
            <span className="text-yellow-300">Help You</span>
            <br />
            Today?
          </h1>
          
          <p className="text-base text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Find answers to your questions, browse helpful guides, or get instant support. 
            Our comprehensive help center is designed to get you back online quickly.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or troubleshooting..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors duration-300">
                Search
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-2xl mx-auto">
            <div>
              <div className="text-xl font-bold">500+</div>
              <div className="text-sm text-white/80">Help Articles</div>
            </div>
            <div>
              <div className="text-xl font-bold">25+</div>
              <div className="text-sm text-white/80">Video Guides</div>
            </div>
            <div>
              <div className="text-xl font-bold">24/7</div>
              <div className="text-sm text-white/80">Support Available</div>
            </div>
            <div>
              <div className="text-xl font-bold">{'< 2min'}</div>
              <div className="text-sm text-white/80">Average Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Browse Help <span className="text-primary-500">Categories</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find the help you need organized by topic. Each category contains detailed guides, 
              troubleshooting steps, and frequently asked questions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer"
                  onClick={() => setSelectedCategory(index)}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} p-3 mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{category.description}</p>
                  <div className="text-primary-500 font-semibold text-sm flex items-center">
                    View Articles
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Featured <span className="text-primary-500">Articles</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Most popular help articles and guides from the selected category.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {helpCategories[selectedCategory].title} Articles
              </h3>
              <div className="space-y-4">
                {helpCategories[selectedCategory].articles.map((article, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {article}
                      </h4>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Help Resources</h3>
              <div className="space-y-4">
                {resources.map((resource, index) => {
                  const IconComponent = resource.icon;
                  return (
                    <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 hover:from-primary-50 hover:to-primary-100 transition-all duration-300 cursor-pointer group">
                      <div className="flex items-start">
                        <div className="bg-primary-500 rounded-lg p-2 mr-4 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{resource.title}</h4>
                          <p className="text-gray-600 text-sm mb-2">{resource.description}</p>
                          <span className="text-primary-600 text-xs font-medium">{resource.count}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Frequently Asked <span className="text-primary-500">Questions</span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Quick answers to the most common questions from our customers.
            </p>
          </div>

          <div className="space-y-4">
            {quickHelp.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  <h3 className="font-semibold text-gray-900">{item.question}</h3>
                  {expandedFAQ === index ? (
                    <ChevronDown className="w-5 h-5 text-primary-500" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary-500 to-accent-purple text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-5">
            Still Need Help?
          </h2>
          <p className="text-base text-white/90 mb-8 leading-relaxed">
            Can't find what you're looking for? Our support team is available 24/7 to assist you 
            with any questions or technical issues you may have.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <MessageCircle className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Live Chat</h3>
                <p className="text-sm text-white/80 mb-4">Get instant help from our experts</p>
                <button className="bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Chat
                </button>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Phone Support</h3>
                <p className="text-sm text-white/80 mb-1">(+27) 68 618 5224</p>
                <p className="text-xs text-white/70 mb-4">Available 24/7</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <Mail className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Email Support</h3>
                <p className="text-sm text-white/80 mb-1">help@9gspeed.co.za</p>
                <p className="text-xs text-white/70 mb-4">Response within 2 hours</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/technical-support" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
              Contact Support
            </Link>
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