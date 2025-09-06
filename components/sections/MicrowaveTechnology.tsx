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
    <section className="py-10 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
            How <span className="text-primary-500">Microwave</span> Technology Works
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Discover the advanced technology behind our point-to-point microwave links 
            and why they're the preferred choice for enterprise connectivity.
          </p>
        </div>

        {/* Interactive Technology Explorer */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Side - Step Navigation */}
            <div className="p-6 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Technology Components</h3>
              <div className="space-y-3">
                {technologySteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      className={`w-full text-left p-2.5 rounded-xl transition-all duration-300 ${
                        activeStep === step.id
                          ? 'bg-primary-500 text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`p-1.5 rounded-lg mr-2 ${
                          activeStep === step.id ? 'bg-white/20' : 'bg-primary-100'
                        }`}>
                          <IconComponent className={`w-3 h-3 ${
                            activeStep === step.id ? 'text-white' : 'text-primary-500'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-xs mb-0.5">{step.title}</h4>
                          <p className={`text-xs ${
                            activeStep === step.id ? 'text-white/80' : 'text-gray-500'
                          }`}>
                            Step {index + 1} of {technologySteps.length}
                          </p>
                        </div>
                        <ArrowRight className={`w-2.5 h-2.5 ${
                          activeStep === step.id ? 'text-white' : 'text-gray-400'
                        }`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Step Details */}
            <div className="p-4">
              {activeStepData && (
                <div>
                  <div className="flex items-center mb-2">
                    {(() => {
                      const IconComponent = activeStepData.icon;
                      return <IconComponent className="w-4 h-4 text-primary-500 mr-2" />;
                    })()}
                    <h3 className="text-lg font-bold text-gray-900">
                      {activeStepData.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {activeStepData.description}
                  </p>

                  <div className="space-y-1.5">
                    <h4 className="text-xs font-semibold text-gray-900 mb-2">Key Features:</h4>
                    {activeStepData.details.map((detail, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
                        </div>
                        <span className="ml-2 text-gray-700 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-6 grid md:grid-cols-3 gap-3">
          <div className="bg-white rounded-xl shadow-md p-4 text-center">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Zap className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Ultra-Fast Speeds</h3>
            <p className="text-gray-600 mb-3 text-sm">
              Achieve symmetrical speeds up to 1Gbps with our advanced microwave technology.
            </p>
            <div className="text-xl font-bold text-primary-500">Up to 1Gbps</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 text-center">
            <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Eye className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Line of Sight Range</h3>
            <p className="text-gray-600 mb-3 text-sm">
              Direct point-to-point connections spanning impressive distances with clear visibility.
            </p>
            <div className="text-xl font-bold text-primary-500">Up to 50km</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 text-center">
            <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Enterprise Reliability</h3>
            <p className="text-gray-600 mb-3 text-sm">
              Industry-leading uptime guarantees with redundant systems and monitoring.
            </p>
            <div className="text-xl font-bold text-primary-500">99.99% Uptime</div>
          </div>
        </div>

        {/* Advantages Section */}
        <div className="mt-6 bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl p-4 text-white">
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold mb-1">Why Choose Microwave Over Other Technologies?</h3>
            <p className="text-sm opacity-90">
              Microwave links offer unique advantages for enterprise connectivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="text-center">
              <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <h4 className="font-semibold text-xs mb-1">Rapid Deployment</h4>
              <p className="text-xs opacity-90">Install in days, not months like fiber</p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <h4 className="font-semibold text-xs mb-1">Dedicated Bandwidth</h4>
              <p className="text-xs opacity-90">No sharing with other users</p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                <Building2 className="w-4 h-4 text-white" />
              </div>
              <h4 className="font-semibold text-xs mb-1">Geographic Flexibility</h4>
              <p className="text-xs opacity-90">Connect remote locations easily</p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                <Radio className="w-4 h-4 text-white" />
              </div>
              <h4 className="font-semibold text-xs mb-1">Future-Proof</h4>
              <p className="text-xs opacity-90">Easily upgradeable technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}