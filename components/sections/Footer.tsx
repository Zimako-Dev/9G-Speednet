'use client';

import { Wifi, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-primary-500 rounded-2xl p-3 mr-3">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">
                9G <span className="text-primary-500">Speednet</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience the future of internet connectivity with our premium WiFi services. 
              Lightning-fast speeds, unmatched reliability, and exceptional support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-primary-500 p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-500 p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-500 p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-500 p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-500 p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary-500 transition-colors duration-300">Residential WiFi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-500 transition-colors duration-300">Business Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-500 transition-colors duration-300">Enterprise Networking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-500 transition-colors duration-300">Speed Upgrades</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-500 transition-colors duration-300">Technical Support</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xl font-bold mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary-500 transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-500 transition-colors duration-300">Setup Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-500 transition-colors duration-300">Troubleshooting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-500 transition-colors duration-300">Network Status</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-500 transition-colors duration-300">Contact Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary-500 mr-3" />
                <span className="text-gray-300">1-800-9G-SPEED</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary-500 mr-3" />
                <span className="text-gray-300">support@9gspeednet.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-xl bg-gray-800 border border-gray-700 focus:border-primary-500 focus:outline-none text-white"
                />
                <button className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-r-xl transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} 9G Speednet. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}