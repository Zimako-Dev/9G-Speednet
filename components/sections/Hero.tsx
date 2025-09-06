'use client';

import { useState, useEffect } from 'react';
import { Wifi, ArrowRight, Play, CheckCircle } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate speed counter
    const timer = setInterval(() => {
      setCurrentSpeed(prev => {
        if (prev < 1000) {
          return prev + 25;
        }
        return 1000;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #FF69B4 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #8B5CF6 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, #3B82F6 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent-blue rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-accent-green rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-accent-purple rounded-full animate-bounce opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Brand Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-primary-50 to-accent-blue/10 border border-primary-200 rounded-full px-6 py-3 mb-8">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-3">
                <Wifi className="w-4 h-4 text-white" />
              </div>
              <span className="text-primary-600 font-semibold text-sm tracking-wide">
                PREMIUM WIFI SOLUTIONS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Ultra-Fast
              <br />
              <span className="bg-gradient-to-r from-primary-500 via-accent-purple to-accent-blue bg-clip-text text-transparent">
                Internet
              </span>
              <br />
              Experience
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Transform your digital life with 9G Speednet's cutting-edge fiber network. 
              Experience unparalleled speed, reliability, and customer service.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent-green mr-2" />
                <span className="text-gray-700 font-medium">99.9% Uptime</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent-green mr-2" />
                <span className="text-gray-700 font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent-green mr-2" />
                <span className="text-gray-700 font-medium">No Data Caps</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group bg-primary-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-primary-600 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:border-primary-300 hover:text-primary-600 flex items-center justify-center">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div>Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div>Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div>Uptime SLA</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Main Visual Container */}
            <div className="relative">
              {/* Speed Visualization */}
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 mb-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Connection Speed</h3>
                  <p className="text-gray-600">Real-time network performance</p>
                </div>

                {/* Speed Meter */}
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background Circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#f3f4f6"
                      strokeWidth="8"
                    />
                    {/* Progress Circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#speedGradient)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${(currentSpeed / 1000) * 283} 283`}
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="50%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Speed Display */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">
                        {currentSpeed}
                      </div>
                      <div className="text-sm text-gray-500">Mbps</div>
                    </div>
                  </div>
                </div>

                {/* Speed Labels */}
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>0 Mbps</span>
                  <span className="font-semibold text-primary-600">Ultra Fast</span>
                  <span>1000+ Mbps</span>
                </div>

                {/* Status */}
                <div className="text-center">
                  <div className="inline-flex items-center bg-accent-green/10 text-accent-green px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-accent-green rounded-full mr-2 animate-pulse"></div>
                    <span className="font-medium">Optimal Performance</span>
                  </div>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-primary-500 to-accent-purple p-6 rounded-2xl text-white">
                  <div className="text-2xl font-bold mb-1">WiFi 6E</div>
                  <p className="text-sm text-white/80">Latest Technology</p>
                </div>
                <div className="bg-gradient-to-br from-accent-blue to-accent-green p-6 rounded-2xl text-white">
                  <div className="text-2xl font-bold mb-1">24/7</div>
                  <p className="text-sm text-white/80">Expert Support</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary-400 to-accent-purple rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-accent-green to-accent-blue rounded-full opacity-20 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}