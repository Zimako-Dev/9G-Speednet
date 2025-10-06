'use client';

import { useState, useEffect } from 'react';
import { Zap, ArrowRight, CheckCircle, Wifi, Download, Upload } from 'lucide-react';

export default function FibreHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate speed counter
    const timer = setInterval(() => {
      setCurrentSpeed(prev => {
        if (prev < 1000) {
          return prev + 50;
        }
        return 1000;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="fibre-hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-gray-50">
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Service Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-primary-50 to-accent-blue/10 border border-primary-200 rounded-full px-4 py-2 mb-6">
              <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-2">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-primary-600 font-semibold text-xs tracking-wide">
                PREMIUM FIBRE SOLUTIONS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Lightning-Fast
              <br />
              <span className="bg-gradient-to-r from-primary-500 via-accent-purple to-accent-blue bg-clip-text text-transparent">
                Fibre
              </span>
              <br />
              Internet
            </h1>

            <p className="text-sm text-gray-600 mb-5 leading-relaxed max-w-xl">
              Experience the ultimate in internet connectivity with our premium fibre solutions. 
              Symmetrical speeds, unlimited data, and 99.9% uptime guarantee for homes and businesses.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                <span className="text-gray-700 font-medium text-sm">Unlimited Data</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                <span className="text-gray-700 font-medium text-sm">Symmetrical Speeds</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-700 font-medium text-sm">99.9% Uptime</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="group bg-primary-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-primary-600 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                onClick={() => {
                  const packagesSection = document.getElementById('fibre-packages');
                  if (packagesSection) {
                    packagesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Packages
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                className="group bg-white border-2 border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:border-primary-300 hover:text-primary-600 flex items-center justify-center"
                onClick={() => {
                  const installationSection = document.getElementById('fibre-installation');
                  if (installationSection) {
                    installationSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Check Availability
              </button>
            </div>
          
          </div>

          {/* Right Column - Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Speed Meter */}
            <div className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-3xl shadow-2xl p-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-accent-blue/10 to-transparent"></div>

              <div className="text-center mb-3 relative">
                <h3 className="text-base font-bold text-gray-900 mb-1">Fibre Speed</h3>
                <p className="text-gray-600 text-xs">Real-time performance</p>
              </div>

              {/* Circular Speed Meter */}
              <div className="relative w-28 h-28 mx-auto mb-3">
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
                    stroke="url(#fibreGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${(currentSpeed / 1000) * 283} 283`}
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient id="fibreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FF69B4" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Speed Display */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">
                      {currentSpeed}
                    </div>
                    <div className="text-xs text-gray-500">Mbps</div>
                  </div>
                </div>
              </div>

              {/* Speed Info */}
              <div className="grid grid-cols-2 gap-2 mb-2 relative">
                <div className="text-center p-1.5 bg-gradient-to-r from-accent-green/10 to-accent-blue/10 rounded-md">
                  <div className="flex items-center justify-center mb-0.5">
                    <Download className="w-2.5 h-2.5 text-accent-green mr-0.5" />
                    <span className="text-xs text-gray-600">Download</span>
                  </div>
                  <div className="text-sm font-bold text-gray-900">{currentSpeed} Mbps</div>
                </div>
                <div className="text-center p-1.5 bg-gradient-to-r from-accent-purple/10 to-primary/10 rounded-md">
                  <div className="flex items-center justify-center mb-0.5">
                    <Upload className="w-2.5 h-2.5 text-accent-purple mr-0.5" />
                    <span className="text-xs text-gray-600">Upload</span>
                  </div>
                  <div className="text-sm font-bold text-gray-900">{currentSpeed} Mbps</div>
                </div>
              </div>

              {/* Status */}
              <div className="text-center">
                <div className="inline-flex items-center bg-accent-green/10 text-accent-green px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-2 animate-pulse"></div>
                  <span className="font-medium">Fibre Connected</span>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gradient-to-br from-primary-500 to-accent-purple p-3 rounded-xl text-white">
                <div className="text-base font-bold mb-0.5">Unlimited</div>
                <p className="text-xs text-white/80">Data Usage</p>
              </div>
              <div className="bg-gradient-to-br from-accent-blue to-accent-green p-3 rounded-xl text-white">
                <div className="text-base font-bold mb-0.5">99.9%</div>
                <p className="text-xs text-white/80">Uptime SLA</p>
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