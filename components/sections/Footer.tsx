'use client';

import { Wifi, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-5">
              <div className="bg-primary-500 rounded-xl p-2.5 mr-2.5">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold">
                9G <span className="text-primary-500">Speednet</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-5 leading-relaxed text-sm">
              Experience the future of internet connectivity with our premium WiFi services. 
              Lightning-fast speeds, unmatched reliability, and exceptional support.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-800 hover:bg-primary-500 p-2.5 rounded-full transition-all duration-300 hover:scale-110">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-500 p-2.5 rounded-full transition-all duration-300 hover:scale-110">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-500 p-2.5 rounded-full transition-all duration-300 hover:scale-110">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-500 p-2.5 rounded-full transition-all duration-300 hover:scale-110">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-500 p-2.5 rounded-full transition-all duration-300 hover:scale-110">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-5">Services</h4>
            <ul className="space-y-2.5">
              <li><Link href="/residential-wifi" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-sm">Residential WiFi</Link></li>
              <li><Link href="/business-solutions" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-sm">Business Solutions</Link></li>
              <li><Link href="/enterprise-networking" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-sm">Enterprise Networking</Link></li>
              <li><Link href="/speed-upgrades" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-sm">Speed Upgrades</Link></li>
              <li><Link href="/technical-support" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-sm">Technical Support</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-5">Support</h4>
            <ul className="space-y-2.5">
              <li><Link href="/help-center" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-sm">Help Center</Link></li>
              <li><Link href="/setup-guides" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-sm">Setup Guides</Link></li>
              <li><Link href="/troubleshooting" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-sm">Troubleshooting</Link></li>
              <li><Link href="/network-status" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-sm">Network Status</Link></li>
              <li><Link href="/contact-support" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-sm">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-5">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-primary-500 mr-2.5" />
                <span className="text-gray-300 text-sm">(+27) 68 618 5224</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-primary-500 mr-2.5" />
                <span className="text-gray-300 text-sm">info@9gspeed.co.za</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-semibold mb-2.5 text-sm">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:border-primary-500 focus:outline-none text-white text-sm"
                />
                <button className="bg-primary-500 hover:bg-primary-600 px-3 py-2 rounded-r-lg transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-xs mb-3 md:mb-0">
              © {currentYear} 9G Speednet. All rights reserved.
            </div>
            <div className="flex space-x-5 text-xs">
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