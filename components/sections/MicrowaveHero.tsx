'use client';

import { useState, useEffect } from 'react';
import { Satellite, ArrowRight, CheckCircle, Radio, Zap, Signal } from 'lucide-react';

export default function MicrowaveHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [signalStrength, setSignalStrength] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate signal strength
    const timer = setInterval(() => {
      setSignalStrength(prev => {
        if (prev < 100) {
          return prev + 2;
        }
        return 100;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="microwave-hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
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
            <div className="inline-flex items-center bg-gradient-to-r from-primary-50 to-accent-purple/10 border border-primary-200 rounded-full px-6 py-3 mb-8">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-3">
                <Satellite className="w-4 h-4 text-white" />
              </div>
              <span className="text-primary-600 font-semibold text-sm tracking-wide">
                ENTERPRISE MICROWAVE SOLUTIONS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Point-to-Point
              <br />
              <span className="bg-gradient-to-r from-primary-500 via-accent-purple to-accent-blue bg-clip-text text-transparent">
                Microwave
              </span>
              <br />
              Connectivity
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Experience enterprise-grade point-to-point microwave links for mission-critical applications. 
              Perfect for businesses requiring dedicated, high-speed connectivity with guaranteed performance.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent-green mr-2" />
                <span className="text-gray-700 font-medium">Dedicated Bandwidth</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent-green mr-2" />
                <span className="text-gray-700 font-medium">Low Latency</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent-green mr-2" />
                <span className="text-gray-700 font-medium">Weather Resistant</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-primary-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-primary-600 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                View Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:border-primary-300 hover:text-primary-600 flex items-center justify-center">
                Site Survey
              </button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Signal Visualization */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 mb-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Link Quality</h3>
                <p className="text-gray-600">Point-to-Point Connection</p>
              </div>

              {/* Microwave Link Visualization */}
              <div className="relative h-32 mb-6">
                {/* Tower A */}
                <div className="absolute left-4 bottom-0 flex flex-col items-center">
                  <div className="w-4 h-20 bg-gradient-to-t from-gray-400 to-gray-600 rounded-t-sm mb-2"></div>
                  <div className="w-8 h-3 bg-primary-500 rounded-sm mb-1"></div>
                  <span className="text-xs text-gray-600">Site A</span>
                </div>

                {/* Signal Waves */}
                <div className="absolute left-12 top-8 right-12 flex items-center justify-center">
                  {[1, 2, 3, 4, 5].map((wave) => (
                    <div
                      key={wave}
                      className={`w-2 h-1 bg-gradient-to-r from-primary-500 to-accent-blue rounded-full mx-1 animate-pulse`}
                      style={{
                        animationDelay: `${wave * 200}ms`,
                        opacity: signalStrength > wave * 20 ? 1 : 0.3
                      }}
                    ></div>
                  ))}
                </div>

                {/* Tower B */}
                <div className="absolute right-4 bottom-0 flex flex-col items-center">
                  <div className="w-4 h-20 bg-gradient-to-t from-gray-400 to-gray-600 rounded-t-sm mb-2"></div>
                  <div className="w-8 h-3 bg-primary-500 rounded-sm mb-1"></div>
                  <span className="text-xs text-gray-600">Site B</span>
                </div>
              </div>

              {/* Signal Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-gradient-to-r from-accent-green/10 to-accent-blue/10 rounded-xl">
                  <Signal className="w-5 h-5 text-accent-green mx-auto mb-1" />
                  <div className="text-lg font-bold text-gray-900">{signalStrength}%</div>
                  <div className="text-sm text-gray-600">Signal Strength</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-r from-accent-purple/10 to-primary/10 rounded-xl">
                  <Zap className="w-5 h-5 text-accent-purple mx-auto mb-1" />
                  <div className="text-lg font-bold text-gray-900">&lt;2ms</div>
                  <div className="text-sm text-gray-600">Latency</div>
                </div>
              </div>

              {/* Status */}
              <div className="text-center">
                <div className="inline-flex items-center bg-accent-green/10 text-accent-green px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-accent-green rounded-full mr-2 animate-pulse"></div>
                  <span className="font-medium">Link Established</span>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary-500 to-accent-purple p-6 rounded-2xl text-white">
                <div className="text-2xl font-bold mb-1">99.99%</div>
                <p className="text-sm text-white/80">Availability</p>
              </div>
              <div className="bg-gradient-to-br from-accent-blue to-accent-green p-6 rounded-2xl text-white">
                <div className="text-2xl font-bold mb-1">1Gbps+</div>
                <p className="text-sm text-white/80">Dedicated Speed</p>
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