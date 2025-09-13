'use client';

import { Wifi, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-3">
              <div className="bg-primary-500 rounded-lg p-2 mr-2">
                <Wifi className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-bold">
                9G <span className="text-primary-500">Speednet</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-3 leading-relaxed text-xs">
              Experience the future of internet connectivity with our premium WiFi services. 
              Lightning-fast speeds, unmatched reliability, and exceptional support.
            </p>
            <div className="flex space-x-2">
              <a href="#" className="bg-gray-800 hover:bg-primary-500 p-2 rounded-full transition-all duration-300 hover:scale-110">
                <Facebook className="w-3 h-3" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-500 p-2 rounded-full transition-all duration-300 hover:scale-110">
                <Twitter className="w-3 h-3" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-500 p-2 rounded-full transition-all duration-300 hover:scale-110">
                <Instagram className="w-3 h-3" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-500 p-2 rounded-full transition-all duration-300 hover:scale-110">
                <Linkedin className="w-3 h-3" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-500 p-2 rounded-full transition-all duration-300 hover:scale-110">
                <Youtube className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-bold mb-3">Services</h4>
            <ul className="space-y-1.5">
              <li><Link href="/residential-wifi" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-xs">Residential WiFi</Link></li>
              <li><Link href="/business-solutions" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-xs">Business Solutions</Link></li>
              <li><Link href="/enterprise-networking" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-xs">Enterprise Networking</Link></li>
              <li><Link href="/speed-upgrades" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-xs">Speed Upgrades</Link></li>
              <li><Link href="/technical-support" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-xs">Technical Support</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-base font-bold mb-3">Support</h4>
            <ul className="space-y-1.5">
              <li><Link href="/help-center" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-xs">Help Center</Link></li>
              <li><Link href="/setup-guides" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-xs">Setup Guides</Link></li>
              <li><Link href="/troubleshooting" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-xs">Troubleshooting</Link></li>
              <li><Link href="/network-status" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-xs">Network Status</Link></li>
              <li><Link href="/contact-support" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-xs">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-bold mb-3">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-3 h-3 text-primary-500 mr-2" />
                <span className="text-gray-300 text-xs">(+27) 73 489 8331</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-3 h-3 text-primary-500 mr-2" />
                <span className="text-gray-300 text-xs">info@9gspeed.co.za</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-4">
              <h5 className="font-semibold mb-2 text-xs">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-2.5 py-1.5 rounded-l-lg bg-gray-800 border border-gray-700 focus:border-primary-500 focus:outline-none text-white text-xs"
                />
                <button className="bg-primary-500 hover:bg-primary-600 px-2.5 py-1.5 rounded-r-lg transition-colors duration-300">
                  <Mail className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-xs mb-2 md:mb-0">
              © {currentYear} 9G Speednet. All rights reserved.
            </div>
            <div className="flex space-x-4 text-xs">
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