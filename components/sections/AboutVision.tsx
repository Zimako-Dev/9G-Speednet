'use client';

import { Target, Compass, Star, Globe, Award, Users } from 'lucide-react';

export default function AboutVision() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary-500">Vision & Mission</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driven by purpose, guided by values, and committed to excellence in every connection we make.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Vision Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary-500 to-purple-600 p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="bg-white/20 p-3 rounded-2xl mr-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold">Our Vision</h3>
              </div>
            </div>
            <div className="p-8">
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p className="font-semibold text-xl text-gray-900 mb-4">
                  "To be one of the best internet service providers in South Africa"
                </p>
                <p>
                  9G Speednet dares to be a global company, setting the standard for 
                  excellence, diligence, and success. We envision a future where we soar 
                  above the competition through unwavering commitment to quality and innovation.
                </p>
                <p>
                  Our vision extends beyond South African borders, aiming to establish 
                  international recognition while maintaining our deep roots in serving 
                  local communities with world-class service.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Globe className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Global Standards</p>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Excellence</p>
                </div>
                <div className="text-center">
                  <Star className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Leadership</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="bg-white/20 p-3 rounded-2xl mr-4">
                  <Compass className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold">Our Mission</h3>
              </div>
            </div>
            <div className="p-8">
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p className="font-semibold text-xl text-gray-900 mb-4">
                  "Professional service to all customers with purpose"
                </p>
                <p>
                  To give professional service to all homes and business customers 
                  with a clear motive of empowering locals to be multi-skilled for 
                  international standard services.
                </p>
                <p>
                  We are committed to bridging the digital divide by providing accessible, 
                  reliable internet services while developing local talent and capabilities 
                  that meet global standards.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">All Customers</p>
                </div>
                <div className="text-center">
                  <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Empowerment</p>
                </div>
                <div className="text-center">
                  <Globe className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Global Standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Making a Real Impact</h3>
            <p className="text-xl opacity-90">
              Our vision and mission translate into tangible results for our customers and communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <p className="text-lg opacity-90">Connected Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <p className="text-lg opacity-90">Uptime Guarantee</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-lg opacity-90">Customer Support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-lg opacity-90">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}