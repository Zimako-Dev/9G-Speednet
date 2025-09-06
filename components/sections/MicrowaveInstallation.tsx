'use client';

import { useState } from 'react';
import { CheckCircle, Clock, MapPin, Phone, Users, Wrench, AlertTriangle, Star } from 'lucide-react';

const installationSteps = [
  {
    id: 'survey',
    title: 'Site Survey & Planning',
    duration: '1-2 days',
    description: 'Our engineers conduct a comprehensive site survey to determine optimal antenna placement and signal path.',
    icon: MapPin,
    details: [
      'Line-of-sight analysis using specialized equipment',
      'Structural assessment of mounting locations',
      'Interference analysis and frequency planning',
      'Regulatory compliance verification',
      'Custom installation plan development'
    ]
  },
  {
    id: 'preparation',
    title: 'Equipment Preparation',
    duration: '2-3 days',
    description: 'Professional configuration and testing of all microwave equipment before installation.',
    icon: Wrench,
    details: [
      'Equipment configuration and pre-testing',
      'Antenna calibration and alignment tools',
      'Cable and mounting hardware preparation',
      'Backup equipment allocation',
      'Installation team coordination'
    ]
  },
  {
    id: 'installation',
    title: 'Professional Installation',
    duration: '1-2 days',
    description: 'Certified technicians install and align microwave equipment with precision for optimal performance.',
    icon: Users,
    details: [
      'Secure antenna mounting on towers/buildings',
      'Precise antenna alignment using GPS coordinates',
      'Professional cable management and routing',
      'Indoor equipment installation and configuration',
      'Initial signal testing and optimization'
    ]
  },
  {
    id: 'testing',
    title: 'Testing & Commissioning',
    duration: '1 day',
    description: 'Comprehensive testing ensures your microwave link meets all performance specifications.',
    icon: CheckCircle,
    details: [
      'Signal strength and quality verification',
      'Throughput and latency testing',
      'Redundancy and failover testing',
      'Network integration and routing setup',
      'Customer acceptance testing'
    ]
  }
];

export default function MicrowaveInstallation() {
  const [activeStep, setActiveStep] = useState('survey');

  const activeStepData = installationSteps.find(step => step.id === activeStep);

  return (
    <section className="py-10 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
            Professional <span className="text-primary-500">Installation</span> Process
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Our certified engineers ensure your microwave link is installed with precision 
            and commissioned to deliver optimal performance from day one.
          </p>
        </div>

        {/* Installation Timeline */}
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {installationSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.id} className="flex flex-col items-center lg:flex-1">
                  <button
                    onClick={() => setActiveStep(step.id)}
                    className={`w-10 h-10 rounded-full border-3 flex items-center justify-center mb-2 transition-all duration-300 ${
                      activeStep === step.id
                        ? 'bg-primary-500 border-primary-500 text-white shadow-lg scale-110'
                        : 'bg-white border-gray-300 text-gray-400 hover:border-primary-300'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </button>
                  <div className="text-center">
                    <h3 className={`font-semibold text-xs mb-0.5 ${
                      activeStep === step.id ? 'text-primary-500' : 'text-gray-700'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">{step.duration}</p>
                    <div className={`w-4 h-0.5 mx-auto rounded ${
                      activeStep === step.id ? 'bg-primary-500' : 'bg-gray-300'
                    }`}></div>
                  </div>
                  
                  {index < installationSteps.length - 1 && (
                    <div className="hidden lg:block flex-1 h-0.5 bg-gray-300 mx-3 mt-5"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Details */}
        {activeStepData && (
          <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
            <div className="grid lg:grid-cols-2 gap-4 items-center">
              <div>
                <div className="flex items-center mb-2">
                  {(() => {
                    const IconComponent = activeStepData.icon;
                    return (
                      <div className="bg-primary-500 p-1.5 rounded-lg mr-2">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                    );
                  })()}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{activeStepData.title}</h3>
                    <p className="text-primary-500 font-semibold text-sm">{activeStepData.duration}</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  {activeStepData.description}
                </p>

                <div className="space-y-1.5">
                  <h4 className="text-xs font-semibold text-gray-900">What We Do:</h4>
                  {activeStepData.details.map((detail, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-2.5 h-2.5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl p-3 text-white">
                  <Clock className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="text-base font-bold mb-1">Total Installation Time</h4>
                  <div className="text-xl font-bold mb-1">5-8 Days</div>
                  <p className="text-xs opacity-90">
                    From initial survey to full commissioning
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Installation Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <div className="bg-white rounded-xl shadow-md p-3 text-center">
            <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
              <Star className="w-4 h-4 text-green-600" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">Certified Engineers</h3>
            <p className="text-gray-600 text-xs">
              All installations performed by qualified microwave specialists
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-3 text-center">
            <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
              <Wrench className="w-4 h-4 text-blue-600" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">Professional Tools</h3>
            <p className="text-gray-600 text-xs">
              Specialized equipment for precise antenna alignment
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-3 text-center">
            <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="w-4 h-4 text-purple-600" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">Quality Assurance</h3>
            <p className="text-gray-600 text-xs">
              Comprehensive testing before handover to customer
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-3 text-center">
            <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
              <Phone className="w-4 h-4 text-orange-600" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">Ongoing Support</h3>
            <p className="text-gray-600 text-xs">
              24/7 monitoring and support after installation
            </p>
          </div>
        </div>

        {/* Requirements & Prerequisites */}
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
            Installation Requirements
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                Site Requirements
              </h4>
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-1 h-1 bg-primary-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Clear line-of-sight between locations</span>
                </div>
                <div className="flex items-start">
                  <div className="w-1 h-1 bg-primary-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Suitable mounting structure (roof, tower, or mast)</span>
                </div>
                <div className="flex items-start">
                  <div className="w-1 h-1 bg-primary-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Access to electrical power (220V AC)</span>
                </div>
                <div className="flex items-start">
                  <div className="w-1 h-1 bg-primary-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Indoor space for equipment rack</span>
                </div>
                <div className="flex items-start">
                  <div className="w-1 h-1 bg-primary-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Building/site access permissions</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                <AlertTriangle className="w-3 h-3 text-orange-500 mr-1" />
                Important Considerations
              </h4>
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-1 h-1 bg-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Weather conditions may affect installation schedule</span>
                </div>
                <div className="flex items-start">
                  <div className="w-1 h-1 bg-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Height restrictions and safety regulations apply</span>
                </div>
                <div className="flex items-start">
                  <div className="w-1 h-1 bg-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Radio frequency licensing may be required</span>
                </div>
                <div className="flex items-start">
                  <div className="w-1 h-1 bg-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Backup power solutions recommended</span>
                </div>
                <div className="flex items-start">
                  <div className="w-1 h-1 bg-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Grounding and lightning protection included</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <div className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-xl p-3 text-white">
              <h4 className="text-base font-bold mb-1">Ready to Get Started?</h4>
              <p className="text-xs mb-2 opacity-90">
                Contact us today to schedule your free site survey and receive a detailed installation plan.
              </p>
              <button className="bg-white text-primary-500 px-4 py-1.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
                Schedule Site Survey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}