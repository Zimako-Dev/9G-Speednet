'use client';

import { useState, useEffect } from 'react';
import { Radio, ArrowRight, CheckCircle, Signal } from 'lucide-react';

export default function FixedLTEHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="fixed-lte-hero" className="relative min-h-screen flex items-start justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #FF69B4 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #8B5CF6 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, #3B82F6 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-primary-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-accent-blue rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-2.5 h-2.5 bg-accent-green rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-accent-purple rounded-full animate-bounce opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Service Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-primary-50 to-accent-blue/10 border border-primary-200 rounded-full px-4 py-2 mb-6">
              <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-2">
                <Radio className="w-4 h-4 text-white" />
              </div>
              <span className="text-primary-600 font-semibold text-xs tracking-wide">
                FIXED LTE SOLUTIONS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Reliable
              <br />
              <span className="bg-gradient-to-r from-primary-500 via-accent-purple to-accent-blue bg-clip-text text-transparent">
                Fixed LTE
              </span>
              <br />
              Connectivity
            </h1>

            <p className="text-sm text-gray-600 mb-5 leading-relaxed max-w-xl">
              Experience fast, reliable internet wherever you are. Perfect for homes and businesses 
              in areas where fibre isn't available. Powered by South Africa's leading networks.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                <span className="text-gray-700 font-medium text-sm">Quick Installation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                <span className="text-gray-700 font-medium text-sm">Multiple Networks</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-700 font-medium text-sm">24/7 Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="group bg-primary-500 text-white px-6 py-3 rounded-2xl font-semibold text-base transition-all duration-300 hover:bg-primary-600 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                onClick={() => {
                  const packagesSection = document.getElementById('lte-packages');
                  if (packagesSection) {
                    packagesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Packages
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                className="group bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-2xl font-semibold text-base transition-all duration-300 hover:border-primary-300 hover:text-primary-600 flex items-center justify-center"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Quote
              </button>
            </div>
          
          </div>

          {/* Right Column - Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Signal Strength Visualization */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 mb-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Signal Strength</h3>
                <p className="text-gray-600 text-sm">Network coverage status</p>
              </div>

              {/* Signal Bars */}
              <div className="flex items-end justify-center space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((bar) => (
                  <div
                    key={bar}
                    className={`bg-gradient-to-t from-accent-green to-accent-blue rounded-sm transition-all duration-1000`}
                    style={{
                      width: '12px',
                      height: `${bar * 10}px`,
                      animationDelay: `${bar * 200}ms`
                    }}
                  ></div>
                ))}
              </div>

              {/* Network Info */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Signal className="w-5 h-5 text-accent-green mr-2" />
                  <span className="text-base font-semibold text-gray-900">Excellent Coverage</span>
                </div>
                <div className="inline-flex items-center bg-accent-green/10 text-accent-green px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-2 animate-pulse"></div>
                  <span className="font-medium">Connected to Network</span>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-primary-500 to-accent-purple p-4 rounded-2xl text-white">
                <div className="text-lg font-bold mb-1">4G/LTE</div>
                <p className="text-xs text-white/80">Advanced Technology</p>
              </div>
              <div className="bg-gradient-to-br from-accent-blue to-accent-green p-4 rounded-2xl text-white">
                <div className="text-lg font-bold mb-1">Multi</div>
                <p className="text-xs text-white/80">Network Support</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary-400 to-accent-purple rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-accent-green to-accent-blue rounded-full opacity-20 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}