'use client';

import { useState } from 'react';
import { Headphones, MessageCircle, Phone, Mail, Clock, User, Send, CheckCircle, ArrowRight, Users, Shield, Zap, Globe } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const contactMethods = [
  {
    name: "Live Chat Support",
    description: "Get instant help from our technical experts",
    responseTime: "< 30 seconds",
    icon: MessageCircle,
    color: "from-blue-500 to-cyan-600",
    features: ["Instant responses", "Screen sharing", "File uploads", "24/7 availability"],
    popular: true
  },
  {
    name: "Phone Support",
    description: "Speak directly with certified specialists",
    responseTime: "< 2 minutes",
    icon: Phone,
    color: "from-green-500 to-emerald-600",
    features: ["Voice support", "Complex troubleshooting", "Hardware diagnostics", "Priority queue"]
  },
  {
    name: "Email Support",
    description: "Submit detailed queries for comprehensive solutions",
    responseTime: "< 4 hours",
    icon: Mail,
    color: "from-purple-500 to-pink-600",
    features: ["Detailed responses", "File attachments", "Case tracking", "Follow-up support"]
  }
];

const supportCategories = [
  {
    icon: Zap,
    title: "Technical Issues",
    description: "Connection problems, speed issues, hardware troubleshooting"
  },
  {
    icon: Users,
    title: "Account Management",
    description: "Billing questions, plan changes, account settings"
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "Network security, password recovery, privacy settings"
  },
  {
    icon: Globe,
    title: "General Inquiries",
    description: "Service information, new connections, general questions"
  }
];

export default function ContactSupport() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    priority: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-16 px-6 bg-gradient-to-br from-primary-500 via-accent-purple to-accent-blue text-white overflow-hidden -mt-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #FFD700 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #00FFFF 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto pt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-5">
                <Headphones className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">CONTACT SUPPORT</span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold mb-5 leading-tight">
                Expert Support
                <br />
                <span className="text-yellow-300">When You</span>
                <br />
                Need It Most
              </h1>
              
              <p className="text-base text-white/90 mb-6 leading-relaxed">
                Our dedicated support team is available 24/7 to help you with any technical issues, 
                account questions, or service inquiries.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button 
                  className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  onClick={() => {
                    const contactSection = document.getElementById('contact-methods');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get Help Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  View FAQ
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold">24/7</div>
                  <div className="text-sm text-white/80">Support Available</div>
                </div>
                <div>
                  <div className="text-xl font-bold">&lt; 2min</div>
                  <div className="text-sm text-white/80">Response Time</div>
                </div>
                <div>
                  <div className="text-xl font-bold">97%</div>
                  <div className="text-sm text-white/80">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-2">Quick Contact</h3>
                  <p className="text-sm text-white/80">Choose your preferred method</p>
                </div>
                
                <div className="space-y-4">
                  <button className="w-full bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-colors text-left">
                    <div className="flex items-center">
                      <MessageCircle className="w-5 h-5 mr-3" />
                      <div>
                        <div className="font-semibold">Live Chat</div>
                        <div className="text-sm text-white/80">Available now - 0 queue</div>
                      </div>
                    </div>
                  </button>
                  
                  <button className="w-full bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-colors text-left">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3" />
                      <div>
                        <div className="font-semibold">Call Support</div>
                        <div className="text-sm text-white/80">(+27) 68 618 5224</div>
                      </div>
                    </div>
                  </button>
                  
                  <button className="w-full bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-colors text-left">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3" />
                      <div>
                        <div className="font-semibold">Email Support</div>
                        <div className="text-sm text-white/80">support@9gspeed.co.za</div>
                      </div>
                    </div>
                  </button>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="font-medium text-xs">All Support Channels Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section id="contact-methods" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Choose Your <span className="text-primary-500">Support Method</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Multiple ways to reach our expert support team. Select the method that works best 
              for your situation and get personalized assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div 
                  key={index}
                  className={`relative rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
                    method.popular 
                      ? 'border-primary-500 bg-primary-50 shadow-lg' 
                      : 'border-gray-200 bg-white hover:border-primary-300'
                  }`}
                >
                  {method.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${method.color} p-4 mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{method.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                    <div className="text-sm text-gray-500">Response: {method.responseTime}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {method.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      method.popular
                        ? 'bg-primary-500 text-white hover:bg-primary-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-primary-500 hover:text-white'
                    }`}
                  >
                    Start {method.name.split(' ')[0]}
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
              Our specialized support teams are trained to handle specific types of issues. 
              Find the right team for your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <div className="bg-primary-500 w-12 h-12 rounded-xl p-3 mb-5 group-hover:scale-110 transition-transform duration-300">
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

      {/* Contact Form */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Submit a <span className="text-primary-500">Support Request</span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Submit a detailed support request and our team will get back to you with a personalized solution.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Support Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm"
                  >
                    <option value="">Select a category</option>
                    <option value="technical">Technical Issues</option>
                    <option value="account">Account Management</option>
                    <option value="security">Security & Privacy</option>
                    <option value="general">General Inquiries</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                    Priority Level *
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    required
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm"
                  >
                    <option value="">Select priority</option>
                    <option value="low">Low - General question</option>
                    <option value="medium">Medium - Service issue</option>
                    <option value="high">High - Service down</option>
                    <option value="urgent">Urgent - Critical issue</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm"
                    placeholder="Brief description of your issue"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Detailed Description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm"
                  placeholder="Please provide as much detail as possible about your issue..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-accent-purple text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit Support Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary-500 to-accent-purple text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-5">
            Ready to Get Help?
          </h2>
          <p className="text-base text-white/90 mb-8 leading-relaxed">
            Our expert support team is standing by to assist you. Choose your preferred contact method 
            and get the help you need right away.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <MessageCircle className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Live Chat</h3>
                <p className="text-sm text-white/80 mb-4">Available 24/7 - Instant support</p>
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
                <p className="text-xs text-white/70 mb-4">Technical Support Line</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <Mail className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Email Support</h3>
                <p className="text-sm text-white/80 mb-1">support@9gspeed.co.za</p>
                <p className="text-xs text-white/70 mb-4">Response within 4 hours</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/technical-support" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
              View All Support Options
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