'use client';

import { useState } from 'react';
import { Radio, Wifi, Building2, Zap, Shield, Eye, ArrowRight } from 'lucide-react';

const technologySteps = [
  {
    id: 'transmission',
    title: 'Point-to-Point Transmission',
    description: 'Microwave links use high-frequency radio waves (typically 6-42 GHz) to transmit data directly between two points without the need for physical cables.',
    icon: Radio,
    details: [
      'Line-of-sight communication between towers',
      'High-frequency radio spectrum utilization',
      'Digital signal processing for data integrity',
      'Minimal atmospheric interference'
    ]
  },
  {
    id: 'equipment',
    title: 'Professional Equipment',
    description: 'Enterprise-grade antennas and transceivers ensure reliable, high-capacity data transmission across distances up to 50km.',
    icon: Wifi,
    details: [
      'Parabolic dish antennas for focused transmission',
      'Weather-resistant outdoor units',
      'Indoor processing equipment',
      'Redundant backup systems'
    ]
  },
  {
    id: 'installation',
    title: 'Strategic Installation',
    description: 'Our certified engineers perform site surveys and install equipment on buildings, towers, or masts to ensure optimal signal quality.',
    icon: Building2,
    details: [
      'Comprehensive site survey and planning',
      'Tower or rooftop mounting solutions',
      'Precise antenna alignment',
      'Professional cable management'
    ]
  },
  {
    id: 'performance',
    title: 'Reliable Performance',
    description: 'Microwave links deliver consistent, high-speed connectivity with enterprise-grade reliability and monitoring.',
    icon: Shield,
    details: [
      '99.9%+ uptime guarantee',
      'Real-time performance monitoring',
      'Automatic fault detection',
      'Rapid issue resolution'
    ]
  }
];

export default function MicrowaveTechnology() {
  const [activeStep, setActiveStep] = useState('transmission');

  const activeStepData = technologySteps.find(step => step.id === activeStep);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            How <span className="text-primary-500">Microwave</span> Technology Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the advanced technology behind our point-to-point microwave links 
            and why they're the preferred choice for enterprise connectivity.
          </p>
        </div>

        {/* Interactive Technology Explorer */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Side - Step Navigation */}
            <div className="p-12 bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Technology Components</h3>
              <div className="space-y-4">
                {technologySteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                        activeStep === step.id
                          ? 'bg-primary-500 text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`p-3 rounded-xl mr-4 ${
                          activeStep === step.id ? 'bg-white/20' : 'bg-primary-100'
                        }`}>
                          <IconComponent className={`w-6 h-6 ${
                            activeStep === step.id ? 'text-white' : 'text-primary-500'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
                          <p className={`text-sm ${
                            activeStep === step.id ? 'text-white/80' : 'text-gray-500'
                          }`}>
                            Step {index + 1} of {technologySteps.length}
                          </p>
                        </div>
                        <ArrowRight className={`w-5 h-5 ${
                          activeStep === step.id ? 'text-white' : 'text-gray-400'
                        }`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Step Details */}
            <div className="p-12">
              {activeStepData && (
                <div>
                  <div className="flex items-center mb-6">
                    {(() => {
                      const IconComponent = activeStepData.icon;
                      return <IconComponent className="w-8 h-8 text-primary-500 mr-4" />;
                    })()}
                    <h3 className="text-3xl font-bold text-gray-900">
                      {activeStepData.title}
                    </h3>
                  </div>
                  
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {activeStepData.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                    {activeStepData.details.map((detail, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        </div>
                        <span className="ml-4 text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ultra-Fast Speeds</h3>
            <p className="text-gray-600 mb-4">
              Achieve symmetrical speeds up to 1Gbps with our advanced microwave technology.
            </p>
            <div className="text-3xl font-bold text-primary-500">Up to 1Gbps</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Line of Sight Range</h3>
            <p className="text-gray-600 mb-4">
              Direct point-to-point connections spanning impressive distances with clear visibility.
            </p>
            <div className="text-3xl font-bold text-primary-500">Up to 50km</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Reliability</h3>
            <p className="text-gray-600 mb-4">
              Industry-leading uptime guarantees with redundant systems and monitoring.
            </p>
            <div className="text-3xl font-bold text-primary-500">99.99% Uptime</div>
          </div>
        </div>

        {/* Advantages Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Choose Microwave Over Other Technologies?</h3>
            <p className="text-xl opacity-90">
              Microwave links offer unique advantages for enterprise connectivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Rapid Deployment</h4>
              <p className="text-sm opacity-90">Install in days, not months like fiber</p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Dedicated Bandwidth</h4>
              <p className="text-sm opacity-90">No sharing with other users</p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Geographic Flexibility</h4>
              <p className="text-sm opacity-90">Connect remote locations easily</p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Radio className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Future-Proof</h4>
              <p className="text-sm opacity-90">Easily upgradeable technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}