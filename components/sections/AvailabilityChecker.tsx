'use client';

import { useState } from 'react';
import { MapPin, Search, CheckCircle, AlertCircle } from 'lucide-react';

export default function AvailabilityChecker() {
  const [address, setAddress] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<{
    available: boolean;
    services: string[];
    message: string;
  } | null>(null);

  const handleCheck = async () => {
    if (!address.trim()) return;
    
    setIsChecking(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock results based on address
    const mockResult = {
      available: true,
      services: ['Fibre 100Mbps - R399/month', 'Fixed LTE 50Mbps - R399/month'],
      message: 'Great news! High-speed internet is available in your area.'
    };
    
    setResult(mockResult);
    setIsChecking(false);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-accent-blue/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Check <span className="text-primary-500">Availability</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your address to see what high-speed internet options are available in your area
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          {/* Address Input */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your street address, suburb, or postal code"
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-gray-900 placeholder-gray-500"
                onKeyPress={(e) => e.key === 'Enter' && handleCheck()}
              />
            </div>
            <button
              onClick={handleCheck}
              disabled={!address.trim() || isChecking}
              className="px-8 py-4 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center min-w-[140px]"
            >
              {isChecking ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  Check Now
                </>
              )}
            </button>
          </div>

          {/* Results */}
          {result && (
            <div className={`p-6 rounded-xl border-2 ${
              result.available 
                ? 'bg-green-50 border-green-200' 
                : 'bg-red-50 border-red-200'
            }`}>
              <div className="flex items-start">
                {result.available ? (
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-2 ${
                    result.available ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {result.available ? 'Services Available!' : 'Limited Availability'}
                  </h3>
                  <p className={`mb-4 ${
                    result.available ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {result.message}
                  </p>
                  
                  {result.available && result.services.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-medium text-green-800">Available Plans:</h4>
                      {result.services.map((service, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-green-700">{service}</span>
                        </div>
                      ))}
                      
                      <div className="flex flex-col sm:flex-row gap-3 mt-6">
                        <button 
                          className="px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                          onClick={() => {
                            const servicesSection = document.getElementById('services');
                            if (servicesSection) {
                              servicesSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                        >
                          View All Plans
                        </button>
                        <button 
                          className="px-6 py-3 border-2 border-primary-500 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                          onClick={() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                              contactSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                        >
                          Contact Sales
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-gray-600">Coverage Area</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">48hrs</div>
            <div className="text-gray-600">Installation Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}
