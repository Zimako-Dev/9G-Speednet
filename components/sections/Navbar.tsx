'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="cursor-pointer group">
              <img 
                src="/logo.png" 
                alt="9G Speednet Logo" 
                className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="relative text-gray-700 hover:text-primary-500 transition-colors duration-300 font-medium text-sm group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a href="#services" className="relative text-gray-700 hover:text-primary-500 transition-colors duration-300 font-medium text-sm group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#features" className="relative text-gray-700 hover:text-primary-500 transition-colors duration-300 font-medium text-sm group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="relative text-gray-700 hover:text-primary-500 transition-colors duration-300 font-medium text-sm group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="relative text-gray-700 hover:text-primary-500 transition-colors duration-300 font-medium text-sm group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:from-primary-600 hover:to-primary-700 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg border border-primary-600"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-primary-500 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}