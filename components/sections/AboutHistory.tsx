'use client';

import { Calendar, MapPin, Trophy, Users, Zap, Globe } from 'lucide-react';

const milestones = [
  {
    year: '2009',
    title: 'Company Founded',
    description: '9G Speednet was established with a vision to revolutionize internet connectivity in South Africa.',
    icon: MapPin,
    color: 'bg-blue-500'
  },
  {
    year: '2012',
    title: 'First 1,000 Customers',
    description: 'Reached our first major milestone of 1,000 satisfied customers across multiple regions.',
    icon: Users,
    color: 'bg-green-500'
  },
  {
    year: '2015',
    title: 'Fiber Network Launch',
    description: 'Launched our first fiber-optic network, bringing high-speed internet to underserved communities.',
    icon: Zap,
    color: 'bg-purple-500'
  },
  {
    year: '2018',
    title: 'Industry Recognition',
    description: 'Received the Excellence in Telecommunications award for outstanding service delivery.',
    icon: Trophy,
    color: 'bg-yellow-500'
  },
  {
    year: '2021',
    title: 'National Expansion',
    description: 'Expanded our services nationwide, reaching customers in all major cities and rural areas.',
    icon: Globe,
    color: 'bg-red-500'
  },
  {
    year: '2024',
    title: '50,000+ Customers',
    description: 'Proudly serving over 50,000 customers with cutting-edge Fixed LTE, Fibre, and Microwave solutions.',
    icon: Users,
    color: 'bg-primary-500'
  }
];

export default function AboutHistory() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary-500">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to becoming one of South Africa's most trusted internet 
            service providers, our journey has been marked by innovation, growth, and unwavering 
            commitment to excellence.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-purple-600 rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={milestone.year} className={`relative flex items-center ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-primary-500 rounded-full z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${
                    isEven ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}>
                    <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      <div className="flex items-center mb-6">
                        <div className={`${milestone.color} w-12 h-12 rounded-xl flex items-center justify-center mr-4`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary-500">{milestone.year}</div>
                          <div className="text-lg font-semibold text-gray-900">{milestone.title}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Year Badge for larger screens */}
                  <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 ${
                    isEven ? '-translate-y-2' : 'translate-y-2'
                  }`}>
                    <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {milestone.year}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl p-12 text-white text-center">
            <Calendar className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-4xl font-bold mb-6">Looking Ahead</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
              As we continue our journey, we remain committed to our vision of becoming 
              one of the best internet service providers in South Africa. With exciting 
              plans for technological advancement and service expansion, the future holds 
              endless possibilities for 9G Speednet and our valued customers.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2025</div>
                <p className="opacity-90">5G Network Launch</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2026</div>
                <p className="opacity-90">100,000 Customers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2027</div>
                <p className="opacity-90">Continental Expansion</p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-primary-500 mb-2">15+</div>
            <p className="text-gray-600">Years of Excellence</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-green-500 mb-2">50K+</div>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-purple-500 mb-2">99.9%</div>
            <p className="text-gray-600">Uptime Achieved</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
            <p className="text-gray-600">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}