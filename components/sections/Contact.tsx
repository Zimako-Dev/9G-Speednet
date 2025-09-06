'use client';

import { Phone, Mail, MapPin, Clock, MessageCircle, Headphones } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-primary-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience lightning-fast internet? Contact us today and our team will 
            help you find the perfect plan for your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start group">
                <div className="bg-primary-500 rounded-2xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">1-800-9G-SPEED (1-800-947-7333)</p>
                  <p className="text-gray-500 text-sm">Available 24/7</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start group">
                <div className="bg-accent-blue rounded-2xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">support@9gspeednet.com</p>
                  <p className="text-gray-500 text-sm">We respond within 1 hour</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start group">
                <div className="bg-accent-green rounded-2xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">123 Innovation Drive<br />Tech Valley, TV 12345</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start group">
                <div className="bg-accent-purple rounded-2xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">Support Hours</h4>
                  <p className="text-gray-600">24/7 Technical Support</p>
                  <p className="text-gray-600">Sales: Mon-Fri 8AM-8PM</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-10 space-y-4">
              <button className="w-full bg-primary-500 text-white py-4 px-6 rounded-2xl font-semibold text-lg hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Live Chat
              </button>
              <button className="w-full bg-white border-2 border-primary-500 text-primary-500 py-4 px-6 rounded-2xl font-semibold text-lg hover:bg-primary-50 transition-all duration-300 flex items-center justify-center">
                <Headphones className="w-5 h-5 mr-2" />
                Schedule a Call
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h3>
            
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Service Interest */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Interested Service
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  <option value="basic">Basic Plan (100 Mbps)</option>
                  <option value="pro">Pro Plan (500 Mbps)</option>
                  <option value="ultra">Ultra Plan (1000+ Mbps)</option>
                  <option value="business">Business Solutions</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your internet needs..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-accent-purple text-white py-4 px-6 rounded-2xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}