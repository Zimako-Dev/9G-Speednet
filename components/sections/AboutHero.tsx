'use client';

import { ArrowRight, Target, Globe, Zap } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative pt-8 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
            About <span className="text-primary-500">9G Speednet</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Leading South Africa's digital transformation with innovative internet solutions 
            that connect communities, empower businesses, and enable limitless possibilities.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="bg-primary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be one of the best internet service providers in South Africa, 
              setting global standards for excellence.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide professional service to all customers while empowering 
              locals with international standard multi-skilled services.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h3>
            <p className="text-gray-600 leading-relaxed">
              Delivering excellence in every connection, soaring above the competition 
              with dedication and pure perfection.
            </p>
          </div>
        </div>

        {/* Company Introduction */}
        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Connecting South Africa to the Future
            </h2>
            <div className="text-xl text-gray-600 leading-relaxed space-y-6">
              <p>
                9G Speednet stands at the forefront of South Africa's digital revolution, 
                providing cutting-edge internet solutions that bridge the digital divide 
                and unlock opportunities for growth and innovation.
              </p>
              <p>
                Founded with the ambitious vision of becoming one of the best internet 
                service providers in South Africa, we dare to be a global company that 
                sets the standard for excellence, diligence, and success.
              </p>
              <p>
                Our commitment extends beyond just providing internet connectivity. We're 
                dedicated to empowering local communities with world-class, multi-skilled 
                services that meet international standards, ensuring every customer receives 
                professional service whether they're a home user or business.
              </p>
            </div>
            
            <div className="mt-10">
              <button className="inline-flex items-center bg-primary-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Discover Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
}