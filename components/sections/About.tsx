'use client';

import { Award, Users, Zap, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              About <span className="text-primary-500">9G Speednet</span>
            </h2>
            <div className="space-y-5 text-base text-gray-600 leading-relaxed">
              <p>
                Founded with a mission to revolutionize internet connectivity, 9G Speednet has been 
                at the forefront of delivering cutting-edge WiFi solutions to homes and businesses 
                across the region.
              </p>
              <p>
                We believe that fast, reliable internet isn't a luxury—it's a necessity. That's why 
                we've invested heavily in state-of-the-art infrastructure and innovative technologies 
                to ensure our customers always have the best connection possible.
              </p>
              <p>
                Our team of dedicated professionals works around the clock to maintain network 
                excellence and provide exceptional customer service. We're not just your internet 
                provider; we're your technology partner for the digital age.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <button 
                className="bg-primary-500 text-white px-6 py-3 rounded-xl font-semibold text-base hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={() => {
                  window.location.href = '/about';
                }}
              >
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            {/* Main Image Placeholder */}
            <div className="bg-gradient-to-br from-primary-500 via-accent-purple to-accent-blue rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-base text-white/90 leading-relaxed">
                  To connect communities with lightning-fast, reliable internet that empowers 
                  people to work, learn, play, and create without limitations.
                </p>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-accent-green/20 rounded-full blur-xl"></div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-3 mt-5">
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <Award className="w-6 h-6 text-primary-500 mb-2" />
                <div className="text-xl font-bold text-gray-900 mb-1">8+</div>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <Users className="w-6 h-6 text-accent-green mb-2" />
                <div className="text-xl font-bold text-gray-900 mb-1">13K+</div>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Core <span className="text-primary-500">Values</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Innovation */}
            <div className="text-center group">
              <div className="bg-gradient-to-r from-accent-blue to-accent-purple w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Innovation</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                We continuously invest in the latest technologies to provide cutting-edge 
                solutions that exceed expectations.
              </p>
            </div>

            {/* Reliability */}
            <div className="text-center group">
              <div className="bg-gradient-to-r from-accent-green to-accent-blue w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Reliability</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our robust infrastructure and 99.9% uptime guarantee ensure you're always 
                connected when it matters most.
              </p>
            </div>

            {/* Customer Focus */}
            <div className="text-center group">
              <div className="bg-gradient-to-r from-primary-500 to-accent-purple w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Customer Focus</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every decision we make is centered around delivering exceptional value 
                and service to our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}