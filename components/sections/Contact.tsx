'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Headphones } from 'lucide-react';
import ScheduleCallForm from './ScheduleCallForm';

export default function Contact() {
  const [isScheduleCallOpen, setIsScheduleCallOpen] = useState(false);
  const handleWhatsAppClick = () => {
    // WhatsApp number in international format without + or spaces
    const phoneNumber = '27734898331';
    const message = 'Hello, I would like to inquire about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-12 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Get In <span className="text-primary-500">Touch</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to experience lightning-fast internet? Contact us today and our team will 
            help you find the perfect plan for your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start group">
                <div className="bg-primary-500 rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="ml-2.5">
                  <h4 className="text-base font-semibold text-gray-900 mb-1">Phone</h4>
                  <div className="space-y-1">
                    <div>
                      <p className="text-gray-600 text-sm">(+27) 73 489 8331</p>
                      <p className="text-gray-500 text-xs">WhatsApp Number - Instant Support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start group">
                <div className="bg-accent-blue rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div className="ml-2.5">
                  <h4 className="text-base font-semibold text-gray-900 mb-1">Email</h4>
                  <div className="space-y-1">
                    <div>
                      <p className="text-gray-600 text-sm">info@9gspeed.co.za</p>
                      <p className="text-gray-500 text-xs">Support Email - Technical assistance</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">sales@9gspeed.co.za</p>
                      <p className="text-gray-500 text-xs">Sales Email - New subscriptions & upgrades</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start group">
                <div className="bg-accent-green rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="ml-2.5">
                  <h4 className="text-base font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600 text-sm">778 Richards Drive, Halfway House,<br />Midrand, 1685</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start group">
                <div className="bg-accent-purple rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div className="ml-2.5">
                  <h4 className="text-base font-semibold text-gray-900 mb-1">Support Hours</h4>
                  <p className="text-gray-600 text-sm">24/7 Technical Support</p>
                  <p className="text-gray-600 text-sm">Sales: Mon-Fri 8AM-8PM</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 space-y-2">
              <button 
                onClick={handleWhatsAppClick}
                className="w-full bg-primary-500 text-white py-2.5 px-4 rounded-lg font-semibold text-sm hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <MessageCircle className="w-3 h-3 mr-2" />
                Start Live Chat
              </button>
              <button 
                onClick={() => setIsScheduleCallOpen(true)}
                className="w-full bg-white border-2 border-primary-500 text-primary-500 py-2.5 px-4 rounded-lg font-semibold text-sm hover:bg-primary-50 transition-all duration-300 flex items-center justify-center"
              >
                <Headphones className="w-3 h-3 mr-2" />
                Schedule a Call
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Send us a Message</h3>
            
            <form className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Service Interest */}
              <div>
                <label htmlFor="service" className="block text-xs font-medium text-gray-700 mb-1">
                  Interested Service
                </label>
                <select
                  id="service"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm"
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
                <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm"
                  placeholder="Tell us about your internet needs..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-accent-purple text-white py-2.5 px-4 rounded-lg font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Schedule Call Form Modal */}
      <ScheduleCallForm 
        isOpen={isScheduleCallOpen}
        onClose={() => setIsScheduleCallOpen(false)}
      />
    </section>
  );
}